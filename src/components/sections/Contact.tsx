"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Nama lengkap wajib diisi minimal 2 karakter.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Format alamat email tidak valid.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = "Subjek pesan wajib diisi minimal 3 karakter.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Pesan wajib diisi minimal 10 karakter agar konteks jelas.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setResponseMessage(
          data.message ||
            "Pesan Anda berhasil terkirim. Terima kasih, saya akan merespons dalam waktu 1x24 jam."
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setResponseMessage(
          data.message || "Gagal mengirimkan pesan. Silakan coba lagi."
        );
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitStatus("error");
      setResponseMessage(
        "Koneksi jaringan terputus atau terjadi gangguan. Silakan coba lagi nanti atau hubungi via WhatsApp/Email langsung."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#212423] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hubungi Saya"
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title="Mulai Diskusi Proyek atau Konsultasi Sistem"
          subtitle="Punya rencana proyek website, butuh dashboard bisnis, atau ingin mengotomasi proses kerja tim Anda? Mari kita diskusikan solusinya."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Contact Channels Info (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <Card
              variant="default"
              className="bg-[#2b302d] border-white/5 space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-[#F3F3EF]">
                  Saluran Komunikasi Langsung
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B9B4] mt-1.5 leading-relaxed">
                  Pilih saluran yang paling nyaman bagi Anda. Saya siap merespons
                  pertanyaan, permintaan proposal, atau tawaran kerja sama.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={profileData.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#252827] border border-white/5 hover:border-[#527A59] hover:bg-[#303633] transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-[#527A59]/20 text-[#759779] group-hover:text-[#F3F3EF] group-hover:bg-[#527A59] transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#759779] uppercase font-semibold tracking-wider">
                      WhatsApp (Respon Cepat)
                    </span>
                    <p className="text-sm font-medium text-[#F3F3EF] mt-0.5">
                      Chat via WhatsApp
                    </p>
                    <p className="text-xs text-[#B4B9B4]">
                      Diskusi cepat & konsultasi awal
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profileData.socialLinks.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#252827] border border-white/5 hover:border-[#C6A15B] hover:bg-[#303633] transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-[#C6A15B]/20 text-[#C6A15B] group-hover:text-[#252827] group-hover:bg-[#C6A15B] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#C6A15B] uppercase font-semibold tracking-wider">
                      Email Bisnis
                    </span>
                    <p className="text-sm font-medium text-[#F3F3EF] mt-0.5 break-all">
                      {profileData.socialLinks.email}
                    </p>
                    <p className="text-xs text-[#B4B9B4]">
                      Kirimkan dokumen spesifikasi atau penawaran resmi
                    </p>
                  </div>
                </a>

                {/* Professional Networks */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#252827] border border-white/5 hover:border-white/20 text-[#B4B9B4] hover:text-[#F3F3EF] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#759779]" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#252827] border border-white/5 hover:border-white/20 text-[#B4B9B4] hover:text-[#F3F3EF] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#C6A15B]" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Working Hours & Availability Note */}
              <div className="p-4 rounded-xl bg-[#252827] border border-white/5 flex items-center gap-3 text-xs text-[#B4B9B4]">
                <Clock className="w-4 h-4 text-[#759779] shrink-0" />
                <span>
                  Waktu respon umum: Senin — Sabtu, pukul 08.00 — 18.00 WIB.
                </span>
              </div>
            </Card>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <Card
              variant="default"
              className="bg-[#2b302d] border-white/5 space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-[#F3F3EF]">
                  Kirimkan Pesan Anda
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B9B4] mt-1.5 leading-relaxed">
                  Isi formulir berikut dengan detail kebutuhan Anda. Semua data
                  dikirim secara aman ke sistem backend saya.
                </p>
              </div>

              {/* Success Notification Alert */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-[#527A59]/20 border border-[#527A59] text-sm text-[#F3F3EF] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#759779] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#759779]">
                      Pesan Terkirim Berhasil!
                    </span>
                    <span className="text-xs text-[#F3F3EF]/90">
                      {responseMessage}
                    </span>
                  </div>
                </div>
              )}

              {/* Error Notification Alert */}
              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-sm text-[#F3F3EF] flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-red-400">
                      Gagal Mengirimkan Pesan
                    </span>
                    <span className="text-xs text-[#F3F3EF]/90">
                      {responseMessage}
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-[#B4B9B4]"
                    >
                      Nama Lengkap <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Pratama"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#252827] text-sm text-[#F3F3EF] placeholder-[#B4B9B4]/40 border ${
                        fieldErrors.name
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-white/10 focus:border-[#C6A15B]"
                      } focus:outline-none transition-colors`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-red-400">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-[#B4B9B4]"
                    >
                      Alamat Email <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#252827] text-sm text-[#F3F3EF] placeholder-[#B4B9B4]/40 border ${
                        fieldErrors.email
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-white/10 focus:border-[#C6A15B]"
                      } focus:outline-none transition-colors`}
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-red-400">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-wider text-[#B4B9B4]"
                  >
                    Subjek Diskusi <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Pembuatan Website Perusahaan / Automasi Spreadsheet"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#252827] text-sm text-[#F3F3EF] placeholder-[#B4B9B4]/40 border ${
                      fieldErrors.subject
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/10 focus:border-[#C6A15B]"
                    } focus:outline-none transition-colors`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-[11px] text-red-400">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-[#B4B9B4]"
                  >
                    Detail Pesan / Kebutuhan <span className="text-[#C6A15B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan rencana proyek, fitur yang dibutuhkan, atau kendala sistem yang dihadapi..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#252827] text-sm text-[#F3F3EF] placeholder-[#B4B9B4]/40 border ${
                      fieldErrors.message
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/10 focus:border-[#C6A15B]"
                    } focus:outline-none transition-colors resize-y`}
                  />
                  {fieldErrors.message && (
                    <p className="text-[11px] text-red-400">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Kirim Pesan Sekarang
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
