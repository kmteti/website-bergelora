import React from 'react'
import { BSO } from '@/modules/bso/BSO'

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function BsoPage({ params }: PageProps) {
  const { slug } = await params
  return <BSO slug={slug} />
}