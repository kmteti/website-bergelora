import React from 'react'
import Image from 'next/image'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { Button } from '@/components/ui/button'

const News = () => {
  // Dummy data untuk contoh tampilan
  const newsData = [
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide1.webp',
    },
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide2.webp',
    },
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide3.webp',
    },
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide1.webp',
    },
  ]

  return (
    <main className="w-full relative min-h-screen bg-neutral-100">
      {/* 1. Header Full Width */}
      <PageHeader 
        title="KMTETI News"
        description="Berita dan Artikel"
        imageSrc="/images/news/news-header.webp"
      />

      {/* 2. Container Overlap (FULL WIDTH) */}
      <PageOverlap className="bg-[#fafafa] min-h-[500px]">
          <DefaultLayout>
            
            {/* Bagian Search Bar (Di-center seperti screenshot) */}
            <div className="flex justify-center mb-12">
              <div className="flex w-full max-w-2xl gap-3">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="Cari Keyword" 
                    className="w-full h-12 px-5 rounded-full border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  {/* Icon close pura-pura */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer">
                    ×
                  </div>
                </div>
                <Button className="rounded-full px-6 h-12 bg-[#5B5B5B] hover:bg-[#4a4a4a] text-white flex items-center gap-2">
                  <span>Filter</span>
                  {/* Icon filter pura-pura */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                </Button>
              </div>
            </div>

            {/* Grid Berita */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newsData.map((news, idx) => (
                <div key={idx} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative w-full aspect-[4/3]">
                    <Image src={news.image} alt={news.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <span className="text-[#5c98a3] text-sm font-medium mb-3">{news.category}</span>
                    <h3 className="text-[#2D2D2D] font-semibold text-lg leading-snug mb-6">{news.title}</h3>
                    <span className="text-[#A0A0A0] text-sm mt-auto">{news.date}</span>
                  </div>
                </div>
              ))}
            </div>

          </DefaultLayout>
        </PageOverlap>
    </main>
  )
}

export default News
