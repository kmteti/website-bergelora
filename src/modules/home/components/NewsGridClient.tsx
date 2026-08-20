'use client'

import React, { useRef } from 'react'
import { NewsCard } from '@/modules/news/components/NewsCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface NewsItem {
  category?: string
  title: string
  date: string
  image?: string
  slug: string
}

export default function NewsGridClient({ newsData }: { newsData: NewsItem[] }) {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!gridRef.current) return

      const cards = gridRef.current.children

      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1, // Stagger delay 100ms per card berurutan dari kiri ke kanan
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            once: true,
          },
        },
      )
    },
    { scope: gridRef },
  )

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {newsData.map((news, index) => (
        <div key={index} className="will-change-transform">
          <NewsCard
            category={news.category || 'Berita'}
            title={news.title}
            date={news.date}
            image={news.image || '/images/default-news.webp'}
            href={`/tentang/berita/${news.slug}`}
          />
        </div>
      ))}
    </div>
  )
}
