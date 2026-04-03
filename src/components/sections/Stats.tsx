"use client";
import { FadeUp, CountUp, StaggerContainer, staggerItem } from "@/components/animations";
import { GoldRule } from "@/components/ui";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export function Stats() {
  const { t } = useTranslation("home");

  const stats = [
    { value: 5,  suffix: "",  label: t("stats.statesServed"),      sub: "ME · VT · NH · RI · MA" },
    { value: 4,  suffix: "",  label: t("stats.servicesAvailable"),  sub: "Authentication · Notarization · Certification · Life Certificates" },
    { value: 0,  suffix: "",  label: t("stats.zeroDrive"),          sub: `vs. $80–$300+ ${t("stats.zeroLabel")}` },
  ];

  return (
    <section className="bg-[#071020] py-20 lg:py-28 border-y border-[rgba(197,165,90,0.12)]" aria-label="By the numbers">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <FadeUp className="text-center mb-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[rgba(197,165,90,0.6)] mb-3">
            By the Numbers
          </p>
          <GoldRule width="sm" opacity={30} className="mx-auto" />
        </FadeUp>

        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="font-mono font-medium text-[clamp(2.5rem,6vw,4rem)] leading-none text-[#C5A55A] mb-2">
                {i === 2 ? (
                  /* Special case: "Zero" — no drive required */
                  <span className="font-display font-bold italic text-[clamp(1.8rem,4vw,2.8rem)]">
                    Zero
                  </span>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                )}
              </div>
              <p className="font-display font-semibold text-[1.05rem] text-[#F5F0E8] mb-2">
                {stat.label}
              </p>
              <p className="font-body text-[12px] text-[rgba(245,240,232,0.35)] leading-relaxed">
                {stat.sub}
              </p>
              {i < stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[rgba(197,165,90,0.15)]" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
