import React from 'react'

export default function LayoutGuide() {
  const codeSnippet = `import React from 'react'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'

export default function ContohHalaman() {
  return (
    <main className="w-full relative min-h-screen bg-neutral-100">
      
      {/* 1. HEADER FULL-WIDTH */}
      <PageHeader 
        title="Nama Halaman"
        description="Deskripsi singkat halaman"
        imageSrc="/images/news/news-header.webp"
      />

      {/* 2. KOTAK OVERLAP (FULL WIDTH) */}
      <PageOverlap className="bg-[#fafafa] min-h-[500px]">
        
        {/* 3. PADDING KONTEN STANDAR */}
        <DefaultLayout>
            <h2>Isi Konten Di Sini!</h2>
        </DefaultLayout>

      </PageOverlap>

    </main>
  )
}`

  return (
    <div className="mb-12 flex flex-col gap-6 rounded-xl bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-neutral-900">Panduan Layout (Page Header & Overlap)</h3>
      
      <p className="text-neutral-600 leading-relaxed">
        Gunakan kombinasi <strong>PageHeader</strong>, <strong>PageOverlap</strong>, dan <strong>DefaultLayout</strong> untuk membuat struktur halaman utama (News, Divisi, dll) dengan efek gambar melengkung yang rapi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
          <h4 className="font-bold text-blue-900 mb-2">1. PageHeader</h4>
          <p className="text-sm text-blue-800">Menampilkan gambar <i>hero</i> full-width. Otomatis mengubah warna navbar menjadi putih (dark tone).</p>
        </div>
        <div className="p-5 bg-orange-50 border border-orange-100 rounded-xl">
          <h4 className="font-bold text-orange-900 mb-2">2. PageOverlap</h4>
          <p className="text-sm text-orange-800">Menarik konten ke atas sejauh 80px (-mt-40) dengan ujung melengkung. Bersifat full-width (w-full).</p>
        </div>
        <div className="p-5 bg-green-50 border border-green-100 rounded-xl">
          <h4 className="font-bold text-green-900 mb-2">3. DefaultLayout</h4>
          <p className="text-sm text-green-800">Ditaruh di <i>dalam</i> PageOverlap untuk membatasi lebar konten (max-w) dan mengatur padding aman (kiri-kanan).</p>
        </div>
      </div>

      <div className="p-5 bg-red-50 border border-red-100 rounded-xl mb-4">
        <h4 className="font-bold text-red-900 mb-2">⚠️ Peringatan Penting</h4>
        <p className="text-sm text-red-800">
          Pastikan <strong>TIDAK ADA</strong> class <code className="bg-white px-1 py-0.5 rounded text-red-600">pb-20</code> atau <code className="bg-white px-1 py-0.5 rounded text-red-600">shadow</code> pada elemen di sekitar PageOverlap, karena akan membuat celah putih abu-abu di atas Footer.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-neutral-800 mb-3">Boilerplate Code (Tinggal Copy-Paste)</h4>
        <div className="bg-[#1e1e1e] text-[#d4d4d4] p-5 rounded-xl overflow-x-auto text-sm">
          <pre><code>{codeSnippet}</code></pre>
        </div>
      </div>
    </div>
  )
}
