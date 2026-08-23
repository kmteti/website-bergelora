import React from 'react'
import type { Metadata } from 'next'
import { Event } from '@/modules/event/Event'
import { getPayload } from 'payload'
import config from '@payload-config'
import { eventData as staticEventData } from '@/modules/event/data/data'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const payload = await getPayload({ config })
    const { docs: eventsList } = await payload.find({
      collection: 'events',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    const doc = eventsList[0]
    const staticData = staticEventData.find((e) => e.slug === slug)

    if (!doc && !staticData) {
      return { title: 'Event KMTETI' }
    }

    const nama = doc?.nama || staticData?.nama || 'Event'
    const detail = doc?.detail || staticData?.detail || `Event Nasional ${nama} persembahan KMTETI FT UGM.`
    const header = doc?.header || staticData?.header || '/images/home/hero/slide1.webp'

    return {
      title: nama,
      description: detail,
      alternates: {
        canonical: `/event/${slug}`,
      },
      openGraph: {
        title: nama,
        description: detail,
        url: `/event/${slug}`,
        images: [{ url: header, alt: nama }],
      },
      twitter: {
        card: 'summary_large_image',
        title: nama,
        description: detail,
        images: [header],
      },
    }
  } catch {
    const staticData = staticEventData.find((e) => e.slug === slug)
    const nama = staticData?.nama || 'Event'
    return {
      title: nama,
      alternates: { canonical: `/event/${slug}` },
    }
  }
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params
  return <Event slug={slug} />
}