'use client'

import React, { useRef } from 'react'
import { H2, B2 } from '@/components/elements/Typography'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function NewsHeader() {
  const headerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      if (headerRef.current && titleRef.current && descRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
          },
        })

        tl.fromTo(
          titleRef.current,
          { y: '115%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' },
        ).fromTo(
          descRef.current,
          { y: '115%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6', // 200ms delay
        )
      }
    },
    { scope: headerRef },
  )

  return (
    <div
      ref={headerRef}
      className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14"
    >
      <div className="overflow-hidden py-2 -my-2 px-1 -mx-1 md:w-1/3">
        <H2 ref={titleRef} className="text-[#0a4c5a] font-semibold text-left will-change-transform pb-1">
          KMTETI News
        </H2>
      </div>
      <div className="overflow-hidden py-2 -my-2 px-1 -mx-1 md:w-1/2">
        <B2
          ref={descRef}
          className="text-gray-600 text-left leading-relaxed will-change-transform pb-1"
        >
          Pusat kabar dan informasi terkini seputar kegiatan, inovasi, serta dinamika kehidupan
          mahasiswa di lingkungan KMTETI FT UGM.
        </B2>
      </div>
    </div>
  )
}
