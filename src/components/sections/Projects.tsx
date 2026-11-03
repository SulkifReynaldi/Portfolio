"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, ProjectItem } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FolderGit2,
  ExternalLink,
  Info,
  X,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Web Development",
    "Dashboard Development",
    "Automation",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Completed":
        return <Badge variant="status">Selesai</Badge>;
      case "In Progress":
        return <Badge variant="gold">Sedang Berjalan</Badge>;
      case "Concept / Prototype":
        return <Badge variant="neutral">Konsep / Prototype</Badge>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#252827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Project Unggulan"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Portofolio Solusi Digital & Rekayasa Web"
          subtitle="Kumpulan project terpilih yang memperlihatkan kemampuan arsitektur kode, perancangan dashboard terstruktur, dan automasi proses bisnis."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#C6A15B] text-[#252827] font-semibold shadow-md shadow-[#C6A15B]/20"
                  : "bg-[#303633] text-[#B4B9B4] hover:text-[#F3F3EF] hover:bg-[#353C38] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              hoverEffect
              className="bg-[#303633] border-white/5 hover:border-[#C6A15B]/30 flex flex-col justify-between overflow-hidden p-0 group"
            >
              {/* Image Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#252827]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#303633] via-[#303633]/20 to-transparent" />

                {/* Floating Status & Category Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md bg-[#252827]/85 backdrop-blur-md text-[#C6A15B] border border-white/10">
                    {project.category}
                  </span>
                  {getStatusBadge(project.status)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-[#F3F3EF] group-hover:text-[#C6A15B] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B4B9B4] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#252827] text-[#759779] border border-[#527A59]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Action Bar */}
                <div className="pt-4 border-t border-white/5 space-y-2.5">
                  <div className="flex items-center gap-2">
                    {project.liveDemoUrl ? (
                      <Button
                        href={project.liveDemoUrl}
                        target="_blank"
                        variant="gold"
                        size="sm"
                        rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        className="flex-1"
                      >
                        Live Demo
                      </Button>
                    ) : (
                      <div className="flex-1 text-center py-1.5 px-3 rounded-xl bg-[#252827]/60 border border-white/5 text-[11px] text-[#B4B9B4]/60">
                        Demo: Hubungi untuk Preview
                      </div>
                    )}

                    {project.githubUrl ? (
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        variant="outline"
                        size="sm"
                        leftIcon={<GithubIcon className="w-3.5 h-3.5" />}
                        className="px-3"
                        aria-label="Repository GitHub"
                      >
                        GitHub
                      </Button>
                    ) : null}
                  </div>

                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="ghost"
                    size="sm"
                    leftIcon={<Info className="w-3.5 h-3.5 text-[#C6A15B]" />}
                    className="w-full text-xs text-[#B4B9B4] hover:text-[#F3F3EF]"
                  >
                    Lihat Detail Masalah & Solusi
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#303633] border border-[#C6A15B]/30 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F3F3EF] mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-[#252827] text-[#B4B9B4] hover:text-[#F3F3EF] hover:bg-[#353C38] border border-white/10 transition-colors"
                aria-label="Tutup detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#252827] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  <AlertCircle className="w-4 h-4 text-[#C6A15B]" />
                  <span>Masalah yang Ingin Diselesaikan</span>
                </div>
                <p className="text-sm text-[#B4B9B4] leading-relaxed">
                  {selectedProject.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#252827] border border-[#527A59]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#759779]">
                  <CheckCircle2 className="w-4 h-4 text-[#527A59]" />
                  <span>Solusi Rekayasa yang Dikembangkan</span>
                </div>
                <p className="text-sm text-[#B4B9B4] leading-relaxed">
                  {selectedProject.solutionStatement}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#B4B9B4] font-semibold">
                Teknologi yang Digunakan
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-lg bg-[#252827] text-[#F3F3EF] border border-[#527A59]/30 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status & Links */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#B4B9B4]">Status:</span>
                {getStatusBadge(selectedProject.status)}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {selectedProject.liveDemoUrl && (
                  <Button
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    variant="gold"
                    size="sm"
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Buka Live Demo
                  </Button>
                )}
                <Button
                  onClick={() => setSelectedProject(null)}
                  variant="secondary"
                  size="sm"
                >
                  Tutup
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
