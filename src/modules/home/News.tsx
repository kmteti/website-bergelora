import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { NewsCardSkeleton } from '@/modules/news/components/NewsSkeleton'
import NewsHeader from './components/NewsHeader'
import NewsGridClient from './components/NewsGridClient'
import { getPayload } from 'payload'
import config from '@payload-config'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { getMediaUrl } from '@/lib/media'
import React, { Suspense } from 'react'

function NewsCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </div>
  )
}

async function NewsGrid() {
  let newsDocs: any[] = []
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'news',
      where: {
        _status: { equals: 'published' },
      },
      sort: '-date',
      limit: 4,
    })
    newsDocs = res.docs
  } catch (error) {
    console.error('Error fetching news for Home:', error)
  }

  const newsData = newsDocs.map((news) => ({
    category: news.category,
    title: news.title,
    date: news.date ? format(new Date(news.date), 'dd MMMM yyyy', { locale: id }) : '-',
    image: getMediaUrl(news.image),
    slug: news.slug,
  }))

  if (newsData.length === 0) {
    return null
  }

  return <NewsGridClient newsData={newsData} />
}

export default function News() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff] pt-[95px] pb-[160px]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header Section with Masked Curtain Reveal */}
        <NewsHeader />

        {/* Cards Grid with inner Suspense */}
        <Suspense fallback={<NewsCardsSkeleton />}>
          <NewsGrid />
        </Suspense>

        {/* Action Button */}
        <div className="flex justify-center mt-16">
          <Link href="/tentang/berita">
            <Button
              variant="secondary"
              size="default"
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <span>KMTETI News</span>
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
