/* eslint-disable @next/next/no-img-element */
import { getAllBlogPosts } from '@/sanity/lib/blog';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link'

// Dummy data
const blogs = [
  {
    id: 1,
    title: "Understanding Modern Web Development",
    excerpt: "An in-depth look at the latest trends and technologies in web development, including Next.js, React, and TypeScript.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    slug: "understanding-modern-web-development"
  },
  {
    id: 2,
    title: "The Future of AI in Web Design",
    excerpt: "Exploring how artificial intelligence is reshaping the way we approach web design and user experience.",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "AI & Design",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    slug: "future-of-ai-in-web-design"
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    excerpt: "Essential techniques and best practices for improving your website's speed and performance.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    slug: "optimizing-website-performance"
  },
] as const;

export default async function BlogPage() {
  
  const blogPosts = await getAllBlogPosts();
  
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="md:text-[38px] leading-[1.2em] tracking-[-0.7px] font-normal text-[30px] dark:text-primary text-black mb-4">Blog</h1>
        <p className="dark:text-secondary text-black max-w-2xl md:text-2xl text-[18px] leading-[1.2em] tracking-[-0.5px] mx-auto">
          Insights, thoughts, and discoveries about web development, design, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post: any, i: number) => (
          <Link 
            href={`/blog/${post?.slug?.current}`} 
            key={i}
            className="group flex"
          >
            <article className="flex flex-col bg-white dark:bg-zinc-900/50 rounded-lg w-full overflow-hidden 
              shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
              dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.15)] 
              hover:shadow-[0_8px_17px_-4px_rgba(0,0,0,0.1),0_16px_24px_-2px_rgba(0,0,0,0.06)] 
              dark:hover:shadow-[0_8px_17px_-4px_rgba(0,0,0,0.3),0_16px_24px_-2px_rgba(0,0,0,0.25)] 
              transition-shadow duration-300 border border-zinc-200 dark:border-zinc-800">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={urlFor(post?.cardData?.image?.asset?._ref)?.url()}
                  alt={post?.cardData?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm px-3 py-1 dark:bg-white/50 font-medium bg-primary text-primary rounded-full">
                    {post?.cardData?.categories[0]?.title}
                  </span>
                  <span className="text-sm dark:text-secondary font-medium text-black">
                    {post?.timeToRead} min
                  </span>
                </div>

                <h2 className="text-xl font-semibold mb-2 dark:text-primary text-black transition-colors">
                  {post?.cardData?.title}
                </h2>

                <p className="dark:text-secondary text-black line-clamp-2 mb-4">
                  {post?.cardData?.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <time className="text-sm dark:text-secondary text-black font-medium">
                    {new Date(post?.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  <span className="dark:text-secondary text-black font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}