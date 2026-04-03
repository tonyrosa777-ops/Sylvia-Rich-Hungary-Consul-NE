"use client";
import { motion } from "framer-motion";
import { HeroParticles } from "@/components/sections/HeroParticles";
import { Eyebrow, GoldRule } from "@/components/ui";
import { QuizWizard } from "@/components/sections/QuizWizard";
import { useTranslation } from "@/hooks/useTranslation";

export default function QuizPage() {
  const { t } = useTranslation("quiz");

  return (
    <div className="relative min-h-screen bg-[#0A1628] flex flex-col">
      {/* Particle field */}
      <HeroParticles />

      {/* Subtle orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(197,165,90,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-24 lg:py-32">
        <div className="w-full max-w-xl">

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 text-center"
          >
            <Eyebrow className="mb-4 justify-center">{t("page.eyebrow")}</Eyebrow>
            <h1 className="font-display font-black text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-[#F5F0E8] mb-3">
              {t("page.headline")}
            </h1>
            <p className="font-body text-[15px] leading-relaxed text-[rgba(245,240,232,0.6)] max-w-md mx-auto">
              {t("page.subheadline")}
            </p>
            <GoldRule width="sm" opacity={30} className="mt-5 mx-auto" />
          </motion.div>

          {/* Quiz wizard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <QuizWizard />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
