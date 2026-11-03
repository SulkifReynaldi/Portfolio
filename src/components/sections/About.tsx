import React from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { User, Cpu, Sparkles, Target, Terminal } from "lucide-react";

export function About() {
  const highlightIcons = [Terminal, Cpu, Target];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#252827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tentang Saya"
          badgeIcon={<User className="w-3.5 h-3.5" />}
          title="Menghubungkan Logika Rekayasa dengan Nilai Tambah Bisnis"
          subtitle="Mengenal lebih dekat visi, latar belakang, dan pendekatan saya dalam merancang solusi digital."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#B4B9B4] leading-relaxed">
            <div className="p-4 rounded-xl bg-[#303633] border-l-4 border-[#C6A15B] text-[#F3F3EF] font-medium text-base sm:text-lg">
              {profileData.aboutMe.greeting}
            </div>

            {profileData.aboutMe.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#B4B9B4]">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/5">
              <div className="p-3.5 rounded-xl bg-[#303633]/60 border border-white/5">
                <span className="block text-xl font-bold text-[#C6A15B]">100%</span>
                <span className="text-xs text-[#B4B9B4]">Komitmen Solutif</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#303633]/60 border border-white/5">
                <span className="block text-xl font-bold text-[#759779]">Modern</span>
                <span className="text-xs text-[#B4B9B4]">Next.js & TypeScript</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#303633]/60 border border-white/5">
                <span className="block text-xl font-bold text-[#F3F3EF]">Automasi</span>
                <span className="text-xs text-[#B4B9B4]">Efisiensi Alur Kerja</span>
              </div>
            </div>
          </div>

          {/* Highlights Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {profileData.aboutMe.highlights.map((item, idx) => {
              const Icon = highlightIcons[idx] || Sparkles;
              return (
                <Card
                  key={item.label}
                  variant="default"
                  hoverEffect
                  className="border-white/5 hover:border-[#C6A15B]/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#303633] text-[#C6A15B] border border-[#C6A15B]/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#759779]">
                        {item.label}
                      </span>
                      <h4 className="text-base font-semibold text-[#F3F3EF]">
                        {item.value}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#B4B9B4] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
