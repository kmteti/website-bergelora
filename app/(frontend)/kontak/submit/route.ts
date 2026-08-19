import { getPayload } from 'payload'
import config from '@payload-config'
import { buildKontakSheetRow, pushKontakToSheet } from '@/lib/kontak-sheet'

// Endpoint ini sengaja TIDAK ditaruh di /api/* supaya tidak bertabrakan dengan
// catch-all milik Payload di app/(payload)/api/[...slug]/route.ts
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type ParsedForm = {
  nama: string
  instansi: string
  jenisInstansi: string
  kategori: string
  divisi: string
  deskripsi: string
  proposal: string
  whatsapp: string
  email: string
  narahubung: string
}

// `key` diikat ke ParsedForm supaya menambah field tidak bisa lupa divalidasi.
type FieldRule = { key: keyof ParsedForm; required: boolean; max: number }

const FIELD_RULES: FieldRule[] = [
  { key: 'nama', required: true, max: 120 },
  { key: 'instansi', required: true, max: 160 },
  { key: 'jenisInstansi', required: false, max: 60 },
  { key: 'kategori', required: true, max: 80 },
  { key: 'divisi', required: false, max: 60 },
  { key: 'deskripsi', required: true, max: 4000 },
  { key: 'proposal', required: false, max: 500 },
  { key: 'whatsapp', required: true, max: 25 },
  { key: 'email', required: false, max: 160 },
  { key: 'narahubung', required: false, max: 120 },
]

const parseForm = (body: unknown): { data: ParsedForm } | { error: string } => {
  if (typeof body !== 'object' || body === null) {
    return { error: 'Body harus berupa object JSON' }
  }

  const raw = body as Record<string, unknown>
  const data = {} as ParsedForm

  for (const rule of FIELD_RULES) {
    const value = raw[rule.key]

    if (value === undefined || value === null || value === '') {
      if (rule.required) return { error: `Field "${rule.key}" wajib diisi` }
      data[rule.key] = ''
      continue
    }

    if (typeof value !== 'string') {
      return { error: `Field "${rule.key}" harus berupa teks` }
    }

    const trimmed = value.trim()

    if (rule.required && trimmed === '') {
      return { error: `Field "${rule.key}" wajib diisi` }
    }

    if (trimmed.length > rule.max) {
      return { error: `Field "${rule.key}" melebihi ${rule.max} karakter` }
    }

    data[rule.key] = trimmed
  }

  return { data }
}

// ─── Anti-Spam: In-Memory Sliding Window Rate Limiter ───────────────────────
// Batasi maksimal 5 submit per 10 menit per IP address untuk mencegah spam bot
// dan melindungi kuota eksekusi harian Google Apps Script.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 menit
const MAX_SUBMISSIONS_PER_WINDOW = 5

const ipSubmissionLog = new Map<string, number[]>()

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  const realIp = req.headers.get('x-real-ip')
  if (realIp) {
    return realIp.trim()
  }
  return '127.0.0.1'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const timestamps = ipSubmissionLog.get(ip) || []

  // Ambil hanya riwayat request dalam window aktif (10 menit terakhir)
  const activeTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)

  if (activeTimestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return true // Rate limited!
  }

  activeTimestamps.push(now)
  ipSubmissionLog.set(ip, activeTimestamps)

  // Bersihkan IP yang sudah kadaluarsa secara berkala agar memory tetap ramping
  if (ipSubmissionLog.size > 1000) {
    for (const [key, list] of ipSubmissionLog.entries()) {
      const valid = list.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
      if (valid.length === 0) {
        ipSubmissionLog.delete(key)
      } else {
        ipSubmissionLog.set(key, valid)
      }
    }
  }

  return false
}

export const POST = async (req: Request) => {
  const clientIp = getClientIp(req)

  // 1. Cek Rate Limit
  if (checkRateLimit(clientIp)) {
    return Response.json(
      { ok: false, error: 'Terlalu banyak permintaan pengajuan kontak. Silakan tunggu beberapa saat lagi.' },
      { status: 429 },
    )
  }

  let body: unknown

  try {
    body = await req.json()
  } catch {
    return Response.json({ ok: false, error: 'JSON tidak valid' }, { status: 400 })
  }

  // 2. Cek Honeypot (Jika bot mengisi field tak kasat mata _hp, buang diam-diam)
  if (typeof body === 'object' && body !== null) {
    const raw = body as Record<string, unknown>
    if (typeof raw._hp === 'string' && raw._hp.trim() !== '') {
      // Return sukses palsu agar bot mengira berhasil tanpa mengeksekusi database/sheet
      return Response.json({ ok: true, id: -1, sheetSynced: false })
    }
  }

  const parsed = parseForm(body)

  if ('error' in parsed) {
    return Response.json({ ok: false, error: parsed.error }, { status: 400 })
  }

  const payload = await getPayload({ config })

  // 1. Simpan dulu ke Postgres. Ini sumber kebenaran; sheet cuma cerminan.
  const doc = await payload.create({
    collection: 'kontak-submissions',
    data: {
      ...parsed.data,
      sheetStatus: 'pending',
    },
    overrideAccess: true,
  })

  // 2. Baru teruskan ke sheet. Sengaja di luar transaksi create supaya panggilan
  //    HTTP eksternal tidak menahan koneksi database, dan supaya sheet tidak
  //    pernah berisi baris yang record-nya batal tersimpan.
  const sync = await pushKontakToSheet(buildKontakSheetRow(doc))

  if (!sync.ok) {
    payload.logger.error(`Gagal push pengajuan kontak #${doc.id} ke sheet: ${sync.error}`)
  }

  await payload.update({
    collection: 'kontak-submissions',
    id: doc.id,
    data: sync.ok
      ? { sheetStatus: 'synced', sheetError: null }
      : { sheetStatus: 'failed', sheetError: sync.error.slice(0, 500) },
    overrideAccess: true,
  })

  // Pengajuan tetap dianggap berhasil selama tersimpan di database.
  // Kegagalan sheet dilaporkan terpisah supaya bisa di-resend dari admin.
  return Response.json({ ok: true, id: doc.id, sheetSynced: sync.ok })
}
