import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import React from 'react'

// Dummy topics data with post counts
const topics = [
  { name: "health", count: 23 },
  { name: "lifestyle", count: 19 },
  { name: "travel", count: 14 },
  { name: "tech", count: 31 },
  { name: "culture", count: 27 }
]

export default function SideSection({relatedPosts}: {relatedPosts: any}) {
  return (
    <aside className="space-y-8 font-satoshi">
      {/* Recent Posts Section */}
      <section className="border md:p-8 p-4 rounded-xl border-gray-200 dark:border-gray-800 pb-8">
        <h2 className="text-[22px] leading-[30px] font-semibold mb-4 dark:text-primary text-black">Recent Posts</h2>
        <div className="space-y-6">
          {relatedPosts.map((post: any) => (
            <Link href={`/blog/${post.slug.current}`} key={post.id} title={post?.cardData?.title} className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full bg-secondary">
                <img 
                  src={post?.cardData?.image  ? urlFor(post?.cardData?.image).url() : "/images/avatar.png"} 
                  alt={post?.author?.name}
                  className="object-cover h-12 w-12 rounded"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium dark:text-primary text-black">{post?.cardData?.title}</h3>
                <p className="text-xs dark:text-secondary text-black mt-2">{post?.author?.name} {new Date(post?.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore Topics Section */}
      {/* <section className="border md:p-8 p-4 rounded-xl border-gray-200 dark:border-gray-800 pb-8">
        <h2 className="text-[22px] leading-[30px] font-semibold mb-4 dark:text-primary text-black">Explore Topics</h2>
        <div className="space-y-6 mt-10">
          {topics.map(topic => (
            <div key={topic.name} className="flex items-center justify-between">
              <span className="text-sm capitalize dark:text-primary text-gray-600">{topic.name}</span>
              <span className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-700 text-gray-200 text-xs flex items-center justify-center">
                {topic.count}
              </span>
            </div>
          ))}
        </div>
      </section> */}
    </aside>
  )
}