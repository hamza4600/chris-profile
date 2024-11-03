import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client' // Your Sanity client

async function getBlogPosts() {
  const query = `*[_type == "post"] {
    slug,
    _updatedAt
  }`
  return await client.fetch(query)
}


// get case studies 
async function getCaseStudies() {
  const query = `*[_type == "caseStudy"] {
    slug,
    _updatedAt
  }`
  return await client.fetch(query)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hamza-v2.vercel.app'

  // Get dynamic blog posts
  const posts = await getBlogPosts()
  const blogRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // get case studies 
  const caseStudies = await getCaseStudies()
  const caseStudyRoutes = caseStudies.map((caseStudy: any) => ({
    url: `${baseUrl}/work/${caseStudy.slug.current}`,
    lastModified: new Date(caseStudy._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  
    // ... other static routes ...
  ]

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes]
}