/**
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  GANTI DATA DI FILE INI                                              │
 * │  Empat entri di bawah masih placeholder. Ubah `nama` dan `whatsapp`  │
 * │  sesuai narahubung asli. Tidak ada file lain yang perlu disentuh —   │
 * │  kartu di halaman /kontak otomatis mengikuti.                        │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Keempatnya adalah narahubung umum: pengaju boleh menghubungi siapa saja,
 * tidak dipetakan per kategori kerja sama. Jumlahnya bebas — tambah atau
 * kurangi entri, grid kartunya menyesuaikan sendiri.
 *
 * Format `whatsapp`: kode negara tanpa tanda "+", tanpa spasi dan tanpa
 * strip. Nomor 0812-2713-6311 ditulis menjadi "6281227136311".
 *
 * Semua placeholder sengaja memakai nomor CP KMTETI yang sudah dipakai
 * sebelumnya. Jadi kalau ada yang terlanjur mengklik sebelum data ini
 * diperbarui, pesannya tetap sampai ke CP resmi, bukan ke nomor asing.
 */

export type Narahubung = {
  id: string
  /** TODO: ganti dengan nama asli */
  nama: string
  /**
   * Opsional, tampil sebagai baris kedua di kartu. Isi bebas, misalnya
   * jabatan atau divisi. Kosongkan saja kalau cukup namanya.
   */
  keterangan?: string
  /** TODO: ganti dengan nomor asli, format 62xxxxxxxxxxx */
  whatsapp: string
}

export const NARAHUBUNG: Narahubung[] = [
  { id: 'narahubung-1', nama: 'Nawa', whatsapp: '6283865340087' },
  { id: 'narahubung-2', nama: 'Ali', whatsapp: '6281261597404' },
  { id: 'narahubung-3', nama: 'Nabila', whatsapp: '6282289032135' },
  { id: 'narahubung-4', nama: 'Faqih', whatsapp: '6285747444877' },
]
