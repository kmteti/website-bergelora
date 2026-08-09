'use client'

import React, { useState, useCallback, useRef } from 'react'
import { B3, B4, H2, H4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import FolderCarousel, { FolderCarouselRef } from './components/FolderCarousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Tab = 'divisi' | 'bso'

const divisiData = [
  {
    name: 'Adkesma',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/adkesma.svg',
    description: 'Mengadvokasi kesejahteraan mahasiswa, menyalurkan aspirasi secara proaktif, dan memastikan terpenuhinya hak-hak akademik di lingkungan kampus.'
  },
  {
    name: 'Biro Pengembangan Organisasi',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/bpo.svg',
    description: 'Mengembangkan sistem keorganisasian dan mengevaluasi kinerja pengurus KMTETI agar terus beroperasi secara profesional, efektif, dan terstruktur.'
  },
  {
    name: 'Electropreneur',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/ep.svg',
    description: 'Mewadahi pengembangan jiwa kewirausahaan mahasiswa serta memfasilitasi penciptaan inovasi produk bisnis yang memiliki nilai jual di masyarakat.'
  },
  {
    name: 'Humas',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/humas.svg',
    description: 'Menjembatani komunikasi eksternal, membangun citra positif organisasi, dan terus memperluas jaringan relasi KMTETI dengan berbagai pihak strategis.'
  },
  {
    name: 'Infokom',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/infokom.svg',
    description: 'Mengelola pusat publikasi resmi KMTETI dan menyebarkan ragam informasi penting melalui kemasan konten visual dan jurnalistik yang menarik.'
  },
  {
    name: 'Mikat',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/mikat.svg',
    description: 'Memfasilitasi penyaluran minat dan talenta mahasiswa di bidang seni, budaya, serta olahraga melalui berbagai kegiatan rutin dan kompetisi.'
  },
  {
    name: 'Sosmas',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/sosmas.svg',
    description: 'Berdedikasi memberikan kontribusi dan dampak nyata kepada masyarakat luas melalui berbagai program pengabdian dan kampanye aksi sosial.'
  },
  {
    name: 'Workshop',
    photo: '/images/home/about/about.webp',
    logo: '/logo/divisi/ws.svg',
    description: 'Membangun kemandirian finansial organisasi melalui unit usaha kreatif sekaligus melatih ketajaman insting bisnis bagi setiap anggota.'
  },
]

const bsoData = [
  {
    name: 'Beacon',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/beacon.svg',
    description: 'Wadah eksplorasi riset teknologi cerdas dan kompetisi inovasi digital bagi mahasiswa yang antusias terhadap perkembangan sistem masa depan.',
  },
  {
    name: 'Magatrika',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/magatrika.svg',
    description: 'Badan kajian khusus yang berfokus pada riset energi terbarukan, kelistrikan, serta inovasi teknologi tepat guna yang berdampak luas.',
  },
  {
    name: 'Night Login',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/night-login.svg',
    description: 'Komunitas intensif untuk mengasah skill tingkat lanjut di bidang software engineering, keamanan siber, dan competitive programming.',
  },
  {
    name: 'SKI Al-Hannaan',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/ski-al-hannaan.svg',
    description: 'Pusat pembinaan keimanan dan ukhuwah Islamiyah yang aktif menebarkan nilai-nilai dakwah dan kerohanian di lingkungan kampus.',
  },
  {
    name: 'SKK DTETI',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/skk-dteti.svg',
    description: 'Wadah kerohanian Kristen dan Katolik yang menyelenggarakan program persekutuan dan pelayanan iman yang hangat bagi seluruh mahasiswa.',
  },
]

export default function DivisiBSO() {
  const carouselRef = useRef<FolderCarouselRef>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('divisi')

  const currentData = activeTab === 'divisi' ? divisiData : bsoData
  const basePath = activeTab === 'divisi' ? '/divisi' : '/bso'
  const emptyText = activeTab === 'divisi'
    ? 'Hover di salah satu folder untuk melihat detail mengenai divisi.'
    : 'Hover di salah satu folder untuk melihat detail mengenai BSO.'

  const handleTabChange = useCallback((tab: Tab) => {
    if (tab === activeTab) return
    setActiveIndex(null)
    setActiveTab(tab)
  }, [activeTab])

  return (
    <div className="relative z-20 w-full -mt-16">
      <section 
        data-navbar-tone="light"
        className={`w-full flex flex-col overflow-hidden rounded-t-[40px] border-t-[2px] border-l-[2px] border-r-[2px] border-white shadow-[0_0_50px_rgba(0,0,0,0.05)] pt-[110px] relative transition-colors duration-300 ${
          activeTab === 'divisi' ? 'bg-gradient-to-b from-[#E1F3FA] from-[51%] to-[#C5E2ED]' : 'bg-gradient-to-b from-[#eaf9ff] from-[51%] to-[#A3D1E0]'
        }`}
      >
        {/* Background Gradient Blobs */}
        <div className="absolute top-[50%] -translate-y-1/2 -left-[10%] md:left-[5%] w-[200px] md:w-[250px] aspect-square rounded-full bg-[#C7E07C] blur-[70px] md:blur-[90px] pointer-events-none z-0" />
        <div className="absolute top-[50%] -translate-y-1/2 -right-[10%] md:right-[5%] w-[150px] md:w-[200px] aspect-square rounded-full bg-[#64CAEF] blur-[80px] md:blur-[100px] pointer-events-none z-0" />

        <div className="relative w-full flex flex-col flex-grow">
          {/* Header Title & Navigation Row */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 mb-32 md:mb-28 relative z-10">
            {/* Title (animated) */}
            <H2 className="text-primary-500 transition-opacity duration-300">
              {activeTab === 'divisi' ? 'Divisi' : 'Badan Semi Otonom'}
            </H2>

            {/* Navigation Group */}
            <div className="flex items-center gap-4">
              {/* Left Arrow Button */}
              <Button
                variant="black"
                size="icon"
                onClick={() => carouselRef.current?.scrollLeft()}
                className="shadow-lg drop-shadow-sm rounded-xl w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/85"
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
                className="shadow-lg drop-shadow-sm rounded-xl w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/85"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>

          {/* Reusable Carousel Component - kept mounted for stable layout height */}
          <div className="relative z-10">
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
          <div className={`relative z-20 w-full flex-grow -mt-18 md:-mt-15 pt-8 md:pt-12 pb-8 md:pb-16 transition-colors duration-300 hidden md:block ${
            activeTab === 'divisi' ? 'bg-[#E1F3FA]' : 'bg-[#eaf9ff]'
          }`}>
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
                  <B3 className="text-gray-500 text-center">
                    {emptyText}
                  </B3>
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
                      <H4 className="text-[#0a4c5a] text-center md:text-left line-clamp-2">{item.name}</H4>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col items-center md:items-start">
                      <B3 className="text-gray-700 text-center md:text-left">{item.description}</B3>
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
