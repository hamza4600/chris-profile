import { generateHomePageSchema } from "@/components/Schema";
import { authorSchema } from "@/components/Schema";
import SchemaOrg from "@/components/Schema/SchemaOrg";
import IconAutoScroll from "@/components/section/IconAutoScroll";
import IntroSection from "@/components/section/IntroSection1";
import ShinningSectionText from "@/components/section/ShinningSectionText";
import { domainURL } from "@/constants";
import { getHomePageData, getHomePageSeoData } from "@/sanity/lib/homePage";
import { Metadata } from "next";

import dynamic from "next/dynamic";
const ParallaxSection = dynamic(() => import("@/components/section/ParallexSec"));
const SkillsSection = dynamic(() => import("@/components/section/SkillsSection"));
const ExperienceSection = dynamic(() => import("@/components/section/ExperienceSection"));
const FAQSection = dynamic(() => import("@/components/section/FAQSection"));

// import { urlFor } from "@/sanity/lib/image";
// import { Metadata } from "next";

const icons = [
  "https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
  "https://framerusercontent.com/images/ZCcbDAFfIHYrHLOqtVLKQXAIGY.png",
  "https://framerusercontent.com/images/PFfPRPqCnleo77thxuLEpUUjB0.png",
  "https://framerusercontent.com/images/Qs7RpNfTc6MXJVwxIY8QzQDhQ.png",
  "https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
  "https://framerusercontent.com/images/T9PpAagNI1pVt63DYJjSH5ViE.png",
  "https://framerusercontent.com/images/neJyiCkJGsL33q9aEvjzzHMKHo.png",
  "https://framerusercontent.com/images/9BXsOCAIoUWa18SOvVKxbkahg.png",
  "https://framerusercontent.com/images/UhyrGjyOSvUkVZWBmysfZCg6s4.png",
  "https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
  "https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
  "https://framerusercontent.com/images/ZCcbDAFfIHYrHLOqtVLKQXAIGY.png",
  "https://framerusercontent.com/images/PFfPRPqCnleo77thxuLEpUUjB0.png",
  "https://framerusercontent.com/images/Qs7RpNfTc6MXJVwxIY8QzQDhQ.png",
  "https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
  "https://framerusercontent.com/images/T9PpAagNI1pVt63DYJjSH5ViE.png",
  "https://framerusercontent.com/images/neJyiCkJGsL33q9aEvjzzHMKHo.png",
  "https://framerusercontent.com/images/9BXsOCAIoUWa18SOvVKxbkahg.png",
  "https://framerusercontent.com/images/UhyrGjyOSvUkVZWBmysfZCg6s4.png",
  "https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
]

// export async function generateMetadata(
//   { params }: { params: { case_study: string } }
// ): Promise<Metadata> {

//   const seoData = await getHomePageSeoData();

//   return {
//     title: seoData?.seo.metaTitle || 'Home',
//     description: seoData?.seo.metaDescription || 'A detailed case study of our work',
//     keywords: seoData?.seo.keywords || '',
//     openGraph: {
//       title: seoData?.seo.metaTitle || 'Home',
//       description: seoData?.seo.metaDescription || 'A detailed case study of our work',
//       images: [{ url: seoData?.seo.ogImage ? urlFor(seoData.seo.ogImage).url() : '' }],
//     },
//   };
// }

export const metadata: Metadata = {
  title: "Hamza Khan | Turning Ideas into Digital Reality | Full Stack & AI Developer",
  description: "Experienced full stack developer specializing in creating websites, e-commerce stores, SAAS products and AI solutions. Proficient in modern web technologies Full Stack Development , AI Development E-Commerce Development , SAAS Development.",
  keywords: "Full Stack Development, AI Development, E-Commerce Development, SAAS Development, web development",
  alternates: {
    types: {
      'application/rss+xml': `${domainURL}/feed.xml`,
    },
  },
  authors: [{ name: "Hamza Khan", url: domainURL }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Hamza Khan | Building Digital Success Stories | Full Stack & AI Expert",
    description:  "Your vision, my code - Creating powerful digital experiences that drive growth. Join 20+ satisfied clients who've transformed their online presence.",
    url: domainURL,
    siteName: "Hamza Khan's Portfolio",
    images: [
      {
        url: `${domainURL}/hamza.jpg`,
        width: 1800,
        height: 945,
        alt: "Hamza Khan - Web Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Khan | Building Digital Success Stories | Full Stack & AI Expert",
    description: "Your trusted partner in creating powerful web solutions & AI innovations that drive real business growth.",
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


export default async function Home() {
  
  const homePageData = await getHomePageData();
  const { heroSection, caseStudiesSection, skillsSection, experienceSection, faqSection} = homePageData;

  const schemas = [
    generateHomePageSchema(homePageData),
    authorSchema,
  ]

  return (
    <main className="min-h-screen w-full max-w-[1080px]">
      <SchemaOrg schemas={schemas} />
      <IntroSection 
        title={heroSection.heading} 
        description={heroSection.subheading} 
        heroImage={heroSection.heroImage}
      />
      <section className="md:pb-8 pb-4 px-6 pt-6 md:pt-8 sm:px-8">
        <IconAutoScroll icons={icons} />
      </section>
      <ShinningSectionText />
      <ParallaxSection 
        sectionTitle={caseStudiesSection.sectionTitle}
        caseStudies={caseStudiesSection.featuredCaseStudies} 
      />
      <SkillsSection />
      <ExperienceSection />
      <FAQSection 
        sectionTitle={faqSection.sectionTitle}
        faqItems={faqSection.faqItems}
      />
    </main>
  );
}
