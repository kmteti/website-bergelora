import React from 'react'
import { Batik } from './BatikBackground'
import DefaultLayout from '../layout/DefaultLayout'
import { Button } from '../ui/button'
import { KMTETI } from './KMTETI'
import { Phone } from 'lucide-react'
import { Image } from './Image'

const MariTerhubung = () => {
  return (
    <section className="relative w-full overflow-hidden py-4" data-aos="fade-up">
      <Batik className="batik-5" isWhite={true} />
      <DefaultLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Photo Placeholder */}
          <div className="w-full flex">
            <Image src="/images/landing/hero/hero.webp" alt="Mari Terhubung" />
          </div>

          {/* Right: Content & Call to Action */}
          <div className="w-full flex flex-col items-center sm:items-start gap-3 text-left">
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

            <Button variant="primary" size="lg" className="px-6">
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
