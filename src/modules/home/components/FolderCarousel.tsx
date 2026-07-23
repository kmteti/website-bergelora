'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import FolderCard from './FolderCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export interface FolderData {
  name: string
  photo: string
  logo: string
  description?: string
}

interface FolderCarouselProps {
  data: FolderData[]
  activeIndex?: number | null
  onActiveChange: (index: number | null) => void
  containerNode: HTMLElement | null
  basePath?: string
}

export default function FolderCarousel({ data, activeIndex = null, onActiveChange, containerNode, basePath = '' }: FolderCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useGSAP(() => {
    const carousel = carouselRef.current

    if (!containerNode || !carousel) return

    const getScrollAmount = () => {
      const cards = carousel.children
      if (cards.length > 0) {
        const lastCard = cards[cards.length - 1] as HTMLElement
        const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2
        return Math.max(0, lastCardCenter - window.innerWidth / 2)
      }
      return carousel.scrollWidth - window.innerWidth + 100
    }
    
    // Di mobile, kita kalikan jarak scroll agar terasa lebih lambat (1 swipe = 1 card).
    // Di desktop kita tambah multiplier jadi 2 agar tidak terlalu licin/cepat.
    const scrollMultiplier = window.innerWidth < 768 ? 3 : 2

      gsap.to(carousel, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: containerNode,
          pin: true,
          scrub: 1, // Beri sedikit lag (1 detik) agar pergerakan lebih halus saat discroll cepat
          end: () => `+=${getScrollAmount() * scrollMultiplier}`,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (data.length - 1),
            duration: 0.3,
            ease: "power1.inOut"
          },
          onUpdate: (self) => {
            // Auto update active index on mobile & tablet (dibawah 1024px)
            if (window.innerWidth < 1024) {
              const activeIdx = Math.round(self.progress * (data.length - 1))
              onActiveChange(activeIdx)
            }
          }
        }
      })
  }, { scope: containerNode || undefined, dependencies: [containerNode, data] })

  return (
    <div className="overflow-hidden w-full px-4 md:px-11 lg:px-22 pt-24 -mt-24">
      <div 
        ref={carouselRef}
        className="flex pb-10 w-max"
        onMouseLeave={() => onActiveChange(null)}
      >
        {data.map((item, index) => {
          const rotation = index % 2 === 0 ? '-rotate-[1deg]' : 'rotate-[2deg]'
          const zIndex = index + 1

          return (
            <div
              key={index}
              className={`shrink-0 w-[95vw] max-w-[420px] md:w-[425px] ${rotation} transition-transform duration-500 cursor-pointer group ${
                activeIndex === index ? '-translate-y-[50px]' : 'hover:-translate-y-[50px]'
              }`}
              style={{
                marginLeft: index === 0 ? '0' : '-40px',
                zIndex,
              }}
              onMouseEnter={() => onActiveChange(index)}
              onClick={() => {
                if (basePath && window.innerWidth >= 1024) {
                  router.push(`${basePath}/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
                }
              }}
            >
              <FolderCard
                name={item.name}
                photo={item.photo}
                logo={item.logo}
                className="w-full"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
