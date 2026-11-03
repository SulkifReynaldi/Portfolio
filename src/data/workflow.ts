export interface WorkflowStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  icon: "Search" | "Boxes" | "Palette" | "Code2" | "CheckCircle2" | "Rocket";
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    tagline: "Memahami kebutuhan dan masalah klien",
    description:
      "Tahap awal berfokus pada diskusi mendalam untuk memetakan tujuan bisnis, kendala operasional yang dihadapi, target audiens, dan spesifikasi fungsional yang diperlukan.",
    details: [
      "Wawancara kebutuhan & pemetaan masalah",
      "Penyusunan dokumen cakupan kerja (Scope of Work)",
      "Penetapan timeline dan indikator keberhasilan"
    ],
    icon: "Search"
  },
  {
    step: "02",
    title: "Planning & Architecture",
    tagline: "Menyusun perencanaan dan arsitektur sistem",
    description:
      "Merancang fondasi teknis yang tepat mulai dari pemilihan stack teknologi, pemodelan skema database, perancangan struktur API, hingga alur data yang efisien.",
    details: [
      "Desain skema database & relasi entitas",
      "Perancangan arsitektur antarmuka & modul API",
      "Pemilihan teknologi pendukung yang scalable"
    ],
    icon: "Boxes"
  },
  {
    step: "03",
    title: "UI/UX Design",
    tagline: "Merancang tampilan dan pengalaman pengguna",
    description:
      "Menyusun wireframe dan visual interface yang elegan, intuitif, dan responsif dengan memprioritaskan kemudahan navigasi serta hierarki visual yang jelas.",
    details: [
      "Eksplorasi wireframe dan alur interaksi",
      "Penyusunan komponen desain konsisten",
      "Optimasi responsive layout mobile & desktop"
    ],
    icon: "Palette"
  },
  {
    step: "04",
    title: "Development",
    tagline: "Melakukan proses pengembangan aplikasi",
    description:
      "Mengeksekusi penulisan kode dengan standar clean code, type safety menggunakan TypeScript, arsitektur modular, dan praktik terbaik modern web.",
    details: [
      "Implementasi antarmuka frontend interaktif",
      "Pembangunan logika backend & integrasi database",
      "Automasi alur data dan integrasi API eksternal"
    ],
    icon: "Code2"
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    tagline: "Memastikan aplikasi berfungsi dengan baik",
    description:
      "Pengujian menyeluruh terhadap setiap fitur untuk menjamin stabilitas fungsional, performa kecepatan akses, kompatibilitas lintas perangkat, dan keamanan sistem.",
    details: [
      "Functional testing pada form dan navigasi",
      "Pengujian responsivitas layar & browser compatibility",
      "Optimasi performa Core Web Vitals"
    ],
    icon: "CheckCircle2"
  },
  {
    step: "06",
    title: "Deployment & Maintenance",
    tagline: "Melakukan deployment dan pemeliharaan sistem",
    description:
      "Peluncuran sistem ke lingkungan produksi (seperti Vercel atau server cloud), konfigurasi domain & SSL, serta penyediaan panduan dan dukungan pasca-peluncuran.",
    details: [
      "Deployment pipeline dengan CI/CD otomatis",
      "Pengaturan custom domain dan sertifikat SSL",
      "Monitoring performa & pemeliharaan berkala"
    ],
    icon: "Rocket"
  }
];
