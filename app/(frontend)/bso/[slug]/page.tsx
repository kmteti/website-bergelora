import React from 'react'
import type { Metadata } from 'next'
import { BSO } from '@/modules/bso/BSO'
import { bsoData } from '@/modules/bso/data/data'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const bso = bsoData.find((item) => item.slug === slug)

  if (!bso) {
    return { title: 'Badan Semi Otonom (BSO)' }
  }

  const title = `BSO ${bso.nama}`
  const description = bso.detail ? `${bso.detail} - Badan Semi Otonom KMTETI FT UGM.` : `Profil BSO ${bso.nama} KMTETI FT UGM.`
  const headerImage = bso.header || '/images/home/hero/slide1.webp'

  return {
    title,
    description,
    alternates: {
      canonical: `/bso/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/bso/${slug}`,
      images: [{ url: headerImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [headerImage],
    },
  }
}

export default async function BsoPage({ params }: PageProps) {
  const { slug } = await params
  return <BSO slug={slug} />
}