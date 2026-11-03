import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { History, Calendar, MapPin, CheckCircle, Trophy } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#252827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pengalaman Kerja"
          badgeIcon={<History className="w-3.5 h-3.5" />}
          title="Perjalanan Profesional & Kontribusi Nyata"
          subtitle="Jejak pengalaman kerja, peran teknis, serta pencapaian yang telah saya berikan dalam pengembangan sistem digital."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#527A59] via-[#C6A15B] to-transparent opacity-40" />

          <div className="space-y-10">
            {experienceData.map((item) => (
              <div key={item.id} className="relative sm:pl-20">
                {/* Timeline Bullet Node */}
                <div className="hidden sm:flex absolute left-6 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#303633] border-2 border-[#C6A15B] items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#527A59]" />
                </div>

                <Card
                  variant="default"
                  hoverEffect
                  className="bg-[#303633] border-white/5 hover:border-[#759779]/30 space-y-5"
                >
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg sm:text-xl text-[#F3F3EF]">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-[#C6A15B] mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#B4B9B4]">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#252827] border border-white/5">
                        <Calendar className="w-3 h-3 text-[#759779]" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#252827] border border-white/5">
                        <MapPin className="w-3 h-3 text-[#759779]" />
                        {item.location}
                      </span>
                      <Badge variant="status">{item.type}</Badge>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <span className="text-xs uppercase font-semibold tracking-wider text-[#B4B9B4]">
                      Tanggung Jawab Utama:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#B4B9B4]">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#527A59] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {item.achievements.length > 0 && (
                    <div className="p-4 rounded-xl bg-[#252827] border border-[#C6A15B]/20 space-y-2">
                      <div className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#C6A15B]">
                        <Trophy className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Pencapaian & Kontribusi Terukur</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#B4B9B4]">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#C6A15B]">•</span>
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
