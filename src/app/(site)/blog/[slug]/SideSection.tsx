/* eslint-disable @next/next/no-img-element */
import React from 'react'

// Dummy recent posts data
const recentPosts = [
  {
    id: 1,
    title: "Embracing New Technologies",
    date: "Aug 24, 2023",
    author: {
      name: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  },
  {
    id: 2, 
    title: "Future Expectations: Testing Methodologies",
    date: "Aug 20, 2023",
    author: {
      name: "Mike Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  },
  {
    id: 3,
    title: "Tips & Tricks to debug your codebase",
    date: "Aug 18, 2023",
    author: {
      name: "Alex Rivera",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  }
]

// Dummy topics data with post counts
const topics = [
  { name: "health", count: 23 },
  { name: "lifestyle", count: 19 },
  { name: "travel", count: 14 },
  { name: "tech", count: 31 },
  { name: "culture", count: 27 }
]

export default function SideSection() {
  return (
    <aside className="space-y-8">
      {/* Recent Posts Section */}
      <section className="border p-4 rounded-xl border-gray-200 dark:border-gray-800 pb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-primary text-black">Recent Posts</h2>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <div key={post.id} className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-secondary">
                <img 
                  src={post.author.image} 
                  alt={post.author.name}
                  className="object-cover h-10 w-10"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium dark:text-primary text-black">{post.title}</h3>
                <p className="text-xs dark:text-secondary text-black">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Topics Section */}
      <section className="border p-4 rounded-xl border-gray-200 dark:border-gray-800 pb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-primary text-black">Explore Topics</h2>
        <div className="space-y-2">
          {topics.map(topic => (
            <div key={topic.name} className="flex items-center justify-between">
              <span className="text-sm capitalize dark:text-primary text-black">{topic.name}</span>
              <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs flex items-center justify-center">
                {topic.count}
              </span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  )
}