'use client'

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
export function NewsDetail({ news, latestNews }: { news: any, latestNews: any[] }) {
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

          {/* Thumbnail Image */}
          <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden border-[3px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] mb-12">
            <Image src={imageUrl} alt={news.title} fill className="object-cover" priority />
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
