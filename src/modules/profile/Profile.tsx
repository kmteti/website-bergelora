"use client";

import { PageHeader } from "@/components/elements/PageHeader";
import { PageOverlap } from "@/components/elements/PageOverlap";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { H2, H4, B3 } from "@/components/elements/Typography";
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
        {/* Visi & Misi Section with Gradient and Glow */}
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#EAF9FF] to-[#E1F3FA]">
          <div className="absolute bottom-[-80%] -left-[-10%] w-[40%] aspect-square rounded-full bg-[#C7E07C] opacity-60 blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[-80%] -right-[-10%] w-[40%] aspect-square rounded-full bg-[#64CAEF] opacity-60 blur-[120px] pointer-events-none z-0" />
          
          <DefaultLayout className="relative z-10 pt-20 md:pt-28 pb-20 md:pb-28">
            {/* Visi & Misi Section */}
            <div className="flex flex-col gap-14 md:gap-20">
              {/* Visi - Hero Centered */}
              <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <H2 className="mb-4 md:mb-6 text-primary-500 font-heading">Visi</H2>
                <div className="relative px-4 sm:px-8 py-2">
                  <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 leading-relaxed md:leading-loose">
                    &ldquo;Mewujudkan KMTETI yang kolaboratif, berdampak, berorientasi pada pengembangan karier mahasiswa, serta menjunjung tinggi rasa kekeluargaan dan keterbukaan aspirasi melalui penguatan koneksi internal dan eksternal demi menciptakan lingkungan yang produktif, efisien, dan inklusif.&rdquo;
                  </p>
                </div>
              </div>

              {/* Misi - Balanced Grid */}
              <div className="w-full">
                <div className="text-center mb-8 md:mb-12">
                  <H2 className="text-primary-500 font-heading">Misi</H2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {[
                    "Membangun jaringan alumni dan pengembangan karier yang nyata untuk meningkatkan peluang dan kompetensi mahasiswa.",
                    "Menumbuhkan rasa kekeluargaan dan rasa memiliki di dalam lingkungan KMTETI melalui kegiatan dan interaksi yang inklusif.",
                    "Menegakkan komitmen dan profesionalisme dalam kepengurusan sebagai bentuk tanggung jawab organisasi.",
                    "Meningkatkan efisiensi dan optimalisasi program kerja agar lebih tepat guna dan berkelanjutan.",
                    "Mendorong kolaborasi antar divisi untuk menciptakan program kerja yang sinergis dan berdampak luas.",
                    "Menjaring, mengelola, dan menyalurkan aspirasi mahasiswa DTETI secara aktif dan berkelanjutan sebagai dasar perumusan kebijakan serta arah gerak KMTETI."
                  ].map((misi, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col gap-2.5 p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-white/80 shadow-xs hover:-translate-y-1.5 hover:shadow-md transition-all duration-300"
                    >
                      <span className="font-heading font-bold text-2xl text-primary-500 select-none">
                        {idx + 1}.
                      </span>
                      <B3 className="text-slate-700 leading-relaxed font-medium">
                        {misi}
                      </B3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DefaultLayout>
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