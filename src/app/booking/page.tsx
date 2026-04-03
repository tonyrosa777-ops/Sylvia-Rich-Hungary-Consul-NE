"use client";
import { siteData } from "@/data/site";
import { PageHeader, GoldRule } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { useTranslation } from "@/hooks/useTranslation";

export default function BookingPage() {
  const { t } = useTranslation("booking");
  const { brand, booking } = siteData;

  // Build Calendly URL with brand colour parameters
  const src = `${booking.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=071020&text_color=F5F0E8&primary_color=C5A55A`;

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Payment + hours bar */}
      <div className="bg-[#071020] border-b border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-4 sm:gap-10">
          {[
            { label: t("reminders.paymentLabel"), value: brand.payment },
            { label: t("reminders.hoursLabel"), value: brand.hours.detail },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">{label}</p>
              <p className="font-body text-[13px] text-[rgba(245,240,232,0.55)]">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Calendly inline embed */}
      <section className="bg-[#071020] py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="rounded-[3px] overflow-hidden border border-[rgba(197,165,90,0.15)]">
              <iframe
                src={src}
                width="100%"
                height="700"
                style={{ border: 0, display: "block", minWidth: "320px" }}
                title={t("header.headline")}
                loading="lazy"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What to bring reminder */}
      <section className="bg-[#0A1628] py-14 border-t border-[rgba(197,165,90,0.1)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[rgba(197,165,90,0.6)] mb-4">
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
