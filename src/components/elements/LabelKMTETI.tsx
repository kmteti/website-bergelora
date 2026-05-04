import { KMTETI } from './KMTETI'
import type { ComponentProps, HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import Image from 'next/image'

type KMTETIProps = ComponentProps<typeof KMTETI>

interface LabelKMTETIProps extends HTMLAttributes<HTMLDivElement> {
  type?: KMTETIProps['type']
  isKMTETI?: boolean
  kmtetiProps?: Omit<KMTETIProps, 'type'>
}

export function LabelKMTETI({
  children,
  className = '',
  type,
  isKMTETI = false,
  kmtetiProps,
  ...props
}: LabelKMTETIProps) {
  return (
    <div
      {...props}
      className={cn(
        'relative z-20 w-fit bg-linear-to-br overflow-clip flex flex-row gap-2 from-primary-300 to-primary-500 text-white rounded-2xl px-16 py-2',
        className,
      )}
    >
      <div
        className="absolute -left-[53px] top-0 h-full w-full max-w-[178px] max-h-[182px]"
        aria-hidden="true"
      >
        <Image
          src="/batik/batik-bglabel-kiri.svg"
          alt="Batik Label Kiri"
          fill
          sizes="178px"
          className="object-contain"
        />
      </div>
      <div
        className="absolute -right-[42px] top-0 h-full w-full max-w-[200px] max-h-[204px]"
        aria-hidden="true"
      >
        <Image
          src="/batik/batik-bglabel-kanan.svg"
          alt="Batik Label Kanan"
          fill
          sizes="178px"
          className="object-contain"
        />
      </div>

      {children}
      {isKMTETI && <KMTETI type={type} {...kmtetiProps} />}
    </div>
  )
}
