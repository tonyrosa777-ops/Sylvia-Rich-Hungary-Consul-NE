"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const variants: Record<ButtonVariant, string> = {
  // Gold fill, navy text — all primary booking CTAs
  primary:
    "bg-[#C5A55A] hover:bg-[#D4AF37] active:bg-[#B8953F] text-[#0A1628] " +
    "font-display font-bold tracking-wide border border-[#C5A55A] hover:border-[#D4AF37] " +
    "shadow-[0_0_0_0_rgba(197,165,90,0)] hover:shadow-[0_0_28px_rgba(197,165,90,0.35)] " +
    "transition-all duration-200",

  // Gold border, cream text → fills gold on hover
  secondary:
    "bg-transparent hover:bg-[#C5A55A] active:bg-[#B8953F] text-[#F5F0E8] hover:text-[#0A1628] " +
    "font-display font-medium tracking-wide border border-[#C5A55A] " +
    "transition-all duration-200",

  // No border, cream → gold on hover, underline
  ghost:
    "bg-transparent text-[#F5F0E8] hover:text-[#C5A55A] font-body " +
    "underline-offset-4 hover:underline border border-transparent " +
    "transition-colors duration-150",
};

const sizes: Record<ButtonSize, string> = {
  sm:  "px-5 py-2.5 text-sm rounded-[3px]",
  md:  "px-7 py-3.5 text-base rounded-[3px]",
  lg:  "px-9 py-4 text-lg rounded-[3px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  disabled,
  className,
  onClick,
  children,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 cursor-pointer select-none",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
