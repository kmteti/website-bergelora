import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function seedLayanan() {
  const payload = await getPayload({ config })

  console.log('Seeding Layanan...')

  const existingLayanan = await payload.find({
    collection: 'layanan',
    limit: 100,
  })

  if (existingLayanan.totalDocs > 0) {
    console.log('Layanan data already exists. Deleting existing...')
    for (const doc of existingLayanan.docs) {
      await payload.delete({
        collection: 'layanan',
        id: doc.id,
      })
    }
  }

  const items = [
    // Link Penting
    {
      title: 'Akademik DTETI',
      description: 'Portal sistem informasi akademik program sarjana DTETI.',
      href: 'https://sarjana.jteti.ugm.ac.id/',
      kategori: 'Link Penting',
      icon: 'GraduationCap',
      order: 1,
    },
    {
      title: 'Persuratan FT',
      description: 'Sistem pengajuan dan pengelolaan surat di Fakultas Teknik UGM.',
      href: 'https://sms.ft.ugm.ac.id/persuratan/index.php/?nextUrl=%2Fpersuratan%2Findex.php%2Fp%2Fdashboard%2Fdocument',
      kategori: 'Link Penting',
      icon: 'Mail',
      order: 2,
    },
    {
      title: 'Kegiatan Mahasiswa FT',
      description: 'Portal pengajuan proposal dan kegiatan mahasiswa Fakultas Teknik.',
      href: 'https://sms.ft.ugm.ac.id/kegiatan-mahasiswa/index.php/?nextUrl=%2Fkegiatan-mahasiswa%2Findex.php%2Fp%2Fproposal',
      kategori: 'Link Penting',
      icon: 'CalendarDays',
      order: 3,
    },
    {
      title: 'Data Prestasi',
      description: 'Dashboard rekap data prestasi mahasiswa DTETI.',
      href: 'https://datastudio.google.com/u/0/reporting/f0e83f84-41ec-4719-b116-cc1e445cd3dc/page/mfGHF',
      kategori: 'Link Penting',
      icon: 'BarChart3',
      order: 4,
    },

    // Arsip Divisi
    {
      title: 'Info Lomba & Beasiswa',
      description: 'Kumpulan informasi lomba dan beasiswa untuk mahasiswa.',
      href: 'https://s.id/ILBAdkesmaKMTETI',
      kategori: 'Arsip Divisi',
      icon: 'Award',
      order: 1,
    },
    {
      title: 'Forwati',
      description: 'Arsip Forwati yang dapat diakses melalui Google Drive.',
      href: 'https://drive.google.com/drive/folders/1MyGcaAB7Nm4_yowgzL2n0EE0kWiYE55F?usp=drive_link',
      kategori: 'Arsip Divisi',
      icon: 'FolderOpen',
      order: 2,
    },
    {
      title: 'Form Aspirasi',
      description: 'Sampaikan aspirasi, keluh, dan saranmu untuk KMTETI lewat Adkesma.',
      href: 'https://bit.ly/ASPIRASIADKESMA2026',
      kategori: 'Arsip Divisi',
      icon: 'MessageSquare',
      order: 3,
    },

    // Dokumen dan SOP
    {
      title: 'Buku Panduan Akademik',
      description: 'Buku panduan akademik program sarjana DTETI.',
      href: 'https://sarjana.jteti.ugm.ac.id/akademik/dokumen-akademik/',
      kategori: 'Dokumen dan SOP',
      icon: 'BookOpen',
      order: 1,
    },
    {
      title: 'Dokumen Akademik dan Kemahasiswaan',
      description: 'Kumpulan dokumen akademik dan kemahasiswaan resmi DTETI.',
      href: 'https://sarjana.jteti.ugm.ac.id/kemahasiswaan/dokumen-akademik-dan-kemahasiswaan/',
      kategori: 'Dokumen dan SOP',
      icon: 'Files',
      order: 2,
    },
    {
      title: 'SOP',
      description: 'Standar operasional prosedur akademik DTETI.',
      href: 'https://sarjana.jteti.ugm.ac.id/akademik/sop/',
      kategori: 'Dokumen dan SOP',
      icon: 'ClipboardList',
      order: 3,
    },

    // Sekretaris dan Bendahara
    {
      title: 'Manual Book Kesekretariatan',
      description: 'Panduan administrasi dan kesekretariatan organisasi.',
      href: 'https://bit.ly/ManualBookKSK2024',
      kategori: 'Sekretaris dan Bendahara',
      icon: 'BookText',
      order: 1,
    },
    {
      title: 'Manual Book Kebendaharaan',
      description: 'Panduan pengelolaan keuangan dan kebendaharaan organisasi.',
      href: 'https://bit.ly/ManualBookKBN2024',
      kategori: 'Sekretaris dan Bendahara',
      icon: 'Wallet',
      order: 2,
    },
    {
      title: 'Kumpulan Template',
      description: 'Berbagai template dokumen dan surat siap pakai.',
      href: 'https://drive.google.com/drive/folders/0B2Rf2cDPuLplcEZKZzgydVdBc00?resourcekey=0-OBdwkd2BD64289B7TAhslg',
      kategori: 'Sekretaris dan Bendahara',
      icon: 'LayoutTemplate',
      order: 3,
    },
    {
      title: 'Form Verifikasi Persuratan',
      description: 'Formulir verifikasi persuratan organisasi.',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSfkfg5-YzcvAYnzYjozs25cPReXmBP7gE08aaUJcRqCdLJhZQ/viewform',
      kategori: 'Sekretaris dan Bendahara',
      icon: 'FileCheck',
      order: 4,
    },
  ]

  for (const item of items as any[]) {
    await payload.create({
      collection: 'layanan',
      data: item,
    })
    console.log(`Seeded Layanan: ${item.title}`)
  }

  console.log('Layanan Seeding complete!')
  process.exit(0)
}

seedLayanan().catch((err) => {
  console.error('Error seeding layanan:', err)
  process.exit(1)
})
