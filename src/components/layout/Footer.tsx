"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Mail, MessageSquare, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialItems = [
    { name: "GitHub", href: profileData.socialLinks.github, icon: GithubIcon },
    { name: "LinkedIn", href: profileData.socialLinks.linkedin, icon: LinkedinIcon },
    { name: "Email", href: `mailto:${profileData.socialLinks.email}`, icon: Mail },
    { name: "WhatsApp", href: profileData.socialLinks.whatsapp, icon: MessageSquare },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#212423] border-t border-white/5 text-[#B4B9B4] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#303633] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] font-bold text-sm">
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#F3F3EF]">
                  {profileData.name}
                </h3>
                <p className="text-xs text-[#759779] font-mono">
                  Full-Stack Web & Automation
                </p>
              </div>
            </div>

            <p className="text-sm text-[#B4B9B4] leading-relaxed max-w-sm">
              Membangun pengalaman web modern, arsitektur data terstruktur, dan
              solusi automasi alur kerja untuk mendorong efisiensi bisnis.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#303633]/80 border border-[#527A59]/40 text-xs text-[#9bc19f]">
              <span className="w-2 h-2 rounded-full bg-[#527A59] animate-pulse" />
              <span>Terbuka untuk peluang kerja & freelance</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#F3F3EF] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
              Koneksi & Media Sosial
            </h4>
            <p className="text-sm text-[#B4B9B4]">
              Mari berdiskusi mengenai proyek website, dashboard, atau kebutuhan
              automasi sistem bisnis Anda.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              {socialItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#303633] text-[#B4B9B4] hover:text-[#C6A15B] hover:bg-[#353C38] border border-white/5 hover:border-[#C6A15B]/40 transition-all duration-200"
                    aria-label={item.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B4B9B4]/70">
          <p>
            © {currentYear} {profileData.name}. All rights reserved. Dibangun dengan Next.js & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 hover:text-[#F3F3EF] transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
