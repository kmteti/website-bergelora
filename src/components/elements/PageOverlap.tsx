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
        "relative w-full z-20 -mt-40 rounded-t-[24px] md:rounded-t-[32px] overflow-hidden", 
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
