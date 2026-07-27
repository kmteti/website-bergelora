import React from 'react'
import Link from 'next/link'
import { PageHeader } from '@/components/elements/PageHeader'
import { PageOverlap } from '@/components/elements/PageOverlap'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { H3, B4 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export const Kontak = () => {
  return (
    <main className="w-full relative min-h-screen bg-white">
      <PageHeader
        title="Terima Kasih atas Perhatian Anda"
        description="Narahubung KMTETI"
        imageSrc="/images/home/about/about.webp" 
      />

      <PageOverlap className="bg-gradient-to-r from-secondary-100 via-white to-primary-100 min-h-[500px]">

        <DefaultLayout>
          
          <div className="relative z-10 w-full min-h-[500px] flex items-center justify-center py-20 cursor-default">
            <div className="relative text-center max-w-2xl mx-auto px-4 flex flex-col items-center gap-6">
              <div>
                <H3 className="line-clamp-2 text-primary-500 mb-4">Formulir Komunikasi Eksternal</H3>
                <B4>
                  KMTETI hadir sebagai wadah bagi mahasiswa untuk mengembangkan potensi, memperluas wawasan, dan membangun kolaborasi. Melalui berbagai program, layanan internal, serta informasi yang terpusat.
                </B4>
              </div>
              
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="gap-2 shadow-lg drop-shadow-sm pointer-events-auto">
                  Google Form
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

        </DefaultLayout>
      </PageOverlap>
    </main>
  )
}
