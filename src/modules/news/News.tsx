'use client'

import React, { useState } from 'react'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { SearchBar } from '@/components/elements/SearchBar'
import { SectionHeader } from '@/components/elements/SectionHeader'
import { Pagination } from '@/components/elements/Pagination'
// import { ALL_NEWS_DATA } from '@/modules/news/mock-data/NewsData'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { NewsCard } from './components/NewsCard'
import { SpotlightCard } from './components/SpotlightCard'
import { SpotlightCarousel } from './components/SpotlightCarousel'

const News = ({ initialNews }: { initialNews: any[] }) => {
  // Format Payload data ke bentuk yang dipahami UI
  const formattedNews = React.useMemo(() => {
    return (initialNews || []).map((news) => ({
      title: news.title,
      slug: news.slug,
      category: news.category,
      date: news.date ? format(new Date(news.date), 'dd MMMM yyyy', { locale: id }) : '-',
      image: typeof news.image === 'object' && news.image?.url ? news.image.url : '/images/news/placeholder.webp',
      content: '', // content tidak perlu dicari di pencarian grid kecuali kita convert rich text ke plain text
      rawContent: news.content,
    }))
  }, [initialNews])

  // 3 data pertama masukkan ke `spotlightData`,
  // sisanya (mulai dari data ke-4) masukkan ke `newsData` untuk grid di bawah.

  // Dummy data untuk spotlight (3 berita terbaru)
  const spotlightData = formattedNews.slice(0, 3).map((item) => ({
    ...item,
    href: `/tentang/berita/${item.slug}`,
  }))

  // State untuk filter
  const [searchQuery, setSearchQuery] = useState('')
  // TODO: Implementasi Debouncing untuk search bar. 
  // Gunakan custom hook (seperti useDebounce) agar searchQuery tidak langsung 
  // mem-filter atau nge-hit API setiap kali user mengetik 1 huruf.
  
  const [categoryFilter, setCategoryFilter] = useState('Semua Kategori')
  const [sortOrder, setSortOrder] = useState('Terbaru')
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 12

  // Filter & Sort Logic
  const filteredAndSortedNews = React.useMemo(() => {
    let result = [...formattedNews]

    // Filter berdasarkan kategori
    if (categoryFilter !== 'Semua Kategori') {
      result = result.filter((item) => item.category === categoryFilter)
    }

    // Filter berdasarkan pencarian
    if (searchQuery.trim() !== '') {
      const lowerQuery = searchQuery.toLowerCase()
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.content.toLowerCase().includes(lowerQuery),
      )
    }

    // Sort berdasarkan waktu (karena mock data date string, kita simulate sort)
    if (sortOrder === 'Terlama') {
      result.reverse()
    }

    return result
  }, [categoryFilter, searchQuery, sortOrder])

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedNews.length / ITEMS_PER_PAGE))

  // Ambil data untuk halaman saat ini
  const paginatedNews = filteredAndSortedNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  const isSearchingOrFiltering = searchQuery.trim() !== '' || categoryFilter !== 'Semua Kategori'

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
            <SearchBar
              className="max-w-[586px]"
              placeholder="Cari Berita KMTETI"
              onValueChange={(val) => {
                setSearchQuery(val)
                setCurrentPage(1) // Reset halaman ke 1 saat ngetik
              }}
              filterContent={
                <div className="flex w-full flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      className="mb-4 text-sm font-regular
r text-neutral-400"
                    >
                      Kategori
                    </label>
                    <Select
                      value={categoryFilter}
                      onValueChange={(val) => {
                        setCategoryFilter(val ?? 'Semua Kategori');
                        setCurrentPage(1);
                      }}
                    >
                      <SelectTrigger className="w-full h-11 bg-neutral-100 hover:bg-neutral-200 border-none rounded-xl px-4 text-neutral-800 font-medium shadow-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/20">
                        <SelectValue placeholder="Semua Kategori" />
                      </SelectTrigger>
                      <SelectContent
                        alignItemWithTrigger={false}
                        className="rounded-xl border-none shadow-xl bg-white p-2.5"
                      >
                        <SelectItem
                          value="Semua Kategori"
                          className="rounded-lg hover:bg-neutral-100 py-2.5"
                        >
                          Semua Kategori
                        </SelectItem>
                        <SelectItem
                          value="Press Release"
                          className="rounded-lg hover:bg-neutral-100 py-2.5"
                        >
                          Press Release
                        </SelectItem>
                        <SelectItem
                          value="TETI Champion"
                          className="rounded-lg hover:bg-neutral-100 py-2.5"
                        >
                          TETI Champion
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="h-[1px] w-full bg-neutral-200/60" />

                  <div className="flex flex-col gap-2">
                    <label className="mb-4 text-sm font-regular
r text-neutral-400">
                      Waktu
                    </label>
                    <Select
                      value={sortOrder}
                      onValueChange={(val) => {
                        setSortOrder(val ?? 'Terbaru');
                        setCurrentPage(1);
                      }}
                    >
                      <SelectTrigger className="w-full h-11 bg-neutral-100 hover:bg-neutral-200 border-none rounded-xl px-4 text-neutral-800 font-medium shadow-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/20">
                        <SelectValue placeholder="Terbaru" />
                      </SelectTrigger>
                      <SelectContent
                        alignItemWithTrigger={false}
                        className="rounded-xl border-none shadow-xl bg-white p-1"
                      >
                        <SelectItem
                          value="Terbaru"
                          className="rounded-lg hover:bg-neutral-100 py-2.5"
                        >
                          Terbaru
                        </SelectItem>
                        <SelectItem
                          value="Terlama"
                          className="rounded-lg hover:bg-neutral-100 py-2.5"
                        >
                          Terlama
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              }
            />
          </div>

          {/* Spotlight Section (Hidden during search/filter) */}
          {!isSearchingOrFiltering && (
            <>
              {/* Spotlight Section - Mobile Carousel */}
              <div className="mb-12 block lg:hidden">
                <SpotlightCarousel data={spotlightData} />
              </div>

              {/* Spotlight Section - Desktop Grid */}
              {spotlightData.length > 0 && (
                <div className="mb-16 hidden lg:grid grid-cols-1 gap-6 lg:h-[500px] lg:grid-cols-3">
                  <div className="h-[400px] lg:col-span-2 lg:h-full">
                    <SpotlightCard {...spotlightData[0]} isLarge />
                  </div>
                  {(spotlightData[1] || spotlightData[2]) && (
                    <div className="flex h-[600px] flex-col gap-6 lg:col-span-1 lg:h-full">
                      {spotlightData[1] && (
                        <div className="h-full flex-1">
                          <SpotlightCard {...spotlightData[1]} />
                        </div>
                      )}
                      {spotlightData[2] && (
                        <div className="h-full flex-1">
                          <SpotlightCard {...spotlightData[2]} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          <SectionHeader title={isSearchingOrFiltering ? "Hasil Pencarian" : "Berita dan Artikel"} className="mb-8 md:mb-10" />

          {/* Grid Berita */}
          {paginatedNews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedNews.map((news, idx) => (
                <NewsCard key={idx} {...news} href={`/tentang/berita/${news.slug}`} searchQuery={searchQuery} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
              <p className="text-lg font-medium">Berita tidak ditemukan</p>
            </div>
          )}

          {paginatedNews.length > 0 && (
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
          )}
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}

export default News
