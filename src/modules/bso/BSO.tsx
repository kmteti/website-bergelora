import React from 'react'
import Link from 'next/link'
import { bsoData } from '@/modules/bso/data/data'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { TujuanSection } from '@/modules/divisi/components/TujuanSection'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const BSO = ({ slug }: { slug: string }) => {
  // Find the BSO matching the slug
  const currentIndex = bsoData.findIndex((b) => b.slug === slug)
  const data = bsoData[currentIndex]

  if (!data) {
    return <div>BSO tidak ditemukan</div>
  }

  const prevBso = bsoData[(currentIndex - 1 + bsoData.length) % bsoData.length]
  const nextBso = bsoData[(currentIndex + 1) % bsoData.length]

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Header Full Width */}
      <PageHeader
        title={`BSO ${data.nama}`}
        description={data.detail}
        imageSrc={data.header.startsWith('/') ? data.header : `/${data.header}`}
        iconSrc={data.logo.startsWith('/') ? data.logo : `/${data.logo}`}
        leftButton={
          prevBso ? (
            <Link href={`/bso/${prevBso.slug}`}>
              <Button variant="secondary" className="gap-2 shadow-lg drop-shadow-sm text-sm">
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">BSO {prevBso.nama}</span>
              </Button>
            </Link>
          ) : undefined
        }
        rightButton={
          nextBso ? (
            <Link href={`/bso/${nextBso.slug}`}>
              <Button variant="secondary" className="gap-2 shadow-lg drop-shadow-sm text-sm">
                <span className="hidden sm:inline">BSO {nextBso.nama}</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : undefined
        }
      />

      {/* 2. Container Overlap (FULL WIDTH) - Background Basic White */}
      <PageOverlap className="bg-white min-h-[500px]">
        <DefaultLayout>
          
          {/* Section Tujuan & Galeri dengan GSAP Animation */}
          <div className="pb-20">
            <TujuanSection 
              tujuan={data.tujuan} 
              deskripsi={data.deskripsi_tujuan} 
              gambar={data.gambar} 
              nama={data.nama} 
            />
          </div>

        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
