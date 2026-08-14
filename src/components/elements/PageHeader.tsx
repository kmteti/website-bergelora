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
      className={cn("relative w-full h-[470px] sm:h-[490px] md:h-[520px] lg:h-[560px] overflow-hidden", className)}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover object-center absolute"
      />
      
      <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
      
      {/* Gradient di bawah supaya teks lebih mudah dibaca */}
      <div className="absolute inset-x-0 bottom-0 h-[85%] pointer-events-none bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

      {/* Wrapper Konten Teks */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative z-10 flex h-full flex-col justify-end pb-[145px] sm:pb-[175px] md:pb-[205px] lg:pb-[220px] w-full px-5 sm:px-8 md:px-16 lg:px-24 pointer-events-none">
          <div className="flex items-center justify-between w-full pointer-events-auto gap-4">
            <div className="flex items-center gap-3.5 sm:gap-5 md:gap-6 min-w-0 flex-1">
              {/* Render Icon */}
              {iconSrc && (
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-[84px] md:h-[84px] shrink-0 rounded-xl overflow-hidden bg-white/10 backdrop-blur-xs shadow-lg border border-white/20">
                  <Image 
                    src={iconSrc} 
                    alt={`${title} icon`} 
                    fill
                    className="object-contain p-1.5 sm:p-2"
                  />
                </div>
              )}
              
              {/* Title & Description */}
              <div className="flex flex-col min-w-0">
                <H2 className="text-white drop-shadow-md text-xl sm:text-2xl md:text-4xl font-bold truncate leading-tight">
                  {title}
                </H2>
                <p className="text-white/90 text-xs sm:text-sm md:text-base mt-1 drop-shadow-sm font-sans line-clamp-2 max-w-xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            {(leftButton || rightButton) && (
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
