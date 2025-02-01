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

export default function SideSection({relatedPosts, relatedCaseStudies}: {relatedPosts: any, relatedCaseStudies: any}) {
  return (
    <aside className="space-y-8 font-satoshi">
      {/* Recent Posts Section */}
      <section className="border md:p-4 p-2 rounded-xl border-gray-200 dark:border-gray-800 pb-8">
        <h2 className="text-[22px] leading-[30px] font-semibold mb-4 dark:text-primary text-black">Recent Posts</h2>
        <div  className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-2">
          {relatedPosts.map((post: any) => (
            <Link href={`/blog/${post.slug.current}`} key={post.id} title={post?.cardData?.title} className="flex items-center gap-3 p-2 rounded-md flex-col">
              <div className="relative rounded-full bg-secondary aspect-w-1 aspect-h-1 w-full lg:h-[150px] md:h-[200px] sm:h-[170px] h-[150px]">
                <img 
                  src={post?.cardData?.image  ? urlFor(post?.cardData?.image).url() : "/images/avatar.png"} 
                  alt={post?.author?.name}
                  className="object-cover rounded w-full h-full"
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

      {/* Case Studies Section */}
      {
        relatedCaseStudies && (
          <section className="border md:p-4 p-2 rounded-xl border-gray-200 dark:border-gray-800 pb-8 sticky top-2">
        <h2 className="text-[22px] leading-[30px] font-semibold mb-4 dark:text-primary text-black">Case Studies</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-2">
          {relatedCaseStudies.map((caseStudy: any) => (
            <Link href={`/work/${caseStudy.slug.current}`} key={caseStudy.id} title={caseStudy?.caseStudyCardData?.title} className="flex items-center gap-3 p-2 rounded-md flex-col">
              <div className="relative rounded-full bg-secondary aspect-w-1 aspect-h-1 w-full lg:h-[150px] md:h-[200px] sm:h-[170px] h-[150px]">
                <img src={caseStudy?.caseStudyCardData?.image ? urlFor(caseStudy?.caseStudyCardData?.image).url() : "/images/avatar.png"} alt={caseStudy?.caseStudyCardData?.description} className="object-cover rounded w-full h-full" />
              </div>
              
              <div>
                <h3 className="text-sm font-medium dark:text-primary text-black">{caseStudy?.caseStudyCardData?.title}</h3>
                <p className="text-xs dark:text-secondary text-black mt-2">{caseStudy?.caseStudyCardData?.description}</p>
              </div>
            </Link>
          ))}
            </div>
          </section>
        )
      }

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