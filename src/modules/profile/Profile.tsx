"use client";

import { PageHeader } from "@/components/elements/PageHeader";
import { PageOverlap } from "@/components/elements/PageOverlap";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { H2, H4, B3 } from "@/components/elements/Typography";
import Image from "next/image";
import { struktur_kabinet } from "./data/data";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Profile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visiRef = useRef<HTMLDivElement>(null);
  const visiTitleRef = useRef<HTMLHeadingElement>(null);
  const visiTextRef = useRef<HTMLParagraphElement>(null);
  const misiTitleRef = useRef<HTMLHeadingElement>(null);
  const misiGridRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const strukturHeaderRef = useRef<HTMLDivElement>(null);
  const strukturTitleRef = useRef<HTMLHeadingElement>(null);
  const strukturSelectRef = useRef<HTMLDivElement>(null);
  const ketuaRef = useRef<HTMLDivElement>(null);
  const membersGridRef = useRef<HTMLDivElement>(null);

  const [selectedTahun, setSelectedTahun] = useState(struktur_kabinet[0].tahun);
  
  const currentKabinet = struktur_kabinet.find(k => k.tahun === selectedTahun) || struktur_kabinet[0];

  useGSAP(
    () => {
      // 1. Visi Entrance (Title -> Text)
      if (visiRef.current && visiTitleRef.current && visiTextRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: visiRef.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.fromTo(
          visiTitleRef.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
        ).fromTo(
          visiTextRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.6"
        );
      }

      // 2. Misi Title & 6 Cards Stagger
      if (misiGridRef.current) {
        if (misiTitleRef.current) {
          gsap.fromTo(
            misiTitleRef.current,
            { y: "115%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: misiTitleRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        gsap.fromTo(
          ".misi-card",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: misiGridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 3. Video Section Reveal
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 4. Struktur Organisasi Header
      if (strukturHeaderRef.current && strukturTitleRef.current && strukturSelectRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: strukturHeaderRef.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.fromTo(
          strukturTitleRef.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
        ).fromTo(
          strukturSelectRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.6"
        );
      }

      // 5. Ketua & Anggota Cards Stagger
      if (ketuaRef.current) {
        gsap.fromTo(
          ketuaRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ketuaRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (membersGridRef.current) {
        gsap.fromTo(
          ".member-card",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: membersGridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [selectedTahun] }
  );

  return (
    <main ref={containerRef} className="w-full relative min-h-screen bg-neutral-100">
      {/* 1. Header Full Width */}
      <PageHeader
        title="Profil KMTETI"
        description="Kabinet Navya Nirantara 2025/2026"
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
              <div ref={visiRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <div className="overflow-hidden py-2 -my-2 px-1 -mx-1 mb-4 md:mb-6">
                  <H2 ref={visiTitleRef} className="text-primary-500 font-heading will-change-transform pb-1">
                    Visi
                  </H2>
                </div>
                <div className="relative px-4 sm:px-8 py-2">
                  <p ref={visiTextRef} className="text-base sm:text-lg md:text-xl font-medium text-slate-800 leading-relaxed md:leading-loose will-change-transform">
                    &ldquo;Mewujudkan KMTETI yang kolaboratif, berdampak, berorientasi pada pengembangan karier mahasiswa, serta menjunjung tinggi rasa kekeluargaan dan keterbukaan aspirasi melalui penguatan koneksi internal dan eksternal demi menciptakan lingkungan yang produktif, efisien, dan inklusif.&rdquo;
                  </p>
                </div>
              </div>

              {/* Misi - Balanced Grid */}
              <div className="w-full">
                <div className="text-center mb-8 md:mb-12 flex justify-center">
                  <div className="overflow-hidden py-2 -my-2 px-1 -mx-1">
                    <H2 ref={misiTitleRef} className="text-primary-500 font-heading will-change-transform pb-1">
                      Misi
                    </H2>
                  </div>
                </div>
                <div ref={misiGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
                      className="misi-card will-change-transform flex flex-col gap-2.5 p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-white/80 shadow-xs hover:-translate-y-1.5 hover:shadow-md transition-all duration-300"
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
        <div ref={videoRef} className="w-full relative aspect-video mb-20 md:mb-32 z-10 will-change-transform">
          <iframe
            src="https://www.youtube.com/embed/GLklKUK0PBw"
            title="KMTETI Profile Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-none"
          ></iframe>
        </div>

        <DefaultLayout className="relative z-10 py-0 pb-32">
          {/* Struktur Organisasi Section */}
          <div ref={strukturHeaderRef} className="flex flex-col items-center justify-center mb-12">
            <div className="overflow-hidden py-2 -my-2 px-1 -mx-1 mb-6">
              <H2 ref={strukturTitleRef} className="text-center text-primary-500 font-heading will-change-transform pb-1">
                Struktur Organisasi
              </H2>
            </div>
            <div ref={strukturSelectRef} className="w-fit min-w-[200px] will-change-transform">
              <Select
                value={selectedTahun}
                onValueChange={(val) => val && setSelectedTahun(val)}
              >
                <SelectTrigger className="w-full h-11 bg-white hover:bg-neutral-50 border border-neutral-200/80 rounded-full px-6 text-neutral-700 font-medium shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-primary-500/30 gap-3">
                  <SelectValue placeholder={`Kabinet ${selectedTahun}`}>
                    {`Kabinet ${selectedTahun}`}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent
                  alignItemWithTrigger={false}
                  className="rounded-2xl border border-neutral-200/60 shadow-xl bg-white p-2 min-w-[200px]"
                >
                  {struktur_kabinet.map((item) => (
                    <SelectItem
                      key={item.tahun}
                      value={item.tahun}
                      className="rounded-xl hover:bg-primary-50 hover:text-primary-600 py-2.5 px-3 font-medium cursor-pointer transition-colors"
                    >
                      Kabinet {item.tahun}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* 1. Ketua Pengurus Harian (Centered Card) */}
          {currentKabinet.member.length > 0 && (
            <div ref={ketuaRef} className="flex justify-center mb-14 md:mb-16 will-change-transform">
              <div className="flex flex-col items-center text-center group w-full max-w-[240px] sm:max-w-[260px]">
                <div className="relative w-full aspect-[4/5] mb-4">
                  {/* Background kotak melengkung */}
                  <div className="absolute bottom-0 left-0 right-0 aspect-square bg-[#E8EDF2] rounded-[28px] sm:rounded-[32px] shadow-xs group-hover:shadow-md transition-shadow duration-300"></div>
                  {/* Gambar orang */}
                  <div className="absolute inset-0 rounded-b-[28px] sm:rounded-b-[32px] overflow-hidden z-10">
                    <Image
                      src={currentKabinet.member[0].foto}
                      alt={currentKabinet.member[0].nama}
                      fill
                      style={{ transformOrigin: "40% 42%", transform: "scale(2.3)" }}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <H4 className="font-heading text-lg md:text-xl font-bold text-neutral-900 leading-tight mb-1 text-center">
                  {currentKabinet.member[0].nama}
                </H4>
                <B3 className="font-sans text-sm md:text-base text-neutral-500 text-center">
                  {currentKabinet.member[0].jabatan}
                </B3>
              </div>
            </div>
          )}
          
          {/* 2. Grid Anggota Lainnya */}
          <div ref={membersGridRef} className="grid grid-cols-2 md:grid-cols-3 mb-50 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {currentKabinet.member.slice(1).map((member, index) => (
              <div key={index} className="member-card will-change-transform flex flex-col group">
                <div className="relative w-full aspect-[4/5] mb-4">
                  {/* Background kotak melengkung (di belakang) */}
                  <div className="absolute bottom-0 left-0 right-0 aspect-square bg-[#E8EDF2] rounded-[28px] sm:rounded-[32px] shadow-xs group-hover:shadow-md transition-shadow duration-300"></div>
                  {/* Gambar orang (kepala menyembul di atas, badan masuk rapi di lengkungan bawah) */}
                  <div className="absolute inset-0 rounded-b-[28px] sm:rounded-b-[32px] overflow-hidden z-10">
                    <Image
                      src={member.foto}
                      alt={member.nama}
                      fill
                      className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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