import Link from 'next/link'
import Image from 'next/image'

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

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Insights, thoughts, and discoveries about web development, design, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.id}
            className="group"
          >
            <article className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <img
                  src={post.image}
                  alt={post.title}
                //   fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  <span className="text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
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