"use client";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import { BlogPostContent } from "@/components/sections/BlogPostContent";
import { use } from "react";

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
