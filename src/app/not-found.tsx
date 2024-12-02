'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 px-4">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* 404 Large Number */}
          <motion.h1 
            className="text-[150px] md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 leading-tight"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
          >
            404
          </motion.h1>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 dark:text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              The page you&apos;re looking for seems to have wandered off into the digital wilderness. 
              Let&apos;s get you back on track!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/"
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 
                transition-all duration-300 transform hover:scale-105 shadow-lg 
                hover:shadow-primary/20 flex items-center gap-2 font-medium"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
              Return Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}