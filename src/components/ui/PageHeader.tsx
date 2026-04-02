import { Eyebrow, GoldRule } from "@/components/ui";
import { FadeUp } from "@/components/animations";

interface PageHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  description?: string;
  id?: string;
}

/**
 * Shared page header — used on all inner pages.
 * Deep navy bg, Playfair headline, gold rule below.
 */
export function PageHeader({ eyebrow, headline, subheadline, description, id }: PageHeaderProps) {
  return (
    <section className="bg-[#0A1628] pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-[rgba(197,165,90,0.12)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeUp>
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <h1
            id={id}
            className="font-display font-black text-[clamp(2rem,4.5vw,3.6rem)] leading-tight text-[#F5F0E8]"
          >
            {headline}
          </h1>
          {subheadline && (
            <p className="font-display italic text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#C5A55A] mt-1">
              {subheadline}
            </p>
          )}
          <GoldRule width="sm" opacity={35} className="mt-5 mb-5" />
          {description && (
            <p className="font-body text-[17px] leading-relaxed text-[rgba(245,240,232,0.65)] max-w-2xl">
              {description}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
