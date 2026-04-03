"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eyebrow, GoldRule } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { useTranslation } from "@/hooks/useTranslation";

interface TeaserCard {
  label: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
}

export function SiteTeaser() {
  const { t, ta } = useTranslation("home");
  const cards = ta<TeaserCard[]>("teaser.cards");

  return (
    <section className="bg-[#071020] py-20 lg:py-28 border-b border-[rgba(197,165,90,0.12)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <FadeUp className="mb-12">
          <Eyebrow className="mb-3">{t("teaser.eyebrow")}</Eyebrow>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#F5F0E8]">
            {t("teaser.headline")}
          </h2>
          <GoldRule width="sm" opacity={30} className="mt-5" />
        </FadeUp>

        {/* Cards grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <motion.div key={card.href} variants={staggerItem}>
              <Link
                href={card.href}
                className="group flex flex-col h-full bg-[#122040] border border-[rgba(197,165,90,0.18)] hover:border-[rgba(197,165,90,0.45)] rounded-[3px] p-6 transition-all duration-250 hover:bg-[#1B2A4A]"
              >
                {/* Card label */}
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[rgba(197,165,90,0.5)] mb-3">
                  {card.label}
                </p>

                {/* Card heading */}
                <h3 className="font-display font-bold text-[1.05rem] leading-snug text-[#F5F0E8] mb-3 group-hover:text-[#C5A55A] transition-colors duration-200">
                  {card.heading}
                </h3>

                <GoldRule width="full" opacity={12} className="mb-4" />

                {/* Card body */}
                <p className="font-body text-[13px] leading-[1.75] text-[rgba(245,240,232,0.58)] flex-1 mb-5">
                  {card.body}
                </p>

                {/* CTA arrow */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.65)] group-hover:text-[#C5A55A] transition-colors duration-200">
                    {card.cta}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-[rgba(197,165,90,0.5)] group-hover:text-[#C5A55A] group-hover:translate-x-0.5 transition-all duration-200"
                  >
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
