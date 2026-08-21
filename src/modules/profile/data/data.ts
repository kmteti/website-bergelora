export interface StrukturMember {
  nama: string
  jabatan: string
  foto: string
}

export interface StrukturKabinet {
  tahun: string
  member: StrukturMember[]
}

export const struktur_kabinet: StrukturKabinet[] = [
  {
    tahun: "2025/2026",
    member: [
      {
        nama: "Muhammad Farrel Al Ghazy",
        jabatan: "Ketua Pengurus Harian",
        foto: "/images/profile/struktur/20252026/kahim.webp",
      },
      {
        nama: "M. Zeva Hardi",
        jabatan: "Sekretaris Jenderal",
        foto: "/images/profile/struktur/20252026/sekjend.webp",
      },
      {
        nama: "Arifa Kartini",
        jabatan: "Sekretaris Umum",
        foto: "/images/profile/struktur/20252026/sekre-umum.webp",
      },
      {
        nama: "Hana Amalia",
        jabatan: "Bendahara Umum",
        foto: "/images/profile/struktur/20252026/benda-umum.webp",
      },
      {
        nama: "Nasywa Arista Shafa",
        jabatan: "Kerumahtanggaan 1",
        foto: "/images/profile/struktur/20252026/krt.webp",
      },
      {
        nama: "Alzenna Bunga Rachel",
        jabatan: "Ketua BPO",
        foto: "/images/profile/struktur/20252026/kadiv-bpo.webp",
      },
      {
        nama: "Akio Afifian Ahsan",
        jabatan: "Ketua Electropreneur",
        foto: "/images/profile/struktur/20252026/kadiv-ep.webp",
      },
      {
        nama: "Aaliyah Barakatullah",
        jabatan: "Ketua Adkesma",
        foto: "/images/profile/struktur/20252026/kadiv-adkesma.webp",
      },
      {
        nama: "Emmanuela Chelsea",
        jabatan: "Ketua Infokom",
        foto: "/images/profile/struktur/20252026/kadiv-infokom.webp",
      },
      {
        nama: "Dien Scientivan",
        jabatan: "Ketua Humas",
        foto: "/images/profile/struktur/20252026/kadiv-humas.webp",
      },
      {
        nama: "Rasyadwa Arsya",
        jabatan: "Ketua Sosmas",
        foto: "/images/profile/struktur/20252026/kadiv-sosmas.webp",
      },
      {
        nama: "Sadhani Girind",
        jabatan: "Ketua Mikat",
        foto: "/images/profile/struktur/20252026/kadiv-mikat.webp",
      },
      {
        nama: "Rida Larasati",
        jabatan: "Ketua Workshop",
        foto: "/images/profile/struktur/20252026/kadiv-ws.webp",
      },
      {
        nama: "Christian Bo Constantine",
        jabatan: "Ketua BSO MPM",
        foto: "/images/profile/struktur/20252026/ketua-mpm.webp",
      },
      {
        nama: "M. Basel Fawaz Sigit",
        jabatan: "Ketua BSO Magatrika",
        foto: "/images/profile/struktur/20252026/ketua-magatrika.webp",
      },
      {
        nama: "Calvin",
        jabatan: "Ketua BSO Night Login",
        foto: "/images/profile/struktur/20252026/ketua-nl.webp",
      },
      {
        nama: "Zahra Pinctadella",
        jabatan: "Ketua BSO Bionce",
        foto: "/images/profile/struktur/20252026/ketua-bionce.webp",
      },
      {
        nama: "Adam Abdillah Hanafi",
        jabatan: "Ketua BSO SKI Al-Hannan",
        foto: "/images/profile/struktur/20252026/ketua-ski.webp",
      },
      {
        nama: "Banu Ranu Basuhjiwa",
        jabatan: "Ketua BSO SKK DTETI",
        foto: "/images/profile/struktur/20252026/ketua-skk.webp",
      },
    ],
  },
];