import React from 'react'
import { Metadata } from 'next'
import Kalender from '@/modules/kalender/Kalender'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Agenda Bulanan',
  description: 'Kalender dan agenda kegiatan rutin KMTETI FT UGM.',
  alternates: { canonical: '/kalender' },
  openGraph: {
    title: `Agenda Bulanan | ${SITE_NAME}`,
    description: 'Kalender dan agenda kegiatan rutin KMTETI FT UGM.',
    url: '/kalender',
  },
}

export default function KalenderPage() {
  return <Kalender />
}
