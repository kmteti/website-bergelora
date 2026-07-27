import React from 'react'
import { Divisi } from '@/modules/divisi/Divisi'

type PageProps = {
  params: Promise<{ slug: string }>
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params
  
  return <Divisi slug={slug} />
}

export default page