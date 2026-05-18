'use client'

import { ArrowRight, Image as ImageIcon, ChevronRight } from 'lucide-react'

const cardsData = [
  {
    type: 'PROKER',
    typeClassName: 'bg-yellow-100 text-neutral-1000',
    date: '12 April',
    title: 'Muhammad Farrel Al Ghazy Telah Dilantik Menjadi Ketua BEM 2026/2027',
    description:
      'Pelantikan kepengurusan baru BEM KMTETI FT UGM berlangsung khidmat dan dihadiri oleh jajaran dosen serta perwakilan mahasiswa.',
  },
  {
    type: 'BERITA',
    typeClassName: 'bg-primary-100 text-primary-500',
    date: '12 April',
    title: 'NESCO 2026 Sukses Digelar dengan Total 1000+ Peserta',
    description:
      'Kompetisi nasional yang diselenggarakan KMTETI ini kembali mencetak rekor peserta terbanyak sepanjang sejarah pelaksanaannya.',
  },
  {
    type: 'KETIGA',
    typeClassName: 'bg-secondary-100 text-secondary-500',
    date: '12 April',
    title: 'Kunjungan Industri ke PT. Telkom Indonesia',
    description:
      'Puluhan mahasiswa DTETI mendapatkan wawasan langsung mengenai infrastruktur telekomunikasi modern dalam kunjungan industri tahunan.',
  },
  {
    type: 'KETIGA',
    typeClassName: 'bg-neutral-200 text-neutral-600',
    date: '12 April',
    title: 'Pendaftaran Open Recruitment Pengurus KMTETI Dibuka',
    description:
      'Kesempatan bagi seluruh mahasiswa aktif DTETI untuk berkontribusi dan mengembangkan diri bersama Keluarga Mahasiswa.',
  },
]

// Duplicate cards to ensure smooth infinite marquee even on ultrawide screens
const marqueeCards = [...cardsData, ...cardsData]

export default function NewsMarquee() {
  return (
    <div
      className="relative flex flex-col items-center gap-6 py-6 w-full overflow-hidden my-4 sm:my-8"
      data-aos="fade-up"
    >
      {/* Header Section */}
      <div className="flex w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] mx-auto items-center justify-between mb-4 mt-2">
        <div className="flex flex-col gap-1 z-40 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-1000">Berita Terbaru Kami</h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Ikuti perkembangan dan kegiatan terbaru dari KMTETI.
          </p>
        </div>
      </div>

      <div className="group flex w-full relative">
        {/* Subtle gradient overlay on edges for smooth entry/exit effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-white to-transparent sm:w-16"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-white to-transparent sm:w-16"></div>
        <div className="flex w-max animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {marqueeCards.map((card, idx) => (
            <div
              key={`marquee-1-${idx}`}
              className="group/card flex w-[320px] border-[1px] border-black/20 md:w-[400px] shrink-0 items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_3px_0_0_#e5e5e5] transition-all hover:translate-y-[1px] hover:cursor-pointer hover:shadow-[0_2px_0_0_#e5e5e5] active:translate-y-[3px] active:shadow-none select-none border border-neutral-100"
            >
              {/* Image Placeholder */}
              <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-lg bg-neutral-200">
                <ImageIcon className="text-neutral-400" size={32} />
              </div>

              {/* Card Info */}
              <div className="flex flex-1 flex-col justify-center gap-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${card.typeClassName}`}
                  >
                    {card.type}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-600">{card.date}</span>
                </div>
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-neutral-1000">
                  {card.title}
                </h3>
                <p className="line-clamp-2 text-xs text-neutral-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="flex shrink-0 items-center pl-1">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-200 text-white transition-all hover:bg-primary-300 hover:shadow-[0_2px_0_0_#138bb6] active:translate-y-[2px] active:shadow-none">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex w-max animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {marqueeCards.map((card, idx) => (
            <div
              key={`marquee-2-${idx}`}
              className="group/card flex w-[320px] md:w-[400px] shrink-0 items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-4 shadow-[0_3px_0_0_#e5e5e5] transition-all hover:translate-y-[1px] hover:cursor-pointer hover:shadow-[0_2px_0_0_#e5e5e5] active:translate-y-[3px] active:shadow-none select-none"
            >
              {/* Image Placeholder */}
              <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-lg bg-neutral-200">
                <ImageIcon className="text-neutral-400" size={32} />
              </div>

              {/* Card Info */}
              <div className="flex flex-1 flex-col justify-center gap-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${card.typeClassName}`}
                  >
                    {card.type}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-600">{card.date}</span>
                </div>
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-neutral-1000">
                  {card.title}
                </h3>
                <p className="line-clamp-2 text-xs text-neutral-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="flex shrink-0 items-center pl-1">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-200 text-white transition-all hover:bg-primary-300 hover:shadow-[0_2px_0_0_#138bb6] active:translate-y-[2px] active:shadow-none">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a
        href="/berita"
        className="group flex items-center gap-1 font-sans text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500 pb-2 sm:pb-4"
      >
        Lihat Berita Lainnya
        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  )
}
