"use client";

import { PageHeader } from "@/components/elements/PageHeader";
import { PageOverlap } from "@/components/elements/PageOverlap";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { H2, H4, B2, B3 } from "@/components/elements/Typography";
import Image from "next/image";
import { struktur_kabinet } from "./data/data";
import { useState } from "react";

export default function Profile() {
  const [selectedTahun, setSelectedTahun] = useState(struktur_kabinet[0].tahun);
  
  const currentKabinet = struktur_kabinet.find(k => k.tahun === selectedTahun) || struktur_kabinet[0];

  return (
    <main className="w-full relative min-h-screen bg-neutral-100">
      {/* 1. Header Full Width */}
      <PageHeader
        title="Profil KMTETI"
        description="Kabinet Namanya Apa Tahun 2025/2026"
        imageSrc="/images/profile/profileheader.webp"
      />

      {/* 2. Container Overlap (FULL WIDTH) */}
      <PageOverlap className="bg-white min-h-[500px] relative">
        <DefaultLayout className="relative z-10 pt-14 md:pt-16 pb-22 md:pb-24">
          
          {/* Visi & Misi Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-10">
            <div>
                <H2 className="mb-5 text-primary-500">Visi</H2>
                              <B2 className="leading-relaxed">
                At KMTETI, a spirit of optimism and possibility energizes our mission
                of discovery and learning. Here you&apos;ll find a place of intellectual
                expansiveness, wide-ranging perspectives, and freedom to explore
                new lines of thinking.
              </B2>
            </div>
            <div>
                <H2 className="mb-5 text-primary-500">Misi</H2>
                              <B2 className="leading-relaxed">
                At KMTETI, a spirit of optimism and possibility energizes our mission
                of discovery and learning. Here you&apos;ll find a place of intellectual
                expansiveness, wide-ranging perspectives, and freedom to explore
                new lines of thinking.
              </B2>
            </div>
          </div>

        </DefaultLayout>
        
        {/* Glow Effects */}
        <div className="absolute left-0 right-0 w-full flex justify-between z-0 pointer-events-none">
          <div className="relative w-full aspect-square scale-125 md:scale-[2] -left-12 md:-left-[18.75rem] origin-left -translate-y-[15%] md:-translate-y-[50%]">
            <Image src="/images/biruglow.svg" alt="Biru Glow" fill className="object-cover md:object-contain object-left" />
          </div>
          <div className="relative w-full aspect-square scale-125 md:scale-[2] -right-12 md:-right-[18.75rem] origin-right -translate-y-[15%] md:-translate-y-[50%]">
            <Image src="/images/hijauglow.svg" alt="Hijau Glow" fill className="object-cover md:object-contain object-right" />
          </div>
        </div>

        {/* YouTube Video Section within overlap */}
        <div className="w-full relative aspect-video mb-20 md:mb-32 z-10">
          <iframe
            src="https://www.youtube.com/embed/8dmi2DqeLDs"
            title="KMTETI Profile Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-none"
          ></iframe>
        </div>

        <DefaultLayout className="relative z-10 py-0 pb-32">
          {/* Struktur Organisasi Section */}
          <div className="flex flex-col items-center justify-center mb-12">
            <H2 className="mb-6 text-center text-primary-500 font-heading">Struktur Organisasi</H2>
            <div className="relative">
              <select
                value={selectedTahun}
                onChange={(e) => setSelectedTahun(e.target.value)}
                className="appearance-none bg-white border border-neutral-300 text-neutral-700 py-2 pl-6 pr-12 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans cursor-pointer"
              >
                {struktur_kabinet.map((item) => (
                  <option key={item.tahun} value={item.tahun}>
                    Kabinet {item.tahun}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 mb-50 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {currentKabinet.member.map((member, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative w-full aspect-[4/5] mb-4">
                  {/* Background kotak melengkung (absolute, bentuk persegi / aspect-square, border radius 32px) */}
                  <div className="absolute bottom-0 left-0 right-0 aspect-square bg-[#e3e3e3] rounded-[32px]"></div>
                  {/* Gambar orang (absolute fill, object-cover, rounded bawah) */}
                  <Image
                    src={member.foto}
                    alt={member.nama}
                    fill
                    className="object-cover object-bottom relative z-10 rounded-b-[32px]"
                  />
                </div>
                <H4 className="font-heading text-lg md:text-xl font-bold text-neutral-900 leading-tight mb-1">
                  {member.nama}
                </H4>
                <B3 className="font-sans text-sm md:text-base text-neutral-500">
                  {member.jabatan}
                </B3>
              </div>
            ))}
          </div>
        </DefaultLayout>

      </PageOverlap>
    </main>
  );
}