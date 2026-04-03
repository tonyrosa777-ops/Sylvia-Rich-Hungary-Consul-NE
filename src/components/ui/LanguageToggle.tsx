"use client";
import { useI18n } from "@/contexts/I18nContext";
import type { Locale } from "@/lib/i18n";

/**
 * LanguageToggle — EN | HU switcher
 * Placed leftmost in the nav right-section, before the CTA button.
 * Gold vertical rule separates flags. Active locale is full opacity; inactive is muted.
 */
export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const options: { locale: Locale; flag: string; label: string }[] = [
    { locale: "en", flag: "🇬🇧", label: "EN" },
    { locale: "hu", flag: "🇭🇺", label: "HU" },
  ];

  return (
    <div className="hidden sm:flex items-center gap-0 font-mono text-[10px] uppercase tracking-[0.1em]">
      {options.map((opt, i) => (
        <>
          {i > 0 && (
            <span
              key={`sep-${i}`}
              aria-hidden="true"
              className="w-px h-3.5 bg-[rgba(197,165,90,0.4)] mx-2"
            />
          )}
          <button
            key={opt.locale}
            onClick={() => setLocale(opt.locale)}
            aria-label={`Switch to ${opt.locale === "en" ? "English" : "Hungarian"}`}
            aria-current={locale === opt.locale ? "true" : undefined}
            className={
              locale === opt.locale
                ? "flex items-center gap-1 text-[#C5A55A] transition-colors duration-150"
                : "flex items-center gap-1 text-[rgba(245,240,232,0.4)] hover:text-[rgba(245,240,232,0.7)] transition-colors duration-150"
            }
          >
            <span aria-hidden="true">{opt.flag}</span>
            <span>{opt.label}</span>
          </button>
        </>
      ))}
    </div>
  );
}
