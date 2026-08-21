# 📝 04 - Form & External Integrations Guide

Dokumen ini menjelaskan arsitektur **Formulir Komunikasi Eksternal**, alur multi-step, sinkronisasi otomatis ke **Google Sheets** via Webhook Apps Script, proteksi **Honeypot Anti-Spam**, dan generator tautan **WhatsApp Deep-Link**.

---

## 🔄 1. Alur Kerja Formulir Multi-Step (`/kontak`)

Formulir kontak eksternal di [`src/modules/kontak/Kontak.tsx`](file:///d:/Coding/projects/website-bergelora/src/modules/kontak/Kontak.tsx) dibagi menjadi 3 tahapan (*stages*) interaktif:

```
[ Pengunjung ]
      │
      ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   Tahap 1    │ ───► │   Tahap 2    │ ───► │   Tahap 3    │
│  Identitas   │      │  Kebutuhan   │      │   Kontak &   │
│   Profil     │      │  & Proposal  │      │  Submit Form │
└──────────────┘      └──────────────┘      └──────────────┘
                                                   │
                                                   ▼
                                        ┌──────────────────────┐
                                        │  Simpan ke Payload   │
                                        │ (KontakSubmissions)  │
                                        │          +           │
                                        │ Sync ke Google Sheet │
                                        └──────────────────────┘
                                                   │
                                                   ▼
                                        ┌──────────────────────┐
                                        │  Pilih Narahubung &  │
                                        │ Redirect ke WhatsApp │
                                        └──────────────────────┘
```

### Rincian Input Form per Tahap:
- **Tahap 1 (Identitas Profil)**:
  - `nama`: Nama lengkap pengaju (Wajib).
  - `instansi`: Nama perusahaan / universitas / organisasi (Wajib).
  - `jenisInstansi`: Kategori instansi (`Perusahaan`, `Universitas/Sekolah`, `Komunitas/Organisasi`, `Media Partner`, `Pribadi`).
- **Tahap 2 (Detail Kebutuhan)**:
  - `kategori`: Jenis kerja sama (`Partnership`, `Sponsorship`, `Media Partner`, `Kunjungan/Studi Banding`, `Permohonan Pembicara/Juri`, `Lainnya`).
  - `divisi`: Divisi KMTETI yang dituju (opsional/otomatis).
  - `deskripsi`: Penjelasan detail agenda dan permohonan kerja sama.
  - `proposal`: Tautan berkas proposal/surat resmi (Google Drive / Cloud Storage).
- **Tahap 3 (Kontak & Konfirmasi)**:
  - `whatsapp`: Nomor WhatsApp aktif pengaju (Wajib).
  - `email`: Alamat surel pengaju (Opsional).

---

## 🛡️ 2. Proteksi Honeypot Anti-Spam (Tanpa Captcha Mengganggu)

Untuk melindungi sistem dari spam bot tanpa merusak pengalaman pengguna (tanpa CAPTCHA tebak gambar yang menyulitkan), formulir ini menerapkan teknik **Honeypot**:

```tsx
{/* Honeypot field (tersembunyi dari user biasa, bot otomatis akan mengisinya) */}
<div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
  <input
    type="text"
    name="_hp_address"
    value={formData._hp}
    onChange={(e) => handleInputChange('_hp', e.target.value)}
    tabIndex={-1}
    autoComplete="off"
  />
</div>
```

### Logika Backend (`app/(frontend)/kontak/submit/route.ts`):
- Jika `_hp_address` terisi nilai apa pun saat formulir di-submit, backend langsung membuang request secara hening (*silent drop*) dengan status `200 OK` palsu, sehingga bot mengira berhasil tanpa pernah mengotori database Payload maupun Google Sheets.

---

## 📊 3. Sinkronisasi Otomatis Google Sheets via Webhook

Setiap pengajuan formulir kontak yang valid otomatis disinkronkan ke **Google Spreadsheet KMTETI** melalui Google Apps Script Web App.

Kode sinkronisasi terletak di [`src/lib/kontak-sheet.ts`](file:///d:/Coding/projects/website-bergelora/src/lib/kontak-sheet.ts).

### A. Format Pemetaan Header Kolom:
Script memetakan data berdasarkan **NAMA HEADER kolom di baris 1**, bukan nomor urut index:

```typescript
export const buildKontakSheetRow = (doc: KontakSubmissionRow): SheetRow => ({
  'Waktu Submit': doc.createdAt ?? new Date().toISOString(),
  'Nama': doc.nama,
  'Instansi': doc.instansi,
  'Jenis Instansi': doc.jenisInstansi ?? '',
  'Kategori': doc.kategori,
  'Divisi Dituju': doc.divisi ?? '',
  'Detail Kebutuhan': doc.deskripsi,
  'Link Proposal': doc.proposal ?? '',
  'WhatsApp': doc.whatsapp ?? '',
  'Email': doc.email ?? '',
  'Narahubung Dipilih': doc.narahubung ?? '',
  'ID Payload': String(doc.id),
})
```

### B. Variabel Lingkungan yang Dibutuhkan:
- `KONTAK_SHEET_WEBHOOK_URL`: URL Web App Apps Script (contoh: `https://script.google.com/macros/s/AKfy.../exec`).
- `KONTAK_SHEET_SECRET`: Token rahasia otentikasi (harus sama persis dengan variabel `SECRET` di dalam script `Code.gs`).

### C. Kode Google Apps Script (`Code.gs` di Google Sheet):
```javascript
const SECRET = 'YOUR_SECRET_TOKEN_HERE';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const rowData = headers.map(header => data.row[header] || '');
    
    sheet.appendRow(rowData);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 💬 4. WhatsApp Deep-Link Engine

Setelah formulir tersimpan di Payload dan Google Sheets, pengguna diarahkan ke tahap pemilihan Narahubung (`stage === 'contact'`).

Fungsi `buildWaUrl(contact)` secara cerdas mengompilasi isian formulir menjadi draf pesan WhatsApp yang rapi, profesional, dan siap kirim:

```typescript
const buildWaUrl = (contact: Narahubung) => {
  const phone = contact.whatsapp.replace(/\D/g, '')
  const text = `Halo ${contact.nama}, saya *${formData.nama}* dari *${formData.instansi}*.
  
Saya telah mengisi formulir kerja sama di Website Bergelora KMTETI dengan rincian:
• *Kategori*: ${formData.kategori}
• *Divisi Dituju*: ${formData.divisi || '-'}
• *Detail*: ${formData.deskripsi}
${formData.proposal ? `• *Link Proposal*: ${formData.proposal}` : ''}

Mohon arahan dan diskusi lebih lanjut. Terima kasih!`

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}
```

Pengguna cukup mengklik narahubung yang diinginkan, dan aplikasi WhatsApp akan terbuka otomatis dengan seluruh data yang sudah tertulis rapi! 🚀
