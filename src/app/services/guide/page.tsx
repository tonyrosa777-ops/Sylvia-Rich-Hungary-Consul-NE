"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

// Structural config only — text comes from JSON
const BRANCH_STRUCTURE = [
  { highlight: true,  href: "/booking",                                                                           isExternal: false },
  { highlight: false, href: "https://sos.nh.gov/elections-voter-registration/notary-public-apostille-and-authentication/apostille-and-authentication/", isExternal: true  },
  { highlight: true,  href: "/booking",                                                                           isExternal: false },
  { highlight: false, href: "/contact",                                                                           isExternal: false },
];

interface BranchTranslation {
  label: string;
  answer: string;
  detail: string;
  actionLabel: string;
}

interface GlossaryTerm {
  term: string;
  definition: string;
}

export default function GuidePage() {
  const { scope } = siteData;
  const { t, ta } = useTranslation("guide");

  const branches = ta<BranchTranslation[]>("tree.branches");
  const terms = ta<GlossaryTerm[]>("glossary.terms");

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Decision tree */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C5A55A] mb-2">{t("tree.sectionLabel")}</p>
            <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#F5F0E8] mb-10">
              {t("tree.question")}
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.1}>
            {branches.map((branch, i) => {
              const { highlight, href, isExternal } = BRANCH_STRUCTURE[i] ?? { highlight: false, href: "/booking", isExternal: false };
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`mb-5 rounded-[3px] border p-7 ${
                    highlight
                      ? "border-[rgba(197,165,90,0.35)] bg-[#1B2A4A]"
                      : "border-[rgba(245,240,232,0.07)] bg-[#071020]"
                  }`}
                >
                  <p className={`font-mono text-[10px] uppercase tracking-[0.12em] mb-2 ${
                    highlight ? "text-[#C5A55A]" : "text-[rgba(245,240,232,0.35)]"
                  }`}>
                    {branch.label}
                  </p>
                  <p className="font-display font-bold text-[17px] text-[#F5F0E8] mb-3">
                    {branch.answer}
                  </p>
                  <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)] mb-5">
                    {branch.detail}
                  </p>
                  <Button
                    href={href}
                    external={isExternal}
                    variant={highlight ? "primary" : "secondary"}
                    size="sm"
                  >
                    {branch.actionLabel}
                  </Button>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-[#071020] py-20 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">{t("glossary.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              {t("glossary.heading")}
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {terms.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="border-b border-[rgba(197,165,90,0.1)] py-6"
              >
                <p className="font-display font-bold text-[16px] text-[#C5A55A] mb-2">{item.term}</p>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)]">{item.definition}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Still confused? CTA */}
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
              <Button href="/services/scope" variant="secondary" size="md">{t("cta.secondary")}</Button>
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
