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
}

const IMGS = [
  '/images/home/life/envelope-image/1.webp',
  '/images/home/life/envelope-image/2.webp',
  '/images/home/life/envelope-image/3.webp',
]
const pics = (i: number) => [IMGS[i % 3], IMGS[(i + 1) % 3], IMGS[(i + 2) % 3]]

const staticAgendaData: MonthlyAgenda[] = [
  {
    month: 'Maret',
    items: [
      'Pelatihan Kesekretariatan dan Kebendaharaan',
      'Sertijab',
      'KMTETI Berbagi',
      'Porseniteti',
      'Pelatihan Genap',
      'EP CLASS',
    ],
  },
  {
    month: 'April',
    items: [
      'Porseniteti',
      'Bank Materi',
      'Pelatihan Genap',
      'EP CLASS',
      'Foto Kabinet & Rilis Pengurus',
      'Makrab',
      'Masterclass x PST',
    ],
  },
  {
    month: 'Mei',
    items: [
      'Pelatihan Genap',
      'KMTETI Beramal',
      'EP CLASS',
      'Jaket KMTETI (Open PO Batch 1)',
      'Elektropos',
      'Video Profil',
    ],
  },
  {
    month: 'Juni',
    items: [
      'Bank Materi',
      'Sosialisasi Kerja Praktik',
      'Bootcamp',
      'ETT',
      'Technocorner',
    ],
  },
  {
    month: 'Juli',
    items: [
      'Forum Warga TETI',
      'Tracer Study Alumni DTETI',
      'Bootcamp',
      'KMTETI Mengabdi',
      'Latihan Rutin',
      'TETI-on-the-Wall',
    ],
  },
  {
    month: 'Agustus',
    items: [
      'Pelatihan Ganjil',
      'TLS',
      'Elektropos',
      'Voltanews (waktu tergantung wisuda)',
    ],
  },
  {
    month: 'September',
    items: [
      'Pelatihan Ganjil',
      'TETI Programming Week',
      'Public Speaking Training',
      'Jaket KMTETI dan EP Merch (Open PO Batch 2)',
      'EP Day',
      'MeIDEA',
    ],
  },
  {
    month: 'Oktober',
    items: [
      'Kunjungan Industri',
      'Pelatihan Ganjil',
      'TETI Programming Week',
      'Jaket KMTETI dan EP Merch',
    ],
  },
  {
    month: 'November',
    items: [
      'Pelatihan Ganjil',
      'TETI Programming Week',
      'OPH & Capstone',
      'BBB',
      'Voltamagz',
      'Elektropos',
    ],
  },
  {
    month: 'Desember',
    items: [
      'Jaket KMTETI (Pembagian jaket)',
      'EP Merch',
      'After Movie',
    ],
  },
  {
    month: 'Tentatif / Sepanjang Tahun',
    items: [
      'Info Lomba, Beasiswa dan Magang',
      'Aspirasi Umum dan Akademis',
      'Konten KMTETI',
      'Kaftet',
      'Kalender Bulanan',
      'Kunjungan',
      'Capstone Resource Sharing Program',
      'Media Adkesma',
      'El Nino (tanggal menyesuaikan TLS)',
      'Bank Sponsor',
    ],
  },
]

export default function Kalender({ initialEvents }: { initialEvents?: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [timeline, setTimeline] = React.useState({ d: '', w: 0, h: 0 })

  const agendaData = React.useMemo(() => {
    if (initialEvents && initialEvents.length > 0) {
      return staticAgendaData
    }
    return staticAgendaData
  }, [initialEvents])

  // Path digenerate dari posisi card asli: mulai di titik tengah card bulan pertama, berakhir di
  // titik tengah card terakhir, lewat titik tengah tiap .event-card. Diukur ulang tiap layout
  // berubah (font/gambar selesai load, resize) lewat ResizeObserver.
  React.useEffect(() => {
    const box = containerRef.current
    if (!box) return

    const measure = () => {
      const cards = Array.from(box.querySelectorAll<HTMLElement>('.event-card'))
      if (cards.length < 2) return
      const base = box.getBoundingClientRect()
      const pts = cards.map((card) => {
        const r = card.getBoundingClientRect()
        return {
          x: Math.round(r.left - base.left + r.width / 2),
          y: Math.round(r.top - base.top + r.height / 2),
        }
      })
      // Cubic bezier dengan control point vertikal di tengah dua titik → liukan halus.
      const d = pts.slice(1).reduce((acc, p, i) => {
        const prev = pts[i]
        const mid = Math.round((prev.y + p.y) / 2)
        return `${acc} C ${prev.x} ${mid}, ${p.x} ${mid}, ${p.x} ${p.y}`
      }, `M ${pts[0].x} ${pts[0].y}`)
      setTimeline((prev) =>
        prev.d === d ? prev : { d, w: Math.round(base.width), h: Math.round(base.height) },
      )
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(box)
    box.querySelectorAll('.event-card').forEach((card) => ro.observe(card))
    return () => ro.disconnect()
  }, [agendaData])

  // 1. GSAP Scroll Animations
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Desktop: Fade-up animation
      mm.add('(min-width: 768px)', () => {
        const els = gsap.utils.toArray<HTMLElement>('.event-card, .photo-stack')
        gsap.set(els, { opacity: 0, y: 24 })
        els.forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            delay: el.classList.contains('photo-stack') ? 0.15 : 0,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        })
      })

      // Mobile: Scroll-Triggered Auto Open Photo Stack saat foto itu sendiri masuk layar HP
      mm.add('(max-width: 767px)', () => {
        const photoStacks = gsap.utils.toArray<HTMLElement>('.photo-stack-container')
        photoStacks.forEach((photoStack) => {
          ScrollTrigger.create({
            trigger: photoStack,
            start: 'top 60%',
            end: 'bottom 15%',
            toggleClass: { targets: photoStack, className: 'is-open' },
          })
        })
      })

      return () => mm.revert()
    },
    { scope: containerRef },
  )

  useGSAP(
    () => {
      // Desktop: Progressive wavy line draw on scroll
      const path = pathRef.current
      const cards = containerRef.current?.querySelectorAll<HTMLElement>('.event-card')
      if (path && timeline.d && cards?.length) {
        const pathLength = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[0],
            start: 'bottom bottom',
            endTrigger: cards[cards.length - 1],
            end: 'bottom bottom',
            scrub: 2,
            invalidateOnRefresh: true,
          },
        })
        ScrollTrigger.refresh()
      }
    },
    { scope: containerRef, dependencies: [timeline.d], revertOnUpdate: true },
  )

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* Inline styles for mobile horizontal card spread when in view with smooth stagger delay */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .photo-stack-container .photo-layer-left,
          .photo-stack-container .photo-layer-center,
          .photo-stack-container .photo-layer-right {
            transition: transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .photo-stack-container.is-open .photo-layer-left {
            transform: translate(-34%, -2%) rotate(-9deg) scale(0.96) !important;
            transition-delay: 250ms !important;
          }
          .photo-stack-container.is-open .photo-layer-center {
            transform: translate(0%, -6%) rotate(0deg) scale(1.02) !important;
            transition-delay: 380ms !important;
          }
          .photo-stack-container.is-open .photo-layer-right {
            transform: translate(34%, -2%) rotate(9deg) scale(0.96) !important;
            transition-delay: 500ms !important;
          }
        }
      `}</style>

      {/* 1. Page Header matching News header image */}
      <PageHeader
        title="Agenda Bulanan"
        description="Kegiatan Rutin KMTETI"
        imageSrc="/images/kalender/Header.jpeg"
        imageClassName="object-bottom"
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
            <p className="max-w-5xl mx-auto mb-10 md:mb-14 rounded-2xl bg-white/70 border border-white px-5 py-4 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <span className="font-semibold text-[#0D627C]">Disclaimer:</span> timeline program
              kerja di halaman ini bersifat perencanaan dan bisa berbeda dengan pelaksanaan di
              lapangan.
            </p>
            <div ref={containerRef} className="relative w-full max-w-5xl mx-auto flex flex-col gap-14 md:gap-24">
              
              {/* Mobile Timeline Spine (Garis Vertikal di Kiri khusus Mobile) */}
              <div
                className="md:hidden absolute left-4 sm:left-6 top-7 bottom-7 w-[2px] bg-gradient-to-b from-[#0D627C] via-[#94cde3] to-[#0D627C]/30 pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Vertical Wavy Path Line for Desktop — d-nya digenerate dari posisi card (lihat effect di atas) */}
              <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                <svg
                  className="w-full h-full"
                  viewBox={`0 0 ${timeline.w} ${timeline.h}`}
                  fill="none"
                >
                  {/* Static background path guide */}
                  <path
                    d={timeline.d}
                    stroke="#c5deea"
                    strokeWidth="8"
                    strokeDasharray="18 20"
                    strokeLinecap="round"
                  />
                  {/* Animated path revealing as user scrolls */}
                  <path
                    ref={pathRef}
                    d={timeline.d}
                    stroke="#0D627C"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {agendaData.map((data, idx) => {
                const isEven = idx % 2 === 0 // Even index: Card on left, photo on right. Odd index: photo on left, Card on right.
                const photos = pics(idx)

                return (
                  <div
                    key={data.month}
                    className={`month-timeline-item relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16 pl-8 sm:pl-12 md:pl-0 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Mobile Timeline Node Dot */}
                    <div
                      className="md:hidden absolute left-4 sm:left-6 top-7 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0D627C] border-2 border-white shadow-sm ring-4 ring-[#0D627C]/20 z-20"
                      aria-hidden="true"
                    />

                    {/* Event List Card */}
                    <div
                      className="event-card w-full md:w-[48%] bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.05)] border border-white transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
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

                    {/* Stacked Photo Component */}
                    <div
                      className="photo-stack w-full md:w-[48%] flex items-center justify-center pt-2 pb-4 md:py-0"
                    >
                      {/* Container dengan transisi bouncy spring overshoot */}
                      <div className="photo-stack-container group relative w-[180px] sm:w-[210px] md:w-[180px] lg:w-[260px] aspect-[207.53/173.87] transform-gpu">
                        {/* Kartu kanan (layer 1) */}
                        <div className="photo-layer-right absolute w-[91.1%] h-[90.9%] left-[2.6%] top-0 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] border-3 sm:border-4 border-white shadow-[0px_8px_25px_0px_rgba(0,0,0,0.18)] overflow-hidden bg-gray-100 rotate-[5deg] transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform md:group-hover:translate-x-[45%] md:group-hover:-translate-y-[58%] md:group-hover:rotate-[4deg]">
                          <Image
                            src={photos[0]}
                            alt={`${data.month} 1`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 210px, 260px"
                          />
                        </div>
                        {/* Kartu kiri (layer 2) */}
                        <div className="photo-layer-left absolute w-[91.1%] h-[90.9%] left-[-5.3%] top-[2.9%] rounded-[24px] sm:rounded-[36px] md:rounded-[40px] border-3 sm:border-4 border-white shadow-[0px_8px_25px_0px_rgba(0,0,0,0.18)] overflow-hidden bg-gray-100 -rotate-[5deg] transition-transform duration-[600ms] delay-[40ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform md:group-hover:-translate-x-[45%] md:group-hover:-translate-y-[46%] md:group-hover:-rotate-[4deg]">
                          <Image
                            src={photos[1]}
                            alt={`${data.month} 2`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 210px, 260px"
                          />
                        </div>
                        {/* Kartu tengah (layer 3) */}
                        <div className="photo-layer-center absolute w-[91.1%] h-[90.9%] left-[1.9%] top-[4.6%] rounded-[24px] sm:rounded-[36px] md:rounded-[40px] border-3 sm:border-4 border-white shadow-[0px_8px_25px_0px_rgba(0,0,0,0.18)] overflow-hidden bg-gray-100 transition-transform duration-[600ms] delay-[80ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform md:group-hover:translate-x-[5%] md:group-hover:translate-y-[20%] md:group-hover:rotate-[1deg]">
                          <Image
                            src={photos[2]}
                            alt={`${data.month} 3`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 210px, 260px"
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
