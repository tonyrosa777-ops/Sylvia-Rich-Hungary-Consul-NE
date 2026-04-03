"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

interface VitalRecord {
  type: string;
  hu: string;
  summary: string;
  consulRole: string;
  whatBring: string[];
  requiresNY: boolean;
  nyNote: string;
}

export default function VitalRecordsPage() {
  const { scope } = siteData;
  const { t, ta } = useTranslation("vital-records");
  const records = ta<VitalRecord[]>("records");

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Records list */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1}>
            {records.map((record, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`mb-6 rounded-[3px] border p-7 ${
                  record.requiresNY
                    ? "border-[rgba(245,240,232,0.07)] bg-[#071020]"
                    : "border-[rgba(197,165,90,0.2)] bg-[#1B2A4A]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className={`font-mono text-[10px] uppercase tracking-[0.12em] mb-1 ${
                      record.requiresNY ? "text-[rgba(245,240,232,0.3)]" : "text-[#C5A55A]"
                    }`}>
                      {record.requiresNY ? t("requiresNYLabel") : t("handledLabel")}
                    </p>
                    <h3 className="font-display font-bold text-xl text-[#F5F0E8]">{record.type}</h3>
                    <p className="font-body italic text-[13px] text-[rgba(245,240,232,0.35)]">{record.hu}</p>
                  </div>
                </div>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-4">{record.summary}</p>

                {!record.requiresNY && (
                  <>
                    <GoldRule width="full" opacity={12} className="mb-4" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-2">
                      {t("consulRoleLabel")}
                    </p>
                    <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.55)] mb-4">{record.consulRole}</p>
                    {record.whatBring.length > 0 && (
                      <>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-2">
                          {t("whatToBringLabel")}
                        </p>
                        <ul className="space-y-1.5">
                          {record.whatBring.map((item, bi) => (
                            <li key={bi} className="flex gap-2 font-body text-[13px] text-[rgba(245,240,232,0.5)]">
                              <span className="text-[#C5A55A] shrink-0">›</span>{item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </>
                )}

                {record.requiresNY && (
                  <>
                    <div className="border border-[rgba(245,240,232,0.07)] rounded-[2px] p-4 mt-2">
                      <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.4)]">{record.nyNote}</p>
                    </div>
                    <p className="font-body text-[13px] italic text-[rgba(245,240,232,0.35)] mt-3">{record.consulRole}</p>
                  </>
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
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/scope" variant="secondary" size="md">{t("cta.secondary")}</Button>
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
