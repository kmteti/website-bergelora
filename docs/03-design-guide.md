# 🎨 03 - Design System & Animation Guide

Dokumen ini adalah panduan komprehensif mengenai **Design System, Identitas Visual, Tipografi, Token Bentuk/Kaca, serta Subset Panduan Animasi GSAP ScrollTrigger** di Website Bergelora KMTETI FT UGM.

---

## 🌈 1. Palet Warna Resmi (Color Palette)

Website Bergelora mengusung tema warna segar, modern, dan futuristik yang memadukan identitas resmi Teknik Elektro & Teknologi Informasi UGM dengan semangat "Bergelora":

| Nama Warna | Hex Code / Value | Deskripsi & Penggunaan |
| :--- | :--- | :--- |
| **Primary Blue** | `#0a4c5a` / `#1E5D7B` | Warna identitas utama KMTETI FT UGM |
| **Secondary Green** | `#abd03b` / `#9cbd33` | Aksen cerah penegas "Semangat Bergelora" & tombol CTA |
| **Sky Light Blue** | `#EAF9FF` ➔ `#E1F3FA` | Latar belakang gradient lembut seluruh halaman |
| **Green Glow Blob** | `#C7E07C` (blur) | Aksen ornamen pencahayaan organik sisi kiri |
| **Cyan Glow Blob** | `#64CAEF` (blur) | Aksen ornamen pencahayaan organik sisi kanan |
| **Neutral Base** | `#0f172a` / `#333333` | Teks pekat dan tombol netral gelap |
| **Card Glass Base** | `rgba(255, 255, 255, 0.80)` | Dasar kartu akrilik frosted glass |

### 🧪 Contoh Utility Class Tailwind:
- Teks Judul: `text-primary-500` / `text-[#0a4c5a]`
- Tombol Aksen: `bg-secondary` / `bg-[#abd03b] text-white hover:bg-[#9cbd33]`
- Container Latar Gradasi: `bg-gradient-to-b from-[#EAF9FF] to-[#E1F3FA]`
- Ornamen Cahaya Glow:
  ```html
  <div className="absolute w-[40%] aspect-square rounded-full bg-[#C7E07C] opacity-60 blur-[120px] pointer-events-none" />
  <div className="absolute w-[40%] aspect-square rounded-full bg-[#64CAEF] opacity-60 blur-[120px] pointer-events-none" />
  ```

---

## ✍️ 2. Sistem Tipografi (Typography)

Seluruh teks di Website Bergelora distandarisasi melalui komponen tipografi resmi di [`src/components/elements/Typography.tsx`](file:///d:/Coding/projects/website-bergelora/src/components/elements/Typography.tsx).

### A. Font Families
1. **Heading Font (`font-heading`)**: Digunakan untuk judul besar (`H1`–`H6`). Karakter tebal, tegas, dan modern.
2. **Body Font (`font-sans`)**: Digunakan untuk paragraf teks bodi (`B1`–`B5`). Berorientasi pada kenyamanan baca (*high readability*).

### B. Hierarki Skala Tipografi
| Komponen | Tag HTML | Ukuran Font / Line-height | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| **`H1`** | `<h1>` | `text-4xl md:text-5xl lg:text-6xl font-bold` | Judul Hero Banner & Footer CTA |
| **`H2`** | `<h2>` | `text-3xl sm:text-4xl md:text-5xl font-semibold` | Judul Utama Section Halaman |
| **`H3`** | `<h3>` | `text-2xl sm:text-3xl md:text-4xl font-semibold` | Sub-judul Bagian & Judul Kartu Besar |
| **`H4`** | `<h4>` | `text-lg md:text-xl font-bold` | Nama Orang (Pengurus Kabinet) & Proker |
| **`H5`** | `<h5>` | `text-base md:text-lg font-semibold` | Judul Langkah Form / Tab Aktif |
| **`B1`** | `<p>` | `text-xl md:text-2xl leading-relaxed` | Paragraf Pengantar Hero |
| **`B2`** | `<p>` | `text-lg md:text-xl leading-relaxed` | Deskripsi Sub-hero & Lead Paragraph |
| **`B3`** | `<p>` | `text-base md:text-lg leading-normal` | Deskripsi Section & Teks Kartu Standar |
| **`B4`** | `<p>` | `text-sm md:text-base leading-normal` | Paragraf FAQ, Sub-detail, & Deskripsi Form |
| **`B5`** | `<p>` | `text-xs md:text-sm leading-normal` | Catatan Kaki, Label Input, & Hak Cipta |

> ⚠️ **Aturan Penting Dev**: Semua komponen `H1`–`H6` dan `B1`–`B5` telah dibungkus `React.forwardRef`. Selalu gunakan komponen ini saat membuat judul baru agar animasi GSAP dapat mengakses elemen DOM tanpa error `Function components cannot be given refs`.

---

## 🪟 3. Token Bentuk, Radius, & Glassmorphism

Untuk menghadirkan estetika *sleek & tactile*, website ini menggunakan aturan kelengkungan yang presisi:

1. **Section Overlap Radius (`rounded-t-[40px]` / `rounded-[40px]`)**:
   - Digunakan pada kontainer besar (`PageOverlap`, Section Divisi/BSO, Section Formulir Kontak).
   - Selalu dipadukan dengan border putih tipis: `border-t-2 border-l-2 border-r-2 border-white`.
2. **Card Radius (`rounded-[24px]` / `rounded-[32px]`)**:
   - Digunakan pada kartu proker, kartu bidang lomba, accordion FAQ, dan kartu profil kabinet.
3. **Pill & Button Radius (`rounded-full` / `rounded-2xl`)**:
   - Digunakan pada tombol aksi, capsule tab switcher, dan tag badge.
4. **Frosted Glass (Akrilik Halus)**:
   - `bg-white/80 backdrop-blur-xs border border-white/80 shadow-xs`
   - Memberikan kedalaman visual tanpa membebani render kartu di perangkat mobile.

---

## 🎬 4. Subset: Panduan Sistem Animasi (GSAP ScrollTrigger)

Animasi di Website Bergelora dirancang dengan filosofi **"Subtle, Snappy, and High-End"** (seperti interaksi produk Apple dan Linear).

### ⚡ Prinsip Utama Animasi:
- **GPU-Only**: Hanya transform (`translateY`, `scale`) dan `opacity`.
- **Zero Jank**: Hindari memanipulasi `height`, `margin`, atau `top` yang memicu *layout reflow*.
- **Snappy Timing**: Durasi `0.5s` – `0.8s` dengan kurva `ease: 'power2.out'` atau `'power3.out'`.
- **Battery & CPU Saver**: Selalu pasang `once: true` pada konfigurasi ScrollTrigger.

### 🌟 Pola 1: Masked Curtain Reveal (Pada Judul & Deskripsi)
Teks terbit meluncur naik dari balik "tirai tak terlihat" (`overflow-hidden` mask) saat masuk ke pandangan layar:

```tsx
// 1. Struktur JSX dengan padding anti-clipping
<div className="overflow-hidden py-2 -my-2 px-1 -mx-1">
  <H2 ref={titleRef} className="text-primary-500 will-change-transform pb-1">
    Judul Section
  </H2>
</div>
<B3 ref={descRef} className="mt-4 will-change-transform">
  Deskripsi penjelas section.
</B3>
```

```typescript
// 2. Timeline GSAP (Judul muncul 0ms, Deskripsi menyusul +200ms)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: headerRef.current,
    start: 'top 85%',
    once: true,
  },
})

tl.fromTo(
  titleRef.current,
  { y: '115%', opacity: 0 },
  { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' },
).fromTo(
  descRef.current,
  { y: 24, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
  '-=0.6', // Jeda 200ms
)
```

> 🛡️ **Anti-Clipping Rule**: Huruf berkaki gantung (seperti 'g', 'j', 'p', 'q', 'y') pada font serif/heading bisa terpotong jika wadah `overflow-hidden` terlalu pas. Selalu pasang `py-2 -my-2 px-1 -mx-1` dan `pb-1` pada wadah judul mask.
> 🛡️ **Tombol & Drop-shadow**: JANGAN letakkan `overflow-hidden` di sekitar tombol berbayangan (`shadow-lg`). Animasikan tombol secara bebas dengan `y: 20, opacity: 0 ➔ y: 0, opacity: 1`.

---

### 🌊 Pola 2: Waterfall Stagger (Pada Kartu & Grid)
Kartu-kartu program kerja, layanan, dan FAQ meluncur naik berurutan seperti gelombang air terjun dari kiri ke kanan:

```typescript
gsap.fromTo(
  '.grid-card-item',
  { y: 30, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.55,
    ease: 'power2.out',
    stagger: 0.06, // 60ms delay per kartu
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 88%',
      once: true,
    },
  },
)
```

> ⚠️ **Aturan Bebas Delay CSS**: Jangan pernah menambahkan kelas CSS `transition-all duration-500` pada elemen yang sedang di-animasikan oleh GSAP. CSS transition akan menahan dan menunda eksekusi GSAP sehingga animasi terasa macet (*laggy*).

---

### 🚫 5. Halaman yang Dikecualikan (Statis & Cepat)
Sesuai prinsip User Experience (UX), ada halaman yang sengaja **TIDAK** diberi animasi scroll:
1. **`/tentang/berita`**: Daftar pencarian dan katalog artikel berita sengaja dibiarkan instan agar pembaca fokus pada berita tanpa hambatan.
2. **Section Panduan di `/kontak`**: Tautan penting booklet tetap statis untuk akses informasi cepat.
