import React from 'react'
import Profile from '@/modules/profile/Profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil',
  description: 'Profil, visi misi, dan struktur kepengurusan Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  alternates: {
    canonical: '/tentang/profil',
  },
  openGraph: {
    title: 'Profil',
    description: 'Profil, visi misi, dan struktur kepengurusan KMTETI FT UGM.',
    url: '/tentang/profil',
  },
}

const page = () => {
  return (
    <Profile />
  )
}

export default page