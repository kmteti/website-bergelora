import { SectionHeader } from '@/components/elements/SectionHeader'
import { NewsCard } from '@/modules/news/components/NewsCard'
import { LatestArticleCarousel } from './LatestArticleCarousel'
import { NewsItem } from '@/modules/news/mock-data/NewsData'

export function LatestArticle({ data }: { data: NewsItem[] }) {
  // TODO: Fetch latest articles from Payload CMS (excluding the currently viewed article).
  // Make sure to fetch the latest 4 articles dynamically.

  const displayData = data.slice(0, 4).map((item) => ({
    ...item,
    href: `/tentang/berita/${item.slug}`,
  }))

  return (
    <div className="w-full">
      <SectionHeader title="Artikel Terbaru" className="mb-8 md:mb-10" />

      {/* Mobile view (Carousel) */}
      <div className="block lg:hidden">
        <LatestArticleCarousel data={displayData} />
      </div>

      {/* Desktop view (Grid) */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayData.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
    </div>
  )
}
