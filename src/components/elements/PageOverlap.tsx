import { cn } from '@/lib/utils'
import React from 'react'

export interface PageOverlapProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function PageOverlap({ children, className, ...props }: PageOverlapProps) {
  return (
    <div 
      className={cn(
        "relative w-full z-20 -mt-28 sm:-mt-36 md:-mt-40 -mb-[24px] md:-mb-[32px] rounded-t-[28px] sm:rounded-t-[32px] md:rounded-t-[40px] rounded-b-[24px] md:rounded-b-[32px] overflow-hidden", 
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
