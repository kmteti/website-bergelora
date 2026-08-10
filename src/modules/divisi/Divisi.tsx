import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { divisi as staticDivisi } from '@/modules/divisi/data/data'
import { getPayload } from 'payload'
import config from '@payload-config'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { H3 } from '@/components/elements/Typography'
import { TujuanSection } from '@/components/elements/TujuanSection'
import { ProkerCard } from '@/modules/divisi/components/ProkerCard'
import { ExpandableGrid } from '@/components/elements/ExpandableGrid'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const Divisi = async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config })
  const { docs: divisiList } = await payload.find({
    collection: 'divisi',
    limit: 100,
  })

  // Find the division matching the slug
  const currentIndex = divisiList.findIndex((d) => d.slug === slug)
  const data = divisiList[currentIndex]

  if (!data) {
    return <div>Divisi tidak ditemukan</div>
  }

  // Get static data for fallback/gallery
  const staticData = staticDivisi.find((d) => d.slug === slug)
  const gallery = staticData?.gambar || []

  const prevDivisi = divisiList[(currentIndex - 1 + divisiList.length) % divisiList.length]
  const nextDivisi = divisiList[(currentIndex + 1) % divisiList.length]

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Header Full Width */}
      <PageHeader
        title={`Divisi ${data.nama}`}
        description={data.detail}
        imageSrc={typeof data.header === 'string' ? (data.header.startsWith('/') ? data.header : `/${data.header}`) : ''}
        iconSrc={typeof data.logo === 'string' ? (data.logo.startsWith('/') ? data.logo : `/${data.logo}`) : ''}
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

      {/* 2. Container Overlap (FULL WIDTH) - Gradient + blob sesuai Figma */}
      <PageOverlap className="min-h-[500px] bg-gradient-to-b from-[#EAF9FF] to-[#E1F3FA]">
        {/* Blob dekoratif: biru kanan-atas, hijau kiri-bawah */}
        <div className="absolute -top-[12%] left-[69%] w-[42%] aspect-square rounded-full bg-[#64CAEF] opacity-60 blur-[120px] pointer-events-none" />
        <div className="absolute top-[59%] -left-[11%] w-[41%] aspect-square rounded-full bg-[#C7E07C] opacity-60 blur-[120px] pointer-events-none" />

        <div className="relative">
          <DefaultLayout className="pb-16 md:pb-24 pt-0 md:pt-0">
            {/* Section Tujuan & Galeri dengan GSAP Animation */}
            <TujuanSection 
              tujuan={data.tujuan} 
              deskripsi={data.deskripsi_tujuan} 
              gambar={gallery} 
              nama={data.nama} 
            />
          </DefaultLayout>
        </div>
      </PageOverlap>

      {/* Section Program Kerja - Background Basic White */}
      <div className="relative w-full z-20 bg-white rounded-b-[24px] md:rounded-b-[32px] -mb-[24px] md:-mb-[32px] overflow-hidden">
        <DefaultLayout className="pt-20 pb-[196px]">
          <div className="text-center mb-16">
            <H3 className="text-[#1E5D7B]">Program Kerja</H3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Berikut ini adalah berbagai program kerja yang akan dilaksanakan oleh Divisi {data.nama}.
            </p>
          </div>

          <ExpandableGrid
            initialLimit={6}
            moreLabel="Lihat lebih banyak"
          >
            {data.proker?.map((pk, idx) => (
              <ProkerCard
                key={pk.id || idx}
                proker={{
                  nama: pk.namaProker,
                  deskripsi: pk.deskripsi,
                  icon: pk.icon,
                  anggota: pk.anggota?.map((a: any) => a.nama) || [],
                }}
              />
            ))}
          </ExpandableGrid>
        </DefaultLayout>
      </div>
    </main>
  )
}
