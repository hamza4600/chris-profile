/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PortableText, PortableTextBlock, PortableTextComponentProps, PortableTextMarkComponentProps } from '@portabletext/react'
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getBlogPostBySlug, getBlogPostSeoBySlug } from '@/sanity/lib/blog'
import SideSection from './SideSection'
import { urlFor } from '@/sanity/lib/image'
import ShareLinks from './ShareLinks'
import { Metadata } from 'next'

export const revalidate = 60;

// add page seo 
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const blogPost = await getBlogPostSeoBySlug(params.slug);

  return {
    title: blogPost?.seo?.title || 'Blog Post',
    description: blogPost?.seo?.description || 'A detailed blog post',
    keywords: blogPost?.seo?.keyword || '',
    openGraph: {
      title: blogPost?.seo?.title || 'Blog Post',
      description: blogPost?.seo?.description || 'A detailed blog post',
      images: [{ url: blogPost?.seo?.image ? urlFor(blogPost.seo.image).url() : '' }],
    },
    twitter: {
      title: blogPost?.seo?.title || 'Blog Post',
      description: blogPost?.seo?.description || 'A detailed blog post',
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let blogPost = await getBlogPostBySlug(params.slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }
  // console.log(blogPost , "blogPost====");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
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
                src={blogPost?.author?.image ? urlFor(blogPost.author.image).url() : ''}
                alt={blogPost?.author?.name}
                width={40}
                height={40}
                className="rounded-full h-10 w-10 object-cover"
              />
              <div>
                <div className="font-medium dark:text-primary text-black">
                  {blogPost?.author?.name}
                </div>
                <div className="text-sm dark:text-secondary text-black">
                  {blogPost?.author?.role}
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
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <PortableText
              value={blogPost?.body}
              components={{
                block: {
                  normal: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                    <p className="mb-4 text-zinc-900 dark:text-zinc-100 leading-relaxed">
                      {children}
                    </p>
                  ),
                  h1: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                    <h1 className="md:text-[38px] leading-[1.2em] tracking-[-0.7px] font-normal text-[30px] text-zinc-900 dark:text-zinc-100 mb-6">
                      {children}
                    </h1>
                  ),
                  h2: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                    <h2 className="text-2xl font-normal mb-4 text-zinc-900 dark:text-zinc-100">
                      {children}
                    </h2>
                  ),
                  h3: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                    <h3 className="text-xl font-normal mb-3 text-zinc-900 dark:text-zinc-100">
                      {children}
                    </h3>
                  ),
                  h4: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                    <h4 className="text-lg font-normal mb-2 text-zinc-900 dark:text-zinc-100">
                      {children}
                    </h4>
                  ),
                  blockquote: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-6 italic text-zinc-800 dark:text-zinc-200">
                      {children}
                    </blockquote>
                  ),
                  list: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => {
                    const listStyle = value.listItem === 'number' ? 'list-decimal' : 'list-disc';
                    return (
                      <ul className={`mb-6 ${listStyle} pl-6 space-y-2 text-zinc-900 dark:text-zinc-100`}>
                        {children}
                      </ul>
                    );
                  },
                  listItem: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                    <li className="mb-2 text-zinc-900 dark:text-zinc-100">
                      {children}
                    </li>
                  ),
                },
                marks: {
                  link: ({ children, value }: PortableTextMarkComponentProps<any>) => (
                    <a href={value?.href} className="text-blue-500 hover:underline">
                      {children}
                    </a>
                  ),
                  strong: ({ children }: { children: React.ReactNode }) => (
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {children}
                    </strong>
                  ),
                  em: ({ children }: { children: React.ReactNode }) => (
                    <em className="italic text-zinc-900 dark:text-zinc-100">
                      {children}
                    </em>
                  ),
                  code: ({ children }: { children: React.ReactNode }) => (
                    <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-900 dark:text-zinc-100">
                      {children}
                    </code>
                  ),
                }
              }}
            />
          </div>

          {/* Tags */}
            {/* <div className="mt-8 pt-8 border-t">
              <h2 className="text-[24px] md:text-[28px] leading-[1.2em] tracking-[-0.5px] mb-4 dark:text-primary text-black">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {blogPost?.categories.map((tag: any) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div> */}

          {/* Share Links */}
          <ShareLinks blogPost={params?.slug} />
        </article>

        {/* Side Section */}
        <SideSection />
      </div>
    </div>
  );
}