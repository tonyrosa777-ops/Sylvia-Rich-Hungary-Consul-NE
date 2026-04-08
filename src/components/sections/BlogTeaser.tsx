"use client";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, GoldRule, Button } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { getFeaturedPosts } from "@/lib/blog";
import { useTranslation } from "@/hooks/useTranslation";
import { useI18n } from "@/contexts/I18nContext";

const CATEGORY_KEY_MAP: Record<string, string> = {
  "Document Authentication": "categories.documentAuthentication",
  "Citizenship & Nationality": "categories.citizenshipNationality",
  "Life Events": "categories.lifeEvents",
  "Community": "categories.community",
  "Consular Updates": "categories.consularUpdates",
};

export function BlogTeaser() {
  const { t } = useTranslation("home");
  const { t: tBlog } = useTranslation("blog");
  const { locale } = useI18n();
  const posts = getFeaturedPosts().slice(0, 3);

  return (
    <section className="bg-[#122040] py-24 lg:py-32" aria-labelledby="blog-teaser-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="mb-14 max-w-xl">
          <Eyebrow className="mb-4">{t("blogTeaser.eyebrow")}</Eyebrow>
          <h2
            id="blog-teaser-heading"
            className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight text-[#F5F0E8]"
          >
            {t("blogTeaser.headline")}
          </h2>
          <GoldRule width="sm" opacity={35} className="mt-5 mb-6" />
          <p className="font-body text-[16px] leading-relaxed text-[rgba(245,240,232,0.6)]">
            {t("blogTeaser.description")}
          </p>
        </FadeUp>

        {/* Article cards */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={staggerItem}>
              <Link
                href={`/blog/${post.slug}`}
                className="group bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] overflow-hidden h-full flex flex-col hover:border-[#C5A55A] hover:shadow-[0_4px_32px_rgba(10,22,40,0.7)] transition-all duration-300"
              >
                {/* Image */}
                {post.image && (
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={locale === "hu" ? post.titleHu : post.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent opacity-60" />
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Category + read time */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#C5A55A]">
                      {tBlog(CATEGORY_KEY_MAP[post.category] ?? post.category)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[rgba(245,240,232,0.2)]" aria-hidden="true" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.3)]">
                      {post.readMinutes} {t("blogTeaser.readTime")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-[#F5F0E8] leading-snug mb-3 group-hover:text-[#C5A55A] transition-colors duration-200">
                    {locale === "hu" ? post.titleHu : post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-[13px] leading-relaxed text-[rgba(245,240,232,0.55)] flex-1 line-clamp-3">
                    {locale === "hu" ? post.excerptHu : post.excerpt}
                  </p>

                  {/* Read link */}
                  <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#C5A55A] group-hover:text-[#D4AF37] transition-colors">
                    {tBlog("card.readMore")} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Footer CTA */}
        <FadeUp delay={0.3} className="mt-10 flex justify-end">
          <Button href="/blog" variant="ghost" size="sm">
            {t("blogTeaser.viewAll")}
          </Button>
        </FadeUp>

      </div>
    </section>
  );
}
