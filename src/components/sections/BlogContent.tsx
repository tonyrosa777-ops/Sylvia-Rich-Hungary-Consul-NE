"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Button, Eyebrow, GoldRule } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import {
  posts,
  BLOG_CATEGORIES,
  type BlogPost,
  type BlogCategory,
} from "@/lib/blog";

// ─── Category key map (BlogCategory → translation key) ───────────────────────

const CATEGORY_KEY_MAP: Record<BlogCategory, string> = {
  "Document Authentication": "categories.documentAuthentication",
  "Citizenship & Nationality": "categories.citizenshipNationality",
  "Life Events": "categories.lifeEvents",
  "Community": "categories.community",
  "Consular Updates": "categories.consularUpdates",
};

// ─── Placeholder image (no image on post) ────────────────────────────────────

function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={`bg-[#122040] border border-[rgba(197,165,90,0.15)] flex items-center justify-center ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* Hungarian apostolic double cross in gold */}
      <svg
        width="40"
        height="56"
        viewBox="0 0 40 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Vertical bar */}
        <rect x="18" y="0" width="4" height="56" fill="#C5A55A" />
        {/* Upper crossbar (shorter) */}
        <rect x="10" y="12" width="20" height="3" fill="#C5A55A" />
        {/* Lower crossbar (longer) */}
        <rect x="4" y="26" width="32" height="3" fill="#C5A55A" />
      </svg>
    </div>
  );
}

// ─── Blog card ────────────────────────────────────────────────────────────────

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  const { t, locale } = useTranslation("blog");
  const categoryLabel = t(CATEGORY_KEY_MAP[post.category]);
  const formattedDate = new Intl.DateTimeFormat(locale === "hu" ? "hu-HU" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.isoDate));

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-[#1B2A4A] border border-[rgba(197,165,90,0.12)] rounded-[3px] overflow-hidden hover:border-[rgba(197,165,90,0.45)] transition-all duration-200 h-full"
    >
      {/* Image area */}
      <div className={featured ? "aspect-[16/7]" : "aspect-[16/9]"}>
        {post.image ? (
          <div className="relative w-full h-full">
            <Image
              src={post.image}
              alt={locale === "hu" ? post.titleHu : post.title}
              fill
              sizes={featured ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 100vw, 33vw"}
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        ) : (
          <ImagePlaceholder className="w-full h-full" />
        )}
      </div>

      {/* Card body */}
      <div className="p-6 lg:p-7 flex flex-col gap-3">
        {/* Category + featured badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#C5A55A]">
            {categoryLabel}
          </span>
          {post.featured && (
            <span className="font-mono text-[8px] uppercase tracking-[0.12em] bg-[rgba(197,165,90,0.15)] text-[#C5A55A] border border-[rgba(197,165,90,0.3)] px-2 py-0.5 rounded-[2px]">
              {t("featured.label")}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className={`font-display font-bold text-[#F5F0E8] leading-snug group-hover:text-[#C5A55A] transition-colors duration-150 ${featured ? "text-[1.25rem] lg:text-[1.4rem]" : "text-[1.05rem]"}`}>
          {locale === "hu" ? post.titleHu : post.title}
        </h2>

        {/* Excerpt */}
        <p className="font-body text-[14px] leading-[1.75] text-[rgba(245,240,232,0.6)] line-clamp-3">
          {locale === "hu" ? post.excerptHu : post.excerpt}
        </p>

        {/* Footer: date + read time */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[rgba(197,165,90,0.1)]">
          <span className="font-mono text-[10px] text-[rgba(245,240,232,0.35)] tracking-[0.06em]">
            {formattedDate}
          </span>
          <span className="font-mono text-[10px] text-[rgba(197,165,90,0.55)] tracking-[0.06em]">
            {post.readMinutes} {t("card.minRead")}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function BlogContent() {
  const { t, locale } = useTranslation("blog");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.titleHu.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.excerptHu.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <div className="bg-[#0A1628] min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-b border-[rgba(197,165,90,0.12)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <Eyebrow className="mb-4">{t("hero.eyebrow")}</Eyebrow>
            <h1 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-[#F5F0E8] leading-[1.1] mb-4 max-w-2xl">
              {t("hero.headline")}
            </h1>
            <GoldRule width="sm" opacity={40} className="mb-6" />
            <p className="font-body text-[16px] leading-[1.8] text-[rgba(245,240,232,0.65)] max-w-xl mb-10">
              {t("hero.subheadline")}
            </p>

            {/* Search */}
            <div className="relative max-w-sm">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(197,165,90,0.4)]"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <circle cx="6.5" cy="6.5" r="5" />
                <line x1="10.5" y1="10.5" x2="14" y2="14" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("hero.searchPlaceholder")}
                className="w-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] pl-10 pr-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder:text-[rgba(245,240,232,0.25)] focus:outline-none focus:border-[#C5A55A] transition-colors duration-150"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Category filter tabs ───────────────────────────────────────── */}
      <section className="py-6 border-b border-[rgba(197,165,90,0.1)] sticky top-[72px] z-10 bg-[#0A1628]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 flex-wrap">
            {/* All tab */}
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`font-mono text-[10px] uppercase tracking-[0.12em] px-4 py-2 rounded-[3px] border transition-all duration-150 ${
                activeCategory === "all"
                  ? "bg-[#C5A55A] text-[#0A1628] border-[#C5A55A]"
                  : "text-[rgba(245,240,232,0.55)] border-[rgba(197,165,90,0.15)] hover:border-[rgba(197,165,90,0.4)] hover:text-[rgba(245,240,232,0.8)]"
              }`}
            >
              {t("categories.all")}
            </button>

            {/* Category tabs */}
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[10px] uppercase tracking-[0.12em] px-4 py-2 rounded-[3px] border transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-[#C5A55A] text-[#0A1628] border-[#C5A55A]"
                    : "text-[rgba(245,240,232,0.55)] border-[rgba(197,165,90,0.15)] hover:border-[rgba(197,165,90,0.4)] hover:text-[rgba(245,240,232,0.8)]"
                }`}
              >
                {t(CATEGORY_KEY_MAP[cat])}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {filteredPosts.length === 0 ? (
            /* Empty state */
            <FadeUp className="text-center py-20">
              <p className="font-display font-bold text-xl text-[#F5F0E8] mb-3">
                {t("empty.heading")}
              </p>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.5)]">
                {t("empty.body")}
              </p>
            </FadeUp>
          ) : (
            <>
              {/* Featured posts row */}
              {featuredPosts.length > 0 && (
                <div className="mb-14">
                  <FadeUp className="mb-6">
                    <Eyebrow gold={false}>{t("featured.label")}</Eyebrow>
                  </FadeUp>
                  <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredPosts.map((post) => (
                      <motion.div key={post.id} variants={staggerItem} className="h-full">
                        <BlogCard post={post} featured />
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              )}

              {/* Regular posts grid */}
              {regularPosts.length > 0 && (
                <div>
                  {featuredPosts.length > 0 && (
                    <GoldRule width="full" opacity={10} className="mb-14" />
                  )}
                  <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post) => (
                      <motion.div key={post.id} variants={staggerItem} className="h-full">
                        <BlogCard post={post} />
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#071020] border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeUp className="max-w-2xl">
            <Eyebrow className="mb-4">{t("cta.eyebrow")}</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-[#F5F0E8] mb-4 leading-tight">
              {t("cta.headline")}
            </h2>
            <GoldRule width="sm" opacity={30} className="mb-6" />
            <p className="font-body text-[15px] leading-[1.8] text-[rgba(245,240,232,0.6)] mb-8">
              {t("cta.body")}
            </p>
            <Button href="/contact" variant="primary" size="md">
              {t("cta.button")}
            </Button>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
