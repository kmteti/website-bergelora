import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { lucideIconOptions } from './lucide-icons'

export const Divisi: CollectionConfig = {
  slug: 'divisi',
  labels: {
    singular: 'Divisi',
    plural: 'Divisi',
  },
  admin: {
    useAsTitle: 'nama',
    defaultColumns: ['nama', 'detail', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nama',
      type: 'text',
      required: true,
      label: 'Nama Divisi (Singkatan)',
      admin: {
        description: 'Contoh: Adkesma',
      },
    },
    slugField({ fieldToUse: 'nama' }),
    {
      name: 'detail',
      type: 'text',
      required: true,
      label: 'Kepanjangan Divisi',
      admin: {
        description: 'Contoh: Advokasi dan Kesejahteraan Mahasiswa',
      },
    },
    {
      name: 'logo',
      type: 'text',
      required: true,
      label: 'Logo Divisi (Path)',
      admin: {
        description: 'Contoh: /logo/divisi/adkesma.svg',
      },
    },
    {
      name: 'header',
      type: 'text',
      required: true,
      label: 'Gambar Header/Banner (Path)',
      admin: {
        description: 'Contoh: /images/divisi/adkesma/header-adkesma.webp',
      },
    },
    {
      name: 'tujuan',
      type: 'text',
      required: true,
      label: 'Slogan/Tujuan Utama',
      admin: {
        description: 'Contoh: Kesejahteraan Mahasiswa adalah Tanggung Jawab Kami',
      },
    },
    {
      name: 'deskripsi_tujuan',
      type: 'textarea',
      required: true,
      label: 'Deskripsi Tujuan',
    },
    {
      name: 'proker',
      type: 'array',
      label: 'Daftar Program Kerja',
      labels: {
        singular: 'Program Kerja',
        plural: 'Program Kerja',
      },
      fields: [
        {
          name: 'namaProker',
          type: 'text',
          required: true,
          label: 'Nama Proker',
        },
        {
          name: 'icon',
          type: 'select',
          options: lucideIconOptions,
          required: true,
          label: 'Ikon (Lucide React)',
        },
        {
          name: 'deskripsi',
          type: 'textarea',
          required: true,
          label: 'Deskripsi Proker',
        },
        {
          name: 'anggota',
          type: 'array',
          label: 'Anggota / Penanggung Jawab (Opsional)',
          labels: {
            singular: 'Anggota',
            plural: 'Anggota',
          },
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
