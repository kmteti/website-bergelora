'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { H3, B4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

interface TujuanSectionProps {
  tujuan: string
  deskripsi: string
  gambar: string[]
  nama: string
  website?: string
  imageFit?: 'cover' | 'contain'
}

export function TujuanSection({ tujuan, deskripsi, gambar, nama, website, imageFit = 'contain' }: TujuanSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  
  // We'll store image refs in an array to animate them individually
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    // ponytail: positions read viewport width once on mount; a rotate-to-landscape
    // keeps the mobile layout until reload. Re-run inside a resize listener if that matters.
    const spread = window.innerWidth < 768 ? 0.55 : 1
    const initialPositions = [
      { x: -210 * spread, y: -70, rotation: -5 },
      { x: -70 * spread, y: -70, rotation: 3 },
      { x: 70 * spread, y: -70, rotation: -4 },
      { x: 210 * spread, y: -70, rotation: 6 },
      { x: -210 * spread, y: 70, rotation: 4 },
      { x: -70 * spread, y: 70, rotation: -6 },
      { x: 70 * spread, y: 70, rotation: 2 },
      { x: 210 * spread, y: 70, rotation: -8 }
    ]

    // Set initial GSAP styles specifically to avoid flash
    gsap.set(textRef.current, { filter: 'blur(12px)', opacity: 0.3, scale: 0.8 })
    imageRefs.current.forEach((img, i) => {
      const init = initialPositions[i % initialPositions.length]
      gsap.set(img, { x: init.x, y: init.y, rotation: init.rotation, scale: 0.85 })
    })

    // Timeline controlled by scrolling with pinning
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=800',
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      }
    })

    // Animate text (unblur and scale up)
    tl.to(textRef.current, {
      filter: 'blur(0px)',
      opacity: 1,
      scale: 1,
      duration: 1.0,
      ease: 'power2.inOut'
    }, 0)

    // Calculate target positions for exactly 8 images
    // Desktop: ring around the text. Mobile: two rows above/below it,
    // since there is no horizontal room to sit beside the paragraph.
    const width = window.innerWidth
    const isNarrow = width < 768
    
    // Scale horizontal reach dynamically based on screen width so it never overflows screen edge
    const hReach = width >= 1440 ? 430 : width >= 1200 ? 380 : width >= 1024 ? 330 : 280
    const topReach = width >= 1024 ? 180 : 140

    const targets = isNarrow
      ? [
          { x: -115, y: -300, rotation: -10 },
          { x: -40, y: -350, rotation: -3 },
          { x: 40, y: -350, rotation: 4 },
          { x: 115, y: -300, rotation: 10 },
          { x: -115, y: 300, rotation: 8 },
          { x: -40, y: 350, rotation: -3 },
          { x: 40, y: 350, rotation: 3 },
          { x: 115, y: 300, rotation: -8 },
        ]
      : [
          { x: -hReach, y: -100, rotation: -10 }, // 0: Far Left Top
          { x: -topReach, y: -260, rotation: -4 }, // 1: Top Left
          { x: topReach, y: -260, rotation: 4 },   // 2: Top Right
          { x: hReach, y: -100, rotation: 10 },   // 3: Far Right Top
          { x: -hReach, y: 100, rotation: 6 },    // 4: Far Left Bottom
          { x: -topReach, y: 260, rotation: -2 },  // 5: Bottom Left Center
          { x: topReach, y: 260, rotation: 2 },    // 6: Bottom Right Center
          { x: hReach, y: 100, rotation: -8 }     // 7: Far Right Bottom
        ]

    imageRefs.current.forEach((img, i) => {
      if (!img) return
      const target = targets[i % targets.length]
      
      tl.to(img, {
        x: target.x,
        y: target.y,
        rotation: target.rotation,
        scale: 1,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 0)
    })
  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-[900px] md:min-h-[800px] flex items-center justify-center py-20 overflow-hidden cursor-default group"
    >
      {/* Absolute centered images */}
      {gambar && gambar.length > 0 && (() => {
        const shapeClasses = [
          "w-32 h-24 md:w-44 md:h-30 lg:w-48 lg:h-32", // 0: horizontal
          "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36", // 1: square
          "w-24 h-32 md:w-28 md:h-40 lg:w-32 lg:h-48", // 2: vertical
          "w-32 h-24 md:w-44 md:h-30 lg:w-48 lg:h-32", // 3: horizontal
          "w-24 h-32 md:w-28 md:h-40 lg:w-32 lg:h-48", // 4: vertical
          "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36", // 5: square
          "w-32 h-24 md:w-44 md:h-30 lg:w-48 lg:h-32", // 6: horizontal
          "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36", // 7: square
        ]
        return (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            {gambar.map((gbr, idx) => {
              const isSvg = gbr.toLowerCase().endsWith('.svg')
              const fitMode = imageFit !== 'contain' ? (isSvg ? 'contain' : 'cover') : (isSvg ? 'contain' : 'cover')
              
              return (
                <div 
                  key={idx} 
                  ref={(el) => { imageRefs.current[idx] = el }}
                  className={`absolute rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-2 md:border-[3px] border-white transition-shadow duration-300 pointer-events-auto hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] bg-neutral-100 ${shapeClasses[idx % shapeClasses.length]}`}
                  style={{ zIndex: 40 + idx }}
                >
                  <div className={`relative w-full h-full ${isSvg ? 'p-3' : ''}`}>
                    <Image 
                      src={gbr.startsWith('/') ? gbr : `/${gbr}`} 
                      alt={`Galeri ${idx + 1} ${nama}`} 
                      fill 
                      className={fitMode === 'cover' ? 'object-cover' : 'object-contain'}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )
      })()}

      {/* Center Text */}
      <div 
        ref={textRef}
        className="relative z-10 text-center max-w-lg md:max-w-xl mx-auto px-4 flex flex-col items-center gap-4"
      >
        <div className="pointer-events-none">
          <H3 className="text-primary-500 mb-3 text-2xl md:text-3xl lg:text-4xl font-heading leading-tight">{tujuan}</H3>
          <B4 className="text-sm md:text-base text-neutral-600 leading-relaxed">{deskripsi}</B4>
        </div>
        
        {website && (
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="gap-2 shadow-lg drop-shadow-sm pointer-events-auto">
              Website Resmi
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
