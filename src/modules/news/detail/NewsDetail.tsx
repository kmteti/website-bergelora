import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { H2 } from '@/components/elements/Typography'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { NavbarResolver } from '@/components/layout/NavbarResolver'
import { ALL_NEWS_DATA } from '@/modules/news/mock-data/NewsData'
import { LatestArticle } from './component/LatestArticle'
import { notFound } from 'next/navigation'

export function NewsDetail({ slug }: { slug: string }) {
  const currentNewsIndex = ALL_NEWS_DATA.findIndex((item) => item.slug === slug)

  if (currentNewsIndex === -1) {
    notFound()
  }

  const news = ALL_NEWS_DATA[currentNewsIndex]

  // Get latest 4 excluding the current one
  // TODO: Implement proper fetching logic in the future based on date
  const latestArticles = ALL_NEWS_DATA.filter((item) => item.slug !== slug).slice(0, 4)

  return (
    <main className="w-full relative min-h-screen bg-neutral-100">
      <div className="bg-gradient-to-b from-[#f6f6f6] from-[94%] to-[#c2dfff] min-h-[500px] w-full relative z-20 -mb-[24px] md:-mb-[32px] pb-12 rounded-b-[24px] md:rounded-b-[32px] overflow-hidden">
        <DefaultLayout>
          <NavbarResolver />

          {/* Back button */}
          <Link href="/tentang/berita" className="inline-block mb-10">
            <Button variant="black" leftIcon={<ArrowLeft className="w-5 h-5" />}>
              Kembali
            </Button>
          </Link>

          {/* Title and Metadata */}
          <div className="mb-10 w-full">
            <H2 className="text-[#2D2D2D] mb-4">{news.title}</H2>
            <div className="flex items-center gap-2 text-sm font-medium text-[#A0A0A0]">
              <span>{news.date}</span>
              <span className="text-[#D9D9D9]">|</span>
              <span className="text-primary-400">{news.category}</span>
            </div>
          </div>

          {/* Thumbnail Image */}
          <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden border-[3px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] mb-12">
            <Image src={news.image} alt={news.title} fill className="object-cover" priority />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed whitespace-pre-wrap mb-24">
            {news.content}
          </div>

          {/* Latest Articles */}
          <LatestArticle data={latestArticles} />
        </DefaultLayout>
      </div>
    </main>
  )
}
