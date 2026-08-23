import React from 'react'
import type { Metadata } from 'next'
import { Divisi } from '@/modules/divisi/Divisi'
import { getPayload } from 'payload'
import config from '@payload-config'
import { divisi as staticDivisi } from '@/modules/divisi/data/data'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const payload = await getPayload({ config })
    const { docs: divisiList } = await payload.find({
      collection: 'divisi',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    const data = divisiList[0] || staticDivisi.find((d) => d.slug === slug)

    if (!data) {
      return { title: 'Divisi' }
    }

    const title = `Divisi ${data.nama}`
    const description = data.detail || `Profil dan program kerja Divisi ${data.nama} KMTETI FT UGM.`
    const headerImage = typeof data.header === 'string' ? data.header : '/images/home/hero/slide1.webp'

    return {
      title,
      description,
      alternates: {
        canonical: `/divisi/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `/divisi/${slug}`,
        images: [{ url: headerImage, alt: title }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [headerImage],
      },
    }
  } catch {
    const staticData = staticDivisi.find((d) => d.slug === slug)
    const title = staticData ? `Divisi ${staticData.nama}` : 'Divisi'
    return {
      title,
      alternates: { canonical: `/divisi/${slug}` },
    }
  }
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params
  
  return <Divisi slug={slug} />
}

export default page