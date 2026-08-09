import React from 'react'
import Link from 'next/link'
import { bsoData } from '@/modules/bso/data/data'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { TujuanSection } from '@/components/elements/TujuanSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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
              <Button variant="secondary" size="icon" className="shadow-lg drop-shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
          ) : undefined
        }
        rightButton={
          nextBso ? (
            <Link href={`/bso/${nextBso.slug}`}>
              <Button variant="secondary" size="icon" className="shadow-lg drop-shadow-sm">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          ) : undefined
        }
      />

      {/* 2. Container Overlap (FULL WIDTH) - Gradient + blob sesuai Figma */}
      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#EAF9FF] to-[#E1F3FA]">
        {/* Blob dekoratif: biru kanan-atas, hijau kiri-bawah */}
        <div className="absolute -top-[12%] left-[69%] w-[42%] aspect-square rounded-full bg-[#64CAEF] opacity-60 blur-[120px] pointer-events-none" />
        <div className="absolute top-[59%] -left-[11%] w-[41%] aspect-square rounded-full bg-[#C7E07C] opacity-60 blur-[120px] pointer-events-none" />

        <div className="relative">
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
        </div>
      </PageOverlap>
    </main>
  )
}
