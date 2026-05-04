import Image from 'next/image'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type KmtetiLogoType = 'kmteti-black' | 'kmteti-white' | 'kmtetiftugm'

type Props = HTMLAttributes<HTMLDivElement> & {
  type?: KmtetiLogoType
  width?: number
  height?: number
  alt?: string
  className?: string
}

export function KMTETI({
  type = 'kmteti-black',
  width = 100,
  height = 100,
  alt = 'KMTETI Logo',
  className,
}: Props) {
  const src = `/logo/kmteti/${type}.webp`

  return (
    <div className={cn('relative', className)}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  )
}
