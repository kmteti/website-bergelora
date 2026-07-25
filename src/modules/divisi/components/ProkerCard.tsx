'use client'

import React, { useState } from 'react'

import * as LucideIcons from 'lucide-react'
import { H5, B5 } from '@/components/elements/Typography'

interface ProkerProps {
  nama: string
  deskripsi: string
  anggota?: string[]
  icon?: string
}

export function ProkerCard({ proker }: { proker: ProkerProps }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // fallback to Trophy if icon not found
  const LucideIcon = proker.icon ? (LucideIcons[proker.icon as keyof typeof LucideIcons] as React.ElementType) : LucideIcons.Trophy

  return (
    <div 
      className="group w-full h-[360px] cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 border border-gray-100/50 flex flex-col items-center text-center transition-all group-hover:-translate-y-2 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          {LucideIcon ? <LucideIcon className="w-12 h-12 mb-4 text-[#F5A826]" /> : <div className="text-5xl mb-6">🏆</div>}
          <H5 className="text-gray-800 mb-4">{proker.nama}</H5>
          <B5 className="text-gray-500 mb-4 overflow-hidden">
            {proker.deskripsi}
          </B5>
          <B5 className="mt-auto pt-4 border-t border-gray-100/80 w-full text-gray-400 font-medium tracking-wide flex items-center justify-center gap-1.5">
            Tekan untuk membalik <LucideIcons.RotateCcw className="w-3.5 h-3.5" />
          </B5>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary-100 to-primary-500 text-white rounded-[32px] shadow-lg p-8 flex flex-col items-center text-center transition-all group-hover:-translate-y-2">
          <H5 className="text-white mb-6">Daftar Anggota</H5>
          
          <div className="w-full flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
            {proker.anggota && proker.anggota.length > 0 ? (
              <ul className="list-disc list-inside space-y-0 w-full text-left pl-2">
                {proker.anggota.map((member, idx) => (
                  <li key={idx} className="text-white marker:text-[#F5A826]">
                    <B5 className="inline-block tracking-wide">{member}</B5>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="h-full flex flex-col items-center justify-center opacity-60">
                <B5 className="text-white italic">Belum ada data anggota.</B5>
              </div>
            )}
          </div>

          <B5 className="mt-auto pt-4 border-t border-white/20 w-full text-white/70 font-medium tracking-wide flex items-center justify-center gap-1.5">
            Tekan untuk kembali <LucideIcons.RotateCcw className="w-3.5 h-3.5" />
          </B5>
        </div>

      </div>
    </div>
  )
}
