import React from 'react'
import { Skeleton } from '@/components/elements/Skeleton'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'

export function DetailSkeleton() {
  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Header Skeleton */}
      <section className="relative w-full h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden bg-slate-900/60">
        <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-slate-800/80" />

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[80%] pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content Wrapper */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex h-full flex-col justify-end pb-[210px] mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                {/* Logo Icon Skeleton */}
                <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 md:w-[84px] md:h-[84px] shrink-0 rounded-xl bg-white/20 before:via-white/20" />

                {/* Title & Description Skeleton */}
                <div className="space-y-2 sm:space-y-3">
                  <Skeleton className="w-40 sm:w-56 md:w-80 h-7 sm:h-9 md:h-10 rounded-lg bg-white/30 before:via-white/20" />
                  <Skeleton className="w-56 sm:w-80 md:w-[420px] h-4 sm:h-5 rounded-md bg-white/20 before:via-white/20" />
                </div>
              </div>

              {/* Navigation Buttons Skeleton (Hidden on mobile) */}
              <div className="hidden sm:flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-xl bg-white/20" />
                <Skeleton className="w-10 h-10 rounded-xl bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Container Overlap Skeleton */}
      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#EAF9FF] to-[#E1F3FA]">
        <div className="relative">
          <DefaultLayout>
            {/* Section Tujuan & Galeri Skeleton */}
            <div className="pb-16 pt-6">
              <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                <Skeleton className="w-36 h-7 mx-auto rounded-md bg-sky-200/60" />
                <Skeleton className="w-full max-w-2xl h-4 mx-auto rounded bg-sky-200/50" />
                <Skeleton className="w-4/5 max-w-xl h-4 mx-auto rounded bg-sky-200/50" />
              </div>

              {/* Gallery Grid Skeleton */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="aspect-[4/3] rounded-2xl bg-sky-200/60" />
                ))}
              </div>
            </div>

            {/* Section Proker / Cards Grid Skeleton */}
            <div className="pt-8 pb-20">
              <div className="text-center mb-12 sm:mb-16">
                <Skeleton className="w-48 sm:w-60 h-8 mx-auto rounded-lg bg-sky-200/70 mb-4" />
                <Skeleton className="w-64 sm:w-96 h-4 mx-auto rounded bg-sky-200/50" />
              </div>

              {/* 3 Columns Grid of Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[...Array(6)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full h-[360px] bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8 border border-gray-100/50 flex flex-col items-center text-center"
                  >
                    <Skeleton className="w-12 h-12 rounded-full mb-6 bg-slate-100" />
                    <Skeleton className="w-3/4 h-6 mb-4 rounded-md bg-slate-200/80" />
                    <div className="w-full space-y-2.5 mb-6">
                      <Skeleton className="w-full h-3.5 rounded bg-slate-100" />
                      <Skeleton className="w-11/12 h-3.5 rounded bg-slate-100" />
                      <Skeleton className="w-4/5 h-3.5 rounded bg-slate-100" />
                    </div>
                    <Skeleton className="w-1/2 h-4 mt-auto rounded-full bg-slate-100" />
                  </div>
                ))}
              </div>
            </div>
          </DefaultLayout>
        </div>
      </PageOverlap>
    </main>
  )
}
