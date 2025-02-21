import type { MetadataRoute } from 'next'
import { domainURL } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio',       // Block Sanity Studio
          '/api',          // Block API routes
        ]
      },
    ],
    sitemap: [
      `${domainURL}/sitemap.xml`,
      // Add other sitemaps if needed:
      // `${domainURL}/blog-sitemap.xml`,
      // `${domainURL}/work-sitemap.xml`
    ]
  }
}