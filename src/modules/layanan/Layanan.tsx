import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import { SearchBar } from '@/components/elements/SearchBar'
import { SectionHeader } from '@/components/elements/SectionHeader'

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
        description:
          'Berisi panduan lengkap mengenai informasi perkuliahan, kegiatan-kegiatan, dan panduan persuratan.',
        href: '#',
      },
      {
        title: 'SIMASTER UGM',
        description: 'Portal akademik utama untuk KRS, jadwal kuliah, nilai, dan administrasi mahasiswa.',
        href: '#',
      },
      {
        title: 'Perpustakaan DTETI',
        description: 'Akses literatur, jurnal, dan referensi tugas akhir untuk mendukung perkuliahan.',
        href: '#',
      },
      {
        title: 'Informasi Beasiswa',
        description: 'Kumpulan info beasiswa internal maupun eksternal beserta panduan pendaftarannya.',
        href: '#',
      },
    ],
  },
  {
    title: 'Arsip Divisi',
    items: [
      {
        title: 'Adkesma',
        description: 'Arsip program dan advokasi kesejahteraan mahasiswa DTETI.',
        href: '#',
      },
      {
        title: 'BPO',
        description: 'Dokumentasi pengawasan organisasi dan evaluasi kegiatan kepengurusan.',
        href: '#',
      },
      {
        title: 'Electropreneur',
        description: 'Arsip kegiatan kewirausahaan dan pengembangan bisnis mahasiswa.',
        href: '#',
      },
      {
        title: 'Humas',
        description: 'Rekam jejak relasi, publikasi, dan kerja sama eksternal KMTETI.',
        href: '#',
      },
      {
        title: 'Infokom',
        description: 'Arsip media, desain, dan dokumentasi informasi komunikasi.',
        href: '#',
      },
      {
        title: 'Mikat',
        description: 'Dokumentasi kegiatan minat, bakat, dan prestasi mahasiswa.',
        href: '#',
      },
      {
        title: 'Sosmas',
        description: 'Arsip kegiatan sosial dan pengabdian kepada masyarakat.',
        href: '#',
      },
      {
        title: 'Workshop',
        description: 'Materi dan dokumentasi pelatihan serta pengembangan keilmuan.',
        href: '#',
      },
    ],
  },
  {
    title: 'Dokumen dan SOP',
    items: [
      {
        title: 'SOP Persuratan',
        description: 'Prosedur pembuatan, penomoran, dan pengarsipan surat resmi KMTETI.',
        href: '#',
      },
      {
        title: 'Panduan Proposal',
        description: 'Template dan panduan penyusunan proposal kegiatan yang baku.',
        href: '#',
      },
      {
        title: 'Template LPJ',
        description: 'Format laporan pertanggungjawaban kegiatan beserta contohnya.',
        href: '#',
      },
      {
        title: 'SOP Peminjaman Inventaris',
        description: 'Alur dan syarat peminjaman inventaris serta ruang sekretariat.',
        href: '#',
      },
    ],
  },
  {
    title: 'Sekretaris dan Bendahara',
    items: [
      {
        title: 'Format Surat Resmi',
        description: 'Kumpulan template surat resmi untuk berbagai keperluan organisasi.',
        href: '#',
      },
      {
        title: 'Alur Reimbursement',
        description: 'Panduan pengajuan dan pencairan dana kegiatan secara transparan.',
        href: '#',
      },
      {
        title: 'Laporan Keuangan',
        description: 'Rekap dan format laporan keuangan kepengurusan KMTETI.',
        href: '#',
      },
      {
        title: 'Notulensi Rapat',
        description: 'Arsip notulensi rapat pengurus dan template pencatatannya.',
        href: '#',
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
      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#f6f6f6] to-[#c2dfff]">
        <div className="mx-auto w-full max-w-[1240px] px-6 pb-32 pt-14 sm:px-8 md:pt-20 md:pb-[196px] lg:px-10">
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
        </div>
      </PageOverlap>
    </main>
  )
}
