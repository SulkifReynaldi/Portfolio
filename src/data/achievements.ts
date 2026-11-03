export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string; // Tautan verifikasi jika tersedia
  credentialId?: string;
  category: "Web Development" | "Database" | "Automation" | "General Tech";
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrCompany: string;
  feedback: string;
  projectContext: string;
  rating: number;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-01",
    title: "Full-Stack Web Development Mastery",
    issuer: "Tech Education Provider",
    issueDate: "2024",
    credentialId: "FSW-2024-089",
    category: "Web Development"
  },
  {
    id: "cert-02",
    title: "Modern JavaScript & TypeScript Professional",
    issuer: "Online Learning Platform",
    issueDate: "2023",
    credentialId: "TS-DEV-441",
    category: "Web Development"
  },
  {
    id: "cert-03",
    title: "Automating Tasks with Google Apps Script",
    issuer: "Cloud Developer Academy",
    issueDate: "2023",
    credentialId: "GAS-AUTO-102",
    category: "Automation"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testi-01",
    clientName: "Rian Hendrawan",
    roleOrCompany: "Owner, Retail Logistics",
    feedback:
      "Automasi Google Sheets yang dikembangkan sangat membantu tim kami memotong waktu rekonsiliasi data hingga separuhnya. Komunikasi kerja sangat jelas dan solutif.",
    projectContext: "Business Process Automation",
    rating: 5
  },
  {
    id: "testi-02",
    clientName: "Budi Santoso",
    roleOrCompany: "Operations Lead",
    feedback:
      "Website dan dashboard yang dibuat memiliki visual yang sangat rapi dan performa cepat. Proses pengerjaan terstruktur dari tahap requirement hingga deployment.",
    projectContext: "Web Application & Dashboard",
    rating: 5
  }
];
