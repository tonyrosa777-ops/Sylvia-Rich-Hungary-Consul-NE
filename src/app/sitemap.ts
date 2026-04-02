import { MetadataRoute } from "next";
import { siteData } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteData.brand.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/scope`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/booking`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-massachusetts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-new-hampshire`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-rhode-island`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-vermont`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/serving-maine`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
