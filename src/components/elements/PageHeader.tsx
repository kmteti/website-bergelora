import Image from 'next/image'
import { H2, B2 } from '@/components/elements/Typography'
import { cn } from '@/lib/utils'

export interface PageHeaderProps {
  title: string
  description: string
  imageSrc: string
  iconSrc?: string
  className?: string
  leftButton?: React.ReactNode
  rightButton?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  imageSrc,
  iconSrc,
  className,
  leftButton,
  rightButton
}: PageHeaderProps) {
  return (
    <section 
      data-navbar-tone="dark"
      className={cn("relative w-full h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden", className)}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover object-center absolute"
      />
      
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      
      {/* Gradient di bawah supaya teks lebih mudah dibaca */}
      <div className="absolute inset-x-0 bottom-0 h-[80%] pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Wrapper Konten Teks */}
      <div className="absolute top-0 left-0 w-full h-full">
      
        {/* Padding disamain sama Hero home (Hero.tsx) biar judulnya sejajar antar halaman.
            max-w yang di-center dilepas — itu yang bikin teksnya makin masuk ke dalam
            di layar lebar, sementara hero-nya tetap nempel ke tepi. pb-nya beda sendiri
            karena dipakai buat ruang overlap PageOverlap. */}
        <div className="relative z-10 flex h-full flex-col justify-end pb-[210px] w-full px-6 sm:px-8 md:px-16 lg:px-24 pointer-events-none">
          <div className="flex items-end justify-between w-full pointer-events-auto">
            <div className="flex items-center gap-5 md:gap-6">
              {/* Render Icon */}
              {iconSrc && (
                <div className="relative w-16 h-16 md:w-[84px] md:h-[84px] shrink-0 rounded-xl overflow-hidden bg-white/10 shadow-lg">
                  <Image 
                    src={iconSrc} 
                    alt={`${title} icon`} 
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
              )}
              
              {/* Title & Description */}
              <div className="flex flex-col">
                <H2 className="text-white drop-shadow-md">{title}</H2>
                <B2 className="text-white/90 mt-[2px] drop-shadow-sm">{description}</B2>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            {(leftButton || rightButton) && (
              <div className="flex items-center gap-3">
                {leftButton}
                {rightButton}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
