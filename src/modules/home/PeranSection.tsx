'use client'

import { useState } from 'react'
import { LabelKMTETI } from '@/components/archive/LabelKMTETI'
import { Batik } from '@/components/archive/BatikBackground'
import Image from 'next/image'

const divisiData = [
  { key: 'Humas', href: '/divisi/humas', icon: '/logo/divisi/humas.svg' },
  { key: 'BPO', href: '/divisi/bpo', icon: '/logo/divisi/bpo.svg' },
  { key: 'Infokom', href: '/divisi/infokom', icon: '/logo/divisi/infokom.svg' },
  { key: 'Mikat', href: '/divisi/mikat', icon: '/logo/divisi/mikat.svg' },
  { key: 'Workshop', href: '/divisi/workshop', icon: '/logo/divisi/ws.svg' },
  { key: 'Sosmas', href: '/divisi/sosmas', icon: '/logo/divisi/sosmas.svg' },
  { key: 'Electropreneur', href: '/divisi/electropreneur', icon: '/logo/divisi/ep.svg' },
  { key: 'Adkesma', href: '/divisi/adkesma', icon: '/logo/divisi/adkesma.svg' },
]

const bsoData = [
  { key: 'Beacon', href: '/bso/beacon', icon: '/logo/bso/beacon.svg' },
  { key: 'Night Login', href: '/bso/night-login', icon: '/logo/bso/night-login.svg' },
  { key: 'Magatrika', href: '/bso/magatrika', icon: '/logo/bso/magatrika.svg' },
  { key: 'SKI Al-Hannaan', href: '/bso/ski-al-hannaan', icon: '/logo/bso/ski-al-hannaan.svg' },
  { key: 'SKK DTETI', href: '/bso/skk-dteti', icon: '/logo/bso/skk-dteti.svg' },
]

export default function PeranSection() {
  const [activeTab, setActiveTab] = useState<'divisi' | 'bso'>('divisi')

  const currentData = activeTab === 'divisi' ? divisiData : bsoData

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-100 py-20"
      data-aos="fade-up"
    >
      <Batik className="batik-5" isWhite={true} />
      <div className="relative w-full mx-auto bg-gradient-to-br from-primary-200 to-primary-300 py-16 px-6 sm:px-10 lg:px-16 rounded-2xl overflow-hidden flex flex-col items-center">
        <div className="relative z-20 w-full flex flex-col items-center">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-6 w-full">
            <LabelKMTETI
              type="kmteti-logotype-short-white"
              isKMTETI={true}
              className="mb-6 justify-center shadow-lg shadow-primary-500/20"
              kmtetiProps={{ width: 128, height: 32, className: 'h-8 w-auto' }}
            >
              <h2 className="text-xl sm:text-2xl font-bold font-sans leading-tight flex flex-row items-center gap-x-2">
                Peran
              </h2>
            </LabelKMTETI>

            <p className="max-w-4xl text-center text-sm sm:text-base lg:text-lg text-white leading-relaxed font-medium">
              Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi atau KMTETI merupakan
              himpunan mahasiswa yang menaungi seluruh mahasiswa Teknik Elektro dan Teknologi
              Informasi
            </p>
          </div>

          {/* Custom Segmented Control / Toggle */}
          <div className="flex bg-gradient-to-r from-primary-300 to-primary-500 p-1 rounded-lg mb-10">
            <button
              onClick={() => setActiveTab('divisi')}
              className={`px-5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'divisi'
                  ? 'bg-white text-primary-300'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Divisi & Biro
            </button>
            <button
              onClick={() => setActiveTab('bso')}
              className={`px-5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'bso' ? 'bg-white text-primary-500' : 'text-white/80 hover:text-white'
              }`}
            >
              Badan Semi Otonom
            </button>
          </div>

          {/* Content Grid Container */}
          <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 bg-white p-6 rounded-2xl border border-neutral-200">
            {currentData.map((item) => (
              <div
                key={item.key}
                className="flex flex-col justify-between p-6 aspect-[1.5] rounded-lg bg-white border border-neutral-200 transition-all hover:translate-y-[-2px] group cursor-pointer"
              >
                {/* Card content / Icon */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-12 h-12 relative group-hover:scale-105 transition-transform">
                    {item.icon ? (
                      <Image src={item.icon} alt={item.key} fill className="object-contain" />
                    ) : (
                      <div className="w-full h-full bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400 font-bold text-xl">
                        +
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider and Label */}
                <div className="border-t border-neutral-200 pt-3 mt-4 text-right">
                  <p className="text-sm font-bold text-neutral-800 group-hover:text-[#005f73] transition-colors">
                    {item.key}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
