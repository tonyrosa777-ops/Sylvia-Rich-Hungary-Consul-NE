"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const NATURALIZATION_STEPS = [
  {
    step: "01",
    title: "Confirm Your Eligibility",
    body: "Simplified naturalization — honosítás — is available to anyone who can prove Hungarian ancestry (parent, grandparent, or great-grandparent) and demonstrates some connection to Hungarian language or culture. You do not need to have lived in Hungary.",
    consul: false,
  },
  {
    step: "02",
    title: "Gather Your Documents",
    body: "You will need certified copies of birth certificates, marriage certificates, and any documents tracing your Hungarian lineage. These may need to be authenticated if they were issued outside Hungary.",
    consul: true,
    consulNote: "Sylvia can authenticate these documents locally. Bring the originals and copies to a Monday appointment.",
  },
  {
    step: "03",
    title: "Authenticate Supporting Documents",
    body: "American-issued documents destined for the Hungarian citizenship application require consular authentication or apostille. Which process applies depends on the document type.",
    consul: true,
    consulNote: "See the Authentication vs. Apostille guide for which process applies to each document.",
  },
  {
    step: "04",
    title: "Submit to the Embassy",
    body: "Citizenship applications are submitted to the Embassy of Hungary in Washington DC — not to the honorary consul. Sylvia can help you understand the process and authenticate documents, but cannot accept or forward applications.",
    consul: false,
  },
  {
    step: "05",
    title: "Wait for Decision",
    body: "Citizenship verification typically takes 8–10 months. There is no expediting process. The Embassy will contact you with the outcome.",
    consul: false,
  },
];

const WHAT_CONSUL_CAN_DO = [
  "Authenticate supporting documents for citizenship applications",
  "Certify copies of birth, marriage, and death certificates",
  "Authenticate powers of attorney related to citizenship matters",
  "Provide guidance on the document preparation process",
  "Refer you to Hungarian language resources and legal contacts",
];

const WHAT_CONSUL_CANNOT = [
  "Accept citizenship applications (submitted to the Embassy in Washington DC)",
  "Expedite or check the status of applications",
  "Provide legal advice on eligibility",
  "Issue Hungarian identity documents",
];

export default function CitizenshipPage() {
  const { scope } = siteData;
  const { t } = useTranslation("citizenship");
  return (
    <>
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
                <Eyebrow className="mb-3">Simplified Naturalization</Eyebrow>
                <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#F5F0E8] mb-5">
                  Honosítás — Citizenship by Descent
                </h2>
                <div className="space-y-4 font-body text-[16px] leading-[1.8] text-[rgba(245,240,232,0.7)]">
                  <p>
                    Since 2011, Hungary has offered simplified naturalization — <em>egyszerűsített honosítás</em> — to anyone who can demonstrate Hungarian ancestry and has some connection to the Hungarian language. Hundreds of thousands of Hungarian-Americans have used this pathway to reclaim citizenship, secure an EU passport, and maintain a formal connection to their heritage.
                  </p>
                  <p>
                    The process is managed by the Embassy of Hungary in Washington DC. The honorary consul&apos;s role is document preparation: Sylvia can authenticate the supporting documents you need before submission — locally, at a Monday appointment in Derry, NH.
                  </p>
                </div>
              </div>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">Processing Time</p>
                <p className="font-display font-bold text-3xl text-[#F5F0E8] mb-1">8–10</p>
                <p className="font-body text-[13px] text-[rgba(245,240,232,0.5)]">months typical</p>
                <GoldRule width="sm" opacity={20} className="my-4" />
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-2">No expediting</p>
                <p className="font-body text-[12px] text-[rgba(245,240,232,0.4)]">There is no way to accelerate the process. Submit well before any deadline.</p>
              </div>
            </div>
          </FadeUp>

          {/* Step-by-step */}
          <div className="space-y-0">
            {NATURALIZATION_STEPS.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.07}>
                <div className={`grid grid-cols-[auto_1fr] gap-6 py-8 border-b border-[rgba(197,165,90,0.1)] last:border-b-0`}>
                  <span className="font-mono font-bold text-[2rem] leading-none text-[rgba(197,165,90,0.2)] pt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-[17px] text-[#F5F0E8]">{step.title}</h3>
                      {step.consul && (
                        <span className="font-mono text-[8px] uppercase tracking-[0.1em] bg-[rgba(197,165,90,0.15)] text-[#C5A55A] border border-[rgba(197,165,90,0.3)] px-2 py-0.5 rounded-[2px]">
                          Consul assists
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
            <Eyebrow className="mb-3">Role Clarity</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              What the Honorary Consul Can and Cannot Do
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp>
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">Can Help With</p>
                <ul className="space-y-2.5">
                  {WHAT_CONSUL_CAN_DO.map((item) => (
                    <li key={item} className="flex gap-2.5 font-body text-[13px] text-[rgba(245,240,232,0.7)]">
                      <span className="text-[#C5A55A] shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-[#071020] border border-[rgba(245,240,232,0.07)] rounded-[3px] p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.3)] mb-4">Cannot Do</p>
                <ul className="space-y-2.5">
                  {WHAT_CONSUL_CANNOT.map((item) => (
                    <li key={item} className="flex gap-2.5 font-body text-[13px] text-[rgba(245,240,232,0.4)]">
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
              <Eyebrow className="mb-2">Ready to authenticate your documents?</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                Monday appointments in Derry, NH. Bring your original documents and copies. Sylvia will verify what needs authentication and perform it in the same visit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/guide" variant="secondary" size="md">Authentication Guide</Button>
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
