"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  MessageSquare,
  ArrowRight,
  Code2,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle ambient lighting decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#527A59]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#303633] border border-[#527A59]/40 text-xs sm:text-sm text-[#759779] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#527A59] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#527A59]" />
              </span>
              <span className="font-medium text-[#F3F3EF]">
                Tersedia untuk Proyek Baru & Kolaborasi
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3F3EF] leading-[1.15]">
                {profileData.name}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-[#C6A15B] tracking-wide">
                {profileData.role}
              </p>
            </div>

            {/* Mission Statement */}
            <p className="text-sm sm:text-base lg:text-lg text-[#B4B9B4] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              &ldquo;{profileData.heroDescription}&rdquo;
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto"
              >
                Lihat Project Saya
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto border-white/10 hover:border-[#527A59]"
              >
                Hubungi Saya
              </Button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#303633] text-[#B4B9B4] hover:text-[#C6A15B] hover:bg-[#353C38] border border-white/5 hover:border-[#C6A15B]/40 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#303633] text-[#B4B9B4] hover:text-[#C6A15B] hover:bg-[#353C38] border border-white/5 hover:border-[#C6A15B]/40 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.socialLinks.email}`}
                  className="p-2.5 rounded-xl bg-[#303633] text-[#B4B9B4] hover:text-[#C6A15B] hover:bg-[#353C38] border border-white/5 hover:border-[#C6A15B]/40 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#303633] text-[#B4B9B4] hover:text-[#C6A15B] hover:bg-[#353C38] border border-white/5 hover:border-[#C6A15B]/40 transition-all duration-200"
                  aria-label="Chat WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:block h-6 w-px bg-white/10" />

              <div className="flex items-center gap-4 text-xs text-[#B4B9B4]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#527A59]" />
                  <span>Next.js & TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#527A59]" />
                  <span>Workflow Automation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#527A59] via-[#C6A15B] to-[#527A59] rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-[#303633] p-4 sm:p-5 border border-[#C6A15B]/30 shadow-2xl">
                {/* Photo Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#252827] border border-white/10">
                  <Image
                    src={profileData.avatarPath}
                    alt={profileData.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252827]/80 via-transparent to-transparent" />

                  {/* Floating Tech Pill inside image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#252827]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md bg-[#527A59]/30 text-[#759779]">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium text-[#F3F3EF]">
                        Modern Full-Stack
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#C6A15B]">
                      v2026.1
                    </span>
                  </div>
                </div>

                {/* Subtitle badge under photo */}
                <div className="mt-4 flex items-center justify-between text-xs text-[#B4B9B4] px-1">
                  <span>Berfokus pada Solusi & Efisiensi</span>
                  <span className="text-[#759779] font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> High Quality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
