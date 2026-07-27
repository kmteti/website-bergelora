import React from 'react'
import { Event } from '@/modules/event/Event'

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <Event slug={slug} />
}