'use client'

import { Batik } from '@/components/elements/BatikBackground'
import { LabelKMTETI } from '@/components/elements/LabelKMTETI'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const stats = [
  { value: '8', label: 'Divisi' },
  { value: '3', label: 'BSO' },
  { value: '3', label: 'Annual Events' },
]

export default function TentangSection() {
  const router = useRouter()

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-100 px-6 py-20 sm:px-10 lg:px-16">
      <Batik className="batik-5" isWhite={true} />

      <Image
        src="/batik/batik-element.webp"
        alt=""
        width={210}
        height={210}
        className="pointer-events-none absolute -left-16 bottom-0 z-10 w-36 rotate-[18deg] drop-shadow-xl sm:w-48 lg:-left-20 lg:w-56"
        aria-hidden="true"
      />
      <Image
        src="/batik/batik-element.webp"
        alt=""
        width={210}
        height={210}
        className="pointer-events-none absolute -right-14 top-24 z-10 w-32 -rotate-[108deg] drop-shadow-xl sm:w-44 lg:-right-16 lg:w-52"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <LabelKMTETI
              type="kmtetionly-white"
              isKMTETI={true}
              className="mb-4 min-h-11 w-full max-w-md justify-center rounded-lg px-12 py-2 text-center text-white shadow-lg"
              kmtetiProps={{ width: 128, height: 32, className: 'h-8 w-auto' }}
            >
              <h2 className="text-h4 font-sans leading-tight flex flex-row items-center gap-x-2 sm:flex-wrap">
                Tentang
              </h2>
            </LabelKMTETI>

            <p className="max-w-xl text-justify text-b4 text-neutral-1000 sm:text-b3">
              Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi atau KMTETI merupakan
              himpunan mahasiswa yang menaungi seluruh mahasiswa Teknik Elektro dan Teknologi
              Informasi. Kami berkomitmen menjadi ruang tumbuh bagi mahasiswa melalui program kerja
              yang berdampak, kolaboratif, dan berkelanjutan.
            </p>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-center">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="font-heading text-5xl font-bold leading-none text-neutral-1000 sm:text-6xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-b5 text-neutral-900 sm:text-b4">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[1.25/1] w-full max-w-sm overflow-hidden rounded-lg shadow-xl shadow-neutral-900/35">
            <div className="relative h-full overflow-hidden rounded-lg">
              <Image
                src="/images/njepat_1x.webp"
                alt="Mahasiswa DTETI berkolaborasi"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover"
              />
            </div>

            <Button
              variant={'blue'}
              className="absolute bottom-4 right-4"
              onClick={() => router.push('/tentang')}
            >
              Lihat Detail
              <ExternalLink size={16} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
