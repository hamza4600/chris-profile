import { generateHomePageSchema } from "@/components/Schema";
import { authorSchema } from "@/components/Schema";
import SchemaOrg from "@/components/Schema/SchemaOrg";
import HomePageBlogSec from "@/components/section/HomePageBlogSec";
import IconAutoScroll from "@/components/section/IconAutoScroll";
import IntroSection from "@/components/section/IntroSection1";
import { IndustrySection } from "@/components/section/services/IndustrySection";
import ServicesSection2 from "@/components/section/services/Services";
// import ShinningSectionText from "@/components/section/ShinningSectionText";
import Testimonial from "@/components/section/testimonial";
import { domainURL } from "@/constants";
import { getHomePageData, getHomePageSeoData } from "@/sanity/lib/homePage";
import { Metadata } from "next";

import dynamic from "next/dynamic";
const ParallaxSection = dynamic(() => import("@/components/section/ParallexSec"));
const SkillsSection = dynamic(() => import("@/components/section/SkillsSection"));
const ExperienceSection = dynamic(() => import("@/components/section/ExperienceSection"));
const FAQSection = dynamic(() => import("@/components/section/FAQSection"));
// const ServicesSection = dynamic(() => import("@/components/section/services"));

// import { urlFor } from "@/sanity/lib/image";
// import { Metadata } from "next";

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
  title: "Full Stack Developer | AI, Web3 & E-commerce Solutions - Hamza Khan",
  description: "Discover Hamza Khan's expertise in crafting innovative digital solutions, blending design with technology to elevate startups and brands.",
  keywords: "Full Stack Development, AI Development, E-Commerce Development, SAAS Development, web development, Legal and Law",
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

export const revalidate = 600;

export default async function Home() {
  
  const homePageData = await getHomePageData();
  const { heroSection, caseStudiesSection, faqSection, blogsSection} = homePageData;

  const schemas = [
    generateHomePageSchema(homePageData),
    authorSchema,
  ]

  return (
    <main className="min-h-screen w-full max-w-7xl">
      <SchemaOrg schemas={schemas} />
      <IntroSection 
        title={heroSection.heading} 
        description={heroSection.subheading} 
        heroImage={heroSection.heroImage}
      />
      <section className="md:pb-8 pb-4 px-6 pt-6 md:pt-8 sm:px-8">
        <IconAutoScroll />
      </section>
      {/* <ShinningSectionText /> */}
      {/* <ServicesSection /> */}
      <ServicesSection2 />
      <IndustrySection />
      <ParallaxSection 
        sectionTitle={caseStudiesSection.sectionTitle}
        caseStudies={caseStudiesSection.featuredCaseStudies} 
      />
      <Testimonial />
      <SkillsSection />
      <HomePageBlogSec blogs={blogsSection} />
      {/* <ExperienceSection /> */}
      <FAQSection 
        sectionTitle={faqSection.sectionTitle}
        faqItems={faqSection.faqItems}
      />
    </main>
  );
}
