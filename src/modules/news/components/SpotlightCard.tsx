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
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex h-full w-full overflow-hidden rounded-[24px] md:rounded-[32px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-100',
        className
      )}
    >
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      {/* Gradient overlay to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Text Content */}
      <div className={cn(
        "absolute bottom-0 left-0 flex w-full flex-col justify-end",
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
