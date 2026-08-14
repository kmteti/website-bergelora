import React from 'react'
import { Skeleton } from '@/components/elements/Skeleton'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'

export default function Loading() {
  return (
    <main className="relative w-full bg-neutral-100 min-h-screen">
      {/* Hero Header Skeleton */}
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

      {/* Overlap Skeleton */}
      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff]">
        <DefaultLayout>
          {/* Main Content Box Skeleton */}
          <div className="mx-auto w-full max-w-4xl rounded-[32px] bg-white p-6 sm:p-10 shadow-xl border border-neutral-200/80">
            <div className="space-y-6 text-center">
              <Skeleton className="w-48 h-8 mx-auto rounded-md bg-neutral-200" />
              <Skeleton className="w-full max-w-md h-4 mx-auto rounded bg-neutral-200" />
              
              {/* Form Steps Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-16 rounded-2xl bg-neutral-100" />
                ))}
              </div>

              {/* Input Fields Skeleton */}
              <div className="space-y-4 pt-6 text-left">
                <Skeleton className="w-full h-12 rounded-xl bg-neutral-100" />
                <Skeleton className="w-full h-12 rounded-xl bg-neutral-100" />
                <Skeleton className="w-full h-24 rounded-xl bg-neutral-100" />
              </div>
            </div>
          </div>

          {/* FAQ Accordions Skeleton */}
          <div className="mt-20 md:mt-28 space-y-4 pb-20">
            <Skeleton className="w-32 h-8 rounded-lg bg-neutral-300/80 mb-8" />
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="w-full h-16 rounded-[24px] bg-white shadow-sm" />
            ))}
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
