import React from "react";
import { workflowSteps } from "@/data/workflow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  Workflow as WorkflowIcon,
  Search,
  Boxes,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Check,
} from "lucide-react";

export function Workflow() {
  const stepIcons = {
    Search: <Search className="w-5 h-5 text-[#C6A15B]" />,
    Boxes: <Boxes className="w-5 h-5 text-[#759779]" />,
    Palette: <Palette className="w-5 h-5 text-[#C6A15B]" />,
    Code2: <Code2 className="w-5 h-5 text-[#759779]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#C6A15B]" />,
    Rocket: <Rocket className="w-5 h-5 text-[#759779]" />,
  };

  return (
    <section id="workflow" className="py-20 lg:py-28 bg-[#212423] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Alur Kerja"
          badgeIcon={<WorkflowIcon className="w-3.5 h-3.5" />}
          title="Metodologi Pengembangan Produk Digital"
          subtitle="Enam tahapan sistematis untuk memastikan proyek selesai tepat waktu, tepat sasaran fungsional, dan memenuhi standar kualitas tinggi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {workflowSteps.map((step) => (
            <Card
              key={step.step}
              variant="default"
              hoverEffect
              className="bg-[#2b302d] border-white/5 hover:border-[#C6A15B]/30 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Step Number & Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-3xl font-extrabold text-[#527A59] font-mono">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#252827] border border-white/5">
                    {stepIcons[step.icon]}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-bold text-lg text-[#F3F3EF]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#C6A15B] font-medium mt-0.5">
                    {step.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#B4B9B4] leading-relaxed">
                  {step.description}
                </p>

                {/* Action details */}
                <ul className="space-y-1.5 pt-2">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#B4B9B4]"
                    >
                      <Check className="w-3 h-3 text-[#527A59] shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step indicator */}
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#B4B9B4]/60 font-mono">
                <span>Tahap {step.step} dari 06</span>
                <span className="text-[#759779]">Terstandarisasi</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
