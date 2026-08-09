'use client'

import { useRef } from 'react'
import { H2, B2 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Profile() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pinTargetRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinTargetRef.current,
        start: 'bottom bottom',
        end: '+=50%',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        refreshPriority: 10, // Higher priority = calculated first, before Divisi's pin
        invalidateOnRefresh: true,
      },
    })

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
  }, { scope: wrapperRef })

  return (
    <div className="relative z-10 w-full -mt-10" ref={wrapperRef}>
      {/* Background putih di bagian bawah agar sisa Hero yang sticky tertutup */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      
      <div ref={pinTargetRef}>
        <section className="relative z-10 w-full overflow-hidden bg-[#E1F3FA] rounded-[40px] pt-[112px] pb-[112px]">
          {/* Glow Effects (Pure CSS/Tailwind) */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            {/* Biru Glow (Kiri Atas Gambar) */}
            <div className="absolute top-[20%] -left-[20%] w-[450px] md:w-[800px] aspect-square rounded-full bg-[#64CAEF] blur-[100px] md:blur-[180px] opacity-50" />
            {/* Hijau Glow (Kanan Bawah Gambar) */}
            <div className="absolute -bottom-[20%] -right-[20%] w-[450px] md:w-[800px] aspect-square rounded-full bg-[#C7E07C] blur-[100px] md:blur-[180px] opacity-50" />
          </div>

          <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col items-center text-center relative z-10">
            {/* Title */}
            <H2 className="text-[#0a4c5a] font-semibold mb-6">Ruang Tumbuh Bersama</H2>
            
            {/* Description */}
            <B2 className="text-gray-700 max-w-3xl mb-10 leading-relaxed">
              KMTETI hadir sebagai wadah bagi mahasiswa untuk mengembangkan potensi, memperluas wawasan, dan membangun kolaborasi. Melalui berbagai program, layanan internal, serta informasi yang terpusat, kami mendukung setiap anggota untuk berproses, berkarya, dan memberikan kontribusi nyata bagi lingkungan kampus.
            </B2>
            
            {/* Button */}
            <Button variant={'secondary'} size={"default"} className="rounded-xl px-6 py-6 mb-16 shadow-md hover:shadow-lg transition-shadow">
              <B2>Profil KMTETI</B2>
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Image Section */}
            <div className="relative w-full max-w-[900px] aspect-[16/9] mx-auto">
              {/* Back rotated layer */}
              <div className="absolute inset-0 w-full h-full bg-white/70 rounded-[28px] shadow-sm transform -rotate-[3deg] scale-[1.01] border border-white/60 z-0"></div>
              
              {/* Front Image */}
              <div className="relative z-10 hover:rotate-[-1deg] rotate-[1deg] transition-transform duration-300 w-full h-full rounded-[24px] overflow-hidden shadow-xl border-[6px] border-white bg-gray-100">
                <Image 
                  src="/images/profile/foto-kabinet.webp" 
                  alt="Group Photo KMTETI" 
                  fill 
                  className="object-cover"
                />
                
                {/* Overlay blur + stats — animated by GSAP */}
                <div 
                  ref={overlayRef}
                  className="absolute inset-0 z-20 flex items-center justify-center rounded-[18px] opacity-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-gray-800/30 w-full max-w-4xl mx-auto text-gray-900">
                    {[
                      { value: '200', label: <>Anggota<br />Organisasi Aktif</> },
                      { value: '8', label: <>Divisi Beranggota<br />Aktif</> },
                      { value: '6', label: <>Badan Semi<br />Otonom</> },
                      { value: '3', label: <>Event Ternama<br />Nasional</> },
                    ].map((stat) => (
                      <div key={stat.value} className="flex flex-col items-center justify-center px-2 py-3 md:px-4 md:py-0">
                        <span className="text-[32px] md:text-[56px] font-serif leading-none mb-1 md:mb-3">{stat.value}</span>
                        <span className="text-[11px] md:text-sm font-bold text-center max-w-[140px] leading-snug">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
