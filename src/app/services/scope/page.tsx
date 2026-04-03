"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

type FaqItem = { question: string; answer: string };

export default function ScopePage() {
  const { scope } = siteData;
  const { t, ta } = useTranslation("scope");
  const { t: tCommon } = useTranslation("common");

  const canDo = ta<string[]>("canDo.items") ?? scope.canDo;
  const cannotDo = ta<string[]>("cannotDo.items") ?? scope.cannotDo;
  const faqItems = ta<FaqItem[]>("faq.items") ?? [];

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Two-column comparison */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Can Do — left column */}
            <FadeUp>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.25)] rounded-[3px] p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-[rgba(197,165,90,0.15)] border border-[#C5A55A] flex items-center justify-center shrink-0">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1.5 5.5L5.5 9.5L12.5 1.5" stroke="#C5A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A]">{t("canDo.heading")}</p>
                    <p className="font-display font-bold text-lg text-[#F5F0E8]">Derry, NH</p>
                  </div>
                </div>
                <GoldRule width="full" opacity={15} className="mb-6" />
                <ul className="space-y-3">
                  {canDo.map((item, i) => (
                    <li key={i} className="flex gap-3 font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.75)]">
                      <span className="text-[#C5A55A] shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/booking" variant="primary" size="sm">
                    {tCommon("labels.bookNow")}
                  </Button>
                </div>
              </div>
            </FadeUp>

            {/* Cannot Do — right column */}
            <FadeUp delay={0.15}>
              <div className="bg-[#071020] border border-[rgba(245,240,232,0.08)] rounded-[3px] p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-[rgba(245,240,232,0.05)] border border-[rgba(245,240,232,0.12)] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5" stroke="rgba(245,240,232,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.3)]">{t("cannotDo.heading")}</p>
                    <p className="font-display font-bold text-lg text-[rgba(245,240,232,0.5)]">New York City</p>
                  </div>
                </div>
                <div className="h-px w-full bg-[rgba(245,240,232,0.08)] mb-6" />
                <ul className="space-y-3 mb-8">
                  {cannotDo.map((item, i) => (
                    <li key={i} className="flex gap-3 font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.45)]">
                      <span className="text-[rgba(245,240,232,0.2)] shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* NY contact block */}
                <div className="border border-[rgba(245,240,232,0.08)] rounded-[2px] p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.3)] mb-2">
                    {t("nyContact.heading")}
                  </p>
                  <p className="font-body font-medium text-[14px] text-[rgba(245,240,232,0.55)] mb-1">{scope.nyContact.name}</p>
                  <p className="font-body text-[12px] text-[rgba(245,240,232,0.35)] mb-3">{scope.nyContact.address}</p>
                  <p className="font-body text-[12px] leading-relaxed text-[rgba(245,240,232,0.35)] mb-4">
                    {t("nyContact.note")}
                  </p>
                  <a
                    href={scope.nyContact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.3)] hover:text-[rgba(245,240,232,0.5)] transition-colors duration-150 underline underline-offset-4"
                  >
                    newyork.mfa.gov.hu →
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-8 max-w-lg">
              {t("faq.heading")}
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {faqItems.map((item) => (
              <motion.div
                key={item.question}
                variants={staggerItem}
                className="border-b border-[rgba(197,165,90,0.1)] py-6"
              >
                <p className="font-body font-medium text-[15px] text-[#F5F0E8] mb-2">{item.question}</p>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.55)]">{item.answer}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("cta.heading")}</Eyebrow>
              <p className="font-body text-[16px] text-[rgba(245,240,232,0.65)] max-w-md">
                {t("cta.body")}
              </p>
            </div>
            <Button href="/booking" variant="primary" size="md" className="shrink-0">
              {t("cta.button")}
            </Button>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10">
            <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic">
              {tCommon("disclaimer.text")}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
