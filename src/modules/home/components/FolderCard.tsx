import React from 'react'
import Image from 'next/image'
import { H5 } from '@/components/elements/Typography'
import Folder from './Folder'

interface FolderCardProps {
  /** Nama/label yang ditampilkan di bagian bawah folder */
  name: string
  /** Path gambar utama (foto) */
  photo: string
  /** Path icon/logo */
  logo: string
  /** Tambahan className untuk wrapper Folder */
  className?: string
}

export default function FolderCard({ name, photo, logo, className = '' }: FolderCardProps) {
  return (
    <Folder className={className}>
      {/* Images Layer */}
      <div className="absolute top-[12%] left-0 right-0 flex justify-center pointer-events-none z-0">
        <div className="relative flex items-center justify-center w-[220px] h-[180px]">
          {/* Photo with White Border and Shadow (Tilted -3deg) */}
          <div className="absolute top-10 -left-5 w-[182px] h-[152px] rounded-[28px] border-[3px] border-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] overflow-hidden -rotate-[3deg] z-10 bg-gray-100 transition-transform duration-500 group-hover:-translate-y-[30px] group-hover:-translate-x-[5px]">
            <Image src={photo} alt={name} fill className="object-cover" />
          </div>

          {/* Icon (Tilted 3deg) */}
          <div className="absolute rounded-3xl -right-8 top-15 w-[100px] h-[100px] rotate-[3deg] z-20 transition-transform duration-500 group-hover:-translate-y-[30px] group-hover:translate-x-[5px]">
            <div className="relative w-full h-full drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)]">
              <Image src={logo} alt={`${name} Logo`} fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Frosted Glass Label (Bottom Flap) */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] rounded-b-[24px] md:rounded-b-[28px] overflow-hidden z-10">
        {/* Blur Backdrop */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[40px] border-t border-white/60 rounded-b-[24px] md:rounded-b-[28px]"></div>

        {/* Content inside Frosted Glass */}
        <div className="relative z-10 p-6 pt-8 flex items-start h-full pointer-events-none">
          <H5 className="text-black/50">{name}</H5>
        </div>
      </div>
    </Folder>
  )
}
