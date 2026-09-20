import Hero from '@/modules/home/Hero'
import Profile from '@/modules/home/Profile'
import DivisiBSO from '@/modules/home/DivisiBSO'
import News from '@/modules/home/News'
import Event from '@/modules/home/Event'
import Life from '@/modules/home/Life'
import React from 'react'

import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { FolderData } from '@/modules/home/components/FolderCarousel'
import { SITE_NAME, SITE_LEGAL_NAME } from '@/lib/site'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

// Same route segment as the root layout, so title.template does NOT apply here.
export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
  description: 'Selamat datang di situs resmi KMTETI FT UGM. Jelajahi profil, divisi, badan semi otonom, berita terkini, dan kehidupan mahasiswa di lingkungan KMTETI.',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
    description: 'Selamat datang di situs resmi KMTETI FT UGM. Jelajahi profil, divisi, badan semi otonom, berita terkini, dan kehidupan mahasiswa di lingkungan KMTETI.',
    url: '/',
  },
}

export default async function HomePage() {
  const payload = await getPayload({ config })
  const { docs: divisiList } = await payload.find({
    collection: 'divisi',
    limit: 100,
  })

  const mappedDivisi: FolderData[] = divisiList.map((d) => ({
    name: d.nama,
    slug: d.slug || undefined,
    photo: typeof d.header === 'string' ? d.header : '',
    logo: typeof d.logo === 'string' ? d.logo : '',
    description: d.tujuan || d.detail,
  }))

  return (
    <>
      {/* Wrap Hero + Profile so Hero's sticky only works within this container.
          Once this div scrolls out of view, Hero scrolls away with it. */}
      <div className="relative">
        <Hero />
        <Profile />
      </div>
      <News />
      <DivisiBSO initialDivisiData={mappedDivisi} />
      <Event />
      <Life />
    </>
  )
}
