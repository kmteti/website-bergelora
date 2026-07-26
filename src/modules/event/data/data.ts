export interface EventData {
  id: number
  slug: string
  nama: string
  header: string
  logo: string
  detail: string
  tujuan: string
  deskripsi_tujuan: string
  gambar: string[]
  website?: string
}

export const eventData: EventData[] = [
  {
    id: 1,
    slug: 'findit',
    nama: 'FindIT',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/event/findit.svg',
    detail: 'Future Inovative Data & Information Technology',
    tujuan: 'FindIT',
    deskripsi_tujuan: 'KMTETI hadir sebagai wadah bagi mahasiswa untuk mengembangkan potensi, memperluas wawasan, dan membangun kolaborasi. Melalui berbagai program, layanan internal, serta informasi yang terpusat',
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
    website: 'https://findit.kmteti.ugm.ac.id',
  },
  {
    id: 2,
    slug: 'nesco',
    nama: 'Nesco',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/event/nesco.svg',
    detail: 'National Electrical School Competition',
    tujuan: 'Nesco',
    deskripsi_tujuan: 'KMTETI hadir sebagai wadah bagi mahasiswa untuk mengembangkan potensi, memperluas wawasan, dan membangun kolaborasi. Melalui berbagai program, layanan internal, serta informasi yang terpusat',
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
    website: 'https://nesco.kmteti.ugm.ac.id',
  },
  {
    id: 3,
    slug: 'technocorner',
    nama: 'Technocorner',
    header: '/images/divisi/Adkesma1.webp',
    logo: '/logo/divisi/adkesma.svg', // using adkesma just like screenshot
    detail: 'Advokasi dan Kesejahteraan Mahasiswa', // following screenshot
    tujuan: 'Technocorner',
    deskripsi_tujuan: 'KMTETI hadir sebagai wadah bagi mahasiswa untuk mengembangkan potensi, memperluas wawasan, dan membangun kolaborasi. Melalui berbagai program, layanan internal, serta informasi yang terpusat',
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
]
