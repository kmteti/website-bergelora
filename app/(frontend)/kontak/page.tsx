import React from 'react'
import { Kontak } from '@/modules/kontak/Kontak'
import { getPayload } from 'payload'
import config from '@payload-config'

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