import { cn } from "@/lib/utils";
import { ScaleIn } from "@/components/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  animate?: boolean;
  as?: "div" | "article" | "li";
}

/**
 * Base card shell — dark navy fill, gold border lifts on hover.
 * Source: design-system.md §5 — Component Style Rules
 */
export function Card({ children, className, hover = true, delay = 0, animate = true, as: Tag = "div" }: CardProps) {
  const content = (
    <Tag
      className={cn(
        "bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-8",
        hover &&
          "hover:border-[#C5A55A] hover:shadow-[0_4px_32px_rgba(10,22,40,0.7)] transition-all duration-300",
        className
      )}
    >
      {children}
    </Tag>
  );

  if (animate) {
    return <ScaleIn delay={delay}>{content}</ScaleIn>;
  }

  return content;
}
