/**
 * Meneruskan pengajuan dari Formulir Komunikasi Eksternal ke Google Sheet.
 *
 * Pengiriman lewat Apps Script Web App yang di-deploy oleh pemilik sheet.
 * Script-nya memetakan data berdasarkan NAMA HEADER di baris 1, bukan posisi
 * kolom. Jadi key di `SheetRow` di bawah ini = judul kolom di sheet:
 *
 * - Tambah key baru       -> script bikin kolom baru di ujung kanan, baris lama tetap utuh.
 * - Hapus key             -> kolom lama dibiarkan, cuma tidak diisi lagi.
 * - Ganti nama key        -> dianggap kolom baru. Kalau mau lanjut ke kolom lama,
 *                            ubah dulu teks header di sheet agar sama persis.
 * - Kolom digeser di sheet -> tetap aman, karena pemetaan pakai nama header.
 *
 * Setup dan kode Apps Script-nya ada di docs/kontak-google-sheet.md
 */

export type SheetRow = Record<string, string>

export type SheetSyncResult = { ok: true } | { ok: false; error: string }

const REQUEST_TIMEOUT_MS = 10_000

/** Data pengajuan yang dipetakan jadi satu baris sheet. */
export type KontakSubmissionRow = {
  id: number | string
  nama: string
  instansi: string
  jenisInstansi?: string | null
  kategori: string
  deskripsi: string
  proposal?: string | null
  whatsapp?: string | null
  email?: string | null
  createdAt?: string | null
}

/**
 * Membentuk baris sheet dari satu pengajuan.
 * Key di sini harus sama persis dengan judul kolom yang diinginkan di sheet.
 */
export const buildKontakSheetRow = (doc: KontakSubmissionRow): SheetRow => ({
  'Waktu Submit': doc.createdAt ?? new Date().toISOString(),
  'Nama': doc.nama,
  'Instansi': doc.instansi,
  'Jenis Instansi': doc.jenisInstansi ?? '',
  'Kategori': doc.kategori,
  'Detail Kebutuhan': doc.deskripsi,
  'Link Proposal': doc.proposal ?? '',
  'WhatsApp': doc.whatsapp ?? '',
  'Email': doc.email ?? '',
  'ID Payload': String(doc.id),
})

export const pushKontakToSheet = async (row: SheetRow): Promise<SheetSyncResult> => {
  const url = process.env.KONTAK_SHEET_WEBHOOK_URL
  const secret = process.env.KONTAK_SHEET_SECRET

  if (!url || !secret) {
    return {
      ok: false,
      error: 'KONTAK_SHEET_WEBHOOK_URL / KONTAK_SHEET_SECRET belum diset di environment',
    }
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, row }),
      // Apps Script Web App membalas lewat redirect ke script.googleusercontent.com
      redirect: 'follow',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })

    const text = await res.text()

    if (!res.ok) {
      return { ok: false, error: `Apps Script balas HTTP ${res.status}: ${text.slice(0, 300)}` }
    }

    // Script membalas JSON { ok: boolean, error?: string }.
    // Kalau script belum ter-deploy dengan benar, balasannya HTML login Google.
    try {
      const parsed = JSON.parse(text) as { ok?: boolean; error?: string }
      if (parsed.ok) return { ok: true }
      return { ok: false, error: parsed.error ?? `Balasan tak terduga: ${text.slice(0, 300)}` }
    } catch {
      return {
        ok: false,
        error: `Balasan bukan JSON (cek akses deployment "Anyone"): ${text.slice(0, 300)}`,
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { ok: false, error: message }
  }
}
