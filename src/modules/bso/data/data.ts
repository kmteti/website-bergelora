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
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/bso/magatrika.svg',
    detail: 'Mahasiswa Gadjah Mada Pencinta Listrika',
    tujuan: 'Mengembangkan minat dan bakat di bidang tenaga listrik.',
    deskripsi_tujuan: 'Badan Semi Otonom (BSO) Magatrika (Mahasiswa Gadjah Mada Pencinta Listrika) merupakan wadah bagi mahasiswa DTETI FT UGM untuk mengembangkan minat, bakat, dan kemampuan di bidang keilmuan dan praktik terkait ketenagalistrikan.',
    gambar: [
      'logo/divisi/adkesma.svg',
      'logo/divisi/bpo.svg',
      'logo/divisi/ep.svg',
      'logo/divisi/humas.svg',
      'logo/divisi/infokom.svg',
      'logo/divisi/mikat.svg',
      'logo/divisi/sosmas.svg',
      'logo/divisi/ws.svg'
    ],
  },
  {
    id: 2,
    slug: 'night-login',
    nama: 'Night Login',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/bso/night-login.svg',
    detail: 'Night Login',
    tujuan: 'Menjadi wadah pengembangan skill IT mahasiswa.',
    deskripsi_tujuan: 'Night Login adalah Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi, pemrograman, desain, dan keamanan siber.',
    gambar: [
      'logo/divisi/adkesma.svg',
      'logo/divisi/bpo.svg',
      'logo/divisi/ep.svg',
      'logo/divisi/humas.svg',
      'logo/divisi/infokom.svg',
      'logo/divisi/mikat.svg',
      'logo/divisi/sosmas.svg',
      'logo/divisi/ws.svg'
    ],
  },
  {
    id: 3,
    slug: 'bionce',
    nama: 'Bionce',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/bso/beacon.svg',
    detail: 'Biomedical Engineering Club',
    tujuan: 'Mengakomodasi minat di bidang teknik biomedis.',
    deskripsi_tujuan: 'Bionce (Biomedical Engineering Club) adalah komunitas bagi mahasiswa yang tertarik dengan perkembangan dan riset di bidang teknik biomedis.',
    gambar: [
      'logo/divisi/adkesma.svg',
      'logo/divisi/bpo.svg',
      'logo/divisi/ep.svg',
      'logo/divisi/humas.svg',
      'logo/divisi/infokom.svg',
      'logo/divisi/mikat.svg',
      'logo/divisi/sosmas.svg',
      'logo/divisi/ws.svg'
    ],
  },
  {
    id: 4,
    slug: 'ski',
    nama: 'SKI',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/bso/ski-al-hannaan.svg',
    detail: 'Sentra Kerohanian Islam Al-Hannaan',
    tujuan: 'Meningkatkan keimanan dan ketaqwaan.',
    deskripsi_tujuan: 'SKI (Sentra Kerohanian Islam) Al-Hannaan adalah wadah pembinaan rohani Islam dan ukhuwah islamiyah bagi mahasiswa muslim di DTETI.',
    gambar: [
      'logo/divisi/adkesma.svg',
      'logo/divisi/bpo.svg',
      'logo/divisi/ep.svg',
      'logo/divisi/humas.svg',
      'logo/divisi/infokom.svg',
      'logo/divisi/mikat.svg',
      'logo/divisi/sosmas.svg',
      'logo/divisi/ws.svg'
    ],
  },
  {
    id: 5,
    slug: 'skk',
    nama: 'SKK',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/bso/skk-dteti.svg',
    detail: 'Sentra Kerohanian Kristen/Katolik',
    tujuan: 'Membangun persekutuan mahasiswa Kristiani.',
    deskripsi_tujuan: 'SKK (Sentra Kerohanian Kristen/Katolik) adalah wadah persekutuan dan pelayanan bagi mahasiswa beragama Kristen dan Katolik di DTETI.',
    gambar: [
      'logo/divisi/adkesma.svg',
      'logo/divisi/bpo.svg',
      'logo/divisi/ep.svg',
      'logo/divisi/humas.svg',
      'logo/divisi/infokom.svg',
      'logo/divisi/mikat.svg',
      'logo/divisi/sosmas.svg',
      'logo/divisi/ws.svg'
    ],
  },
  {
    id: 6,
    slug: 'mpm',
    nama: 'MPM',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/kmteti.svg', // Default logo
    detail: 'Majelis Perwakilan Mahasiswa',
    tujuan: 'Menyerap dan menyalurkan aspirasi mahasiswa.',
    deskripsi_tujuan: 'Majelis Perwakilan Mahasiswa (MPM) adalah badan legislatif dan yudikatif di tingkat mahasiswa yang bertugas mengawasi jalannya roda organisasi.',
    gambar: [
      'logo/divisi/adkesma.svg',
      'logo/divisi/bpo.svg',
      'logo/divisi/ep.svg',
      'logo/divisi/humas.svg',
      'logo/divisi/infokom.svg',
      'logo/divisi/mikat.svg',
      'logo/divisi/sosmas.svg',
      'logo/divisi/ws.svg'
    ],
  },
]
