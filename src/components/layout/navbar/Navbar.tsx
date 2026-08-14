'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type NavLink = {
  label: string
  href: string
}

const tentangLinks: NavLink[] = [
  { label: 'Profil KMTETI', href: '/tentang/profil' },
  { label: 'KMTETI News', href: '/tentang/berita' },
]

const megaMenuData = {
  divisi: [
    { label: 'Adkesma', href: '/divisi/adkesma', icon: '/logo/divisi/adkesma.svg' },
    { label: 'BPO', href: '/divisi/bpo', icon: '/logo/divisi/bpo.svg' },
    { label: 'Electropreneur', href: '/divisi/electropreneur', icon: '/logo/divisi/ep.svg' },
    { label: 'Humas', href: '/divisi/humas', icon: '/logo/divisi/humas.svg' },
    { label: 'Infokom', href: '/divisi/infokom', icon: '/logo/divisi/infokom.svg' },
    { label: 'Minat dan Bakat', href: '/divisi/minat-dan-bakat', icon: '/logo/divisi/mikat.svg' },
    { label: 'Sosmas', href: '/divisi/sosmas', icon: '/logo/divisi/sosmas.svg' },
    { label: 'Workshop', href: '/divisi/workshop', icon: '/logo/divisi/ws.svg' },
  ],
  bso: [
    { label: 'Magatrika', href: '/bso/magatrika', icon: '/logo/bso/magatrika.svg' },
    { label: 'Night Login', href: '/bso/night-login', icon: '/logo/bso/night-login.svg' },
    { label: 'Bionce', href: '/bso/bionce', icon: '/logo/bso/beacon.svg' },
    { label: 'SKI', href: '/bso/ski', icon: '/logo/bso/ski-al-hannaan.svg' },
    { label: 'SKK', href: '/bso/skk', icon: '/logo/bso/skk-dteti.svg' },
    { label: 'MPM', href: '/bso/mpm', icon: '/logo/bso/mpm.svg' },
  ],
  event: [
    { label: 'FindIT', href: '/event/findit' },
    { label: 'Nesco', href: '/event/nesco' },
    { label: 'Technocorner', href: '/event/technocorner' },
  ],
}

const mainLinks: NavLink[] = [{ label: 'Layanan', href: '/layanan' }]

type NavbarTone = 'dark' | 'light'

const DARK_BACKGROUND_LIGHTNESS_THRESHOLD = 40
const HIDE_NAVBAR_AFTER_PX = 120

function getLightnessFromColor(color: string) {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)

  if (!match) return null

  const alpha = match[4] === undefined ? 1 : Number(match[4])
  if (alpha === 0) return null

  const red = Number(match[1]) / 255
  const green = Number(match[2]) / 255
  const blue = Number(match[3]) / 255
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)

  return ((max + min) / 2) * 100
}

function getNavbarToneFromViewport(): NavbarTone {
  const samplePoints = [
    [window.innerWidth * 0.5, 46],
    [window.innerWidth * 0.18, 46],
    [window.innerWidth * 0.82, 46],
  ] as const

  for (const [x, y] of samplePoints) {
    const elements = document.elementsFromPoint(x, y)

    for (const element of elements) {
      if (element.closest('[data-navbar-root]')) continue

      const backgroundColor = window.getComputedStyle(element).backgroundColor
      const lightness = getLightnessFromColor(backgroundColor)

      if (lightness !== null) {
        return lightness < DARK_BACKGROUND_LIGHTNESS_THRESHOLD ? 'dark' : 'light'
      }

      const explicitTone = element.closest('[data-navbar-tone]')?.getAttribute('data-navbar-tone')
      if (explicitTone === 'dark' || explicitTone === 'light') return explicitTone
    }
  }

  return 'light'
}

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktopTentangOpen, setIsDesktopTentangOpen] = useState(false)
  const [navbarTone, setNavbarTone] = useState<NavbarTone>('light')
  const [isHidden, setIsHidden] = useState(false)
  const desktopTentangRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const updateNavbarState = () => {
      const scrollY = window.scrollY
      const delta = scrollY - lastScrollY.current

      setIsScrolled(scrollY > 12)

      // Ignore sub-pixel jitter from smooth scrolling; keep the navbar visible
      // near the top so it never hides on a short bounce.
      if (Math.abs(delta) > 6) {
        setIsHidden(delta > 0 && scrollY > HIDE_NAVBAR_AFTER_PX)
        lastScrollY.current = scrollY
      }

      setNavbarTone(getNavbarToneFromViewport())
    }

    updateNavbarState()
    window.addEventListener('scroll', updateNavbarState, { passive: true })
    window.addEventListener('resize', updateNavbarState)

    return () => {
      window.removeEventListener('scroll', updateNavbarState)
      window.removeEventListener('resize', updateNavbarState)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsDesktopTentangOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopTentangRef.current && !desktopTentangRef.current.contains(event.target as Node)) {
        setIsDesktopTentangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isDarkTone = navbarTone === 'dark' && !isMobileMenuOpen
  const desktopNavTextClass = cn(
    'text-sm font-medium leading-6 tracking-normal transition-colors duration-500 ease-in-out focus-visible:outline-3 focus-visible:outline-offset-4',
    isDarkTone
      ? 'text-white hover:text-primary-200 focus-visible:outline-white/50'
      : 'text-black/70 hover:text-black/90 focus-visible:outline-primary-100',
  )

  return (
    <nav
      data-navbar-root
      className={cn(
        'fixed inset-x-0 top-0 z-[99] isolate transition-all duration-500 ease-in-out',
        isDarkTone ? 'text-white' : 'text-neutral-950',
        isMobileMenuOpen && 'bg-white',
        isHidden && !isMobileMenuOpen && '-translate-y-full opacity-0 pointer-events-none',
      )}
    >
      {/* Dark Backdrop Layer */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100px] backdrop-blur-[5px] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] transition-opacity duration-500 ease-in-out',
          isDarkTone && !isMobileMenuOpen ? 'opacity-100' : 'opacity-0',
          isScrolled ? 'bg-gradient-to-b from-black/40 via-black/16 to-transparent' : 'bg-gradient-to-b from-black/22 via-black/8 to-transparent',
        )}
      />

      {/* Light Backdrop Layer */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100px] backdrop-blur-[5px] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] transition-opacity duration-500 ease-in-out',
          !isDarkTone && !isMobileMenuOpen ? 'opacity-100' : 'opacity-0',
          isScrolled ? 'bg-gradient-to-b from-white/86 via-white/40 to-transparent' : 'bg-gradient-to-b from-white/72 via-white/26 to-transparent',
        )}
      />

      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[92px] lg:px-8">
        <Link href="/" className="relative flex shrink-0 items-center h-[34px] lg:h-[38px] w-[134px] lg:w-[150px]" aria-label="KMTETI FT UGM">
          <Image
            src="/logo/kmteti/horizontal-white.svg"
            alt="KMTETI FT UGM"
            fill
            priority
            className={cn(
              'object-contain object-left drop-shadow-[0_3px_4px_rgba(0,0,0,0.22)] transition-opacity duration-500 ease-in-out',
              isDarkTone ? 'opacity-100' : 'opacity-0 pointer-events-none',
            )}
          />
          <Image
            src="/logo/kmteti/horizontal-color.svg"
            alt="KMTETI FT UGM"
            fill
            priority
            className={cn(
              'object-contain object-left drop-shadow-[0_3px_4px_rgba(0,0,0,0.22)] transition-opacity duration-500 ease-in-out',
              isDarkTone ? 'opacity-0 pointer-events-none' : 'opacity-100',
            )}
          />
          <span className="sr-only">KMTETI FT UGM</span>
        </Link>

        <div className="relative hidden items-center gap-8 lg:flex" ref={desktopTentangRef}>
          <div>
            <button
              type="button"
              onClick={() => setIsDesktopTentangOpen(!isDesktopTentangOpen)}
              className={cn(
                'flex h-11 items-center cursor-pointer gap-2 rounded-2xl bg-transparent px-3 py-2 text-sm leading-6 transition-all duration-500 ease-in-out',
                desktopNavTextClass,
                isDesktopTentangOpen && (isDarkTone ? 'text-primary-200' : 'text-black/50'),
              )}
            >
              Tentang
              <ChevronDown
                className={cn('size-4 transition-transform duration-300 ease-in-out', isDesktopTentangOpen && 'rotate-180')}
              />
            </button>
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn('inline-flex h-11 items-center rounded-2xl px-3', desktopNavTextClass)}
            >
              {link.label}
            </Link>
          ))}

          <Button variant="primary" size="default" onClick={() => router.push('/kontak')}>
            Hubungi Kami
          </Button>

          <div
            className={cn(
              'absolute right-0 top-full z-[100] mt-4 grid w-[600px] cursor-default grid-cols-4 gap-6 rounded-[24px] border border-black/5 bg-white/95 p-6 text-neutral-950 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-200 origin-top-right',
              isDesktopTentangOpen
                ? 'opacity-100 visible scale-100 translate-y-0'
                : 'opacity-0 invisible scale-95 -translate-y-2 pointer-events-none',
            )}
          >
              {/* Information */}
              <div className="flex flex-col">
                <h3
                  className="mb-4 text-xs font-regular
r text-neutral-400"
                >
                  Informasi
                </h3>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/tentang/profil"
                    className="text-sm font-bold text-neutral-950 transition-colors hover:text-neutral-950"
                  >
                    Profil KMTETI
                  </Link>
                  <Link
                    href="/tentang/berita"
                    className="text-sm font-bold text-neutral-950 transition-colors hover:text-neutral-950"
                  >
                    Berita KMTETI
                  </Link>
                </div>
              </div>
              {/* Divisi */}
              <div className="flex flex-col">
                <h3 className="mb-4 text-xs font-regular text-neutral-400">Divisi</h3>
                <div className="flex flex-col gap-3">
                  {megaMenuData.divisi.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2.5 text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                      {'icon' in item && item.icon ? (
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={18}
                          height={18}
                          className="size-[18px] object-contain"
                        />
                      ) : (
                        <div className="size-[18px] shrink-0" />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {/* BSO */}
              <div className="flex flex-col">
                <h3 className="mb-4 text-xs font-regular text-neutral-400">BSO</h3>
                <div className="flex flex-col gap-3">
                  {megaMenuData.bso.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2.5 text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                      {'icon' in item && item.icon ? (
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={18}
                          height={18}
                          className="size-[18px] object-contain"
                        />
                      ) : (
                        <div className="size-[18px] shrink-0" />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Event */}
              <div className="flex flex-col">
                <h3 className="mb-4 text-xs font-regular text-neutral-400">Event</h3>
                <div className="flex flex-col gap-3">
                  {megaMenuData.event.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className={cn(
            'inline-flex size-11 items-center justify-center rounded-lg border shadow-sm transition-colors focus-visible:outline-3 focus-visible:outline-offset-4 lg:hidden',
            isDarkTone
              ? 'border-white/15 bg-black/15 text-white backdrop-blur-md hover:bg-black/25 focus-visible:outline-white/50'
              : 'border-neutral-200 bg-white/80 text-neutral-950 backdrop-blur-md hover:bg-white focus-visible:outline-primary-100',
          )}
          aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="fixed inset-x-0 top-[75px] z-[98] max-h-[calc(100dvh-75px)] overflow-y-auto rounded-b-3xl border-t border-neutral-100 bg-white px-5 py-5 shadow-[0_20px_40px_rgba(15,23,42,0.12)] lg:hidden">
          <div className="flex flex-col gap-2">
            <Accordion className="w-full">
              <AccordionItem value="tentang" className="border-none">
                <AccordionTrigger className="flex h-12 w-full items-center justify-between rounded-lg px-3 text-left text-sm font-semibold text-neutral-950 hover:bg-neutral-100 hover:no-underline py-0 [&_[data-slot=accordion-trigger-icon]]:text-neutral-950">
                  Tentang
                </AccordionTrigger>
                <AccordionContent className="pb-0 [&_a]:no-underline">
                  <div className="mb-2 flex flex-col gap-6 px-3 py-2">
                    {/* Informasi */}
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-normal text-neutral-400">Informasi</span>
                      <div className="flex flex-col gap-3">
                        {tentangLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-neutral-700 hover:text-neutral-950"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Divisi */}
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-normal text-neutral-400">Divisi</span>
                      <div className="flex flex-col gap-4">
                        {megaMenuData.divisi.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 text-sm font-medium text-neutral-700 hover:text-neutral-950"
                          >
                            {'icon' in item && item.icon ? (
                              <Image
                                src={item.icon}
                                alt={item.label}
                                width={18}
                                height={18}
                                className="size-[18px] object-contain"
                              />
                            ) : (
                              <div className="size-[18px] shrink-0" />
                            )}
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* BSO */}
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-normal text-neutral-400">BSO</span>
                      <div className="flex flex-col gap-4">
                        {megaMenuData.bso.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 text-sm font-medium text-neutral-700 hover:text-neutral-950"
                          >
                            {'icon' in item && item.icon ? (
                              <Image
                                src={item.icon}
                                alt={item.label}
                                width={18}
                                height={18}
                                className="size-[18px] object-contain"
                              />
                            ) : (
                              <div className="size-[18px] shrink-0" />
                            )}
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Event */}
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-normal text-neutral-400">Event</span>
                      <div className="flex flex-col gap-3">
                        {megaMenuData.event.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-neutral-700 hover:text-neutral-950"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex h-12 items-center rounded-lg px-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-100"
              >
                {link.label}
              </Link>
            ))}

            <Button
              variant="primary"
              size="lg"
              className="mt-4 h-11 w-full text-base shadow-[0_8px_18px_rgba(0,111,151,0.3)]"
              onClick={() => router.push('/kontak')}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
