'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="relative w-screen min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[linear-gradient(135deg,#d8f0b7_0%,#c7e8d6_45%,#aae0f5_100%)]">
      {/* Glow Elemen Bulet Hijau/Lime (Kiri Bawah) */}
      <div className="absolute -bottom-28 -left-28 w-[380px] h-[380px] sm:w-[580px] sm:h-[580px] bg-secondary-300/50 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />

      {/* Glow Elemen Bulet Biru (Kanan Atas) */}
      <div className="absolute -top-28 -right-28 w-[380px] h-[380px] sm:w-[580px] sm:h-[580px] bg-primary-300/50 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />

      {/* Floating Card Container */}
      <div className="relative z-10 w-full max-w-3xl sm:max-w-4xl bg-white/95 backdrop-blur-md rounded-[40px] shadow-[0_25px_60px_-15px_rgba(13,98,124,0.14),0_10px_25px_-5px_rgba(0,0,0,0.04)] border border-white/80">
        {/* Sad Face Emoticon */}
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-none font-sans font-medium text-primary-500 mb-6 sm:mb-8 select-none tracking-tighter">
          :(
        </div>

        {/* 404 Error Title */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-primary-500 tracking-tight mb-6 sm:mb-8">
          404 - Halaman Tidak Ditemukan
        </h1>

        {/* Info Text Line 1 */}
        <p className="font-sans text-base sm:text-lg md:text-[20px] text-neutral-600 leading-relaxed mb-4 sm:mb-6 max-w-2xl">
          Maaf, halaman yang kamu cari tidak dapat ditemukan atau mungkin telah dipindahkan.
        </p>

        {/* Info Text Line 2 */}
        <p className="font-sans text-base sm:text-lg md:text-[20px] text-neutral-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
          Pastikan alamat URL yang kamu masukkan sudah benar, atau klik tombol di bawah untuk kembali ke beranda.
        </p>

        {/* Single Action Button: Kembali ke Beranda */}
        <div className="pt-2">
          <Link href="/">
            <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
