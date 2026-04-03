import type { Metadata } from "next";
import { Playfair_Display, Lora, DM_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { siteData } from "@/data/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { GlobalParticles } from "@/components/layout/GlobalParticles";
import { I18nProvider } from "@/contexts/I18nContext";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/sections/CartDrawer";
import type { Locale } from "@/lib/i18n";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteData.meta.defaultTitle,
    template: siteData.meta.titleTemplate,
  },
  description: siteData.meta.defaultDescription,
  metadataBase: new URL(siteData.brand.url),
  openGraph: {
    title: siteData.meta.defaultTitle,
    description: siteData.meta.defaultDescription,
    url: siteData.brand.url,
    siteName: siteData.brand.name,
    images: [{ url: siteData.meta.ogImage, width: 1200, height: 630 }],
    locale: siteData.meta.locale,
    type: "website",
  },
  alternates: {
    canonical: siteData.brand.url,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const rawLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale: Locale = rawLocale === "hu" ? "hu" : "en";

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${lora.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0A1628] text-[#F5F0E8] antialiased">
        <I18nProvider initialLocale={locale}>
          <CartProvider>
            <GlobalParticles />
            <SiteHeader />
            <CartDrawer />
            <main className="flex-1 pt-[72px]">
              {children}
            </main>
            <SiteFooter />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
