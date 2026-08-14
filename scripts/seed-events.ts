import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function seedEvents() {
  const payload = await getPayload({ config })

  console.log('Seeding Events...')

  // Check if events collection already has data
  const existingEvents = await payload.find({
    collection: 'events',
    limit: 10,
  })

  if (existingEvents.totalDocs > 0) {
    console.log('Events data already exists. Deleting existing...')
    for (const doc of existingEvents.docs) {
      await payload.delete({
        collection: 'events',
        id: doc.id,
      })
    }
  }

  const eventsData = [
    {
      nama: 'FindIT!',
      slug: 'findit',
      header: '/images/divisi/adkesma.webp',
      logo: '/logo/event/findit.svg',
      detail: 'Ajang kompetisi di bidang teknologi informasi yang diselenggarakan oleh KMTETI FT UGM.',
      tujuan: 'FindIT!',
      deskripsi_tujuan:
        'FIND IT (Future Innovation and Discovery Information Technology) merupakan acara tahunan yang diselenggarakan oleh KMTETI FT UGM. Event ini mencakup pameran IT Fest serta berbagai kompetisi menarik di bidang teknologi informasi guna menjadi wadah pengembangan minat dan potensi masyarakat.',
      website: 'https://find-it.id',
      gambar: [
        { url: '/images/home/about/about.webp' },
        { url: '/images/home/about/about.webp' },
        { url: '/images/home/about/about.webp' },
      ],
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
      nama: 'NESCO UGM',
      slug: 'nesco',
      header: '/images/divisi/Adkesma1.webp',
      logo: '/logo/event/nesco.svg',
      detail: 'National Electrical Power System Competition yang berfokus pada ketenagalistrikan dan energi.',
      tujuan: 'NESCO UGM',
      deskripsi_tujuan:
        'NESCO merupakan sebuah kompetisi tingkat nasional dan seminar yang diselenggarakan oleh BSO Magatrika di bawah naungan Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada (FT UGM). NESCO memiliki tujuan untuk meningkatkan perkembangan ketenagalistrikan di Indonesia.',
      website: 'https://nesco.id',
      gambar: [
        { url: '/images/home/about/about.webp' },
        { url: '/images/home/about/about.webp' },
        { url: '/images/home/about/about.webp' },
      ],
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
      nama: 'Technocorner',
      slug: 'technocorner',
      header: '/images/divisi/Adkesma1.webp',
      logo: '/logo/event/technocorner.webp',
      detail: 'Ajang kompetisi tahunan yang berfokus pada bidang robotika, IoT, dan teknik elektro.',
      tujuan: 'Technocorner',
      deskripsi_tujuan:
        'Technocorner merupakan acara tahunan berbasis teknologi yang diselenggarakan oleh Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) Fakultas Teknik Universitas Gadjah Mada, yang bertujuan membina generasi penerus yang kreatif dan kompetitif.',
      website: 'https://technocorner.id',
      gambar: [
        { url: '/images/home/about/about.webp' },
        { url: '/images/home/about/about.webp' },
        { url: '/images/home/about/about.webp' },
      ],
      bidangLomba: [
        {
          nama: 'Line Follower',
          deskripsi: 'Kompetisi robot pelacak garis yang menguji kecepatan dan akurasi robot di arena lintasan.',
          icon: 'Bot',
        },
        {
          nama: 'Sumobot Auto',
          deskripsi: 'Kompetisi robot sumo otonom (otomatis) yang bertarung mendorong lawan keluar dari arena dohyo.',
          icon: 'Bot',
        },
        {
          nama: 'Sumobot RC',
          deskripsi: 'Kompetisi robot sumo kendali jarak jauh (remote control) yang menguji strategi dan kekuatan pendorong.',
          icon: 'Bot',
        },
        {
          nama: 'Soccerbot',
          deskripsi: 'Kompetisi robot sepak bola yang menguji ketangkasan dan kerjasama robot dalam mencetak gol.',
          icon: 'Trophy',
        },
        {
          nama: 'Transporter',
          deskripsi: 'Kompetisi robot pengangkut dan pemindah beban/misi pada lintasan rintangan.',
          icon: 'Cpu',
        },
        {
          nama: 'IoT (Internet of Things) Competition',
          deskripsi: 'Kompetisi perancangan dan implementasi sistem/perangkat IoT yang inovatif.',
          icon: 'Network',
        },
        {
          nama: 'Electrical Engineering Competition (EEC)',
          deskripsi: 'Kompetisi akademik yang menguji pemahaman dan pemecahan masalah di bidang matematika, fisika, dan ilmu komputer/teknik elektro.',
          icon: 'Activity',
        },
      ],
    },
  ]

  for (const event of eventsData as any[]) {
    await payload.create({
      collection: 'events',
      data: event,
    })
    console.log(`Seeded Event: ${event.nama}`)
  }

  console.log('Events Seeding complete!')
  process.exit(0)
}

seedEvents().catch((err) => {
  console.error('Error seeding events:', err)
  process.exit(1)
})
