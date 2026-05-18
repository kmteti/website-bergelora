'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate zoom and slight parallax
  // Max scale capped to 1.3 to avoid over-zooming on long pages
  const scale = Math.min(1 + scrollY * 0.0005, 1.3)
  const translateY = scrollY * 0.15

  return (
    <section
      className="relative flex h-[calc(100vh-6rem)] sm:h-[calc(100vh-8rem)] w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] mx-auto mt-[4.5rem] sm:mt-[5.5rem] mb-4 flex-col justify-end rounded-2xl overflow-hidden group"
      data-aos="fade-up"
    >
      {/* Background Image with scroll-based zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/landing/hero/hero.webp"
          alt="Hero KMTETI"
          fill
          className="object-cover object-bottom will-change-transform"
          style={{
            transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
            transformOrigin: 'bottom center',
          }}
          priority
        />
        {/* Minimalist sleek overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-neutral-950/10 to-transparent"></div>
      </div>

      {/* Content Container - Bottom Left Aligned */}
      <div className="relative z-10 flex flex-col justify-end w-full px-6 sm:px-12 lg:px-20 pb-12 sm:pb-16 lg:pb-24">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl text-white leading-[1.15] tracking-tight drop-shadow-lg">
          Asah <span className="text-primary-300">Potensi</span>, Bangun{' '}
          <span className="text-primary-300">Kolaborasi</span>,<br className="hidden sm:block" />{' '}
          dan Perluas <span className="text-primary-300">Kontribusi</span> Bersama Kami
        </h1>

        {/* Description / Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed drop-shadow-md">
          Wadah pengembangan diri dan kolaborasi mahasiswa DTETI UGM untuk menciptakan dampak nyata.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Button variant="blue" size="lg" className="w-fit rounded-xl px-8 py-6 text-lg font-bold">
            Jelajahi Kami
            <ExternalLink size={24} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
