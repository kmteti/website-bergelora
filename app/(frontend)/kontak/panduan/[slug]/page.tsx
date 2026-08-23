import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PanduanDetail } from '@/modules/kontak/PanduanDetail'
import { PANDUAN_TOPICS, getPanduanTopic } from '@/modules/kontak/data/panduan'

type PageProps = { params: Promise<{ slug: string }> }

export const generateStaticParams = () => PANDUAN_TOPICS.map(({ slug }) => ({ slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const topic = getPanduanTopic(slug)

  if (!topic) return { title: 'Panduan tidak ditemukan' }

  return {
    title: `${topic.title} — Panduan`,
    description: topic.description,
    alternates: { canonical: `/kontak/panduan/${slug}` },
  }
}

export default async function PanduanPage({ params }: PageProps) {
  const { slug } = await params
  const topic = getPanduanTopic(slug)

  if (!topic) notFound()

  return <PanduanDetail topic={topic} />
}
