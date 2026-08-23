import React from 'react'
import Profile from '@/modules/profile/Profile'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Profil',
  description: 'Profil Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi (KMTETI) FT UGM.',
  alternates: { canonical: '/tentang/profil' },
  openGraph: {
    title: `Profil | ${SITE_NAME}`,
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