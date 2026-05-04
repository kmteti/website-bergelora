'use client'

import { Batik } from '@/components/elements/BatikBackground'
import { CarouselKanan, CarouselKiri } from '@/components/elements/ButtonCarousel'
import { LabelKMTETI } from '@/components/elements/LabelKMTETI'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'

const events = [
  {
    title: 'FindIT!',
    category: 'Kompetisi teknologi nasional',
  },
  {
    title: 'NESCO',
    category: 'Electrical sport and competition',
  },
  {
    title: 'TECHNOCORNER',
    category: 'Ajang inovasi teknologi',
  },
  {
    title: 'International Class Program',
    category: 'Kolaborasi akademik global',
  },
  {
    title: 'Exchange Forum',
    category: 'Forum jejaring internasional',
  },
]

const visibleCount = 3

export default function Event() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleEvents = useMemo(
    () =>
      Array.from({ length: Math.min(visibleCount, events.length) }, (_, index) => {
        return events[(activeIndex + index) % events.length]
      }),
    [activeIndex],
  )

  const previousEvent = () => {
    setActiveIndex((current) => (current - 1 + events.length) % events.length)
  }

  const nextEvent = () => {
    setActiveIndex((current) => (current + 1) % events.length)
  }

  return (
    <section className="relative isolate overflow-hidden bg-neutral-100 px-6 py-20 sm:px-10 lg:px-16">
      <Batik className="batik-5" isWhite={true} />

      <Image
        src="/batik/batik-element.webp"
        alt=""
        width={210}
        height={210}
        className="pointer-events-none absolute -left-16 top-16 z-10 w-32 rotate-[18deg] drop-shadow-xl sm:w-44 lg:-left-20 lg:w-52"
        aria-hidden="true"
      />
      <Image
        src="/batik/batik-element.webp"
        alt=""
        width={210}
        height={210}
        className="pointer-events-none absolute -right-16 top-16 z-10 w-32 -rotate-[108deg] drop-shadow-xl sm:w-44 lg:-right-20 lg:w-52"
        aria-hidden="true"
      />
      <Image
        src="/batik/batik-element.webp"
        alt=""
        width={210}
        height={210}
        className="pointer-events-none absolute -bottom-20 -left-16 z-10 w-32 rotate-[102deg] drop-shadow-xl sm:w-44 lg:-left-20 lg:w-52"
        aria-hidden="true"
      />
      <Image
        src="/batik/batik-element.webp"
        alt=""
        width={210}
        height={210}
        className="pointer-events-none absolute -bottom-20 -right-16 z-10 w-32 -rotate-[18deg] drop-shadow-xl sm:w-44 lg:-right-20 lg:w-52"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-0 py-8 sm:px-4 md:px-8 lg:px-10">
        <div className="relative mx-auto">
          <LabelKMTETI
            type="kmtetionly-white"
            isKMTETI={true}
            className="mb-4 min-h-11 w-full max-w-2xl justify-center rounded-lg px-10 py-2 text-center text-white shadow-lg sm:w-fit sm:px-14"
            kmtetiProps={{ width: 120, height: 30, className: 'h-7 w-auto' }}
          >
            <h2 className="text-h5 font-sans leading-tight sm:text-h4">
              Event Nasional dan Internasional
            </h2>
          </LabelKMTETI>

          <p className="mb-5 max-w-2xl text-b4 text-neutral-1000 sm:text-b3">
            Eksplor lebih dalam mengenai acara nasional tahunan di KMTETI.
          </p>

          <div className="relative">
            <div className="grid gap-5 md:grid-cols-3" aria-live="polite">
              {visibleEvents.map((event) => (
                <article
                  key={`${activeIndex}-${event.title}`}
                  className="group relative min-h-64 overflow-hidden rounded-lg bg-neutral-300 shadow-xl shadow-neutral-900/25 ring-1 ring-neutral-100/80 sm:min-h-72 lg:min-h-80"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary-100 via-neutral-200 to-secondary-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.88),transparent_22%),radial-gradient(circle_at_78%_8%,rgba(25,175,229,0.28),transparent_26%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-neutral-1000/80 via-neutral-1000/45 to-transparent" />

                  <div className="relative flex h-full min-h-64 flex-col justify-between p-4 sm:min-h-72 lg:min-h-80">
                    <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-neutral-100/70 bg-neutral-100/35 px-3 py-2 text-b5 font-semibold uppercase text-neutral-1000/70 backdrop-blur-sm sm:h-32">
                      Foto Placeholder
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0 text-white">
                        <h3 className="truncate text-b5 font-bold uppercase">{event.title}</h3>
                        <p className="mt-0.5 line-clamp-1 text-b6 text-neutral-100">
                          {event.category}
                        </p>
                      </div>

                      <Button
                        variant="neutral"
                        size="icon"
                        className="size-8 rounded-md shadow-[0_2px_0_0_#d2d2d2]"
                        aria-label={`Lihat detail ${event.title}`}
                      >
                        <ExternalLink size={15} strokeWidth={2.5} />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-5">
              <CarouselKiri
                type="button"
                onClick={previousEvent}
                aria-label="Event sebelumnya"
                className="w-12"
              />
              <div className="flex gap-2" aria-hidden="true">
                {events.map((event, index) => (
                  <span
                    key={event.title}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? 'w-7 bg-primary-300' : 'w-2 bg-neutral-400'
                    }`}
                  />
                ))}
              </div>
              <CarouselKanan
                type="button"
                onClick={nextEvent}
                aria-label="Event berikutnya"
                className="w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
