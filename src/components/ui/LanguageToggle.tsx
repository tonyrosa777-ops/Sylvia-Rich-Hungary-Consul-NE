"use client";
import { useI18n } from "@/contexts/I18nContext";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

const LANGS: { locale: Locale; label: string; ariaLabel: string }[] = [
  { locale: "en", label: "EN", ariaLabel: "Switch to English" },
  { locale: "hu", label: "HU", ariaLabel: "Váltás magyarra" },
];

/**
 * LanguageToggle — segmented pill control, EN / HU
 * Active locale: solid gold fill (#C5A55A) with navy text
 * Inactive: muted cream, hover lifts to 70% opacity
 * size="sm" → nav use (default) | size="md" → mobile drawer use
 */
export function LanguageToggle({ size = "sm" }: { size?: "sm" | "md" }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "flex items-center rounded-[3px] border border-[rgba(197,165,90,0.25)] bg-[rgba(7,16,32,0.55)] p-[3px] gap-[3px]",
        size === "sm" ? "hidden sm:flex" : "flex"
      )}
    >
      {LANGS.map(({ locale: lang, label, ariaLabel }) => {
        const active = locale === lang;
        return (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            aria-pressed={active}
            aria-label={ariaLabel}
            className={cn(
              "rounded-[2px] font-mono uppercase tracking-[0.1em] transition-all duration-200 select-none",
              size === "sm" ? "px-2.5 py-[5px] text-[10px]" : "px-4 py-2 text-[11px]",
              active
                ? "bg-[#C5A55A] text-[#071020] font-semibold shadow-sm"
                : "text-[rgba(245,240,232,0.38)] hover:text-[rgba(245,240,232,0.7)] cursor-pointer"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
