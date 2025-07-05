import type { Metadata } from "next";
import { Providers } from "./providers";
import type { Viewport } from 'next'
import { domainURL, googleSiteVerification } from "@/constants";
import Footer from '@/components/footer';
import NavbarWrapper from "@/components/navbar/NavbWrapper";

export const metadata: Metadata = {
  alternates: {
    types: {
      'application/rss+xml': `${domainURL}/feed.xml`,
    },
  },
  authors: [{ name: "Chris Castanuela", url: domainURL }],
  icons: {
    icon: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Castanuela | Building Digital Success Stories | Full Stack & AI Expert",
    description: "Your trusted partner in creating powerful web solutions & AI innovations that drive real business growth.",
    images: [`${domainURL}/hamza.jpg`],
    creator: "@chris_castanuela",
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
      "max-image-preview": "large",
    },
  },
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main id="main" className="flex flex-nowrap font-satoshi overflow-visible flex-col items-center justify-start dark:bg-black bg-[#ffffff]">
      <Providers>
        <NavbarWrapper />
        {children}
        <Footer />
      </Providers>
    </main>
  );
}
