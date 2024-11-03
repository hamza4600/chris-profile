import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Dummy data - replace with your actual data fetching logic
const post = {
  title: "Understanding Modern Web Development",
  publishedAt: "2024-03-15",
  readingTime: "5 min read",
  author: {
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    role: "Senior Developer"
  },
  mainImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
  content: [
    // Your Portable Text content will go here
  ],
  tags: ["Web Development", "Next.js", "React", "TypeScript"]
}

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Back Button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white text-black">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <time>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={post.author.image}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">{post.author.role}</div>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <img
          src={post.mainImage}
          alt={post.title}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText 
          value={post.content}
          components={{
            // Customize your Portable Text components here
            types: {
              image: ({value}) => (
                <div className="relative aspect-video my-8">
                  <Image
                    src={value.url}
                    alt={value.alt || ''}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ),
            },
            marks: {
              link: ({children, value}) => (
                <a href={value.href} className="text-primary hover:underline">
                  {children}
                </a>
              ),
            },
          }}
        />
      </div>

      {/* Tags */}
      <div className="mt-8 pt-8 border-t">
        <h2 className="text-lg font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Share Links */}
      <div className="mt-8 pt-8 border-t">
        <h2 className="text-lg font-semibold mb-4">Share this article</h2>
        <div className="flex gap-4">
          <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <TwitterIcon className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <LinkedInIcon className="w-5 h-5" />
          </button>
          {/* Add more social share buttons as needed */}
        </div>
      </div>
    </article>
  )
}

// Simple icon components
function TwitterIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  )
}

function LinkedInIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}