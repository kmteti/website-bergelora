import React from 'react'
import { Skeleton } from '@/components/elements/Skeleton'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'

export default function Loading() {
  return (
    <main className="relative w-full bg-neutral-100 min-h-screen">
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

      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#f6f6f6] to-[#c2dfff] pb-20">
        <DefaultLayout>
          <div className="flex flex-col gap-6 pt-8 max-w-4xl mx-auto">
            <Skeleton className="w-3/4 h-8 rounded-lg bg-neutral-300" />
            <Skeleton className="w-full h-32 rounded-2xl bg-white/80" />
            <Skeleton className="w-full h-48 rounded-2xl bg-white/80" />
          </div>
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
