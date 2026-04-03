"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import { siteData } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { t } = useTranslation("common");

  const navLabels: Record<string, string> = {
    "/services": t("nav.services"),
    "/about": t("nav.about"),
    "/contact": t("nav.contact"),
  };

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#0A1628]/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer — slides in from right */}
          <motion.nav
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280, mass: 0.8 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[min(320px,90vw)] bg-[#0D1E35] border-l border-[rgba(197,165,90,0.2)] flex flex-col"
            aria-label="Mobile navigation"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-[rgba(197,165,90,0.15)]">
              <span className="font-display text-[#C5A55A] text-sm font-semibold">{t("nav.menu")}</span>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-[rgba(245,240,232,0.6)] hover:text-[#F5F0E8] transition-colors"
                aria-label={t("nav.closeMenu")}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="2" y1="2" x2="16" y2="16" />
                  <line x1="16" y1="2" x2="2" y2="16" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col px-6 py-8 gap-1 flex-1">
              {siteData.nav.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block font-mono text-xs uppercase tracking-[0.12em] text-[rgba(245,240,232,0.7)] hover:text-[#C5A55A] py-3 border-b border-[rgba(197,165,90,0.1)] transition-colors duration-150"
                  >
                    {navLabels[link.href] ?? link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA at bottom */}
            <div className="px-6 pb-10 pt-4 border-t border-[rgba(197,165,90,0.15)]">
              <Button href={siteData.nav.cta.href} variant="primary" size="md" className="w-full" onClick={onClose}>
                {t("nav.cta")}
              </Button>
              <p className="font-mono text-[10px] text-[rgba(245,240,232,0.35)] uppercase tracking-[0.1em] text-center mt-4">
                {t("hours.display")}
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
