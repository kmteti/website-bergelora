import React from 'react'
import { Skeleton } from '@/components/elements/Skeleton'

export function NewsCardSkeleton() {
  return (
    <div className="group flex flex-col rounded-[32px] bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="w-full aspect-[4/3] rounded-none" />
      
      {/* Content Skeleton */}
      <div className="flex flex-col flex-grow p-5 md:p-6 text-left">
        {/* Category */}
        <Skeleton className="w-24 h-4 mb-4 rounded-full" />
        
        {/* Title */}
        <div className="space-y-2 mb-6">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-[80%] h-5" />
          <Skeleton className="w-[60%] h-5" />
        </div>
        
        {/* Date */}
        <Skeleton className="w-20 h-3 mt-auto" />
      </div>
    </div>
  )
}

export function SpotlightCardSkeleton({ isLarge = false }: { isLarge?: boolean }) {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[32px] bg-white shadow-lg">
      <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
      
      {/* Overlay gradient skeleton */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content Skeleton */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
        <Skeleton className="w-24 h-5 mb-4 rounded-full bg-white/30 before:via-white/20" />
        <div className="space-y-3 mb-4">
          <Skeleton className="w-full h-8 bg-white/30 before:via-white/20" />
          <Skeleton className="w-[70%] h-8 bg-white/30 before:via-white/20" />
        </div>
        <Skeleton className="w-24 h-4 bg-white/30 before:via-white/20" />
      </div>
    </div>
  )
}
