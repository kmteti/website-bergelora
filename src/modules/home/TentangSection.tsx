'use client'

import { Batik } from '@/components/elements/BatikBackground'
import { LabelKMTETI } from '@/components/elements/LabelKMTETI'
import Image from 'next/image'

const stats = [
  { value: '8', label: 'Divisi' },
  { value: '9', label: 'Program Kerja' },
  { value: '3', label: 'BSO' },
  { value: '3', label: 'Annual Events' },
]

export default function TentangSection() {
  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-100 px-6 py-20 sm:px-10 lg:px-16"
      data-aos="fade-up"
    >
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

      <div className="relative z-20 mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 md:px-10 lg:px-12 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 w-full">
          <LabelKMTETI
            type="kmteti-logotype-short-white"
            isKMTETI={true}
            className="mb-6 justify-center shadow-lg shadow-primary-500/20"
            kmtetiProps={{ width: 128, height: 32, className: 'h-8 w-auto' }}
          >
            <h2 className="text-xl sm:text-2xl font-bold font-sans leading-tight flex flex-row items-center gap-x-2">
              Tentang
            </h2>
          </LabelKMTETI>

          <p className="max-w-4xl text-center text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-regular">
            Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi atau KMTETI merupakan himpunan
            mahasiswa yang menaungi seluruh mahasiswa Teknik Elektro dan Teknologi Informasi. Kami
            berkomitmen menjadi ruang tumbuh bagi mahasiswa melalui program kerja yang berdampak,
            kolaboratif, dan berkelanjutan.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid w-full gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          {/* Left: Image */}
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:h-full w-full overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/landing/about/about.webp"
              alt="Mahasiswa DTETI berkolaborasi"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center p-4 sm:p-6 aspect-square rounded-2xl bg-white border border-neutral-100 shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md select-none"
              >
                <h3 className="text-5xl sm:text-6xl font-bold mb-1 text-primary-300 tracking-tight leading-none">
                  {item.value}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-neutral-500 text-center leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
