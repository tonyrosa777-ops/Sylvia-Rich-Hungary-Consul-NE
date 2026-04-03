"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const LEGALIZATION_PATHS = [
  {
    title: "Consular Authentication",
    subtitle: "For documents used in Hungary",
    recommended: true,
    description: "The Honorary Consul verifies and authenticates signatures or copies under the authority of the Vienna Convention on Consular Relations. The result is a document recognized by all Hungarian government authorities.",
    steps: [
      "Prepare your document — do not sign in advance",
      "Book a Monday appointment in Derry, NH",
      "Sign in Sylvia's presence",
      "Consul affixes authentication seal",
      "Document is ready for Hungarian submission",
    ],
    cost: "$36 per signature / $24 per copy page",
    timeframe: "Same appointment",
    usedFor: "Powers of attorney, property transactions, business documents, inheritance submissions",
  },
  {
    title: "Apostille + Authentication",
    subtitle: "For American documents going to Hungary",
    recommended: false,
    description: "American-origin documents destined for Hungary generally need an apostille first (from the NH Secretary of State), then may need additional consular authentication depending on the document type.",
    steps: [
      "Get the document notarized (if required)",
      "Submit to NH Secretary of State for apostille",
      "Return to honorary consul if additional authentication needed",
    ],
    cost: "$10 NH notary + $10 NH apostille fee",
    timeframe: "Days to weeks",
    usedFor: "American birth/marriage/death certificates, academic diplomas, court documents",
  },
  {
    title: "Full Legalization Chain",
    subtitle: "For countries not in the Hague Convention",
    recommended: false,
    description: "For documents used in countries that are not Hague Convention members (not applicable for Hungary, which is a member). Requires: notarization → state authentication → federal authentication → embassy or consulate stamp. Mention this to Sylvia if you are unsure which chain applies.",
    steps: [
      "US notarization",
      "State Secretary of State authentication",
      "US Department of State federal authentication",
      "Embassy or Consulate stamp",
    ],
    cost: "Varies — multiple fees and agency steps",
    timeframe: "Weeks to months",
    usedFor: "Documents for non-Hague countries — NOT typically required for Hungary",
  },
];

const FAQ = [
  {
    q: "What is the difference between authentication and legalization?",
    a: "In practice, they are often used interchangeably, but technically: authentication is a single-step verification by a consul or government authority. Legalization is a chain of multiple authentications through different government levels. For Hungary, which is a Hague Convention member, consular authentication is usually sufficient — the full legalization chain is rarely needed.",
  },
  {
    q: "Hungary is a Hague Convention member — do I still need an apostille?",
    a: "For American documents going to Hungary, yes — an apostille is the appropriate form of international authentication under the Hague Convention. The apostille is issued by the NH Secretary of State, not by the consul. Consular authentication is used for a different purpose: authenticating signatures on documents signed by someone in Sylvia's presence.",
  },
  {
    q: "My document was issued in Hungary. Does it need to be authenticated to use in the US?",
    a: "Hungarian documents used in American proceedings (courts, employers, universities) typically need certified English translation. Authentication of the original Hungarian document is sometimes also requested — Sylvia can provide this for $36 per document.",
  },
  {
    q: "Can Sylvia legalize or authenticate any document?",
    a: "Sylvia can authenticate signatures and certify copies within the scope of the honorary consul's authority under the Vienna Convention. Passports and biometric documents require the NY Consulate General. Legal advice falls outside the consul's scope.",
  },
];

export default function LegalizationPage() {
  const { scope } = siteData;
  const { t } = useTranslation("legalization");
  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Paths */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">Three Paths to Legitimacy</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#F5F0E8]">
              Which Process Applies to You
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.1}>
            {LEGALIZATION_PATHS.map((path) => (
              <motion.div
                key={path.title}
                variants={staggerItem}
                className={`mb-6 rounded-[3px] border p-7 ${
                  path.recommended
                    ? "border-[rgba(197,165,90,0.35)] bg-[#1B2A4A]"
                    : "border-[rgba(197,165,90,0.12)] bg-[#071020]"
                }`}
              >
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <div>
                    {path.recommended && (
                      <span className="inline-block font-mono text-[8px] uppercase tracking-[0.12em] bg-[#C5A55A] text-[#0A1628] px-2 py-0.5 rounded-[2px] mb-2">
                        Most Common for Our Clients
                      </span>
                    )}
                    <h3 className="font-display font-bold text-xl text-[#F5F0E8]">{path.title}</h3>
                    <p className="font-body text-[13px] italic text-[rgba(245,240,232,0.4)]">{path.subtitle}</p>
                  </div>
                </div>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-5">{path.description}</p>
                <GoldRule width="full" opacity={12} className="mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-1">Cost</p>
                    <p className="font-body text-[13px] text-[rgba(245,240,232,0.65)]">{path.cost}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-1">Timeframe</p>
                    <p className="font-body text-[13px] text-[rgba(245,240,232,0.65)]">{path.timeframe}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-1">Used For</p>
                    <p className="font-body text-[13px] text-[rgba(245,240,232,0.65)]">{path.usedFor}</p>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-2">Steps</p>
                  <ol className="space-y-1">
                    {path.steps.map((step, i) => (
                      <li key={step} className="flex gap-2.5 font-body text-[13px] text-[rgba(245,240,232,0.5)]">
                        <span className="font-mono text-[10px] text-[rgba(197,165,90,0.4)] shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#071020] py-20 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">Common Questions</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">Legalization FAQ</h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {FAQ.map(({ q, a }) => (
              <motion.div key={q} variants={staggerItem} className="border-b border-[rgba(197,165,90,0.1)] py-6">
                <p className="font-display font-bold text-[15px] text-[#F5F0E8] mb-2">{q}</p>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.55)]">{a}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">Not sure which path applies?</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                Bring your documents to a Monday appointment and Sylvia will identify exactly what is needed — and perform it in the same visit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/guide" variant="secondary" size="md">Full Authentication Guide</Button>
              <Button href="/booking" variant="primary" size="md">Book Appointment</Button>
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
