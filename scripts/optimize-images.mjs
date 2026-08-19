import sharp from 'sharp'
import path from 'path'
import fs from 'fs/promises'

const cwd = process.cwd()

async function optimize() {
  console.log('Optimizing heavy disk images...')

  // 1. foto-kabinet.webp (11MB -> ~150KB)
  const kabinetPath = path.join(cwd, 'public/images/profile/foto-kabinet.webp')
  await sharp(kabinetPath)
    .resize({ width: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(cwd, 'public/images/profile/foto-kabinet-opt.webp'))

  await fs.rename(path.join(cwd, 'public/images/profile/foto-kabinet-opt.webp'), kabinetPath)
  console.log('Updated foto-kabinet.webp')

  // 2. profileheader.webp (1.1MB)
  const headerPath = path.join(cwd, 'public/images/profile/profileheader.webp')
  await sharp(headerPath)
    .resize({ width: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(cwd, 'public/images/profile/profileheader-opt.webp'))
  await fs.rename(path.join(cwd, 'public/images/profile/profileheader-opt.webp'), headerPath)
  console.log('Updated profileheader.webp')

  // 3. Hero slides
  const slides = ['slide1.webp', 'slide2.webp', 'slide3.webp']
  for (const slide of slides) {
    const sPath = path.join(cwd, `public/images/home/hero/${slide}`)
    await sharp(sPath)
      .resize({ width: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(path.join(cwd, `public/images/home/hero/${slide}-opt.webp`))
    await fs.rename(path.join(cwd, `public/images/home/hero/${slide}-opt.webp`), sPath)
    console.log(`Updated ${slide}`)
  }

  console.log('All image optimizations completed!')
}

optimize().catch(console.error)
