"use client";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

type StateData = (typeof siteData.states)[number];

export function StatePage({ stateData }: { stateData: StateData }) {
  const { services, scope, testimonials } = siteData;

  // Pick one testimonial to feature
  const featuredTestimonial = testimonials[0];

  return (
    <>
      <PageHeader
        eyebrow={stateData.eyebrow}
        headline={stateData.headline}
        description={stateData.subheadline}
      />

      {/* Community intro */}
      <section className="bg-[#0A1628] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <FadeUp className="lg:col-span-3">
              <Eyebrow className="mb-3">The Hungarian Community of {stateData.name}</Eyebrow>
              <p className="font-body text-[17px] leading-[1.85] text-[rgba(245,240,232,0.72)] mb-6">
                {stateData.intro}
              </p>
              <p className="font-body text-[15px] leading-relaxed text-[rgba(245,240,232,0.55)]">
                {stateData.regionalNote}
              </p>
            </FadeUp>

            {/* Distance card */}
            <FadeUp delay={0.1} className="lg:col-span-2">
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-4">
                  Distance to Derry, NH
                </p>
                <div className="space-y-3">
                  {stateData.cities.map((city) => (
                    <div key={city.name} className="flex items-baseline justify-between border-b border-[rgba(197,165,90,0.08)] pb-2 last:border-b-0">
                      <span className="font-body text-[14px] text-[rgba(245,240,232,0.7)]">{city.name}</span>
                      <div className="text-right">
                        <span className="font-mono text-[12px] text-[#C5A55A]">{city.distance}</span>
                        <span className="font-mono text-[11px] text-[rgba(245,240,232,0.3)] ml-2">{city.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <GoldRule width="full" opacity={12} className="mt-5 mb-4" />
                <div className="flex items-start gap-3">
                  <div className="bg-[rgba(197,165,90,0.1)] border border-[rgba(197,165,90,0.25)] rounded-[2px] px-2 py-1 shrink-0">
                    <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.7)]">vs. NYC</p>
                  </div>
                  <p className="font-body text-[12px] text-[rgba(245,240,232,0.4)]">
                    New York is {stateData.nycDistance} ({stateData.nycTime}) — plus parking, tolls, and a full day of travel.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="bg-[#071020] py-16 border-y border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-8">
            <Eyebrow className="mb-3">Available to {stateData.name} Residents</Eyebrow>
            <h2 className="font-display font-bold text-2xl text-[#F5F0E8]">
              All Consular Services — One Office
            </h2>
          </FadeUp>
          <StaggerContainer staggerDelay={0.06}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc) => (
                <motion.div
                  key={svc.slug}
                  variants={staggerItem}
                  className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.15)] rounded-[3px] p-5 hover:border-[rgba(197,165,90,0.3)] transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-display font-bold text-[14px] text-[#F5F0E8]">{svc.name}</p>
                      {svc.nameHu && (
                        <p className="font-body italic text-[11px] text-[rgba(245,240,232,0.35)]">{svc.nameHu}</p>
                      )}
                    </div>
                    <span className="font-mono text-[14px] text-[#C5A55A] shrink-0">{svc.priceDisplay}</span>
                  </div>
                  <p className="font-body text-[12px] text-[rgba(245,240,232,0.45)]">{svc.tagline}</p>
                  {svc.badge && (
                    <span className="inline-block mt-2 font-mono text-[8px] uppercase tracking-[0.1em] bg-[#C5A55A] text-[#0A1628] px-2 py-0.5 rounded-[2px]">
                      {svc.badge}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <figure className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-8 relative overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-4 left-6 font-display text-[5rem] leading-none text-[rgba(197,165,90,0.07)] select-none"
              >
                &#8220;
              </span>
              <blockquote
                lang={featuredTestimonial.lang}
                className="relative font-body text-[17px] leading-[1.85] text-[rgba(245,240,232,0.8)] mb-4 italic"
              >
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>
              <GoldRule width="sm" opacity={25} className="mb-3" />
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)]">
                {featuredTestimonial.attribution}
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      {/* Scope reminder */}
      <section className="bg-[#071020] py-16 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <Eyebrow className="mb-2">Serving {stateData.name}</Eyebrow>
              <p className="font-body text-[16px] text-[rgba(245,240,232,0.65)] max-w-lg">
                Monday appointments in Derry, NH. Serving all {stateData.name} residents — no referral needed, no membership required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/services/scope" variant="secondary" size="md">What We Handle</Button>
              <Button href="/booking" variant="primary" size="md">Book Appointment</Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-body text-[12px] text-[rgba(245,240,232,0.25)] italic">{scope.disclaimer}</p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
