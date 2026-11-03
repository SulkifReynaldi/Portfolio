import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "sage" | "gold" | "neutral" | "status";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "sage",
  size = "sm",
  className,
  children,
}: BadgeProps) {
  const variantStyles = {
    sage: "bg-[#527A59]/15 text-[#759779] border border-[#527A59]/30",
    gold: "bg-[#C6A15B]/15 text-[#C6A15B] border border-[#C6A15B]/30",
    neutral: "bg-[#303633] text-[#B4B9B4] border border-white/10",
    status: "bg-[#527A59]/20 text-[#9bc19f] border border-[#527A59]/40",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 rounded-full font-medium",
    md: "text-xs px-3 py-1 rounded-full font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors duration-200 select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
