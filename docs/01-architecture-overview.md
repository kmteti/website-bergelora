# 🏛️ 01 - Architecture & Component Catalog

Dokumen ini menjelaskan arsitektur sistem, pola pemisahan modular, hierarki layout, daftar routing, dan katalog komponen UI reusable di **Website Bergelora KMTETI FT UGM**.

---

## 📂 1. Pola Pemisahan Modular

Kode Website Bergelora dibagi secara terstruktur menjadi beberapa lapisan tanggung jawab (*separation of concerns*):

```
website-bergelora/
├── app/
│   ├── (frontend)/          # Layer Routing Next.js 15 App Router (Server Components & Pages)
│   ├── (payload)/           # Layer Admin Payload CMS (/admin)
│   ├── api/                 # API Handlers Next.js (REST endpoint Payload)
│   ├── layout.tsx           # Root HTML, Font Loader, & Global Providers
│   └── globals.css          # Tailwind CSS v4 root stylesheet & CSS variables
├── src/
│   ├── collections/         # Skema Collection Payload CMS (News, Divisi, BSO, Events, dll.)
│   ├── components/
│   │   ├── elements/        # Reusable Design System UI Elements (PageHeader, Typography, dll.)
│   │   ├── layout/          # Structural Layout Components (Navbar, DefaultLayout, Footer)
│   │   └── ui/              # Base UI Primitives (Button, Select, Accordion, Input)
│   ├── hooks/               # Custom React & Layout Hooks (useNavbarTone, useDimensions)
│   ├── lib/                 # Utility functions, helpers, & API clients (utils, media, kontak-sheet)
│   ├── modules/             # Domain Feature Modules (Logic & UI per halaman spesifik)
│   │   ├── home/            # Homepage sections (Hero, Profile, News, DivisiBSO, Event, Life)
│   │   ├── profile/         # Halaman Profil KMTETI (Visi, Misi, Video, Struktur Kabinet)
│   │   ├── news/            # Halaman Daftar Berita & Detail Artikel Berita
│   │   ├── kalender/        # Halaman Kalender Interaktif Akademik/Organisasi
│   │   ├── divisi/          # Halaman Detail Program Kerja & Galeri Divisi
│   │   ├── bso/             # Halaman Detail Program Kerja & Galeri BSO
│   │   ├── event/           # Halaman Detail Event Nasional & Bidang Lomba
│   │   ├── layanan/         # Halaman Direktori Layanan Publik, SOP, & Dokumen
│   │   └── kontak/          # Halaman Kontak Eksternal & Multi-step Form WhatsApp
│   ├── payload.config.ts    # Main Configuration Payload CMS 3.0
│   └── payload-types.ts     # Auto-generated TypeScript types dari Payload schema
├── docs/                    # Dokumentasi teknis proyek
├── public/                  # Static assets (images, icons, fonts, logo)
└── .env.example             # Template variabel lingkungan
```

### 💡 Prinsip Desain Modular:
- **`app/(frontend)/`** bertindak sebagai **"Orchestrator Routing"**: Mengatur fetching awal data di Server Component, SEO Metadata, dan memasukkannya sebagai props ke modul fitur.
- **`src/modules/`** bertindak sebagai **"Feature Owner"**: Berisi seluruh komponen tampilan, interaktivitas client, state internal, dan animasi GSAP.
- **`src/components/elements/`** bertindak sebagai **"Design System"**: Komponen murni yang dapat digunakan kembali di halaman mana pun tanpa ketergantungan pada business logic tertentu.

---

## 🏗️ 2. Hierarki Layout Website

Halaman di Website Bergelora dibangun mengikuti hierarki visual berjenjang yang konsisten:

```
[ RootLayout ] (app/layout.tsx)
  │
  ├── [ Navbar ] (src/components/layout/Navbar.tsx)
  │     └─ Mendeteksi data-navbar-tone="light|dark" secara real-time saat scrolling
  │
  ├── [ PageHeader ] (Hero Banner Full Width)
  │     └─ Background Foto + Dark Gradient + Icon + Judul H2 + Deskripsi + Nav Buttons
  │
  ├── [ PageOverlap ] (Konten Overlap Melengkung -mt-16)
  │     │  └─ Background lengkung atas (rounded-t-[40px] / rounded-[40px])
  │     │
  │     └── [ DefaultLayout ] (Container Standar)
  │           └─ mx-auto w-full max-w-6xl px-4 md:px-8
  │
  └── [ Footer ] (src/components/layout/Footer.tsx)
        └─ CTA "Connect with Us" + Accordion Menu Navigasi + Hak Cipta
```

---

## 🗺️ 3. Katalog Routing Halaman (16 Routes)

Berikut adalah daftar lengkap seluruh rute yang ada di Website Bergelora:

| Path URL | Tipe Render | File Controller | Sumber Data Utama |
| :--- | :--- | :--- | :--- |
| `/` | Static (SSR Cache) | `app/(frontend)/page.tsx` | Local API Payload (`news`, `divisi`, `events`) + Static Fallback |
| `/tentang/profil` | Static (0ms Instant) | `app/(frontend)/tentang/profil/page.tsx` | Static Data (`src/modules/profile/data/data.ts`) |
| `/tentang/berita` | ISR (`revalidate: 60s`) | `app/(frontend)/tentang/berita/page.tsx` | Collection Payload `news` (Kategori, Pagination, Search) |
| `/tentang/berita/[slug]` | Dynamic Server | `app/(frontend)/tentang/berita/[slug]/page.tsx` | Collection Payload `news` by slug (RichText Lexical) |
| `/kalender` | Static | `app/(frontend)/kalender/page.tsx` | Static Data (`src/modules/kalender/data/events.ts`) |
| `/divisi/[slug]` | Dynamic Server | `app/(frontend)/divisi/[slug]/page.tsx` | Collection Payload `divisi` + Fallback (`src/modules/divisi/data`) |
| `/bso/[slug]` | Dynamic Server | `app/(frontend)/bso/[slug]/page.tsx` | Collection Payload `bso` + Fallback (`src/modules/bso/data`) |
| `/event/[slug]` | Dynamic Server | `app/(frontend)/event/[slug]/page.tsx` | Collection Payload `events` + Fallback (`src/modules/event/data`) |
| `/layanan` | Static Server | `app/(frontend)/layanan/page.tsx` | Collection Payload `layanan` + Fallback static |
| `/kontak` | Static Server | `app/(frontend)/kontak/page.tsx` | Collection `faq` & `narahubung` + Multi-step Client Form |
| `/kontak/panduan/[slug]`| SSG (`generateStaticParams`) | `app/(frontend)/kontak/panduan/[slug]/page.tsx`| Static Data Topics (`src/modules/kontak/data/panduan.ts`) |
| `/kontak/submit` | API Route (POST) | `app/(frontend)/kontak/submit/route.ts` | Endpoint proxy submission Payload + Google Sheets Webhook |
| `/admin` | Dynamic Server | `app/(payload)/admin/[[...segments]]` | Dashboard Payload CMS 3.0 Embedded Panel |
| `/api/[...slug]` | API Route | `app/(payload)/api/[...slug]/route.ts` | REST API Handler Payload CMS |
| `/sitemap.xml` | Generated XML | `app/(frontend)/sitemap.xml/route.ts` | Dynamic XML Sitemap generator |
| `/robots.txt` | Generated TXT | `app/(frontend)/robots.txt/route.ts` | Robots index rules |

---

## 🧰 4. Tabel Katalog Komponen UI Reusable

Seluruh komponen UI bersama diletakkan di `src/components/elements/` dan `src/components/layout/`:

| Nama Komponen | Lokasi File | Props Utama | Fungsi & Deskripsi Penggunaan |
| :--- | :--- | :--- | :--- |
| **`PageHeader`** | `src/components/elements/PageHeader.tsx` | `title`, `description`, `imageSrc`, `iconSrc?`, `leftButton?`, `rightButton?` | Hero banner di bagian atas halaman dengan gambar full width, overlay gelap, ikon, judul, deskripsi, dan tombol navigasi kiri/kanan. Lebar container sejajar `max-w-6xl px-4 md:px-8`. |
| **`PageOverlap`** | `src/components/elements/PageOverlap.tsx` | `children`, `className?` | Wadah konten melengkung (`rounded-t-[40px]`) dengan margin negatif (`-mt-16`) yang menimpa bagian bawah `PageHeader`. |
| **`DefaultLayout`** | `src/components/layout/DefaultLayout.tsx` | `children`, `className?` | Container standar halaman dengan batas `max-w-6xl px-4 md:px-8` yang memastikan seluruh elemen rata tepi secara konsisten. |
| **`Typography`** | `src/components/elements/Typography.tsx` | `H1`–`H6`, `B1`–`B5`, `ref?`, `className?` | Komponen tipografi resmi yang mendukung `React.forwardRef` (wajib untuk animasi GSAP ScrollTrigger). `H` untuk font heading dan `B` untuk body text. |
| **`ExpandableGrid`** | `src/components/elements/ExpandableGrid.tsx` | `children`, `initialLimit`, `step`, `gridClassName`, `moreLabel` | Grid kartu responsif dengan animasi GSAP waterfall stagger instan. Di mobile menampilkan tombol *"Lihat lebih banyak"* untuk ekspansi kartu. |
| **`SearchBar`** | `src/components/elements/SearchBar.tsx` | `value?`, `onValueChange`, `placeholder`, `filterContent?` | Bilah pencarian interaktif dengan dukungan popover dropdown filter kategori kustom. |
| **`StepIndicator`** | `src/components/elements/StepIndicator.tsx` | `currentStep`, `totalSteps`, `onChangeStep` | Indikator langkah lingkaran interaktif bernomor untuk formulir multi-step kontak. |
| **`SectionHeader`** | `src/components/elements/SectionHeader.tsx` | `title`, `description?` | Header penanda sub-bagian dengan garis aksen horisontal. |
| **`Button`** | `src/components/ui/button.tsx` | `variant` (`primary`, `secondary`, `black`, `ghost`), `size` (`default`, `sm`, `lg`, `icon`) | Tombol interaktif berbasis Tailwind dengan dukungan efek hover dan elevation token. |
| **`Select`** | `src/components/ui/select.tsx` | `value`, `onValueChange`, `SelectTrigger`, `SelectContent` | Dropdown pemilih nilai (misal: kategori layanan, pemilih tahun kabinet) dengan animasi popover halus. |
| **`Accordion`** | `src/components/ui/accordion.tsx` | `type`, `collapsible`, `AccordionItem`, `AccordionTrigger` | Komponen buka-tutup collapsible untuk FAQ kontak dan link navigasi footer di mobile. |
| **`Skeleton`** | `src/components/elements/Skeleton.tsx` | `className` | Placeholder animasi denyut (*pulse*) saat konten sedang dimuat secara asinkron. |
