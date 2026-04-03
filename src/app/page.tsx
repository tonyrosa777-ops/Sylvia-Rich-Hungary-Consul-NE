import type { Metadata } from "next";
import { siteData } from "@/data/site";
import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { FounderStory } from "@/components/sections/FounderStory";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeeTable } from "@/components/sections/FeeTable";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SiteTeaser } from "@/components/sections/SiteTeaser";

export const metadata: Metadata = {
  title: siteData.meta.defaultTitle,
  description: siteData.meta.defaultDescription,
  alternates: { canonical: siteData.brand.url },
};

/**
 * Homepage — hungaryconsulne.com
 * Section order per design-system.md §11 + website-build-template.md Homepage Composition
 *
 * 1. Hero         — hook + primary CTA
 * 2. Challenges   — empathy / problem framing
 * 3. FounderStory — trust + Sylvia's origin story
 * 4. Services     — what we offer + pricing preview
 * 5. Stats        — social proof numbers
 * 6. Testimonials — community voices
 * 7. FeeTable     — transparent pricing + NYC savings callout
 * 8. FinalCTA     — last-chance booking prompt
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Challenges />
      <SiteTeaser />
      <FounderStory />
      <Services />
      <Stats />
      <Testimonials />
      <FeeTable />
      <FinalCTA />
    </>
  );
}
