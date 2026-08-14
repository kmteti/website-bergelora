'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { H2, H5, B4 } from '@/components/elements/Typography'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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

const SLOT = 460
const TRACK_H = 500
const CENTER_Y = 285
const AMP = 85
const PHOTO_W = 190
const PHOTO_H = 160
const PIN = 44
const PEAK = CENTER_Y - AMP
const TROUGH = CENTER_Y + AMP
const PHOTO_GAP = 60

export default function Life() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const trackWidth = milestones.length * SLOT

  useGSAP(() => {
    const track = trackRef.current
    const progressBar = progressBarRef.current
    if (!track) return

    const padding = window.innerWidth < 768 ? 64 : 128
    const getScrollAmount = () => {
      return Math.max(0, trackWidth - window.innerWidth + padding)
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        // Section (927px) lebih tinggi dari layar, jadi yang ditengahin isinya (651px),
        // bukan section-nya — padding atas & bawah beda jauh (180 vs 95), kalau pakai
        // 'center center' isinya ke-geser ke bawah dan progress bar kepotong.
        // Sisa padding yang kelewat di atas cuma ruang kosong yang numpuk di atas
        // section Event, jadi header + timeline + progress bar kelihatan semua.
        start: () => {
          const sec = sectionRef.current
          const content = contentRef.current
          if (!sec || !content) return 'center center'
          const offset = Math.round(
            content.offsetTop + content.offsetHeight / 2 - sec.offsetHeight / 2,
          )
          return `center center-=${offset}`
        },
        end: () => `+=${getScrollAmount()}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        refreshPriority: -2, // Calculate after Profile and DivisiBSO
      }
    })

    // Animate timeline track horizontal scrolling
    tl.to(track, {
      x: () => -getScrollAmount(),
      ease: 'none',
    }, 0)

    // Animate progress bar fill smoothly from 0% to 100%
    if (progressBar) {
      tl.fromTo(
        progressBar,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none', transformOrigin: 'left center' },
        0
      )
    }
  }, { scope: sectionRef })

  // Wavy path calculation
  const anchorY = (i: number) => (i % 2 === 0 ? CENTER_Y - AMP : CENTER_Y + AMP)
  const anchorX = (i: number) => i * SLOT + SLOT / 2
  let path = `M 0 ${CENTER_Y} `
  path += `C ${SLOT / 4} ${CENTER_Y} ${anchorX(0) - SLOT / 4} ${anchorY(0)} ${anchorX(0)} ${anchorY(0)} `
  for (let i = 1; i < milestones.length; i++) {
    const dx = (anchorX(i) - anchorX(i - 1)) / 2
    path += `C ${anchorX(i - 1) + dx} ${anchorY(i - 1)} ${anchorX(i) - dx} ${anchorY(i)} ${anchorX(i)} ${anchorY(i)} `
  }
  path += `C ${anchorX(milestones.length - 1) + SLOT / 4} ${anchorY(milestones.length - 1)} ${trackWidth - SLOT / 4} ${CENTER_Y} ${trackWidth} ${CENTER_Y}`

  return (
    <div className="relative z-10 w-full -mt-[95px] -mb-[40px]">
      <section
        ref={sectionRef}
        data-navbar-tone="light"
        id="life"
        className="w-full flex flex-col bg-white pt-[140px] md:pt-[180px] pb-[95px] relative overflow-hidden rounded-b-[40px] border-b-[2px] border-l-[2px] border-r-[2px] border-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08)]"
      >
        {/* Blue gradient background at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-[#CFEAF4] to-transparent pointer-events-none z-0" />

        <div ref={contentRef} className="relative z-10 w-full flex flex-col">
          {/* Title */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-center mb-10 md:mb-14">
            <H2 className="text-primary-500 text-center">Life at KMTETI</H2>
          </div>

          {/* Overflow-hidden wrapper */}
          <div className="w-full overflow-hidden px-8 md:px-16">
            <div 
              ref={trackRef}
              className="relative will-change-transform" 
              style={{ width: trackWidth, height: TRACK_H }}
            >
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
                const photoTop = top ? PEAK + PHOTO_GAP : TROUGH - PHOTO_GAP - PHOTO_H
                const anchorAnchorY = top ? PEAK : TROUGH
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

                    {/* 📍 pin */}
                    <span
                      className="absolute left-1/2 z-10 leading-none select-none pointer-events-none drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]"
                      style={{ top: anchorAnchorY, fontSize: PIN, transform: 'translate(-50%, -100%)' }}
                    >
                      📍
                    </span>

                    {/* Photo — split stack hover cards */}
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

          {/* Real filling scroll progress bar */}
          <div className="mx-auto mt-6 h-2.5 w-[280px] md:w-[400px] rounded-full bg-neutral-200/80 relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full w-full rounded-full bg-yellow-100 origin-left will-change-transform"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
