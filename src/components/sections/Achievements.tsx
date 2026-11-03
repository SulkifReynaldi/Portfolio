import React from "react";
import { certificationsData, testimonialsData } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Award,
  ShieldCheck,
  Star,
  Quote,
  Calendar,
  ExternalLink,
} from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#252827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sertifikasi & Testimoni"
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title="Kredibilitas Profesional & Pengakuan Industri"
          subtitle="Bukti komitmen pembelajaran berkelanjutan dan apresiasi atas solusi yang berhasil diimplementasikan."
        />

        {/* 1. Certifications & Credentials */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-2 pb-2">
            <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
            <h3 className="text-xl font-bold text-[#F3F3EF]">
              Sertifikat & Pelatihan Teknis
            </h3>
          </div>

          {certificationsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.map((cert) => (
                <Card
                  key={cert.id}
                  variant="default"
                  hoverEffect
                  className="bg-[#303633] border-white/5 hover:border-[#527A59]/40 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="sage">{cert.category}</Badge>
                      <span className="flex items-center gap-1 text-[11px] text-[#B4B9B4]">
                        <Calendar className="w-3 h-3 text-[#759779]" />
                        {cert.issueDate}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-[#F3F3EF]">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-[#B4B9B4]">{cert.issuer}</p>

                    {cert.credentialId && (
                      <p className="text-[11px] font-mono text-[#C6A15B]">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <div className="pt-4 mt-4 border-t border-white/5">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#759779] hover:text-[#C6A15B] transition-colors"
                      >
                        <span>Verifikasi Kredensial</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#303633] border border-white/5 text-center text-sm text-[#B4B9B4]">
              Data sertifikasi sedang diperbarui.
            </div>
          )}
        </div>

        {/* 2. Client Testimonials */}
        {testimonialsData.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <Quote className="w-5 h-5 text-[#759779]" />
              <h3 className="text-xl font-bold text-[#F3F3EF]">
                Testimoni & Kepuasan Klien
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonialsData.map((item) => (
                <Card
                  key={item.id}
                  variant="default"
                  hoverEffect
                  className="bg-[#303633] border-white/5 hover:border-[#C6A15B]/30 space-y-4"
                >
                  {/* Star Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C6A15B]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]"
                        />
                      ))}
                    </div>
                    <Badge variant="neutral">{item.projectContext}</Badge>
                  </div>

                  {/* Feedback Quote */}
                  <p className="text-xs sm:text-sm text-[#F3F3EF] italic leading-relaxed">
                    &ldquo;{item.feedback}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#527A59]/20 border border-[#527A59]/30 flex items-center justify-center text-xs font-bold text-[#759779]">
                      {item.clientName
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h5 className="font-semibold text-xs sm:text-sm text-[#F3F3EF]">
                        {item.clientName}
                      </h5>
                      <p className="text-[11px] text-[#B4B9B4]">
                        {item.roleOrCompany}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
