'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import { H2 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { eventData } from '@/modules/event/data/data'

import EventBrowserCard from './components/EventBrowserCard'

const LAST = eventData.length - 1

// Versi pastel dari warna khas tiap event — logonya gelap, jadi pita terang tetap kontras.
const EVENT_GRADIENTS: Record<string, { from: string; to: string }> = {
  technocorner: { from: '#F3B0B0', to: '#B3BCE6' }, // Merah + Biru
  findit: { from: '#BCC9DA', to: '#AFDCF5' },       // Biru Tua + Biru Sedang (tua ke sedang)
  nesco: { from: '#AEDCC1', to: '#F5E7AC' },        // Hijau + Kuning
}

export default function Event() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(Math.floor(eventData.length / 2))
  const router = useRouter()

  const scrollToCard = (i: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current
    const card = track?.children[i] as HTMLElement | undefined
    if (!track || !card) return
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior,
    })
  }

  // Mulai dari kartu tengah supaya dua sisinya sama-sama nongol kayak komposisi Figma.
  useEffect(() => {
    scrollToCard(Math.floor(eventData.length / 2), 'instant')
  }, [])

  // Drag pakai mouse. Sentuhan nggak diikutkan — scroll native-nya sudah lebih enak.
  // Snap dimatikan selama nyeret, kalau nggak tiap set scrollLeft langsung ditarik balik browser.
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null)
  const [dragging, setDragging] = useState(false)

  // Click nyala setelah pointerup, jadi hasil seretan disimpan biar kartunya nggak ikut ke-klik.
  const justDragged = useRef(false)

  const endDrag = () => {
    if (!drag.current) return
    justDragged.current = drag.current.moved
    drag.current = null
    scrollToCard(active)
    // ponytail: snap dinyalain lagi setelah animasi smooth kira-kira kelar.
    // Kalau dinyalain langsung, snap-nya motong animasi jadi lompat.
    setTimeout(() => setDragging(false), 500)
  }

  // Kartu aktif dibaca dari posisi scroll, bukan sebaliknya — biar swipe & tombol satu sumber kebenaran.
  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const mid = track.scrollLeft + track.clientWidth / 2
    let best = 0
    let bestDistance = Infinity
    for (let i = 0; i < track.children.length; i++) {
      const card = track.children[i] as HTMLElement
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid)
      if (distance < bestDistance) {
        bestDistance = distance
        best = i
      }
    }

    // Di ujung, scroll-nya mentok jadi kartu ujung nggak pernah benar-benar di tengah —
    // tanpa ini kartu tetangganya yang kehitung paling dekat, dan aktifnya jadi salah.
    if (track.scrollLeft <= 1) best = 0
    else if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) best = LAST

    setActive(best)
  }

  return (
    <div className="relative z-20 -mt-1 w-full">
      <section
        data-navbar-tone="light"
        id="event"
        className="relative w-full overflow-hidden rounded-b-[40px] border-l-2 border-r-2 border-white bg-gradient-to-b from-[#EAF9FF] to-[#E1F3FA] pt-[110px] pb-24 md:pb-32"
      >
        {/* Blob gradient — posisi mengikuti Ellipse 6 & 7 di Figma */}
        <div className="pointer-events-none absolute left-[27.4%] top-[75.2%] w-[33vw] max-w-[472px] -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full bg-[#64CAEF] opacity-70 blur-[100px]" />
        <div className="pointer-events-none absolute left-[67.9%] top-[48.2%] w-[34vw] max-w-[492px] -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full bg-[#c7e07c] opacity-80 blur-[100px]" />

        <div className="relative flex w-full flex-col">
          <div className="mx-auto mb-14 flex w-full max-w-6xl items-center justify-between gap-6 px-4 md:mb-20 md:px-8">
            <H2 className="text-left text-[#0a4c5a]">Event Ternama Nasional</H2>

            {/* Di mobile nggak muat sebelah judul, jadi kontrolnya pakai dot di bawah track */}
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <Button
                variant="black"
                size="icon"
                aria-label="Event sebelumnya"
                disabled={active === 0}
                onClick={() => scrollToCard(active - 1)}
                className="shadow-lg drop-shadow-sm"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="black"
                size="icon"
                aria-label="Event berikutnya"
                disabled={active === LAST}
                onClick={() => scrollToCard(active + 1)}
                className="shadow-lg drop-shadow-sm"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/*
            Scroll-snap native: dapat swipe, trackpad, momentum, dan keyboard tanpa JS.
            --card dipakai bareng buat lebar kartu, padding penengah, tumpang tindih, dan turunnya kartu samping.
            pb-nya wajib — track ini overflow-y jadi `auto`, tanpa itu kartu yang turun bikin scroll vertikal.
          */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            onPointerDown={(e) => {
              if (e.pointerType === 'touch' || !trackRef.current) return
              drag.current = { x: e.clientX, left: trackRef.current.scrollLeft, moved: false }
              setDragging(true)
            }}
            onPointerMove={(e) => {
              const d = drag.current
              if (!d || !trackRef.current) return
              const dx = e.clientX - d.x
              if (Math.abs(dx) > 4) d.moved = true
              trackRef.current.scrollLeft = d.left - dx
            }}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            style={
              {
                '--card': 'min(700px,86vw)',
                scrollSnapType: dragging ? 'none' : undefined,
                cursor: dragging ? 'grabbing' : 'grab',
              } as React.CSSProperties
            }
            // pb = turunnya kartu samping + jangkauan shadow kartu (offset 20 + blur 30),
            // kalau kurang shadow-nya kepotong sama tepi bawah track.
            className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pt-4 pb-[calc(var(--card)*0.1022+56px)] md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {eventData.map((event, i) => {
              const isActive = i === active

              return (
                <div
                  key={event.slug}
                  // Kiri di belakang, kanan di depan — jadi z-index naik ikut urutan, bukan ikut kartu aktif.
                  style={{ zIndex: i + 1 }}
                  className={cn(
                    '@container relative w-[var(--card)] shrink-0 snap-center',
                    // Tumpang tindih 57px dari 773px, sesuai jarak 716px di Figma
                    i !== LAST && '-mr-[calc(var(--card)*0.0737)]',
                  )}
                >
                  <button
                    type="button"
                    aria-current={isActive || undefined}
                    onClick={() => {
                      if (justDragged.current) {
                        justDragged.current = false
                        return
                      }
                      if (isActive) router.push(`/event/${event.slug}`)
                      else scrollToCard(i)
                    }}
                    className="w-full cursor-pointer select-none text-left focus-visible:outline-3 focus-visible:outline-offset-8 focus-visible:outline-[#0a4c5a]"
                  >
                    <EventBrowserCard
                      name={event.nama}
                      description={event.deskripsi_tujuan}
                      logo={event.logo}
                      website={event.website}
                      gradient={EVENT_GRADIENTS[event.slug]}
                      className={cn(
                        // `translate`, bukan `transform` — Tailwind v4 pakai properti translate buat translate-y-*
                        'transition-[translate,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                        !isActive && 'translate-y-[10.22cqw] blur-[8px] hover:blur-none',
                      )}
                    />
                  </button>
                </div>
              )
            })}
          </div>

          {/* Kartu samping cuma nongol sedikit di layar kecil, jadi dot-nya yang jadi kontrol */}
          <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
            {eventData.map((event, i) => (
              <button
                key={event.slug}
                type="button"
                aria-label={`Tampilkan ${event.nama}`}
                aria-current={i === active || undefined}
                onClick={() => scrollToCard(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-[#0a4c5a]' : 'w-2 bg-[#0a4c5a]/25'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
