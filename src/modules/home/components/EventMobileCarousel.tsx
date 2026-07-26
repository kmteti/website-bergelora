'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import EventFolderCard from './EventFolderCard'
import { B3, H4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'

interface EventMobileCarouselProps {
  data: {
    slug: string
    name: string
    photo: string
    description: string
  }[]
}

export default function EventMobileCarousel({ data }: EventMobileCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0) // Default item pertama
  const router = useRouter()

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollLeft = container.scrollLeft
    // Asumsi item pertama adalah representasi lebar semua item
    const itemElement = container.children[0] as HTMLElement
    if (itemElement) {
      const itemWidth = itemElement.clientWidth
      const gap = 16 // gap-4
      const newIndex = Math.round(scrollLeft / (itemWidth + gap))
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < data.length) {
        setActiveIndex(newIndex)
      }
    }
  }

  const handleNavigate = (slug: string) => {
    router.push(`/event/${slug}`)
  }

  return (
    <div className="w-full flex flex-col pt-4 overflow-hidden">
      {/* Scrollable Carousel Area */}
      <div 
        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ paddingLeft: '4%', paddingRight: '4%' }}
        onScroll={handleScroll}
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigate(item.slug)}
            className="w-[92%] shrink-0 snap-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            <EventFolderCard name={item.name} photo={item.photo} />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center items-center gap-2 mt-2 mb-6">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx
                ? 'w-6 h-2 bg-[#2D2D2D]'
                : 'w-2 h-2 bg-[#D9D9D9]'
            }`}
          />
        ))}
      </div>

      {/* Description Area */}
      <div className="w-full px-6 pt-2 pb-12 transition-all duration-300">
        <div className="flex flex-col items-center">
          <H4 className="text-[#0a4c5a] text-center mb-4">{data[activeIndex].name}</H4>
          <B3 className="text-[#0a4c5a] text-center">
            {data[activeIndex].description}
          </B3>
          <Button 
            className="mt-6 font-semibold"
            onClick={() => handleNavigate(data[activeIndex].slug)}
          >
            Jelajahi Event
          </Button>
        </div>
      </div>
    </div>
  )
}
