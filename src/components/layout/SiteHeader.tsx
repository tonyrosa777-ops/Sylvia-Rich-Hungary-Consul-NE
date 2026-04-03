"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button, LanguageToggle } from "@/components/ui";
import { MobileNav } from "./MobileNav";
import { siteData } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile nav on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const navLabels: Record<string, string> = {
    "/services": t("nav.services"),
    "/about": t("nav.about"),
    "/blog": t("nav.blog"),
    "/shop": t("nav.shop"),
    "/pricing": t("nav.pricing"),
    "/contact": t("nav.contact"),
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0A1628]/92 backdrop-blur-md border-b border-[rgba(197,165,90,0.15)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-[72px] flex items-center gap-4">

          {/* ── Slot 1: Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Homepage">
            <Image
              src="/brand/crest-placeholder.svg"
              alt="Hungarian coat of arms"
              width={36}
              height={36}
              className="opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            />
            <span className="font-display font-semibold text-[#F5F0E8] text-sm leading-tight hidden sm:block">
              Honorary Consulate<br />
              <span className="text-[#C5A55A]">Hungary · New England</span>
            </span>
          </Link>

          {/* ── Slot 2: Center — desktop nav / mobile language toggle ── */}
          <div className="flex-1 flex items-center justify-center">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {siteData.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-[rgba(245,240,232,0.75)] hover:text-[#C5A55A] transition-colors duration-150"
                >
                  {navLabels[link.href] ?? link.label}
                </Link>
              ))}
            </nav>
            {/* Mobile: language toggle centered — size="md" forces flex at all widths */}
            <div className="md:hidden">
              <LanguageToggle size="md" />
            </div>
          </div>

          {/* ── Slot 3: Right — desktop toggle + Book CTA + hamburger ── */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden md:flex">
              <LanguageToggle />
            </div>

            <Button
              href={siteData.nav.cta.href}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t("nav.cta")}
            </Button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
              aria-label={t("nav.openMenu")}
              aria-expanded={mobileOpen}
            >
              <span className="w-5 h-px bg-[#F5F0E8] block transition-all duration-200" />
              <span className="w-5 h-px bg-[#F5F0E8] block transition-all duration-200" />
              <span className="w-3.5 h-px bg-[#C5A55A] block transition-all duration-200" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
