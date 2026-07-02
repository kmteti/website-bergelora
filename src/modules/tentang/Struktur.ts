export interface BoDMember {
  name: string
  role: string
  linkedin?: string
  src: string
}

export interface BoDDivision {
  division: string
  members: BoDMember[]
}

export const BoDData: Record<string, BoDDivision[]> = {
  "2025/2026": [
    {
      division: "Pengurus Harian",
      members: [
        {
          name: "Muhammad Farrel Al Ghazy",
          role: "Ketua KMTETI",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
        {
          name: "Bagus Wicaksono",
          role: "Wakil Ketua KMTETI",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Divisi Adkesma",
      members: [
        {
          name: "Faris Athallah",
          role: "Ketua Divisi Adkesma",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Divisi Mikat",
      members: [
        {
          name: "Rafi Muhammad",
          role: "Ketua Divisi Mikat",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Divisi Sosmas",
      members: [
        {
          name: "Aulia Nur Fajri",
          role: "Ketua Divisi Sosmas",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "BPO",
      members: [
        {
          name: "Hilmi Wismadi",
          role: "Ketua BPO",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Divisi Humas",
      members: [
        {
          name: "Daffa Ramadhan",
          role: "Ketua Divisi Humas",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Divisi Workshop",
      members: [
        {
          name: "Muhammad Khoirunas",
          role: "Ketua Divisi Workshop",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Divisi Electropreneur",
      members: [
        {
          name: "Nesta Khoirunas",
          role: "Ketua Divisi Electropreneur",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Divisi Infokom",
      members: [
        {
          name: "Aulia Nur Fajri Tri Anggoro",
          role: "Ketua Divisi Infokom",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
    {
      division: "Badan Semi Otonom",
      members: [
        {
          name: "Arya Wijaya",
          role: "Ketua BSO Beacon",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
        {
          name: "Fathur Rahman",
          role: "Ketua BSO Night Login",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
        {
          name: "Giri Kusuma",
          role: "Ketua BSO Magatrika",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
        {
          name: "Hafizhuddin",
          role: "Ketua BSO SKI Al-Hannaan",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
        {
          name: "Irfan Zidni",
          role: "Ketua BSO SKK DTETI",
          linkedin: "https://www.linkedin.com/",
          src: "/images/landing/hero/hero.webp",
        },
      ],
    },
  ],
}
