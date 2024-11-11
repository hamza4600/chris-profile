import type { MetadataRoute } from 'next'
import { domainURL } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default rule for all bots
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/*',    // Prevent crawling of Sanity Studio
          '/api/*',       // Prevent crawling of API routes
          '/admin/*',     // Prevent crawling of admin pages
          '/_next/*',     // Prevent crawling of Next.js system files
          '/private/*',   // Prevent crawling of private pages
        ]
      },
      {
        // Specific rules for Google
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/work/*',
        //   '/about',
        //   '/contact',
        //   '/blog/*',
          '/sitemap.xml',
          '/robots.txt'
        ],
        disallow: [
          '/studio/*',
          '/api/*',
          '/_next/*',
          '/*.json$',     // Prevent crawling of JSON files
          '/*?*',         // Prevent crawling of URLs with query parameters
        ]
      },
      {
        // Bing specific rules
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: ['/studio/*', '/api/*']
      },
      {
        // Rules for other major search engines
        userAgent: [
          'DuckDuckBot',
          'Yandexbot',
          'Slurp',        // Yahoo
          'Baiduspider'
        ],
        allow: ['/'],
        disallow: ['/studio/*', '/api/*']
      },
      {
        // Block archive.org bot from studio
        userAgent: 'ia_archiver',
        disallow: ['/studio/*']
      },
      {
        // Block social media bots from studio
        userAgent: [
          'facebookexternalhit',
          'twitterbot',
          'linkedinbot'
        ],
        allow: ['/'],
        disallow: ['/studio/*']
      }
    ],
    // Multiple sitemaps can be specified if needed
    sitemap: [
      `${domainURL}/sitemap.xml`,
      // Add more sitemaps if you have them, like:
      // `${baseUrl}/blog-sitemap.xml`,
      // `${baseUrl}/work-sitemap.xml`
    ],
    // Host directive helps specify the preferred domain version
    host: domainURL
  }
}