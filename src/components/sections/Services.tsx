import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Briefcase,
  Globe,
  Layers,
  LayoutDashboard,
  FileSpreadsheet,
  Workflow,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const serviceIcons = {
    Globe: <Globe className="w-5 h-5 text-[#C6A15B]" />,
    Layers: <Layers className="w-5 h-5 text-[#759779]" />,
    LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-[#C6A15B]" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-[#759779]" />,
    Workflow: <Workflow className="w-5 h-5 text-[#C6A15B]" />,
    Wrench: <Wrench className="w-5 h-5 text-[#759779]" />,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#212423] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Layanan Profesional"
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          title="Solusi Rekayasa Web & Automasi Proses Bisnis"
          subtitle="Membantu perusahaan dan pemilik bisnis mentransformasi ide menjadi sistem digital yang efisien, handal, dan berorientasi profit."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              variant="default"
              hoverEffect
              className="bg-[#2b302d] border-white/5 hover:border-[#527A59]/50 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-2xl font-black text-[#527A59]/40 font-mono tracking-tighter">
                    {service.number}
                  </span>
                  <div className="p-3 rounded-xl bg-[#252827] border border-white/5">
                    {serviceIcons[service.icon] || <Globe className="w-5 h-5" />}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-[#F3F3EF]">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B4B9B4] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Client Benefits List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#C6A15B]">
                    Manfaat untuk Anda:
                  </span>
                  <ul className="space-y-1.5">
                    {service.clientBenefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#B4B9B4]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#527A59] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <Button
                  href="#contact"
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full justify-between hover:border-[#C6A15B] text-xs"
                >
                  Konsultasikan Kebutuhan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
