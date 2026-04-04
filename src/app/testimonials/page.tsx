"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function TestimonialsPage() {
  const { testimonials } = siteData;
  const { t } = useTranslation("testimonials");

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Testimonial cards */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1}>
            {testimonials.map((item) => (
              <motion.div key={item.id} variants={staggerItem} className="mb-8">
                <figure className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-8 relative overflow-hidden hover:border-[rgba(197,165,90,0.4)] transition-colors duration-300">
                  <span
                    aria-hidden="true"
                    className="absolute top-4 left-6 font-display text-[6rem] leading-none text-[rgba(197,165,90,0.07)] select-none pointer-events-none"
                  >
                    &#8220;
                  </span>
                  <blockquote
                    lang={item.lang}
                    className="relative font-body text-[17px] leading-[1.85] text-[rgba(245,240,232,0.8)] mb-5 italic"
                  >
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <GoldRule width="sm" opacity={25} className="mb-4" />
                  <figcaption className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)]">
                      {item.attribution}
                    </span>
                    {item.lang === "hu" && (
                      <span className="font-body italic text-[11px] text-[rgba(245,240,232,0.25)]">
                        {t("reviewSection.languageLabel")}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leave a review */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow className="mb-3">{t("googleCTA.label")}</Eyebrow>
              <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-3">
                {t("googleCTA.text")}
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-[rgba(245,240,232,0.6)]">
                {t("reviewSection.helpText")}
              </p>
            </div>
            <div>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.15)] rounded-[3px] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-2">
                  {t("reviewSection.googleLabel")}
                </p>
                <p className="font-body text-[13px] text-[rgba(245,240,232,0.5)] mb-3">
                  {t("reviewSection.googleDesc")}
                </p>
                <p className="font-mono text-[10px] text-[rgba(245,240,232,0.2)] italic">
                  {t("reviewSection.googlePlaceholder")}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Discretion note + CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="border border-[rgba(197,165,90,0.1)] rounded-[3px] p-6 mb-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.4)] mb-2">
                {t("reviewSection.privacyLabel")}
              </p>
              <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.4)]">
                {t("discretionNote")}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("bookCTA.heading")}</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.6)] max-w-sm">
                {t("bookCTA.body")}
              </p>
            </div>
            <Button href="/booking" variant="primary" size="md" className="shrink-0">
              {t("bookCTA.button")}
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
