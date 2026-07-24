import News from '@/modules/news/News'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

export default async function Page() {
  const payload = await getPayload({ config })
  
  const { docs: news } = await payload.find({
    collection: 'news',
    where: {
      _status: { equals: 'published' },
    },
    sort: '-date',
    limit: 100, // Fetch up to 100 news items for now, ideally handled by real pagination API
  })

  return <News initialNews={news} />
}
