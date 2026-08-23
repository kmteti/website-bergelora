import React from 'react'
import { Kontak } from '@/modules/kontak/Kontak'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi pengurus Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM, formulir komunikasi, FAQ, dan narahubung resmi.',
  alternates: {
    canonical: '/kontak',
  },
  openGraph: {
    title: 'Kontak',
    description: 'Hubungi KMTETI FT UGM, FAQ, dan narahubung resmi.',
    url: '/kontak',
  },
}

export default async function KontakPage() {
  const payload = await getPayload({ config })

  const { docs: faqDocs } = await payload.find({
    collection: 'faq',
    limit: 100,
    sort: 'order',
  })

  const { docs: cpDocs } = await payload.find({
    collection: 'narahubung',
    limit: 100,
    sort: 'order',
  })

  return <Kontak initialFaq={faqDocs} initialNarahubung={cpDocs} />
}