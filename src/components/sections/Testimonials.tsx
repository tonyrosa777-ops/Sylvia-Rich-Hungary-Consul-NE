"use client";
import { Eyebrow, GoldRule } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

export function Testimonials() {
  const { testimonials } = siteData;
  const { t } = useTranslation("testimonials");
  // Show first 3 on homepage
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-[#122040] py-24 lg:py-32" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <FadeUp className="mb-14 max-w-xl">
          <Eyebrow className="mb-4">{t("header.eyebrow")}</Eyebrow>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight text-[#F5F0E8]"
          >
            {t("header.headline")}
          </h2>
          <GoldRule width="sm" opacity={35} className="mt-5" />
        </FadeUp>

        <StaggerContainer
          staggerDelay={0.13}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-7 flex flex-col"
            >
              {/* Quote mark */}
              <span
                className="font-display text-5xl leading-none text-[rgba(197,165,90,0.25)] mb-3 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote — testimonials are kept in their original language */}
              <blockquote
                className="font-body text-[15px] leading-[1.75] text-[rgba(245,240,232,0.75)] flex-1 mb-5"
                lang={item.lang}
              >
                {item.quote}
              </blockquote>

              <GoldRule width="sm" opacity={20} className="mb-4" />

              {/* Attribution */}
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.35)]">
                {item.attribution}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA to full page */}
        <FadeUp delay={0.3} className="mt-10 text-center">
          <a
            href="/testimonials"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)] hover:text-[#C5A55A] transition-colors duration-150 underline underline-offset-4"
          >
            {t("googleCTA.text")} →
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
