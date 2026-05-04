import React from 'react'
import { Batik } from '../elements/BatikBackground'
import DefaultLayout from './DefaultLayout'
import { Button } from '../ui/button'
import { KMTETI } from '../elements/KMTETI'

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
                type="kmtetiftugm"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </DefaultLayout>
    </section>
  )
}

export default MariTerhubung
