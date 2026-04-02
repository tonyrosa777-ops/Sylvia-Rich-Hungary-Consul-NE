import { Eyebrow, GoldRule, Card } from "@/components/ui";
import { StaggerContainer, staggerItem, FadeUp } from "@/components/animations";
import { siteData } from "@/data/site";
import { motion } from "framer-motion";

// Section must be a client component because StaggerContainer uses framer-motion
"use client";

export function Challenges() {
  const { challenges } = siteData;

  return (
    <section className="bg-[#0A1628] py-24 lg:py-32" aria-labelledby="challenges-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="mb-14 max-w-xl">
          <Eyebrow className="mb-4">{challenges.eyebrow}</Eyebrow>
          <h2
            id="challenges-heading"
            className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight text-[#F5F0E8]"
          >
            {challenges.headline}
          </h2>
          <GoldRule width="sm" opacity={35} className="mt-5" />
        </FadeUp>

        {/* 2×2 card grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
        >
          {challenges.items.map((item) => (
            <motion.div key={item.headline} variants={staggerItem}>
              <Card animate={false} hover className="h-full">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="font-display font-semibold text-lg text-[#F5F0E8] mb-3 leading-snug">
                  {item.headline}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-[rgba(245,240,232,0.65)]">
                  {item.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
