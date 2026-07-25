'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { H2, H5, B4 } from '@/components/elements/Typography'

interface Milestone {
  period: string
  activities: string
  photo: string
}

const milestones: Milestone[] = [
  { period: 'Juli - Agustus', activities: 'Technocorner, Teti Lab Skills, Forwati', photo: '/images/home/about/about.webp' },
  { period: 'September - Oktober', activities: 'UTS, Open Recruitment', photo: '/images/home/about/about.webp' },
  { period: 'November - Desember', activities: 'Technocorner, Teti Lab Skills, Forwati', photo: '/images/home/about/about.webp' },
  { period: 'Januari - Februari', activities: 'UTS, Open Recruitment', photo: '/images/home/about/about.webp' },
  { period: 'Maret - April', activities: 'Technocorner, Teti Lab Skills, Forwati', photo: '/images/home/about/about.webp' },
  { period: 'Mei - Juni', activities: 'UTS, Open Recruitment', photo: '/images/home/about/about.webp' },
]

// Timeline geometry (px). Even index = "top" group, odd = "bottom" group.
// Spacing is tuned so the dashed line, pins, photos and labels never overlap:
// top photos hang below the wave peaks, bottom photos sit above the troughs,
// and the horizontal slot is wider than a photo so neighbours clear each other.
const SLOT = 460
const TRACK_H = 500
const CENTER_Y = 285
const AMP = 85
const PHOTO_W = 190
const PHOTO_H = 160 // Figma card is 189×158 (landscape), not square
const PIN = 44 // 📍 emoji size — its tip lands on the wavy stitch
const PEAK = CENTER_Y - AMP // 200 — top-group anchor
const TROUGH = CENTER_Y + AMP // 370 — bottom-group anchor
const PHOTO_GAP = 60 // gap between wave anchor and the nearest photo edge

export default function Life() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0) // 0..1 fraction of track filled

  const trackWidth = milestones.length * SLOT

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }

  // Smooth wave through alternating anchors (horizontal tangents).
  const anchorY = (i: number) => (i % 2 === 0 ? CENTER_Y - AMP : CENTER_Y + AMP)
  const anchorX = (i: number) => i * SLOT + SLOT / 2
  let path = `M 0 ${CENTER_Y} `
  path += `C ${SLOT / 4} ${CENTER_Y} ${anchorX(0) - SLOT / 4} ${anchorY(0)} ${anchorX(0)} ${anchorY(0)} `
  for (let i = 1; i < milestones.length; i++) {
    const dx = (anchorX(i) - anchorX(i - 1)) / 2
    path += `C ${anchorX(i - 1) + dx} ${anchorY(i - 1)} ${anchorX(i) - dx} ${anchorY(i)} ${anchorX(i)} ${anchorY(i)} `
  }
  path += `C ${anchorX(milestones.length - 1) + SLOT / 4} ${anchorY(milestones.length - 1)} ${trackWidth - SLOT / 4} ${CENTER_Y} ${trackWidth} ${CENTER_Y}`

  // z-10 < Event (z-20): Event overlaps Life; z-10 > footer: Life overlaps Connect with Us
  return (
    <div className="relative z-10 w-full -mt-[95px] -mb-[40px]">
      <section
        data-navbar-tone="light"
        id="life"
        className="w-full flex flex-col bg-white pt-[150px] md:pt-[190px] pb-[95px] relative overflow-hidden rounded-b-[40px] border-b-[2px] border-l-[2px] border-r-[2px] border-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08)]"
      >
        {/* No full-section gradient — just a bit of blue at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-[#CFEAF4] to-transparent pointer-events-none z-0" />

        <div className="relative z-10 w-full flex flex-col">
          {/* Title */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-center mb-10 md:mb-14">
            <H2 className="text-primary-500 text-center">Life at KMTETI</H2>
          </div>

          {/* Horizontal scrollable timeline */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="w-full overflow-x-auto px-8 md:px-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="relative mx-auto" style={{ width: trackWidth, height: TRACK_H }}>
              {/* Wavy dashed line */}
              <svg
                className="absolute inset-0 pointer-events-none"
                width={trackWidth}
                height={TRACK_H}
                viewBox={`0 0 ${trackWidth} ${TRACK_H}`}
                fill="none"
              >
                <path d={path} stroke="#c4cdd2" strokeWidth="7" strokeLinecap="round" strokeDasharray="22 26" />
              </svg>

              {/* Milestones */}
              {milestones.map((m, i) => {
                const top = i % 2 === 0
                const ax = anchorX(i)
                // Top group: photo hangs below the peak, pin above it, label at the very top.
                // Bottom group: photo sits above the trough, pin below it, label at the bottom.
                const photoTop = top ? PEAK + PHOTO_GAP : TROUGH - PHOTO_GAP - PHOTO_H
                const anchorY = top ? PEAK : TROUGH // the point on the wavy stitch
                const labelTop = top ? 12 : TROUGH + 20
                return (
                  <div key={i} className="absolute" style={{ left: ax, top: 0, transform: 'translateX(-50%)' }}>
                    {/* Label */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-[220px] text-center"
                      style={{ top: labelTop }}
                    >
                      <H5 className="text-primary-500 whitespace-nowrap">{m.period}</H5>
                      <B4 className="text-neutral-800 mt-1">{m.activities}</B4>
                    </div>

                    {/* 📍 pin — its tip sits right on the wavy stitch */}
                    <span
                      className="absolute left-1/2 z-10 leading-none select-none pointer-events-none drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]"
                      style={{ top: anchorY, fontSize: PIN, transform: 'translate(-50%, -100%)' }}
                    >
                      📍
                    </span>

                    {/* Photo — two stacked cards that split apart on hover (Figma prototype) */}
                    <div
                      className="group absolute left-1/2"
                      style={{ top: photoTop, width: PHOTO_W, height: PHOTO_H, transform: 'translateX(-50%)' }}
                    >
                      {/* back card */}
                      <div className="absolute inset-0 rounded-[40px] border-4 border-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.2)] overflow-hidden bg-gray-100 rotate-[-3deg] transition-transform duration-500 ease-out will-change-transform group-hover:-translate-x-[42%] group-hover:-rotate-[9deg]">
                        <Image src={m.photo} alt={m.period} fill className="object-cover" sizes="190px" />
                      </div>
                      {/* front card */}
                      <div className="absolute inset-0 rounded-[40px] border-4 border-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.2)] overflow-hidden bg-gray-100 rotate-[3deg] transition-transform duration-500 ease-out will-change-transform group-hover:translate-x-[42%] group-hover:rotate-[9deg]">
                        <Image src={m.photo} alt={m.period} fill className="object-cover" sizes="190px" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Scroll progress bar (gray track + yellow thumb) */}
          <div className="mx-auto mt-8 h-2 w-[280px] md:w-[400px] rounded-full bg-neutral-300/70">
            <div
              className="h-full rounded-full bg-yellow-100 transition-[margin] duration-75"
              style={{ width: '18%', marginLeft: `${progress * 82}%` }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
