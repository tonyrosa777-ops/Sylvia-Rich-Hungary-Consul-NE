import type { Metadata } from "next";
import { Playfair_Display, Lora, DM_Mono } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0A1628] text-[#F5F0E8] antialiased">
        <SiteHeader />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
