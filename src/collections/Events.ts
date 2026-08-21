import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { lucideIconOptions } from './lucide-icons'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Event',
    plural: 'Events',
  },
  admin: {
    useAsTitle: 'nama',
    defaultColumns: ['nama', 'detail', 'website', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nama',
      type: 'text',
      required: true,
      label: 'Nama Event',
      admin: {
        description: 'Contoh: FindIT! / NESCO UGM / Technocorner',
      },
    },
    slugField({ fieldToUse: 'nama' }),
    {
      name: 'detail',
      type: 'text',
      required: true,
      label: 'Detail/Tagline Singkat',
    },
    {
      name: 'header',
      type: 'text',
      required: true,
      label: 'Gambar Header/Banner (Path)',
      defaultValue: '/images/events/findit/header-findit.webp',
    },
    {
      name: 'logo',
      type: 'text',
      label: 'Logo Event (Path)',
    },
    {
      name: 'tujuan',
      type: 'text',
      required: true,
      label: 'Judul Tujuan Event',
    },
    {
      name: 'deskripsi_tujuan',
      type: 'textarea',
      required: true,
      label: 'Deskripsi Tujuan Event',
    },
    {
      name: 'website',
      type: 'text',
      label: 'URL Website Resmi',
    },
    {
      name: 'gambar',
      type: 'array',
      label: 'Galeri Gambar Event',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Path Gambar',
        },
      ],
    },
    {
      name: 'bidangLomba',
      type: 'array',
      label: 'Daftar Bidang Lomba / Kompetisi',
      labels: {
        singular: 'Bidang Lomba',
        plural: 'Bidang Lomba',
      },
      fields: [
        {
          name: 'nama',
          type: 'text',
          required: true,
          label: 'Nama Lomba',
        },
        {
          name: 'deskripsi',
          type: 'textarea',
          required: true,
          label: 'Deskripsi Lomba',
        },
        {
          name: 'icon',
          type: 'select',
          options: lucideIconOptions,
          label: 'Ikon (Lucide React)',
        },
        {
          name: 'subCategories',
          type: 'array',
          label: 'Sub-Kategori / Cabang Lomba (Opsional)',
          fields: [
            {
              name: 'nama',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
