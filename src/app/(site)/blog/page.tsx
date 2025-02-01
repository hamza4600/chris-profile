/* eslint-disable @next/next/no-img-element */
import { getAllBlogPosts } from '@/sanity/lib/blog';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link'

export const revalidate = 60;

// add page seo 
export async function generateMetadata() {
  return {
    title: "Blog | Full-Stack Developer Insights JavaScript, Shopify, AI Expert & Web Development | Hamza Khan",
    description: "Explore in-depth articles about web development, Shopify, AI, JavaScript, design patterns, technology trends, and software engineering best practices. Stay updated with our latest insights and tutorials.",
    openGraph: {
      title: "Blog | Full-Stack Developer Insights JavaScript, Shopify, AI Expert & Web Development | Hamza Khan",
      description: "Explore 10+ years of hands-on expertise in JavaScript, Shopify, and AI. Stay updated with our latest insights and tutorials.",
      type: "website",
      // images: [
      //   {
      //     url: "/og-blog.jpg", // Make sure to add this image to your public folder
      //     width: 1200,
      //     height: 630,
      //     alt: "Blog Header Image",
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Full-Stack Developer Insights JavaScript, Shopify, AI Expert & Web Development | Hamza Khan",
      description: "Explore in-depth articles about web development, Shopify, AI, JavaScript, design patterns, technology trends, and software engineering best practices. Stay updated with our latest insights and tutorials.",
    },
    keywords: "web development, software engineering, technology, coding tutorials, design patterns, tech insights Shopify Expert, AI Expert, JavaScript Expert, Full-Stack Developer",
  };
}

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
                    {post?.cardData?.categories?.[0]?.title}
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