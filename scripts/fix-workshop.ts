import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

const workshopProker = [
  {
    namaProker: "Pelatihan Genap",
    deskripsi: "Pelatihan rutin teori dan praktik untuk software/hardware seperti STM32, Matlab, Proteus, PLC, Web Dev, dan Image Processing.",
    icon: "Code"
  },
  {
    namaProker: "Bootcamp",
    deskripsi: "Pembelajaran intensif pada masa liburan untuk bidang Artificial Intelligence, Internet of Things, dan Mobile Development, diakhiri dengan kompetisi internal.",
    icon: "Laptop"
  },
  {
    namaProker: "El Nino",
    deskripsi: "Pertukaran materi dengan pembicara mengenai persiapan lomba atau beasiswa dalam bentuk seminar, diskusi panel, atau workshop.",
    icon: "Lightbulb"
  },
  {
    namaProker: "Pelatihan Ganjil",
    deskripsi: "Pelatihan rutin teori dan praktik untuk software/hardware seperti PLC, Arduino, Data Science, Web Development, dan Design.",
    icon: "Terminal"
  },
  {
    namaProker: "TETI Programming Week",
    deskripsi: "Kompetisi IT berskala lokal/nasional yang mencakup Data Science, CSS Battle, Innovation Competition, dan Capture The Flag (CTF).",
    icon: "Trophy"
  },
  {
    namaProker: "Bedah Guideline dan Transfer Materi Grand Design KMTETI",
    deskripsi: "Pengenalan serta transfer materi grand design KMTETI periode baru kepada perwakilan setiap divisi.",
    icon: "Palette"
  },
  {
    namaProker: "Technocorner",
    deskripsi: "Kompetisi berskala nasional di bidang Robotik, Electrical Engineering, dan IoT (Internet of Things) untuk siswa SMA dan mahasiswa.",
    icon: "Cpu"
  },
  {
    namaProker: "Website Workshop",
    deskripsi: "Membangun dan mengelola platform website terintegrasi sebagai pusat informasi pelatihan, pengelolaan data, dan pendaftaran.",
    icon: "Globe"
  }
];

async function fixWorkshop() {
  const payload = await getPayload({ config })
  
  // Find Workshop
  const wsQuery = await payload.find({
    collection: 'divisi',
    where: { slug: { equals: 'workshop' } }
  });

  if (wsQuery.docs.length > 0) {
    const ws = wsQuery.docs[0];
    await payload.update({
      collection: 'divisi',
      id: ws.id,
      data: {
        proker: workshopProker
      }
    });
    console.log('Workshop prokers fixed successfully!');
  } else {
    console.log('Workshop not found.');
  }

  process.exit(0);
}

fixWorkshop().catch(console.error);
