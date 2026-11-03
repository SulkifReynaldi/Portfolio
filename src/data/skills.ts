export interface SkillItem {
  name: string;
  levelDescription?: string;
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Membangun antarmuka web interaktif, responsif, dan berperforma tinggi.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Merancang logika server, arsitektur RESTful API, dan integrasi layanan backend.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST API" }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    description: "Pengelolaan struktur data relasional maupun non-relasional yang aman dan teroptimasi.",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" }
    ]
  },
  {
    id: "automation",
    title: "Automation & Workflow",
    description: "Mengotomasi alur kerja manual untuk meningkatkan efisiensi operasional bisnis.",
    skills: [
      { name: "Google Apps Script" },
      { name: "Google Sheets" },
      { name: "Workflow Automation" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Environment",
    description: "Alat bantu standar industri untuk kolaborasi, versioning, dan pengujian API.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" }
    ]
  }
];
