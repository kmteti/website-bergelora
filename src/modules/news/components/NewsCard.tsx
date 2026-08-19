'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { H3 } from '@/components/elements/Typography'

export interface NewsCardProps {
  category: string
  title: string
  date: string
  image: string
  href?: string
  className?: string
  priority?: boolean
  sizes?: string
  searchQuery?: string
}

export const NewsCard = ({
  category,
  title,
  date,
  image,
  href = '#',
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  searchQuery,
}: NewsCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Highlight search keyword if provided
  const renderTitle = () => {
    if (!searchQuery || searchQuery.trim() === '') return <span dangerouslySetInnerHTML={{ __html: title }} />

    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const plainText = title.replace(/<[^>]*>?/gm, '')
    const parts = plainText.split(regex)

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-300/80 text-black px-0.5 rounded-sm">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <Link 
      href={href}
      className={cn(
        "group flex flex-col h-full bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100",
        className
      )}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
        {/* Shimmer sweep loader while image is loading */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-10 overflow-hidden bg-neutral-100">
            <div 
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_infinite]"
              style={{
                animation: 'shimmer 1.5s infinite linear'
              }}
            />
          </div>
        )}
        <Image 
          src={hasError ? '/images/news/placeholder.webp' : image} 
          alt={title.replace(/<[^>]*>?/gm, '')} 
          fill 
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true)
            setIsLoaded(true)
          }}
          className={cn(
            "object-cover text-transparent select-none transition-all duration-500 group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )} 
        />
      </div>
      <div className="flex flex-col flex-grow p-5 md:p-6 text-left">
        <span className="mb-3 text-xs md:text-sm font-semibold text-primary-600">{category}</span>
        <H3 className="mb-6 text-[#2D2D2D] transition-colors group-hover:text-primary line-clamp-3 text-[18px] leading-[24px] font-semibold">{renderTitle()}</H3>
        <span className="mt-auto text-xs md:text-sm text-neutral-600 font-medium">{date}</span>
      </div>
    </Link>
  )
}
