import Image from 'next/image'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type KmtetiLogoType = 
  | 'kmteti-logotype-short-black'
  | 'kmteti-logotype-short-white'
  | 'kmteti-logo-black'
  | 'kmteti-logo-white'
  | 'kmteti-logotype-black'
  | 'kmteti-logotype-white'
  | 'kmteti-mark'
  | 'kmteti-mark-white'

type Props = HTMLAttributes<HTMLDivElement> & {
  type?: KmtetiLogoType
  width?: number
  height?: number
  alt?: string
  className?: string
}

export function KMTETI({
  type = 'kmteti-logotype-short-black',
  width = 100,
  height = 100,
  alt = 'KMTETI Logo',
  className,
}: Props) {
  const src = `/logo/kmteti/${type}.svg`

  return (
    <div className={cn('relative', className)}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  )
}
