"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroParticles } from "./HeroParticles";
import { Button, Eyebrow, GoldRule } from "@/components/ui";
import { siteData } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

// Animation sequence per design-system.md §1 / website-build-template.md §1
const seq = {
  eyebrow:  { delay: 0.1,  duration: 0.6 },
  headline: { delay: 0.35, duration: 0.7 },
  sub:      { delay: 0.55, duration: 0.7 },
  tagline:  { delay: 0.8,  duration: 0.7 },
  ctas:     { delay: 1.1,  duration: 0.6 },
  trust:    { delay: 1.35, duration: 0.5 },
  crest:    { delay: 0.2,  duration: 1.0 },
};

function fadeUp(delay: number, duration: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: "easeOut" as const },
  };
}

export function Hero() {
  const { hero } = siteData;
  const { t } = useTranslation("home");

  return (
    <section
      className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden bg-[#0A1628] grain-overlay"
      aria-label="Hero"
    >
      {/* Particle field */}
      <HeroParticles />

      {/* Breathing orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full pt-20 pb-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(seq.eyebrow.delay, seq.eyebrow.duration)} className="mb-5">
              <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(seq.headline.delay, seq.headline.duration)}
              className="font-display font-black text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] text-[#F5F0E8] mb-2"
            >
              {t("hero.headline")}
            </motion.h1>

            <motion.div {...fadeUp(seq.sub.delay, seq.sub.duration)} className="mb-3">
              <span className="shimmer-gold font-display font-black italic text-[clamp(2rem,4vw,3.8rem)] leading-[1.05]">
                {t("hero.headlineSub")}
              </span>
            </motion.div>

            <motion.div {...fadeUp(seq.tagline.delay, seq.tagline.duration)} className="mb-2">
              <GoldRule width="sm" opacity={40} className="mb-5" />
              <p className="font-body text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-[rgba(245,240,232,0.75)] max-w-lg">
                {t("hero.tagline")}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(seq.ctas.delay, seq.ctas.duration)}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button href={hero.ctaPrimary.href} variant="primary" size="lg">
                {t("hero.ctaPrimary")}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
                {t("hero.ctaSecondary")}
              </Button>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.p
              {...fadeUp(seq.trust.delay, seq.trust.duration)}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.35)] mt-5"
            >
              {t("hero.trustCopy")}
              <span className="mx-2 text-[#C5A55A] opacity-50">·</span>
              {t("hero.paymentNote")}
            </motion.p>
          </div>

          {/* ── Right: crest ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: seq.crest.delay, duration: seq.crest.duration, ease: "easeOut" }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            {/* Crest container — gold ring glow */}
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-[-20px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(197,165,90,0.08) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              {/* Thin gold circle border */}
              <div className="absolute inset-0 rounded-full border border-[rgba(197,165,90,0.2)]" aria-hidden="true" />

              <Image
                src="/brand/crest-placeholder.svg"
                alt="Hungarian coat of arms"
                width={240}
                height={270}
                className="relative z-10 opacity-90"
                priority
              />
            </div>

            {/* Official appointment badge */}
            <div className="mt-8 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(245,240,232,0.4)]">
                Officially Appointed By
              </p>
              <p className="font-display text-sm text-[rgba(245,240,232,0.65)] mt-1 italic">
                Embassy of Hungary · Washington DC
              </p>
              <GoldRule width="md" opacity={25} className="mx-auto mt-3" />
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.3)] mt-3">
                Vienna Convention on Consular Relations
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[rgba(197,165,90,0.4)] to-transparent" />
        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[rgba(197,165,90,0.4)]">Scroll</p>
      </motion.div>
    </section>
  );
}
