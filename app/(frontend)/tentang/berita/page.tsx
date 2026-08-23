import News from '@/modules/news/News'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

export const metadata: Metadata = {
  title: 'Berita & Artikel',
  description: 'Kumpulan berita, artikel, dan informasi terbaru seputar Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  alternates: { canonical: '/tentang/berita' },
  openGraph: {
    title: `Berita & Artikel | ${SITE_NAME}`,
    description: 'Kumpulan berita, artikel, dan informasi terbaru seputar KMTETI FT UGM.',
    url: '/tentang/berita',
  },
}

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
