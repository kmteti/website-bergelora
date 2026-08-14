import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function seedFaqAndNarahubung() {
  const payload = await getPayload({ config })

  console.log('Seeding FAQ & Narahubung...')

  // Delete existing FAQ
  const existingFaq = await payload.find({ collection: 'faq', limit: 100 })
  if (existingFaq.totalDocs > 0) {
    for (const doc of existingFaq.docs) {
      await payload.delete({ collection: 'faq', id: doc.id })
    }
  }

  // Delete existing Narahubung
  const existingCP = await payload.find({ collection: 'narahubung', limit: 100 })
  if (existingCP.totalDocs > 0) {
    for (const doc of existingCP.docs) {
      await payload.delete({ collection: 'narahubung', id: doc.id })
    }
  }

  // Seed FAQ
  const faqItems = [
    {
      question: 'Berapa lama pengajuan saya akan dibalas?',
      answer: 'Estimasi waktu respons tim Humas KMTETI adalah 1–3 hari kerja setelah formulir dikirimkan.',
      order: 1,
    },
    {
      question: 'Dokumen apa saja yang perlu saya siapkan?',
      answer: 'Anda dapat menyiapkan proposal kerja sama (PDF), surat permohonan resmi, atau company profile instansi Anda.',
      order: 2,
    },
    {
      question: 'Apa yang terjadi setelah saya mengisi formulir?',
      answer: 'Formulir Anda akan tersimpan di sistem kami dan Anda akan langsung diarahkan ke percakapan WhatsApp resmi dengan Narahubung KMTETI untuk diskusi lebih lanjut.',
      order: 3,
    },
    {
      question: 'Bagaimana jika saya salah memilih kategori kerja sama?',
      answer: 'Tidak perlu khawatir, Anda dapat langsung menginformasikan pengoreksian tersebut kepada Narahubung saat percakapan WhatsApp dibuka.',
      order: 4,
    },
    {
      question: 'Bisakah saya menghubungi divisi tertentu secara langsung?',
      answer: 'Disarankan untuk melalui formulir kontak utama ini terlebih dahulu agar pesan Anda terdata dan disalurkan ke divisi/BSO yang tepat secara cepat.',
      order: 5,
    },
  ]

  for (const item of faqItems) {
    await payload.create({
      collection: 'faq',
      data: item,
    })
    console.log(`Seeded FAQ: ${item.question}`)
  }

  // Seed Narahubung
  const cpItems = [
    { nama: 'Nawa', whatsapp: '6283865340087', order: 1 },
    { nama: 'Ali', whatsapp: '6281261597404', order: 2 },
    { nama: 'Nabila', whatsapp: '6282289032135', order: 3 },
    { nama: 'Faqih', whatsapp: '6285747444877', order: 4 },
  ]

  for (const cp of cpItems) {
    await payload.create({
      collection: 'narahubung',
      data: cp,
    })
    console.log(`Seeded Narahubung: ${cp.nama}`)
  }

  console.log('FAQ & Narahubung Seeding complete!')
  process.exit(0)
}

seedFaqAndNarahubung().catch((err) => {
  console.error('Error seeding FAQ & Narahubung:', err)
  process.exit(1)
})
