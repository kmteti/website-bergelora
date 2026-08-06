# Formulir Kontak → Google Sheet

Panduan memasang penampung data untuk Formulir Komunikasi Eksternal di `/kontak`.

## Alur data

```
Form /kontak  ──POST──>  /kontak/submit  ──create──>  Postgres (kontak-submissions)
                                          │
                                          └──POST──>  Apps Script  ──appendRow──>  Google Sheet
```

Postgres adalah sumber kebenaran. Sheet adalah cerminan yang dibaca pengurus.
Kalau push ke sheet gagal, pengajuan **tetap tersimpan** dan record-nya ditandai
`sheetStatus: failed` beserta pesan errornya di admin panel.

Redirect WhatsApp tetap jalan seperti sebelumnya, tidak ada yang berubah dari
sisi pengguna.

## File yang terlibat

| File | Peran |
| --- | --- |
| `src/collections/KontakSubmissions.ts` | Koleksi Payload penyimpan pengajuan |
| `app/(frontend)/kontak/submit/route.ts` | Endpoint POST dari form |
| `src/lib/kontak-sheet.ts` | Pengirim ke Apps Script + pemetaan kolom |
| `src/modules/kontak/Kontak.tsx` | Form-nya sendiri |

Endpoint sengaja di `/kontak/submit`, bukan `/api/...`, supaya tidak bentrok
dengan catch-all Payload di `app/(payload)/api/[...slug]/route.ts`.

## Langkah 1 — untuk pemilik sheet

1. Buka Google Sheet yang mau dipakai (boleh sheet kosong).
2. Menu `Extensions` → `Apps Script`.
3. Hapus isi `Code.gs`, tempel kode di bagian [Kode Apps Script](#kode-apps-script)
   di bawah.
4. Ganti nilai `SECRET` dengan string acak bebas. Catat, nanti dipakai di `.env`
   website.
5. Ganti `SHEET_NAME` kalau mau tab selain `Pengajuan`.
6. Klik `Deploy` → `New deployment` → ikon gerigi → `Web app`.
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
7. `Deploy`, lalu setujui permission yang diminta Google.
8. Salin **Web app URL** (bentuknya `https://script.google.com/macros/s/AKfy.../exec`)
   dan kirim ke pengelola website.

> ⚠️ Saat mengubah kode script nanti, pakai `Deploy` → `Manage deployments` →
> ikon pensil → `Version: New version`. Kalau bikin **New deployment**, URL-nya
> berubah dan `.env` website harus ikut diperbarui.

## Langkah 2 — untuk pengelola website

Tambahkan ke `.env` (dan ke environment variable di hosting produksi):

```bash
KONTAK_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/AKfy.../exec"
KONTAK_SHEET_SECRET="string-acak-yang-sama-persis-dengan-di-script"
```

Keduanya hanya dibaca di server (`src/lib/kontak-sheet.ts`), tidak pernah ikut
terkirim ke browser.

Setelah itu jalankan sekali untuk membuat tabel barunya di database:

```bash
pnpm payload migrate:create   # kalau proyek pakai migrasi
pnpm dev                      # dev mode: Payload push schema otomatis
```

## Langkah 3 — uji coba

```bash
curl -X POST http://localhost:3000/kontak/submit \
  -H 'Content-Type: application/json' \
  -d '{
    "nama": "Uji Coba",
    "instansi": "Tes",
    "kategori": "Sponsorship",
    "deskripsi": "Cek koneksi sheet",
    "whatsapp": "081234567890"
  }'
```

Balasan `{"ok":true,"id":1,"sheetSynced":true}` artinya database dan sheet
sama-sama terisi. Kalau `sheetSynced` bernilai `false`, buka record-nya di
`/admin` dan baca field **Pesan Error Sheet**.

## Kalau field form berubah

Script memetakan data lewat **nama header di baris 1**, bukan posisi kolom. Jadi
sheet yang sudah berisi ratusan response tidak perlu dibuat ulang:

- **Tambah field baru** → kolom baru muncul otomatis di ujung kanan. Baris lama
  tetap utuh, selnya kosong di kolom baru itu.
- **Hapus field** → kolom lama dibiarkan apa adanya, cuma tidak diisi lagi. Tidak
  ada data lama yang hilang.
- **Ganti nama field** → dianggap kolom baru. Kalau mau lanjut menulis ke kolom
  lama, ubah dulu teks header di sheet supaya sama persis dengan key barunya.
- **Geser/urutkan ulang kolom di sheet** → aman, pemetaan tidak melihat posisi.
- **Hapus atau ubah baris header** → ini satu-satunya yang merusak pemetaan.
  Jangan diutak-atik langsung.

Nama kolom ditentukan di `buildKontakSheetRow()` pada `src/lib/kontak-sheet.ts`.
Key di object itu = judul kolom di sheet. Menambah field cukup:

1. Tambah field-nya di `src/collections/KontakSubmissions.ts`.
2. Tambah aturannya di `FIELD_RULES` pada `app/(frontend)/kontak/submit/route.ts`.
3. Tambah satu baris di `buildKontakSheetRow()`.
4. Tambah input-nya di `src/modules/kontak/Kontak.tsx`.

## Kode Apps Script

```javascript
const SHEET_NAME = 'Pengajuan'
const SECRET = 'ganti-dengan-string-acak-yang-sama-di-env'

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(30000)

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut({ ok: false, error: 'Body kosong' })
    }

    const body = JSON.parse(e.postData.contents)

    if (body.secret !== SECRET) {
      return jsonOut({ ok: false, error: 'Secret tidak cocok' })
    }

    const row = body.row || {}
    const keys = Object.keys(row)

    if (keys.length === 0) {
      return jsonOut({ ok: false, error: 'Tidak ada data yang dikirim' })
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME)

    // Baris 1 dibaca sebagai header. Pemetaan berdasarkan NAMA kolom,
    // bukan posisi, supaya sheet lama tetap valid saat field berubah.
    let headers = []
    if (sheet.getLastRow() > 0 && sheet.getLastColumn() > 0) {
      headers = sheet
        .getRange(1, 1, 1, sheet.getLastColumn())
        .getValues()[0]
        .map(function (h) {
          return String(h).trim()
        })
        .filter(function (h) {
          return h !== ''
        })
    }

    // Key yang belum punya kolom -> tambahkan header baru di ujung kanan.
    let headerChanged = false
    keys.forEach(function (key) {
      if (headers.indexOf(key) === -1) {
        headers.push(key)
        headerChanged = true
      }
    })

    if (headerChanged || sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers])
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold')
      sheet.setFrozenRows(1)
    }

    const values = headers.map(function (header) {
      return Object.prototype.hasOwnProperty.call(row, header) ? row[header] : ''
    })

    sheet.appendRow(values)

    return jsonOut({ ok: true })
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
```

## Catatan keamanan

- URL Web App bersifat publik (`Who has access: Anyone`). Yang menjaganya adalah
  `SECRET` di body, dan URL + secret itu hanya ada di environment server.
- Kalau secret bocor, cukup ganti nilainya di `Code.gs` dan di `.env`, lalu
  redeploy versi baru lewat `Manage deployments`.
- Endpoint `/kontak/submit` sendiri publik dan belum punya rate limit. Untuk
  sekarang perlindungannya cuma batas panjang tiap field di `FIELD_RULES`.
  Kalau nanti kena spam, tambahkan rate limit atau captcha di route handler.
