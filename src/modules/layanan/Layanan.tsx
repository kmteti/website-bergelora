'use client'

import {
  Award,
  BarChart3,
  BookOpen,
  BookText,
  CalendarDays,
  ClipboardList,
  FileCheck,
  Files,
  FolderOpen,
  GraduationCap,
  LayoutTemplate,
  Mail,
  MessageSquare,
  Wallet,
} from 'lucide-react'
import React, { useState, useMemo } from 'react'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import { SearchBar } from '@/components/elements/SearchBar'
import { SectionHeader } from '@/components/elements/SectionHeader'
import DefaultLayout from '@/components/layout/DefaultLayout'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
        icon: GraduationCap,
      },
      {
        title: 'Persuratan FT',
        description: 'Sistem pengajuan dan pengelolaan surat di Fakultas Teknik UGM.',
        href: 'https://sms.ft.ugm.ac.id/persuratan/index.php/?nextUrl=%2Fpersuratan%2Findex.php%2Fp%2Fdashboard%2Fdocument',
        icon: Mail,
      },
      {
        title: 'Kegiatan Mahasiswa FT',
        description: 'Portal pengajuan proposal dan kegiatan mahasiswa Fakultas Teknik.',
        href: 'https://sms.ft.ugm.ac.id/kegiatan-mahasiswa/index.php/?nextUrl=%2Fkegiatan-mahasiswa%2Findex.php%2Fp%2Fproposal',
        icon: CalendarDays,
      },
      {
        title: 'Data Prestasi',
        description: 'Dashboard rekap data prestasi mahasiswa DTETI.',
        href: 'https://datastudio.google.com/u/0/reporting/f0e83f84-41ec-4719-b116-cc1e445cd3dc/page/mfGHF',
        icon: BarChart3,
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
        icon: Award,
      },
      {
        title: 'Forwati',
        description: 'Arsip Forwati yang dapat diakses melalui Google Drive.',
        href: 'https://drive.google.com/drive/folders/1MyGcaAB7Nm4_yowgzL2n0EE0kWiYE55F?usp=drive_link',
        icon: FolderOpen,
      },
      {
        title: 'Form Aspirasi',
        description: 'Sampaikan aspirasi, keluh, dan saranmu untuk KMTETI lewat Adkesma.',
        href: 'https://bit.ly/ASPIRASIADKESMA2026',
        icon: MessageSquare,
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
        icon: BookOpen,
      },
      {
        title: 'Dokumen Akademik dan Kemahasiswaan',
        description: 'Kumpulan dokumen akademik dan kemahasiswaan resmi DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/kemahasiswaan/dokumen-akademik-dan-kemahasiswaan/',
        icon: Files,
      },
      {
        title: 'SOP',
        description: 'Standar operasional prosedur akademik DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/akademik/sop/',
        icon: ClipboardList,
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
        icon: BookText,
      },
      {
        title: 'Manual Book Kebendaharaan',
        description: 'Panduan pengelolaan keuangan dan kebendaharaan organisasi.',
        href: 'https://bit.ly/ManualBookKBN2024',
        icon: Wallet,
      },
      {
        title: 'Kumpulan Template',
        description: 'Berbagai template dokumen dan surat siap pakai.',
        href: 'https://drive.google.com/drive/folders/0B2Rf2cDPuLplcEZKZzgydVdBc00?resourcekey=0-OBdwkd2BD64289B7TAhslg',
        icon: LayoutTemplate,
      },
      {
        title: 'Form Verifikasi Persuratan',
        description: 'Formulir verifikasi persuratan organisasi.',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfkfg5-YzcvAYnzYjozs25cPReXmBP7gE08aaUJcRqCdLJhZQ/viewform',
        icon: FileCheck,
      },
    ],
  },
]

export default function Layanan() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Semua Layanan')

  const filteredSections = useMemo(() => {
    return serviceSections
      .map((section) => {
        // Jika kategori tidak "Semua Layanan" dan tidak cocok dengan judul section, sembunyikan semua itemnya.
        if (categoryFilter !== 'Semua Layanan' && section.title !== categoryFilter) {
          return { ...section, items: [] }
        }

        // Lakukan pencarian teks di title atau description layanan
        const lowerQuery = searchQuery.toLowerCase().trim()
        const filteredItems = section.items.filter(
          (item) =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery)
        )

        return { ...section, items: filteredItems }
      })
      // Hanya biarkan section yang punya item (agar headernya ikut hilang jika kosong)
      .filter((section) => section.items.length > 0)
  }, [searchQuery, categoryFilter])

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
            <SearchBar
              className="max-w-[586px]"
              placeholder="Cari layanan, form, atau dokumen..."
              onValueChange={(val) => setSearchQuery(val)}
              filterContent={
                <div className="flex w-full flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="mb-4 text-sm font-regular text-neutral-400">
                      Kategori Layanan
                    </label>
                    <Select
                      value={categoryFilter}
                      onValueChange={(val) => setCategoryFilter(val ?? 'Semua Layanan')}
                    >
                      <SelectTrigger className="w-full h-11 bg-neutral-100 hover:bg-neutral-200 border-none rounded-xl px-4 text-neutral-800 font-medium shadow-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/20">
                        <SelectValue placeholder="Semua Layanan" />
                      </SelectTrigger>
                      <SelectContent
                        alignItemWithTrigger={false}
                        className="rounded-xl border-none shadow-xl bg-white p-2.5"
                      >
                        <SelectItem value="Semua Layanan" className="rounded-lg hover:bg-neutral-100 py-2.5">
                          Semua Layanan
                        </SelectItem>
                        {serviceSections.map((sec) => (
                          <SelectItem key={sec.title} value={sec.title} className="rounded-lg hover:bg-neutral-100 py-2.5">
                            {sec.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              }
            />
          </div>

          {/* Section-section layanan */}
          <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20 pb-20">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <section key={section.title} className="flex flex-col gap-8 md:gap-10">
                  <SectionHeader title={section.title} />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {section.items.map((item) => (
                      <ServiceCard key={item.title} {...item} />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
                <p className="text-lg font-medium">Layanan tidak ditemukan</p>
                <p className="text-sm text-neutral-400">Coba sesuaikan kata kunci atau pilih kategori lain</p>
              </div>
            )}
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
