"use client";
import { Eyebrow, GoldRule, Button } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";

export function FeeTable() {
  const { services, feeTable } = siteData;

  return (
    <section className="bg-[#0A1628] py-24 lg:py-32" aria-labelledby="fees-heading">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="mb-12 max-w-xl">
          <Eyebrow className="mb-4">{feeTable.eyebrow}</Eyebrow>
          <h2
            id="fees-heading"
            className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight text-[#F5F0E8]"
          >
            {feeTable.headline}
          </h2>
          <GoldRule width="sm" opacity={35} className="mt-5 mb-5" />
          <p className="font-body text-[15px] text-[rgba(245,240,232,0.6)] leading-relaxed">
            {feeTable.intro}
          </p>
        </FadeUp>

        {/* Fee rows */}
        <StaggerContainer staggerDelay={0.09}>
          <div className="border border-[rgba(197,165,90,0.2)] rounded-[3px] overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                variants={staggerItem}
                className={`flex items-center justify-between px-7 py-5 ${
                  i < services.length - 1 ? "border-b border-[rgba(197,165,90,0.12)]" : ""
                } ${i % 2 === 0 ? "bg-[#1B2A4A]" : "bg-[#152036]"} hover:bg-[#1E2E54] transition-colors duration-150`}
              >
                <div>
                  <p className="font-display font-medium text-[#F5F0E8] text-base">
                    {service.name}
                  </p>
                  {service.nameHu && (
                    <p className="font-body italic text-[12px] text-[rgba(245,240,232,0.3)] mt-0.5">
                      {service.nameHu}
                    </p>
                  )}
                  {service.priceUnit && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.3)] mt-1">
                      {service.priceUnit}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="font-mono font-medium text-[1.5rem] leading-none text-[#C5A55A]">
                    {service.priceDisplay}
                  </p>
                  {service.badge && (
                    <span className="inline-block mt-1 font-mono text-[8px] uppercase tracking-[0.1em] bg-[rgba(197,165,90,0.15)] text-[#C5A55A] px-2 py-0.5 rounded-[2px]">
                      {service.badge}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        {/* Payment note */}
        <FadeUp delay={0.3} className="mt-6 flex items-center gap-3">
          <span className="text-[#C5A55A] text-lg" aria-hidden="true">$</span>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.4)]">
            {siteData.brand.payment}
          </p>
        </FadeUp>

        {/* NYC savings callout */}
        <FadeUp delay={0.4} className="mt-8">
          <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.25)] rounded-[3px] px-7 py-5">
            <p className="font-display italic text-base text-[rgba(245,240,232,0.7)] leading-relaxed">
              "{feeTable.savingsNote}"
            </p>
          </div>
        </FadeUp>

        {/* Disclaimer */}
        <FadeUp delay={0.5} className="mt-6">
          <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic leading-relaxed">
            {siteData.scope.disclaimer}
          </p>
        </FadeUp>

        <FadeUp delay={0.6} className="mt-8">
          <Button href="/booking" variant="primary" size="lg">
            Book Your Monday Appointment
          </Button>
        </FadeUp>

      </div>
    </section>
  );
}
