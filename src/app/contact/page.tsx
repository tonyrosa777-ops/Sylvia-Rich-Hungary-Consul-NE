"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { brand, scope } = siteData;

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        headline="Contact & Location"
        description="Monday appointments in Derry, NH. Bring your documents and valid ID. Payment by cash or check only."
      />

      {/* Info cards */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {/* Location */}
            <FadeUp>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">Location</p>
                <p className="font-body font-medium text-[15px] text-[#F5F0E8] mb-1">{brand.address.street}</p>
                <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)]">
                  {brand.address.city}, {brand.address.state} {brand.address.zip}
                </p>
                <p className="font-body text-[12px] text-[rgba(245,240,232,0.35)] mt-2">{brand.address.landmark}</p>
                <GoldRule width="sm" opacity={20} className="mt-5 mb-5" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(brand.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#C5A55A] hover:text-[#D4AF37] transition-colors duration-150 underline underline-offset-4"
                >
                  Open in Maps →
                </a>
              </div>
            </FadeUp>

            {/* Hours */}
            <FadeUp delay={0.1}>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">Appointment Hours</p>
                <p className="font-display font-bold text-[17px] text-[#F5F0E8] mb-2">{brand.hours.display}</p>
                <p className="font-body text-[14px] text-[rgba(245,240,232,0.65)] mb-4">{brand.hours.detail}</p>
                <p className="font-body text-[12px] leading-relaxed text-[rgba(245,240,232,0.4)]">
                  {brand.hours.note} Appointments are scheduled online. Select any available Monday slot.
                </p>
              </div>
            </FadeUp>

            {/* Payment */}
            <FadeUp delay={0.2}>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">Payment</p>
                <p className="font-body text-[15px] text-[#F5F0E8] mb-2">{brand.payment}</p>
                <p className="font-body text-[12px] leading-relaxed text-[rgba(245,240,232,0.4)]">
                  Make checks payable to Sylvia Rich. Exact change appreciated for cash payments.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Map embed */}
          <FadeUp delay={0.15}>
            <div className="rounded-[3px] overflow-hidden border border-[rgba(197,165,90,0.18)]">
              <iframe
                title="Honorary Consulate of Hungary — New England office location"
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

      {/* What to bring reminder */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-8">
            <Eyebrow className="mb-3">Before You Come</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              What to Bring to Your Appointment
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {[
              {
                label: "Valid Government-Issued ID",
                body: "Passport, driver's license, or state ID. Required for all consular services.",
              },
              {
                label: "Your Documents — Completed but Unsigned",
                body: "If you're having a signature authenticated, do not sign the document in advance. You must sign in Sylvia's presence.",
              },
              {
                label: "Copies (for copy authentication)",
                body: "For copy authentication, bring both the original document and a clean, legible copy.",
              },
              {
                label: "Cash or Check",
                body: `Exact payment preferred. Make checks payable to Sylvia Rich. No credit cards accepted.`,
              },
            ].map(({ label, body }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="flex gap-4 py-5 border-b border-[rgba(197,165,90,0.1)] last:border-b-0"
              >
                <span className="text-[#C5A55A] shrink-0 mt-0.5">›</span>
                <div>
                  <p className="font-body font-medium text-[14px] text-[#F5F0E8] mb-1">{label}</p>
                  <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.5)]">{body}</p>
                </div>
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
              <Eyebrow className="mb-2">Not sure what you need?</Eyebrow>
              <p className="font-body text-[16px] text-[rgba(245,240,232,0.65)] max-w-md">
                See which services we handle here in Derry — and which require the NY Consulate General.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/scope" variant="secondary" size="md">
                What We Handle
              </Button>
              <Button href="/booking" variant="primary" size="md">
                Book Appointment
              </Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10">
            <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic">
              {scope.disclaimer}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
