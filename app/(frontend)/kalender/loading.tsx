import React from 'react'
import { Skeleton } from '@/components/elements/Skeleton'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'

export default function Loading() {
  return (
    <main className="relative w-full bg-neutral-100 min-h-screen">
      {/* 1. Header Skeleton */}
      <section className="relative w-full h-[360px] sm:h-[400px] md:h-[480px] overflow-hidden bg-slate-900/60">
        <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-slate-800/80" />
        <div className="absolute inset-x-0 bottom-0 h-[80%] pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex h-full flex-col justify-end pb-[140px] md:pb-[180px] mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
            <div className="space-y-3">
              <Skeleton className="w-48 sm:w-64 md:w-80 h-8 sm:h-10 rounded-lg bg-white/30" />
              <Skeleton className="w-64 sm:w-96 h-4 sm:h-5 rounded-md bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content Skeleton */}
      <PageOverlap className="min-h-[600px] bg-[#E1F3FA] pb-24">
        <DefaultLayout>
          <div className="flex flex-col gap-12 pt-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="w-full rounded-[32px] bg-white/70 p-6 md:p-8 backdrop-blur-md shadow-sm border border-white/80 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <Skeleton className="w-32 h-8 rounded-lg bg-neutral-300" />
                  <Skeleton className="w-20 h-6 rounded-full bg-neutral-200" />
                </div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Skeleton className="size-3 rounded-full bg-neutral-300 shrink-0" />
                      <Skeleton className="w-full max-w-lg h-4 rounded bg-neutral-200" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
