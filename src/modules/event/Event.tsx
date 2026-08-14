import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { eventData as staticEventData } from '@/modules/event/data/data'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { TujuanSection } from '@/components/elements/TujuanSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BidangLombaCard } from './components/BidangLombaCard'
import { ExpandableGrid } from '@/components/elements/ExpandableGrid'
import { H3 } from '@/components/elements/Typography'

export const Event = async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config })
  const { docs: eventsList } = await payload.find({
    collection: 'events',
    limit: 100,
  })

  // Find the event matching the slug from Payload
  const currentIndex = eventsList.findIndex((e) => e.slug === slug)
  const doc = eventsList[currentIndex]

  // Fallback to static data if not found in payload
  const staticData = staticEventData.find((e) => e.slug === slug)

  if (!doc && !staticData) {
    return <div>Event tidak ditemukan</div>
  }

  const nama = doc?.nama || staticData?.nama || ''
  const detail = doc?.detail || staticData?.detail || ''
  const header = doc?.header || staticData?.header || '/images/divisi/adkesma.webp'
  const logo = doc?.logo || staticData?.logo
  const tujuan = doc?.tujuan || staticData?.tujuan || ''
  const deskripsi_tujuan = doc?.deskripsi_tujuan || staticData?.deskripsi_tujuan || ''
  const website = doc?.website || staticData?.website

  // Format gambar
  const gambar: string[] = doc?.gambar
    ? doc.gambar.map((g: any) => (typeof g === 'string' ? g : g.url))
    : staticData?.gambar || []

  // Format bidangLomba
  const bidangLomba = doc?.bidangLomba
    ? doc.bidangLomba.map((b: any) => ({
        nama: b.nama,
        deskripsi: b.deskripsi,
        icon: b.icon || undefined,
        subCategories: b.subCategories
          ? b.subCategories.map((s: any) => (typeof s === 'string' ? s : s.nama))
          : undefined,
      }))
    : staticData?.bidangLomba || []

  const prevEvent = eventsList.length > 0
    ? eventsList[(currentIndex - 1 + eventsList.length) % eventsList.length]
    : staticEventData[(staticEventData.findIndex((e) => e.slug === slug) - 1 + staticEventData.length) % staticEventData.length]

  const nextEvent = eventsList.length > 0
    ? eventsList[(currentIndex + 1) % eventsList.length]
    : staticEventData[(staticEventData.findIndex((e) => e.slug === slug) + 1) % staticEventData.length]

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Header Full Width */}
      <PageHeader
        title={nama}
        description={detail}
        imageSrc={header.startsWith('/') ? header : `/${header}`}
        iconSrc={logo ? (logo.startsWith('/') ? logo : `/${logo}`) : undefined}
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
          <DefaultLayout className="pb-16 md:pb-24 pt-0 md:pt-0">
            {/* Section Tujuan & Galeri */}
            <TujuanSection
              tujuan={tujuan}
              deskripsi={deskripsi_tujuan}
              gambar={gambar}
              nama={nama}
              website={website}
              imageFit="cover"
            />
          </DefaultLayout>
        </div>
      </PageOverlap>

      {/* Section Bidang Lomba - Background Basic White */}
      <div className="relative w-full z-20 bg-white rounded-b-[24px] md:rounded-b-[32px] -mb-[24px] md:-mb-[32px] overflow-hidden">
        <DefaultLayout className="pt-20 pb-[196px]">
          <div className="text-center mb-16">
            <H3 className="text-[#1E5D7B] font-heading font-semibold">Bidang Lomba</H3>
            <p className="text-gray-600 font-sans mt-4 max-w-2xl mx-auto">
              Berikut ini adalah berbagai bidang kompetisi/lomba yang diselenggarakan di {nama}.
            </p>
          </div>

          <ExpandableGrid
            initialLimit={6}
            gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            moreLabel="Lihat lebih banyak"
          >
            {bidangLomba.map((item, idx) => (
              <BidangLombaCard key={idx} item={item} />
            ))}
          </ExpandableGrid>
        </DefaultLayout>
      </div>
    </main>
  )
}
