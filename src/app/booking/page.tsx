"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { siteData } from "@/data/site";
import { PageHeader, GoldRule } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { ConsulateCalendar } from "@/components/sections/ConsulateCalendar";
import { useTranslation } from "@/hooks/useTranslation";

// Quiz passes answers as ?service=authentication&q0=documentation&q1=urgent&q2=nh
// We format them into a human-readable note string for Calendly's custom field (a1)
function buildNotesFromParams(params: URLSearchParams): string | undefined {
  const service = params.get("service");
  const q0 = params.get("q0");
  const q1 = params.get("q1");
  const q2 = params.get("q2");
  const fromQuiz = params.get("from") === "quiz";

  if (!fromQuiz || !service) return undefined;

  const parts: string[] = [`Service: ${service}`];
  if (q0) parts.push(`Situation: ${q0}`);
  if (q1) parts.push(`Urgency: ${q1}`);
  if (q2) parts.push(`State: ${q2}`);
  return parts.join(" | ");
}

function BookingContent() {
  const { t } = useTranslation("booking");
  const { brand } = siteData;
  const params = useSearchParams();
  const prefillNotes = buildNotesFromParams(params);

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Payment + hours reminder bar */}
      <div className="bg-[#071020] border-b border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-4 sm:gap-10">
          {[
            { label: t("reminders.paymentLabel"), value: brand.payment },
            { label: t("reminders.hoursLabel"),   value: brand.hours.detail },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">{label}</p>
              <p className="font-body text-[13px] text-[rgba(245,240,232,0.55)]">{value}</p>
            </div>
          ))}
          {prefillNotes && (
            <div className="sm:ml-auto">
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">From Quiz</p>
              <p className="font-body text-[12px] text-[rgba(245,240,232,0.45)] italic">Your answers will be included in the booking</p>
            </div>
          )}
        </div>
      </div>

      {/* Calendar widget */}
      <section className="bg-[#071020] py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <ConsulateCalendar prefillNotes={prefillNotes} />
          </FadeUp>
        </div>
      </section>

      {/* What to bring */}
      <section className="bg-[#0A1628] py-14 border-t border-[rgba(197,165,90,0.1)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[rgba(197,165,90,0.6)] mb-5">
              {t("reminders.bringLabel")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {[
                t("bring.id"),
                t("bring.documents"),
                t("bring.payment"),
                t("bring.unsigned"),
              ].map((item) => (
                <div key={item} className="flex gap-2.5 font-body text-[13px] text-[rgba(245,240,232,0.55)]">
                  <span className="text-[#C5A55A] shrink-0">›</span>{item}
                </div>
              ))}
            </div>
            <GoldRule width="md" opacity={12} className="mx-auto mt-8 mb-5" />
            <p className="font-body text-[11px] text-[rgba(245,240,232,0.25)] italic">
              {t("reminders.disclaimer")}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

// useSearchParams must be inside Suspense boundary
export default function BookingPage() {
  return (
    <Suspense>
      <BookingContent />
    </Suspense>
  );
}
