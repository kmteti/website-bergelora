'use client'

import { H1, B2 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

import { useState, useCallback, useEffect } from 'react'

const sliderHero = [
  {
    src: '/images/home/hero/slide1.webp',
    alt: 'Slide 1',
    title: 'Asah Potensi, Bangun Kolaborasi, dan Perluas Kontribusi Bersama Kami',
    description:
      'Wadah kolaborasi, pengembangan potensi, dan pengabdian mahasiswa Teknik Elektro, Teknologi Informasi, dan Teknik Biomedis dalam lingkungan akademik dan profesional',
    button: 'Profil KMTETI',
  },
  {
    src: '/images/home/hero/slide2.webp',
    alt: 'Slide 2',
    title: 'Inovasi, Kreativitas, dan Kontribusi Nyata di Setiap Langkah',
    description:
      'Wadah kolaborasi, pengembangan potensi, dan pengabdian mahasiswa Teknik Elektro, Teknologi Informasi, dan Teknik Biomedis dalam lingkungan akademik dan profesional',
    button: 'Layanan KMTETI',
  },
  {
    src: '/images/home/hero/slide3.webp',
    alt: 'Slide 3',
    title: 'Inovasi, Kreativitas, dan Kontribusi Nyata di Setiap Langkah',
    description:
      'Wadah kolaborasi, pengembangan potensi, dan pengabdian mahasiswa Teknik Elektro, Teknologi Informasi, dan Teknik Biomedis dalam lingkungan akademik dan profesional',
    button: 'Hubungi KMTETI',
  },
]

const AUTOPLAY_DELAY_MS = 10000

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [isThisSlide, setIsThisSlide] = useState(0)

  const handleThisSlide = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setIsThisSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Autoplay interval
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, AUTOPLAY_DELAY_MS)
    return () => clearInterval(interval)
  }, [emblaApi, isThisSlide])

  // Keyboard navigation
  useEffect(() => {
    if (!emblaApi) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        emblaApi.scrollPrev()
      } else if (e.key === 'ArrowRight') {
        emblaApi.scrollNext()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [emblaApi])

  return (
    <div
      className="sticky top-0 h-screen min-h-screen w-full overflow-hidden z-0"
      data-navbar-tone="dark"
    >
      <style>{`
        @keyframes slide-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Progress Bar di paling atas */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-black/20 z-50">
        <div
          key={isThisSlide}
          className="h-full bg-white/80"
          style={{ animation: `slide-progress ${AUTOPLAY_DELAY_MS}ms linear forwards` }}
        />
      </div>

      {/* Container yang akan bergeser (scrollable) ke kanan/kiri */}
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {sliderHero.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center absolute"
              />

              {/* Overlay gelap agar teks lebih terbaca (105vh) */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

              {/* Efek Blur Glassmorphism di Bawah (105vh) */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none backdrop-blur-[6px] bg-gradient-to-t from-black/60 via-black/10 to-transparent [mask-image:linear-gradient(to_top,black_20%,transparent_100%)]"></div>

              {/* Wrapper khusus Konten Teks */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Konten Hero */}
                <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-8 md:px-16 lg:px-24 pb-28 sm:pb-12 md:pb-16 lg:pb-24 max-w-5xl pointer-events-none">
                  <H1 className="text-white w-full drop-shadow-md">{slide.title}</H1>
                  <B2 className="text-white mt-4 drop-shadow-md">{slide.description}</B2>

                  <div className="mt-8 pointer-events-auto">
                    <Button variant="secondary" size="default">
                      <span>{slide.button}</span>
                      <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wrapper untuk Navigasi */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        {/* Navigasi Indikator di bagian bawah Kanan */}
        <div className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-24 right-6 sm:right-8 md:right-16 lg:right-24 flex gap-3 items-center pointer-events-auto">
          <nav className="flex items-center gap-[2px] bg-white/20 backdrop-blur-md p-1 rounded-full">
            {sliderHero.map((slide, index) => {
              if (isThisSlide === index) {
                return (
                  <button
                    key={index}
                    onClick={() => handleThisSlide(index)}
                    className="h-6 flex items-center justify-center px-0.5 cursor-pointer"
                    aria-label={`Go to ${slide.alt}`}
                  >
                    <span className="w-12 h-5 rounded-full bg-white shadow-sm transition-all" />
                  </button>
                )
              } else {
                return (
                  <button
                    key={index}
                    onClick={() => handleThisSlide(index)}
                    className="w-6 h-6 flex items-center justify-center cursor-pointer"
                    aria-label={`Go to ${slide.alt}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-white/50 hover:bg-white/75 transition-all" />
                  </button>
                )
              }
            })}
          </nav>

          {/* Tombol kotak dikanan */}
          <Button
            onClick={() => {
              if (emblaApi) emblaApi.scrollNext()
            }}
            variant="black"
            size="icon"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
