'use client'

import React, { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { H5, B5 } from '@/components/elements/Typography'

interface BidangLombaProps {
  nama: string
  deskripsi: string
  icon?: string
  subCategories?: string[]
}

export function BidangLombaCard({ item }: { item: BidangLombaProps }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // fallback to Trophy if icon not found
  const LucideIcon = item.icon
    ? (LucideIcons[item.icon as keyof typeof LucideIcons] as React.ElementType)
    : LucideIcons.Trophy

  // We only enable flip if there are subCategories to show
  const canFlip = !!item.subCategories && item.subCategories.length > 0

  return (
    <div
      className={`group w-full h-[360px] ${canFlip ? 'cursor-pointer [perspective:1000px]' : ''}`}
      onClick={() => canFlip && setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100/50 flex flex-col items-center text-center transition-all group-hover:-translate-y-2 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          {LucideIcon ? (
            <LucideIcon className="w-12 h-12 mb-4 text-[#abd03b]" />
          ) : (
            <div className="text-5xl mb-6">🏆</div>
          )}
          <H5 className="text-gray-800 mb-4">{item.nama}</H5>
          <B5 className="text-gray-500 mb-4 overflow-hidden">
            {item.deskripsi}
          </B5>
          {canFlip && (
            <B5 className="mt-auto pt-4 border-t border-gray-100/80 w-full text-gray-400 font-medium tracking-wide flex items-center justify-center gap-1.5">
              Tekan untuk membalik <LucideIcons.RotateCcw className="w-3.5 h-3.5" />
            </B5>
          )}
        </div>

        {/* Back Side (Only rendered/used if canFlip is true) */}
        {canFlip && (
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#ebebeb] text-neutral-800 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-200/50 flex flex-col items-center text-center transition-all group-hover:-translate-y-2 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <H5 className="text-gray-800 mb-6">Cabang Lomba</H5>

            <div className="w-full flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
              <div className="flex flex-col items-center justify-center gap-1 text-center w-full">
                {item.subCategories?.map((sub, idx) => (
                  <B5 key={idx} className="text-gray-600 tracking-wide">
                    {sub}
                  </B5>
                ))}
              </div>
            </div>

            <B5 className="mt-auto pt-4 border-t border-gray-300/80 w-full text-gray-400 font-medium tracking-wide flex items-center justify-center gap-1.5">
              Tekan untuk membalik <LucideIcons.RotateCcw className="w-3.5 h-3.5" />
            </B5>
          </div>
        )}
      </div>
    </div>
  )
}
