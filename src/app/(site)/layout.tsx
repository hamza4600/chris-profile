import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Viewport } from 'next'
import { domainURL } from "@/constants";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk"
});

export const metadata: Metadata = {
  // title: "Hamza Khan | Full Stack Developer & Designer",
  // description: "Experienced web developer and designer specializing in creating beautiful, responsive, and user-friendly websites. Proficient in React, Next.js, TypeScript, and modern web technologies. Passionate about crafting digital experiences that blend creativity with functionality.",
  alternates: {
    types: {
      'application/rss+xml': `${domainURL}/feed.xml`,
    },
  },
  // keywords: "Full Stack Developer, Web Developer, Web Designer, React, Next.js, TypeScript, frontend development, UI/UX design",
  authors: [{ name: "Hamza Khan", url: domainURL }],
  icons: {
    icon: "/icon.png",
  },
  // openGraph: {
  //   title: "Hamza Khan | Full Stack Developer & Designer",
  //   description: "Experienced full stack developer and designer specializing in creating beautiful, responsive, and user-friendly websites. Proficient in React, Next.js, TypeScript, and modern web technologies.",
  //   url: domainURL,
  //   siteName: "Hamza Khan's Portfolio",
  //   images: [
  //     {
  //       url: `${domainURL}/hamza.jpg`,
  //       width: 1800,
  //       height: 945,
  //       alt: "Hamza Khan - Web Developer & Designer",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Khan | Full Stack Developer & Designer",
    description: "Experienced full stack developer and designer specializing in creating beautiful, responsive, and user-friendly websites.",
    images: [`${domainURL}/hamza.jpg`],
    creator: "@hamza4600",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // we have dark and light what to do 
}

const satoshiVariable = localFont({
  src: [
    {
      path: "../../fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Black.woff2",
      style: "black",
      weight: "900",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Bold.woff2",
      style: "bold",
      weight: "700",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Light.woff2",
      style: "light",
      weight: "300",
    },
    {
      path: "../../fonts/satoshi/Satoshi-Medium.woff2",
      style: "medium",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Layout rendered");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshiVariable.variable} ${hankenGrotesk.variable} font-sans`}>
        <link rel="icon" href="/icon.png" />
        <main id="main" className="flex flex-nowrap font-satoshi overflow-visible flex-col items-center justify-start dark:bg-black bg-[#ffffff]">
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
      <GoogleAnalytics gaId="G-QW2SED8TZZ" />
    </html>
  );
}
