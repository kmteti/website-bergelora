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
      'Find-IT (Future IT and National Development) adalah kompetisi berskala nasional yang berfokus pada inovasi teknologi, keamanan siber, dan pengembangan perangkat lunak.',
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
      'Technocorner adalah ajang kompetisi teknologi dan edukasi berskala nasional yang bertujuan mengembangkan potensi inovator muda dalam memajukan teknologi di Indonesia.',
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
      'NESCO (National Electrical School Competition) merupakan wadah kompetisi bergengsi untuk pelajar yang memiliki minat tinggi di bidang teknik kelistrikan dan energi cerdas.',
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
