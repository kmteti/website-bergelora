import React from 'react'
import { Instrument_Sans, Geist } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './styles.css'
import { Navbar } from '@/components/layout/navbar/Navbar'

import type { Metadata, Viewport } from 'next'
import { cn } from '@/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
})

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
    <html
      lang="en"
      className={cn(instrumentSans.variable, GeistSans.variable, 'font-sans', geist.variable)}
    >
      <body className="font-sans antialiased text-neutral-1000">
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
