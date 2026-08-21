export interface BSO {
  id: number
  slug: string
  nama: string
  header: string
  logo: string
  detail: string
  tujuan: string
  deskripsi_tujuan: string
  gambar: string[]
}

export const bsoData: BSO[] = [
  {
    id: 1,
    slug: 'magatrika',
    nama: 'Magatrika',
    header: '/images/bso/magatrika/header-magatrika.webp',
    logo: '/logo/bso/magatrika.svg',
    detail: 'Mahasiswa Gadjah Mada Pencinta Listrika',
    tujuan: 'Mengembangkan minat dan bakat di bidang tenaga listrik.',
    deskripsi_tujuan: 'Badan Semi Otonom (BSO) Magatrika (Mahasiswa Gadjah Mada Pencinta Listrika) merupakan wadah bagi mahasiswa DTETI FT UGM untuk mengembangkan minat, bakat, dan kemampuan di bidang keilmuan dan praktik terkait ketenagalistrikan.',
    // TujuanSection punya 8 slot; MGT9.webp sengaja tidak dipakai
    gambar: [
      '/images/bso/magatrika/MGT1.webp',
      '/images/bso/magatrika/MGT2.webp',
      '/images/bso/magatrika/MGT3.webp',
      '/images/bso/magatrika/MGT4.webp',
      '/images/bso/magatrika/MGT5.webp',
      '/images/bso/magatrika/MGT6.webp',
      '/images/bso/magatrika/MGT7.webp',
      '/images/bso/magatrika/MGT8.webp'
    ],
  },
  {
    id: 2,
    slug: 'night-login',
    nama: 'Night Login',
    header: '/images/bso/night-login/header-night-login.webp',
    logo: '/logo/bso/night-login.svg',
    detail: 'Night Login',
    tujuan: 'Menjadi wadah pengembangan skill IT mahasiswa.',
    deskripsi_tujuan: 'Night Login adalah Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi, pemrograman, desain, dan keamanan siber.',
    // 8 slot galeri di TujuanSection, foto NL baru ada 4 -> diulang
    gambar: [
      '/images/bso/night-login/NL1.webp',
      '/images/bso/night-login/NL2.webp',
      '/images/bso/night-login/NL3.webp',
      '/images/bso/night-login/NL4.webp',
      '/images/bso/night-login/NL1.webp',
      '/images/bso/night-login/NL2.webp',
      '/images/bso/night-login/NL3.webp',
      '/images/bso/night-login/NL4.webp'
    ],
  },
  {
    id: 3,
    slug: 'bionce',
    nama: 'Bionce',
    header: '/images/bso/bionce/header-bionce.webp',
    logo: '/logo/bso/bionce.svg',
    detail: 'Biomedical Engineering Club',
    tujuan: 'Mengakomodasi minat di bidang teknik biomedis.',
    deskripsi_tujuan: 'Bionce (Biomedical Engineering Club) adalah komunitas bagi mahasiswa yang tertarik dengan perkembangan dan riset di bidang teknik biomedis.',
    gambar: [
      '/images/bso/bionce/BNC1.webp',
      '/images/bso/bionce/BNC2.webp',
      '/images/bso/bionce/BNC3.webp',
      '/images/bso/bionce/BNC4.webp',
      '/images/bso/bionce/BNC5.webp',
      '/images/bso/bionce/BNC6.webp',
      '/images/bso/bionce/BNC7.webp',
      '/images/bso/bionce/BNC8.webp',
    ],
  },
  {
    id: 4,
    slug: 'ski',
    nama: 'SKI',
    header: '/images/bso/ski/header-ski.webp',
    logo: '/logo/bso/ski-al-hannaan.svg',
    detail: 'Sentra Kerohanian Islam Al-Hannaan',
    tujuan: 'Meningkatkan keimanan dan ketaqwaan.',
    deskripsi_tujuan: 'SKI (Sentra Kerohanian Islam) Al-Hannaan adalah wadah pembinaan rohani Islam dan ukhuwah islamiyah bagi mahasiswa muslim di DTETI.',
    gambar: [
      '/images/bso/ski/SKI1.webp',
      '/images/bso/ski/SKI2.webp',
      '/images/bso/ski/SKI3.webp',
      '/images/bso/ski/SKI4.webp',
      '/images/bso/ski/SKI5.webp',
      '/images/bso/ski/SKI6.webp',
      '/images/bso/ski/SKI7.webp',
      '/images/bso/ski/SKI8.webp',
    ],
  },
  {
    id: 5,
    slug: 'skk',
    nama: 'SKK',
    header: '/images/bso/skk/header-skk.webp',
    logo: '/logo/bso/skk-dteti.svg',
    detail: 'Sentra Kerohanian Kristen/Katolik',
    tujuan: 'Membangun persekutuan mahasiswa Kristiani.',
    deskripsi_tujuan: 'SKK (Sentra Kerohanian Kristen/Katolik) adalah wadah persekutuan dan pelayanan bagi mahasiswa beragama Kristen dan Katolik di DTETI.',
    gambar: [
      '/images/bso/skk/SKK1.webp',
      '/images/bso/skk/SKK2.webp',
      '/images/bso/skk/SKK3.webp',
      '/images/bso/skk/SKK4.webp',
      '/images/bso/skk/SKK5.webp',
      '/images/bso/skk/SKK6.webp',
      '/images/bso/skk/SKK7.webp',
      '/images/bso/skk/SKK8.webp',
    ],
  },
  {
    id: 6,
    slug: 'mpm',
    nama: 'MPM',
    header: '/images/bso/mpm/header-mpm.webp',
    logo: '/logo/kmteti.svg', // Default logo
    detail: 'Majelis Perwakilan Mahasiswa',
    tujuan: 'Menyerap dan menyalurkan aspirasi mahasiswa.',
    deskripsi_tujuan: 'Majelis Perwakilan Mahasiswa (MPM) adalah badan legislatif dan yudikatif di tingkat mahasiswa yang bertugas mengawasi jalannya roda organisasi.',
    gambar: [
      '/images/bso/mpm/MPM1.webp',
      '/images/bso/mpm/MPM2.webp',
      '/images/bso/mpm/MPM3.webp',
      '/images/bso/mpm/MPM4.webp',
      '/images/bso/mpm/MPM5.webp',
      '/images/bso/mpm/MPM6.webp',
      '/images/bso/mpm/MPM7.webp',
      '/images/bso/mpm/MPM8.webp',
    ],
  },
]
