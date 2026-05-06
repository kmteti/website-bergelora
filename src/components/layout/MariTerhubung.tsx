import React from 'react'
import { Batik } from '../elements/BatikBackground'
import DefaultLayout from './DefaultLayout'
import { Button } from '../ui/button'
import { KMTETI } from '../elements/KMTETI'
import { Phone } from 'lucide-react'

const MariTerhubung = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <Batik className="batik-5" isWhite={true} />
      <DefaultLayout>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Left: Photo Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] aspect-[21/9] md:aspect-[16/9] bg-neutral-200 rounded-2xl border border-neutral-300 shadow-sm flex items-center justify-center overflow-hidden">
              <span className="text-neutral-400 font-medium text-sm">Foto (Placeholder)</span>
            </div>
          </div>

          {/* Right: Content & Call to Action */}
          <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start gap-3 text-left">
            <p className="font-sans text-b1 md:text-b3">Membangun Koneksi dan Kolaborasi</p>
            <h2 className="text-h4 font-sans leading-tight flex flex-row items-center gap-x-2 sm:flex-wrap">
              Mari Terhubung dengan
              <KMTETI
                type="kmteti-logotype-black"
                width={90}
                height={25}
                className="w-24 md:w-24 lg:w-24 h-auto shrink-0 mt-1 md:mt-2"
              />
            </h2>

            <p className="text-neutral-600 text-sm md:text-base max-w-md mt-1 mb-2">
              Kami terbuka untuk pertanyaan, kolaborasi, dan berbagai bentuk kerja sama.
            </p>

            <Button variant="blue" size="lg" className="px-6">
              Hubungi Kami
              <Phone color="white" className="ml-2" />
            </Button>
          </div>
        </div>
      </DefaultLayout>
    </section>
  )
}

export default MariTerhubung
