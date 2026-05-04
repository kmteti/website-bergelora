import React from 'react'
import './styles.css'

import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'KMTETI | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi FT UGM',
  description:
    'Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
