export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  heroDescription: string;
  aboutMe: {
    greeting: string;
    paragraphs: string[];
    highlights: {
      label: string;
      value: string;
      description: string;
    }[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
  cvPath: string;
  avatarPath: string;
}

export const profileData: ProfileData = {
  name: "Muh Sulkif Reynaldi S", // Silakan ganti dengan nama lengkap Anda
  role: "Full-Stack Developer | Web Developer | Automation Enthusiast",
  tagline: "Building resilient digital products & automated business workflows.",
  heroDescription:
    "Saya membangun pengalaman digital modern dan solusi teknologi praktis yang membantu bisnis bekerja lebih cerdas, cepat, dan efisien.",
  aboutMe: {
    greeting: "Halo! Saya seorang software developer yang berorientasi pada hasil dan solusi nyata.",
    paragraphs: [
      "Perjalanan saya di dunia rekayasa perangkat lunak dimulai dari rasa ingin tahu yang mendalam tentang bagaimana teknologi dapat menyelesaikan masalah konkret. Dengan latar belakang pendidikan teknologi informasi dan dedikasi belajar mandiri, saya mendalami arsitektur web modern dari antarmuka pengguna hingga sistem backend.",
      "Sebagai seorang Full-Stack Developer, fokus utama saya adalah merancang sistem yang tidak hanya memiliki tampilan elegan dan responsif, tetapi juga performa tinggi, aman, dan mudah dirawat. Saya terbiasa menganalisis proses bisnis yang berbelit-belit untuk kemudian merumuskan solusi digital yang menyederhanakan alur kerja pengguna.",
      "Selain pengembangan aplikasi web, saya memiliki minat khusus dalam automasi alur kerja (workflow automation) menggunakan Google Workspace, API integration, dan skrip automasi. Saya percaya bahwa teknologi terbaik adalah teknologi yang dapat menghemat waktu berharga manusia dan mendorong produktivitas bisnis secara nyata."
    ],
    highlights: [
      {
        label: "Fokus Teknologi",
        value: "Modern Web & API",
        description: "Ekosistem React, Next.js, TypeScript, dan Node.js."
      },
      {
        label: "Keahlian Khusus",
        value: "Process Automation",
        description: "Automasi Google Sheets, Apps Script, & REST API."
      },
      {
        label: "Komitmen Kualitas",
        value: "Clean Architecture",
        description: "Kode terstruktur, type-safe, dan maintainable."
      }
    ]
  },
  socialLinks: {
    github: "https://github.com", // Ganti dengan profil GitHub Anda
    linkedin: "https://linkedin.com", // Ganti dengan profil LinkedIn Anda
    email: "alex.pratama.dev@example.com", // Ganti dengan email aktif Anda
    whatsapp: "https://wa.me/6282259947475" // Ganti dengan nomor WhatsApp aktif Anda (format internasional)
  },
  cvPath: "/documents/cv.pdf",
  avatarPath: "/images/profile.jpg"
};
