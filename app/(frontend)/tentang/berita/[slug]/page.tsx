import React from 'react'
import { NewsDetail } from '@/modules/news/detail/NewsDetail'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

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