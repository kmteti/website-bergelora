'use client'

import React, { useRef } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { H3, B4 } from '@/components/elements/Typography'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface FaqItem {
  question: string
  answer: string
}

const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Berapa lama pengajuan saya akan dibalas?',
    answer: 'Estimasi waktu respons tim Humas KMTETI adalah 1–3 hari kerja setelah formulir dikirimkan.',
  },
  {
    question: 'Dokumen apa saja yang perlu saya siapkan?',
    answer: 'Anda dapat menyiapkan proposal kerja sama (PDF), surat permohonan resmi, atau company profile instansi Anda.',
  },
  {
    question: 'Apa yang terjadi setelah saya mengisi formulir?',
    answer: 'Formulir Anda akan tersimpan di sistem kami dan Anda akan langsung diarahkan ke percakapan WhatsApp resmi dengan Narahubung KMTETI untuk diskusi lebih lanjut.',
  },
  {
    question: 'Bagaimana jika saya salah memilih kategori kerja sama?',
    answer: 'Tidak perlu khawatir, Anda dapat langsung menginformasikan pengoreksian tersebut kepada Narahubung saat percakapan WhatsApp dibuka.',
  },
  {
    question: 'Bisakah saya menghubungi divisi tertentu secara langsung?',
    answer: 'Disarankan untuk melalui formulir kontak utama ini terlebih dahulu agar pesan Anda terdata dan disalurkan ke divisi/BSO yang tepat secara cepat.',
  },
]

export const Faq = ({ items }: { items?: FaqItem[] }) => {
  const faqList = items && items.length > 0 ? items : DEFAULT_FAQ_ITEMS
  const faqRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!faqRef.current) return

      gsap.fromTo(
        '.faq-item',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 88%',
            once: true,
          },
        },
      )
    },
    { scope: faqRef },
  )

  return (
    <section ref={faqRef} className="mt-20 md:mt-28">
      <div className="flex items-center gap-6 mb-10">
        <H3 className="text-neutral-900 font-heading shrink-0">FAQ</H3>
        <div className="h-[2px] w-full bg-neutral-200" />
      </div>

      <Accordion className="flex flex-col gap-4">
        {faqList.map((item, idx) => (
          <div key={idx} className="faq-item will-change-transform">
            <AccordionItem
              value={`faq-${idx}`}
              className="rounded-[24px] border border-neutral-200 bg-white px-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow not-last:border-b hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
            >
              <AccordionTrigger className="gap-6 py-5 font-sans text-base font-semibold text-neutral-900 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:mt-0.5 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-primary-400">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <B4 className="font-sans text-neutral-600">{item.answer}</B4>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </section>
  )
}
