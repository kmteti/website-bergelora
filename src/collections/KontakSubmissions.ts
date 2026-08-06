import type { CollectionConfig } from 'payload'

export const KontakSubmissions: CollectionConfig = {
  slug: 'kontak-submissions',
  labels: {
    singular: 'Pengajuan Kontak',
    plural: 'Pengajuan Kontak',
  },
  admin: {
    useAsTitle: 'nama',
    defaultColumns: ['nama', 'instansi', 'kategori', 'sheetStatus', 'createdAt'],
    description: 'Isian Formulir Komunikasi Eksternal dari halaman /kontak.',
  },
  access: {
    // Pengajuan hanya dibuat lewat /kontak/submit (Local API, overrideAccess).
    // REST/GraphQL publik tidak boleh menulis ke sini.
    create: () => false,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'nama',
      type: 'text',
      required: true,
      label: 'Nama Lengkap / Penanggung Jawab',
    },
    {
      name: 'instansi',
      type: 'text',
      required: true,
      label: 'Nama Instansi / Organisasi / Perusahaan',
    },
    {
      name: 'jenisInstansi',
      type: 'text',
      label: 'Jenis Instansi',
    },
    {
      name: 'kategori',
      type: 'text',
      required: true,
      label: 'Kategori Kerjasama',
    },
    {
      name: 'deskripsi',
      type: 'textarea',
      required: true,
      label: 'Detail Kebutuhan / Pesan',
    },
    {
      name: 'proposal',
      type: 'text',
      label: 'Link Proposal / Brief',
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      label: 'Nomor WhatsApp',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email Penanggung Jawab',
    },
    {
      name: 'sheetStatus',
      type: 'select',
      label: 'Status Sinkronisasi Sheet',
      defaultValue: 'pending',
      options: [
        { label: 'Belum dikirim', value: 'pending' },
        { label: 'Masuk sheet', value: 'synced' },
        { label: 'Gagal', value: 'failed' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Diisi otomatis setelah pengajuan diteruskan ke Google Sheet.',
      },
    },
    {
      name: 'sheetError',
      type: 'text',
      label: 'Pesan Error Sheet',
      admin: {
        position: 'sidebar',
        condition: (data) => data?.sheetStatus === 'failed',
        readOnly: true,
      },
    },
  ],
  timestamps: true,
}
