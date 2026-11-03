"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      download,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-[#527A59] hover:bg-[#628f6a] text-[#F3F3EF] shadow-md shadow-[#527A59]/15 border border-[#759779]/30",
      secondary:
        "bg-[#303633] hover:bg-[#3d4541] text-[#F3F3EF] border border-white/10 hover:border-[#759779]/40",
      gold: "bg-[#C6A15B] hover:bg-[#d6b16b] text-[#252827] font-semibold shadow-md shadow-[#C6A15B]/20 border border-[#e2c17f]",
      outline:
        "bg-transparent hover:bg-[#303633]/60 text-[#F3F3EF] border border-[#C6A15B]/40 hover:border-[#C6A15B]",
      ghost:
        "bg-transparent hover:bg-[#303633] text-[#B4B9B4] hover:text-[#F3F3EF]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal && !download) {
        return (
          <Link href={href} className={combinedClasses} target={target} rel={rel}>
            {content}
          </Link>
        );
      }
      return (
        <a
          href={href}
          className={combinedClasses}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          download={download}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
