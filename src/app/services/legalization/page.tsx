"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

// Structural config only — text comes from JSON
const PATH_STRUCTURE = [
  { recommended: true },
  { recommended: false },
  { recommended: false },
];

interface PathTranslation {
  title: string;
  subtitle: string;
  description: string;
  cost: string;
  timeframe: string;
  usedFor: string;
  steps: string[];
}

interface FaqTranslation {
  q: string;
  a: string;
}

export default function LegalizationPage() {
  const { scope } = siteData;
  const { t, ta } = useTranslation("legalization");

  const paths = ta<PathTranslation[]>("paths");
  const faq = ta<FaqTranslation[]>("faq");

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Paths */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">{t("section1.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#F5F0E8]">
              {t("section1.heading")}
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.1}>
            {paths.map((path, i) => {
              const { recommended } = PATH_STRUCTURE[i] ?? { recommended: false };
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`mb-6 rounded-[3px] border p-7 ${
                    recommended
                      ? "border-[rgba(197,165,90,0.35)] bg-[#1B2A4A]"
                      : "border-[rgba(197,165,90,0.12)] bg-[#071020]"
                  }`}
                >
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <div>
                      {recommended && (
                        <span className="inline-block font-mono text-[8px] uppercase tracking-[0.12em] bg-[#C5A55A] text-[#0A1628] px-2 py-0.5 rounded-[2px] mb-2">
                          {t("section1.recommendedBadge")}
                        </span>
                      )}
                      <h3 className="font-display font-bold text-xl text-[#F5F0E8]">{path.title}</h3>
                      <p className="font-body text-[13px] italic text-[rgba(245,240,232,0.4)]">{path.subtitle}</p>
                    </div>
                  </div>
                  <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-5">{path.description}</p>
                  <GoldRule width="full" opacity={12} className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-1">Cost</p>
                      <p className="font-body text-[13px] text-[rgba(245,240,232,0.65)]">{path.cost}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-1">Timeframe</p>
                      <p className="font-body text-[13px] text-[rgba(245,240,232,0.65)]">{path.timeframe}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-1">Used For</p>
                      <p className="font-body text-[13px] text-[rgba(245,240,232,0.65)]">{path.usedFor}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-2">Steps</p>
                    <ol className="space-y-1">
                      {path.steps.map((step, si) => (
                        <li key={si} className="flex gap-2.5 font-body text-[13px] text-[rgba(245,240,232,0.5)]">
                          <span className="font-mono text-[10px] text-[rgba(197,165,90,0.4)] shrink-0 pt-0.5">{String(si + 1).padStart(2, "0")}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#071020] py-20 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">{t("section2.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">{t("section2.heading")}</h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {faq.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="border-b border-[rgba(197,165,90,0.1)] py-6">
                <p className="font-display font-bold text-[15px] text-[#F5F0E8] mb-2">{item.q}</p>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.55)]">{item.a}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("cta.eyebrow")}</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                {t("cta.body")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/guide" variant="secondary" size="md">{t("cta.secondary")}</Button>
              <Button href="/booking" variant="primary" size="md">{t("cta.primary")}</Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10">
            <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic">{scope.disclaimer}</p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
