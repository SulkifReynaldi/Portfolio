import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  Code,
  Server,
  Database,
  Workflow,
  Wrench,
  Check,
  Cpu,
} from "lucide-react";

export function Skills() {
  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code className="w-5 h-5 text-[#759779]" />,
    backend: <Server className="w-5 h-5 text-[#C6A15B]" />,
    database: <Database className="w-5 h-5 text-[#759779]" />,
    automation: <Workflow className="w-5 h-5 text-[#C6A15B]" />,
    tools: <Wrench className="w-5 h-5 text-[#759779]" />,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#212423] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Keahlian Teknis"
          badgeIcon={<Cpu className="w-3.5 h-3.5" />}
          title="Stack Teknologi & Ekosistem Pengembangan"
          subtitle="Kombinasi teknologi modern yang saya kuasai untuk membangun aplikasi web yang handal, cepat, dan terotomasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.id}
              variant="default"
              hoverEffect
              className="bg-[#2b302d] border-white/5 hover:border-[#759779]/40 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Card */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#252827] border border-white/5">
                    {categoryIcons[category.id] || <Code className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-[#F3F3EF]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#B4B9B4]">
                      {category.skills.length} Teknologi
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#B4B9B4] leading-relaxed">
                  {category.description}
                </p>

                {/* Skill List Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#252827] border border-white/5 hover:border-[#C6A15B]/40 hover:bg-[#303633] transition-all duration-200 cursor-default"
                    >
                      <Check className="w-3 h-3 text-[#527A59] group-hover/item:text-[#C6A15B] transition-colors" />
                      <span className="text-xs font-medium text-[#F3F3EF]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#B4B9B4]/60 font-mono">
                <span>Standard Industry Tech</span>
                <span className="text-[#759779]">Verified</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
