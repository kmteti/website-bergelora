import Link from 'next/link'
import { Download, ExternalLink, FileText } from 'lucide-react'

import { B4 } from '@/components/elements/Typography'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { PanduanTopic } from '@/modules/kontak/data/panduan'

/**
 * Halaman baca booklet.
 *
 * Rasio: booklet ini A4 portrait (595x842 pt, rasio 1:1.414). Kalau frame-nya
 * dibuat selebar layar, viewer browser menyusutkan halaman ke tengah dan
 * menyisakan gutter kosong yang lebar. Karena itu frame dikunci ke rasio A4:
 * di desktop tingginya yang ditetapkan dan lebar diturunkan dari rasio, di
 * mobile sebaliknya.
 *
 * Fragment viewer:
 * - toolbar=0  menyembunyikan toolbar bawaan browser (nomor halaman, zoom, print)
 * - navpanes=0 menyembunyikan panel thumbnail di kiri
 * - view=FitH  menyesuaikan halaman ke lebar frame
 * Scrollbar sengaja TIDAK dimatikan supaya posisi baca terlihat di sisi kanan.
 *
 * Catatan: scrollbar itu milik viewer di dalam iframe, dan iframe-nya lintas
 * domain (Supabase). Jadi tampilannya mengikuti gaya bawaan browser dan tidak
 * bisa distail dari sini — posisi scroll-nya pun tidak bisa dibaca oleh
 * halaman ini. Chromium menghormati fragment di atas; Firefox dan Safari
 * memakai viewer sendiri dan mengabaikannya.
 */
const VIEWER_PARAMS = '#toolbar=0&navpanes=0&view=FitH'

/** Lebar kolom = lebar frame PDF, supaya toolbar sejajar dengan dokumennya. */
const FRAME_CLASS =
  'w-full aspect-[1/1.414] sm:w-auto sm:h-[calc(100dvh-14rem)] sm:max-h-[860px] sm:min-h-[460px]'

const TOOL_CLASS =
  'inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/80 px-3.5 h-10 font-sans text-sm font-medium text-neutral-700 no-underline backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-neutral-900 hover:shadow-[0_6px_16px_rgba(15,23,42,0.10)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-100'

export const PanduanDetail = ({ topic }: { topic: PanduanTopic }) => {
  const hasDocument = topic.documentUrl !== ''

  return (
    <main className="relative w-full min-h-[100dvh] overflow-hidden bg-gradient-to-b from-[#E1F3FA] via-[#EFF8FC] to-white pt-[76px] lg:pt-[92px]">
      {/* Glow blobs — mengikuti perlakuan section formulir di halaman /kontak,
          tapi opasitasnya diturunkan supaya tidak bersaing dengan booklet. */}
      <div className="pointer-events-none absolute -left-24 -top-24 z-0 aspect-square w-[380px] rounded-full bg-secondary-200 opacity-45 blur-[110px] md:w-[520px] md:blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 z-0 aspect-square w-[380px] rounded-full bg-primary-200 opacity-45 blur-[110px] md:w-[520px] md:blur-[150px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] justify-center px-4 py-6 sm:px-8 sm:py-10">
        <div className="flex w-full flex-col sm:w-auto">
          {hasDocument && (
            <div className="mb-3 flex items-center justify-end gap-2">
              <a href={topic.documentUrl} target="_blank" rel="noreferrer" className={TOOL_CLASS}>
                <ExternalLink className="size-4 text-neutral-400" aria-hidden="true" />
                Buka di tab baru
              </a>
              <a
                href={topic.documentUrl}
                download={topic.documentName}
                className={TOOL_CLASS}
                aria-label="Unduh booklet"
              >
                <Download className="size-4 text-neutral-400" aria-hidden="true" />
                Unduh
              </a>
            </div>
          )}

          {hasDocument ? (
            <iframe
              src={`${topic.documentUrl}${VIEWER_PARAMS}`}
              title={`Booklet ${topic.title}`}
              className={cn(
                FRAME_CLASS,
                'rounded-2xl border-[3px] border-white bg-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]',
              )}
            />
          ) : (
            <div
              className={cn(
                FRAME_CLASS,
                'flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-neutral-300 bg-white px-6 text-center',
              )}
            >
              <FileText className="size-10 text-neutral-300" aria-hidden="true" />
              <B4 className="max-w-sm font-sans text-neutral-500">
                Booklet sedang disiapkan. Silakan hubungi kami lewat Formulir Komunikasi Eksternal
                di halaman Kontak.
              </B4>
              <Link
                href="/kontak"
                className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'no-underline')}
              >
                Buka Formulir Kontak
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
