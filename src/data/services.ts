export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  clientBenefits: string[];
  icon: "Globe" | "Layers" | "LayoutDashboard" | "FileSpreadsheet" | "Workflow" | "Wrench";
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    description:
      "Pembuatan website profesional, modern, responsif, dan dirancang khusus sesuai identitas merek bisnis maupun kebutuhan personal Anda.",
    clientBenefits: [
      "Tampilan elegan & berorientasi konversi",
      "Kecepatan loading optimal (Core Web Vitals)",
      "Ramah mesin pencari (SEO Optimized)",
      "Kompatibel sempurna di semua ukuran layar"
    ],
    icon: "Globe"
  },
  {
    id: "fullstack-application",
    number: "02",
    title: "Full-Stack Web Application",
    description:
      "Pengembangan aplikasi web menyeluruh mencakup antarmuka frontend interaktif, logika backend tangguh, database relasional/non-relasional, dan integrasi API pihak ketiga.",
    clientBenefits: [
      "Arsitektur modular & mudah dikembangkan",
      "Keamanan autentikasi dan otorisasi data",
      "Integrasi sistem pembayaran & layanan eksternal",
      "Performa skalabel sesuai pertumbuhan pengguna"
    ],
    icon: "Layers"
  },
  {
    id: "dashboard-development",
    number: "03",
    title: "Business Dashboard Development",
    description:
      "Pembuatan dashboard analitik dan operasional untuk monitoring aktivitas bisnis, visualisasi metrik kunci, dan pelaporan data secara terstruktur.",
    clientBenefits: [
      "Visualisasi data real-time yang mudah dipahami",
      "Filter cerdas dan pencarian data cepat",
      "Ekspor laporan ke format PDF / Excel",
      "Memudahkan pengambilan keputusan manajerial"
    ],
    icon: "LayoutDashboard"
  },
  {
    id: "sheets-automation",
    number: "04",
    title: "Google Sheets Automation",
    description:
      "Automasi pekerjaan spreadsheet berulang menggunakan Google Apps Script untuk mempercepat input, kalkulasi formula kompleks, dan pengolahan data.",
    clientBenefits: [
      "Menghemat waktu berjam-jam kerja administratif",
      "Menghilangkan risiko kesalahan rumus dan input manual",
      "Sinkronisasi otomatis antar file spreadsheet",
      "Pengiriman laporan otomatis via email terjadwal"
    ],
    icon: "FileSpreadsheet"
  },
  {
    id: "process-automation",
    number: "05",
    title: "Business Process Automation",
    description:
      "Pengembangan solusi digital terintegrasi untuk menyederhanakan alur kerja tim, menghubungkan formulir online dengan database internal, dan mengotomasi notifikasi.",
    clientBenefits: [
      "Efisiensi operasional meningkat secara signifikan",
      "Standardisasi alur komunikasi dan persetujuan tugas",
      "Pencatatan riwayat aktivitas yang akurat dan transparan",
      "Fokus tim teralihkan ke pekerjaan yang bernilai tinggi"
    ],
    icon: "Workflow"
  },
  {
    id: "website-maintenance",
    number: "06",
    title: "Website Maintenance & Optimization",
    description:
      "Layanan pemeliharaan berkelanjutan, pembaruan keamanan, perbaikan bug, penambahan fitur baru, serta optimasi performa website yang sudah ada.",
    clientBenefits: [
      "Website selalu aman dari celah keamanan terbaru",
      "Dukungan teknis responsif saat terjadi kendala",
      "Peningkatan kecepatan dan skor SEO berkala",
      "Ketenangan pikiran tanpa repot mengelola teknis"
    ],
    icon: "Wrench"
  }
];
