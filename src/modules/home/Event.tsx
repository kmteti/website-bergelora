'use client'

import { Batik } from '@/components/elements/BatikBackground'
import { CarouselKanan, CarouselKiri } from '@/components/elements/ButtonCarousel'
import { LabelKMTETI } from '@/components/elements/LabelKMTETI'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useMemo, useState, TouchEvent } from 'react'

const events = [
  {
    title: 'NESCO',
    category: 'Electrical sport and competition',
    description:
      'NESCO adalah kegiatan tahunan berupa Electrical Sport and Competition yang diselenggarakan untuk mewadahi minat dan bakat mahasiswa serta pelajar di bidang keprofesian elektro dan keolahragaan.',
    color: 'from-[#064e3b] to-[#0f766e]',
  },
  {
    title: 'FindIT!',
    category: 'Kompetisi teknologi nasional',
    description:
      'FindIT! adalah kompetisi teknologi tingkat nasional dan wadah edukasi IT yang menjadi ajang bagi mahasiswa dan pelajar untuk berinovasi dan mengasah kemampuan di bidang teknologi informasi.',
    color: 'from-[#0f172a] to-[#1e3a8a]',
  },
  {
    title: 'TECHNOCORNER',
    category: 'Ajang inovasi teknologi',
    description:
      'TECHNOCORNER adalah ajang inovasi teknologi terkemuka yang mengkolaborasikan seminar IT, kompetisi teknologi, dan pameran karya inovatif skala nasional untuk mendorong perkembangan teknologi di Indonesia.',
    color: 'from-[#171717] to-[#404040]',
  },
]

export default function Event() {
  const [activeIndex, setActiveIndex] = useState(1) // Start with Find IT! in center
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const visibleEvents = useMemo(() => {
    if (events.length === 0) return []
    const prevIndex = (activeIndex - 1 + events.length) % events.length
    const nextIndex = (activeIndex + 1) % events.length
    return [
      { ...events[prevIndex], position: 'left' },
      { ...events[activeIndex], position: 'center' },
      { ...events[nextIndex], position: 'right' },
    ]
  }, [activeIndex])

  const previousEvent = () => {
    setActiveIndex((current) => (current - 1 + events.length) % events.length)
  }

  const nextEvent = () => {
    setActiveIndex((current) => (current + 1) % events.length)
  }

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (diff > 50) {
      nextEvent()
    } else if (diff < -50) {
      previousEvent()
    }
    setTouchStart(null)
  }

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-100 px-6 py-20 sm:px-10 lg:px-16"
      data-aos="fade-up"
    >
      <Batik className="batik-5" isWhite={true} />
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Header Label */}
        <LabelKMTETI
          type="kmteti-logotype-short-white"
          isKMTETI={true}
          className="mb-12 justify-center shadow-lg shadow-primary-500/20"
          kmtetiProps={{ width: 128, height: 32, className: 'h-8 w-auto' }}
        >
          <h2 className="text-xl sm:text-2xl font-bold font-sans leading-tight flex flex-row items-center gap-x-2">
            Event
          </h2>
        </LabelKMTETI>

        {/* 3D Cover Flow Carousel */}
        <div
          className="relative w-full flex items-center justify-center h-[280px] sm:h-[400px] mb-12 [perspective:1200px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleEvents.map((event) => {
            const isCenter = event.position === 'center'
            const isLeft = event.position === 'left'
            const isRight = event.position === 'right'

            return (
              <div
                key={event.title}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-2xl ${
                  isCenter
                    ? 'z-30 w-[80%] sm:w-[60%] lg:w-[50%] h-full opacity-100 shadow-2xl shadow-neutral-900/40 [transform:translateX(0)_translateZ(0)_rotateY(0)_scale(1)]'
                    : isLeft
                      ? 'z-20 w-[80%] sm:w-[60%] lg:w-[50%] h-[85%] opacity-70 shadow-xl max-sm:[transform:translateX(-65%)_translateZ(-100px)_rotateY(15deg)_scale(0.95)] sm:[transform:translateX(-70%)_translateZ(-100px)_rotateY(15deg)_scale(0.95)]'
                      : 'z-20 w-[80%] sm:w-[60%] lg:w-[50%] h-[85%] opacity-70 shadow-xl max-sm:[transform:translateX(65%)_translateZ(-100px)_rotateY(-15deg)_scale(0.95)] sm:[transform:translateX(70%)_translateZ(-100px)_rotateY(-15deg)_scale(0.95)]'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => {
                  if (isLeft) previousEvent()
                  if (isRight) nextEvent()
                }}
              >
                {/* Event Card Content */}
                <div
                  className={`relative w-full h-full bg-gradient-to-br ${event.color} flex flex-col items-center justify-center rounded-2xl overflow-hidden ring-1 ring-white/10`}
                >
                  {/* Placeholder for actual image */}
                  <h3 className="text-4xl sm:text-6xl font-black text-white/30 italic drop-shadow-md px-4 text-center [transform:translateZ(30px)]">
                    {event.title}
                  </h3>

                  {/* Content Overlay for Center Card */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 flex flex-row items-end justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0 pointer-events-none'} [transform:translateZ(50px)]`}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{event.title}</h3>
                    <Button className="bg-[#1ca3cc] hover:bg-[#1582a3] text-white rounded-lg px-4 py-2 text-xs font-bold flex items-center gap-2 shadow-lg">
                      Lihat Detail <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-5 mb-10 relative z-40">
          <CarouselKiri
            type="button"
            onClick={previousEvent}
            aria-label="Event sebelumnya"
            className="w-12 h-12 hover:scale-105 transition-transform"
          />
          <div className="flex gap-2" aria-hidden="true">
            {events.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-[#1ca3cc]' : 'w-2 bg-neutral-300'
                }`}
              />
            ))}
          </div>
          <CarouselKanan
            type="button"
            onClick={nextEvent}
            aria-label="Event berikutnya"
            className="w-12 h-12 hover:scale-105 transition-transform"
          />
        </div>

        {/* Description */}
        <p
          key={events[activeIndex].title}
          className="max-w-4xl mx-auto text-center text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-medium px-6 min-h-24 animate-in fade-in duration-500"
        >
          {events[activeIndex].description}
        </p>
      </div>
    </section>
  )
}
