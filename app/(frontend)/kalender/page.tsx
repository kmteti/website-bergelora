import React from 'react'
import { Metadata } from 'next'
import Kalender from '@/modules/kalender/Kalender'

export const metadata: Metadata = {
  title: 'Agenda Bulanan | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
  description: 'Kalender dan agenda kegiatan rutin KMTETI FT UGM.',
  openGraph: {
    title: 'Agenda Bulanan | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
    description: 'Kalender dan agenda kegiatan rutin KMTETI FT UGM.',
    url: '/kalender',
  },
}

export default function KalenderPage() {
  return <Kalender />
}
