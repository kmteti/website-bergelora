'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight, Image as ImageIcon, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const cardsData = [
  {
    type: 'PROKER',
    typeClassName: 'bg-yellow-100 text-neutral-1000',
    date: '12 April',
    title: 'Muhammad Farrel Al Ghazy Telah Dilantik Menjadi Ketua BEM 2026/2027',
  },
  {
    type: 'BERITA',
    typeClassName: 'bg-primary-100 text-primary-500',
    date: '12 April',
    title: 'Muhammad Farrel Al Ghazy Telah Dilantik Menjadi Ketua BEM 2026/2027',
  },
  {
    type: 'KETIGA',
    typeClassName: 'bg-secondary-100 text-secondary-500',
    date: '12 April',
    title: 'Muhammad Farrel Al Ghazy Telah Dilantik Menjadi Ketua BEM 2026/2027',
  },
  {
    type: 'KETIGA',
    typeClassName: 'bg-neutral-200 text-neutral-600',
    date: '12 April',
    title: 'Muhammad Farrel Al Ghazy Telah Dilantik Menjadi Ketua BEM 2026/2027',
  },
]

// Duplicate cards to ensure smooth infinite marquee even on ultrawide screens
const marqueeCards = [...cardsData, ...cardsData]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center w-full flex-col justify-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing/hero/hero.webp"
          alt="Hero KMTETI"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/30 transition-colors"></div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col justify-start items-center px-3 text-center sm:mb-28 lg:mb-28 -mt-60 sm:-mt-45">
        <h1 className="text-h2 sm:text-h3 lg:text-h1 max-w-[1100px] text-white drop-shadow-xl sm:whitespace-nowrap">
          Asah <span className="text-primary-200">Potensi</span>, Bangun{' '}
          <span className="text-primary-200">Kolaborasi</span>, dan
          <br className="hidden md:block" /> Perluas{' '}
          <span className="text-primary-200">Kontribusi</span> Bersama Kami
        </h1>
        <Button
          variant="blue"
          size="lg"
          className="relative z-10 w-fit mt-10 rounded-xl px-8 py-6 text-lg font-bold "
        >
          Jelajahi Kami
          <ExternalLink size={24} className="ml-2" />
        </Button>
      </div>

      {/* Infinite Marquee Cards at the absolute bottom */}
      <div className="absolute flex flex-col items-center gap-6 bottom-0 z-20 py-2 w-full overflow-hidden">
        {/* Subtle gradient overlay on edges for smooth entry/exit effect (optional, removed for raw brutalism but good for marquee) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-neutral-1000/20 to-transparent sm:w-16"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-neutral-1000/20 to-transparent sm:w-16"></div>

        <div className="group flex w-full">
          <div className="flex w-max animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]">
            {marqueeCards.map((card, idx) => (
              <div
                key={`marquee-1-${idx}`}
                className="group/card flex w-[260px] md:w-[280px] shrink-0 items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_3px_0_0_#e5e5e5] transition-all hover:translate-y-[1px] hover:cursor-pointer hover:shadow-[0_2px_0_0_#e5e5e5] active:translate-y-[3px] active:shadow-none select-none"
              >
                {/* Image Placeholder */}
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg bg-neutral-200">
                  <ImageIcon className="text-white" size={24} />
                </div>

                {/* Card Info */}
                <div className="flex flex-1 flex-col justify-center gap-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`rounded px-1.5 py-0.5 text-[8px] font-bold ${card.typeClassName}`}
                    >
                      {card.type}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-1000">{card.date}</span>
                  </div>
                  <h3 className="line-clamp-2 text-xs font-bold leading-snug text-neutral-1000">
                    {card.title}
                  </h3>
                </div>

                {/* Arrow Button */}
                <div className="flex shrink-0 items-center">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-200 text-white transition-all hover:bg-primary-300 hover:shadow-[0_2px_0_0_#138bb6] active:translate-y-[2px] active:shadow-none">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex w-max animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {marqueeCards.map((card, idx) => (
              <div
                key={`marquee-2-${idx}`}
                className="group/card flex w-[260px] md:w-[280px] shrink-0 items-center gap-3 rounded-2xl border-2 border-neutral-200 bg-white p-3 shadow-[0_3px_0_0_#e5e5e5] transition-all hover:translate-y-[1px] hover:cursor-pointer hover:shadow-[0_2px_0_0_#e5e5e5] active:translate-y-[3px] active:shadow-none select-none"
              >
                {/* Image Placeholder */}
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg bg-neutral-200">
                  <ImageIcon className="text-white" size={24} />
                </div>

                {/* Card Info */}
                <div className="flex flex-1 flex-col justify-center gap-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`rounded px-1.5 py-0.5 text-[8px] font-bold ${card.typeClassName}`}
                    >
                      {card.type}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-1000">{card.date}</span>
                  </div>
                  <h3 className="line-clamp-2 text-xs font-bold leading-snug text-neutral-1000">
                    {card.title}
                  </h3>
                </div>

                {/* Arrow Button */}
                <div className="flex shrink-0 items-center">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-200 text-white transition-all hover:bg-primary-300 hover:shadow-[0_2px_0_0_#138bb6] active:translate-y-[2px] active:shadow-none">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a
          href="/berita"
          className="group flex items-center gap-1 font-sans text-b4 font-medium text-white/80 transition-colors hover:text-white pb-2 sm:pb-4"
        >
          Lihat Berita Lainnya
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
