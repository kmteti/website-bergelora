'use client'

import * as LucideIcons from 'lucide-react'
import React, { useState, useMemo, useRef } from 'react'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import { SearchBar } from '@/components/elements/SearchBar'
import { SectionHeader } from '@/components/elements/SectionHeader'
import DefaultLayout from '@/components/layout/DefaultLayout'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ServiceCard, type ServiceCardProps } from './components/ServiceCard'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ServiceSection {
  title: string
  items: ServiceCardProps[]
}

const staticServiceSections: ServiceSection[] = [
  {
    title: 'Link Penting',
    items: [
      {
        title: 'Akademik DTETI',
        description: 'Portal sistem informasi akademik program sarjana DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/',
        icon: LucideIcons.GraduationCap,
      },
      {
        title: 'Persuratan FT',
        description: 'Sistem pengajuan dan pengelolaan surat di Fakultas Teknik UGM.',
        href: 'https://sms.ft.ugm.ac.id/persuratan/index.php/?nextUrl=%2Fpersuratan%2Findex.php%2Fp%2Fdashboard%2Fdocument',
        icon: LucideIcons.Mail,
      },
      {
        title: 'Kegiatan Mahasiswa FT',
        description: 'Portal pengajuan proposal dan kegiatan mahasiswa Fakultas Teknik.',
        href: 'https://sms.ft.ugm.ac.id/kegiatan-mahasiswa/index.php/?nextUrl=%2Fkegiatan-mahasiswa%2Findex.php%2Fp%2Fproposal',
        icon: LucideIcons.CalendarDays,
      },
      {
        title: 'Data Prestasi',
        description: 'Dashboard rekap data prestasi mahasiswa DTETI.',
        href: 'https://datastudio.google.com/u/0/reporting/f0e83f84-41ec-4719-b116-cc1e445cd3dc/page/mfGHF',
        icon: LucideIcons.BarChart3,
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
        icon: LucideIcons.Award,
      },
      {
        title: 'Forwati',
        description: 'Arsip Forwati yang dapat diakses melalui Google Drive.',
        href: 'https://drive.google.com/drive/folders/1MyGcaAB7Nm4_yowgzL2n0EE0kWiYE55F?usp=drive_link',
        icon: LucideIcons.FolderOpen,
      },
      {
        title: 'Form Aspirasi',
        description: 'Sampaikan aspirasi, keluh, dan saranmu untuk KMTETI lewat Adkesma.',
        href: 'https://bit.ly/ASPIRASIADKESMA2026',
        icon: LucideIcons.MessageSquare,
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
        icon: LucideIcons.BookOpen,
      },
      {
        title: 'Dokumen Akademik dan Kemahasiswaan',
        description: 'Kumpulan dokumen akademik dan kemahasiswaan resmi DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/kemahasiswaan/dokumen-akademik-dan-kemahasiswaan/',
        icon: LucideIcons.Files,
      },
      {
        title: 'Kalender Akademik',
        description: 'Kalender akademik UGM T.A. 2026/2027.',
        href: 'https://akademik.ugm.ac.id/kalender-akademik-t-a-2026-2027/',
        icon: LucideIcons.CalendarDays,
      },
      {
        title: 'SOP',
        description: 'Standar operasional prosedur akademik DTETI.',
        href: 'https://sarjana.jteti.ugm.ac.id/akademik/sop/',
        icon: LucideIcons.ClipboardList,
      },
    ],
  },
]

export default function Layanan({ initialLayanan }: { initialLayanan?: any[] }) {
  const mainRef = useRef<HTMLElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Semua Layanan')

  const serviceSections = useMemo<ServiceSection[]>(() => {
    if (!initialLayanan || initialLayanan.length === 0) {
      return staticServiceSections
    }

    const groups: { [key: string]: ServiceCardProps[] } = {}

    initialLayanan.forEach((item: any) => {
      const cat = item.kategori || 'Lainnya'
      if (!groups[cat]) {
        groups[cat] = []
      }

      let IconComp: any = LucideIcons.Globe
      if (item.icon && (LucideIcons as any)[item.icon]) {
        IconComp = (LucideIcons as any)[item.icon]
      } else {
        const titleLower = (item.namaLayanan || item.title || '').toLowerCase()
        if (titleLower.includes('akademik') || titleLower.includes('buku')) {
          IconComp = LucideIcons.GraduationCap
        } else if (titleLower.includes('surat') || titleLower.includes('persuratan')) {
          IconComp = LucideIcons.Mail
        } else if (titleLower.includes('prestasi') || titleLower.includes('lomba')) {
          IconComp = LucideIcons.Award
        } else if (titleLower.includes('kegiatan') || titleLower.includes('event')) {
          IconComp = LucideIcons.CalendarDays
        } else if (titleLower.includes('sop') || titleLower.includes('dokumen')) {
          IconComp = LucideIcons.FileText
        } else if (titleLower.includes('aspirasi') || titleLower.includes('form')) {
          IconComp = LucideIcons.MessageSquare
        } else if (titleLower.includes('drive') || titleLower.includes('arsip')) {
          IconComp = LucideIcons.FolderOpen
        }
      }

      groups[cat].push({
        title: item.namaLayanan || item.title || '',
        description: item.deskripsi || item.description || '',
        href: item.link || item.href || '#',
        icon: IconComp,
      })
    })

    return Object.keys(groups).map((catName) => ({
      title: catName,
      items: groups[catName],
    }))
  }, [initialLayanan])

  const categories = useMemo(() => {
    return ['Semua Layanan', ...serviceSections.map((s) => s.title)]
  }, [serviceSections])

  const filteredSections = useMemo(() => {
    return serviceSections
      .map((section) => {
        if (categoryFilter !== 'Semua Layanan' && section.title !== categoryFilter) {
          return { ...section, items: [] }
        }

        const lowerQuery = searchQuery.toLowerCase().trim()
        const filteredItems = section.items.filter(
          (item) =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery)
        )

        return { ...section, items: filteredItems }
      })
      .filter((section) => section.items.length > 0)
  }, [serviceSections, searchQuery, categoryFilter])

  useGSAP(
    () => {
      const sections = document.querySelectorAll('.service-section-container')
      sections.forEach((sec) => {
        const cards = sec.querySelectorAll('.service-card-item')
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: 'power2.out',
              stagger: 0.06,
              scrollTrigger: {
                trigger: sec,
                start: 'top 88%',
                once: true,
              },
            },
          )
        }
      })
    },
    { scope: mainRef, dependencies: [filteredSections] },
  )

  return (
    <main ref={mainRef} className="relative w-full bg-neutral-100">
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
                        {categories.map((catName) => (
                          <SelectItem key={catName} value={catName} className="rounded-lg hover:bg-neutral-100 py-2.5">
                            {catName}
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
                <section key={section.title} className="service-section-container flex flex-col gap-8 md:gap-10">
                  <SectionHeader title={section.title} />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {section.items.map((item) => (
                      <div key={item.title} className="service-card-item will-change-transform h-full">
                        <ServiceCard {...item} />
                      </div>
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
