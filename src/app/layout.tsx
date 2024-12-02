import './globals.css' // Import global styles
import { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-zinc-900 text-black dark:text-white">
        {children}
      </body>
      <GoogleAnalytics gaId="G-QW2SED8TZZ" />
    </html>
  )
}