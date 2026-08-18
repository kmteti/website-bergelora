'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { H3 } from '@/components/elements/Typography'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface MonthlyAgenda {
  month: string
  items: string[]
  photos: [string, string]
}

const staticAgendaData: MonthlyAgenda[] = [
  {
    month: 'Maret',
    items: [
      'WS – Pelatihan Genap (mulai 1 Mar, bar-nya memanjang sampai Mei)',
      'AD – Aspirasi Umum & Aspirasi Akademis (1 Mar)',
      'IN – Kalender Bulanan (1 Mar)',
      'EP – EP CLASS (mulai 6 Mar)',
      'PI – Pelatihan Kesekretariatan & Kebendaharaan (14-15 Mar)',
      'AD – Info Lomba dan Beasiswa (14 Mar)',
      'MK – Porseniteti (mulai 23 Mar, durasi 10 hari + lanjut ke awal April)',
    ],
    photos: ['/images/home/life/envelope-image/1.webp', '/images/home/life/envelope-image/2.webp'],
  },
  {
    month: 'April',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Apr)',
      'AD – Bank Materi (1 Apr)',
      'IN – Kalender Bulanan (1 Apr)',
      'AD – Info Lomba dan Beasiswa (14 Apr)',
      'IN – Foto Kabinet & Rilis Pengurus (22 Apr)',
    ],
    photos: ['/images/home/life/envelope-image/2.webp', '/images/home/life/envelope-image/3.webp'],
  },
  {
    month: 'Mei',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Mei)',
      'IN – Kalender Bulanan (1 Mei)',
      'EP – Kaftet (4 Mei)',
      'EP – Jaket KMTETI – open PO (7 Mei)',
      'EP – EP Merch – open PO (7 Mei)',
      'IN – Elektropos (7 Mei)',
      'HM – Konten KMTETI (11 Mei)',
      'AD – Info Lomba dan Beasiswa (14 Mei)',
      'IN – Video Profil (17 & 28 Mei — target jadi sebelum 30 Mei)',
      'SM – KMTETI Beramal (22 Mei)',
      'IN – Voltanews (menyesuaikan jadwal wisuda Mei)',
    ],
    photos: ['/images/home/life/envelope-image/3.webp', '/images/home/life/envelope-image/1.webp'],
  },
  {
    month: 'Juni',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Jun)',
      'AD – Bank Materi (1 Jun)',
      'WS – Bootcamp (mulai 1 Jun)',
      'HM – Konten KMTETI (1 Jun)',
      'EP – Kaftet (1 Jun)',
      'AD – Sosialisasi Kerja Praktik (5 Jun)',
      'IN – Kalender Bulanan (12 Jun)',
      'AD – Info Lomba dan Beasiswa (14 Jun)',
      'SM – KMTETI Mengabdi (20 Jun)',
    ],
    photos: ['/images/home/life/envelope-image/1.webp', '/images/home/life/envelope-image/2.webp'],
  },
  {
    month: 'Juli',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Jul)',
      'IN – Kalender Bulanan (1 Jul)',
      'AD – Info Lomba dan Beasiswa (14 Jul)',
      'AD – Tracer Study Alumni DTETI (21 Jul)',
      'EP – Kaftet (22 Jul)',
      'AD – Forum Warga TETI (28 Jul)',
      'IN – TETI-on-the-Wall (28 Jul)',
    ],
    photos: ['/images/home/life/envelope-image/2.webp', '/images/home/life/envelope-image/3.webp'],
  },
  {
    month: 'Agustus',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Agu)',
      'IN – Kalender Bulanan (1 Agu)',
      'EP – Kaftet (1 Agu)',
      'IN – Elektropos (7 Agu)',
      'EP – Bank Sponsor (10 Agu)',
      'AD – Info Lomba dan Beasiswa (14 Agu)',
      'WS – Pelatihan Ganjil (17 Agu)',
      'HM – Konten KMTETI (17 Agu)',
      'HM – Public Speaking Training (24 Agu)',
      'IN – Voltanews (menyesuaikan wisuda Agustus)',
    ],
    photos: ['/images/home/life/envelope-image/3.webp', '/images/home/life/envelope-image/1.webp'],
  },
  {
    month: 'September',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Sep)',
      'IN – Kalender Bulanan (1 Sep)',
      'WS – Pelatihan Ganjil (1 Sep)',
      'EP – Kaftet (1 Sep)',
      'HM – Kunjungan (5 & 19 Sep, @2 hari)',
      'EP – EP Day (11 Sep, collab Kewirausahaan Farmasi)',
      'HM – Konten KMTETI (14 Sep)',
      'WS – TETI Programming Week (21 Sep)',
      'IN – MelDEA (24 Sep, masih tentatif)',
    ],
    photos: ['/images/home/life/envelope-image/1.webp', '/images/home/life/envelope-image/2.webp'],
  },
  {
    month: 'Oktober',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Okt)',
      'IN – Kalender Bulanan (1 Okt)',
      'HM – Konten KMTETI (12 Okt)',
      'AD – Info Lomba dan Beasiswa (14 Okt)',
      'AD – Kunjungan Industri (25 Okt, 3–4 hari)',
    ],
    photos: ['/images/home/life/envelope-image/2.webp', '/images/home/life/envelope-image/3.webp'],
  },
  {
    month: 'November',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Nov)',
      'IN – Kalender Bulanan (1 Nov)',
      'IN – Elektropos (7 Nov)',
      'AD – Info Lomba dan Beasiswa (14 Nov)',
      'HM – Konten KMTETI (16 Nov)',
      'HM – OPH & Capstone (21 Nov, 2 hari)',
      'IN – Voltamagz (21 Nov)',
      'IN – Voltanews (menyesuaikan wisuda November)',
    ],
    photos: ['/images/home/life/envelope-image/3.webp', '/images/home/life/envelope-image/1.webp'],
  },
  {
    month: 'Desember',
    items: [
      'AD – Aspirasi Umum & Akademis (1 Des)',
      'HM – Konten KMTETI (4 Des)',
      'EP – Jaket KMTETI – pembagian (10 Des)',
      'EP – EP Merch – bundling dengan jaket (10 Des)',
      'IN – After Movie (12 Des)',
      'AD – Info Lomba dan Beasiswa (14 Des)',
    ],
    photos: ['/images/home/life/envelope-image/1.webp', '/images/home/life/envelope-image/2.webp'],
  },
]

export default function Kalender({ initialEvents }: { initialEvents?: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  const agendaData = React.useMemo(() => {
    if (initialEvents && initialEvents.length > 0) {
      return staticAgendaData
    }
    return staticAgendaData
  }, [initialEvents])

  useGSAP(
    () => {
      if (!containerRef.current) return

      // SVG Wavy Path Scroll Animation (Progressive Line Draw on Scroll)
      const path = pathRef.current
      if (path) {
        const pathLength = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 85%',
            scrub: 0.5,
          },
        })
      }
    },
    { scope: containerRef },
  )

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Page Header matching News header image */}
      <PageHeader
        title="Agenda Bulanan"
        description="Kegiatan Rutin KMTETI"
        imageSrc="/images/news/news-header.webp"
      />

      {/* 2. Overlap Container with E1F3FA background */}
      <PageOverlap className="min-h-screen bg-[#E1F3FA]">
        {/* Zero-Lag Ultra High-Performance Radial Gradient Ambient Blobs */}
        <div className="absolute top-[2%] -left-[12%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(199,224,124,0.7)_0%,rgba(199,224,124,0.35)_40%,transparent_70%)] pointer-events-none transform-gpu" />
        <div className="absolute top-[25%] -right-[12%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(100,202,239,0.7)_0%,rgba(100,202,239,0.35)_40%,transparent_70%)] pointer-events-none transform-gpu" />
        <div className="absolute top-[50%] -left-[12%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(199,224,124,0.7)_0%,rgba(199,224,124,0.35)_40%,transparent_70%)] pointer-events-none transform-gpu" />
        <div className="absolute top-[75%] -right-[12%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(100,202,239,0.7)_0%,rgba(100,202,239,0.35)_40%,transparent_70%)] pointer-events-none transform-gpu" />

        <div className="relative z-10 w-full">
          <DefaultLayout className="pt-8 md:pt-12 pb-24 md:pb-36">
            <div ref={containerRef} className="relative w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-24 overflow-hidden">
              
              {/* Vertical Wavy Path Line for Desktop */}
              <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 800 4000" fill="none" preserveAspectRatio="none">
                  {/* Static background path guide */}
                  <path
                    d="M 400 0 C 250 200 250 400 400 600 C 550 800 550 1000 400 1200 C 250 1400 250 1600 400 1800 C 550 2000 550 2200 400 2400 C 250 2600 250 2800 400 3000 C 550 3200 550 3400 400 3600 C 250 3800 250 3900 400 4000"
                    stroke="#c5deea"
                    strokeWidth="6"
                    strokeDasharray="14 16"
                    strokeLinecap="round"
                  />
                  {/* Animated path revealing as user scrolls */}
                  <path
                    ref={pathRef}
                    d="M 400 0 C 250 200 250 400 400 600 C 550 800 550 1000 400 1200 C 250 1400 250 1600 400 1800 C 550 2000 550 2200 400 2400 C 250 2600 250 2800 400 3000 C 550 3200 550 3400 400 3600 C 250 3800 250 3900 400 4000"
                    stroke="#0D627C"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {agendaData.map((data, idx) => {
                const isEven = idx % 2 === 0 // Even index: Card on left, photo on right. Odd index: photo on left, Card on right.

                return (
                  <div
                    key={data.month}
                    className={`month-timeline-item relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Event List Card (AOS fade-up animation from bottom) */}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="700"
                      className="event-card w-full md:w-[48%] bg-white/95 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_14px_35px_rgba(0,0,0,0.05)] border border-white transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
                    >
                      <H3 className="text-[#0D627C] font-heading font-semibold text-2xl sm:text-3xl mb-4">
                        {data.month}
                      </H3>
                      <ul className="flex flex-col gap-2 font-sans text-neutral-700 text-xs sm:text-sm leading-relaxed">
                        {data.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <span className="text-[#0D627C] font-semibold select-none">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stacked Hover Photo Component (AOS fade-up animation from bottom with delay) */}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="150"
                      className="photo-stack w-full md:w-[48%] flex items-center justify-center"
                    >
                      <div className="group relative w-[200px] sm:w-[230px] md:w-[260px] aspect-[4/3] transform-gpu">
                        {/* Back Card (Rotates Left & Moves Left on Hover) */}
                        <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] border-4 border-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.18)] overflow-hidden bg-gray-100 rotate-[-4deg] transition-transform duration-500 ease-out will-change-transform group-hover:-translate-x-[42%] group-hover:-rotate-[10deg]">
                          <Image
                            src={data.photos[0]}
                            alt={`${data.month} 1`}
                            fill
                            className="object-cover"
                            sizes="260px"
                          />
                        </div>
                        {/* Front Card (Rotates Right & Moves Right on Hover) */}
                        <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] border-4 border-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.18)] overflow-hidden bg-gray-100 rotate-[4deg] transition-transform duration-500 ease-out will-change-transform group-hover:translate-x-[42%] group-hover:rotate-[10deg]">
                          <Image
                            src={data.photos[1]}
                            alt={`${data.month} 2`}
                            fill
                            className="object-cover"
                            sizes="260px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </DefaultLayout>
        </div>
      </PageOverlap>
    </main>
  )
}
