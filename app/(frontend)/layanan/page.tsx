import Layanan from '@/modules/layanan/Layanan'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
  description: 'Layanan publik dan fasilitas Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  openGraph: {
    title: 'Layanan | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
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
