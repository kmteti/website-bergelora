'use client'

import React, { useState, useCallback, useMemo, useRef } from 'react'
import { B3, H2, H4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import FolderCarousel, { FolderCarouselRef, FolderData } from './components/FolderCarousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type Tab = 'divisi' | 'bso'

export interface DivisiBSOProps {
  initialDivisiData: FolderData[]
}

// Copy hover folder homepage, disadur dari script Video Profil KMTETI 2026.
// Sengaja terpisah dari `tujuan`/`deskripsi_tujuan` di CMS yang dipakai halaman divisi.
const divisiDescriptions: Record<string, string> = {
  adkesma:
    'Menjadi jembatan aspirasi warga DTETI sekaligus menjaga kesejahteraan mahasiswa, mulai dari isu akademik, fasilitas, kesehatan mental, hingga penanganan berbagai bentuk kekerasan.',
  bpo:
    'Biro yang menangani pengembangan organisasi dan kaderisasi guna menjaga kualitas kepengurusan serta memastikan KMTETI terus berkembang dari tahun ke tahun.',
  electropreneur:
    'Wadah pengembangan jiwa kewirausahaan melalui program dan project bisnis, mulai dari penyusunan ide, pengelolaan usaha, hingga pelaksanaannya secara langsung.',
  humas:
    'Menghubungkan DTETI dengan berbagai pihak di luar kampus melalui program Kunjungan, Open House, Public Speaking Training, dan Sharing Alumni untuk memperluas jaringan.',
  infokom:
    'Pengelola seluruh kebutuhan media dan informasi KMTETI melalui empat sub divisi: Videografi, Desain, Jurnalistik, dan Media Sosial.',
  'minat-dan-bakat':
    'Mewadahi minat, bakat, dan prestasi non-akademik melalui tiga sub divisi: Olahraga, Seni, serta SUTET yang mengkoordinasikan supporter DTETI.',
  sosmas:
    'Menjalankan pengabdian kepada masyarakat melalui program berkelanjutan Desa Binaan serta penyaluran bantuan dan berbagai aksi kemanusiaan.',
  workshop:
    'Menyelenggarakan pelatihan teknis dan proyek pengembangan seperti Technocorner, ELNINO, Summer School, dan Manajerial Lomba bagi anggota DTETI.',
}

const bsoData: FolderData[] = [
  {
    name: 'Bionce',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/bionce.svg',
    description:
      'Komunitas bagi mahasiswa yang tertarik dengan perkembangan, inovasi, dan riset di bidang teknik biomedis.',
  },
  {
    name: 'Magatrika',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/magatrika.svg',
    description:
      'Badan kajian khusus yang berfokus pada riset energi terbarukan, kelistrikan, serta inovasi teknologi tepat guna yang berdampak luas.',
  },
  {
    name: 'Night Login',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/night-login.svg',
    description:
      'Komunitas intensif untuk mengasah skill tingkat lanjut di bidang software engineering, keamanan siber, dan competitive programming.',
  },
  {
    name: 'SKI Al-Hannaan',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/ski-al-hannaan.svg',
    description:
      'Pusat pembinaan keimanan dan ukhuwah Islamiyah yang aktif menebarkan nilai-nilai dakwah dan kerohanian di lingkungan kampus.',
  },
  {
    name: 'SKK DTETI',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/skk-dteti.svg',
    description:
      'Wadah kerohanian Kristen dan Katolik yang menyelenggarakan program persekutuan dan pelayanan iman yang hangat bagi seluruh mahasiswa.',
  },
]

export default function DivisiBSO({ initialDivisiData }: DivisiBSOProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const titleWrapperRef = useRef<HTMLDivElement>(null)
  const navGroupRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<FolderCarouselRef>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('divisi')
  const [animPhase, setAnimPhase] = useState<'idle' | 'exit' | 'enter'>('idle')
  const isTransitioningRef = useRef(false)

  useGSAP(
    () => {
      if (headerRef.current && titleWrapperRef.current && navGroupRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
          },
        })

        tl.fromTo(
          titleWrapperRef.current,
          { y: '115%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' },
        ).fromTo(
          navGroupRef.current,
          { y: '115%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6', // 200ms delay
        )
      }
    },
    { scope: sectionRef },
  )

  const divisiData = useMemo(
    () =>
      initialDivisiData.map((item) => ({
        ...item,
        description: (item.slug && divisiDescriptions[item.slug]) || item.description,
      })),
    [initialDivisiData],
  )

  const currentData = activeTab === 'divisi' ? divisiData : bsoData
  const basePath = activeTab === 'divisi' ? '/divisi' : '/bso'
  const buttonLabel = activeTab === 'divisi' ? 'Lihat Divisi' : 'Lihat BSO'
  const emptyText =
    activeTab === 'divisi'
      ? 'Hover di salah satu folder untuk melihat detail mengenai divisi.'
      : 'Hover di salah satu folder untuk melihat detail mengenai BSO.'

  const handleTabChange = useCallback(
    (nextTab: Tab) => {
      if (nextTab === activeTab || isTransitioningRef.current) return
      isTransitioningRef.current = true
      setActiveIndex(null)

      // Step 1: Slide down current folders physically (no opacity fade)
      setAnimPhase('exit')

      setTimeout(() => {
        // Step 2: Switch data & reset scroll position
        setActiveTab(nextTab)
        carouselRef.current?.resetScroll()

        // Prepare entering state positioned down below
        setAnimPhase('enter')

        // Step 3: Trigger physical slide up into place
        requestAnimationFrame(() => {
          setTimeout(() => {
            setAnimPhase('idle')
            isTransitioningRef.current = false
          }, 30)
        })
      }, 320)
    },
    [activeTab],
  )

  return (
    <div className="relative z-20 w-full -mt-16">
      <section
        ref={sectionRef}
        data-navbar-tone="light"
        className={`w-full flex flex-col overflow-hidden rounded-t-[40px] border-t-[2px] border-l-[2px] border-r-[2px] border-white shadow-[0_0_50px_rgba(0,0,0,0.05)] pt-[110px] relative transition-colors duration-300 ${
          activeTab === 'divisi'
            ? 'bg-gradient-to-b from-[#E1F3FA] from-[51%] to-[#C5E2ED]'
            : 'bg-gradient-to-b from-[#eaf9ff] from-[51%] to-[#A3D1E0]'
        }`}
      >
        {/* Background Gradient Blobs */}
        <div className="absolute top-[50%] -translate-y-1/2 -left-[10%] md:left-[5%] w-[200px] md:w-[250px] aspect-square rounded-full bg-[#C7E07C] blur-[70px] md:blur-[90px] pointer-events-none z-0" />
        <div className="absolute top-[50%] -translate-y-1/2 -right-[10%] md:right-[5%] w-[150px] md:w-[200px] aspect-square rounded-full bg-[#64CAEF] blur-[80px] md:blur-[100px] pointer-events-none z-0" />

        <div className="relative w-full flex flex-col flex-grow">
          {/* Header Title & Navigation Row with Masked Curtain Entrance */}
          <div ref={headerRef} className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 mb-32 md:mb-28 relative z-10">
            {/* Title with vertical rolling ticker animation & entrance mask */}
            <div className="overflow-hidden py-2 -my-2 px-1 -mx-1">
              <div ref={titleWrapperRef} className="will-change-transform pb-1">
                <H2
                  className={cn(
                    "text-primary-500 transition-transform transform-gpu will-change-transform",
                    animPhase === 'exit' && "-translate-y-full duration-250 ease-in",
                    animPhase === 'enter' && "translate-y-full duration-0",
                    animPhase === 'idle' && "translate-y-0 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  )}
                >
                  {activeTab === 'divisi' ? 'Divisi' : 'Badan Semi Otonom'}
                </H2>
              </div>
            </div>

            {/* Navigation Group with entrance mask (padding to prevent shadow clipping) */}
            <div className="overflow-hidden py-3 -my-3 px-2 -mx-2">
              <div ref={navGroupRef} className="flex items-center gap-4 will-change-transform py-1">
                {/* Left Arrow Button */}
                <Button
                  variant="black"
                  size="icon"
                  onClick={() => carouselRef.current?.scrollLeft()}
                  className="shadow-lg drop-shadow-sm bg-black/60 hover:bg-black/85"
                  aria-label="Scroll left"
                >
                  <ArrowLeft className="h-5 w-5 text-white" />
                </Button>

                {/* Toggle Capsule */}
                <div className="inline-flex items-center bg-white/40 backdrop-blur-sm rounded-2xl p-1 shadow-sm border border-white/60 gap-1">
                  <Button
                    variant={activeTab === 'divisi' ? 'secondary' : 'black'}
                    size="default"
                    onClick={() => handleTabChange('divisi')}
                    className="rounded-xl"
                  >
                    Divisi
                  </Button>
                  <Button
                    variant={activeTab === 'bso' ? 'secondary' : 'black'}
                    size="default"
                    onClick={() => handleTabChange('bso')}
                    className="rounded-xl"
                  >
                    BSO
                  </Button>
                </div>

                {/* Right Arrow Button */}
                <Button
                  variant="black"
                  size="icon"
                  onClick={() => carouselRef.current?.scrollRight()}
                  className="shadow-lg drop-shadow-sm bg-black/60 hover:bg-black/85"
                  aria-label="Scroll right"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* Reusable Carousel Component with pure physical slide-down / slide-up transition */}
          <div 
            className={cn(
              "relative z-10 transition-transform transform-gpu will-change-transform",
              animPhase === 'exit' && "translate-y-[450px] duration-300 ease-[cubic-bezier(0.32,0,0.67,0)] pointer-events-none",
              animPhase === 'enter' && "translate-y-[450px] duration-0",
              animPhase === 'idle' && "translate-y-0 duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
            )}
          >
            <FolderCarousel
              ref={carouselRef}
              data={currentData}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
              basePath={basePath}
              folderStartColor={activeTab === 'bso' ? '#00C0E8' : undefined}
              folderEndColor={activeTab === 'bso' ? '#0088FF' : undefined}
            />
          </div>

          {/* Description Detail matching Figma with overlap */}
          {/* Hover-driven detail: unreachable on touch, so it does not reserve height there */}
          <div
            className="relative z-20 w-full flex-grow -mt-18 md:-mt-15 pt-8 md:pt-12 pb-8 md:pb-16 transition-colors duration-300 hidden md:block 
            bg-[#eaf9ff]
          "
          >
            <div className="container mx-auto px-4 md:px-11 lg:px-22">
              <div className="grid w-full min-h-0 md:min-h-[80px] items-center">
                {/* Empty State */}
                <div
                  className={`col-start-1 row-start-1 transition-all duration-300 w-full hidden md:flex justify-center items-center ${
                    activeIndex === null
                      ? 'opacity-100 translate-y-0 z-10 delay-300'
                      : 'opacity-0 translate-y-4 pointer-events-none delay-0'
                  }`}
                >
                  <B3 className="text-gray-500 text-center">{emptyText}</B3>
                </div>

                {/* Content States */}
                {currentData.map((item, idx) => (
                  <div
                    key={`${activeTab}-${idx}`}
                    className={`col-start-1 row-start-1 transition-all duration-300 w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start ${
                      activeIndex === idx
                        ? 'opacity-100 translate-y-0 z-10 delay-300'
                        : 'opacity-0 translate-y-4 pointer-events-none delay-0'
                    }`}
                  >
                    <div className="md:col-span-4 lg:col-span-3">
                      <H4 className="text-[#0a4c5a] text-center md:text-left line-clamp-2">
                        {item.name}
                      </H4>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col items-center md:items-start">
                      <B3 className="text-gray-700 text-center md:text-left">{item.description}</B3>
                      <Link
                        href={`${basePath}/${item.slug || item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Button className="mt-6 md:hidden">{buttonLabel}</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
