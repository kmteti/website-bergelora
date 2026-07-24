import React from 'react'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { SectionHeader } from '@/components/elements/SectionHeader'
import { NewsCardSkeleton, SpotlightCardSkeleton } from '@/modules/news/components/NewsSkeleton'
import { Skeleton } from '@/components/elements/Skeleton'

export default function Loading() {
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
          {/* Skeleton Search Bar */}
          <div className="mb-12 flex justify-center">
            <Skeleton className="w-full max-w-[586px] h-14 rounded-full" />
          </div>

          {/* Skeleton Spotlight Section */}
          <div className="mb-16 hidden lg:grid grid-cols-1 gap-6 lg:h-[500px] lg:grid-cols-3">
            <div className="h-[400px] lg:col-span-2 lg:h-full">
              <SpotlightCardSkeleton isLarge />
            </div>
            <div className="flex h-[600px] flex-col gap-6 lg:col-span-1 lg:h-full">
              <div className="h-full flex-1">
                <SpotlightCardSkeleton />
              </div>
              <div className="h-full flex-1">
                <SpotlightCardSkeleton />
              </div>
            </div>
          </div>

          <SectionHeader title="Berita dan Artikel" className="mb-8 md:mb-10" />

          {/* Skeleton Grid Berita */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
