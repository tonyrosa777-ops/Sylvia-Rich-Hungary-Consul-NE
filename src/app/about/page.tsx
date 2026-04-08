"use client";
import Image from "next/image";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, SlideIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Chapter {
  number: string;
  label: string;
  heading: string;
  paragraphs: string[];
  pullQuote: string;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const { brand } = siteData;
  const { t, ta } = useTranslation("about");

  const chapters = ta<Chapter[]>("chapters");
  const credentials = ta<string[]>("credentials.items");
  const steps = ta<Array<{ title: string; body: string }>>("appointment.steps");

  return (
    <>
      {/* ── Hero header ── */}
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* ── Portrait + intro strip ── */}
      <section className="bg-[#071020] py-16 border-b border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

            {/* Portrait */}
            <SlideIn direction="left">
              <div className="relative max-w-[280px] mx-auto lg:mx-0">
                <div className="relative aspect-[3/4] bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] overflow-hidden">
                  <Image
                    src="/images/sylvia-rich-portrait.jpg"
                    alt={`${brand.consul.name} — ${brand.consul.title}`}
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[rgba(10,22,40,0.88)] backdrop-blur-sm p-5 border-t border-[rgba(197,165,90,0.15)]">
                    <p className="font-display font-bold text-[#F5F0E8]">{brand.consul.name}</p>
                    <p className="font-body text-[12px] text-[rgba(245,240,232,0.5)] mt-0.5">{brand.consul.title}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#C5A55A] mt-2">
                      {t("intro.appointedBy")} {brand.consul.appointedBy}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[rgba(197,165,90,0.3)] rounded-[2px]" />
              </div>
            </SlideIn>

            {/* Credentials column */}
            <SlideIn direction="right" delay={0.1}>
              <div>
                <Eyebrow className="mb-4">{t("credentials.eyebrow")}</Eyebrow>
                <h2 className="font-display font-bold text-[1.35rem] text-[#F5F0E8] mb-5">
                  {t("credentials.headline")}
                </h2>
                <ul className="space-y-3">
                  {credentials.map((cred, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-[#C5A55A] shrink-0 mt-0.5 text-[16px] leading-none">›</span>
                      <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.7)]">{cred}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Narrative chapters ── */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {chapters.map((ch, i) => (
            <FadeUp key={i} delay={0}>
              <article className={i < chapters.length - 1 ? "mb-16 pb-16 border-b border-[rgba(197,165,90,0.1)]" : "mb-0"}>

                {/* Chapter marker */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] text-[rgba(197,165,90,0.4)] tracking-[0.12em]">
                    {ch.number}
                  </span>
                  <span className="w-8 h-px bg-[rgba(197,165,90,0.2)]" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[rgba(197,165,90,0.55)]">
                    {ch.label}
                  </span>
                </div>

                {/* Chapter heading */}
                <h2 className="font-display font-bold text-[1.5rem] lg:text-[1.75rem] text-[#F5F0E8] mb-4 leading-tight">
                  {ch.heading}
                </h2>

                <GoldRule width="sm" opacity={25} className="mb-6" />

                {/* Body paragraphs */}
                <div className="space-y-5">
                  {ch.paragraphs.map((para, j) => (
                    <p key={j} className="font-body text-[16px] leading-[1.9] text-[rgba(245,240,232,0.75)]">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Pull quote */}
                {ch.pullQuote && (
                  <blockquote className="relative my-8 pl-6 border-l-2 border-[#C5A55A]">
                    <p className="font-display italic text-[1.1rem] lg:text-[1.2rem] leading-[1.6] text-[rgba(245,240,232,0.88)]">
                      {ch.pullQuote}
                    </p>
                  </blockquote>
                )}
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Honest word ── */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="border-l-2 border-[rgba(197,165,90,0.3)] pl-6">
              <h3 className="font-display font-bold text-[1.1rem] text-[#F5F0E8] mb-4">
                {t("honest.heading")}
              </h3>
              <p className="font-body text-[15px] leading-[1.85] text-[rgba(245,240,232,0.65)]">
                {t("honest.body")}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="bg-[#0A1628] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-12">
            <Eyebrow className="mb-3">{t("appointment.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#F5F0E8]">
              {t("appointment.headline")}
            </h2>
          </FadeUp>

          <StaggerContainer staggerDelay={0.08}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="grid grid-cols-[auto_1fr] gap-6 py-7 border-b border-[rgba(197,165,90,0.1)] last:border-b-0"
              >
                <div className="pt-0.5">
                  <span className="font-mono font-bold text-[2rem] leading-none text-[rgba(197,165,90,0.2)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[16px] text-[#F5F0E8] mb-1.5">{step.title}</h3>
                  <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)]">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#071020] py-16 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("cta.eyebrow")}</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                {t("cta.body")}
              </p>
            </div>
            <Button href="/booking" variant="primary" size="md" className="shrink-0">
              {t("cta.button")}
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
