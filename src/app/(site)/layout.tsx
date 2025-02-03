import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import type { Viewport } from 'next'
import { domainURL, googleSiteVerification } from "@/constants";
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk"
});

export const metadata: Metadata = {
  alternates: {
    types: {
      'application/rss+xml': `${domainURL}/feed.xml`,
    },
  },
  authors: [{ name: "Hamza Khan", url: domainURL }],
  icons: {
    icon: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Khan | Building Digital Success Stories | Full Stack & AI Expert",
    description: "Your trusted partner in creating powerful web solutions & AI innovations that drive real business growth.",
    images: [`${domainURL}/hamza.jpg`],
    creator: "@hamza4600",
  },
  // Add verification here
  verification: {
    google: googleSiteVerification,
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

  return (
    <html suppressHydrationWarning>
      <body className={`${satoshiVariable.variable} ${hankenGrotesk.variable} font-sans`}>
        <link rel="icon" href="/icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <main id="main" className="flex flex-nowrap font-satoshi overflow-visible flex-col items-center justify-start dark:bg-black bg-[#ffffff]">
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
