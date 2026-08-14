import type { CollectionConfig } from 'payload'

export const Faq: CollectionConfig = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQ',
  },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Pertanyaan',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Jawaban',
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
