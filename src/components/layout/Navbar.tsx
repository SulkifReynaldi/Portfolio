"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const link of NAV_LINKS) {
        const sectionId = link.href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Extract initials for logo
  const initials = profileData.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#252827]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#353C38] to-[#303633] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] font-bold text-sm tracking-wider shadow-sm group-hover:border-[#C6A15B] transition-colors">
              {initials}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base text-[#F3F3EF] tracking-tight group-hover:text-[#C6A15B] transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] text-[#759779] font-mono tracking-wide">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#303633]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#527A59] text-[#F3F3EF] shadow-sm font-semibold"
                      : "text-[#B4B9B4] hover:text-[#F3F3EF] hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={profileData.cvPath}
              download="CV-Alex-Pratama.pdf"
              variant="outline"
              size="sm"
              leftIcon={<FileDown className="w-3.5 h-3.5 text-[#C6A15B]" />}
              className="border-[#C6A15B]/30 hover:border-[#C6A15B]"
            >
              CV
            </Button>
            <Button
              href="#contact"
              variant="gold"
              size="sm"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Hubungi Saya
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href={profileData.cvPath}
              download="CV-Alex-Pratama.pdf"
              variant="outline"
              size="sm"
              className="sm:hidden text-xs px-2.5 py-1 border-[#C6A15B]/40"
            >
              CV
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#303633] text-[#F3F3EF] border border-white/10 hover:border-[#C6A15B]/50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#C6A15B]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#252827]/98 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#527A59] text-[#F3F3EF] font-semibold"
                      : "text-[#B4B9B4] hover:bg-[#303633] hover:text-[#F3F3EF]"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Button
              href={profileData.cvPath}
              download="CV-Alex-Pratama.pdf"
              variant="outline"
              size="md"
              leftIcon={<FileDown className="w-4 h-4 text-[#C6A15B]" />}
              className="w-full justify-center"
            >
              Download CV (PDF)
            </Button>
            <Button
              href="#contact"
              variant="gold"
              size="md"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full justify-center"
            >
              Hubungi Saya
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
