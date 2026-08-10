import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import { bsoData } from '../src/modules/bso/data/data'

async function seed() {
  const payload = await getPayload({ config: configPromise })

  console.log('Seeding BSO...')

  // Check if any BSO exists
  const { totalDocs } = await payload.find({
    collection: 'bso',
    limit: 1,
  })

  if (totalDocs > 0) {
    console.log('BSO data already exists. Deleting existing...')
    const all = await payload.find({ collection: 'bso', limit: 100 })
    for (const doc of all.docs) {
      await payload.delete({ collection: 'bso', id: doc.id })
    }
  }

  for (const bso of bsoData) {
    // Add specific proker based on the PDF for a couple of them as an example/seed.
    let prokerData: any[] = []
    
    if (bso.slug === 'magatrika') {
      prokerData = [
        // Power System
        { namaProker: 'Magatrika Power System Course', icon: 'Zap', deskripsi: 'Pengenalan dan pelatihan dasar power system.' },
        { namaProker: 'Power Up PS edition', icon: 'Settings', deskripsi: 'Workshop tema khusus power system atau pelatihan software.' },
        { namaProker: 'Relations Content (PS)', icon: 'Share2', deskripsi: 'Publikasi informasi/luaran media mengenai topik power system.' },
        { namaProker: 'NESCO (National Electrical Power System Competition)', icon: 'Trophy', deskripsi: 'Event tahunan kompetisi dan seminar nasional di bidang kelistrikan.' },
        
        // Power Electronics
        { namaProker: 'Magatrika Power Electronics Course', icon: 'Cpu', deskripsi: 'Pengenalan dan pelatihan dasar power electronics.' },
        { namaProker: 'Power Up PE edition', icon: 'Laptop', deskripsi: 'Workshop tema khusus power electronics atau pelatihan software.' },
        { namaProker: 'Relations Content (PE)', icon: 'Share2', deskripsi: 'Publikasi informasi/luaran media mengenai topik power electronics.' },
        
        // Energy Conversion
        { namaProker: 'Magatrika Energy Conversion Course', icon: 'BatteryCharging', deskripsi: 'Pengenalan dan pelatihan dasar energy conversion.' },
        { namaProker: 'Power Up EC edition', icon: 'Factory', deskripsi: 'Workshop tema khusus energy conversion atau pelatihan software.' },
        { namaProker: 'Relations Content (EC)', icon: 'Share2', deskripsi: 'Publikasi informasi/luaran media mengenai topik energy conversion.' },

        // Human Resources
        { namaProker: 'Open Recruitment Staff Magatrika', icon: 'UserPlus', deskripsi: 'Rekruitmen terbuka staff baru Magatrika.' },
        { namaProker: 'Open House Magatrika', icon: 'Home', deskripsi: 'Memperkenalkan BSO Magatrika dan Branding Organisasi.' },
        { namaProker: 'First Gathering Magatrika', icon: 'Users', deskripsi: 'Penyampaian grand design dan wadah untuk seluruh staf Magatrika saling mengenal.' },
        { namaProker: 'MagatHub', icon: 'Globe', deskripsi: 'Wadah penyaluran informasi event, lomba, proyek, magang, dan hiring bagi mahasiswa.' },
        { namaProker: 'Organization Development', icon: 'TrendingUp', deskripsi: 'Monitoring kinerja personalia staf maupun divisi Magatrika.' },

        // Relations
        { namaProker: 'Social Media Admin', icon: 'Smartphone', deskripsi: 'Mengelola luaran informasi dan publikasi konten pada sosial media Magatrika.' },
        { namaProker: 'Magatzine', icon: 'BookOpen', deskripsi: 'Membuat konten bacaan mengenai ilmu ketenagalistrikan.' },
        { namaProker: 'Syllabuscope', icon: 'Search', deskripsi: 'Mengulik dan memperkenalkan mata kuliah pilihan Teknik Elektro kepada mahasiswa.' },
        { namaProker: 'Kunjungan Industri', icon: 'Building', deskripsi: 'Melakukan pembelajaran melalui bentuk kunjungan ke industri secara langsung.' },
        { namaProker: 'Whats\'up Professor?', icon: 'MessageCircle', deskripsi: 'Mengulik fokus peminatan dan topik penelitian dosen DTETI.' },
        { namaProker: 'Teman Magat', icon: 'HelpCircle', deskripsi: 'Wadah advokasi tanya jawab mengenai topik khusus ketenagalistrikan.' },

        // Media Branding
        { namaProker: 'SOP Media', icon: 'FileText', deskripsi: 'Pembuatan SOP order media dan pembuatan tema serta aset media.' },
        { namaProker: 'Branding Design', icon: 'PenTool', deskripsi: 'Mendesain keperluan template dan branding organisasi.' },
        { namaProker: 'Holiday\'s Commemoration', icon: 'Calendar', deskripsi: 'Membuat ucapan media untuk mengenang hari besar agama atau nasional.' }
      ]
    } else if (bso.slug === 'night-login') {
      prokerData = [
        {
          namaProker: 'Community Training',
          icon: 'Users',
          deskripsi: 'Pelatihan rutin per komunitas.',
        },
        {
          namaProker: 'FindIT!',
          icon: 'Search',
          deskripsi: 'Kompetisi tingkat nasional di bidang Teknologi Informasi, yang diselenggarakan oleh DTETI dan dibawahi oleh BSO Night Login.',
        },
        {
          namaProker: '#CommunityTalk',
          icon: 'Mic',
          deskripsi: 'Pelatihan dengan mengundang pembicara yang berpengalaman sesuai dengan community masing-masing.',
        },
        {
          namaProker: 'NL Woman in Tech',
          icon: 'UserCircle2',
          deskripsi: 'Event seminar yang mengundang pembicara perempuan di bidang tech.',
        },
        {
          namaProker: 'Collaboration Seminar with CTI Group',
          icon: 'Handshake',
          deskripsi: 'Seminar pembahasan bidang Cloud, Cyber Security, dan IT Solutions yang merupakan keahlian CTI Group.',
        },
        {
          namaProker: 'CTO Talk with OCBC',
          icon: 'Building',
          deskripsi: 'Seminar sharing section pengalaman kerja di bidang IT dan penyampaian kebutuhan industri.',
        },
        {
          namaProker: 'NL x OTI',
          icon: 'Network',
          deskripsi: 'Kerja sama berupa pelatihan bersama antara NL dan OTI.',
        },
        {
          namaProker: 'Jaket Night Login',
          icon: 'Shirt',
          deskripsi: 'Pembuatan jaket komunitas Night Login sebagai identitas komunitas.',
        },
        {
          namaProker: 'Biro Jodoh Lomba',
          icon: 'Users',
          deskripsi: 'Platform mencari partner dan dosen pembimbing terkait.',
        },
        {
          namaProker: 'Pembuatan Konten Personal Branding',
          icon: 'Camera',
          deskripsi: 'Pembuatan konten di sosial media Night Login.',
        },
        {
          namaProker: 'Appreciation Post',
          icon: 'ThumbsUp',
          deskripsi: 'Pembuatan konten apresiasi komunitas, staff, dan anggota Night Login.',
        }
      ]
    } else if (bso.slug === 'ski') {
      prokerData = [
        // Pengembangan
        { namaProker: 'Pengawasan Kinerja Pengurus', icon: 'Eye', deskripsi: 'Mengadakan pertemuan rutin antara: a. PH dan Koordinator Divisi b. Koordinator dan Anggota Divisi c. Musyawarah Akbar' },
        { namaProker: 'Pembuatan Website SKI Al-Hannaan', icon: 'Globe', deskripsi: 'Membangun website SKI AL HANNAN.' },
        { namaProker: 'Pelatihan Coding', icon: 'Code', deskripsi: 'Memberikan pelatihan hardskill terkait coding.' },
        { namaProker: 'Gathering KMTETI x SKI Edisi Ramadhan', icon: 'Users', deskripsi: 'Mengadakan Buka Bersama dengan pihak KMTETI.' },

        // Pelayanan Umat
        { namaProker: 'Manajemen Mushola', icon: 'Home', deskripsi: 'Melaksanakan piket rutin, mencatat inventaris mushola, pengadaan alat kebersihan.' },
        { namaProker: 'Kajian', icon: 'BookOpen', deskripsi: 'Menyelenggarakan kajian kolaborasi dengan KMT.' },
        { namaProker: 'Berbagi Takjil', icon: 'Heart', deskripsi: 'Membagikan takjil dalam bentuk makanan kepada masyarakat sekitar selama bulan Ramadhan.' },

        // Bussiness and Relation
        { namaProker: 'Studi Banding', icon: 'Briefcase', deskripsi: 'Melaksanakan studi banding dengan SKI yang berada di fakultas teknik.' },
        { namaProker: 'Creative Al-Hannaan Store', icon: 'ShoppingBag', deskripsi: 'Menjual produk produk kreatif, seperti merchandise, t-shirt, topi, pouch, dan totebag.' },
        { namaProker: 'Interactive Content', icon: 'Smartphone', deskripsi: 'Membuat content yang akan diupload di Instagram.' },
        { namaProker: 'Kotak Aspirasi Mushola', icon: 'MessageSquare', deskripsi: 'Menyediakan google form untuk memperoleh kritik dan saran.' },

        // Creative and Product Design
        { namaProker: 'Post Rutin', icon: 'Share2', deskripsi: 'Penyebaran informasi dan syiar ilmu agama melalui media sosial SKI Al Hanaan berupa Instagram.' },
        { namaProker: 'Feeds Event', icon: 'Calendar', deskripsi: 'Penyebaran informasi mengenai event SKI Al Hannaan berupa Instagram.' },
        { namaProker: 'Pelatihan Desain Internal', icon: 'PenTool', deskripsi: 'Pelatihan dan workshop desain grafis internal bagi anggota SKI Al-Hannaan, meliputi pengenalan dasar desain, branding, penggunaan tools desain (Canva/Figma/Adobe).' },
        { namaProker: 'Grand Design', icon: 'Layout', deskripsi: 'Penyusunan pedoman visual dan konsep desain utama SKI Al-Hannaan yang mencakup logo usage, warna, tipografi, gaya konten, serta arah branding media sosial dan kegiatan.' },
        { namaProker: 'Form Request Desain', icon: 'FileText', deskripsi: 'Penyediaan dan pengelolaan formulir permintaan desain (online) untuk menampung kebutuhan desain dari seluruh divisi SKI Al-Hannaan.' }
      ]
    } else if (bso.slug === 'bionce') {
       prokerData = [
         {
           namaProker: 'Seminar, Career Talk, Sharing Alumni',
           icon: 'Mic',
           deskripsi: 'Kegiatan sharing session dan talkshow seputar prospek karir di bidang teknik biomedis.',
         },
         {
           namaProker: 'Project Based Learning Hardware Community',
           icon: 'Cpu',
           deskripsi: 'Pembelajaran berbasis proyek untuk komunitas hardware biomedis.',
         },
         {
           namaProker: 'Project Based Learning Software Community',
           icon: 'Code',
           deskripsi: 'Pembelajaran berbasis proyek untuk komunitas software biomedis.',
         },
         {
           namaProker: 'Biomedical Workshop',
           icon: 'Microscope',
           deskripsi: 'Pelatihan dasar-dasar alat dan riset teknik biomedis.',
         },
         {
           namaProker: 'Biomedical Engineering Podcast',
           icon: 'Headphones',
           deskripsi: 'Siniar (podcast) yang membahas tren terkini dalam teknik biomedis.',
         },
         {
           namaProker: 'Research Project Group Incubator',
           icon: 'FlaskConical',
           deskripsi: 'Inkubasi kelompok riset untuk mengembangkan inovasi di bidang kesehatan.',
         }
       ]
    } else if (bso.slug === 'skk') {
      prokerData = [
        {
          namaProker: 'Ibadah dan First Gathering SKK DTETI',
          icon: 'Users',
          deskripsi: 'Ibadah dan First Gathering SKK DTETI merupakan kegiatan ibadah dan fellowship yang diselenggarakan bagi warga DTETI FT UGM yang beragama Kristen dan Katolik sebagai bentuk pendalaman iman dan penyambutan tahun ajaran baru dan mahasiswa baru.',
        },
        {
          namaProker: 'Paskah SKK DTETI',
          icon: 'BookOpen',
          deskripsi: 'Perayaan Paskah SKK DTETI merupakan perayaan paskah tahunan di mana anggota SKK DTETI dapat berkumpul dan beribadah bersama sebagai bentuk pemaknaan momen Paskah.',
        },
        {
          namaProker: 'Natal SKK DTETI',
          icon: 'Star',
          deskripsi: 'Perayaan Natal SKK DTETI merupakan perayaan natal tahunan di mana anggota SKK DTETI dapat berkumpul dan beribadah bersama sebagai bentuk pemaknaan momen Natal.',
        }
      ]
    } else if (bso.slug === 'mpm') {
      prokerData = [
        {
          namaProker: 'Sertijab',
          icon: 'Award',
          deskripsi: 'Penonaktifan Ketua KMTETI 2025 dan pengurusnya serta pelantikan Ketua KMTETI 2026 dan pengurusnya.',
        },
        {
          namaProker: 'Musyawarah Besar AD/ART dan GBHK',
          icon: 'FileText',
          deskripsi: 'Membahas terkait AD/ART dan GBHK KMTETI Periode 2026.',
        },
        {
          namaProker: 'KPU KMTETI',
          icon: 'Vote',
          deskripsi: 'Memilih Ketua Pengurus Harian KMTETI FT UGM.',
        }
      ]
    } else {
       prokerData = []
    }

    await payload.create({
      collection: 'bso',
      data: {
        nama: bso.nama,
        detail: bso.detail,
        logo: bso.logo,
        header: bso.header,
        tujuan: bso.tujuan,
        deskripsi_tujuan: bso.deskripsi_tujuan,
        proker: prokerData,
      },
    })
    console.log(`Seeded BSO: ${bso.nama}`)
  }

  console.log('BSO Seeding complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
