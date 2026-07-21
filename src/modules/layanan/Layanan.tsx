import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import { SearchBar } from '@/components/elements/SearchBar'
import { SectionHeader } from '@/components/elements/SectionHeader'
import DefaultLayout from '@/components/layout/DefaultLayout'

import { ServiceCard, type ServiceCardProps } from './components/ServiceCard'

interface ServiceSection {
  title: string
  items: ServiceCardProps[]
}

const serviceSections: ServiceSection[] = [
  {
    title: 'Link Penting',
    items: [
      {
        title: 'Akademik DTETI',
        description: 'Portal sistem informasi akademik program sarjana DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/',
      },
      {
        title: 'Persuratan FT',
        description: 'Sistem pengajuan dan pengelolaan surat di Fakultas Teknik UGM.',
        href: 'https://sms.ft.ugm.ac.id/persuratan/index.php/?nextUrl=%2Fpersuratan%2Findex.php%2Fp%2Fdashboard%2Fdocument',
      },
      {
        title: 'Kegiatan Mahasiswa FT',
        description: 'Portal pengajuan proposal dan kegiatan mahasiswa Fakultas Teknik.',
        href: 'https://sms.ft.ugm.ac.id/kegiatan-mahasiswa/index.php/?nextUrl=%2Fkegiatan-mahasiswa%2Findex.php%2Fp%2Fproposal',
      },
      {
        title: 'Data Prestasi',
        description: 'Dashboard rekap data prestasi mahasiswa DTETI.',
        href: 'https://datastudio.google.com/u/0/reporting/f0e83f84-41ec-4719-b116-cc1e445cd3dc/page/mfGHF',
      },
    ],
  },
  {
    title: 'Arsip Divisi',
    items: [
      {
        title: 'Info Lomba & Beasiswa',
        description: 'Kumpulan informasi lomba dan beasiswa untuk mahasiswa.',
        href: 'https://s.id/ILBAdkesmaKMTETI',
      },
      {
        // TODO: URL belum tersedia di FigJam (disebut "GDrive")
        title: 'Forwati',
        description: 'Arsip Forwati yang dapat diakses melalui Google Drive.',
        href: '#',
      },
      {
        // TODO: URL belum tersedia di FigJam
        title: 'Kebutuhan Heregistrasi',
        description: 'Panduan dan berkas yang dibutuhkan untuk heregistrasi.',
        href: '#',
      },
    ],
  },
  {
    title: 'Dokumen dan SOP',
    items: [
      {
        title: 'Buku Panduan Akademik',
        description: 'Buku panduan akademik program sarjana DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/akademik/dokumen-akademik/',
      },
      {
        title: 'Dokumen Akademik dan Kemahasiswaan',
        description: 'Kumpulan dokumen akademik dan kemahasiswaan resmi DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/kemahasiswaan/dokumen-akademik-dan-kemahasiswaan/',
      },
      {
        title: 'SOP',
        description: 'Standar operasional prosedur akademik DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/akademik/sop/',
      },
    ],
  },
  {
    title: 'Sekretaris dan Bendahara',
    items: [
      {
        title: 'Manual Book Kesekretariatan',
        description: 'Panduan administrasi dan kesekretariatan organisasi.',
        href: 'https://bit.ly/ManualBookKSK2024',
      },
      {
        title: 'Manual Book Kebendaharaan',
        description: 'Panduan pengelolaan keuangan dan kebendaharaan organisasi.',
        href: 'https://bit.ly/ManualBookKBN2024',
      },
      {
        title: 'Kumpulan Template',
        description: 'Berbagai template dokumen dan surat siap pakai.',
        href: 'https://drive.google.com/drive/folders/0B2Rf2cDPuLplcEZKZzgydVdBc00?resourcekey=0-OBdwkd2BD64289B7TAhslg',
      },
      {
        title: 'Form Verifikasi Persuratan',
        description: 'Formulir verifikasi persuratan organisasi.',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfkfg5-YzcvAYnzYjozs25cPReXmBP7gE08aaUJcRqCdLJhZQ/viewform',
      },
    ],
  },
]

export default function Layanan() {
  return (
    <main className="relative w-full bg-neutral-100">
      {/* 1. Hero header full width */}
      <PageHeader
        title="Layanan KMTETI"
        description="Kumpulan link penting dan panduan persuratan"
        imageSrc="/images/layanan/layanan-header.webp"
      />

      {/* 2. Konten yang overlap ke atas hero, background gradient abu ke biru muda */}
      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff]">
        <DefaultLayout>
          {/* Search bar */}
          <div className="flex justify-center">
            <SearchBar className="max-w-[586px]" />
          </div>

          {/* Section-section layanan */}
          <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">
            {serviceSections.map((section) => (
              <section key={section.title} className="flex flex-col gap-8 md:gap-10">
                <SectionHeader title={section.title} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {section.items.map((item) => (
                    <ServiceCard key={item.title} {...item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
