/**
 * i18n.ts — lightweight i18n utilities
 * Custom implementation for Next.js App Router (next-i18next is Pages Router only)
 */

export type Locale = "en" | "hu";

export const SUPPORTED_LOCALES: Locale[] = ["en", "hu"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Resolve a dot-notation key path against an object. Returns undefined if not found. */
export function resolvePath(obj: Record<string, unknown>, key: string): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

/** Parse locale from cookie string (server-side). */
export function parseLocaleCookie(cookieHeader: string | null): Locale {
  if (!cookieHeader) return DEFAULT_LOCALE;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]*)`));
  const value = match?.[1];
  return SUPPORTED_LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE;
}

/** Set locale cookie (client-side). */
export function setLocaleCookie(locale: Locale): void {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}
