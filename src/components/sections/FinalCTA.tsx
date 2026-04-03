"use client";
import { FadeUp, FadeIn } from "@/components/animations";
import { Button, GoldRule } from "@/components/ui";
import { siteData } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

export function FinalCTA() {
  const { t } = useTranslation("home");

  return (
    <section
      className="relative bg-[#071020] py-24 lg:py-32 overflow-hidden border-t border-[rgba(197,165,90,0.15)]"
      aria-label="Book an appointment"
    >
      {/* Subtle gold radial glow */}
      <FadeIn>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(197,165,90,0.07) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
      </FadeIn>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">

        <FadeUp>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(197,165,90,0.6)] mb-5">
            {t("finalCTA.eyebrow")}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display font-black text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[#F5F0E8] mb-5">
            {t("finalCTA.headline")}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <GoldRule width="sm" opacity={35} className="mx-auto mb-7" />
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="font-body text-[17px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-10 max-w-xl mx-auto">
            {t("finalCTA.body")}
          </p>
        </FadeUp>

        <FadeUp delay={0.4} className="flex flex-wrap gap-4 justify-center">
          <Button href="/booking" variant="primary" size="lg">
            {t("finalCTA.cta")}
          </Button>
          <Button href="/services/scope" variant="secondary" size="lg">
            {t("finalCTA.secondary")}
          </Button>
        </FadeUp>

        <FadeUp delay={0.55}>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.25)] mt-7">
            {siteData.brand.address.full}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.2)] mt-1">
            {siteData.brand.payment}
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
