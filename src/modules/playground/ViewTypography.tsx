import {H1, H2, H3, H4, H5, B1, B2, B3, B4, B5 } from '@/components/elements/Typography'

export default function Typography() {
  return (
    <div className="flex flex-col gap-12 p-8 bg-white text-neutral-1000 rounded-xl shadow-sm">
      {/* Headings */}
      <div className="flex flex-col gap-4">
        <div className="border-b pb-3">
          <H3>Headings (Source Serif 4)</H3>
          <B4 className="text-neutral-500 mt-1">font-heading · H1–H7</B4>
        </div>
        <div className="flex flex-col gap-3">
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">H1 · Bold · 36→48px</B5>
            <H1>The quick brown fox jumps over the lazy dog</H1>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">H2 · Bold · 30→36px</B5>
            <H2>The quick brown fox jumps over the lazy dog</H2>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">H3 · Bold · 24→30px</B5>
            <H3>The quick brown fox jumps over the lazy dog</H3>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">H4 · SemiBold · 20→24px</B5>
            <H4>The quick brown fox jumps over the lazy dog</H4>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">H5 · SemiBold · 18→20px</B5>
            <H5>The quick brown fox jumps over the lazy dog</H5>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4">
        <div className="border-b pb-3">
          <H3>Body (Montserrat)</H3>
          <B4 className="text-neutral-500 mt-1">font-sans · B1–B5</B4>
        </div>
        <div className="flex flex-col gap-3">
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">B1 · Medium · 18px</B5>
            <B1>The quick brown fox jumps over the lazy dog</B1>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">B2 · Regular · 16px</B5>
            <B2>The quick brown fox jumps over the lazy dog</B2>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">B3 · Regular · 14px</B5>
            <B3>The quick brown fox jumps over the lazy dog</B3>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">B4 · Regular · 12px</B5>
            <B4>The quick brown fox jumps over the lazy dog</B4>
          </div>
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="text-neutral-400 uppercase tracking-wider mb-1">B5 · Regular · 10px</B5>
            <B5>The quick brown fox jumps over the lazy dog</B5>
          </div>
        </div>
      </div>
    </div>
  )
}