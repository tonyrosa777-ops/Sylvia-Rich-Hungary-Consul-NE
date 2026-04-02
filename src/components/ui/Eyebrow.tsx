import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
}

/**
 * DM Mono uppercase label — eyebrow text above section headlines.
 * Source: design-system.md §3 — font-mono role, eyebrow/label scale
 */
export function Eyebrow({ children, className, gold = true }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.12em]",
        gold ? "text-[#C5A55A]" : "text-[rgba(245,240,232,0.5)]",
        className
      )}
    >
      {children}
    </p>
  );
}
