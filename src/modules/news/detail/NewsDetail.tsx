'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { H2 } from '@/components/elements/Typography'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { NavbarResolver } from '@/components/layout/NavbarResolver'
import { LatestArticle } from './component/LatestArticle'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { cn } from '@/lib/utils'

export function NewsDetail({ news, latestNews }: { news: any, latestNews: any[] }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [hasImageError, setHasImageError] = useState(false)
  const imageUrl = typeof news.image === 'object' && news.image?.url ? news.image.url : '/images/news/placeholder.webp'
  const formattedDate = news.date ? format(new Date(news.date), 'dd MMMM yyyy', { locale: id }) : '-'

  const mappedLatestNews = (latestNews || []).map((item) => ({
    title: item.title,
    slug: item.slug,
    category: item.category,
    date: item.date ? format(new Date(item.date), 'dd MMMM yyyy', { locale: id }) : '-',
    image: typeof item.image === 'object' && item.image?.url ? item.image.url : '/images/news/placeholder.webp',
    content: '',
  }))

  return (
    <main className="w-full relative min-h-screen bg-neutral-100">
      <div className="bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff] min-h-[500px] w-full relative z-20 -mb-[24px] md:-mb-[32px] rounded-b-[24px] md:rounded-b-[32px] overflow-hidden">
        <DefaultLayout>
          <NavbarResolver />

          {/* Main Article Container */}
          <div className="w-full">
            {/* Back button */}
            <Link href="/tentang/berita" className="inline-block mb-8">
              <Button variant="black" leftIcon={<ArrowLeft className="w-5 h-5" />}>
                Kembali
              </Button>
            </Link>

          {/* Title and Metadata */}
          <div className="mb-10 w-full">
            <H2 className="text-[#2D2D2D] mb-4 text-wrap">{news.title}</H2>
            <div className="flex items-center gap-2 text-sm font-medium text-[#A0A0A0]">
              <span>{formattedDate}</span>
              <span className="text-[#D9D9D9]">|</span>
              <span className="text-primary-400">{news.category}</span>
            </div>
          </div>

          {/* Thumbnail Image — Natural aspect ratio */}
          <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden border-[3px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] mb-12 bg-neutral-100 min-h-[220px] md:min-h-[380px] flex items-center justify-center">
            {/* Standalone Image Shimmer Loader */}
            {!isImageLoaded && (
              <div className="absolute inset-0 z-0 bg-neutral-200 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </div>
            )}

            <Image 
              src={hasImageError ? '/images/news/placeholder.webp' : imageUrl} 
              alt={news.title} 
              width={typeof news.image === 'object' && news.image?.width ? news.image.width : 1200}
              height={typeof news.image === 'object' && news.image?.height ? news.image.height : 675}
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority 
              onLoad={() => setIsImageLoaded(true)}
              onError={() => {
                setHasImageError(true)
                setIsImageLoaded(true)
              }}
              className={cn(
                "w-full h-auto max-h-[640px] object-cover transition-opacity duration-500",
                isImageLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none text-neutral-800 leading-relaxed mb-24 prose-headings:text-black prose-a:text-primary-500 hover:prose-a:text-primary-600 prose-img:rounded-2xl prose-img:w-full prose-img:h-auto prose-hr:my-8 prose-hr:border-neutral-200">
            <RichText data={news.content} />
          </div>

            {/* Latest Articles */}
            <LatestArticle data={mappedLatestNews} />
          </div>
        </DefaultLayout>
      </div>
    </main>
  )
}
