import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

const picData: Record<string, Record<string, string[]>> = {
  "bpo": {
    "Rapat Evaluasi Pengurus": ["Manuela Adelynn Sitompul", "Muhammad Nabil Fadhila", "Nazma Desyana Putri", "Raissha Hakim"],
    "Database & LinkedIn Pengurus": ["Alzenna Bunga Rachel"],
    "Birthday Calendar": ["Alzenna Bunga Rachel", "Nazma Desyana Putri", "Utaminingsih Yuli Astuti"],
    "SOTM (Staff of the Three Month)": ["Muhammad Alif Aryaguna", "Rayhan Nittala", "Ramon Fabian"],
    "Pendataan Mahasiswa Berprestasi": ["Alzenna Bunga Rachel", "Adelynn", "Aretha Putri Umardani", "Yasmin Houri"],
    "Penilaian Kinerja oleh Angket": ["Muhammad Nabil Fadhila", "Theo Immanuel Sanyoto", "Salma Karimah", "Chelsea Auryn"],
    "Closing Cabinet": ["Manuela Adelynn Sitompul", "Zakhrova Salsabila", "Yasmin Houri", "Raissha Hakim"],
    "TETI Lab Skill": ["Theo Immanuel Sanyoto", "Fauta Fahrezi"],
    "Masterclass": ["Alzenna Bunga Rachel", "Manuela Adelynn Sitompul", "Rayhan Nittala", "Aretha Putri Umardani"],
    "Makrab dan LED (Let's Enjoy D games)": ["Muhammad Alif Aryaguna", "Fauta Fahrezi", "Utaminingsih Yuli Astuti"],
    "Open Recruitment Pengurus Baru": ["Muhammad Alif Aryaguna", "Zakhrova Salsabila", "Ramon Fabian", "Salma Karimah"],
    "Well Being Check Up": ["Alzenna Bunga Rachel", "Manuela Adelynn Sitompul"]
  },
  "adkesma": {
    "Forum Warga TETI (FORWATI)": ["Naznin Suha", "Muhammad Dimas Aryobagaskara", "Rafifah Nur Aida Putranti", "La Jingga Akadewi"],
    "Aspirasi Umum dan Aspirasi Akademis": ["Madah Sulam Cahya", "Azka Muhammad Ghaits", "Shafiya Nuril Hayya", "Muhammad Yusuf Akbar", "Nida Nur Hafizhah", "Regina Titian Pinasti"],
    "Tracer Study Alumni DTETI": ["Zahra Elfatima", "Cikal Bhagaskoro", "Ibrahim Hanif Roland Saputra", "Yohana Novena", "La Jingga Akadewi"],
    "Kunjungan Industri": ["Nabil Fitriansyah Boernama", "Naznin Suha", "Rafifah Nur Aida Putranti", "Nida Nur Hafizhah", "Muhammad Haykal Faizul Haq"],
    "Sosialisasi Kerja Praktik (SOSKP)": ["Abang Hilmi Orisata Syahputra", "Muhammad Yusuf Akbar", "Mangihut Tua Simbolon"],
    "Bank Materi": ["Nabil Fitriansyah Boernama", "Madah Sulam Cahya", "Fadhel Muhammad Falafi", "Aqila Kresna Arrafi", "Kareema Edna Annisa Hanif"],
    "Perekrutan Asisten Akademik": ["Alfian Adicandra", "Zahra Elfatima", "Aqila Kresna Arrafi", "Yohana Novena", "Melvin Efendy"],
    "Info Lomba dan Beasiswa (ILB)": ["Azka Muhammad Ghaits", "Cikal Bhagaskoro", "Ibrahim Hanif Roland Saputra", "Regina Titian Pinasti", "Melvin Efendy"],
    "Capstone Resource Sharing Program (CRSP)": ["Abang Hilmi Orisata Syahputra", "Muhammad Dimas Aryobagaskara", "Muhammad Haykal Faizul Haq", "Yohana Novena"],
    "Media Adkesma": ["Shafiya Nuril Hayya", "Zahra Elfatima", "Alfian Adicandra", "Fadhel Muhammad Falafi", "Mangihut Tua Simbolon", "Kareema Edna Annisa Hanif"]
  },
  "electropreneur": {
    "Jaket KMTETI": ["Mayravivania Syahda Charisa"],
    "EP Merch": ["Ramzi Alfito Rizky"],
    "TETI Student Cafe": ["Akio Afifian Ahsan"],
    "Bincang Bincang Bisnis": ["Garjita Adicandra"],
    "Postingan Bisnis": ["Ranggawikan Wastusatwika"],
    "EP Class": ["Palupi Fitria Ningrum"],
    "Entrepreneur Day": ["Akio Afifian Ahsan"],
    "Bank Sponsor": ["Alyssa Nursadina"]
  },
  "humas": {
    "Openhouse DTETI & Capstone Expo": ["Dien Muhammad Scientivan Kurniapramono", "Monica Anastasya Dantina", "Muhammad Azad Moqtafin", "Nisrina Qurrata Ayuni", "Bintang Khalifa Hadianto", "Akmal Rafli Fauzan", "Revel Mahdirizqia Putra Pradana", "Fairuz Athaya Khairunnisa"],
    "Kunjungan": ["Faaid Sakhaa", "Ninda Alifa Rachmayanti", "Ahmad Wildan Abdullah", "Muhammad Althaf Adzaki", "Ali Ridwan", "Zulfa Ainin Nawa", "Raisya Putri Salsabila"],
    "Contact Person": ["Faqih Zulfikar Alkaha", "Nabila Putri Barokah", "Ali Ridwan", "Zulfa Ainin Nawa"],
    "Konten Kreatif": ["Shofwah Syazwina", "Aurellia Safa Madrim", "Gavrila Nareswari Sihaloho", "Nadya Madeline Simamora"],
    "Jejaring Alumni": ["Dien Muhammad Scientivan Kurniapramono", "Ninda Alifa Rachmayanti", "Muhammad Rozaq Barkah", "Dhafina Naila Irham"]
  },
  "infokom": {
    "MeIDEA": ["Syefina Rifa' Maheswari"],
    "TETI-on the-Wall": ["Aflah Robithoh Wijaksoro"],
    "Web KMTETI": ["Nabil Aufa Danaputra"],
    "Peringatan Hari Besar Infografis": ["Nabil Aufa Danaputra", "Gloria Aurora"],
    "Informasi Menggelitik": ["Bayu Rahmat Kurnia", "Delfina Neysa Rahma", "Syefina Rifa' Maheswari", "Yohana Emmanuela"],
    "TETI Appreciation Post & TETI Champion": ["Rayya Tegar Amisani", "Muhammad Abid Hakim"],
    "Bedah Guideline dan Transfer Materi Grand Design KMTETI": ["Aflah Robithoh Wijaksoro", "Zafaroni Fikri Alfatta"],
    "Media Sosial KMTETI": ["Najwa Azhari", "Debert Jamie Chanderson"],
    "Kalender KMTETI": ["Kalya Naura Farabias", "Muhammad Azmi Noor Falah"],
    "Konten Interaktif": ["Maulida Musyarofah", "Leandra Aryafidelia"],
    "Voltamagz": ["Muhammad Afiq Mirza Choiruzan"],
    "Elektropos": ["Ezekiel Markhesywan Rezon"],
    "Voltanews": ["Sahil Ahmad Fadholi"],
    "Foto Kabinet": ["Emmanuela Graceika Chelsea Kristiana", "Daneswara Ramadhani", "Naufal Ramadhan"],
    "Video Profil KMTETI": ["Arya Raditya Ardana", "Rheyvan Vais"],
    "Video Bulanan KMTETI": ["Arya Raditya Ardana", "Muhammad Faiz Eka Pradana", "Daneswara Ramadhani"],
    "After Movie KMTETI": ["Muhammad Fachry Alfareeza", "Afnan Resa Al Fiqri"]
  },
  "minat-dan-bakat": {
    "PORSENITETI": ["Daniel Panggabean"],
    "Olahraga Bareng": ["Raka Bagus Samudra"],
    "Latihan Rutin 1": ["M. Rafi Azka Rabbani", "Regine Levana Xaviera Al Subhan"],
    "Latihan Rutin 2": ["M. Rafi Azka Rabbani", "Regine Levana Xaviera Al Subhan"],
    "ENFORUN": ["Alya Haniyah"],
    "EIMS": ["Ryogas Alfajr"],
    "TETI Talent Day": ["Syirin Nabilah"],
    "Checksound Supporter": ["Fransiscus Asisi Aditya Putranto"],
    "KMTETI Goes to Teknisiade": ["Naufal Alhafizh"]
  },
  "sosmas": {
    "Desa Binaan": ["Rasyadwa Arsya Irnantyanto", "Dharu Bintang Mahendratama", "Aulia Nur Fajri Tri Anggoro", "Aurelia Fatha Ghaisani", "Nadia Santoso"],
    "KMTETI Berbagi": ["Pniel Umbu Kaledi", "Salwa Vindra Sasikirana"],
    "KMTETI Beramal": ["Muhammad Affandi Argya Bagaskara", "Kiara Hafza Maharani", "Felicia Grace", "Adzkiya Fauzil Adhim"],
    "KMTETI Mengabdi": ["Laihatussyifa Rindu Pramestiani", "Violin Mulya"],
    "Forum Sosmas Teknik": ["Akhnaf Fawzan Yogatrisna", "Nayla Thalita", "Arin Evangelica Patabang", "Zahwa Agroli"]
  },
  "workshop": {
    "Pelatihan Genap": ["Muhammad Bintang Hidayatullah Marbun", "Muhammad Zakiyyuddin Abdul Adhiim", "Hanifah Nanisya Putri", "Arnold Gavrael", "Maihana Syarifa Putri", "Rakan Hendian Ramadhan"],
    "Bootcamp": [],
    "El Nino": [],
    "Pelatihan Ganjil": ["Yohanes Anthony Saputra", "Raalfhi Yholano", "Nathanael Satya Saputra", "Maihana Syarifa Putri", "Rida Larasati"],
    "TETI Programming Week": ["Muhammad Zakiyyuddin Abdul Adhiim", "Bagas Adjie Pamungkas", "Maihana Syarifa Putri", "Vania Carmia", "Muhammad Tsaqif P."],
    "Bedah Guideline dan Transfer Materi Grand Design KMTETI": ["Aflah Robithoh Wijaksoro", "Zafaroni Fikri Alfatta"],
    "Technocorner": ["Muhammad Nabil Fadhila"],
    "Website Workshop": ["Yohanes Anthony Saputra"]
  }
};

async function seedPics() {
  const payload = await getPayload({ config })
  
  const allDivisi = await payload.find({ collection: 'divisi', limit: 100 });
  
  for (const div of allDivisi.docs) {
    const slug = div.slug;
    if (!slug || !picData[slug]) continue;
    
    const mappedPics = picData[slug];
    
    // Update the prokers with anggota
    const updatedProkers = (div.proker || []).map((p: any) => {
      // Clean up the name for matching (e.g. matching keys without trailing spaces)
      const pName = p.namaProker.trim();
      const picList = mappedPics[pName];
      if (picList && picList.length > 0) {
        return {
          ...p,
          anggota: picList.map(name => ({ nama: name }))
        };
      }
      return p;
    });

    try {
      await payload.update({
        collection: 'divisi',
        id: div.id,
        data: {
          proker: updatedProkers
        }
      });
      console.log(`Updated PICs for Divisi: ${div.nama}`);
    } catch (err: any) {
      console.log(`Failed to update PICs for ${div.nama}: ${err.message}`);
    }
  }

  console.log('PIC Seed completed!');
  process.exit(0);
}

seedPics().catch(console.error);
