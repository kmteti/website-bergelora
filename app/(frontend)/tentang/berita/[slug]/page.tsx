import React from 'react'
import { NewsDetail } from '@/modules/news/detail/NewsDetail'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

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
  
  let imageUrl = '/images/home/hero/slide1.webp'
  if (news.image && typeof news.image === 'object' && 'url' in news.image && typeof news.image.url === 'string') {
    imageUrl = news.image.url
  }

  return {
    title: news.title,
    description: `Baca berita terbaru mengenai ${news.title} di situs resmi KMTETI FT UGM.`,
    alternates: {
      canonical: `/tentang/berita/${news.slug}`,
    },
    openGraph: {
      title: news.title,
      description: `Baca berita terbaru mengenai ${news.title}`,
      url: `/tentang/berita/${news.slug}`,
      type: 'article',
      publishedTime: news.date ? new Date(news.date).toISOString() : undefined,
      modifiedTime: news.updatedAt ? new Date(news.updatedAt).toISOString() : undefined,
      authors: ['KMTETI FT UGM'],
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
      title: news.title,
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

  const currentNews = newsDocs[0]

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

  let articleImageUrl = 'https://kmteti.org/images/home/hero/slide1.webp'
  if (currentNews.image && typeof currentNews.image === 'object' && 'url' in currentNews.image && typeof currentNews.image.url === 'string') {
    articleImageUrl = currentNews.image.url.startsWith('http') ? currentNews.image.url : `https://kmteti.org${currentNews.image.url}`
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: currentNews.title,
    description: `Baca berita terbaru mengenai ${currentNews.title}`,
    image: [articleImageUrl],
    datePublished: currentNews.date ? new Date(currentNews.date).toISOString() : new Date(currentNews.createdAt).toISOString(),
    dateModified: currentNews.updatedAt ? new Date(currentNews.updatedAt).toISOString() : new Date(currentNews.createdAt).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'KMTETI FT UGM',
      url: 'https://kmteti.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KMTETI FT UGM',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kmteti.org/logo/kmteti/horizontal-color.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kmteti.org/tentang/berita/${currentNews.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <NewsDetail news={currentNews} latestNews={latestDocs} />
    </>
  )
}