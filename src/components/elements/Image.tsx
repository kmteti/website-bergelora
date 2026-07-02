import NextImage from 'next/image'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  className?: string
}

export function Image({ src, alt, className, ...props }: ImageProps) {
  return (
    <div
      className={cn(
        'relative aspect-video w-full rounded-[2rem] bg-neutral-300 shadow-xl border border-neutral-200/50 overflow-hidden group',
        className,
      )}
      {...props}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  )
}

