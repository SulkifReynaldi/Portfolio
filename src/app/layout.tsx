import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#252827",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Full-Stack Developer & Automation Specialist | Portfolio",
  description:
    "Portfolio profesional Full-Stack Web Developer dan Automation Enthusiast. Membangun web application modern, dashboard bisnis terstruktur, dan workflow automation.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Automation",
    "Google Apps Script",
    "Dashboard Development",
  ],
  authors: [{ name: "Full-Stack Developer" }],
  openGraph: {
    title: "Full-Stack Developer & Automation Specialist | Portfolio",
    description:
      "Membangun pengalaman digital modern dan solusi teknologi praktis yang membantu bisnis bekerja lebih cerdas, cepat, dan efisien.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#252827] text-[#F3F3EF] antialiased selection:bg-[#527A59] selection:text-[#F3F3EF]">
        {children}
      </body>
    </html>
  );
}
