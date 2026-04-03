"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const CERTIFICATE_TYPES = [
  {
    name: "Life Certificate",
    hu: "Életbizonyítvány",
    badge: "Free Service",
    badgeColor: true,
    summary: "An annual certificate confirming that a Hungarian pension recipient is living. Required by the Hungarian pension authority (NYUFIG) to continue pension payments. This is one of the most frequently requested consular services.",
    detail: "If you receive a Hungarian pension and live in New England, you must submit a life certificate to Hungarian authorities every year. Failure to submit results in suspension of pension payments. Sylvia signs these certificates at no charge — the only free consular service.",
    whatBring: [
      "Valid government-issued photo ID (passport or driver's license)",
      "Hungarian pension documentation showing your recipient number",
      "The life certificate form (download from NYUFIG website, or Sylvia may have forms available)",
    ],
    cost: "No charge",
    frequency: "Annual",
    requiresNY: false,
  },
  {
    name: "Certificate of Good Conduct",
    hu: "Erkölcsi bizonyítvány",
    badge: null,
    badgeColor: false,
    summary: "A certificate confirming that a person has no criminal record in Hungary. Required for employment, immigration applications, visa purposes, and certain citizenship and property transactions.",
    detail: "A Hungarian certificate of good conduct is issued by the Hungarian National Police (ORFK). The honorary consul cannot issue this certificate, but can authenticate supporting documents required for the application. The application itself is submitted through Hungarian government channels.",
    whatBring: [
      "Valid Hungarian identity document or passport",
      "Completed ORFK application form",
      "Payment for any applicable fees",
    ],
    cost: "Authentication fee if documents require consul authentication",
    frequency: "As needed",
    requiresNY: false,
    note: "The certificate itself is issued by ORFK (Hungarian Police), not by the consul. Sylvia can authenticate supporting documents and advise on the process.",
  },
  {
    name: "Certificate of Civil Status",
    hu: "Anyakönyvi kivonat",
    badge: null,
    badgeColor: false,
    summary: "Certified extracts from Hungarian civil registry records — birth, marriage, or death certificates issued by Hungarian civil authorities. Required for citizenship applications, marriage, divorce proceedings, and inheritance.",
    detail: "Civil status certificates are issued by Hungarian vital records offices (anyakönyvi hivatal), not by the consul. However, the honorary consul can authenticate American vital records documents for submission to Hungarian authorities, and can certify copies of Hungarian documents.",
    whatBring: [
      "The original Hungarian document (if authenticating a copy)",
      "Your government-issued photo ID",
      "Any supporting documents relevant to your specific need",
    ],
    cost: "$24 per certified copy / $36 per signature authentication",
    frequency: "As needed",
    requiresNY: false,
  },
  {
    name: "Proof of Citizenship",
    hu: "Állampolgársági igazolás",
    badge: null,
    badgeColor: false,
    summary: "A document confirming Hungarian citizenship status, used in conjunction with simplified naturalization applications, EU benefit claims, and certain employment or immigration contexts.",
    detail: "Proof of citizenship is issued by the Embassy of Hungary in Washington DC, not by the honorary consul. Sylvia can authenticate supporting documents for the application and provide guidance on the process.",
    whatBring: [],
    cost: "Authentication of supporting documents as needed",
    frequency: "As needed",
    requiresNY: true,
    note: "Issued by the Embassy in Washington DC. Contact: washington.mfa.gov.hu",
  },
];

export default function CertificatesPage() {
  const { scope } = siteData;
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        headline="Life Certificates & Certificates of Good Conduct"
        description="Annual life certificates for Hungarian pension recipients — signed free of charge. Plus: certificates of good conduct, civil status, and proof of citizenship — a guide to each."
      />

      {/* Highlight: life certificate free service */}
      <section className="bg-[#071020] py-12 border-b border-[rgba(197,165,90,0.15)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="bg-[rgba(197,165,90,0.07)] border border-[rgba(197,165,90,0.3)] rounded-[3px] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="bg-[rgba(197,165,90,0.15)] border border-[#C5A55A] rounded-full px-3 py-1 shrink-0">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#C5A55A]">Free Service</span>
              </div>
              <div>
                <p className="font-display font-bold text-[16px] text-[#F5F0E8]">
                  Life Certificates for Pension Recipients — No Charge
                </p>
                <p className="font-body text-[13px] text-[rgba(245,240,232,0.6)] mt-1">
                  If you receive a Hungarian pension, your annual life certificate is signed by Sylvia at no fee. Monday appointment required. Bring your pension documentation and photo ID.
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
            {CERTIFICATE_TYPES.map((cert) => (
              <motion.div
                key={cert.name}
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
                      Embassy Issued
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
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)] mb-2">What to Bring</p>
                    <ul className="space-y-1.5 mb-4">
                      {cert.whatBring.map((item) => (
                        <li key={item} className="flex gap-2 font-body text-[13px] text-[rgba(245,240,232,0.5)]">
                          <span className="text-[#C5A55A] shrink-0">›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.4)]">Fee: </span>
                    <span className="font-body text-[13px] text-[rgba(245,240,232,0.55)]">{cert.cost}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.4)]">Frequency: </span>
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
              <Eyebrow className="mb-2">Ready for your appointment?</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                Pension life certificates are free. All other certificate-related services are completed in a single Monday visit.
              </p>
            </div>
            <Button href="/booking" variant="primary" size="md" className="shrink-0">
              Book Your Appointment
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
