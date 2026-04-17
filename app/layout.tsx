import React from 'react'
import './styles.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'web-kmteti | Next.js App',
  description: 'web-kmteti project rebuilt with pure Next.js and Tailwind CSS.',
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
