import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavbarResolver } from '@/components/layout/NavbarResolver'

export const NotFound = () => {
  return (
    <section 
      data-navbar-tone="light"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-[linear-gradient(135deg,#d8f0b7_0%,#c7e8d6_45%,#aae0f5_100%)]"
    >
      {/* Glow Elemen Bulet Hijau/Lime (Kiri Bawah) */}
      <div className="absolute -bottom-28 -left-28 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] bg-secondary-300/40 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none z-0" />

      {/* Glow Elemen Bulet Biru (Kanan Atas) */}
      <div className="absolute -top-28 -right-28 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] bg-primary-300/40 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none z-0" />

      {/* Spacer untuk Navbar Fixed */}
      <NavbarResolver className="shrink-0" />

      {/* Floating Card Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 pb-8 sm:pb-12 md:pb-16">
        <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl p-6 sm:p-10 md:p-12 lg:p-14 bg-white/95 backdrop-blur-md rounded-[28px] sm:rounded-[36px] md:rounded-[44px] shadow-[0_25px_60px_-15px_rgba(13,98,124,0.14),0_10px_25px_-5px_rgba(0,0,0,0.04)] border border-white/90">
          {/* Sad Face Emoticon */}
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none font-sans font-medium text-primary-500 mb-3 sm:mb-5 select-none tracking-tighter">
            :(
          </div>

          {/* 404 Error Title */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0d607e] tracking-tight leading-tight mb-3 sm:mb-5">
            404 - Halaman Tidak Ditemukan
          </h1>

          {/* Info Text Line 1 */}
          <p className="font-sans text-sm sm:text-base md:text-[17px] text-neutral-600 leading-relaxed mb-2.5 sm:mb-3.5 max-w-xl">
            Maaf, halaman yang kamu cari tidak dapat ditemukan atau mungkin telah dipindahkan.
          </p>

          {/* Info Text Line 2 */}
          <p className="font-sans text-sm sm:text-base md:text-[17px] text-neutral-600 leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Pastikan alamat URL yang kamu masukkan sudah benar, atau klik tombol di bawah untuk kembali ke beranda.
          </p>

          {/* Single Action Button: Kembali ke Beranda */}
          <div className="pt-1">
            <Link href="/" className="inline-block">
              <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
