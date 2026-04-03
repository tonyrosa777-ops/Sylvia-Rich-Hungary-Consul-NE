"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow, FaqSchema } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

interface CertificateTranslation {
  name: string;
  hu: string;
  badge: string | null;
  summary: string;
  detail: string;
  whatBring: string[];
  cost: string;
  frequency: string;
  requiresNY: boolean;
  note: string;
}

export default function CertificatesPage() {
  const { scope } = siteData;
  const { t, ta } = useTranslation("certificates");
  const certs = ta<CertificateTranslation[]>("certificates");

  const certificateFaqs = [
    { q: "Can I get a certificate of no criminal record from Hungary through the Honorary Consulate?", a: "Yes. The Honorary Consulate facilitates requests for Hungarian criminal record certificates (erkölcsi bizonyítvány). This document is commonly required for immigration, employment, and dual citizenship applications. Processing is handled through the Hungarian authorities." },
    { q: "What is a certificate of civil status and when do I need one?", a: "A certificate of civil status (from the Hungarian civil registry) confirms your marital status, birth registration, or identity information as recorded in Hungary. It is commonly required for US immigration applications, foreign marriage procedures, and Hungarian inheritance matters." },
    { q: "I need proof of Hungarian residency history for an immigration application. Can you help?", a: "The Honorary Consulate can assist with obtaining documentation related to your Hungarian residential and civil status history. The specific document required depends on the immigration authority's request — bring the formal requirement to your appointment." },
    { q: "Can the Honorary Consulate certify a document is a true copy?", a: "Yes. Certification of true copies (copy authentication) is a standard Honorary Consulate service. You bring the original document and the consul certifies that the copy is a true and accurate reproduction of the original." },
    { q: "Where do I get Hungarian certificates and civil documents in New England?", a: "The Honorary Consulate of Hungary — New England in Derry, NH is the regional point of contact for all Hungarian civil documentation needs. Monday appointments only. All of New England is served from this single office." },
  ];

  return (
    <>
      <FaqSchema faqs={certificateFaqs} />
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Highlight: life certificate free service */}
      <section className="bg-[#071020] py-12 border-b border-[rgba(197,165,90,0.15)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="bg-[rgba(197,165,90,0.07)] border border-[rgba(197,165,90,0.3)] rounded-[3px] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="bg-[rgba(197,165,90,0.15)] border border-[#C5A55A] rounded-full px-3 py-1 shrink-0">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#C5A55A]">{t("freeCallout.badge")}</span>
              </div>
              <div>
                <p className="font-display font-bold text-[16px] text-[#F5F0E8]">
                  {t("freeCallout.headline")}
                </p>
                <p className="font-body text-[13px] text-[rgba(245,240,232,0.6)] mt-1">
                  {t("freeCallout.body")}
                </p>
              </div>
              <Button href="/booking" variant="primary" size="sm" className="shrink-0">
                Book Appointment
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Certificate types */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1}>
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`mb-6 rounded-[3px] border p-7 ${
                  cert.requiresNY
                    ? "border-[rgba(245,240,232,0.07)] bg-[#071020]"
                    : "border-[rgba(197,165,90,0.2)] bg-[#1B2A4A]"
                }`}
              >
                <div className="mb-4">
                  {cert.badge && (
                    <span className="inline-block font-mono text-[8px] uppercase tracking-[0.12em] bg-[#C5A55A] text-[#0A1628] px-2 py-0.5 rounded-[2px] mb-2">
                      {cert.badge}
                    </span>
                  )}
                  {cert.requiresNY && (
                    <span className="inline-block font-mono text-[8px] uppercase tracking-[0.12em] border border-[rgba(245,240,232,0.12)] text-[rgba(245,240,232,0.3)] px-2 py-0.5 rounded-[2px] mb-2">
                      {t("embassyBadge")}
                    </span>
                  )}
                  <h3 className="font-display font-bold text-xl text-[#F5F0E8]">{cert.name}</h3>
                  <p className="font-body italic text-[13px] text-[rgba(245,240,232,0.35)]">{cert.hu}</p>
                </div>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-3">{cert.summary}</p>
                <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.5)] mb-4">{cert.detail}</p>

                {cert.whatBring.length > 0 && (
                  <>
                    <GoldRule width="full" opacity={12} className="mb-4" />
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-2">{t("whatToBringLabel")}</p>
                    <ul className="space-y-1.5 mb-4">
                      {cert.whatBring.map((item, bi) => (
                        <li key={bi} className="flex gap-2 font-body text-[13px] text-[rgba(245,240,232,0.5)]">
                          <span className="text-[#C5A55A] shrink-0">›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.4)]">{t("feeLabel")}: </span>
                    <span className="font-body text-[13px] text-[rgba(245,240,232,0.55)]">{cert.cost}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.4)]">{t("frequencyLabel")}: </span>
                    <span className="font-body text-[13px] text-[rgba(245,240,232,0.55)]">{cert.frequency}</span>
                  </div>
                </div>
                {cert.note && (
                  <p className="font-body text-[12px] italic text-[rgba(245,240,232,0.3)] mt-3">› {cert.note}</p>
                )}
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071020] py-16 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("cta.eyebrow")}</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                {t("cta.body")}
              </p>
            </div>
            <Button href="/booking" variant="primary" size="md" className="shrink-0">
              {t("cta.primary")}
            </Button>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10">
            <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic">{scope.disclaimer}</p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
