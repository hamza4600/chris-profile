/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/sanity/lib/blog'
import SideSection from './SideSection'
import { urlFor } from '@/sanity/lib/image'

// Dummy data - replace with your actual data fetching logic
const post = {
  title: "Understanding Modern Web Development",
  publishedAt: "2024-03-15",
  readingTime: "5 min read",
  author: {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    role: "Senior Developer",
  },
  mainImage:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
  content: [
    {
      _type: "block",
      style: "h1",
      children: [
        {
          _type: "span",
          text: "Hello",
        },
      ],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        {
          _key: "123",
          _type: "link",
          href: "https://www.google.com",
        },
      ],
      children: [
        {
          _type: "span",
          text: "Google",
          marks: ["123"],
        },
      ],
    },
  ],
  tags: ["Web Development", "Next.js", "React", "TypeScript"],
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let blogPost = await getBlogPostBySlug(params.slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  blogPost = blogPost[0];
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center dark:text-primary text-black dark:hover:text-primary/80 hover:text-black/80 font-medium mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-12">
        {/* Main Content */}
        <article>
          {/* Back Button */}

          {/* Header */}
          <header className="mb-8">
            <h1 className="md:text-[38px] leading-[1.2em] tracking-[-0.7px] font-normal text-[30px] dark:text-primary text-black mb-4">
              {blogPost?.title}
            </h1>

            <div className="flex items-center font-normal gap-6 dark:text-secondary text-black mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <time>
                  {new Date(blogPost?._createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blogPost?.timeToRead} min</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={post.author.image}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full h-10 w-10 object-cover"
              />
              <div>
                <div className="font-medium dark:text-primary text-black">
                  {post.author.name}
                </div>
                <div className="text-sm dark:text-secondary text-black">
                  {post.author.role}
                </div>
              </div>
            </div>
          </header>

          {/* Main Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src={urlFor(blogPost?.mainImage?.asset?._ref).url()}
              alt={blogPost?.title}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText
              value={blogPost?.body}
              components={{
                types: {
                  image: ({
                    value,
                  }: {
                    value: { url: string; alt: string };
                  }) => (
                    <div className="relative aspect-video my-8">
                      <Image
                        src={value.url}
                        alt={value.alt || ""}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ),
                },
                // ... existing code ...
                block: {
                  normal: ({ children }: { children: React.ReactNode }) => (
                    <p className="mb-4 text-black dark:text-primary">
                      {children}
                    </p>
                  ),
                  h1: ({ children }: { children: React.ReactNode }) => (
                    <h1 className="md:text-[38px] leading-[1.2em] tracking-[-0.7px] font-normal text-[30px] dark:text-primary text-black mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }: { children: React.ReactNode }) => (
                    <h2 className="text-xl font-bold mb-4 text-black dark:text-primary">
                      {children}
                    </h2>
                  ),
                  listItem: ({ children }: { children: React.ReactNode }) => (
                    <li className="mb-2 text-black dark:text-primary">{children}</li>
                  ),
                  // list
                  list: ({ children }: { children: React.ReactNode }) => (
                    <ul className="mb-4 text-black dark:text-primary">{children}</ul>
                  ),
                } as Record<string, any>,
                marks: {
                  link: ({
                    children,
                    value,
                  }: {
                    children: React.ReactNode;
                    value: any;
                  }) => (
                    <a
                      href={value.href}
                      className="text-primary hover:underline"
                    >
                      {children}
                    </a>
                  ),
                } as Record<string, any>,
                // ... existing code ...
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t">
            <h2 className="text-[24px] md:text-[28px] leading-[1.2em] tracking-[-0.5px] mb-4 dark:text-primary text-black">
              Tags
            </h2>
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

        {/* Side Section */}
        <SideSection />
      </div>
    </div>
  );
}

// Simple icon components
function TwitterIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function LinkedInIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
