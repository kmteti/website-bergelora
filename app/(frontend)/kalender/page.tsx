import React from 'react'
import { Metadata } from 'next'
import Kalender from '@/modules/kalender/Kalender'

export const metadata: Metadata = {
  title: 'Agenda Bulanan',
  description: 'Kalender akademik dan agenda kegiatan rutin Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  alternates: {
    canonical: '/kalender',
  },
  openGraph: {
    title: 'Agenda Bulanan',
    description: 'Kalender dan agenda kegiatan rutin KMTETI FT UGM.',
    url: '/kalender',
  },
}

export default function KalenderPage() {
  return <Kalender />
}
