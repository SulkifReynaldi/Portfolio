export interface ProjectItem {
  id: string;
  name: string;
  category: "Web Development" | "Dashboard Development" | "Automation" | "Full-Stack";
  description: string;
  problemStatement: string;
  solutionStatement: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Concept / Prototype";
  image: string;
  githubUrl?: string; // Kosongkan atau beri undefined jika belum tersedia
  liveDemoUrl?: string; // Kosongkan atau beri undefined jika belum tersedia
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "personal-portfolio",
    name: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "Website portfolio profesional untuk memperlihatkan keahlian teknis, pengalaman kerja, dan layanan pengembangan digital dengan standar arsitektur modern.",
    problemStatement:
      "Kebutuhan akan representasi digital profesional yang membedakan diri dari template generik, memuat identitas visual premium, dan memiliki kecepatan muat tinggi.",
    solutionStatement:
      "Membangun arsitektur Next.js App Router dengan Tailwind CSS v4, TypeScript, animasi interaktif halus dari Motion, serta sistem pemisahan data yang memudahkan pembaruan berkala.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    status: "Completed",
    image: "/images/projects/project-01.png",
    githubUrl: undefined, // Belum dipublikasikan, tombol akan menampilkan status informatif
    liveDemoUrl: undefined, // Dapat diisi saat sudah dideploy ke domain pribadi
    featured: true
  },
  {
    id: "driver-management-dashboard",
    name: "Driver Management Dashboard",
    category: "Dashboard Development",
    description:
      "Konsep dashboard untuk memonitor aktivitas operasional, performa driver, dan pelaporan data secara terstruktur.",
    problemStatement:
      "Pengelolaan armada dan data driver secara manual seringkali memicu kesalahan pencatatan, keterlambatan laporan perjalanan, dan kesulitan dalam evaluasi kinerja harian.",
    solutionStatement:
      "Merancang antarmuka dashboard modular yang menyajikan metrik performa visual, pelacakan rute, riwayat perjalanan, serta integrasi filter status real-time.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    status: "Concept / Prototype",
    image: "/images/projects/Dashboard-DM.png",
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: true
  },
  {
    id: "business-process-automation",
    name: "Business Process Automation",
    category: "Automation",
    description:
      "Solusi automasi workflow untuk mengurangi pekerjaan manual dan meningkatkan efisiensi proses bisnis.",
    problemStatement:
      "Proses input data berulang antar spreadsheet memakan waktu berjam-jam setiap minggu serta rentan terhadap human error saat rekonsiliasi data inventaris atau pesanan.",
    solutionStatement:
      "Mengembangkan skrip automasi berbasis Google Apps Script yang menghubungkan form input dengan database Google Sheets secara otomatis, disertai notifikasi email dan log eksekusi.",
    technologies: ["Google Apps Script", "Google Sheets", "JavaScript", "Automation"],
    status: "Concept / Prototype",
    image: "/images/projects/project-03.png",
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: true
  }
];
