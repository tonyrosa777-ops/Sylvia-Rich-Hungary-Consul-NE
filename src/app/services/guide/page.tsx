"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const DECISION_TREE = [
  {
    question: "Is your document American or Hungarian?",
    branches: [
      {
        label: "American document — to be used in the U.S.",
        answer: "You need a Notary Public.",
        detail: "Wills, deeds, affidavits, contracts, and other American-law documents signed in the presence of a notary. Sylvia can notarize these for $10 per notarial act — the NH state maximum.",
        action: { label: "Book Notary Appointment", href: "/booking" },
        highlight: true,
      },
      {
        label: "American document — to be used in Hungary",
        answer: "You may need an Apostille, then authentication.",
        detail: "An apostille is issued by the NH Secretary of State (not the consul) and confirms the document is legitimate for use in a country that is a member of the Hague Convention. Hungary is a member, so most American documents destined for Hungary require an apostille first. After apostille, Sylvia can authenticate your signature if required.",
        action: { label: "NH Secretary of State →", href: "https://sos.nh.gov/elections-voter-registration/notary-public-apostille-and-authentication/apostille-and-authentication/", isExternal: true },
        highlight: false,
      },
      {
        label: "Hungarian document — to be used in Hungary",
        answer: "You need Consular Authentication.",
        detail: "Documents produced outside Hungary that need to be recognized by Hungarian authorities — powers of attorney, signature confirmations, certified copies — require consular authentication by the Honorary Consul. Sylvia performs this for $36 per document.",
        action: { label: "Book Authentication", href: "/booking" },
        highlight: true,
      },
      {
        label: "Hungarian document — to be used in the U.S.",
        answer: "You likely need translation + possible notarization.",
        detail: "Hungarian documents used in American courts or official processes typically require certified translation into English. Contact a certified translator. If signature verification is needed on the translated document, Sylvia can notarize the translator's certification.",
        action: { label: "Contact for Guidance", href: "/contact" },
        highlight: false,
      },
    ],
  },
];

const GLOSSARY = [
  {
    term: "Notarization",
    definition: "The process by which a licensed notary public witnesses the signing of a document, verifies the signer's identity, and affixes a seal confirming authenticity. Valid for American documents under American law. Does not give a document legal standing in Hungary without additional steps.",
  },
  {
    term: "Consular Authentication",
    definition: "The official verification of a signature or copy by an honorary consul, carried under the authority of the Vienna Convention on Consular Relations. This is the service that makes a document legally recognized by Hungarian government authorities. Performed by Sylvia for $36/document.",
  },
  {
    term: "Apostille",
    definition: "A simplified form of authentication under the 1961 Hague Convention. Issued by the government authority of the originating country (in NH: the Secretary of State). An apostille is required for American documents used in Hungary. It is NOT issued by the consul — it is issued by the state.",
  },
  {
    term: "Copy Authentication",
    definition: "A consular officer certifies that a copy is a true and accurate reproduction of the original. Required when originals cannot be submitted to Hungarian authorities. Performed by Sylvia for $24/page.",
  },
  {
    term: "Legalization",
    definition: "A chain-of-authentication process for documents used in countries not party to the Hague Convention. Involves multiple layers of verification: notarization → Secretary of State certification → federal authentication → embassy or consulate stamp. Less common for Hungary, which is a Hague member.",
  },
];

export default function GuidePage() {
  const { scope } = siteData;
  return (
    <>
      <PageHeader
        eyebrow="Authentication vs. Apostille"
        headline="Which Service Do You Need?"
        description="Authentication, apostille, notarization, legalization — four different things. This guide tells you which one applies to your specific situation before you book or drive anywhere."
      />

      {/* Decision tree */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {DECISION_TREE.map((block) => (
            <div key={block.question}>
              <FadeUp>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C5A55A] mb-2">Start here</p>
                <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#F5F0E8] mb-10">
                  {block.question}
                </h2>
              </FadeUp>
              <StaggerContainer staggerDelay={0.1}>
                {block.branches.map((branch) => (
                  <motion.div
                    key={branch.label}
                    variants={staggerItem}
                    className={`mb-5 rounded-[3px] border p-7 ${
                      branch.highlight
                        ? "border-[rgba(197,165,90,0.35)] bg-[#1B2A4A]"
                        : "border-[rgba(245,240,232,0.07)] bg-[#071020]"
                    }`}
                  >
                    <p className={`font-mono text-[10px] uppercase tracking-[0.12em] mb-2 ${
                      branch.highlight ? "text-[#C5A55A]" : "text-[rgba(245,240,232,0.35)]"
                    }`}>
                      {branch.label}
                    </p>
                    <p className="font-display font-bold text-[17px] text-[#F5F0E8] mb-3">
                      {branch.answer}
                    </p>
                    <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)] mb-5">
                      {branch.detail}
                    </p>
                    {branch.action && (
                      <Button
                        href={branch.action.href}
                        external={branch.action.isExternal}
                        variant={branch.highlight ? "primary" : "secondary"}
                        size="sm"
                      >
                        {branch.action.label}
                      </Button>
                    )}
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-[#071020] py-20 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-10">
            <Eyebrow className="mb-3">Glossary</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              The Five Terms You Need to Know
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.08}>
            {GLOSSARY.map(({ term, definition }) => (
              <motion.div
                key={term}
                variants={staggerItem}
                className="border-b border-[rgba(197,165,90,0.1)] py-6"
              >
                <p className="font-display font-bold text-[16px] text-[#C5A55A] mb-2">{term}</p>
                <p className="font-body text-[14px] leading-relaxed text-[rgba(245,240,232,0.6)]">{definition}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Still confused? CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">Still not sure?</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                Book a Monday appointment and bring your documents. Sylvia will tell you exactly what you need and perform the service in the same visit if possible.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/scope" variant="secondary" size="md">What We Handle</Button>
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
