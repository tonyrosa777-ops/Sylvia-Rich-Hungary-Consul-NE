"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow, FaqSchema } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

interface StepItem {
  step: string;
  title: string;
  body: string;
  consul: boolean;
  consulNote: string;
}

export default function CitizenshipPage() {
  const { scope } = siteData;
  const { t, ta } = useTranslation("citizenship");

  const steps = ta<StepItem[]>("steps.items");
  const canDoItems = ta<string[]>("canDo.items");
  const cannotDoItems = ta<string[]>("cannotDo.items");

  const citizenshipFaqs = [
    { q: "Can the Honorary Consulate help me apply for Hungarian citizenship?", a: "Yes. The Honorary Consulate of Hungary in New England assists with citizenship applications under the simplified naturalization process. Sylvia Rich prepares and authenticates the required documentation and submits the application on your behalf to the Hungarian authorities." },
    { q: "What is the simplified naturalization process for Hungarian citizenship?", a: "Hungary's simplified naturalization process allows ethnic Hungarians and descendants to apply for citizenship without a continuous residency requirement in Hungary. You must demonstrate Hungarian ancestry and basic proficiency in the Hungarian language." },
    { q: "How long does a Hungarian citizenship application take?", a: "Processing times are set by the Hungarian authorities and typically range from 6 to 18 months. The Honorary Consulate cannot expedite the process but ensures your application is complete and correctly submitted to avoid delays." },
    { q: "Can I have dual Hungarian and American citizenship?", a: "Yes. Hungary permits dual citizenship. Naturalizing as a Hungarian citizen does not automatically affect your US citizenship. However, you should consult a US attorney if you have concerns about your specific situation." },
    { q: "Where do I go for a Hungarian citizenship appointment in New England?", a: "The Honorary Consulate of Hungary serves all of New England from Derry, New Hampshire. Monday afternoon appointments are required. There is no consulate in Boston, Providence, or Hartford — Derry, NH is the closest official consular presence for New England residents." },
  ];

  return (
    <>
      <FaqSchema faqs={citizenshipFaqs} />
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Intro */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Eyebrow className="mb-3">{t("intro.eyebrow")}</Eyebrow>
                <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#F5F0E8] mb-5">
                  {t("intro.headline")}
                </h2>
                <div className="space-y-4 font-body text-[16px] leading-[1.8] text-[rgba(245,240,232,0.7)]">
                  {ta<string[]>("intro.paragraphs").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">{t("processingTime.label")}</p>
                <p className="font-display font-bold text-3xl text-[#F5F0E8] mb-1">{t("processingTime.value")}</p>
                <p className="font-body text-[13px] text-[rgba(245,240,232,0.5)]">{t("processingTime.unit")}</p>
                <GoldRule width="sm" opacity={20} className="my-4" />
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-2">{t("processingTime.noExpeditingLabel")}</p>
                <p className="font-body text-[12px] text-[rgba(245,240,232,0.4)]">{t("processingTime.noExpeditingBody")}</p>
              </div>
            </div>
          </FadeUp>

          {/* Step-by-step */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="grid grid-cols-[auto_1fr] gap-6 py-8 border-b border-[rgba(197,165,90,0.1)] last:border-b-0">
                  <span className="font-mono font-bold text-[2rem] leading-none text-[rgba(197,165,90,0.2)] pt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-[17px] text-[#F5F0E8]">{step.title}</h3>
                      {step.consul && (
                        <span className="font-mono text-[8px] uppercase tracking-[0.1em] bg-[rgba(197,165,90,0.15)] text-[#C5A55A] border border-[rgba(197,165,90,0.3)] px-2 py-0.5 rounded-[2px]">
                          {t("steps.consulBadge")}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)] mb-2">{step.body}</p>
                    {step.consulNote && (
                      <p className="font-body text-[13px] italic text-[rgba(197,165,90,0.6)]">› {step.consulNote}</p>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Can/cannot comparison */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-8">
            <Eyebrow className="mb-3">{t("roleClarity.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              {t("roleClarity.heading")}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">{t("canDo.heading")}</p>
                <ul className="space-y-2.5">
                  {canDoItems.map((item, i) => (
                    <li key={i} className="flex gap-2.5 font-body text-[13px] text-[rgba(245,240,232,0.7)]">
                      <span className="text-[#C5A55A] shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-[#071020] border border-[rgba(245,240,232,0.07)] rounded-[3px] p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.3)] mb-4">{t("cannotDo.heading")}</p>
                <ul className="space-y-2.5">
                  {cannotDoItems.map((item, i) => (
                    <li key={i} className="flex gap-2.5 font-body text-[13px] text-[rgba(245,240,232,0.4)]">
                      <span className="text-[rgba(245,240,232,0.2)] shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
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
