"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const VITAL_RECORDS = [
  {
    type: "Birth Registration",
    hu: "Születés anyakönyvezése",
    icon: "↗",
    summary: "If a child is born in the US to a Hungarian parent, the birth must be registered with the Hungarian civil registry within a specific timeframe. This establishes the child's Hungarian citizenship and their right to a Hungarian passport.",
    consulRole: "The honorary consul can authenticate the consent letter if one parent cannot attend the registration appointment in person. Bring the completed consent document to a Monday appointment — do not sign it in advance.",
    whatBring: [
      "Both parents' Hungarian passports or ID cards",
      "US birth certificate (original)",
      "Marriage certificate of parents (if applicable)",
      "Completed consent letter for absent parent (unsigned — must be signed in Sylvia's presence)",
    ],
    requiresNY: false,
    nyNote: "",
  },
  {
    type: "Marriage Registration",
    hu: "Házasságkötés anyakönyvezése",
    icon: "↗",
    summary: "Hungarian citizens married in the US must register the marriage with the Hungarian civil registry to have the marriage legally recognized in Hungary. This is often required for property transactions, inheritance, and name changes in official Hungarian records.",
    consulRole: "Authentication of the marriage certificate and supporting documents for submission. A certified translation of the American marriage certificate into Hungarian is typically required before submission.",
    whatBring: [
      "US marriage certificate (original)",
      "Both spouses' Hungarian passports or ID cards",
      "Certified Hungarian translation of the marriage certificate",
      "Any previous divorce decrees (if applicable)",
    ],
    requiresNY: false,
    nyNote: "",
  },
  {
    type: "Divorce Registration",
    hu: "Válás anyakönyvezése",
    icon: "↗",
    summary: "A divorce granted by an American court may need to be recognized by Hungarian authorities — particularly for remarriage, name changes, or property matters in Hungary. Recognition requires certified translation and consular authentication of the divorce decree.",
    consulRole: "Authentication of the American divorce decree and supporting documents. The decree must typically be translated into Hungarian by a certified translator before authentication.",
    whatBring: [
      "Final divorce decree from the American court (certified copy)",
      "Certified Hungarian translation of the divorce decree",
      "Your Hungarian passport or ID",
      "Marriage certificate (original or certified copy)",
    ],
    requiresNY: false,
    nyNote: "",
  },
  {
    type: "Death Registration",
    hu: "Haláleset anyakönyvezése",
    icon: "↗",
    summary: "The death of a Hungarian citizen in the US must be reported to the Hungarian civil registry. This is required for inheritance proceedings, pension cancellation, and official record updates. The honorary consul can authenticate the necessary documents locally.",
    consulRole: "Authentication of the American death certificate for submission to Hungarian authorities. Certified translation is typically required.",
    whatBring: [
      "US death certificate (original or certified copy)",
      "Certified Hungarian translation of the death certificate",
      "Deceased's Hungarian passport or identity document (if available)",
      "Your relationship documentation (if registering on behalf of family)",
    ],
    requiresNY: false,
    nyNote: "",
  },
  {
    type: "Passport Renewal",
    hu: "Útlevél megújítása",
    icon: "—",
    summary: "Hungarian passport applications and renewals require biometric data collection, which cannot be done at an honorary consulate. All passport services are handled by the Consulate General of Hungary in New York.",
    consulRole: "The honorary consul cannot process passport applications or renewals. Sylvia can provide guidance on the process and authenticate supporting documents if needed beforehand.",
    whatBring: [],
    requiresNY: true,
    nyNote: "Contact the Consulate General of Hungary — 223 East 52nd Street, New York, NY 10022. Allow 5–6 weeks processing time. Do not book travel until the passport arrives.",
  },
];

export default function VitalRecordsPage() {
  const { scope } = siteData;
  return (
    <>
      <PageHeader
        eyebrow="Vital Records"
        headline="Birth, Marriage, Divorce & Death Registration"
        description="Life events that cross borders require documentation in both countries. A guide to registering vital records with Hungarian civil authorities — and where the honorary consul fits in each process."
      />

      {/* Records list */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1}>
            {VITAL_RECORDS.map((record) => (
              <motion.div
                key={record.type}
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
                      {record.requiresNY ? "Requires NY Consulate" : "Handled in Derry"}
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
                      Consul&apos;s Role
                    </p>
                    <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.55)] mb-4">{record.consulRole}</p>
                    {record.whatBring.length > 0 && (
                      <>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-2">
                          What to Bring
                        </p>
                        <ul className="space-y-1.5">
                          {record.whatBring.map((item) => (
                            <li key={item} className="flex gap-2 font-body text-[13px] text-[rgba(245,240,232,0.5)]">
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
              <Eyebrow className="mb-2">Need documents authenticated?</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)] max-w-md">
                Monday appointments in Derry, NH. Bring your originals, copies, and valid ID.
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
