import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface EventBrowserCardProps {
  name: string
  description: string
  /** Emoji penanda event, dirender sebagai teks (Figma pakai emoji, bukan logo) */
  emoji?: string
  website?: string
  gradient?: {
    from: string
    to: string
  }
  className?: string
}

/**
 * Kartu event berbentuk jendela browser (Component 76 di Figma).
 *
 * Semua ukuran dalam `cqw` supaya kartunya ikut lebar stage tanpa breakpoint —
 * 1cqw = 1% lebar stage, jadi angka Figma tinggal dibagi 773 (lebar kartu asli).
 * Font di-`max()` biar nggak ikut mengecil sampai nggak kebaca di layar kecil.
 */
export default function EventBrowserCard({
  name,
  description,
  emoji,
  website,
  gradient = { from: '#334bb5', to: '#1e308e' },
  className,
}: EventBrowserCardProps) {
  // Bar alamat pakai domain event aslinya, bukan placeholder "app.event.com/tece".
  const address = website?.replace(/^https?:\/\//, '').replace(/\/$/, '') ?? 'kmteti.ft.ugm.ac.id'

  return (
    // Outer wrapper handles the drop shadow without overflow-hidden clipping
    <div className={cn('relative w-full rounded-[4.14cqw] shadow-[0_22px_45px_rgba(0,0,0,0.18)] transition-shadow duration-300', className)}>
      <article
        className="relative h-[60.03cqw] min-h-[260px] w-full overflow-hidden rounded-[4.14cqw] bg-white"
      >
        {/* Title bar */}
        <div className="flex h-[7.24cqw] min-h-[34px] items-center justify-between bg-[#f4f4f4] pl-[2.59cqw] pr-[2.07cqw]">
          <div className="flex shrink-0 items-center gap-[1.03cqw]">
            <span className="size-[2.07cqw] rounded-full bg-[#fb3748]" />
            <span className="size-[2.07cqw] rounded-full bg-[#ffdb43]" />
            <span className="size-[2.07cqw] rounded-full bg-[#1fc16b]" />
          </div>
          <div className="flex h-[4.14cqw] w-[51.75cqw] items-center justify-center rounded-full border border-black/20">
            <p className="truncate px-[2.59cqw] text-[max(9px,2.07cqw)] leading-[3.1cqw] text-black">
              {address}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-[1.03cqw]">
            <span className="size-[4.14cqw] rounded-full bg-[#d2d2d2]" />
            <span className="size-[4.14cqw] rounded-full bg-[#d2d2d2]" />
          </div>
        </div>

        {/* Pita warna dinamis di belakang logo (Gradient khas tiap event) */}
        <div 
          className="h-[13.2cqw] w-full transition-all duration-500" 
          style={{
            background: `linear-gradient(to bottom, ${gradient.from}, ${gradient.to})`
          }}
        />

        {/* Konten — sengaja absolute supaya logo-nya menimpa pita warna persis kayak Figma */}
        <div className="absolute left-[18.11cqw] top-[15.01cqw] flex w-[64.55cqw] flex-col gap-[3.1cqw]">
          <div className="flex flex-col gap-[1.55cqw]">
            {emoji ? (
              <span
                role="img"
                aria-label={name}
                className="block text-[max(24px,8.09cqw)] leading-none"
              >
                {emoji}
              </span>
            ) : null}
            <h3 className="font-heading text-[max(18px,5.82cqw)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">
              {name}
            </h3>
            <p className="line-clamp-4 font-sans text-[max(12px,2.07cqw)] leading-[1.5] text-black">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-[1.03cqw]">
            <span className="h-px w-full bg-black/20" aria-hidden="true" />
            <div className="flex items-center gap-[0.52cqw] opacity-30">
              <p className="font-sans text-[max(11px,2.07cqw)] leading-[1.5] text-black">
                Tekan untuk mempelajari lebih lanjut
              </p>
              <ArrowUpRight className="size-[3.1cqw] shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
