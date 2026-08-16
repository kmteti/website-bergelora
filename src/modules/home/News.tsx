import { H2, B2 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { NewsCard } from '@/modules/news/components/NewsCard'
import { NewsCardSkeleton } from '@/modules/news/components/NewsSkeleton'
import { getPayload } from 'payload'
import config from '@payload-config'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
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
    image: typeof news.image === 'object' && news.image?.url ? news.image.url : '/images/news/placeholder.webp',
    slug: news.slug,
  }))

  if (newsData.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {newsData.map((news, index) => (
        <NewsCard 
          key={index} 
          category={news.category}
          title={news.title}
          date={news.date}
          image={news.image}
          href={`/tentang/berita/${news.slug}`}
        />
      ))}
    </div>
  )
}

export default function News() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff] pt-[95px] pb-[160px]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header Section (Always static, loaded instantly) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14">
          <H2 className="text-[#0a4c5a] font-semibold md:w-1/3 text-left">
            KMTETI News
          </H2>
          <B2 className="text-gray-600 md:w-1/2 text-left leading-relaxed">
            Pusat kabar dan informasi terkini seputar kegiatan, inovasi, serta dinamika kehidupan mahasiswa di lingkungan KMTETI FT UGM.
          </B2>
        </div>

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
