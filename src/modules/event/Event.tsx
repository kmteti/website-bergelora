import React from 'react'
import Link from 'next/link'
import { eventData } from '@/modules/event/data/data'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { TujuanSection } from '@/components/elements/TujuanSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BidangLombaCard } from './components/BidangLombaCard'
import { H3 } from '@/components/elements/Typography'

export const Event = ({ slug }: { slug: string }) => {
  // Find the event matching the slug
  const currentIndex = eventData.findIndex((e) => e.slug === slug)
  const data = eventData[currentIndex]

  if (!data) {
    return <div>Event tidak ditemukan</div>
  }

  const prevEvent = eventData[(currentIndex - 1 + eventData.length) % eventData.length]
  const nextEvent = eventData[(currentIndex + 1) % eventData.length]

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Header Full Width */}
      <PageHeader
        title={data.nama}
        description={data.detail}
        imageSrc={data.header.startsWith('/') ? data.header : `/${data.header}`}
        iconSrc={data.logo && (data.logo.startsWith('/') ? data.logo : `/${data.logo}`)}
        leftButton={
          prevEvent ? (
            <Link href={`/event/${prevEvent.slug}`}>
              <Button variant="secondary" size="icon" className="shadow-lg drop-shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
          ) : undefined
        }
        rightButton={
          nextEvent ? (
            <Link href={`/event/${nextEvent.slug}`}>
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
            {/* Section Tujuan & Galeri */}
            <div className="pb-16">
              <TujuanSection
                tujuan={data.tujuan}
                deskripsi={data.deskripsi_tujuan}
                gambar={data.gambar}
                nama={data.nama}
                website={data.website}
                imageFit="cover"
              />
            </div>

            {/* Section Bidang Lomba (Menggunakan card flip identik Proker pada divisi) */}
            <div className="pt-8 pb-20">
              <div className="text-center mb-16">
                <H3 className="text-[#1E5D7B] font-heading font-semibold">Bidang Lomba</H3>
                <p className="text-gray-600 font-sans mt-4 max-w-2xl mx-auto">
                  Berikut ini adalah berbagai bidang kompetisi/lomba yang diselenggarakan di {data.nama}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.bidangLomba.map((item, idx) => (
                  <BidangLombaCard key={idx} item={item} />
                ))}
              </div>
            </div>
          </DefaultLayout>
        </div>
      </PageOverlap>
    </main>
  )
}
