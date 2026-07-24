'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { SpotlightCard } from './SpotlightCard'
import { useEffect, useCallback, useState } from 'react'
import { cn } from '@/lib/utils'

export function SpotlightCarousel({ data }: { data: React.ComponentProps<typeof SpotlightCard>[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    containScroll: 'trimSnaps'
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  // Autoplay every 5 seconds (5000ms)
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi, selectedIndex])

  return (
    <div className="-mx-6 sm:-mx-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {data.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "relative flex-[0_0_90%] sm:flex-[0_0_70%] min-w-0 h-[350px]",
                index === 0 ? "pl-6 sm:pl-8" : "pl-4",
                index === data.length - 1 ? "pr-6 sm:pr-8" : ""
              )}
            >
              <SpotlightCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              index === selectedIndex ? "w-6 bg-primary" : "bg-neutral-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
