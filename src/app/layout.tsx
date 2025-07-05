/* eslint-disable @next/next/next-script-for-ga */
import './globals.css' // Import global styles
import { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk"
});

const satoshiVariable = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Black.woff2",
      style: "black",
      weight: "900",
    },

    {
      path: "../fonts/satoshi/Satoshi-Bold.woff2",
      style: "bold",
      weight: "700",
    },

    {
      path: "../fonts/satoshi/Satoshi-Light.woff2",
      style: "light",
      weight: "300",
    },

    {
      path: "../fonts/satoshi/Satoshi-Medium.woff2",
      style: "medium",
      weight: "500",
    },

  ],
  variable: "--font-satoshi",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
      </head>
      <link rel="icon" href="/icon.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <body className={` dark:bg-zinc-900 text-black dark:text-white ${satoshiVariable.variable} ${hankenGrotesk.variable} font-sans`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-QW2SED8TZZ" />
    </html>
  )
}