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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5FJBNN3T');
            `,
          }}
        />
        {/* End Google Tag Manager */}
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
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-5FJBNN3T"
          height="0" 
          width="0" 
          style={{display: "none", visibility: "hidden"}}
        />
      </noscript>
    </html>
  )
}