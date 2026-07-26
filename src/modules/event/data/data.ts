export interface EventData {
  id: number
  slug: string
  nama: string
  header: string
  /** Taruh file-nya di /public/logo/event/<slug>.svg lalu isi field ini. */
  logo?: string
  detail: string
  tujuan: string
  deskripsi_tujuan: string
  gambar: string[]
  website?: string
}

// Satu-satunya sumber data event. Section home & halaman detail sama-sama baca dari sini
// supaya slug-nya nggak pernah beda lagi.
export const eventData: EventData[] = [
  {
    id: 1,
    slug: 'findit',
    nama: 'Find-IT',
    header: '/images/divisi/Adkesma1.webp',
    detail: 'Future IT and National Development',
    tujuan: 'Find-IT',
    deskripsi_tujuan:
      'FIND IT (Future Innovation and Discovery Information Technology) merupakan acara tahunan yang diselenggarakan oleh DTETI FT UGM. Event ini mencakup pameran IT Fest serta berbagai kompetisi, seperti Competitive Programming, Data Analytics Competition, Hackathon, Capture the Flag, UX Competition, dan Informatics Competition. FIND IT bertujuan menjadi wadah pengembangan minat dan potensi masyarakat di bidang teknologi informasi sekaligus memperkenalkan dunia TI kepada masyarakat luas di era Revolusi Industri 5.0.',
    gambar: [
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
    ],
    website: 'https://www.find-it.id/',
  },
  {
    id: 2,
    slug: 'technocorner',
    nama: 'Technocorner',
    header: '/images/divisi/Adkesma1.webp',
    detail: 'Ajang Kompetisi Teknologi dan Edukasi Nasional',
    tujuan: 'Technocorner',
    deskripsi_tujuan:
      'Technocorner merupakan acara tahunan berbasis teknologi yang diselenggarakan oleh Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) Fakultas Teknik Universitas Gadjah Mada, yang bertujuan membina generasi penerus yang kreatif dan kompetitif.',
    gambar: [
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
    ],
    website: 'https://technocorner.id',
  },
  {
    id: 3,
    slug: 'nesco',
    nama: 'NESCO',
    header: '/images/divisi/Adkesma1.webp',
    detail: 'National Electrical School Competition',
    tujuan: 'NESCO',
    deskripsi_tujuan:
      'NESCO merupakan sebuah kompetisi tingkat nasional dan seminar yang diselenggarakan oleh BSO Magatrika (Badan Semi Otonom Magatrika) dibawah naungan Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada (FT UGM). NESCO memiliki tujuan untuk meningkatkan perkembangan ketenagalistrikan di Indonesia. Oleh karena itu NESCO selalu membawa tema menarik yang berhubungan dengan listrik tegangan tinggi.',
    gambar: [
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
      '/images/home/about/about.webp',
    ],
    website: 'https://nesco.id',
  },
]
