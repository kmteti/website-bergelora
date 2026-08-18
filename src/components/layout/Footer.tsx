import { B3, B4, B5, H1 } from '@/components/elements/Typography'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const featureLinks = [
  { label: 'Tentang Kami', href: '/tentang/profil' },
  { label: 'KMTETI News', href: '/tentang/berita' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Hubungi Kami', href: '/hubungi-kami' },
]

const divisionLinks = [
  { label: 'Adkesma', href: '/divisi/adkesma' },
  { label: 'BPO', href: '/divisi/bpo' },
  { label: 'Electropreneur', href: '/divisi/electropreneur' },
  { label: 'Humas', href: '/divisi/humas' },
  { label: 'Infokom', href: '/divisi/infokom' },
  { label: 'Mikat', href: '/divisi/minat-dan-bakat' },
  { label: 'Sosmas', href: '/divisi/sosmas' },
  { label: 'Workshop', href: '/divisi/workshop' },
]

const bsoLinks = [
  { label: 'Magatrika', href: '/bso/magatrika' },
  { label: 'Night Login', href: '/bso/night-login' },
  { label: 'Bionce', href: '/bso/bionce' },
  { label: 'MPM', href: '/bso/mpm' },
  { label: 'SKI', href: '/bso/ski' },
  { label: 'SKK', href: '/bso/skk' },
]

const eventLinks = [
  { label: 'Nesco', href: '/event/nesco' },
  { label: 'Find-IT', href: '/event/findit' },
  { label: 'Technocorner', href: '/event/technocorner' },
]

import React from 'react'

const YoutubeIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`scale-[1.15] ${className || ''}`} {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const TiktokIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const InstagramIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const XIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

const LinkedinIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socialLinks = [
  { label: 'YouTube', href: 'https://youtube.com', icon: YoutubeIcon },
  { label: 'TikTok', href: 'https://tiktok.com', icon: TiktokIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://twitter.com', icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
]

function FooterColumn({ title, links, value }: { title: string; links: { label: string; href: string }[]; value: string }) {
  return (
    <>
      <AccordionItem value={value} className="border-none py-2 sm:hidden">
        <AccordionTrigger className="hover:no-underline py-2 [&_[data-slot=accordion-trigger-icon]]:text-white/70 hover:opacity-100 focus-visible:ring-0 focus-visible:border-transparent outline-none">
          <B3 className="font-bold leading-[18px] text-[#f1f1f1] text-left">{title}</B3>
        </AccordionTrigger>
        <AccordionContent className="pb-2 [&_a]:no-underline">
          <ul className="mt-2 space-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-[13px] font-medium leading-[17px] text-[#f1f1f1]/88 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <div className="hidden min-w-0 sm:block">
        <B3 className="mb-3 font-bold leading-[18px] text-[#f1f1f1]">
          {title}
        </B3>
        <ul className="space-y-[9px]">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block text-xs font-medium leading-[15px] text-[#f1f1f1]/88 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default function Footer() {
  return (
    <footer className="relative isolate min-h-[1120px] w-full overflow-hidden bg-neutral-900 text-white sm:min-h-[980px] lg:h-[1291px]">
      <Image
        src="/images/footer/footer.webp"
        alt="Gedung Fakultas Teknik Universitas Gadjah Mada"
        fill
        sizes="100vw"
        priority={false}
        className="z-0 object-cover object-[58%_top] sm:object-center lg:top-0 lg:h-full lg:object-top"
      />

      <div className="absolute inset-0 z-10 bg-black/5" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-[calc(100%-280px)] backdrop-blur-[24px] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_10%,rgba(0,0,0,0.8)_20%,black_28%)] sm:h-[64%] lg:h-[560px]" />

      <div className="container relative z-40 mx-auto flex min-h-[1120px] w-full max-w-6xl flex-col px-4 py-12 sm:min-h-[980px] md:px-8 sm:py-14 lg:h-full lg:py-0">
        <div className="max-w-[626px] pt-4 sm:pt-16 lg:absolute lg:left-8 lg:top-[148px] lg:pt-0">
          <H1 className="text-white">Connect with Us</H1>
          <B3 className="mt-4 max-w-[34ch] font-medium text-white sm:max-w-[58ch]">
            KMTETI senantiasa terbuka untuk menjalin kolaborasi dan bertukar gagasan. Mari bersama melangkah, berinovasi, dan hadirkan dampak positif bagi lingkungan sekitar.
          </B3>

          <Link
            href="/kontak"
            className={cn(buttonVariants({ variant: 'primary', size: 'default' }), 'mt-8 w-fit')}
          >
            Hubungi Kami
            <ArrowUpRight />
          </Link>
        </div>

        <div className="mt-[180px] sm:mt-auto lg:pb-[60px]">
          <div className="grid gap-9 sm:gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <div className="flex flex-col items-start">
                {/* Desktop Logo (Vertical) */}
                <Image
                  src="/logo/kmteti/vertical-white.svg"
                  alt="KMTETI FT UGM"
                  width={63}
                  height={85}
                  className="hidden h-[85px] w-[63px] sm:block"
                />
                
                {/* Mobile Logo (Horizontal) */}
                <Image
                  src="/logo/kmteti/horizontal-white.svg"
                  alt="KMTETI FT UGM"
                  width={150}
                  height={48}
                  className="block h-[42px] w-auto sm:hidden"
                />

                <div className="mt-5 max-w-[620px] sm:mt-3">
                  <B3 className="font-bold leading-[22px] text-white sm:text-[18px] sm:leading-[27px]">
                    Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi
                  </B3>
                  <B3 className="mt-1.5 text-[13px] font-medium leading-[20px] text-white/80 sm:mt-1 sm:text-base sm:leading-[24px] sm:text-white">
                    Fakultas Teknik UGM, Kampus UGM, Jl. Grafika No. 2, Yogyakarta 55281
                  </B3>
                </div>
              </div>

              <div className="mt-6 sm:mt-[30px]">
                <B3 className="font-bold text-white">Sosial Media</B3>
                <div className="mt-[9px] flex flex-wrap items-center gap-[14px]">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="text-white/90 transition-colors hover:text-white"
                    >
                      <Icon className="size-6" strokeWidth={2.4} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Accordion className="w-full">
              <nav
                className="grid grid-cols-1 text-[#f1f1f1] sm:grid-cols-4 sm:gap-x-8 sm:gap-y-8 lg:gap-x-10"
                aria-label="Footer"
              >
                <FooterColumn value="item-1" title="Fitur" links={featureLinks} />
                <FooterColumn value="item-2" title="Divisi" links={divisionLinks} />
                <FooterColumn value="item-3" title="BSO" links={bsoLinks} />
                <FooterColumn value="item-4" title="Event" links={eventLinks} />
              </nav>
            </Accordion>
          </div>

          <div className="mt-9 border-t border-white/35 pt-6 sm:pt-7 lg:mt-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <B4 className="font-medium text-white ">KMTETI 2026 - All Rights Reserved</B4>
              <B5 className="max-w-2xl font-semibold text-white/92 md:text-right">
                Dikembangkan oleh{' '}
                <a
                  href="https://www.linkedin.com/in/khoirunas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                >
                  Muhammad Khoirunas
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/aulianurfajri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                >
                  Aulia Nur Fajri Tri Anggoro
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/alfianadicandra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                >
                  Alfian Adicandra
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/farrel-ag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                >
                  Muhammad Farrel A.G.
                </a>
                , dan Divisi Infokom
              </B5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
