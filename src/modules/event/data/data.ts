export interface BidangLomba {
  nama: string
  deskripsi: string
  icon?: string
  subCategories?: string[]
}

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
  bidangLomba: BidangLomba[]
}

// Satu-satunya sumber data event. Section home & halaman detail sama-sama baca dari sini
// supaya slug-nya nggak pernah beda lagi.
export const eventData: EventData[] = [
  {
    id: 1,
    slug: 'findit',
    nama: 'FindIT!',
    header: '/images/events/findit.webp',
    logo: '/logo/event/findit.svg',
    detail: 'Future Innovation & Discovery Information Technology',
    tujuan: 'FindIT!',
    deskripsi_tujuan:
      'FIND IT (Future Innovation and Discovery Information Technology) merupakan acara tahunan yang diselenggarakan oleh KMTETI FT UGM. Event ini mencakup pameran IT Fest serta berbagai kompetisi menarik di bidang teknologi informasi guna menjadi wadah pengembangan minat dan potensi masyarakat.',
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
    website: 'https://find-it.id',
    bidangLomba: [
      {
        nama: 'Competitive Programming (CP)',
        deskripsi: 'Kompetisi pemecahan masalah (problem solving) secara algoritmik.',
        icon: 'Code',
      },
      {
        nama: 'UX Competition',
        deskripsi: 'Kompetisi perancangan pengalaman dan desain antarmuka pengguna (UX) untuk aplikasi mobile.',
        icon: 'Palette',
      },
      {
        nama: 'Data Analytics Competition (DAC)',
        deskripsi: 'Kompetisi analisis big data untuk menghasilkan rekomendasi dan solusi optimal.',
        icon: 'Database',
      },
      {
        nama: 'Capture the Flag (CTF)',
        deskripsi: 'Kompetisi keamanan siber (cybersecurity) yang menguji kemampuan menemukan flag tersembunyi melalui tantangan eksploitasi/kriptografi.',
        icon: 'Flag',
      },
      {
        nama: 'Hackathon',
        deskripsi: 'Kompetisi pengembangan ide dan produk solusi teknologi secara cepat untuk menyelesaikan masalah nyata.',
        icon: 'Cpu',
      },
      {
        nama: 'Informatics Competition (IC)',
        deskripsi: 'Kompetisi penyelesaian soal logika dan dasar informatika (khusus jenjang SMA/Sederajat).',
        icon: 'BookOpen',
      },
    ],
  },
  {
    id: 2,
    slug: 'nesco',
    nama: 'NESCO UGM',
    header: '/images/events/nesco.webp',
    logo: '/logo/event/nesco.svg',
    detail: 'National Electrical Power System Competition',
    tujuan: 'NESCO UGM',
    deskripsi_tujuan:
      'NESCO merupakan sebuah kompetisi tingkat nasional dan seminar yang diselenggarakan oleh BSO Magatrika di bawah naungan Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada (FT UGM). NESCO memiliki tujuan untuk meningkatkan perkembangan ketenagalistrikan di Indonesia.',
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
    bidangLomba: [
      {
        nama: 'Paper Competition',
        deskripsi: 'Kompetisi penulisan karya tulis ilmiah seputar ketenagalistrikan dan sistem energi.',
        icon: 'FileText',
      },
      {
        nama: 'Innovation Competition',
        deskripsi: 'Kompetisi rancang bangun dan inovasi teknologi berbasis energi & sistem listrik.',
        icon: 'Lightbulb',
      },
      {
        nama: 'Poster Competition',
        deskripsi: 'Kompetisi desain media publikasi/poster edukatif terkait ketenagalistrikan.',
        icon: 'Image',
      },
      {
        nama: 'Debate Competition',
        deskripsi: 'Kompetisi debat seputar isu-isu strategis, kebijakan, dan teknologi ketenagalistrikan.',
        icon: 'Users',
      },
    ],
  },
  {
    id: 3,
    slug: 'technocorner',
    nama: 'Technocorner',
    header: '/images/events/tc.webp',
    logo: '/logo/event/technocorner.webp',
    detail: 'National Robotics, IoT & Electrical Competition',
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
    bidangLomba: [
      {
        nama: 'Kategori Robotika',
        deskripsi: 'Kompetisi robotika tingkat nasional yang menguji inovasi, kecepatan, dan akurasi robot di arena pertandingan.',
        icon: 'Bot',
        subCategories: [
          'Line Follower',
          'Sumobot Auto',
          'Sumobot RC',
          'Soccerbot',
          'Transporter',
        ],
      },
      {
        nama: 'IoT (Internet of Things) Competition',
        deskripsi: 'Kompetisi perancangan dan implementasi sistem/perangkat IoT yang inovatif.',
        icon: 'Network',
      },
      {
        nama: 'EEC (Electrical Engineering Competition)',
        deskripsi: 'Kompetisi akademik yang menguji pemahaman dan pemecahan masalah di bidang matematika, fisika, dan ilmu komputer/teknik elektro.',
        icon: 'Activity',
      },
    ],
  },
]
