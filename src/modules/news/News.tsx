'use client'

import React, { useState } from 'react'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { SearchBar } from '@/components/elements/SearchBar'
import { SectionHeader } from '@/components/elements/SectionHeader'
import { Pagination } from '@/components/elements/Pagination'
import { ALL_NEWS_DATA } from '@/modules/news/mock-data/NewsData'
import { NewsCard } from './components/NewsCard'
import { SpotlightCard } from './components/SpotlightCard'
import { SpotlightCarousel } from './components/SpotlightCarousel'

const News = () => {
  // TODO: Nanti saat integrasi dengan backend/Payload CMS,
  // fetch data berita dengan query sort by date descending (latest).
  // 3 data pertama masukkan ke `spotlightData`,
  // sisanya (mulai dari data ke-4) masukkan ke `newsData` untuk grid di bawah.

  // Dummy data untuk spotlight (3 berita terbaru)
  const spotlightData = ALL_NEWS_DATA.slice(0, 3).map((item) => ({
    ...item,
    href: `/tentang/berita/${item.slug}`,
  }))

  // Dummy data untuk contoh tampilan (sisa berita untuk pagination)
  const allNewsData = ALL_NEWS_DATA.slice(3).map((item) => ({
    ...item,
    href: `/tentang/berita/${item.slug}`,
  }))

  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 12
  const totalPages = Math.ceil(allNewsData.length / ITEMS_PER_PAGE)

  // Ambil data untuk halaman saat ini
  const paginatedNews = allNewsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  return (
    <main className="w-full relative min-h-screen bg-neutral-100">
      {/* 1. Header Full Width */}
      <PageHeader
        title="KMTETI News"
        description="Berita dan Artikel"
        imageSrc="/images/news/news-header.webp"
      />

      {/* 2. Container Overlap (FULL WIDTH) */}
      <PageOverlap className="bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff] min-h-[500px]">
        <DefaultLayout>
          <div className="mb-12 flex justify-center">
            <SearchBar className="max-w-[586px]" />
          </div>

          {/* Spotlight Section - Mobile Carousel */}
          <div className="mb-12 block lg:hidden">
            <SpotlightCarousel data={spotlightData} />
          </div>

          {/* Spotlight Section - Desktop Grid */}
          <div className="mb-16 hidden lg:grid grid-cols-1 gap-6 lg:h-[500px] lg:grid-cols-3">
            <div className="h-[400px] lg:col-span-2 lg:h-full">
              <SpotlightCard {...spotlightData[0]} isLarge />
            </div>
            <div className="flex h-[600px] flex-col gap-6 lg:col-span-1 lg:h-full">
              <div className="h-full flex-1">
                <SpotlightCard {...spotlightData[1]} />
              </div>
              <div className="h-full flex-1">
                <SpotlightCard {...spotlightData[2]} />
              </div>
            </div>
          </div>

          <SectionHeader title="Berita dan Artikel" className="mb-8 md:mb-10" />

          {/* Grid Berita */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedNews.map((news, idx) => (
              <NewsCard key={idx} {...news} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page)
                // Scroll sedikit ke atas (opsional) saat pindah halaman
                window.scrollTo({ top: 500, behavior: 'smooth' })
              }}
            />
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}

export default News
