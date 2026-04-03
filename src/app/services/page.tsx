"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesPage() {
  const { services, brand } = siteData;
  const { t: tSvc } = useTranslation("services");
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <PageHeader
        eyebrow={tSvc("header.eyebrow")}
        headline={tSvc("header.headline")}
        description={tSvc("header.description")}
      />

      {/* Services detail */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
          <StaggerContainer staggerDelay={0.1}>
            {services.map((service) => {
              const svcT = tSvc(`services.${service.slug}.name`) !== `services.${service.slug}.name`
                ? tSvc(`services.${service.slug}.name`)
                : service.name;
              const svcDesc = tSvc(`services.${service.slug}.description`) !== `services.${service.slug}.description`
                ? tSvc(`services.${service.slug}.description`)
                : service.description;
              const badge = service.badge as string | null;

              return (
                <motion.div
                  key={service.slug}
                  variants={staggerItem}
                  id={service.slug}
                  className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-8 lg:p-10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">{svcT}</h2>
                        {service.nameHu && (
                          <span className="font-body italic text-sm text-[rgba(245,240,232,0.35)]">({service.nameHu})</span>
                        )}
                        {badge && (
                          <span className="font-mono text-[9px] uppercase tracking-[0.12em] bg-[#C5A55A] text-[#0A1628] px-2.5 py-1 rounded-[2px]">
                            {badge === "Free Service"
                              ? tCommon("labels.freeService")
                              : badge === "Most Requested"
                              ? tCommon("labels.mostRequested")
                              : badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-[15px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-5 max-w-xl">
                        {svcDesc}
                      </p>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-3">{tCommon("labels.whatToBring")}</p>
                        <ul className="space-y-2">
                          {service.whatToBring.map((item) => (
                            <li key={item} className="flex gap-3 font-body text-[14px] text-[rgba(245,240,232,0.6)]">
                              <span className="text-[#C5A55A] shrink-0">›</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:text-right shrink-0">
                      <p className="font-mono font-medium text-[2.5rem] leading-none text-[#C5A55A]">{service.priceDisplay}</p>
                      {service.priceUnit && (
                        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.3)] mt-1">{service.priceUnit}</p>
                      )}
                      <div className="mt-5">
                        <Button href="/booking" variant="primary" size="sm">{tCommon("labels.bookThisService")}</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Payment / hours / location strip */}
      <section className="bg-[#071020] py-12 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row gap-8 md:gap-16">
            {[
              { label: "Payment", value: brand.payment },
              { label: "Hours", value: brand.hours.detail },
              { label: "Location", value: brand.address.full },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-2">{label}</p>
                <p className="font-body text-[15px] text-[rgba(245,240,232,0.65)]">{value}</p>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* Scope CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{tSvc("scopeCallout.eyebrow")}</Eyebrow>
              <p className="font-body text-[16px] text-[rgba(245,240,232,0.65)] max-w-md">
                {tSvc("scopeCallout.headline")}
              </p>
            </div>
            <Button href="/services/scope" variant="secondary" size="md" className="shrink-0">
              {tSvc("scopeCallout.cta")}
            </Button>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10">
            <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic">{tCommon("disclaimer.text")}</p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
