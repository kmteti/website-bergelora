import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { lucideIconOptions } from './lucide-icons'

export const Bso: CollectionConfig = {
  slug: 'bso',
  labels: {
    singular: 'BSO',
    plural: 'BSO',
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
      label: 'Nama BSO (Singkatan)',
      admin: {
        description: 'Contoh: Magatrika',
      },
    },
    slugField({ fieldToUse: 'nama' }),
    {
      name: 'detail',
      type: 'text',
      required: true,
      label: 'Kepanjangan BSO',
      admin: {
        description: 'Contoh: Mahasiswa Ketenagalistrikan',
      },
    },
    {
      name: 'logo',
      type: 'text',
      required: true,
      label: 'Logo BSO (Path)',
      admin: {
        description: 'Contoh: /logo/bso/magatrika.svg',
      },
    },
    {
      name: 'header',
      type: 'text',
      required: true,
      label: 'Gambar Header/Banner (Path)',
      admin: {
        description: 'Contoh: /images/bso/magatrika-header.webp',
      },
    },
    {
      name: 'tujuan',
      type: 'text',
      required: true,
      label: 'Slogan/Tujuan Utama',
      admin: {
        description: 'Contoh: Inovasi di Bidang Energi',
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
      label: 'Daftar Program Kerja / Subdivisi',
      labels: {
        singular: 'Program Kerja / Subdivisi',
        plural: 'Program Kerja / Subdivisi',
      },
      fields: [
        {
          name: 'namaProker',
          type: 'text',
          required: true,
          label: 'Nama Proker / Subdivisi',
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
          label: 'Deskripsi',
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
