import { Batik } from '@/components/elements/BatikBackground'
import { LabelKMTETI } from '@/components/elements/LabelKMTETI'
import { CarouselKanan, CarouselKiri } from '@/components/elements/ButtonCarousel'

export default function Hero() {
  return (
    <>
      <Batik className="batik-5" isWhite={true} />
      <div>
        <h1>Hai</h1>
        <p>Selamat datang di situs resmi KMTETI!</p>
        <LabelKMTETI type="kmtetionly-white" isKMTETI={true}>
          Tentang
        </LabelKMTETI>
      </div>
      <div className="flex justify-center items-center mt-8">
        <CarouselKiri />
        <CarouselKanan />
      </div>
    </>
  )
}
