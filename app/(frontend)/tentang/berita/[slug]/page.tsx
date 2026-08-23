import React from 'react'
import { NewsDetail } from '@/modules/news/detail/NewsDetail'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const payload = await getPayload({ config })
  
  const { docs: newsDocs } = await payload.find({
    collection: 'news',
    where: {
      slug: { equals: resolvedParams.slug },
      _status: { equals: 'published' }
    },
    limit: 1,
  })

  if (!newsDocs.length) {
    return {}
  }

  const news = newsDocs[0]
  
  let imageUrl = '/images/home/hero/hero-bg.webp'
  if (news.image && typeof news.image === 'object' && 'url' in news.image) {
    imageUrl = news.image.url as string
  }

  // title.template appends the brand; og/twitter titles don't get the template, so brand them here.
  const socialTitle = `${news.title} | ${SITE_NAME}`

  return {
    title: news.title,
    description: `Baca berita terbaru mengenai ${news.title}`,
    alternates: { canonical: `/tentang/berita/${news.slug}` },
    openGraph: {
      title: socialTitle,
      description: `Baca berita terbaru mengenai ${news.title}`,
      url: `/tentang/berita/${news.slug}`,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: `Baca berita terbaru mengenai ${news.title}`,
      images: [imageUrl],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  
  const payload = await getPayload({ config })
  
  // Find current news
  const { docs: newsDocs } = await payload.find({
    collection: 'news',
    where: {
      slug: { equals: resolvedParams.slug },
      _status: { equals: 'published' }
    },
    limit: 1,
  })

  if (!newsDocs.length) {
    notFound()
  }

  // Find latest 4 news (excluding current one) for the "Berita Terkait" section
  const { docs: latestDocs } = await payload.find({
    collection: 'news',
    where: {
      slug: { not_equals: resolvedParams.slug },
      _status: { equals: 'published' }
    },
    sort: '-date',
    limit: 4,
  })

  return <NewsDetail news={newsDocs[0]} latestNews={latestDocs} />
}