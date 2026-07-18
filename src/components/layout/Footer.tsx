import { B2, B3, B5, H1 } from '@/components/elements/Typography'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  AtSign,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Music2,
  Play,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const featureLinks = ['Tentang Kami', 'KMTETI News', 'Layanan', 'Hubungi Kami']
const divisionLinks = ['Adkesma', 'BPO', 'Electropreneur', 'Humas', 'Infokom', 'Mikat', 'Sosmas', 'Workshop']
const bsoLinks = ['Magatrika', 'Night Login', 'Bionce', 'MPM', 'SKI', 'SKK']
const eventLinks = ['Nesco', 'Find-IT', 'Technocorner']

const socialLinks = [
  { label: 'YouTube', href: 'https://youtube.com', icon: Play },
  { label: 'TikTok', href: 'https://tiktok.com', icon: Music2 },
  { label: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { label: 'X', href: 'https://twitter.com', icon: AtSign },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: BriefcaseBusiness },
]

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="min-w-0">
      <B3 className="mb-3 font-bold leading-[18px] text-[#f1f1f1]">{title}</B3>
      <ul className="space-y-[9px]">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="block text-[13px] font-medium leading-[17px] text-[#f1f1f1]/88 transition-colors hover:text-white sm:text-xs sm:leading-[15px]"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
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

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 via-black/0 to-[#263340]/96" />
      <div className="absolute inset-x-0 top-[360px] z-20 h-[calc(100%-360px)] backdrop-blur-[4px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black)] sm:top-auto sm:bottom-0 sm:h-[58%] lg:h-[472px] lg:backdrop-blur-[2px] lg:[mask-image:linear-gradient(to_bottom,transparent,black_22%,black)]" />
      <div className="absolute inset-x-0 top-[390px] z-30 h-[calc(100%-390px)] bg-gradient-to-b from-[#263340]/0 via-[#263340]/72 to-[#263340] sm:top-auto sm:bottom-0 sm:h-[54%] lg:h-[472px] lg:via-[#333333]/32 lg:to-[#263340]/95" />

      <div className="relative z-40 mx-auto flex min-h-[1120px] w-full max-w-[1440px] flex-col px-6 py-12 sm:min-h-[980px] sm:px-10 sm:py-14 lg:h-full lg:px-20 lg:py-0">
        <div className="max-w-[626px] pt-4 sm:pt-16 lg:absolute lg:left-20 lg:top-[148px] lg:pt-0">
          <H1 className="text-white">Connect with Us</H1>
          <B3 className="mt-4 max-w-[34ch] font-medium text-white sm:max-w-[58ch]">
            At KMTETI, a spirit of optimism and possibility energizes our mission of discovery and
            learning.
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
              <Image
                src="/logo/kmteti/vertical-white.svg"
                alt="KMTETI FT UGM"
                width={63}
                height={85}
                className="h-[72px] w-auto sm:h-[85px] sm:w-[63px]"
              />

              <div className="mt-3 max-w-[620px]">
                <B3 className="font-bold leading-[24px] text-white sm:text-[18px] sm:leading-[27px]">
                  Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi
                </B3>
                <B3 className="mt-1 font-medium leading-[22px] text-white sm:leading-[24px]">
                  Fakultas Teknik UGM, Kampus UGM, Jl. Grafika No. 2, Yogyakarta 55281
                </B3>
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

            <nav
              className="grid grid-cols-2 gap-x-8 gap-y-8 text-[#f1f1f1] sm:grid-cols-4 sm:gap-x-10 lg:gap-x-16"
              aria-label="Footer"
            >
              <FooterColumn title="Fitur" links={featureLinks} />
              <FooterColumn title="Divisi" links={divisionLinks} />
              <FooterColumn title="BSO" links={bsoLinks} />
              <FooterColumn title="Event" links={eventLinks} />
            </nav>
          </div>

          <div className="mt-9 border-t border-white/35 pt-6 sm:pt-7 lg:mt-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <B3 className="font-medium leading-[24px] text-white sm:text-[18px] sm:leading-[27px]">
                KMTETI 2026 - All Rights Reserved
              </B3>
              <B5 className="max-w-2xl font-semibold leading-[16px] text-white/92 md:text-right">
                Dikembangkan oleh <span className="underline">Muhammad Khoirunas</span>,{' '}
                <span className="underline">Aulia Nur Fajri Tri Anggoro</span>,{' '}
                <span className="underline">Alfian Adicandra</span>, dan Divisi Infokom
              </B5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
