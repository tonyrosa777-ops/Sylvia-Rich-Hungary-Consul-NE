"use client";
import { useState } from "react";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactPage() {
  const { brand } = siteData;
  const { t, ta } = useTranslation("contact");
  const { t: tCommon } = useTranslation("common");
  const whatToBringItems = ta<string[]>("whatToBring.items") ?? [];
  const subjectOptions = ta<string[]>("form.subjects") ?? [];

  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Info cards */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {/* Location */}
            <FadeUp>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">{t("cards.location.heading")}</p>
                <p className="font-body font-medium text-[15px] text-[#F5F0E8] mb-1">{brand.address.street}</p>
                <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)]">
                  {brand.address.city}, {brand.address.state} {brand.address.zip}
                </p>
                <p className="font-body text-[12px] text-[rgba(245,240,232,0.35)] mt-2">{t("cards.location.landmark")}</p>
                <GoldRule width="sm" opacity={20} className="mt-5 mb-5" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(brand.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#C5A55A] hover:text-[#D4AF37] transition-colors duration-150 underline underline-offset-4"
                >
                  {t("cards.location.directionsLabel")}
                </a>
              </div>
            </FadeUp>

            {/* Hours */}
            <FadeUp delay={0.1}>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">{t("cards.hours.heading")}</p>
                <p className="font-display font-bold text-[17px] text-[#F5F0E8] mb-2">{tCommon("hours.display")}</p>
                <p className="font-body text-[14px] text-[rgba(245,240,232,0.65)] mb-4">{tCommon("hours.detail")}</p>
                <p className="font-body text-[12px] leading-relaxed text-[rgba(245,240,232,0.4)]">
                  {t("cards.hours.note")}
                </p>
              </div>
            </FadeUp>

            {/* Payment */}
            <FadeUp delay={0.2}>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">{t("cards.payment.heading")}</p>
                <p className="font-body text-[15px] text-[#F5F0E8] mb-2">{t("cards.payment.accepted")}</p>
                <p className="font-body text-[12px] leading-relaxed text-[rgba(245,240,232,0.4)]">
                  {t("cards.payment.checkPayable")}
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Map embed */}
          <FadeUp delay={0.15}>
            <div className="rounded-[3px] overflow-hidden border border-[rgba(197,165,90,0.18)]">
              <iframe
                title={t("mapLabel")}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address.full)}&output=embed&z=15`}
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-[#071020] py-20 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">{t("form.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-2">{t("form.heading")}</h2>
            <p className="font-body text-[15px] text-[rgba(245,240,232,0.6)]">{t("form.subheading")}</p>
          </FadeUp>

          {formState === "success" ? (
            <FadeUp>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.3)] rounded-[3px] p-8 text-center">
                <p className="font-display font-bold text-xl text-[#C5A55A] mb-3">{t("form.successHeading")}</p>
                <p className="font-body text-[15px] text-[rgba(245,240,232,0.7)]">{t("form.successBody")}</p>
                <GoldRule width="md" opacity={20} className="mx-auto mt-6 mb-6" />
                <Button href="/booking" variant="primary" size="md">{t("ctaBook")}</Button>
              </div>
            </FadeUp>
          ) : (
            <FadeUp>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.5)] mb-2">
                      {t("form.fields.name")} <span className="text-[#C5A55A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fields.name}
                      onChange={(e) => setFields({ ...fields, name: e.target.value })}
                      className="w-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] px-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] focus:outline-none focus:border-[rgba(197,165,90,0.5)] transition-colors duration-150"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.5)] mb-2">
                      {t("form.fields.email")} <span className="text-[#C5A55A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={fields.email}
                      onChange={(e) => setFields({ ...fields, email: e.target.value })}
                      className="w-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] px-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] focus:outline-none focus:border-[rgba(197,165,90,0.5)] transition-colors duration-150"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.5)] mb-2">
                    {t("form.fields.subject")}
                  </label>
                  <select
                    value={fields.subject}
                    onChange={(e) => setFields({ ...fields, subject: e.target.value })}
                    className="w-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] px-4 py-3 font-body text-[14px] text-[#F5F0E8] focus:outline-none focus:border-[rgba(197,165,90,0.5)] transition-colors duration-150 appearance-none"
                  >
                    <option value="" className="bg-[#1B2A4A]">—</option>
                    {subjectOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#1B2A4A]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.5)] mb-2">
                    {t("form.fields.message")} <span className="text-[#C5A55A]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={fields.message}
                    onChange={(e) => setFields({ ...fields, message: e.target.value })}
                    placeholder={t("form.fields.messagePlaceholder")}
                    className="w-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] px-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] focus:outline-none focus:border-[rgba(197,165,90,0.5)] transition-colors duration-150 resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="font-body text-[13px] text-red-400">{t("form.errorBody")}</p>
                )}

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="font-body text-[11px] text-[rgba(245,240,232,0.3)] italic">
                    {tCommon("disclaimer.text")}
                  </p>
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] bg-[#C5A55A] hover:bg-[#D4AF37] text-[#0A1628] font-semibold px-6 py-3 rounded-[2px] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "sending" ? t("form.sending") : t("form.submit")}
                  </button>
                </div>
              </form>
            </FadeUp>
          )}
        </div>
      </section>

      {/* What to bring reminder */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-8">
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              {t("whatToBring.heading")}
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {whatToBringItems.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="flex gap-4 py-5 border-b border-[rgba(197,165,90,0.1)] last:border-b-0"
              >
                <span className="text-[#C5A55A] shrink-0 mt-0.5">›</span>
                <p className="font-body text-[14px] text-[rgba(245,240,232,0.75)]">{item}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Not sure what you need? */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("ctaScope.text")}</Eyebrow>
              <p className="font-body text-[16px] text-[rgba(245,240,232,0.65)] max-w-md">
                {t("ctaScope.link")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/scope" variant="secondary" size="md">
                {tCommon("labels.seeScope")}
              </Button>
              <Button href="/booking" variant="primary" size="md">
                {t("ctaBook")}
              </Button>
            </div>
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
