import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { H5 } from '@/components/elements/Typography'

export interface NewsCardProps {
  category: string
  title: string
  date: string
  image: string
  href?: string
  className?: string
  searchQuery?: string
}

export function NewsCard({ category, title, date, image, href = '#', className, searchQuery }: NewsCardProps) {
  const renderTitle = () => {
    if (!searchQuery || searchQuery.trim() === '') return title
    
    // Pecah string berdasarkan kata kunci pencarian (case-insensitive)
    const regex = new RegExp(`(${searchQuery})`, 'gi')
    const parts = title.split(regex)
    
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
        'group flex flex-col rounded-[32px] bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.14)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-100 overflow-hidden',
        className,
      )}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="flex flex-col flex-grow p-5 md:p-6 text-left">
        <span className="mb-3 text-xs md:text-sm font-medium text-primary-400">{category}</span>
        <H5 className="mb-6 text-[#2D2D2D] transition-colors group-hover:text-primary line-clamp-3">{renderTitle()}</H5>
        <span className="mt-auto text-xs md:text-sm text-[#A0A0A0]">{date}</span>
      </div>
    </Link>
  )
}
