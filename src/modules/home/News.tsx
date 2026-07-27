import { H2, B2 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function News() {
  const newsData = [
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide1.webp'
    },
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide2.webp'
    },
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide3.webp'
    },
    {
      category: 'Press Release',
      title: 'Mahasiswa UGM Borong Dua Kemenangan',
      date: '7 Juli 2026',
      image: '/images/home/hero/slide1.webp'
    }
  ]

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-[95px] pb-[160px]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14">
          <H2 className="text-[#0a4c5a] font-semibold md:w-1/3 text-left">
            KMTETI News
          </H2>
          <B2 className="text-gray-600 md:w-1/2 text-left leading-relaxed">
            At KMTETI, a spirit of optimism and possibility energizes our mission of discovery and learning. Here you&apos;ll find a place of intellectual expansiveness, wide-ranging perspectives, and freedom to explore new lines of thinking.
          </B2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {newsData.map((news, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 border border-gray-100"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="text-[#5c98a3] text-sm font-medium mb-3">
                  {news.category}
                </span>
                <h3 className="text-[#2D2D2D] font-semibold text-lg leading-snug mb-6">
                  {news.title}
                </h3>
                <span className="text-[#A0A0A0] text-sm mt-auto">
                  {news.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button variant="primary" className="rounded-xl px-6 py-6 shadow-md hover:shadow-lg transition-shadow">
            <span className="font-semibold text-base">KMTETI News</span>
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
