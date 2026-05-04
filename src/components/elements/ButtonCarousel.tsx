import Image from 'next/image'

const CarouselKiri = () => {
  return (
    <div className="bg-linear-to-b z-20  from-[#ABD03B] to-[#18AFE5] rounded-full aspect-square p-0">
      <Image
        src="/carousel/carousel-kiri.svg"
        alt="Carousel Kiri"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  )
}

const CarouselKanan = () => {
  return (
    <div className="bg-linear-to-b z-20 from-[#ABD03B] to-[#18AFE5] rounded-full aspect-square p-0">
      <Image
        src="/carousel/carousel-kanan.svg"
        alt="Carousel Kanan"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  )
}

export { CarouselKiri, CarouselKanan }
