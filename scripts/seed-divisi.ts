import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { divisi } from '../src/modules/divisi/data/data'
import * as fs from 'fs'
import * as path from 'path'

async function seed() {
  const payload = await getPayload({ config })
  console.log('Seeding divisi...')

  for (const div of divisi) {
    // Check if the file exists locally
    const logoPath = path.join(process.cwd(), 'public', div.logo)
    const headerPath = path.join(process.cwd(), 'public', div.header)

    let logoMediaId: any = null
    let headerMediaId: any = null

    try {
      if (fs.existsSync(logoPath)) {
        const logoMedia = await payload.create({
          collection: 'media',
          data: { alt: div.nama + ' logo' },
          filePath: logoPath,
        })
        logoMediaId = logoMedia.id
      }
    } catch (err: any) {
      console.log(`Failed to upload logo for ${div.nama}: ${err.message}`)
    }

    try {
      if (fs.existsSync(headerPath)) {
        const headerMedia = await payload.create({
          collection: 'media',
          data: { alt: div.nama + ' header' },
          filePath: headerPath,
        })
        headerMediaId = headerMedia.id
      }
    } catch (err: any) {
      console.log(`Failed to upload header for ${div.nama}: ${err.message}`)
    }

    if (!logoMediaId || !headerMediaId) {
      console.log(`Skipping ${div.nama} due to missing media...`)
      continue
    }

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
          logo: logoMediaId,
          header: headerMediaId,
          proker: prokerData,
        },
      })
      console.log(`Successfully created Divisi: ${div.nama}`)
    } catch (err: any) {
      console.log(`Failed to create Divisi ${div.nama}: ${err.message}`)
    }
  }

  console.log('Done seeding divisi!')
  process.exit(0)
}

seed().catch(console.error)
