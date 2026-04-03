"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, SlideIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutPage() {
  const { brand } = siteData;
  const { t, ta } = useTranslation("about");
  const paragraphs = ta<string[]>("story.paragraphs") ?? siteData.about.paragraphs;
  const credentials = ta<string[]>("credentials.items") ?? siteData.about.credentials;
  const steps = ta<Array<{ title: string; body: string }>>("appointment.steps") ?? siteData.whatToExpect.steps.map(s => ({ title: s.title, body: s.body }));

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Origin story */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Portrait column */}
            <SlideIn direction="left" className="lg:col-span-2">
              <div className="relative">
                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] overflow-hidden flex items-end">
                  <div className="w-full bg-[rgba(10,22,40,0.85)] backdrop-blur-sm p-5 border-t border-[rgba(197,165,90,0.15)]">
                    <p className="font-display font-bold text-[#F5F0E8]">{brand.consul.name}</p>
                    <p className="font-body text-[12px] text-[rgba(245,240,232,0.5)] mt-0.5">{brand.consul.title}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#C5A55A] mt-2">
                      {t("portrait.appointedBy")} {brand.consul.appointedBy}
                    </p>
                  </div>
                </div>
                {/* Gold corner accent */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[rgba(197,165,90,0.3)] rounded-[2px]" />
              </div>
            </SlideIn>

            {/* Story column */}
            <SlideIn direction="right" delay={0.1} className="lg:col-span-3">
              <div className="space-y-6">
                {paragraphs.map((para, i) => (
                  <p key={i} className="font-body text-[16px] leading-[1.85] text-[rgba(245,240,232,0.75)]">
                    {para}
                  </p>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">{t("credentials.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              {t("credentials.headline")}
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {credentials.map((cred, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex gap-4 py-4 border-b border-[rgba(197,165,90,0.1)]"
              >
                <span className="text-[#C5A55A] shrink-0 mt-0.5 text-lg leading-none">›</span>
                <p className="font-body text-[15px] text-[rgba(245,240,232,0.75)]">{cred}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What to Expect at Your Appointment */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-12">
            <Eyebrow className="mb-3">{t("appointment.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#F5F0E8] max-w-lg">
              {t("appointment.headline")}
            </h2>
          </FadeUp>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-6 py-8 border-b border-[rgba(197,165,90,0.1)] last:border-b-0">
                  <div className="pt-0.5">
                    <span className="font-mono font-bold text-[2rem] leading-none text-[rgba(197,165,90,0.25)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[17px] text-[#F5F0E8] mb-2">{step.title}</h3>
                    <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)]">{step.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-[#071020] py-16 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("cta.eyebrow")}</Eyebrow>
              <p className="font-body text-[16px] text-[rgba(245,240,232,0.65)] max-w-md">
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
