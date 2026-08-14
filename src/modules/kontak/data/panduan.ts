/**
 * Topik panduan yang tampil sebagai kartu di /kontak dan punya halaman
 * detail sendiri di /kontak/panduan/[slug].
 *
 * Keempat topik saat ini menunjuk ke booklet yang sama. Karena itu halaman
 * detailnya tidak menampilkan judul maupun ringkasan per topik — yang
 * membedakan hanya teks kartu dan metadata halaman.
 *
 * `documentUrl` diambil dari environment supaya file PDF-nya tidak perlu ikut
 * masuk repo atau bundle deployment. Unggah ke object storage, lalu isi
 * NEXT_PUBLIC_PARTNERSHIP_BOOKLET_URL di .env.
 */

import { Building2, HandCoins, Handshake, Megaphone, type LucideIcon } from 'lucide-react'

const BOOKLET_PARTNERSHIP_URL = process.env.NEXT_PUBLIC_PARTNERSHIP_BOOKLET_URL ?? ''

export type PanduanTopic = {
  slug: string
  /** Judul kartu di /kontak, sekaligus judul tab halaman detail */
  title: string
  /** Teks di kartu dan meta description */
  description: string
  /** Ikon kartu di /kontak. Pola sama dengan data layanan. */
  icon: LucideIcon
  /** URL PDF. String kosong = dokumen belum diunggah. */
  documentUrl: string
  /** Nama file saat diunduh */
  documentName: string
}

export const PANDUAN_TOPICS: PanduanTopic[] = [
  {
    slug: 'partnership',
    title: 'Partnership',
    description:
      'Skema kemitraan jangka panjang bersama KMTETI, mulai dari bentuk kerja sama hingga alur pengajuannya.',
    icon: Handshake,
    documentUrl: BOOKLET_PARTNERSHIP_URL,
    documentName: 'Booklet Partnership KMTETI.pdf',
  },
  {
    slug: 'sponsorship',
    title: 'Sponsorship',
    description:
      'Ketentuan dukungan dana maupun produk untuk program kerja dan event yang diselenggarakan KMTETI.',
    icon: HandCoins,
    documentUrl: BOOKLET_PARTNERSHIP_URL,
    documentName: 'Booklet Partnership KMTETI.pdf',
  },
  {
    slug: 'media-relation',
    title: 'Media Relation',
    description:
      'Alur kerja sama publikasi, peliputan, dan pertukaran promosi antara KMTETI dengan mitra media.',
    icon: Megaphone,
    documentUrl: BOOKLET_PARTNERSHIP_URL,
    documentName: 'Booklet Partnership KMTETI.pdf',
  },
  {
    slug: 'organizational-inquiries',
    title: 'Organizational Inquiries',
    description:
      'Prosedur kunjungan, studi banding, permohonan pembicara, dan permintaan audiensi organisasi.',
    icon: Building2,
    documentUrl: BOOKLET_PARTNERSHIP_URL,
    documentName: 'Booklet Partnership KMTETI.pdf',
  },
]

export const getPanduanTopic = (slug: string): PanduanTopic | undefined =>
  PANDUAN_TOPICS.find((topic) => topic.slug === slug)
