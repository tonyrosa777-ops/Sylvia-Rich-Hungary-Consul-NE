"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Button, Eyebrow, GoldRule } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { type BlogPost, type ContentBlock, type BlogCategory } from "@/lib/blog";

// ─── Category key map ─────────────────────────────────────────────────────────

const CATEGORY_KEY_MAP: Record<BlogCategory, string> = {
  "Document Authentication": "categories.documentAuthentication",
  "Citizenship & Nationality": "categories.citizenshipNationality",
  "Life Events": "categories.lifeEvents",
  "Community": "categories.community",
  "Consular Updates": "categories.consularUpdates",
};

// ─── Content block renderer ───────────────────────────────────────────────────

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="font-body text-[16px] leading-[1.85] text-[rgba(245,240,232,0.75)]"
        >
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2
          key={index}
          className="font-display font-bold text-[1.35rem] lg:text-[1.5rem] text-[#F5F0E8] mt-10 mb-2"
        >
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3
          key={index}
          className="font-display font-semibold text-[1.1rem] text-[rgba(245,240,232,0.9)] mt-7 mb-1"
        >
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul key={index} className="space-y-2 my-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="mt-[5px] shrink-0 w-[6px] h-[6px] rounded-full bg-[#C5A55A] opacity-80"
                aria-hidden="true"
              />
              <span className="font-body text-[15px] leading-[1.75] text-[rgba(245,240,232,0.7)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "blockquote":
      return (
        <blockquote
          key={index}
          className="relative pl-6 py-1 my-2 border-l-2 border-[#C5A55A]"
        >
          <p className="font-body italic text-[16px] leading-[1.8] text-[rgba(245,240,232,0.65)]">
            {block.text}
          </p>
        </blockquote>
      );

    case "divider":
      return <GoldRule key={index} width="full" opacity={15} className="my-4" />;

    default:
      return null;
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const { t } = useTranslation("blog");
  const categoryLabel = t(CATEGORY_KEY_MAP[post.category]);

  return (
    <div className="bg-[#0A1628] min-h-screen">

      {/* ── Back link + hero ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 border-b border-[rgba(197,165,90,0.12)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-10"
          >
            <Link
              href="/blog"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.65)] hover:text-[#C5A55A] transition-colors duration-150"
            >
              {t("post.backToList")}
            </Link>
          </motion.div>

          {/* Post hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            {/* Category badge */}
            <Eyebrow className="mb-4">{categoryLabel}</Eyebrow>

            {/* Title */}
            <h1 className="font-display font-bold text-[clamp(1.75rem,4.5vw,3rem)] text-[#F5F0E8] leading-[1.15] mb-5 max-w-3xl">
              {post.title}
            </h1>

            <GoldRule width="sm" opacity={40} className="mb-5" />

            {/* Date + read time */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[11px] tracking-[0.08em] text-[rgba(245,240,232,0.4)]">
                {post.date}
              </span>
              <span className="w-px h-3 bg-[rgba(197,165,90,0.2)]" aria-hidden="true" />
              <span className="font-mono text-[11px] tracking-[0.08em] text-[rgba(197,165,90,0.55)]">
                {post.readTime}
              </span>
            </div>

            {/* Excerpt as lead paragraph */}
            <p className="font-body text-[17px] leading-[1.8] text-[rgba(245,240,232,0.8)] max-w-2xl font-medium">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Hero image (if present) ────────────────────────────────────────── */}
      {post.image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 lg:px-8 -mt-8 mb-12"
        >
          <div className="relative aspect-[21/9] rounded-[3px] overflow-hidden border border-[rgba(197,165,90,0.15)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      )}

      {/* ── Article body ──────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="space-y-5"
            >
              {post.body.map((block, i) => renderBlock(block, i))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Book CTA card ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.25)] rounded-[3px] p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <Eyebrow className="mb-3">{t("cta.eyebrow")}</Eyebrow>
                <p className="font-body text-[15px] leading-[1.75] text-[rgba(245,240,232,0.65)] max-w-md">
                  {t("post.bookCtaNote")}
                </p>
              </div>
              <div className="shrink-0">
                <Button href="/booking" variant="primary" size="md">
                  {t("post.bookCta")}
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
