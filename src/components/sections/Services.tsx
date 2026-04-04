"use client";
import { Eyebrow, GoldRule, Button } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

export function Services() {
  const { services } = siteData;
  const { t } = useTranslation("home");

  return (
    <section className="bg-[#0A1628] py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="mb-14 max-w-xl">
          <Eyebrow className="mb-4">{t("services.eyebrow")}</Eyebrow>
          <h2
            id="services-heading"
            className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight text-[#F5F0E8]"
          >
            {t("services.headline")}
          </h2>
          <GoldRule width="sm" opacity={35} className="mt-5 mb-6" />
          <p className="font-body text-[16px] leading-relaxed text-[rgba(245,240,232,0.6)]">
            {t("services.description")}{" "}
            <a href="/services/scope" className="text-[#C5A55A] underline underline-offset-4 hover:text-[#D4AF37] transition-colors">
              {t("services.notSure")}
            </a>
          </p>
        </FadeUp>

        {/* Service cards */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-7 h-full flex flex-col hover:border-[#C5A55A] hover:shadow-[0_4px_32px_rgba(10,22,40,0.7)] transition-all duration-300 group">

                {/* Badge */}
                {service.badge && (
                  <span className="inline-block font-mono text-[9px] uppercase tracking-[0.14em] text-[#0A1628] bg-[#C5A55A] px-2.5 py-1 rounded-[2px] mb-4 self-start">
                    {service.badge}
                  </span>
                )}

                {/* Service name */}
                <h3 className="font-display font-semibold text-xl text-[#F5F0E8] leading-snug mb-1">
                  {service.name}
                </h3>
                {service.nameHu && (
                  <p className="font-body italic text-sm text-[rgba(245,240,232,0.35)] mb-3">
                    {service.nameHu}
                  </p>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-mono font-medium text-[1.6rem] leading-none text-[#C5A55A] group-hover:text-[#D4AF37] transition-colors">
                    {service.priceDisplay}
                  </span>
                  {service.priceUnit && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.35)]">
                      {service.priceUnit}
                    </span>
                  )}
                </div>

                <GoldRule width="full" opacity={15} className="mb-4" />

                {/* Description */}
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)] mb-5 flex-1">
                  {service.tagline}
                </p>

                {/* What to bring */}
                <div className="mt-auto">
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.3)] mb-2">
                    {t("services.bringWith")}
                  </p>
                  <ul className="space-y-1.5">
                    {service.whatToBring.slice(0, 2).map((item) => (
                      <li key={item} className="flex gap-2 font-body text-[12px] text-[rgba(245,240,232,0.5)]">
                        <span className="text-[#C5A55A] shrink-0 opacity-60">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Footer note */}
        <FadeUp delay={0.3} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.3)]">
            {t("services.paymentNote")}
          </p>
          <Button href="/services" variant="ghost" size="sm">
            {t("services.viewAll")}
          </Button>
        </FadeUp>

        {/* Pricing disclaimer */}
        <FadeUp delay={0.4} className="mt-6">
          <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic">
            ⚠ Prices shown are pending final confirmation from Sylvia Rich. Do not publish until confirmed.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
