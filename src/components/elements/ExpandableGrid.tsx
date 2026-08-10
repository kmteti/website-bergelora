'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ExpandableGridProps {
  children: React.ReactNode
  initialLimit?: number
  step?: number
  gridClassName?: string
  moreLabel?: string
}

export function ExpandableGrid({
  children,
  initialLimit = 6,
  step = 6,
  gridClassName = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8',
  moreLabel = 'Lihat lebih banyak',
}: ExpandableGridProps) {
  const items = React.Children.toArray(children)
  const [visibleCount, setVisibleCount] = useState(initialLimit)

  if (!items || items.length === 0) return null

  const hasMoreOnMobile = visibleCount < items.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(items.length, prev + step))
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className={cn('w-full', gridClassName)}>
        {items.map((item, index) => {
          const isVisibleOnMobile = index < visibleCount
          return (
            <div
              key={index}
              className={cn(
                'transition-all duration-500 ease-in-out',
                isVisibleOnMobile
                  ? 'block animate-in fade-in zoom-in-95'
                  : 'hidden sm:block' // Hidden on mobile, always visible on tablet/desktop (sm:)
              )}
            >
              {item}
            </div>
          )
        })}
      </div>

      {/* Text-only click trigger (Mobile only: sm:hidden) */}
      {hasMoreOnMobile && (
        <div className="mt-8 flex sm:hidden justify-center w-full">
          <button
            type="button"
            onClick={handleLoadMore}
            className="group inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary-400 hover:text-primary-500 transition-colors py-2 px-4 cursor-pointer focus:outline-none"
          >
            <span className="underline-offset-4 group-hover:underline">
              {moreLabel}
            </span>
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
        </div>
      )}
    </div>
  )
}
