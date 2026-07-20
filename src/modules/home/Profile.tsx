import { H2, B2 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="relative z-10 w-full -mt-10">
      {/* Background putih di bagian bawah agar sisa Hero yang sticky tertutup */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      
      <section className="relative z-10 w-full overflow-hidden bg-blue-100 rounded-[40px] pt-[112px] pb-[112px]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col items-center text-center">
        {/* Title */}
        <H2 className="text-[#0a4c5a] font-semibold mb-6">Ruang Tumbuh Bersama</H2>
        
        {/* Description */}
        <B2 className="text-gray-700 max-w-3xl mb-10 leading-relaxed">
          KMTETI hadir sebagai wadah bagi mahasiswa untuk mengembangkan potensi, memperluas wawasan, dan membangun kolaborasi. Melalui berbagai program, layanan internal, serta informasi yang terpusat, kami mendukung setiap anggota untuk berproses, berkarya, dan memberikan kontribusi nyata bagi lingkungan kampus.
        </B2>
        
        {/* Button */}
        <Button variant={'primary'} className="rounded-xl px-6 py-6 mb-16 shadow-md hover:shadow-lg transition-shadow">
          <span className="font-semibold text-base">Profil KMTETI</span>
          <ArrowUpRight className="ml-2 w-5 h-5" />
        </Button>

        {/* Image Section */}
        <div className="relative w-full max-w-[900px] aspect-[16/9] mx-auto">
          {/* Back rotated layer */}
          <div className="absolute inset-0 w-full h-full bg-white/70 rounded-[28px] shadow-sm transform -rotate-[3deg] scale-[1.01] border border-white/60 z-0"></div>
          
          {/* Front Image */}
          <div className="relative z-10 w-full h-full rounded-[24px] overflow-hidden shadow-xl border-[6px] border-white bg-gray-100">
            <Image 
              src="/images/home/about/about.webp" 
              alt="Group Photo KMTETI" 
              fill 
              className="object-cover"
            />
          </div>

       

      

        </div>
      </div>
    </section>
    </div>
  )
}
