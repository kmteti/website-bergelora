'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { H3, B4 } from '@/components/elements/Typography'

/** TODO: ganti dengan pertanyaan asli dari tim Humas. */
const FAQ_ITEMS = [
  {
    value: 'berapa-lama-dibalas',
    question: 'Berapa lama pengajuan saya akan dibalas?',
    answer:
      'Placeholder. Isi dengan estimasi waktu respons tim, misalnya 2–3 hari kerja setelah formulir masuk.',
  },
  {
    value: 'dokumen-yang-disiapkan',
    question: 'Dokumen apa saja yang perlu saya siapkan?',
    answer:
      'Placeholder. Isi dengan daftar dokumen yang diminta, misalnya proposal, surat pengantar, atau company profile.',
  },
  {
    value: 'alur-setelah-mengisi',
    question: 'Apa yang terjadi setelah saya mengisi formulir?',
    answer:
      'Placeholder. Isi dengan urutan proses setelah formulir dikirim, dari verifikasi sampai penjadwalan diskusi.',
  },
  {
    value: 'salah-kategori',
    question: 'Bagaimana jika saya salah memilih kategori kerja sama?',
    answer:
      'Placeholder. Isi dengan cara mengoreksi pengajuan, misalnya cukup sampaikan lewat percakapan WhatsApp yang sudah terbuka.',
  },
  {
    value: 'kontak-divisi-langsung',
    question: 'Bisakah saya menghubungi divisi tertentu secara langsung?',
    answer:
      'Placeholder. Isi dengan penjelasan kanal resmi tiap divisi dan kapan sebaiknya lewat narahubung pusat.',
  },
]

export const Faq = () => (
  <section className="mt-20 md:mt-28">
    <div className="flex items-center gap-6 mb-10">
      <H3 className="text-neutral-900 font-heading shrink-0">FAQ</H3>
      <div className="h-[2px] w-full bg-neutral-200" />
    </div>

    <Accordion className="flex flex-col gap-4">
      {FAQ_ITEMS.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="rounded-[24px] border border-neutral-200 bg-white px-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow not-last:border-b hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
        >
          <AccordionTrigger className="gap-6 py-5 font-sans text-base font-semibold text-neutral-900 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:mt-0.5 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-primary-400">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <B4 className="font-sans text-neutral-600">{item.answer}</B4>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
)
