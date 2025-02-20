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
          '/admin',        // Block admin panels
          '/_next',        // Block Next.js internals
          '/private',      // Block private areas
          '/*?*',          // Block all URLs with query parameters
          '/*.json$',      // Block JSON files
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/work',         // Allow work section
          '/blog',         // Allow blog section
          '/sitemap.xml',
          '/robots.txt'
        ],
        disallow: [
          '/studio',
          '/api',
          '/_next',
          '/private'
        ]
      },
      {
        userAgent: [
          'Bingbot',
          'DuckDuckBot',
          'YandexBot',
          'Slurp',
          'Baiduspider'
        ],
        allow: '/',
        disallow: [
          '/studio',
          '/api',
          '/private'
        ]
      },
      {
        userAgent: 'ia_archiver',
        disallow: '/studio'
      }
    ],
    sitemap: [
      `${domainURL}/sitemap.xml`,
      // Add other sitemaps if needed:
      // `${domainURL}/blog-sitemap.xml`,
      // `${domainURL}/work-sitemap.xml`
    ]
  }
}