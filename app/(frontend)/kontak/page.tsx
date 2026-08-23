import React from 'react'
import { Kontak } from '@/modules/kontak/Kontak'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  alternates: { canonical: '/kontak' },
  openGraph: {
    title: `Kontak | ${SITE_NAME}`,
    description: 'Hubungi KMTETI FT UGM.',
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