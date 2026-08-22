import React from 'react'
import { montserrat, sourceSerif4 } from '@/lib/fonts'
import Footer from '@/components/layout/Footer'
import './styles.css'
import { Navbar } from '@/components/layout/navbar/Navbar'
import LenisProvider from '@/providers/LenisProvider'

import type { Metadata, Viewport } from 'next'
import { cn } from '@/lib/utils'
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // No canonical here: child segments inherit it verbatim, which would point
  // every page at the homepage. Each page declares its own.
  title: {
    default: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
    // Child segments supply only their own name; this appends the brand once.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Situs web resmi Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada (KMTETI FT UGM). Temukan profil, berita terbaru, layanan, dan informasi akademik.',
  keywords: ['KMTETI', 'DTETI', 'FT UGM', 'Teknik Elektro UGM', 'Teknologi Informasi UGM', 'UGM'],
  authors: [{ name: 'KMTETI FT UGM' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    title: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
    description: 'Situs web resmi Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada.',
    siteName: 'KMTETI FT UGM',
    images: [{
      url: '/images/home/hero/hero-bg.webp',
      width: 1200,
      height: 630,
      alt: 'KMTETI FT UGM',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_LEGAL_NAME}`,
    description: 'Situs web resmi KMTETI FT UGM.',
    images: ['/images/home/hero/hero-bg.webp'],
  },
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
    <html lang="id" className={cn(montserrat.variable, sourceSerif4.variable, 'font-sans')}>
      <body className="font-sans antialiased text-neutral-1000 flex flex-col min-h-screen overflow-x-hidden">
        <LenisProvider>
          <main className="flex-1 flex flex-col">
            <Navbar />
            {children}
            <Footer />
          </main>
        </LenisProvider>
      </body>
    </html>
  )
}
