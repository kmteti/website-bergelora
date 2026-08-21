import React from 'react'
import Profile from '@/modules/profile/Profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
  description: 'Profil Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  openGraph: {
    title: 'Profil | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
    description: 'Profil Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
    url: '/tentang/profil',
  },
}

const page = () => {
  return (
    <Profile />
  )
}

export default page