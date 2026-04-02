import { cn } from "@/lib/utils";

interface GoldRuleProps {
  className?: string;
  width?: "sm" | "md" | "full";
  opacity?: number;
}

const widths = {
  sm:   "w-12",
  md:   "w-20",
  full: "w-full",
};

/**
 * Thin gold horizontal rule — diplomatic stationery detail.
 * Used below H2 section titles, between fee table rows, in footer.
 * Source: design-system.md §4 — Gold rule lines
 */
export function GoldRule({ className, width = "sm", opacity = 30 }: GoldRuleProps) {
  return (
    <hr
      className={cn(
        "border-none h-px bg-[#C5A55A]",
        widths[width],
        className
      )}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    />
  );
}
