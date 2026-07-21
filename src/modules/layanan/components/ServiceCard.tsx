import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { B4 } from '@/components/elements/Typography'
import { cn } from '@/lib/utils'

export interface ServiceCardProps {
  title: string
  description: string
  href?: string
  className?: string
}

/**
 * Kartu layanan/link (Component 67 di Figma).
 * Ikon panah di kanan atas, judul + deskripsi di bawah. Seluruh kartu clickable.
 */
export function ServiceCard({ title, description, href = '#', className }: ServiceCardProps) {
  const isExternal = href.startsWith('http')

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={cn(
        'group flex min-h-[200px] flex-col justify-between gap-5 rounded-[32px] bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.14)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-100',
        className,
      )}
    >
      <ArrowUpRight
        className="size-6 shrink-0 self-end text-primary-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1">
        <p className="font-heading text-lg font-semibold leading-6 text-neutral-1000">{title}</p>
        <B4 className="text-neutral-600">{description}</B4>
      </div>
    </Link>
  )
}
