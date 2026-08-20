'use client'

import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import { useRouter } from 'next/navigation'
import FolderCard from './FolderCard'

export interface FolderData {
  name: string
  slug?: string
  photo: string
  logo: string
  description?: string
}

export interface FolderCarouselRef {
  scrollLeft: () => void
  scrollRight: () => void
  resetScroll: () => void
}

interface FolderCarouselProps {
  data: FolderData[]
  activeIndex?: number | null
  onActiveChange: (index: number | null) => void
  containerNode?: HTMLElement | null
  basePath?: string
  folderStartColor?: string
  folderEndColor?: string
}

const FolderCarousel = forwardRef<FolderCarouselRef, FolderCarouselProps>(({ 
  data, 
  activeIndex = null, 
  onActiveChange, 
  basePath = '',
  folderStartColor,
  folderEndColor
}, ref) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' })
      }
    },
    scrollRight: () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' })
      }
    },
    resetScroll: () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'instant' })
      }
    }
  }))

  return (
    <div 
      ref={scrollContainerRef} 
      className="overflow-x-auto w-full px-4 md:px-11 lg:px-22 pt-24 -mt-24 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory md:snap-none scroll-smooth"
    >
      <div 
        ref={carouselRef}
        className="flex pb-10 w-max will-change-transform pl-4 pr-10"
        onMouseLeave={() => onActiveChange(null)}
      >
        {data.map((item, index) => {
          const rotation = index % 2 === 0 ? '-rotate-[1deg]' : 'rotate-[2deg]'
          const zIndex = index + 1

          return (
            <div
              key={index}
              className={`shrink-0 w-[92vw] max-w-[400px] md:w-[425px] snap-center md:snap-align-none ${rotation} transition-transform duration-500 cursor-pointer group ${
                activeIndex === index ? '-translate-y-[50px]' : 'hover:-translate-y-[50px]'
              }`}
              style={{
                marginLeft: index === 0 ? '0' : '-36px',
                zIndex,
              }}
              onMouseEnter={() => onActiveChange(index)}
              onClick={() => {
                if (basePath) {
                  router.push(`${basePath}/${item.slug || item.name.toLowerCase().replace(/\s+/g, '-')}`)
                }
              }}
            >
              <FolderCard
                name={item.name}
                photo={item.photo}
                logo={item.logo}
                className="w-full"
                startColor={folderStartColor}
                endColor={folderEndColor}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
})

FolderCarousel.displayName = 'FolderCarousel'
export default FolderCarousel
