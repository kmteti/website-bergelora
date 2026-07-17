import Image from 'next/image'
import type { ButtonHTMLAttributes } from 'react'

type CarouselButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const CarouselKiri = ({ className = '', ...props }: CarouselButtonProps) => {
  return (
    <button
      className={`bg-linear-to-b z-20 from-secondary-300 to-primary-300 rounded-full aspect-square p-0 border-none outline-none hover:opacity-90 active:scale-95 transition-all cursor-pointer ${className}`}
      {...props}
    >
      <Image
        src="/carousel/carousel-kiri.svg"
        alt="Carousel Kiri"
        width={50}
        height={50}
        className="object-contain"
      />
    </button>
  )
}

const CarouselKanan = ({ className = '', ...props }: CarouselButtonProps) => {
  return (
    <button
      className={`bg-linear-to-b z-20 from-secondary-300 to-primary-300 rounded-full aspect-square p-0 border-none outline-none hover:opacity-90 active:scale-95 transition-all cursor-pointer ${className}`}
      {...props}
    >
      <Image
        src="/carousel/carousel-kanan.svg"
        alt="Carousel Kanan"
        width={50}
        height={50}
        className="object-contain"
      />
    </button>
  )
}

export { CarouselKiri, CarouselKanan }
