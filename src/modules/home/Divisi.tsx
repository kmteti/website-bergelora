'use client'

import React, { useRef, useState } from 'react'
import { B3, H2, H4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FolderCarousel from './components/FolderCarousel'

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

export default function Divisi() {
  const [containerNode, setContainerNode] = useState<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="relative z-20 w-full -mt-16">
      <section 
        ref={setContainerNode}
        data-navbar-tone="light"
        className="w-full min-h-screen flex flex-col overflow-hidden rounded-t-[40px] border-t-[2px] border-l-[2px] border-r-[2px] border-white shadow-[0_0_50px_rgba(0,0,0,0.05)] bg-gradient-to-b from-[#E1F3FA] from-[51%] to-[#C5E2ED] pt-[110px] relative"
      >
        {/* Background Gradient Blobs */}
        <div className="absolute top-[50%] -translate-y-1/2 -left-[10%] md:left-[5%] w-[200px] md:w-[250px] aspect-square rounded-full bg-[#C7E07C] blur-[70px] md:blur-[90px] pointer-events-none z-0" />
        <div className="absolute top-[50%] -translate-y-1/2 -right-[10%] md:right-[5%] w-[150px] md:w-[200px] aspect-square rounded-full bg-[#64CAEF] blur-[80px] md:blur-[100px] pointer-events-none z-0" />

        <div className="relative w-full flex flex-col flex-grow">
          {/* Header Title & Navigation */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-between mb-32 md:mb-28 relative z-10">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <H2 className="text-primary-500">Divisi</H2>
            </div>
          </div>

          {/* Reusable Carousel Component */}
          <div className="relative z-10">
            <FolderCarousel 
              data={divisiData} 
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex} 
              containerNode={containerNode}
              basePath="/divisi"
            />
          </div>

          {/* Description Detail matching Figma with overlap */}
          <div className="relative z-20 w-full flex-grow bg-[#E1F3FA] -mt-18 md:-mt-15 pt-8 md:pt-12 pb-8 md:pb-16 transition-all duration-300">
            <div className="container mx-auto px-4 md:px-11 lg:px-22">
              <div className="grid w-full">
                {/* Empty State */}
                <div 
                  className={`col-start-1 row-start-1 transition-all duration-300 w-full hidden md:flex justify-center items-center ${
                    activeIndex === null 
                      ? 'opacity-100 translate-y-0 z-10 delay-300' 
                      : 'opacity-0 translate-y-4 pointer-events-none delay-0'
                  }`}
                >
                  <B3 className="text-gray-500 text-center">
                    Hover di salah satu folder untuk melihat detail mengenai divisi.
                  </B3>
                </div>

                {/* Content States */}
                {divisiData.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`col-start-1 row-start-1 transition-all duration-300 w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start ${
                      activeIndex === idx 
                        ? 'opacity-100 translate-y-0 z-10 delay-300' 
                        : 'opacity-0 translate-y-4 pointer-events-none delay-0'
                    }`}
                  >
                    <div className="md:col-span-4 lg:col-span-3">
                      <H4 className="text-[#0a4c5a] text-center md:text-left">{item.name}</H4>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col items-center md:items-start">
                      <B3 className="text-gray-700 text-center md:text-left">{item.description}</B3>
                      <Link href={`/divisi/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button 
                          className="mt-6 md:hidden"
                        >
                          Jelajahi Divisi
                        </Button>
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
