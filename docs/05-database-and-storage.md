# 🗄️ 05 - Database & Storage Architecture (Supabase)

Dokumen ini menjelaskan konfigurasi dan arsitektur penyimpanan data backend di Website Bergelora KMTETI: **PostgreSQL (Supabase)** sebagai database relasional dan **Supabase Storage (S3 Protocol)** sebagai penyimpanan file media.

---

## 🐘 1. Database: PostgreSQL (Supabase)

Website Bergelora menggunakan database **PostgreSQL** yang di-host pada platform cloud **Supabase**.

### A. Adapter Payload CMS
Payload CMS terhubung ke database menggunakan adapter resmi [`@payloadcms/db-postgres`](file:///d:/Coding/projects/website-bergelora/src/payload.config.ts):

```typescript
import { postgresAdapter } from '@payloadcms/db-postgres'

export default buildConfig({
  // ...
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: false, // Wajib false untuk mencegah tabrakan schema tim
  }),
})
```

### B. Format Connection String (`DATABASE_URI`)
Supabase menyediakan dua jenis koneksi:
1. **Connection Pooler (Direkomendasikan untuk Serverless / Next.js)**:
   - Port: `6543` (Transaction mode) / `5432` (Session mode).
   - Format:
     ```
     postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
     ```
   - Pooler mencegah *connection exhaustion* (kehabisan batas koneksi) ketika banyak pengguna mengakses website secara bersamaan.
2. **Direct Connection**:
   - Port: `5432` langsung ke database instance (cocok untuk menjalankan migrasi).

---

## 🗂️ 2. Skema Tabel PostgreSQL di Supabase

Payload CMS secara otomatis membuat tabel-tabel terstruktur di schema `public` PostgreSQL:

| Nama Tabel di PostgreSQL | Collection Payload Terkait | Keterangan |
| :--- | :--- | :--- |
| `users` | `Users` | Akun pengguna admin & password hash |
| `media` | `Media` | Metadata file media, mimetype, ukuran, URL S3 |
| `news` | `News` | Artikel berita, kategori, JSON Lexical editor |
| `divisi` | `Divisi` | Profil divisi, deskripsi, tujuan, galeri |
| `divisi_rels` / `divisi_proker` | `Divisi` (Sub-tabel) | Relasi proker array & media galeri |
| `bso` | `Bso` | Profil BSO, proker, ketua BSO |
| `events` | `Events` | Event Technocorner, FIND IT!, NESCO |
| `layanan` | `Layanan` | Direktori link layanan publik KMTETI |
| `kontak_submissions` | `KontakSubmissions` | Arsip formulir kontak eksternal |
| `narahubung` | `Narahubung` | Daftar kontak WhatsApp pengurus |
| `faq` | `Faq` | Daftar pertanyaan FAQ |
| `payload_migrations` | System | Riwayat eksekusi migrasi skema |

---

## ☁️ 3. Media Storage: Supabase Storage Bucket (S3 API)

File media (gambar header, foto pengurus, logo divisi, gambar berita) **TIDAK** disimpan di database maupun di server lokal, melainkan diunggah ke **Supabase Storage Bucket** menggunakan protokol S3.

### A. Konfigurasi Plugin `@payloadcms/storage-s3`
Di [`src/payload.config.ts`](file:///d:/Coding/projects/website-bergelora/src/payload.config.ts):

```typescript
import { s3Storage } from '@payloadcms/storage-s3'

export default buildConfig({
  // ...
  plugins: [
    s3Storage({
      collections: {
        media: true, // Terhubung ke collection 'media'
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'ap-southeast-1',
        endpoint: process.env.S3_ENDPOINT || '',
        forcePathStyle: true,
      },
    }),
  ],
})
```

### B. Variabel Environment Storage:
- `S3_ENDPOINT`: Endpoint S3 Supabase (`https://[PROJECT_REF].storage.supabase.co/storage/v1/s3`).
- `S3_BUCKET`: Nama bucket Supabase (contoh: `kmteti-bucket`).
- `S3_ACCESS_KEY_ID`: S3 Access Key ID dari dashboard Supabase (*Project Settings -> Storage -> S3 Access Keys*).
- `S3_SECRET_ACCESS_KEY`: S3 Secret Access Key.
- `S3_REGION`: Region server Supabase (`ap-southeast-1`).

### C. Kompresi & Resize Otomatis (`sharp`)
Setiap gambar yang diunggah ke admin panel Payload secara otomatis dioptimasi oleh library `sharp` menjadi format **WebP** dan dibuatkan thumbnail berbagai ukuran tanpa menurunkan kualitas visual secara drastis.

---

## 🛡️ 4. Kebijakan Keamanan & Backup Data

1. **Akses Bucket Supabase**:
   - Bucket media diset sebagai **Public Bucket** agar gambar dapat langsung diakses oleh browser pengunjung melalui CDN Supabase.
   - Hak cipta penulisan (*write/delete*) hanya diberikan kepada service role / kredensial S3 admin yang tersimpan di environment server.
2. **Backup Otomatis Supabase**:
   - Supabase melakukan *daily automated backup* pada database PostgreSQL.
   - Anda juga dapat melakukan backup mandiri (*dump*) sewaktu-waktu melalui CLI Supabase:
     ```bash
     supabase db dump -f backup_kmteti.sql
     ```
3. **Penyimpanan Berkas Besar (Contoh: Booklet PDF ~54MB)**:
   - Jangan menaruh berkas statis berukuran puluhan megabyte di dalam repositori Git / folder `public/`.
   - Unggah langsung berkas besar ke Supabase Storage, lalu pasang URL publiknya di variabel `NEXT_PUBLIC_PARTNERSHIP_BOOKLET_URL`.
