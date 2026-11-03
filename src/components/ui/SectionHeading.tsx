import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps & { badgeIcon?: React.ReactNode }) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5",
            "bg-[#303633] text-[#C6A15B] border border-[#C6A15B]/30 shadow-sm"
          )}
        >
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3F3EF] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-[#B4B9B4] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
