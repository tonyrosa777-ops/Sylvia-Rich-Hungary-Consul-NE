"use client";
import Image from "next/image";
import { Eyebrow, GoldRule, Button } from "@/components/ui";
import { SlideIn, FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

export function FounderStory() {
  const { t, ta } = useTranslation("about");
  const paragraphs = ta<string[]>("story.paragraphs") ?? siteData.about.paragraphs;
  const credentials = ta<string[]>("credentials.items") ?? siteData.about.credentials;

  return (
    <section
      className="bg-[#122040] py-24 lg:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: portrait placeholder ── */}
          <SlideIn direction="left" threshold={0.15}>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Gold frame border */}
              <div className="absolute -inset-3 border border-[rgba(197,165,90,0.25)] rounded-[3px]" aria-hidden="true" />
              <div className="absolute -inset-6 border border-[rgba(197,165,90,0.1)] rounded-[3px]" aria-hidden="true" />

              {/* Portrait */}
              <div className="relative bg-[#1B2A4A] rounded-[3px] aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/sylvia-rich-portrait.jpg"
                  alt={`${siteData.brand.consul.name} — ${t("portrait.consultTitle")}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 384px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Name badge overlapping bottom */}
              <div className="absolute -bottom-5 left-6 right-6 bg-[#0D1E35] border border-[rgba(197,165,90,0.3)] rounded-[3px] px-5 py-3">
                <p className="font-display font-semibold text-[#F5F0E8] text-base">
                  {siteData.brand.consul.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#C5A55A] mt-0.5">
                  {t("portrait.consultTitle")}
                </p>
              </div>
            </div>
          </SlideIn>

          {/* ── Right: story copy ── */}
          <SlideIn direction="right" threshold={0.15}>
            <div>
              <FadeUp delay={0.15}>
                <Eyebrow className="mb-4">{t("header.eyebrow")}</Eyebrow>
                <h2
                  id="about-heading"
                  className="font-display font-bold text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[#F5F0E8] mb-5"
                >
                  {t("header.headline")}
                </h2>
                <GoldRule width="sm" opacity={35} className="mb-8" />
              </FadeUp>

              <div className="space-y-5 mb-8">
                {paragraphs.map((para, i) => (
                  <FadeUp key={i} delay={0.2 + i * 0.12}>
                    <p className="font-body text-[16px] leading-[1.8] text-[rgba(245,240,232,0.75)]">
                      {para}
                    </p>
                  </FadeUp>
                ))}
              </div>

              {/* Credentials */}
              <StaggerContainer staggerDelay={0.08} initialDelay={0.5}>
                <ul className="space-y-2.5 mb-8">
                  {credentials.map((cred, i) => (
                    <motion.li
                      key={i}
                      variants={staggerItem}
                      className="flex items-start gap-3 font-body text-[14px] text-[rgba(245,240,232,0.6)]"
                    >
                      <span className="text-[#C5A55A] mt-[3px] shrink-0" aria-hidden="true">—</span>
                      {cred}
                    </motion.li>
                  ))}
                </ul>
              </StaggerContainer>

              <FadeUp delay={0.8}>
                <Button href="/about" variant="secondary" size="md">
                  {t("readStory")}
                </Button>
              </FadeUp>
            </div>
          </SlideIn>

        </div>
      </div>
    </section>
  );
}
