import type { CollectionConfig } from 'payload'
import { lucideIconOptions } from './lucide-icons'

export const Layanan: CollectionConfig = {
  slug: 'layanan',
  labels: {
    singular: 'Layanan',
    plural: 'Layanan',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'kategori', 'href', 'order', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Nama Layanan / Tautan',
      admin: {
        description: 'Contoh: Akademik DTETI / Manual Book Kesekretariatan',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Deskripsi Layanan',
    },
    {
      name: 'href',
      type: 'text',
      required: true,
      label: 'URL Tautan',
      admin: {
        description: 'Contoh: https://sarjana.jteti.ugm.ac.id/ atau link drive/form',
      },
    },
    {
      name: 'kategori',
      type: 'select',
      required: true,
      label: 'Kategori Layanan',
      options: [
        { label: 'Link Penting', value: 'Link Penting' },
        { label: 'Arsip Divisi', value: 'Arsip Divisi' },
        { label: 'Dokumen dan SOP', value: 'Dokumen dan SOP' },
        { label: 'Sekretaris dan Bendahara', value: 'Sekretaris dan Bendahara' },
        { label: 'Lainnya', value: 'Lainnya' },
      ],
    },
    {
      name: 'icon',
      type: 'select',
      options: lucideIconOptions,
      label: 'Ikon (Lucide React)',
      defaultValue: 'Link',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Urutan Tampil (Opsional)',
      defaultValue: 0,
    },
  ],
  timestamps: true,
}
