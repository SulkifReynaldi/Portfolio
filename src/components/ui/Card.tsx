import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "interactive";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-[#353C38] border border-white/5",
    secondary: "bg-[#303633] border border-white/5",
    interactive:
      "bg-[#353C38] border border-white/5 hover:border-[#759779]/40 hover:bg-[#39423c]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 transition-all duration-300",
        variantStyles[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
