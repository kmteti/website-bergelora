# 📦 02 - Payload CMS 3.0 Guide

Dokumen ini adalah panduan teknis mendalam mengenai implementasi, konfigurasi, skema collection, dan pengelolaan data backend menggunakan **Payload CMS 3.0** di Website Bergelora KMTETI.

---

## ⚙️ 1. Arsitektur Payload CMS 3.0

Payload CMS 3.0 terintegrasi langsung (*embedded*) di dalam Next.js 15 App Router tanpa memerlukan proses server terpisah:
- **Admin Panel URL**: `/admin` (dikelola oleh `app/(payload)/admin/[[...segments]]/page.tsx`).
- **REST API URL**: `/api/[...slug]` (dikelola oleh `app/(payload)/api/[...slug]/route.ts`).
- **Editor RichText**: `@payloadcms/richtext-lexical`.
- **Database Adapter**: `@payloadcms/db-postgres` tersambung ke **Supabase PostgreSQL**.
- **Media Storage Adapter**: `@payloadcms/storage-s3` tersambung ke **Supabase S3 Storage**.

Konfigurasi utama terletak pada file [`src/payload.config.ts`](file:///d:/Coding/projects/website-bergelora/src/payload.config.ts).

---

## 🛡️ 2. Cara Mengakses Data: Local API vs Security Rules

Di dalam Next.js Server Components / Server Actions, data selalu diambil menggunakan **Payload Local API** yang berjalan super cepat langsung pada tingkat Node.js:

```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Page() {
  const payload = await getPayload({ config })
  
  // Mengambil data collection 'news'
  const { docs: newsList } = await payload.find({
    collection: 'news',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 10,
  })

  return <div>...</div>
}
```

### ⚠️ Critical Security Rules:
1. **Local API Mengabaikan Access Control Secara Default**:
   - Jika Anda memanggil Local API atas nama pengguna tertentu (*user context*), Anda **WAJIB** menambahkan `overrideAccess: false`:
   ```typescript
   // ❌ RAWAN: Access control diabaikan (berjalan dengan hak admin)
   await payload.find({ collection: 'news', user: currentUser })

   // ✅ AMAN: Hak akses user diberlakukan secara ketat
   await payload.find({ collection: 'news', user: currentUser, overrideAccess: false })
   ```
2. **Transaction Safety di Dalam Hooks**:
   - Saat membuat hook (`afterChange`, `beforeDelete`), selalu teruskan objek `req` ke operasi database bertingkat untuk menjaga integritas transaksi database:
   ```typescript
   afterChange: [
     async ({ doc, req }) => {
       await req.payload.create({
         collection: 'audit-logs',
         data: { action: 'update', docId: doc.id },
         req, // Wajib! Memastikan transaksi atomic
       })
     }
   ]
   ```

---

## 📚 3. Bedah Seluruh Collections

Website Bergelora memiliki 10 Collections terdaftar di `src/collections/`:

### 1. `Users` (`src/collections/Users.ts`)
- **Fungsi**: Autentikasi admin dan pengurus web.
- **Fitur**: Login via email/password, session JWT, Role-Based Access Control (RBAC: `admin`, `editor`, `user`).

### 2. `Media` (`src/collections/Media.ts`)
- **Fungsi**: Penyimpanan berkas media (foto berita, logo divisi, gambar header event).
- **Fitur**: Terhubung ke bucket Supabase S3. Menggunakan library `sharp` untuk kompresi otomatis dan resize thumbnail WebP.

### 3. `News` (`src/collections/News.ts`)
- **Fungsi**: Artikel berita dan publikasi kegiatan KMTETI.
- **Fields Utama**:
  - `title` (string, required): Judul artikel.
  - `slug` (string, unique, indexed): URL slug ramah SEO.
  - `category` (select): Kategori berita (`Kegiatan`, `Prestasi`, `Opini`, `Teknologi`, dll.).
  - `thumbnail` (relationship to `media`): Gambar sampul artikel.
  - `content` (richText Lexical): Editor teks lengkap dengan format heading, bold, quote, list, dan embed gambar.
  - `publishedAt` (date): Waktu penerbitan.
  - `_status`: Status draf atau terbit (`draft` / `published`).

### 4. `Divisi` (`src/collections/Divisi.ts`)
- **Fungsi**: Profil divisi KMTETI.
- **Fields Utama**: `nama`, `slug`, `detail`, `logo` (media), `header` (media), `tujuan`, `deskripsi_tujuan`, `proker` (array: `namaProker`, `deskripsi`, `icon`, `anggota`), `gambar` (galeri foto kegiatan).

### 5. `Bso` (`src/collections/Bso.ts`)
- **Fungsi**: Profil Badan Semi Otonom (Magatrika, Night Login, Bionce, MPM, SKI, SKK).
- **Fields Utama**: Mirip dengan Divisi, mencakup struktur proker, ketua BSO, dan dokumentasi.

### 6. `Events` (`src/collections/Events.ts`)
- **Fungsi**: Event tahunan nasional (Technocorner, FIND IT!, NESCO).
- **Fields Utama**: `nama`, `slug`, `detail`, `header`, `logo`, `tujuan`, `website` (link luar resmi event), `bidangLomba` (array: `nama`, `deskripsi`, `icon`, `subCategories`), `gambar` (galeri).

### 7. `Layanan` (`src/collections/Layanan.ts`)
- **Fungsi**: Direktori layanan akademik, persuratan FT, SOP, dan form aspirasi.
- **Fields Utama**: `namaLayanan`, `deskripsi`, `link`, `kategori` (select: `Link Penting`, `Arsip Divisi`, `Dokumen dan SOP`, dll.), `icon` (string nama ikon Lucide).

### 8. `KontakSubmissions` (`src/collections/KontakSubmissions.ts`)
- **Fungsi**: Database arsip pengajuan kontak eksternal dari form website.
- **Fields Utama**: `nama`, `instansi`, `jenisInstansi`, `kategori`, `divisi`, `deskripsi`, `proposalUrl`, `whatsapp`, `email`, `status` (`unread` / `processed`).

### 9. `Narahubung` (`src/collections/Narahubung.ts`)
- **Fungsi**: Daftar Contact Person (CP) pengurus KMTETI untuk WhatsApp deep-link.
- **Fields Utama**: `nama`, `keterangan` (contoh: "Kadiv Humas"), `whatsapp` (nomor WA berformat internasional `628xxx`).

### 10. `Faq` (`src/collections/Faq.ts`)
- **Fungsi**: Daftar pertanyaan yang sering diajukan di halaman kontak.
- **Fields Utama**: `question` (pertanyaan) dan `answer` (jawaban teks).

---

## ⚡ 4. Type Generation & Import Map

### A. Regenerasi Tipe Data TypeScript
Setiap kali Anda menambah field baru atau mengubah konfigurasi collection di `src/collections/`, Anda **WAJIB** menjalankan:

```bash
npm run generate:types
```

Perintah ini akan memperbarui file [`src/payload-types.ts`](file:///d:/Coding/projects/website-bergelora/src/payload-types.ts). Di dalam kode Next.js, Anda dapat langsung mengimpor tipe data yang aman:

```typescript
import type { News, Divisi, Event, Layanan } from '@/payload-types'
```

### B. Regenerasi Import Map
Payload CMS menggunakan import map untuk mendaftarkan komponen custom admin (server/client components):

```bash
npm run generate:importmap
```

---

## 🗄️ 5. Strategi Migrasi Database (Postgres `push: false`)

Pada [`src/payload.config.ts`](file:///d:/Coding/projects/website-bergelora/src/payload.config.ts), adapter PostgreSQL dikonfigurasi dengan:
```typescript
db: postgresAdapter({
  pool: { connectionString: process.env.DATABASE_URI || '' },
  push: false, // PENTING: Mencegah race condition antar developer
})
```

### 💡 Mengapa `push: false`?
Karena database Supabase digunakan bersama oleh seluruh tim pengembang, jika `push: true`, setiap kali developer menjalankan `next dev`, sistem akan mencoba mengubah skema database pusat secara bersamaan yang dapat memicu *prompt data-loss* interaktif dan menyebabkan server Next.js macet (*hang* dengan error `[object Event]`).

### Cara Menjalankan Migrasi Skema:
1. Buat file migrasi baru:
   ```bash
   npx payload migrate:create
   ```
2. Jalankan migrasi ke database:
   ```bash
   npx payload migrate
   ```
