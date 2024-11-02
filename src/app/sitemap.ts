import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client' // Your Sanity client

async function getBlogPosts() {
  const query = `*[_type == "post"] {
    slug,
    _updatedAt
  }`
  return await client.fetch(query)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourdomain.com'

  // Get dynamic blog posts
  const posts = await getBlogPosts()
  const blogRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services/saas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // ... other static routes ...
  ]

  return [...staticRoutes, ...blogRoutes]
}