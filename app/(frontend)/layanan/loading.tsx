import React from 'react'
import { Skeleton } from '@/components/elements/Skeleton'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'

export default function Loading() {
  return (
    <main className="relative w-full bg-neutral-100 min-h-screen">
      {/* 1. Page Header Skeleton */}
      <section className="relative w-full h-[360px] sm:h-[400px] md:h-[480px] overflow-hidden bg-slate-900/60">
        <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-slate-800/80" />
        <div className="absolute inset-x-0 bottom-0 h-[80%] pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex h-full flex-col justify-end pb-[210px] mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
            <div className="space-y-3">
              <Skeleton className="w-48 sm:w-64 md:w-80 h-8 sm:h-10 rounded-lg bg-white/30 before:via-white/20" />
              <Skeleton className="w-64 sm:w-96 h-4 sm:h-5 rounded-md bg-white/20 before:via-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Page Overlap Skeleton */}
      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff]">
        <DefaultLayout>
          {/* SearchBar Skeleton */}
          <div className="flex justify-center">
            <Skeleton className="w-full max-w-[586px] h-12 rounded-full bg-neutral-200/90" />
          </div>

          {/* Service Sections Skeleton */}
          <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20 pb-20">
            {[...Array(2)].map((_, secIdx) => (
              <section key={secIdx} className="flex flex-col gap-8 md:gap-10">
                {/* Section Header Skeleton */}
                <Skeleton className="w-40 sm:w-56 h-8 rounded-lg bg-neutral-300/80" />

                {/* Service Cards Grid (4 columns) */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[...Array(4)].map((_, cardIdx) => (
                    <div
                      key={cardIdx}
                      className="flex min-h-[200px] flex-col justify-between gap-5 rounded-[32px] bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
                    >
                      <div className="flex items-start justify-between">
                        <Skeleton className="size-12 rounded-2xl bg-neutral-200" />
                        <Skeleton className="size-6 rounded-full bg-neutral-200" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="w-3/4 h-5 rounded-md bg-neutral-300/80" />
                        <Skeleton className="w-full h-3.5 rounded bg-neutral-200" />
                        <Skeleton className="w-4/5 h-3.5 rounded bg-neutral-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
