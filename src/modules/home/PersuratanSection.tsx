'use client'

import { useState } from 'react'
import { LabelKMTETI } from '@/components/archive/LabelKMTETI'
import { ArrowRight, Grid, FileText } from 'lucide-react'
import { Batik } from '@/components/archive/BatikBackground'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const tabs = [
  {
    id: 'sop-kesekretariatan',
    title: 'SOP Kesekretariatan',
    header: 'SOP Kesekretariatan',
    documents: [
      { title: 'Materi Kesekretariatan KMTETI', link: '#' },
      { title: 'Lembar Pertanggungjawaban', link: '#' },
      { title: 'Proposal', link: '#' },
      { title: 'Sistem Desain KMTETI', link: '#' },
    ],
  },
  {
    id: 'peminjaman',
    title: 'Peminjaman Inventaris',
    header: 'Peminjaman Inventaris',
    documents: [
      { title: 'Form Peminjaman Barang', link: '#' },
      { title: 'Daftar Inventaris Tersedia', link: '#' },
      { title: 'SOP Peminjaman', link: '#' },
      { title: 'Surat Keterangan Pinjam', link: '#' },
    ],
  },
  {
    id: 'template',
    title: 'Template Surat',
    header: 'Template Surat',
    documents: [
      { title: 'Template Surat Undangan', link: '#' },
      { title: 'Template Peminjaman Ruang', link: '#' },
      { title: 'Template Keterangan Aktif', link: '#' },
      { title: 'Template Kop Surat', link: '#' },
    ],
  },
]

export default function PersuratanSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const activeContent = tabs.find((t) => t.id === activeTab)

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-100 py-20"
      data-aos="fade-up"
    >
      <Batik className="batik-5" isWhite={true} />

      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        {/* Header Label */}
        <LabelKMTETI
          type="kmteti-logotype-short-white"
          isKMTETI={true}
          className="mb-12 justify-center relative z-20"
          kmtetiProps={{ width: 128, height: 32, className: 'h-8 w-auto' }}
        >
          <h2 className="text-xl sm:text-2xl font-bold font-sans leading-tight flex flex-row items-center gap-x-2">
            Persuratan
          </h2>
        </LabelKMTETI>

        {/* Top-Tab Folder Container */}
        <div className="w-full max-w-5xl flex flex-col relative z-20">
          {/* Tabs Row: Negative margin bottom so it overlaps the folder body */}
          {/* Tabs Row: Negative margin bottom so it overlaps the folder body */}
          <div className="flex flex-wrap justify-start gap-0 overflow-hidden relative z-10 -mb-[2px] px-0 sm:px-0 pt-2">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  // Dynamic z-index: active tab is in front of the folder body (z-30), inactive tabs are behind (z-10)
                  // Inactive tabs translate down slightly to look like they are deeper in the folder
                  className={`group shrink-0 pl-6 pr-8 sm:pl-8 sm:pr-10 pt-4 pb-5 font-bold text-sm sm:text-base transition-all duration-500 ease-out relative outline-none ${
                    idx !== 0 ? '-ml-4' : ''
                  } ${
                    isActive
                      ? 'text-white z-30 translate-y-0'
                      : 'text-white/70 hover:text-white z-10 translate-y-2 hover:translate-y-1'
                  }`}
                >
                  {/* Background wrapper with mask for the straight left side */}
                  <div className="absolute inset-0 overflow-hidden rounded-tl-xl">
                    {/* Slanted background for the diagonal right edge */}
                    <div
                      className={`absolute inset-0 origin-bottom-right rounded-tr-md transition-all duration-500 ease-out ${
                        isActive ? 'bg-primary-300' : 'bg-primary-400 group-hover:bg-primary-300/80'
                      }`}
                      style={{ transform: 'skewX(15deg)' }}
                    ></div>
                  </div>

                  {/* Tab Text */}
                  <span className="relative z-10">{tab.title}</span>
                </button>
              )
            })}
          </div>

          {/* Folder Body (Primary 300) */}
          {/* Thin padding to simulate thin cardboard sleeve of a real folder */}
          <div className="w-full bg-primary-300 p-2 sm:p-3 relative z-20 min-h-[450px] flex flex-col transition-all duration-500 ease-out rounded-b-2xl rounded-tr-2xl rounded-tl-none">
            {/* Inner White Document / Paper Container */}
            <div className="w-full h-full flex-1 bg-white rounded-xl p-6 sm:p-8 md:p-10 flex flex-col border border-neutral-100">
              <div
                className="relative z-10 h-full flex flex-col transition-opacity duration-500 ease-in-out"
                key={activeTab}
              >
                {/* Content Header */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h3 className="text-2xl sm:text-3xl font-black text-primary-500 tracking-tight mb-1 flex items-center gap-2">
                    {activeContent?.header}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-500 font-medium mb-8">
                    Temukan dokumen yang kamu butuhkan
                  </p>
                </div>

                {/* Grid of Documents */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-75 fill-mode-backwards">
                  {activeContent?.documents.map((doc, idx) => (
                    <a
                      href={doc.link}
                      key={idx}
                      className="bg-white hover:bg-neutral-50 rounded-xl p-4 sm:p-5 flex items-center justify-between transition-all duration-500 ease-out group border border-neutral-200 hover:border-primary-200 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-primary-50 text-primary-400 p-2 sm:p-3 rounded-lg group-hover:bg-primary-100 group-hover:text-primary-500 transition-colors duration-500">
                          <FileText size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <span className="font-bold text-sm sm:text-base text-neutral-700 group-hover:text-primary-500 transition-colors duration-500 pr-2">
                          {doc.title}
                        </span>
                      </div>
                      <div className="text-neutral-300 group-hover:text-primary-500 transition-colors duration-500 shrink-0 transform group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={20} />
                      </div>
                    </a>
                  ))}
                </div>

                {/* Bottom Button */}
                <div className="mt-auto flex justify-end animate-in fade-in duration-500 delay-200 ease-out fill-mode-both">
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: 'default', size: 'lg', className: 'w-fit' }),
                    )}
                  >
                    <Grid size={18} className="mr-2" /> Lihat Semua Persuratan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
