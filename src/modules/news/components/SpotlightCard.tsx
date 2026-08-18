'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { H4, H6 } from '@/components/elements/Typography'

export interface SpotlightCardProps {
  category: string
  title: string
  date: string
  image: string
  href?: string
  isLarge?: boolean
  className?: string
}

export function SpotlightCard({ category, title, date, image, href = '#', isLarge, className }: SpotlightCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex h-full w-full overflow-hidden rounded-[24px] md:rounded-[32px] bg-neutral-900 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-100',
        className
      )}
    >
      {/* Standalone Image Shimmer Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 bg-neutral-800 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}

      <Image 
        src={hasError ? '/images/news/placeholder.webp' : image} 
        alt={title} 
        fill 
        sizes={isLarge ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true)
          setIsLoaded(true)
        }}
        className={cn(
          "object-cover transition-all duration-700 group-hover:scale-105",
          isLoaded ? "opacity-100" : "opacity-0"
        )} 
      />
      {/* Gradient overlay to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 z-10" />
      
      {/* Text Content */}
      <div className={cn(
        "absolute bottom-0 left-0 flex w-full flex-col justify-end z-20",
        isLarge ? "p-6 md:p-8" : "p-5 md:p-6"
      )}>
        {isLarge ? (
          <H4 className="text-white drop-shadow-md line-clamp-3">{title}</H4>
        ) : (
          <H6 className="text-white drop-shadow-md line-clamp-3">{title}</H6>
        )}
        <div className={cn(
          "mt-2 flex items-center gap-2 font-medium text-white/80 drop-shadow-sm",
          isLarge ? "text-sm mt-3" : "text-xs mt-2"
        )}>
          <span>{date}</span>
          <span className="text-white/40">|</span>
          <span className="text-primary-200">{category}</span>
        </div>
      </div>
    </Link>
  )
}
