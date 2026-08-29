import React from 'react'
import { montserrat, sourceSerif4 } from '@/lib/fonts'
import Footer from '@/components/layout/Footer'
import './styles.css'
import { Navbar } from '@/components/layout/navbar/Navbar'
import LenisProvider from '@/providers/LenisProvider'

import type { Metadata, Viewport } from 'next'
import { cn } from '@/lib/utils'

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://kmteti.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'KMTETI FT UGM | Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
    template: '%s | KMTETI FT UGM',
  },
  description:
    'Situs web resmi Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada (KMTETI FT UGM). Temukan profil, berita terbaru, layanan, dan informasi akademik.',
  keywords: ['KMTETI', 'DTETI', 'FT UGM', 'Teknik Elektro UGM', 'Teknologi Informasi UGM', 'UGM', 'Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi'],
  authors: [{ name: 'KMTETI FT UGM' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    title: 'Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
    description: 'Situs web resmi Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada.',
    siteName: 'KMTETI FT UGM',
    images: [{
      url: '/images/home/hero/slide1.webp',
      width: 1200,
      height: 630,
      alt: 'KMTETI FT UGM - Departemen Teknik Elektro dan Teknologi Informasi',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
    description: 'Situs web resmi KMTETI FT UGM.',
    images: ['/images/home/hero/slide1.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  verification: {
    google: 'E9k5qgtsGAqHCBWKxv2H5zDZ1v_IVsCG6QnO1Cpi0xk',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KMTETI FT UGM',
    alternateName: [
      'Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
      'KMTETI',
    ],
    url: 'https://kmteti.org',
    logo: 'https://kmteti.org/logo/kmteti/horizontal-color.png',
    sameAs: [
      'https://www.instagram.com/kmteti/',
      'https://www.youtube.com/@kmteti',
      'https://x.com/KMTETI',
      'https://www.linkedin.com/company/kmteti-ft-ugm',
      'https://www.tiktok.com/@kmteti',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Grafika No. 2, Kampus UGM',
      addressLocality: 'Yogyakarta',
      addressRegion: 'DIY',
      postalCode: '55281',
      addressCountry: 'ID',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KMTETI FT UGM',
    alternateName: 'Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi',
    url: 'https://kmteti.org',
  }

  const navigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Profil',
        description: 'Profil dan Visi Misi KMTETI FT UGM',
        url: 'https://kmteti.org/tentang/profil',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Berita & Artikel',
        description: 'Kumpulan berita dan artikel terkini seputar KMTETI FT UGM',
        url: 'https://kmteti.org/tentang/berita',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Layanan',
        description: 'Layanan publik dan fasilitas KMTETI FT UGM',
        url: 'https://kmteti.org/layanan',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Agenda Bulanan',
        description: 'Kalender dan agenda kegiatan KMTETI FT UGM',
        url: 'https://kmteti.org/kalender',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Kontak',
        description: 'Hubungi pengurus KMTETI FT UGM dan narahubung resmi',
        url: 'https://kmteti.org/kontak',
      },
    ],
  }

  return (
    <html lang="id" className={cn(montserrat.variable, sourceSerif4.variable, 'font-sans')}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
        />
      </head>
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
