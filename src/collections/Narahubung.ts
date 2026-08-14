import type { CollectionConfig } from 'payload'

export const Narahubung: CollectionConfig = {
  slug: 'narahubung',
  labels: {
    singular: 'Narahubung (CP)',
    plural: 'Narahubung (CP)',
  },
  admin: {
    useAsTitle: 'nama',
    defaultColumns: ['nama', 'whatsapp', 'keterangan', 'order', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nama',
      type: 'text',
      required: true,
      label: 'Nama Narahubung',
      admin: {
        description: 'Contoh: Nawa / Ali / Budi',
      },
    },
    {
      name: 'keterangan',
      type: 'text',
      label: 'Keterangan/Jabatan (Opsional)',
      admin: {
        description: 'Contoh: Humas KMTETI / CP Sponsorship',
      },
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      label: 'Nomor WhatsApp',
      admin: {
        description: 'Format tanpa tanda + atau spasi, contoh: 6283865340087',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Urutan Tampil',
      defaultValue: 0,
    },
  ],
  timestamps: true,
}
