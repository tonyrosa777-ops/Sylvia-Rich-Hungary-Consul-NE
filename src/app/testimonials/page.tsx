"use client";
import { useState } from "react";
import { siteData } from "@/data/site";
import { PageHeader, Button, GoldRule, Eyebrow } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { useTranslation } from "@/hooks/useTranslation";

const PAGE_SIZE = 8;

export default function TestimonialsPage() {
  const { testimonials } = siteData;
  const { t } = useTranslation("testimonials");
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);
  const pageItems = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      {/* Square testimonial cards grid */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pageItems.map((item) => (
              <div
                key={item.id}
                className="aspect-square bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-6 flex flex-col hover:border-[rgba(197,165,90,0.4)] transition-colors duration-300 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-4xl leading-none text-[rgba(197,165,90,0.2)] mb-3 select-none shrink-0"
                >
                  &ldquo;
                </span>
                <blockquote
                  lang={item.lang}
                  className="font-body text-[13px] leading-[1.7] text-[rgba(245,240,232,0.75)] flex-1 italic overflow-hidden"
                >
                  {item.quote}
                </blockquote>
                <GoldRule width="full" opacity={15} className="mt-4 mb-3 shrink-0" />
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] shrink-0">
                  {item.attribution}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <FadeUp delay={0.2} className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)] hover:text-[#C5A55A] disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150"
              >
                ← {t("pagination.prev")}
              </button>
              <span className="font-mono text-[10px] text-[rgba(245,240,232,0.3)]">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)] hover:text-[#C5A55A] disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150"
              >
                {t("pagination.next")} →
              </button>
            </FadeUp>
          )}
        </div>
      </section>

      {/* Discretion note + CTA */}
      <section className="bg-[#0A1628] py-16 border-t border-[rgba(197,165,90,0.1)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="border border-[rgba(197,165,90,0.1)] rounded-[3px] p-6 mb-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.4)] mb-2">
                {t("reviewSection.privacyLabel")}
              </p>
              <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.4)]">
                {t("discretionNote")}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("bookCTA.heading")}</Eyebrow>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.6)] max-w-sm">
                {t("bookCTA.body")}
              </p>
            </div>
            <Button href="/booking" variant="primary" size="md" className="shrink-0">
              {t("bookCTA.button")}
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
