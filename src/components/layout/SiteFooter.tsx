import Link from "next/link";
import Image from "next/image";
import { GoldRule } from "@/components/ui";
import { siteData } from "@/data/site";

const stateLinks = siteData.footer.links.filter((l) => l.href.startsWith("/serving-"));
const siteLinks = siteData.footer.links.filter((l) => !l.href.startsWith("/serving-"));

export function SiteFooter() {
  return (
    <footer className="bg-[#071020] border-t border-[rgba(197,165,90,0.15)] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Top row — brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/brand/crest-placeholder.svg"
                alt="Hungarian coat of arms"
                width={32}
                height={32}
                className="opacity-80"
              />
              <span className="font-display font-semibold text-[#F5F0E8] text-sm leading-tight">
                Honorary Consulate<br />
                <span className="text-[#C5A55A]">Hungary · New England</span>
              </span>
            </div>
            <p className="font-body text-sm text-[rgba(245,240,232,0.5)] leading-relaxed">
              {siteData.brand.address.street}<br />
              {siteData.brand.address.city}, {siteData.brand.address.state} {siteData.brand.address.zip}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#C5A55A] mt-3">
              {siteData.brand.hours.display}
            </p>
          </div>

          {/* Site links */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.4)] mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {siteLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[rgba(245,240,232,0.6)] hover:text-[#C5A55A] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* States served */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.4)] mb-4">
              States Served
            </p>
            <ul className="space-y-2.5">
              {stateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[rgba(245,240,232,0.6)] hover:text-[#C5A55A] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.4)] mb-4">
              Official Resources
            </p>
            <ul className="space-y-2.5">
              {siteData.footer.externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[rgba(245,240,232,0.6)] hover:text-[#C5A55A] transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-50">
                      <path d="M1 9L9 1M9 1H4M9 1V6" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <GoldRule width="full" opacity={15} className="mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.25)]">
            Vienna Convention on Consular Relations · Derry, NH
          </p>
          <p className="font-body text-xs text-[rgba(245,240,232,0.25)] max-w-xl text-right">
            {siteData.footer.legal}
          </p>
        </div>

      </div>
    </footer>
  );
}
