import React from 'react'
import Image from 'next/image'
import { H5 } from '@/components/elements/Typography'
import Folder from './Folder'

interface EventFolderCardProps {
  /** Nama/label yang ditampilkan di bagian bawah folder */
  name: string
  /** Path gambar utama (foto) */
  photo: string
  /** Tambahan className untuk wrapper Folder */
  className?: string
}

export default function EventFolderCard({ name, photo, className = '' }: EventFolderCardProps) {
  return (
    <Folder className={className}>
      {/* Images Layer */}
      <div className="absolute top-[30%] group-hover:top-[20%] transition-all duration-500 ease-in-out left-0 right-0 flex justify-center pointer-events-none z-0">
        <div className="relative flex items-center justify-center w-full px-4 md:px-6">
          {/* Photo with White Border and Shadow */}
          <div className="relative w-full aspect-[2/1] rounded-[24px] border-[3px] border-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] overflow-hidden z-10 bg-gray-100">
            <Image src={photo} alt={name} fill className="object-cover" />
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
