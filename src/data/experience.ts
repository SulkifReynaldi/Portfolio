export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-Time" | "Contract" | "Freelance" | "Project-Based";
  responsibilities: string[];
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-01",
    role: "Freelance Full-Stack Developer & Automation Consultant",
    company: "Independent Practice",
    period: "2024 — Sekarang",
    location: "Remote / Indonesia",
    type: "Freelance",
    responsibilities: [
      "Merancang dan mengembangkan website profil serta aplikasi web interaktif menggunakan Next.js dan Tailwind CSS untuk klien bisnis UMKM.",
      "Mengembangkan skrip automasi pengolahan data Google Sheets menggunakan Google Apps Script guna mempercepat rekapitulasi operasional klien.",
      "Melakukan konsultasi teknis kebutuhan arsitektur digital dan optimasi performa website."
    ],
    achievements: [
      "Membantu klien menghemat waktu penginputan data harian hingga 70% melalui automasi alur kerja.",
      "Menyelesaikan implementasi sistem web tepat waktu dengan tingkat kepuasan tinggi dari pemangku kepentingan."
    ]
  },
  {
    id: "exp-02",
    role: "Web Developer Intern / Junior Developer",
    company: "Tech Development Initiative",
    period: "2023 — 2024",
    location: "Indonesia",
    type: "Project-Based",
    responsibilities: [
      "Berkolaborasi dalam tim pengembang untuk membangun komponen frontend reusable berbasis React dan TypeScript.",
      "Mengintegrasikan endpoint REST API backend dengan validasi form dan state management yang konsisten.",
      "Melakukan testing fungsional antarmuka dan perbaikan bug tampilan lintas browser."
    ],
    achievements: [
      "Berhasil memigrasikan sejumlah komponen UI statis ke modul dinamis yang mempermudah pemeliharaan jangka panjang.",
      "Meningkatkan skor performa halaman web pada Lighthouse melalui optimasi aset gambar dan penataan script."
    ]
  }
];
