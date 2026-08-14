'use client'

import React, { useState, useMemo, useRef } from 'react'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { H2, H3, H5, B2, B4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ServiceCard } from '@/modules/layanan/components/ServiceCard'
import { StepIndicator } from '@/components/elements/StepIndicator'
import { Faq } from '@/modules/kontak/components/Faq'
import { PANDUAN_TOPICS } from '@/modules/kontak/data/panduan'
import { NARAHUBUNG, type Narahubung } from '@/modules/kontak/data/narahubung'
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const Kontak = () => {
  // Step/Tahap state (3 steps total)
  const [step, setStep] = useState(1)
  // Tiga tahap tampilan:
  //   form    -> pengisian 3 langkah
  //   contact -> memilih narahubung (data belum dikirim ke mana pun)
  //   done    -> konfirmasi setelah data benar-benar terkirim
  const [stage, setStage] = useState<'form' | 'contact' | 'done'>('form')
  const [selectedContact, setSelectedContact] = useState<Narahubung | null>(null)
  const [saveError, setSaveError] = useState(false)

  // Ref, bukan state: pengguna bisa mengklik kartu narahubung kedua sebelum
  // re-render selesai, dan itu akan membuat record ganda.
  const hasSavedRef = useRef(false)

  // Multi-step form state
  const [formData, setFormData] = useState({
    nama: '',
    instansi: '',
    jenisInstansi: '',
    kategori: '',
    divisi: '',
    deskripsi: '',
    proposal: '',
    whatsapp: '',
    email: '',
  })

  // Form input handler
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Steps configuration
  const steps = useMemo(
    () => [
      { number: 1, label: 'Tahap 1', subtitle: 'Identitas Profil' },
      { number: 2, label: 'Tahap 2', subtitle: 'Detail Kebutuhan' },
      { number: 3, label: 'Tahap 3', subtitle: 'Kontak & Redirect' },
    ],
    [],
  )

  // Validation to enable/disable "Next" / "Submit" button
  const isStepValid = useMemo(() => {
    switch (step) {
      case 1:
        return formData.nama.trim() !== '' && formData.instansi.trim() !== ''
      case 2:
        return formData.kategori.trim() !== '' && formData.deskripsi.trim() !== ''
      case 3:
        return formData.whatsapp.trim() !== ''
      default:
        return true
    }
  }, [step, formData])

  // WhatsApp deep link untuk satu narahubung, berisi ringkasan isian form
  const buildWaUrl = (contact: Narahubung) => {
    const divisiLine = formData.divisi ? `\n*Divisi Dituju:* ${formData.divisi}` : ''
    const text = `Halo Kak ${contact.nama}, saya *${formData.nama}* dari *${formData.instansi}*.\n\n*Kategori:* ${formData.kategori}${divisiLine}\n*Detail:* ${formData.deskripsi}\n\nSaya sudah mengisi form di website, mohon informasinya terima kasih.`
    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
  }

  // Tombol submit hanya membuka pemilihan narahubung. Data belum dikirim ke
  // mana pun sampai salah satu kontak dipilih.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isStepValid) return

    setStage('contact')
    setSaveError(false)
  }

  // Klik kartu narahubung: baru di sinilah data disimpan ke Payload + Sheet.
  //
  // Sengaja tanpa preventDefault. Tag <a target="_blank"> tetap membuka WhatsApp
  // lewat navigasi bawaan browser, jadi gesture user tidak terputus dan popup
  // blocker tidak ikut campur. fetch berjalan berdampingan dengan keepalive
  // supaya tetap tuntas meski tab berpindah ke WhatsApp.
  const handleContactSelect = (contact: Narahubung) => {
    if (hasSavedRef.current) return
    hasSavedRef.current = true

    // Ditunda satu macrotask. React memproses klik sebagai discrete event dan
    // mem-flush state secara sinkron di akhir handler, yaitu SEBELUM browser
    // menjalankan aksi bawaan tag <a>. Kalau kartunya ter-unmount lebih dulu,
    // tab WhatsApp berisiko tidak jadi terbuka.
    window.setTimeout(() => {
      setSelectedContact(contact)
      setStage('done')
    }, 0)

    fetch('/kontak/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, narahubung: contact.nama }),
      keepalive: true,
    })
      .then((res) => {
        if (!res.ok) setSaveError(true)
      })
      .catch(() => setSaveError(true))
  }

  // Reset form
  const handleReset = () => {
    setFormData({
      nama: '',
      instansi: '',
      jenisInstansi: '',
      kategori: '',
      divisi: '',
      deskripsi: '',
      proposal: '',
      whatsapp: '',
      email: '',
    })
    setStep(1)
    setStage('form')
    setSelectedContact(null)
    setSaveError(false)
    hasSavedRef.current = false
  }

  return (
    <main className="w-full relative min-h-screen bg-white">
      {/* 1. Header Full Width */}
      <PageHeader
        title="Terima Kasih atas Perhatian Anda"
        description="Narahubung KMTETI"
        imageSrc="/images/layanan/layanan-header.webp"
      />

      {/* 2. Container Overlap (FULL WIDTH) */}
      <PageOverlap className="bg-white min-h-[500px]">
        <DefaultLayout className="pt-14 md:pt-16 pb-12">
          {/* Section: Panduan */}
          <section id="panduan" className="mb-12 scroll-mt-28">
            <div className="flex items-center gap-6 mb-10">
              <H3 className="text-neutral-900 font-heading shrink-0">Panduan</H3>
              <div className="h-[2px] w-full bg-neutral-200" />
            </div>

            {/* Grid of ServiceCards (same component as /layanan) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PANDUAN_TOPICS.map((topic) => (
                <ServiceCard
                  key={topic.slug}
                  title={topic.title}
                  description={topic.description}
                  href={`/kontak/panduan/${topic.slug}`}
                />
              ))}
            </div>
          </section>
        </DefaultLayout>

        {/* Section: Formulir Komunikasi Eksternal (FULL SCREEN WIDTH with rounded corners) */}
        <section className="w-full bg-[#E1F3FA] pt-20 md:pt-28 pb-16 md:pb-24 flex flex-col items-center relative overflow-hidden rounded-[40px] border-[2px] border-white shadow-[0_0_50px_rgba(0,0,0,0.05)] -mt-16 z-20">
          {/* Background Glow Blobs */}
          <div className="absolute -top-20 -left-20 w-[350px] md:w-[450px] aspect-square rounded-full bg-secondary-200 blur-[100px] md:blur-[140px] opacity-60 pointer-events-none z-0" />
          <div className="absolute -bottom-20 -right-20 w-[350px] md:w-[450px] aspect-square rounded-full bg-primary-200 blur-[100px] md:blur-[140px] opacity-60 pointer-events-none z-0" />

          <H2 className="text-primary-500 font-heading text-center mb-6 relative z-10">
            Formulir Komunikasi Eksternal
          </H2>

          {/* Pengarah: baca booklet dulu sebelum mengisi form */}
          <div className="container mx-auto px-4 md:px-8 max-w-[760px] relative z-10 mb-8">
            <div className="flex items-start gap-3.5 rounded-2xl border border-primary-100 bg-white/70 px-5 py-4 text-left backdrop-blur-sm">
              <BookOpen className="mt-0.5 size-5 shrink-0 text-primary-400" aria-hidden="true" />
              <B4 className="font-sans text-neutral-600">
                Sebelum mengisi, silakan pilih salah satu{' '}
                <a
                  href="#panduan"
                  className="font-semibold text-primary-500 underline underline-offset-2 hover:text-primary-400"
                >
                  panduan di bagian atas halaman ini
                </a>{' '}
                dan baca bookletnya terlebih dahulu.
              </B4>
            </div>
          </div>

          {/* Form Card wrapper for centering (made more compact to avoid excessive whitespace) */}
          <div className="container mx-auto px-4 md:px-8 max-w-[760px] relative z-10">
            <div className="w-full bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/60 p-6 md:p-8 flex flex-col">
              {stage === 'form' ? (
                <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
                  {/* Reusable StepIndicator Component */}
                  <StepIndicator
                    currentStep={step}
                    totalSteps={steps.length}
                    onChangeStep={setStep}
                    className="mb-8"
                  />

                  {/* Step Heading */}
                  <div className="text-center mb-6">
                    <H5 className="text-primary-500 font-heading font-semibold">Tahap {step}</H5>
                    <B4 className="text-neutral-500 font-sans mt-1">{steps[step - 1].subtitle}</B4>
                  </div>

                  {/* Step Form Content */}
                  <div className="flex flex-col gap-5 flex-grow min-h-[200px]">
                    {step === 1 && (
                      <>
                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Nama Lengkap / Penanggung Jawab *
                          </label>
                          <Input
                            placeholder="Contoh: Budi Santoso"
                            value={formData.nama}
                            required
                            onChange={(e) => handleInputChange('nama', e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Nama Instansi / Organisasi / Perusahaan *
                          </label>
                          <Input
                            placeholder="Contoh: PT Telkom Indonesia / BEM KM UGM"
                            value={formData.instansi}
                            required
                            onChange={(e) => handleInputChange('instansi', e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Jenis Instansi (Opsional)
                          </label>
                          <Select
                            value={formData.jenisInstansi}
                            onValueChange={(val) => handleInputChange('jenisInstansi', val ?? '')}
                          >
                            <SelectTrigger
                              size="lg"
                              className="w-full h-12 bg-neutral-100/50 hover:bg-neutral-200/50 border border-neutral-200 rounded-full px-6 text-neutral-800 font-sans font-medium shadow-none transition-all focus-visible:ring-4 focus-visible:ring-primary/10"
                            >
                              <SelectValue placeholder="Pilih Jenis Instansi" />
                            </SelectTrigger>
                            <SelectContent
                              alignItemWithTrigger={false}
                              className="rounded-xl border-none shadow-xl bg-white p-2.5 z-50 font-sans"
                            >
                              {[
                                'Perusahaan/Corporate',
                                'Startup',
                                'Media Partner',
                                'Ormawa/Komunitas',
                                'Government/Edukasi',
                                'Lainnya',
                              ].map((option) => (
                                <SelectItem
                                  key={option}
                                  value={option}
                                  className="rounded-lg hover:bg-neutral-100 py-2.5"
                                >
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Kategori Kerjasama *
                          </label>
                          <Select
                            value={formData.kategori}
                            onValueChange={(val) => handleInputChange('kategori', val ?? '')}
                          >
                            <SelectTrigger
                              size="lg"
                              className="w-full h-12 bg-neutral-100/50 hover:bg-neutral-200/50 border border-neutral-200 rounded-full px-6 text-neutral-800 font-sans font-medium shadow-none transition-all focus-visible:ring-4 focus-visible:ring-primary/10"
                            >
                              <SelectValue placeholder="Pilih Kategori Kerjasama" />
                            </SelectTrigger>
                            <SelectContent
                              alignItemWithTrigger={false}
                              className="rounded-xl border-none shadow-xl bg-white p-2.5 z-50 font-sans"
                            >
                              {[
                                { val: 'Partnership', label: 'Partnership' },
                                { val: 'Sponsorship', label: 'Sponsorship' },
                                { val: 'Media Relation', label: 'Media Relation' },
                                {
                                  val: 'Organizational Inquiries',
                                  label: 'Organizational Inquiries',
                                },
                                { val: 'Other', label: 'Other' },
                              ].map((option) => (
                                <SelectItem
                                  key={option.val}
                                  value={option.val}
                                  className="rounded-lg hover:bg-neutral-100 py-2.5"
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Divisi yang Dituju (Opsional)
                          </label>
                          <Select
                            value={formData.divisi}
                            onValueChange={(val) => handleInputChange('divisi', val ?? '')}
                          >
                            <SelectTrigger
                              size="lg"
                              className="w-full h-12 bg-neutral-100/50 hover:bg-neutral-200/50 border border-neutral-200 rounded-full px-6 text-neutral-800 font-sans font-medium shadow-none transition-all focus-visible:ring-4 focus-visible:ring-primary/10"
                            >
                              <SelectValue placeholder="Pilih Divisi (kosongkan jika belum tahu)" />
                            </SelectTrigger>
                            <SelectContent
                              alignItemWithTrigger={false}
                              className="rounded-xl border-none shadow-xl bg-white p-2.5 z-50 font-sans"
                            >
                              {[
                                'Electropreneur',
                                'HUMAS',
                                'SOSMAS',
                                'Workshop',
                                'Minat & Bakat',
                                'ADKESMA',
                                'INFOKOM',
                                'BPO',
                              ].map((option) => (
                                <SelectItem
                                  key={option}
                                  value={option}
                                  className="rounded-lg hover:bg-neutral-100 py-2.5"
                                >
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Detail Kebutuhan / Pesan *
                          </label>
                          <textarea
                            placeholder="Tuliskan ringkasan ajakan kerja sama, timeline, atau hal yang ingin didiskusikan..."
                            value={formData.deskripsi}
                            required
                            onChange={(e) => handleInputChange('deskripsi', e.target.value)}
                            className="w-full min-h-[120px] rounded-3xl border border-neutral-200 bg-neutral-100/50 p-6 font-sans text-base text-neutral-800 placeholder:text-neutral-400 outline-none transition-all duration-200 hover:border-neutral-300 focus-visible:border-primary-300 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-300 md:text-sm"
                          />
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Link Proposal / Brief (Opsional)
                          </label>
                          <Input
                            type="url"
                            placeholder="https://drive.google.com/..."
                            value={formData.proposal}
                            onChange={(e) => handleInputChange('proposal', e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Nomor WhatsApp *
                          </label>
                          <Input
                            type="tel"
                            placeholder="Contoh: 081234567890"
                            value={formData.whatsapp}
                            required
                            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                          <label className="text-sm font-semibold text-neutral-800 font-sans">
                            Email Penanggung Jawab (Opsional)
                          </label>
                          <Input
                            type="email"
                            placeholder="nama@instansi.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>

                        {/* Summary Box */}
                        <div className="bg-[#E1F3FA]/30 border border-primary-100 rounded-3xl p-6 flex flex-col gap-3.5 text-left font-sans text-sm mt-4">
                          <h4 className="font-semibold text-primary-500 text-base border-b border-primary-100/40 pb-2 mb-1">
                            Review Pengajuan
                          </h4>
                          <div className="grid grid-cols-3 gap-2 py-1 border-b border-neutral-100">
                            <span className="text-neutral-400 font-semibold">Nama:</span>
                            <span className="col-span-2 text-neutral-800 font-medium">
                              {formData.nama}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 py-1 border-b border-neutral-100">
                            <span className="text-neutral-400 font-semibold">Instansi:</span>
                            <span className="col-span-2 text-neutral-800 font-medium">
                              {formData.instansi}
                            </span>
                          </div>
                          <div
                            className={cn(
                              'grid grid-cols-3 gap-2 py-1',
                              formData.divisi && 'border-b border-neutral-100',
                            )}
                          >
                            <span className="text-neutral-400 font-semibold">Kategori:</span>
                            <span className="col-span-2 text-neutral-800 font-medium">
                              {formData.kategori}
                            </span>
                          </div>
                          {formData.divisi && (
                            <div className="grid grid-cols-3 gap-2 py-1">
                              <span className="text-neutral-400 font-semibold">Divisi:</span>
                              <span className="col-span-2 text-neutral-800 font-medium">
                                {formData.divisi}
                              </span>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Step Buttons */}
                  <div className="flex items-center justify-between mt-12 border-t border-neutral-100 pt-6">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="black"
                        onClick={() => setStep((prev) => prev - 1)}
                        className="rounded-xl px-5 h-11 bg-[#333333] hover:bg-[#4d4d4d] flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4 text-white" />
                        Back
                      </Button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <Button
                        type="button"
                        variant="secondary"
                        disabled={!isStepValid}
                        onClick={() => setStep((prev) => prev + 1)}
                        className="rounded-xl px-5 h-11 bg-[#abd03b] hover:bg-[#9cbd33] text-white flex items-center gap-2 ml-auto"
                      >
                        Next
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={!isStepValid}
                        className="rounded-xl px-6 h-11 bg-secondary text-white hover:bg-secondary-600 flex items-center gap-2 ml-auto font-sans font-semibold"
                      >
                        Kirim & Pilih Narahubung
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Button>
                    )}
                  </div>
                </form>
              ) : stage === 'contact' ? (
                /* Tahap pemilihan narahubung — data belum dikirim ke mana pun */
                <div className="flex flex-col items-center text-center py-8">
                  <span className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#abd03b]/15 text-[#7fa32c]">
                    <MessageCircle className="size-8" aria-hidden="true" />
                  </span>
                  <H3 className="text-primary font-heading mb-3">Pilih Narahubung</H3>
                  <B2 className="text-neutral-600 max-w-md mb-8 leading-relaxed font-sans">
                    Isian Anda sudah lengkap. Pilih salah satu narahubung untuk melanjutkan diskusi
                    lewat WhatsApp. Ringkasan isian Anda akan otomatis tertulis di pesannya.
                  </B2>

                  <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4">
                    {NARAHUBUNG.map((contact) => (
                      <a
                        key={contact.id}
                        href={buildWaUrl(contact)}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => handleContactSelect(contact)}
                        className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 text-left no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#abd03b] hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-100"
                      >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#abd03b]/15 text-[#7fa32c] transition-colors group-hover:bg-[#abd03b]/25">
                          <MessageCircle className="size-5" aria-hidden="true" />
                        </span>
                        <span className="flex min-w-0 flex-col">
                          <span className="font-sans text-sm font-semibold text-neutral-900 truncate">
                            {contact.nama}
                          </span>
                          {contact.keterangan && (
                            <span className="font-sans text-xs text-neutral-500 truncate">
                              {contact.keterangan}
                            </span>
                          )}
                        </span>
                        <ArrowRight
                          className="ml-auto size-4 shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#abd03b]"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>

                  {/* Jalan keluar kalau pengaju ingin membetulkan isiannya dulu */}
                  <button
                    type="button"
                    onClick={() => setStage('form')}
                    className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-neutral-500 transition-colors hover:text-primary-500"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Kembali ubah isian
                  </button>
                </div>
              ) : (
                /* Tahap selesai — data sudah dikirim ke Payload + Google Sheet */
                <div className="flex flex-col items-center text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-[#abd03b] mb-6" />
                  <H3 className="text-primary font-heading mb-3">Formulir Berhasil Dikirim!</H3>
                  <B2 className="text-neutral-600 max-w-md mb-8 leading-relaxed font-sans">
                    Terima kasih atas pengajuan Anda. Obrolan WhatsApp
                    {selectedContact ? ` dengan ${selectedContact.nama}` : ''} sudah dibuka di tab
                    baru. Silakan lanjutkan diskusinya di sana.
                  </B2>

                  {saveError && (
                    <div className="w-full max-w-md -mt-4 mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-left font-sans text-sm text-amber-800">
                      Pengajuan Anda belum tercatat di sistem kami. Silakan tetap lanjutkan lewat
                      WhatsApp agar tidak terlewat.
                    </div>
                  )}

                  <Button
                    onClick={handleReset}
                    className="rounded-xl px-6 h-11 bg-primary text-white hover:bg-primary-600"
                  >
                    Kirim Pengajuan Baru
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section: FAQ */}
        <DefaultLayout className="pt-0 pb-24 md:pt-0 md:pb-32">
          <Faq />
        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
