import { MetadataRoute } from "next";
import { siteData } from "@/data/site";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteData.brand.url;

  const blogPostRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.75 },
    ...blogPostRoutes,
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/scope`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/citizenship`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/vital-records`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/legalization`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/services/certificates`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/booking`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-massachusetts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-new-hampshire`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-rhode-island`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-vermont`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-maine`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/shop`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.65 },
  ];
}
