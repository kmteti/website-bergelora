import Layanan from '@/modules/layanan/Layanan'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Layanan publik, peminjaman inventaris, dan fasilitas Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  alternates: {
    canonical: '/layanan',
  },
  openGraph: {
    title: 'Layanan',
    description: 'Layanan publik dan fasilitas KMTETI FT UGM.',
    url: '/layanan',
  },
}

const page = async () => {
  const payload = await getPayload({ config })
  const { docs: layananDocs } = await payload.find({
    collection: 'layanan',
    limit: 100,
    sort: 'order',
  })

  return <Layanan initialLayanan={layananDocs} />
}

export default page
