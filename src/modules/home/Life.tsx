'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { H2, B2 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Life() {
  const sectionRef = useRef<HTMLElement>(null)
  const photo1Ref = useRef<HTMLDivElement>(null)
  const photo2Ref = useRef<HTMLDivElement>(null)
  const photo3Ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            start: 'bottom bottom',
            end: '+=100%',
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(
          photo1Ref.current,
          { y: 150, rotate: -6 },
          { y: -45, rotate: -8, ease: 'none' },
          0,
        )

        tl.fromTo(
          photo2Ref.current,
          { y: 150, rotate: 0 },
          { y: -75, rotate: 0, ease: 'none' },
          0,
        )

        tl.fromTo(
          photo3Ref.current,
          { y: 150, rotate: 6 },
          { y: -45, rotate: 8, ease: 'none' },
          0,
        )
      })

      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          photo1Ref.current,
          { y: 60, rotate: -6 },
          { y: -20, rotate: -8, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'bottom 30%', scrub: 1 } },
        )

        gsap.fromTo(
          photo2Ref.current,
          { y: 60, rotate: 0 },
          { y: -35, rotate: 0, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'bottom 30%', scrub: 1 } },
        )

        gsap.fromTo(
          photo3Ref.current,
          { y: 60, rotate: 6 },
          { y: -20, rotate: 8, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'bottom 30%', scrub: 1 } },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <div className="relative z-10 w-full -mt-[95px] -mb-[40px]">
      <section
        ref={sectionRef}
        data-navbar-tone="light"
        id="life"
        className="w-full flex flex-col justify-between min-h-[620px] md:min-h-[720px] bg-[#F7FAFC] pt-[120px] md:pt-[150px] pb-0 relative overflow-hidden rounded-b-[40px] border-b-[2px] border-l-[2px] border-r-[2px] border-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08)]"
      >
        {/* Soft blue gradient background at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-[#D6EEF8]/60 to-transparent pointer-events-none z-0" />

        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Header Section matching KMTETI News typography & layout */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col md:flex-row justify-between items-start gap-8 mb-4 md:mb-6">
            <H2 className="text-[#0a4c5a] font-semibold md:w-1/3 text-left">
              Life at KMTETI
            </H2>
            <B2 className="text-gray-600 md:w-1/2 text-left leading-relaxed">
              At KMTETI, a spirit of optimism and possibility energizes our mission of discovery and learning. Here you&apos;ll find a place of intellectual expansiveness, wide-ranging perspectives, and freedom to explore new lines of thinking.
            </B2>
          </div>
        </div>

        {/* Envelope Graphic Area - Shorter envelope height, bottom-anchored */}
        <div className="w-full max-w-[1240px] mx-auto px-2 sm:px-6 relative mt-auto mb-0 select-none">
          <div className="relative w-full max-w-[1160px] mx-auto flex items-end justify-center aspect-[16/7.5]">
            
            {/* Layer 1: Envelope Back */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-end justify-center">
              <Image
                src="/images/home/life/envelope-base/belakang.webp"
                alt="Envelope Back"
                width={1160}
                height={540}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 1160px"
                className="w-full h-full object-contain object-bottom block"
                priority
              />
            </div>

            {/* Layer 2: 3 Photos sitting symmetrically inside envelope */}
            <div className="absolute bottom-[22%] sm:bottom-[24%] md:bottom-[25%] w-[82%] sm:w-[76%] md:w-[72%] h-[55%] sm:h-[60%] z-10 flex items-center justify-center pointer-events-auto">
              {/* Photo 1 (Left) */}
              <div
                ref={photo1Ref}
                className="absolute left-[5%] sm:left-[6%] bottom-0 w-[44%] sm:w-[40%] aspect-[4/3] rounded-[16px] sm:rounded-[26px] md:rounded-[32px] border-2 sm:border-4 border-white shadow-[0_14px_32px_rgba(0,0,0,0.18)] overflow-hidden z-10 bg-gray-200 will-change-transform"
              >
                <Image
                  src="/images/home/life/envelope-image/1.webp"
                  alt="Life at KMTETI 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 400px"
                />
              </div>

              {/* Photo 3 (Right) */}
              <div
                ref={photo3Ref}
                className="absolute right-[5%] sm:right-[6%] bottom-0 w-[44%] sm:w-[40%] aspect-[4/3] rounded-[16px] sm:rounded-[26px] md:rounded-[32px] border-2 sm:border-4 border-white shadow-[0_14px_32px_rgba(0,0,0,0.18)] overflow-hidden z-10 bg-gray-200 will-change-transform"
              >
                <Image
                  src="/images/home/life/envelope-image/3.webp"
                  alt="Life at KMTETI 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 400px"
                />
              </div>

              {/* Photo 2 (Center - Layered on top in center) */}
              <div
                ref={photo2Ref}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[48%] sm:w-[44%] aspect-[4/3] rounded-[16px] sm:rounded-[26px] md:rounded-[32px] border-2 sm:border-4 border-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] overflow-hidden z-20 bg-gray-200 will-change-transform"
              >
                <Image
                  src="/images/home/life/envelope-image/2.webp"
                  alt="Life at KMTETI 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 450px"
                />
              </div>
            </div>

            {/* Layer 3: Envelope Front Pocket */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-30 flex items-end justify-center">
              <Image
                src="/images/home/life/envelope-base/depan.webp"
                alt="Envelope Front"
                width={1160}
                height={540}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 1160px"
                className="w-full h-full object-contain object-bottom block"
                priority
              />
            </div>

            {/* Layer 4: Button Agenda Bulanan - Prominently visible in center cutout */}
            <div className="absolute bottom-[10%] sm:bottom-[12%] md:bottom-[16%] left-1/2 -translate-x-1/2 z-40">
              <Link href="/kalender">
                <Button
                  variant="secondary"
                  size="default"
                >
                  <span>Agenda Bulanan</span>
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
