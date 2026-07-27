import React from 'react'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { NavbarResolver } from '@/components/layout/NavbarResolver'
import { Skeleton } from '@/components/elements/Skeleton'
import { NewsCardSkeleton } from '@/modules/news/components/NewsSkeleton'

export default function Loading() {
  return (
    <main className="w-full relative min-h-screen bg-neutral-100">
      <div className="bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff] min-h-[500px] w-full relative z-20 -mb-[24px] md:-mb-[32px] pb-12 rounded-b-[24px] md:rounded-b-[32px] overflow-hidden">
        <DefaultLayout>
          <NavbarResolver />

          {/* Main Article Container Skeleton */}
          <div className="max-w-[960px] mx-auto w-full mt-6 md:mt-10">
            {/* Back button */}
            <div className="inline-block mb-10">
              <Skeleton className="w-28 h-10 rounded-full" />
            </div>

            {/* Title and Metadata */}
            <div className="mb-10 w-full">
              <div className="space-y-4 mb-8">
                <Skeleton className="w-full h-12" />
                <Skeleton className="w-[80%] h-12" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="w-24 h-4" />
                <Skeleton className="w-4 h-4" />
                <Skeleton className="w-32 h-4" />
              </div>
            </div>

            {/* Thumbnail Image */}
            <Skeleton className="w-full aspect-[21/9] rounded-[32px] mb-12" />

            {/* Body Content */}
            <div className="space-y-4 mb-24">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-[90%] h-4" />
              <Skeleton className="w-[95%] h-4" />
              <Skeleton className="w-[60%] h-4" />
              <br />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-[85%] h-4" />
              <Skeleton className="w-[70%] h-4" />
            </div>

            {/* Latest Articles */}
            <div className="mt-16 border-t border-neutral-200 pt-16">
              <div className="flex items-center justify-between mb-8">
                <Skeleton className="w-48 h-8" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <NewsCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        </DefaultLayout>
      </div>
    </main>
  )
}
