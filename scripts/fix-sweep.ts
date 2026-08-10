import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { lucideIconOptions } from '../src/collections/lucide-icons'

const infokomProker = [
  { namaProker: "MeIDEA", deskripsi: "Webinar atau keynote speeches dengan tema berupa hal-hal yang berhubungan dengan media dan branding.", icon: "MonitorPlay" },
  { namaProker: "TETI-on the-Wall", deskripsi: "Pembuatan infografis poster sebagai tempat untuk menampilkan dokumentasi acara DTETI.", icon: "Wallpaper" },
  { namaProker: "Web KMTETI", deskripsi: "Pembuatan web KMTETI yang berisi informasi seputar divisi, program kerja, press release, dll.", icon: "Globe" },
  { namaProker: "Peringatan Hari Besar Infografis", deskripsi: "Postingan di media sosial sebagai bentuk perayaan Hari Besar Nasional dan Internasional.", icon: "Image" },
  { namaProker: "Informasi Menggelitik", deskripsi: "Postingan berupa infografis rilis satu kali setiap bulan yang mengangkat topik berbeda setiap edisinya.", icon: "Smile" },
  { namaProker: "TETI Appreciation Post & TETI Champion", deskripsi: "Postingan di media sosial KMTETI kepada para anggota KMTETI yang telah memenangkan lomba.", icon: "Medal" },
  { namaProker: "Bedah Guideline dan Transfer Materi Grand Design KMTETI", deskripsi: "Pengenalan serta transfer materi grand design KMTETI periode baru kepada perwakilan divisi.", icon: "Palette" },
  { namaProker: "Media Sosial KMTETI", deskripsi: "Mengelola dan mengunggah informasi dalam akun media sosial KMTETI seperti Instagram, Twitter, TikTok, Youtube.", icon: "Share2" },
  { namaProker: "Kalender KMTETI", deskripsi: "Mendata kegiatan seputar DTETI di setiap bulannya untuk kemudian dipublikasikan setiap awal bulan.", icon: "Calendar" },
  { namaProker: "Konten Interaktif", deskripsi: "Konten interaktif yang di-upload di Instagram KMTETI berisi informasi yang menghibur.", icon: "Smartphone" },
  { namaProker: "Voltamagz", deskripsi: "Publikasi majalah sebagai media informasi cetak dan online yang membahas isu seputar DTETI dan teknologi.", icon: "BookOpen" },
  { namaProker: "Elektropos", deskripsi: "Publikasi buletin 8 halaman sebagai media informasi cetak dan online yang membahas isu terkait hal baru.", icon: "FileText" },
  { namaProker: "Voltanews", deskripsi: "Buletin 4 halaman berisi informasi terkini seputar DTETI yang ditujukan untuk para wisudawan/wisudawati.", icon: "Newspaper" },
  { namaProker: "Foto Kabinet", deskripsi: "Foto kabinet kepengurusan KMTETI dan BSO.", icon: "Camera" },
  { namaProker: "Video Profil KMTETI", deskripsi: "Video yang mengangkat konten seputar peringatan hari besar, DTETI, ataupun teknologi yang rilis satu kali setiap bulan.", icon: "Video" },
  { namaProker: "Video Bulanan KMTETI", deskripsi: "Video yang mengangkat konten seputar peringatan hari besar, DTETI, ataupun teknologi (Video Animasi).", icon: "Film" },
  { namaProker: "After Movie KMTETI", deskripsi: "Video mengenai kegiatan yang telah dilakukan oleh KMTETI selama satu periode kepengurusan.", icon: "Clapperboard" }
];

const mikatProker = [
  { namaProker: "PORSENITETI", deskripsi: "Turnamen olahraga dan seni yang diikuti oleh tiap perwakilan mahasiswa dari semua angkatan.", icon: "Trophy" },
  { namaProker: "Olahraga Bareng", deskripsi: "Latihan rutin bagi mahasiswa DTETI dalam bidang olahraga.", icon: "Dumbbell" },
  { namaProker: "Latihan Rutin 1", deskripsi: "Latihan rutin bagi mahasiswa DTETI yang memiliki minat dalam bidang olahraga (Semester Genap/Ganjil).", icon: "Activity" },
  { namaProker: "Latihan Rutin 2", deskripsi: "Latihan rutin bagi mahasiswa DTETI yang memiliki minat dalam bidang olahraga (Semester selanjutnya).", icon: "Activity" },
  { namaProker: "ENFORUN", deskripsi: "Apresiasi civitas akademik DTETI dalam bentuk penghargaan dan hiburan untuk seluruh civitas DTETI (lari/olahraga santai).", icon: "Footprints" },
  { namaProker: "EIMS", deskripsi: "Pelatihan band bagi seluruh mahasiswa DTETI yang memiliki minat dalam bidang musik.", icon: "Music" },
  { namaProker: "TETI Talent Day", deskripsi: "Kompetisi pertunjukan seni (musik, tari, drama, dan lainnya) antar kelompok mahasiswa baru.", icon: "MicStage" },
  { namaProker: "Checksound Supporter", deskripsi: "Latihan rutin bagi supporter KMTETI di Teknisiade.", icon: "Drum" },
  { namaProker: "KMTETI Goes to Teknisiade", deskripsi: "Rangkaian persiapan kontingen olahraga dan seni KMTETI terkait latihan dan administrasi Teknisiade.", icon: "Flag" }
];

function ensureIcon(iconName: string) {
  const isValid = lucideIconOptions.find(opt => opt.value === iconName);
  return isValid ? iconName : 'Trophy';
}

async function sweepFix() {
  const payload = await getPayload({ config })
  
  // Fix Infokom
  const infokomRes = await payload.find({ collection: 'divisi', where: { slug: { equals: 'infokom' } } });
  if (infokomRes.docs.length > 0) {
    await payload.update({
      collection: 'divisi',
      id: infokomRes.docs[0].id,
      data: {
        proker: infokomProker.map(p => ({ ...p, icon: ensureIcon(p.icon) }))
      }
    });
    console.log(`Updated Infokom to exactly ${infokomProker.length} prokers.`);
  }

  // Fix Mikat
  const mikatRes = await payload.find({ collection: 'divisi', where: { slug: { equals: 'minat-dan-bakat' } } });
  if (mikatRes.docs.length > 0) {
    await payload.update({
      collection: 'divisi',
      id: mikatRes.docs[0].id,
      data: {
        proker: mikatProker.map(p => ({ ...p, icon: ensureIcon(p.icon) }))
      }
    });
    console.log(`Updated Mikat to exactly ${mikatProker.length} prokers.`);
  }

  console.log('Sweep completed!');
  process.exit(0);
}

sweepFix().catch(console.error);
