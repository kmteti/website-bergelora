'use client'

import { useState } from 'react'
import { Batik } from "@/components/archive/BatikBackground.tsx"
import DefaultLayout from "@/components/layout/DefaultLayout"
import { LabelKMTETI } from "@/components/archive/LabelKMTETI.tsx"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/cn"
import { BoDData, BoDMember } from "./Struktur.ts"

function BoDCard({ item }: { item: BoDMember }) {
  const pos_role = item.role.split(" of ")
  const [hasError, setHasError] = useState(false)

  // Map temporary image paths to the hero.webp demo photo to prevent 404 errors
  const isDemo = item.src.startsWith('/img/') || item.src.startsWith('/img/aboutus/')
  const initialSrc = isDemo ? '/images/landing/hero/hero.webp' : item.src
  const [imgSrc, setImgSrc] = useState(initialSrc)

  // Get initials (e.g. "Maheswara Saragih" -> "MS")
  const initials = item.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <Link
      href={item.linkedin ?? "#team"}
      target={item.linkedin ? "_blank" : "_self"}
      className="group relative flex w-[140px] sm:w-[170px] md:w-[190px] shrink-0 snap-start flex-col transition-all duration-500 ease-out hover:-translate-y-2"
    >
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm bg-white transition-all duration-500 ease-out group-hover:shadow-lg group-hover:shadow-primary-300/30">
        <div className="absolute inset-0 flex items-center justify-center">
          {hasError ? (
            <div className="flex items-center justify-center w-full h-full bg-linear-to-br from-black/5 to-black/10 text-black/60 select-none">
              <span className="text-xl sm:text-2xl font-bold tracking-wider font-sans">
                {initials}
              </span>
            </div>
          ) : (
            <Image 
              alt={item.role} 
              src={imgSrc} 
              className="object-cover object-center w-full h-full transition-transform duration-500 ease-out group-hover:scale-110" 
              fill 
              sizes="(min-width: 768px) 200px, 150px"
              onError={() => {
                setImgSrc('/images/landing/hero/hero.webp')
                setHasError(true)
              }}
            />
          )}
          {/* Subtle gradient overlay to merge bottom of photo with card background */}
          <div className="absolute bottom-0 z-10 h-[20%] w-full bg-gradient-to-t from-white via-white/80 to-transparent opacity-90" />
        </div>
      </div>
      <div className="relative flex w-full flex-col text-center mt-3 px-1">
        <div className="relative flex flex-row items-center justify-center gap-1 font-sans text-b3 md:text-b2 font-bold text-primary-500 group-hover:text-primary-300 transition-all duration-500">
          <span className="truncate max-w-full">{item.name}</span>
          {item.linkedin && <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-primary-300" />}
          <div className="absolute right-0 bottom-[-0.1em] left-0 mx-auto h-[2px] w-0 bg-primary-300 transition-all duration-500 group-hover:w-full" />
        </div>
        <p className="w-full text-center font-sans text-b5 sm:text-b4 text-primary-300 group-hover:text-primary-500 font-semibold leading-tight mt-1 transition-colors duration-500 whitespace-nowrap truncate">
          {item.role}
        </p>
      </div>
    </Link>
  )
}

export default function Struktur() {
  const term = "2025/2026"

  return (
    <section className="relative w-full overflow-hidden" data-aos="fade-up">
      <Batik className="batik-5" isWhite={true}/>
      <DefaultLayout>
        <div className="flex flex-col items-center w-full">
          <LabelKMTETI
            type="kmteti-logotype-short-white"
            isKMTETI={true}
            className="mb-6 justify-center shadow-lg min-w-[280px] sm:min-w-[400px] shadow-primary-500/20"
          >
            <h2 className="text-xl sm:text-2xl font-bold font-sans leading-tight flex flex-row items-center gap-x-2">
              Struktur
            </h2>
          </LabelKMTETI>

          {/* BoD Divisions & Members */}
          <div className="w-full flex flex-col gap-6">
            {BoDData[term]?.map((group) => (
              <div key={group.division} className="w-full flex flex-col items-center">
                <h3 className="font-heading text-b1 sm:text-h4 font-bold text-black tracking-wide mb-8 text-center">
                  {group.division}
                </h3>
                <div className={cn(
                  "flex gap-6 sm:gap-8 md:gap-10 w-full px-4 pb-4 kmteti-scrollbar scroll-smooth",
                  group.members.length > 4 
                    ? "overflow-x-auto flex-nowrap justify-start snap-x -mx-6 sm:-mx-16 md:-mx-36 lg:-mx-44 xl:-mx-52 2xl:-mx-60 px-6 sm:px-16 md:px-36 lg:px-44 xl:px-52 2xl:px-60" 
                    : "flex-wrap justify-center"
                )}>
                  {group.members.map((member) => (
                    <BoDCard key={member.name} item={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </DefaultLayout>
    </section>
  )
}