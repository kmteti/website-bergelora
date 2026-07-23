'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { B3, H2, H4 } from '@/components/elements/Typography'
import EventFolderCard from './components/EventFolderCard'
import EventMobileCarousel from './components/EventMobileCarousel'

const eventData = [
  {
    name: 'Find-IT',
    photo: '/images/home/about/about.webp',
    description: 'Find-IT (Future IT and National Development) adalah kompetisi berskala nasional yang berfokus pada inovasi teknologi, keamanan siber, dan pengembangan perangkat lunak.',
  },
  {
    name: 'Technocorner',
    photo: '/images/home/about/about.webp',
    description: 'Technocorner adalah ajang kompetisi teknologi dan edukasi berskala nasional yang bertujuan mengembangkan potensi inovator muda dalam memajukan teknologi di Indonesia.',
  },
  {
    name: 'NESCO',
    photo: '/images/home/about/about.webp',
    description: 'NESCO (National Electrical School Competition) merupakan wadah kompetisi bergengsi untuk pelajar yang memiliki minat tinggi di bidang teknik kelistrikan dan energi cerdas.',
  },
]

export default function Event() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const router = useRouter()

  const handleNavigate = (name: string) => {
    router.push(`/event/${name.toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <div className="relative z-20 w-full -mt-1">
      <section
        data-navbar-tone="light"
        id="event"
        className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#EAF9FF] to-[#E1F3FA] pt-[110px] relative overflow-hidden rounded-b-[40px] border-l-[2px] border-r-[2px] border-white"
      >
        {/* Background Gradient Blobs */}
        <div className="absolute top-[60%] -translate-y-1/2 -left-[10%] md:left-[5%] w-[150px] md:w-[200px] aspect-square rounded-full bg-[#64CAEF] blur-[80px] md:blur-[100px] pointer-events-none z-21" />
        <div className="absolute top-[60%] -translate-y-1/2 -right-[10%] md:right-[5%] w-[200px] md:w-[250px] aspect-square rounded-full bg-[#C7E07C] blur-[70px] md:blur-[90px] pointer-events-none z-21" />

        <div className="relative w-full flex flex-col flex-grow">
          {/* Header Title */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-center mb-8 md:mb-10 relative">
            <H2 className="text-[#0a4c5a] text-center">Event Ternama Nasional</H2>
          </div>

          {/* Desktop Layout (hidden on mobile) */}
          <div className="hidden md:flex flex-col flex-grow w-full">
            {/* 3 Overlapping Folders Layout */}
            <div 
              className="relative z-10 w-full px-4 md:px-11 lg:px-22 pb-8 pt-4 md:pb-10 flex justify-center items-start"
              onMouseLeave={() => setActiveIndex(null)}
            >
            {/* Left Folder */}
            <div 
              className="absolute left-[-2%] md:left-[5%] lg:left-[10%] top-16 md:top-20 z-10 w-[75%] sm:w-[50%] md:w-[42%] max-w-[420px] group cursor-pointer transition-all duration-300 hover:-translate-y-4"
              onMouseEnter={() => setActiveIndex(0)}
              onClick={() => handleNavigate(eventData[0].name)}
            >
              <EventFolderCard name={eventData[0].name} photo={eventData[0].photo} />
            </div>

            {/* Right Folder */}
            <div 
              className="absolute right-[-2%] md:right-[5%] lg:right-[10%] top-16 md:top-20 z-30 w-[75%] sm:w-[50%] md:w-[42%] max-w-[420px] group cursor-pointer transition-all duration-300 hover:-translate-y-4"
              onMouseEnter={() => setActiveIndex(2)}
              onClick={() => handleNavigate(eventData[2].name)}
            >
              <EventFolderCard name={eventData[2].name} photo={eventData[2].photo} />
            </div>

            {/* Center Folder (Front) */}
            <div 
              className="relative z-20 w-[85%] sm:w-[60%] md:w-[50%] max-w-[450px] group cursor-pointer transition-all duration-300 hover:-translate-y-4"
              onMouseEnter={() => setActiveIndex(1)}
              onClick={() => handleNavigate(eventData[1].name)}
            >
              <EventFolderCard name={eventData[1].name} photo={eventData[1].photo} />
            </div>
          </div>

          {/* Description Detail matching BSO layout */}
          <div className="relative z-30 w-full flex-grow pt-8 md:pt-10 pb-16 md:pb-24 transition-all duration-300">
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
                  <B3 className="text-[#0a4c5a]/50 text-center">
                    Hover di salah satu folder untuk melihat detail mengenai Event.
                  </B3>
                </div>

                {/* Content States */}
                {eventData.map((item, idx) => (
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
                      <B3 className="text-[#0a4c5a] text-center md:text-left">
                        {item.description}
                      </B3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Mobile Layout (Spotlight Carousel) */}
          <div className="flex md:hidden flex-col flex-grow w-full relative z-30">
            <EventMobileCarousel data={eventData} />
          </div>
        </div>
      </section>
    </div>
  )
}
