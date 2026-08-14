import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { lucideIconOptions } from '../src/collections/lucide-icons'

const realDivisiData = [
  {
    nama: "Adkesma",
    slug: "adkesma",
    header: "/images/divisi/adkesma.webp",
    logo: "/logo/divisi/adkesma.svg",
    detail: "Advokasi dan Kesejahteraan Mahasiswa",
    tujuan: "Kesejahteraan Mahasiswa adalah Tanggung Jawab Kami",
    deskripsi_tujuan: "Sebagai fasilitator dan advokator, Adkesma mendampingi mahasiswa DTETI dalam bidang akademik maupun kesejahteraan untuk memastikan kelancaran perkuliahan.",
    proker: [
      { nama: "Forum Warga TETI (FORWATI)", deskripsi: "Penjaringan aspirasi melalui pengisian formulir digital (kuesioner) yang dilanjutkan dengan sesi audiensi interaktif.", icon: "MessageSquare" },
      { nama: "Aspirasi Umum dan Aspirasi Akademis", deskripsi: "Menyediakan layanan advokasi terpusat untuk permasalahan akademik (UKT, perkuliahan) maupun non-akademik (konseling, kekerasan seksual).", icon: "Megaphone" },
      { nama: "Tracer Study Alumni DTETI", deskripsi: "Melakukan pendataan, pelacakan, dan survei kepada lulusan (alumni) DTETI untuk menghimpun data masa tunggu kerja dan sebaran industri.", icon: "Search" },
      { nama: "Kunjungan Industri", deskripsi: "Kunjungan langsung ke perusahaan relevan untuk pemaparan profil, pengenalan budaya kerja, dan peluang magang.", icon: "Briefcase" },
      { nama: "Sosialisasi Kerja Praktik (SOSKP)", deskripsi: "Forum sosialisasi terpadu pemaparan prosedur formal Kerja Praktik dan sesi peer-sharing pengalaman praktis.", icon: "BookOpen" },
      { nama: "Bank Materi", deskripsi: "Inventarisasi bahan ajar (slide presentasi, buku referensi, soal ujian) secara berkala yang dapat diakses mahasiswa.", icon: "Database" },
      { nama: "Perekrutan Asisten Akademik", deskripsi: "Mewadahi mahasiswa yang berminat mengembangkan kompetensi dengan menjadi asisten tutorial maupun praktikum.", icon: "UserPlus" },
      { nama: "Info Lomba dan Beasiswa (ILB)", deskripsi: "Kurasi, pengolahan, dan publikasi informasi terkini mengenai perlombaan dan beasiswa melalui media sosial.", icon: "Trophy" },
      { nama: "Capstone Resource Sharing Program (CRSP)", deskripsi: "Inventarisasi komponen/properti proyek capstone terdahulu untuk dikelola dan didistribusikan kepada yang membutuhkan.", icon: "Share2" },
      { nama: "Media Adkesma", deskripsi: "Mengelola platform media sosial untuk publikasi konten informatif terkait isu akademik dan non-akademik.", icon: "Instagram" }
    ]
  },
  {
    nama: "BPO",
    slug: "bpo",
    header: "/images/divisi/Adkesma1.webp",
    logo: "/logo/divisi/bpo.svg",
    detail: "Biro Pengembangan Organisasi",
    tujuan: "Mengembangkan Kualitas Internal Organisasi",
    deskripsi_tujuan: "BPO berfokus pada pengembangan sumber daya manusia internal pengurus KMTETI melalui pembekalan, evaluasi, dan apresiasi.",
    proker: [
      { nama: "Rapat Evaluasi Pengurus", deskripsi: "Musyawarah evaluasi kinerja pengurus (Evaluasi Tengah Tahun & Akhir Tahun).", icon: "LineChart" },
      { nama: "Database & LinkedIn Pengurus", deskripsi: "Pengelolaan identitas dan progres kepengurusan serta profil profesional pengurus di platform LinkedIn.", icon: "Linkedin" },
      { nama: "Birthday Calendar", deskripsi: "Merayakan ulang tahun pengurus setiap bulannya untuk memunculkan suasana kekeluargaan.", icon: "Gift" },
      { nama: "SOTM (Staff of the Three Month)", deskripsi: "Apresiasi kinerja terbaik di tiap biro/divisi dalam kurun waktu 3 bulan.", icon: "Award" },
      { nama: "Pendataan Mahasiswa Berprestasi", deskripsi: "Mendata prestasi mahasiswa DTETI setiap tiga bulan sekali.", icon: "Star" },
      { nama: "Penilaian Kinerja oleh Angket", deskripsi: "Mengevaluasi serta mengukur kesuksesan implementasi proyek menggunakan KPI (Key Performance Indicator).", icon: "ClipboardList" },
      { nama: "Closing Cabinet", deskripsi: "Apresiasi penutup satu tahun periode kepengurusan.", icon: "PartyPopper" },
      { nama: "TETI Lab Skill", deskripsi: "Pengenalan lingkungan DTETI bagi mahasiswa baru melalui berbagai kegiatan dan pelatihan.", icon: "Wrench" },
      { nama: "Masterclass", deskripsi: "Seminar dan forum diskusi grup mengenai kemampuan berorganisasi dan softskill.", icon: "Users" },
      { nama: "Makrab dan LED (Let's Enjoy D games)", deskripsi: "Kegiatan keakraban informal berupa permainan yang melatih kerja sama tim.", icon: "Gamepad2" },
      { nama: "Open Recruitment Pengurus Baru", deskripsi: "Seleksi pengurus baru masa bakti selanjutnya melalui pendaftaran, penugasan, dan wawancara.", icon: "UserCheck" },
      { nama: "Well Being Check Up", deskripsi: "Pendekatan sistematis untuk menilai kesejahteraan staf mencakup mental, emosional, dan sosial.", icon: "HeartPulse" }
    ]
  },
  {
    nama: "EP",
    slug: "electropreneur",
    header: "/images/divisi/Adkesma1.webp",
    logo: "/logo/divisi/ep.svg",
    detail: "Electropreneur",
    tujuan: "Menciptakan Jiwa Wirausaha yang Inovatif",
    deskripsi_tujuan: "Memfasilitasi mahasiswa untuk berinovasi dan mengembangkan bisnis melalui pelatihan, praktik langsung, serta jejaring pendanaan.",
    proker: [
      { nama: "Jaket KMTETI", deskripsi: "Merancang, pemesanan, promosi, dan distribusi jaket identitas pengurus KMTETI.", icon: "Shirt" },
      { nama: "EP Merch", deskripsi: "Merancang dan menjual merchandise eksklusif Electropreneur.", icon: "ShoppingBag" },
      { nama: "TETI Student Cafe", deskripsi: "Warung kantin kejujuran mahasiswa yang dikelola bersama departemen, menyediakan makanan dan alat tulis.", icon: "Coffee" },
      { nama: "Bincang Bincang Bisnis", deskripsi: "Kunjungan industri ke perusahaan berbidang teknologi untuk belajar kewirausahaan.", icon: "TrendingUp" },
      { nama: "Postingan Bisnis", deskripsi: "Publikasi rutin konten edukasi bisnis untuk memberikan wawasan kewirausahaan.", icon: "Smartphone" },
      { nama: "EP Class", deskripsi: "Pelatihan kewirausahaan (bekerja sama dengan Workshop) untuk mengembangkan ide bisnis.", icon: "Lightbulb" },
      { nama: "Entrepreneur Day", deskripsi: "Webinar/talkshow dengan narasumber praktisi bisnis untuk melatih jiwa kewirausahaan.", icon: "CalendarDays" },
      { nama: "Bank Sponsor", deskripsi: "Membuat database kontak perusahaan untuk mempermudah pencarian sponsor event DTETI.", icon: "Building2" }
    ]
  },
  {
    nama: "Humas",
    slug: "humas",
    header: "/images/divisi/Adkesma1.webp",
    logo: "/logo/divisi/humas.svg",
    detail: "Hubungan Masyarakat",
    tujuan: "Menjalin Relasi dan Membangun Citra Positif",
    deskripsi_tujuan: "Menjadi jembatan komunikasi KMTETI dengan pihak luar, instansi, maupun alumni guna memperluas jaringan.",
    proker: [
      { nama: "Openhouse DTETI & Capstone Expo", deskripsi: "Pemaparan informasi program studi serta pameran inovasi tugas akhir (capstone) untuk siswa SMA dan masyarakat umum.", icon: "School" },
      { nama: "Kunjungan", deskripsi: "Studi banding ke himpunan mahasiswa lain di lintas fakultas atau universitas untuk bertukar ide dan program.", icon: "Train" },
      { nama: "Contact Person", deskripsi: "Menjalankan peran sebagai jalur komunikasi utama pihak eksternal untuk menghubungi KMTETI.", icon: "PhoneCall" },
      { nama: "Konten Kreatif", deskripsi: "Pembuatan video pendek dokumenter yang menceritakan kehidupan dan dinamika perkuliahan di DTETI.", icon: "Clapperboard" },
      { nama: "Jejaring Alumni", deskripsi: "Membangun hubungan kuat dengan alumni melalui program 'Alumni Back to Campus' dan publikasi 'Career Path'.", icon: "Network" }
    ]
  },
  {
    nama: "Infokom",
    slug: "infokom",
    header: "/images/divisi/Adkesma1.webp",
    logo: "/logo/divisi/infokom.svg",
    detail: "Informasi dan Komunikasi",
    tujuan: "Pusat Media, Informasi, dan Kreativitas",
    deskripsi_tujuan: "Mengelola arus publikasi resmi KMTETI melalui karya desain, jurnalisme, dan multimedia secara komprehensif.",
    proker: [
      { nama: "MeIDEA", deskripsi: "Webinar desain dan media untuk mengembangkan personal branding peserta.", icon: "MonitorPlay" },
      { nama: "TETI-on the-Wall", deskripsi: "Mading lorong kampus yang berisi poster infografis dokumentasi kegiatan KMTETI.", icon: "Wallpaper" },
      { nama: "Web KMTETI", deskripsi: "Pembuatan dan maintenance website resmi sebagai portal utama KMTETI.", icon: "Globe" },
      { nama: "Peringatan Hari Besar Infografis", deskripsi: "Publikasi poster infografis memperingati hari besar nasional maupun internasional.", icon: "Image" },
      { nama: "Informasi Menggelitik", deskripsi: "Infografis bulanan yang mengangkat isu-isu menarik atau unik seputar DTETI dan teknologi.", icon: "Smile" },
      { nama: "TETI Appreciation Post", deskripsi: "Apresiasi khusus di media sosial bagi mahasiswa DTETI yang menjuarai perlombaan.", icon: "Medal" },
      { nama: "Bedah Guideline Design", deskripsi: "Transfer materi grand design dan pedoman visualisasi kepada seluruh pengurus.", icon: "Palette" },
      { nama: "Media Sosial KMTETI", deskripsi: "Pengelolaan seluruh kanal media (Instagram, Twitter, TikTok, Youtube) KMTETI.", icon: "Share2" },
      { nama: "Kalender KMTETI", deskripsi: "Penyusunan jadwal kegiatan bulanan organisasi.", icon: "Calendar" },
      { nama: "Voltamagz & Elektropos", deskripsi: "Penerbitan majalah dan buletin cetak/online berisi jurnalistik seputar DTETI.", icon: "Newspaper" },
      { nama: "Foto Kabinet", deskripsi: "Sesi foto resmi seluruh kepengurusan KMTETI periode berjalan.", icon: "Camera" },
      { nama: "After Movie KMTETI", deskripsi: "Produksi video rekapitulasi memori seluruh kegiatan selama satu tahun kepengurusan.", icon: "Film" }
    ]
  },
  {
    nama: "Mikat",
    slug: "minat-dan-bakat",
    header: "/images/divisi/Adkesma1.webp",
    logo: "/logo/divisi/mikat.svg",
    detail: "Minat dan Bakat",
    tujuan: "Menyalurkan Bakat Olahraga dan Seni Mahasiswa",
    deskripsi_tujuan: "Memfasilitasi kreativitas mahasiswa di bidang non-akademik agar tercipta prestasi dan keseimbangan di luar bangku kuliah.",
    proker: [
      { nama: "PORSENITETI", deskripsi: "Pekan Olahraga dan Seni antar angkatan mahasiswa DTETI (Futsal, Basket, Voli, Badminton).", icon: "Trophy" },
      { nama: "Olahraga Bareng", deskripsi: "Latihan rutin santai untuk membangun kebugaran dan keakraban.", icon: "Dumbbell" },
      { nama: "Latihan Rutin Kontingen", deskripsi: "Fasilitasi pelatihan khusus bagi atlet untuk persiapan Teknisiade.", icon: "Target" },
      { nama: "ENFORUN", deskripsi: "Kegiatan fun run yang melibatkan civitas akademik DTETI.", icon: "Footprints" },
      { nama: "EIMS (E-Sport)", deskripsi: "Kompetisi E-Sport bagi mahasiswa pencinta game elektronik.", icon: "Gamepad2" },
      { nama: "TETI Talent Day", deskripsi: "Kompetisi pertunjukan seni (musik, tari, drama) untuk mahasiswa baru.", icon: "MicStage" },
      { nama: "KMTETI Goes to Teknisiade", deskripsi: "Pemberangkatan kontingen mahasiswa DTETI untuk bertanding di ajang olahraga fakultas.", icon: "Flag" },
      { nama: "Checksound Supporter", deskripsi: "Penggalangan dukungan suporter solid (SUTET) untuk menyemangati atlet saat bertanding.", icon: "Drum" }
    ]
  },
  {
    nama: "Sosmas",
    slug: "sosmas",
    header: "/images/divisi/Adkesma1.webp",
    logo: "/logo/divisi/sosmas.svg",
    detail: "Sosial Masyarakat",
    tujuan: "Mengabdi dan Berdampak bagi Masyarakat Luas",
    deskripsi_tujuan: "Mewujudkan pengamalan Tridharma Perguruan Tinggi dengan memupuk empati mahasiswa terhadap isu sosial masyarakat.",
    proker: [
      { nama: "Desa Binaan", deskripsi: "Program pengabdian masyarakat berkelanjutan berbasis teknologi di desa mitra (contoh: Piyungan).", icon: "Tent" },
      { nama: "KMTETI Berbagi", deskripsi: "Penggalangan dan distribusi paket sembako kepada karyawan non-dinas dan masyarakat sekitar kampus.", icon: "Box" },
      { nama: "KMTETI Beramal", deskripsi: "Aksi penggalangan dana kemanusiaan secara rutin maupun insidental saat terjadi bencana alam.", icon: "HandHeart" },
      { nama: "KMTETI Mengabdi", deskripsi: "Kunjungan dan penyelenggaraan kegiatan sosial edukatif di panti asuhan atau panti jompo.", icon: "Home" },
      { nama: "Forum Sosmas Teknik", deskripsi: "Kolaborasi program pengabdian bersama divisi sosial masyarakat himpunan lain di Fakultas Teknik.", icon: "Users" }
    ]
  },
  {
    nama: "Workshop",
    slug: "workshop",
    header: "/images/divisi/Adkesma1.webp",
    logo: "/logo/divisi/ws.svg",
    detail: "Workshop KMTETI",
    tujuan: "Meningkatkan Hard Skill Teknologi Mahasiswa",
    deskripsi_tujuan: "Biro khusus yang memberikan fasilitasi pelatihan teknis keteknikan dan pengembangan teknologi secara komprehensif.",
    proker: [
      { nama: "Pelatihan Genap & Ganjil", deskripsi: "Pelatihan intensif rutin untuk materi spesifik seperti STM32, Arduino, Matlab, Proteus, PLC, Web Dev, dan Data Science.", icon: "Code" },
      { nama: "Power Up PS Edition", deskripsi: "Workshop penggunaan software Power System ketenagalistrikan standar industri seperti Digsilent dan ETAP.", icon: "Zap" },
      { nama: "NESCO", deskripsi: "National Electrical Power System Competition, perlombaan tingkat nasional bidang ketenagalistrikan.", icon: "Trophy" },
      { nama: "Technocorner", deskripsi: "Kompetisi Robotik, Electrical Engineering, dan IoT (Internet of Things) berskala nasional.", icon: "Cpu" },
      { nama: "Syllabuscope", deskripsi: "Pengenalan mata kuliah peminatan agar mahasiswa tidak salah pilih konsentrasi studi.", icon: "BookOpen" },
      { nama: "Whats'up Professor?", deskripsi: "Wawancara interaktif dengan dosen untuk mengenalkan fokus penelitian laboratorium mereka kepada mahasiswa.", icon: "GraduationCap" }
    ]
  }
]

async function seed() {
  const payload = await getPayload({ config })
  console.log('Cleaning up old divisi and media (if any)...')

  await payload.delete({ collection: 'divisi', where: {} })
  
  // Clean media ONLY if they belong to our known logo/header injections to be super safe.
  // But since we just want to inject data properly without touching media, we'll skip deleting media.
  // Let the user delete the 16 junk media manually as advised.
  
  console.log('Seeding real divisi data from PDF...')

  for (const div of realDivisiData) {
    try {
      await payload.create({
        collection: 'divisi',
        data: {
          nama: div.nama,
          slug: div.slug,
          detail: div.detail,
          tujuan: div.tujuan,
          deskripsi_tujuan: div.deskripsi_tujuan,
          logo: div.logo,
          header: div.header,
          proker: div.proker.map(p => {
            let iconName = p.icon || 'Trophy';
            const isValid = lucideIconOptions.find(opt => opt.value === iconName);
            if (!isValid) {
              console.log(`Warning: Icon ${iconName} not found. Fallback to Trophy.`);
              iconName = 'Trophy';
            }
            return {
              namaProker: p.nama,
              deskripsi: p.deskripsi,
              icon: iconName
            };
          })
        },
      })
      console.log(`Successfully injected: ${div.nama} (${div.proker.length} proker)`)
    } catch (err: any) {
      console.log(`Failed to create Divisi ${div.nama}: ${err.message}`)
    }
  }

  console.log('Real data seed completed!')
  process.exit(0)
}

seed().catch(console.error)
