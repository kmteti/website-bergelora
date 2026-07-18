'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

type NavbarSubItem = {
  key: string
  href: string
  icon?: string
}

type NavbarLinkItem = {
  key: string
  href: string
}

type NavbarSection = {
  title: string
  items: NavbarSubItem[]
}

type NavbarDropdownItem = {
  key: string
  sections: NavbarSection[]
}

type NavbarItem = NavbarLinkItem | NavbarDropdownItem

const NavbarItems: NavbarItem[] = [
  {
    key: 'Tentang',
    href: '/tentang',
  },
  {
    key: 'Divisi & BSO',
    sections: [
      {
        title: 'Divisi',
        items: [
          {
            key: 'Adkesma',
            href: '/divisi/adkesma',
            icon: 'logo/divisi/adkesma.svg',
          },
          {
            key: 'Mikat',
            href: '/divisi/mikat',
            icon: 'logo/divisi/mikat.svg',
          },
          {
            key: 'Sosmas',
            href: '/divisi/sosmas',
            icon: 'logo/divisi/sosmas.svg',
          },
          {
            key: 'BPO',
            href: '/divisi/bpo',
            icon: 'logo/divisi/bpo.svg',
          },
          {
            key: 'Humas',
            href: '/divisi/humas',
            icon: 'logo/divisi/humas.svg',
          },
          {
            key: 'Workshop',
            href: '/divisi/workshop',
            icon: 'logo/divisi/ws.svg',
          },
          {
            key: 'Electropreneur',
            href: '/divisi/electropreneur',
            icon: 'logo/divisi/ep.svg',
          },
          {
            key: 'Infokom',
            href: '/divisi/infokom',
            icon: 'logo/divisi/infokom.svg',
          },
        ],
      },
      {
        title: 'Badan Semi Otonom',
        items: [
          {
            key: 'Beacon',
            href: '/bso/beacon',
            icon: 'logo/bso/beacon.svg',
          },
          {
            key: 'Night Login',
            href: '/bso/night-login',
            icon: 'logo/bso/night-login.svg',
          },
          {
            key: 'Magatrika',
            href: '/bso/magatrika',
            icon: 'logo/bso/magatrika.svg',
          },
          {
            key: 'SKI Al-Hannaan',
            href: '/bso/ski-al-hannaan',
            icon: 'logo/bso/ski-al-hannaan.svg',
          },
          {
            key: 'SKK DTETI',
            href: '/bso/skk-dteti',
            icon: 'logo/bso/skk-dteti.svg',
          },
        ],
      },
    ],
  },
  {
    key: 'Kegiatan',
    sections: [
      {
        title: 'Kegiatan',
        items: [
          {
            key: 'NESCO',
            href: '/kegiatan/nesco',
          },
          {
            key: 'FindIT',
            href: '/kegiatan/findit',
          },
          {
            key: 'Technocorner',
            href: '/kegiatan/technocorner',
          },
        ],
      },
    ],
  },
  {
    key: 'Layanan',
    href: '/persuratan',
  },
  {
    key: 'Berita',
    href: '/berita',
  },
]

export function Navbar() {
  const router = useRouter()
  const [activeMobileKey, setActiveMobileKey] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileToggle = (key: string) => {
    setActiveMobileKey((current) => (current === key ? null : key))
  }

  const renderDesktopMenu = () => (
    <NavigationMenu align="start" className="hidden lg:flex">
      <NavigationMenuList className="gap-2">
        {NavbarItems.map((item) => (
          <NavigationMenuItem key={item.key}>
            {'sections' in item ? (
              <>
                <NavigationMenuTrigger className="text-base">{item.key}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={
                      item.key === 'Kegiatan' ? 'grid w-sm gap-2 p-3' : 'grid w-md gap-2 p-3'
                    }
                  >
                    {item.sections.map((section, sectionIndex) => (
                      <li key={section.title} className="rounded-lg p-4">
                        <div className="mb-3 text-base font-medium">{section.title}</div>
                        <div
                          className={
                            item.key === 'Kegiatan'
                              ? 'grid grid-cols-1 gap-2'
                              : 'grid grid-cols-2 gap-2'
                          }
                        >
                          {section.items.map((subItem) => (
                            <NavigationMenuLink
                              key={subItem.key}
                              href={subItem.href}
                              className="flex items-center gap-2 rounded-lg px-2 py-2 text-base font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1"
                            >
                              {subItem.icon ? (
                                <Image
                                  src={`/${subItem.icon}`}
                                  alt={subItem.key}
                                  width={28}
                                  height={28}
                                  className="size-7 shrink-0"
                                />
                              ) : item.key === 'Kegiatan' ? null : (
                                <span
                                  aria-hidden="true"
                                  className="flex size-7 shrink-0 items-center justify-center rounded-md border border-black bg-background text-black"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="size-4"
                                  >
                                    <path d="M4 7h16M4 12h16M4 17h10" />
                                  </svg>
                                </span>
                              )}
                              {subItem.key}
                            </NavigationMenuLink>
                          ))}
                        </div>
                        {sectionIndex < item.sections.length - 1 ? (
                          <div className="mt-4 h-px w-full bg-gray-500" />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={item.href}
                className={`${navigationMenuTriggerStyle()} text-base`}
              >
                {item.key}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )

  const renderMobileMenu = () => (
    <div className="flex w-full flex-col gap-2">
      {NavbarItems.map((item) => {
        if ('sections' in item) {
          const isOpen = activeMobileKey === item.key

          return (
            <div key={item.key} className="w-full">
              <button
                type="button"
                onClick={() => handleMobileToggle(item.key)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <span>{item.key}</span>
                <span className="text-sm text-muted-foreground">{isOpen ? '-' : '+'}</span>
              </button>

              {isOpen ? (
                <div className="mt-2 flex w-full flex-col gap-3 rounded-lg bg-muted/20 p-3">
                  {item.sections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-2">
                      <div className="text-sm font-medium text-foreground">{section.title}</div>
                      <div className="flex flex-col gap-1">
                        {section.items.map((subItem) => (
                          <Link
                            key={subItem.key}
                            href={subItem.href}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                          >
                            {subItem.icon ? (
                              <Image
                                src={`/${subItem.icon}`}
                                alt={subItem.key}
                                width={24}
                                height={24}
                                className="size-6 shrink-0"
                              />
                            ) : null}
                            {subItem.key}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )
        }

        return (
          <Link
            key={item.key}
            href={item.href}
            className="w-full rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
          >
            {item.key}
          </Link>
        )
      })}

      <Button
        variant={'primary'}
        className="mt-2 w-full text-base"
        onClick={() => router.push('/kontak')}
      >
        Hubungi Kami
      </Button>
    </div>
  )

  const getNavClasses = () => {
    if (isMobileMenuOpen) {
      return 'fixed inset-x-0 top-0 z-[99] h-dvh bg-white transition-all duration-300'
    }
    
    return `fixed z-[99] transition-all duration-300 ${
      isScrolled 
        ? 'top-2 sm:top-4 inset-x-4 sm:inset-x-8 rounded-2xl shadow-md border border-neutral-200/50 bg-white/95 backdrop-blur-md' 
        : 'top-0 inset-x-0 bg-white'
    }`
  }

  return (
    <nav className={getNavClasses()}>
      <div className="mx-auto flex h-full flex-col items-start gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8">
        <div className="flex w-full items-center justify-between lg:w-1/2 lg:justify-start">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black lg:hidden"
          >
            {isMobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M6 6l12 12M18 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-3 overflow-y-auto pb-4 lg:w-1/2 lg:ml-0 lg:flex-row lg:items-center lg:gap-4 lg:overflow-visible lg:pb-0 lg:justify-end">
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-6">
            {renderDesktopMenu()}
          </div>

          <div className="hidden lg:block">
            <Button variant={'primary'} className="text-base" onClick={() => router.push('/kontak')}>
              Hubungi Kami
            </Button>
          </div>

          <div className="w-full lg:hidden">{isMobileMenuOpen ? renderMobileMenu() : null}</div>
        </div>
      </div>
    </nav>
  )
}
