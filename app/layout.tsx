import React from 'react'
import { montserrat, sourceSerif4 } from '@/lib/fonts'
import Footer from '@/components/layout/Footer'
import './styles.css'
import { Navbar } from '@/components/layout/navbar/Navbar'
import LenisProvider from '@/providers/LenisProvider'

import type { Metadata, Viewport } from 'next'
import { cn } from '@/lib/utils'

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
    <html lang="en" className={cn(montserrat.variable, sourceSerif4.variable, 'font-sans')}>
      <body className="font-sans antialiased text-neutral-1000 flex flex-col min-h-screen">
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
