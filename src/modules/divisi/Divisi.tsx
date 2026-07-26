import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { divisi } from '@/modules/divisi/data/data'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { H3 } from '@/components/elements/Typography'
import { TujuanSection } from '@/components/elements/TujuanSection'
import { ProkerCard } from '@/modules/divisi/components/ProkerCard'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const Divisi = ({ slug }: { slug: string }) => {
  // Find the division matching the slug
  const currentIndex = divisi.findIndex((d) => d.slug === slug)
  const data = divisi[currentIndex]

  if (!data) {
    return <div>Divisi tidak ditemukan</div>
  }

  const prevDivisi = divisi[(currentIndex - 1 + divisi.length) % divisi.length]
  const nextDivisi = divisi[(currentIndex + 1) % divisi.length]

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Header Full Width */}
      <PageHeader
        title={`Divisi ${data.nama}`}
        description={data.detail}
        imageSrc={data.header.startsWith('/') ? data.header : `/${data.header}`}
        iconSrc={data.logo.startsWith('/') ? data.logo : `/${data.logo}`}
        leftButton={
          prevDivisi ? (
            <Link href={`/divisi/${prevDivisi.slug}`}>
              <Button variant="secondary" size="icon" className="shadow-lg drop-shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
          ) : undefined
        }
        rightButton={
          nextDivisi ? (
            <Link href={`/divisi/${nextDivisi.slug}`}>
              <Button variant="secondary" size="icon" className="shadow-lg drop-shadow-sm">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          ) : undefined
        }
      />

      {/* 2. Container Overlap (FULL WIDTH) - Background Basic White */}
      <PageOverlap className="bg-white min-h-[500px]">
        <DefaultLayout>
          
          {/* Section Tujuan & Galeri dengan GSAP Animation */}
          <TujuanSection 
            tujuan={data.tujuan} 
            deskripsi={data.deskripsi_tujuan} 
            gambar={data.gambar} 
            nama={data.nama} 
          />

          {/* Section Program Kerja */}
          <div className="pt-20 pb-12">
            <div className="text-center mb-16">
              <H3 className="text-[#1E5D7B]">Program Kerja</H3>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Berikut ini adalah berbagai program kerja yang akan dilaksanakan oleh Divisi {data.nama}.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.proker.map((pk, idx) => (
                <ProkerCard key={idx} proker={pk as any} />
              ))}
            </div>
          </div>



        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
