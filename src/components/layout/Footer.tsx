'use client'

import React, { useRef } from 'react'
import { B3, B4, B5, H1 } from '@/components/elements/Typography'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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

function InstagramIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LineIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`scale-[1.15] ${className || ''}`}
      {...props}
    >
      <path d="M19.365 9.864c0-4.02-4.197-7.284-9.365-7.284S.635 5.844.635 9.864c0 3.606 3.208 6.634 7.551 7.185.294.064.693.194.794.445.09.227.059.582.029.81-.044.29-.199 1.153-.223 1.309-.068.41-.318 1.602 1.397.874 1.716-.728 4.632-2.727 6.32-4.667 1.83-2.09 2.862-3.882 2.862-5.957z" />
    </svg>
  )
}

function LinkedinIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Tiktok', href: 'https://www.tiktok.com/@kmteti_ugm', icon: TiktokIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/kmteti.ugm', icon: InstagramIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@KMTETIFtUgm', icon: YoutubeIcon },
  { label: 'Line', href: 'https://page.line.me/ugm.kmteti', icon: LineIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kmteti-ft-ugm/', icon: LinkedinIcon },
]

function FooterColumn({
  title,
  links,
  value,
}: {
  title: string
  links: { label: string; href: string }[]
  value: string
}) {
  return (
    <>
      <AccordionItem value={value} className="border-b border-white/20 sm:hidden">
        <AccordionTrigger className="text-[14px] font-bold text-white hover:no-underline [&[data-state=open]>svg]:rotate-180">
          {title}
        </AccordionTrigger>
        <AccordionContent className="pb-4 pt-1">
          <ul className="space-y-2">
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
  const ctaRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)

  useGSAP(
    () => {
      if (ctaRef.current && titleRef.current && descRef.current && btnRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            once: true,
          },
        })

        tl.fromTo(
          titleRef.current,
          { y: '115%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' },
        )
          .fromTo(
            descRef.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
            '-=0.6',
          )
          .fromTo(
            btnRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
            '-=0.5',
          )
      }
    },
    { scope: ctaRef },
  )

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
        <div ref={ctaRef} className="max-w-[626px] mt-6 pt-6 sm:mt-0 sm:pt-16 lg:absolute lg:left-8 lg:top-[148px] lg:pt-0">
          <div className="overflow-hidden py-2 -my-2 px-1 -mx-1">
            <H1 ref={titleRef} className="text-white will-change-transform pb-1">
              Connect with Us
            </H1>
          </div>
          <B3 ref={descRef} className="mt-4 max-w-[34ch] font-medium text-white sm:max-w-[58ch] will-change-transform">
            Mari bersama melangkah, berinovasi, dan hadirkan dampak positif bagi lingkungan sekitar.
          </B3>

          <Link
            ref={btnRef}
            href="/kontak"
            className={cn(buttonVariants({ variant: 'primary', size: 'default' }), 'mt-8 w-fit will-change-transform')}
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
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
              <B4 className="font-medium text-white shrink-0">KMTETI 2026 - All Rights Reserved</B4>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <B5 className="max-w-[440px] font-medium text-white/90 leading-relaxed text-left sm:text-right">
                  Dikembangkan oleh{' '}
                  <a
                    href="https://www.linkedin.com/in/khoirunas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                  >
                    Muhammad Khoirunas
                  </a>
                  ,{' '}
                  <a
                    href="https://www.linkedin.com/in/aulianurfajri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                  >
                    Aulia Nur Fajri Tri Anggoro
                  </a>
                  ,{' '}
                  <a
                    href="https://www.linkedin.com/in/alfianadicandra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                  >
                    Alfian Adicandra
                  </a>
                  ,{' '}
                  <a
                    href="https://www.linkedin.com/in/farrel-ag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:text-white transition-colors decoration-white/60 hover:decoration-white"
                  >
                    Muhammad Farrel A.G.
                  </a>
                  , dan Divisi Infokom.
                </B5>

                <Link
                  href="https://forms.gle/p2yM4uWVCiDiQmM69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'black', size: 'default' }),
                    'shrink-0 self-start gap-2',
                  )}
                >
                  <span>Nilai Website</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
