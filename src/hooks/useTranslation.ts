"use client";
import { useI18n } from "@/contexts/I18nContext";
import { resolvePath } from "@/lib/i18n";
import type { Translations } from "@/locales";

/**
 * useTranslation(namespace)
 *
 * Returns:
 *   t(key)       — string lookup with dot-notation support, falls back to key
 *   ta<T>(key)   — typed array/object lookup (no string coercion)
 *   locale       — current locale ("en" | "hu")
 *   setLocale    — switch locale (sets cookie + re-renders)
 */
export function useTranslation(namespace: keyof Translations) {
  const { locale, setLocale, t: allTranslations } = useI18n();
  const ns = allTranslations[namespace] as Record<string, unknown>;

  function t(key: string): string {
    const value = resolvePath(ns, key);
    if (typeof value === "string") return value;
    return key; // fallback: return raw key so missing translations are visible
  }

  function ta<T>(key: string): T {
    return resolvePath(ns, key) as T;
  }

  return { t, ta, locale, setLocale };
}
