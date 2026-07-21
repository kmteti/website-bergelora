import React from 'react'
import { NewsDetail } from '@/modules/news/detail/NewsDetail'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  return <NewsDetail slug={resolvedParams.slug} />
}