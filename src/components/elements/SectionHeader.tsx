import { cn } from '@/lib/utils'

export interface SectionHeaderProps {
  title: string
  className?: string
}

/**
 * Judul section dengan garis pemisah horizontal di sebelah kanannya.
 * Dipakai berulang di halaman Layanan (Link Penting, Arsip Divisi, dst).
 */
export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center gap-6 md:gap-10', className)}>
      <h2 className="font-heading whitespace-nowrap text-[26px] font-semibold leading-tight tracking-[-0.01em] text-neutral-1000 md:text-[32px]">
        {title}
      </h2>
      <span className="h-px flex-1 bg-neutral-300" aria-hidden="true" />
    </div>
  )
}
