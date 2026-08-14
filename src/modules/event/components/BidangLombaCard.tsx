'use client'

import React, { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { B5 } from '@/components/elements/Typography'

interface BidangLombaProps {
  nama: string
  deskripsi: string
  icon?: string
  subCategories?: string[]
}

export function BidangLombaCard({ item }: { item: BidangLombaProps }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Safely resolve Lucide Icon or fallback to Trophy
  const IconComponent = (item.icon && LucideIcons[item.icon as keyof typeof LucideIcons]) 
    ? (LucideIcons[item.icon as keyof typeof LucideIcons] as React.ElementType) 
    : LucideIcons.Trophy

  // We only enable flip if there are subCategories to show
  const canFlip = !!item.subCategories && item.subCategories.length > 0

  return (
    <div
      className={`group w-full h-[300px] sm:h-[350px] ${canFlip ? 'cursor-pointer [perspective:1000px]' : ''}`}
      onClick={() => canFlip && setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 sm:p-7 border border-gray-200/60 flex flex-col items-center text-center transition-all group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_35px_rgba(0,0,0,0.09)]">
          {/* Icon - Direct without pill container */}
          <IconComponent className="w-11 h-11 sm:w-13 sm:h-13 mb-3 sm:mb-4 text-[#abd03b] shrink-0" />

          {/* Title */}
          <h4 className="text-base sm:text-xl font-bold text-gray-900 leading-snug mb-2 font-heading line-clamp-2 px-1">
            {item.nama}
          </h4>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-3 sm:line-clamp-4 px-1">
            {item.deskripsi}
          </p>

          {canFlip && (
            <B5 className="mt-auto pt-3 border-t border-gray-100/90 w-full text-[11px] sm:text-xs text-gray-400 font-medium tracking-wide flex items-center justify-center gap-1.5 shrink-0">
              Tekan untuk membalik <LucideIcons.RotateCcw className="w-3.5 h-3.5" />
            </B5>
          )}
        </div>

        {/* Back Side (Only rendered/used if canFlip is true) */}
        {canFlip && (
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#ebebeb] text-neutral-800 rounded-[28px] sm:rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 sm:p-7 border border-gray-200/80 flex flex-col items-center text-center transition-all group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_35px_rgba(0,0,0,0.09)]">
            <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-4 font-heading shrink-0">
              Cabang Lomba
            </h4>

            <div className="w-full flex-1 overflow-y-auto overflow-x-hidden px-1 pr-1.5 [scrollbar-width:thin] [scrollbar-color:rgba(100,116,139,0.5)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-400/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-500/80">
              <div className="flex flex-col items-center justify-center gap-1 text-center w-full py-1">
                {item.subCategories?.map((sub, idx) => (
                  <B5 key={idx} className="text-xs sm:text-sm text-gray-700 tracking-wide font-medium">
                    {sub}
                  </B5>
                ))}
              </div>
            </div>

            <B5 className="mt-auto pt-3 border-t border-gray-300/80 w-full text-[11px] sm:text-xs text-gray-400 font-medium tracking-wide flex items-center justify-center gap-1.5 shrink-0">
              Tekan mebalik <LucideIcons.RotateCcw className="w-3.5 h-3.5" />
            </B5>
          </div>
        )}
      </div>
    </div>
  )
}
