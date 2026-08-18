import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import Kalender from '@/modules/kalender/Kalender'

export const revalidate = 60 // Revalidate cache every 60 seconds (ISR)

export const metadata: Metadata = {
  title: 'Agenda Bulanan | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
  description: 'Kalender dan agenda kegiatan rutin KMTETI FT UGM.',
  openGraph: {
    title: 'Agenda Bulanan | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
    description: 'Kalender dan agenda kegiatan rutin KMTETI FT UGM.',
    url: '/kalender',
  },
}

export default async function KalenderPage() {
  let events: any[] = []
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'events',
      limit: 100,
    })
    events = docs
  } catch (error) {
    console.error('Error fetching events for Kalender page:', error)
  }

  return <Kalender initialEvents={events} />
}
