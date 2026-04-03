"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Eyebrow, GoldRule, PageHeader } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { useTranslation } from "@/hooks/useTranslation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Tier {
  id: string;
  name: string;
  price: string;
  tagline: string;
  cta: string;
  highlight: boolean;
}

interface ComparisonRow {
  feature: string;
  starter: boolean;
  pro: boolean;
  premium: boolean;
}

interface FaqItem {
  q: string;
  a: string;
}

// ─── Check / Dash icons ───────────────────────────────────────────────────────

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-[2px]"
    >
      <circle cx="7" cy="7" r="7" fill="rgba(197,165,90,0.15)" />
      <path d="M4 7l2 2 4-4" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TableCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Included" className="mx-auto">
      <path d="M3 8l3.5 3.5 6.5-7" stroke="#C5A55A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TableDash() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Not included" className="mx-auto">
      <path d="M4 8h8" stroke="rgba(245,240,232,0.2)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const { t, ta } = useTranslation("pricing");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = ta<Tier[]>("tiers");
  const starterFeatures = ta<string[]>("features.starter");
  const proFeatures = ta<string[]>("features.pro");
  const premiumFeatures = ta<string[]>("features.premium");
  const compRows = ta<ComparisonRow[]>("comparison.rows");
  const faqItems = ta<FaqItem[]>("faq.items");

  const featuresByTier: Record<string, string[]> = {
    starter: starterFeatures,
    pro: proFeatures,
    premium: premiumFeatures,
  };

  return (
    <>
      {/* ── Hero ── */}
      <PageHeader
        eyebrow={t("hero.eyebrow")}
        headline={t("hero.headline")}
        description={t("hero.subheadline")}
      />

      {/* ── Tier cards ── */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <FadeUp key={tier.id} delay={i * 0.1}>
                <div
                  className={[
                    "relative flex flex-col h-full rounded-[3px] p-8 border transition-colors duration-300",
                    tier.highlight
                      ? "bg-[#1B2A4A] border-[#C5A55A] shadow-[0_0_40px_rgba(197,165,90,0.08)]"
                      : "bg-[#122040] border-[rgba(197,165,90,0.2)] hover:border-[rgba(197,165,90,0.35)]",
                  ].join(" ")}
                >
                  {/* Recommended badge */}
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block bg-[#C5A55A] text-[#0A1628] font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full">
                        {t("badge.recommended")}
                      </span>
                    </div>
                  )}

                  {/* Tier name + price */}
                  <div className="mb-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.65)] mb-2">
                      {tier.name}
                    </p>
                    <p className="font-display font-bold text-[2.4rem] leading-none text-[#F5F0E8] mb-3">
                      {tier.price}
                    </p>
                    <GoldRule width="sm" opacity={tier.highlight ? 40 : 20} className="mb-3" />
                    <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {featuresByTier[tier.id]?.map((feat, fi) => (
                      <li key={fi} className="flex gap-3 items-start">
                        <Check />
                        <span className="font-body text-[14px] leading-[1.6] text-[rgba(245,240,232,0.75)]">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href="/contact"
                    variant={tier.highlight ? "primary" : "secondary"}
                    size="md"
                    className="w-full text-center justify-center"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="bg-[#071020] py-20 border-y border-[rgba(197,165,90,0.1)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display font-bold text-[1.6rem] text-[#F5F0E8] mb-2">
              {t("comparison.heading")}
            </h2>
            <GoldRule width="sm" opacity={30} className="mb-8" />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.35)] w-1/2">
                      Feature
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.id}
                        className={[
                          "py-3 px-4 text-center font-mono text-[10px] uppercase tracking-[0.12em]",
                          tier.highlight ? "text-[#C5A55A]" : "text-[rgba(245,240,232,0.35)]",
                        ].join(" ")}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compRows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={[
                        "border-t",
                        ri % 2 === 0
                          ? "border-[rgba(197,165,90,0.06)] bg-transparent"
                          : "border-[rgba(197,165,90,0.06)] bg-[rgba(255,255,255,0.015)]",
                      ].join(" ")}
                    >
                      <td className="py-3 pr-4 font-body text-[13px] text-[rgba(245,240,232,0.65)]">
                        {row.feature}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.starter ? <TableCheck /> : <TableDash />}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.pro ? <TableCheck /> : <TableDash />}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.premium ? <TableCheck /> : <TableDash />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display font-bold text-[1.6rem] text-[#F5F0E8] mb-2">
              {t("faq.heading")}
            </h2>
            <GoldRule width="sm" opacity={30} className="mb-8" />
          </FadeUp>

          <StaggerContainer staggerDelay={0.07}>
            {faqItems.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="mb-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-4 px-5 bg-[#122040] border border-[rgba(197,165,90,0.15)] hover:border-[rgba(197,165,90,0.35)] rounded-[3px] text-left transition-colors duration-200 group"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-body text-[15px] text-[rgba(245,240,232,0.85)] group-hover:text-[#F5F0E8] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={[
                      "shrink-0 font-mono text-[#C5A55A] text-[18px] leading-none transition-transform duration-200",
                      openFaq === i ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 border border-t-0 border-[rgba(197,165,90,0.1)] rounded-b-[3px] bg-[rgba(27,42,74,0.4)]">
                        <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.65)]">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#071020] py-16 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.25)] rounded-[3px] p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <Eyebrow className="mb-3">{t("cta.eyebrow")}</Eyebrow>
                <h2 className="font-display font-bold text-[1.4rem] text-[#F5F0E8] mb-2">
                  {t("cta.headline")}
                </h2>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)] max-w-sm">
                  {t("cta.body")}
                </p>
              </div>
              <div className="shrink-0">
                <Button href="/contact" variant="primary" size="md">
                  {t("cta.button")}
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
