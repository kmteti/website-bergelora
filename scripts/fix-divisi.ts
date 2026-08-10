import { getPayload } from 'payload'
import config from '../src/payload.config'
import { divisi } from '../src/modules/divisi/data/data'

async function fix() {
  const payload = await getPayload({ config })
  console.log('Cleaning up old media and divisi...')
  
  // 1. Delete all divisi records
  await payload.delete({
    collection: 'divisi',
    where: {},
  })

  // 2. Delete all media records (this will also trigger S3 deletion in Supabase if configured properly)
  await payload.delete({
    collection: 'media',
    where: {},
  })

  console.log('Clean up complete! Now re-seeding with text fields...')

  for (const div of divisi) {
    const prokerData = div.proker.map((p) => ({
      namaProker: p.nama,
      deskripsi: p.deskripsi,
      icon: p.icon || 'Trophy',
      anggota: p.anggota ? p.anggota.map((a) => ({ nama: a })) : [],
    }))

    try {
      await payload.create({
        collection: 'divisi',
        data: {
          nama: div.nama,
          slug: div.slug,
          detail: div.detail,
          tujuan: div.tujuan,
          deskripsi_tujuan: div.deskripsi_tujuan,
          logo: div.logo, // Now string
          header: div.header, // Now string
          proker: prokerData,
        },
      })
      console.log(`Successfully recreated Divisi: ${div.nama}`)
    } catch (err: any) {
      console.log(`Failed to create Divisi ${div.nama}: ${err.message}`)
    }
  }

  console.log('Fix complete!')
  process.exit(0)
}

fix().catch(console.error)
