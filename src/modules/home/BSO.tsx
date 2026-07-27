'use client'

import React, { useState } from 'react'
import { B3, H2, H4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import FolderCarousel from './components/FolderCarousel'

const bsoData = [
  {
    name: 'Beacon',
    photo: '/images/home/about/about.webp',
    logo: '/logo/bso/beacon.svg',
    description:
      'Wadah eksplorasi riset teknologi cerdas dan kompetisi inovasi digital bagi mahasiswa yang antusias terhadap perkembangan sistem masa depan.',
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

export default function BSO() {
  const [containerNode, setContainerNode] = useState<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="relative z-10 w-full -mt-1">
      <section
        ref={setContainerNode}
        data-navbar-tone="light"
        id="bso"
        className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#eaf9ff] to-[#A3D1E0] pt-[110px] relative overflow-hidden border-l-[2px] border-r-[2px] border-white"
      >
        {/* Background Gradient Blobs */}
        <div className="absolute top-[42%] -translate-y-1/2 -left-[10%] md:left-[5%] w-[150px] md:w-[200px] aspect-square rounded-full bg-[#64CAEF] blur-[80px] md:blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-[42%] -translate-y-1/2 -right-[10%] md:right-[5%] w-[200px] md:w-[250px] aspect-square rounded-full bg-[#C7E07C] blur-[70px] md:blur-[90px] pointer-events-none z-0" />

        <div className="relative w-full flex flex-col flex-grow">
          {/* Header Title & Navigation */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-between mb-32 md:mb-28 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <H2 className="text-primary-500">Badan Semi Otonom</H2>
            </div>
          </div>

          {/* Reusable Carousel Component */}
          <div className="relative z-10">
            <FolderCarousel
              data={bsoData}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
              containerNode={containerNode}
              basePath="/bso"
            />
          </div>

          {/* Description Detail matching Divisi layout with overlap */}
          <div className="relative z-20 w-full flex-grow bg-[#eaf9ff] -mt-18 md:-mt-15 pt-8 md:pt-12 pb-8 md:pb-16 transition-all duration-300">
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
                    Hover di salah satu folder untuk melihat detail mengenai BSO.
                  </B3>
                </div>

                {/* Content States */}
                {bsoData.map((item, idx) => (
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
                      <Link href={`/bso/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button className="mt-6 md:hidden">Jelajahi BSO</Button>
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
