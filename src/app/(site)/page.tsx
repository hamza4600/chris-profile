import { generateHomePageSchema } from "@/components/Schema";
import { authorSchema } from "@/components/Schema";
import SchemaOrg from "@/components/Schema/SchemaOrg";
import HomePageBlogSec from "@/components/section/HomePageBlogSec";
import IconAutoScroll from "@/components/section/IconAutoScroll";
import IntroSection from "@/components/section/IntroSection1";
import { IndustrySection } from "@/components/section/services/IndustrySection";
import ServicesSection2 from "@/components/section/services/Services";
import Testimonial from "@/components/section/testimonial";
import { domainURL } from "@/constants";
import { getHomePageData, getHomePageSeoData } from "@/sanity/lib/homePage";
import { Metadata } from "next";

import dynamic from "next/dynamic";
const ParallaxSection = dynamic(() => import("@/components/section/ParallexSec"));
const SkillsSection = dynamic(() => import("@/components/section/SkillsSection"));
const ExperienceSection = dynamic(() => import("@/components/section/ExperienceSection"));
const FAQSection = dynamic(() => import("@/components/section/FAQSection"));

export const metadata: Metadata = {
  title: "Full Stack Developer | AI, Web3 & E-commerce Solutions - Chris Castanuela",
  description: "Discover Chris Castanuela's expertise in crafting innovative digital solutions, blending design with technology to elevate startups and brands.",
  keywords: "Full Stack Development, AI Development, E-Commerce Development, SAAS Development, web development, Legal and Law",
  alternates: {
    types: {
      'application/rss+xml': `${domainURL}/feed.xml`,
    },
  },
  authors: [{ name: "Chris Castanuela", url: domainURL }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Chris Castanuela | Building Digital Success Stories | Full Stack & AI Expert",
    description:  "Your vision, my code - Creating powerful digital experiences that drive growth. Join 20+ satisfied clients who've transformed their online presence.",
    url: domainURL,
    siteName: "Chris Castanuela's Portfolio",
    images: [
      {
        url: `https://avatars.githubusercontent.com/u/62910433`,
        width: 1800,
        height: 945,
        alt: "Chris Castanuela - Web Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Castanuela | Building Digital Success Stories | Full Stack & AI Expert",
    description: "Your trusted partner in creating powerful web solutions & AI innovations that drive real business growth.",
    images: [`https://avatars.githubusercontent.com/u/62910433`],
    creator: "@chris_castanuela",
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
    <main className="min-h-screen w-full">
      <SchemaOrg schemas={schemas} />
      <IntroSection 
        title={heroSection.heading} 
        description={heroSection.subheading} 
        heroImage={heroSection.heroImage}
      />
      <div className="max-w-7xl mx-auto">
      <section className="md:pb-8 pb-4 px-6 pt-6 md:pt-8 sm:px-8">
        <IconAutoScroll />
      </section>
      <ServicesSection2 />
      <IndustrySection />
      <ParallaxSection 
        sectionTitle={caseStudiesSection.sectionTitle}
        caseStudies={caseStudiesSection.featuredCaseStudies} 
        />
      {/* <Testimonial /> */}
      <SkillsSection />
      <HomePageBlogSec blogs={blogsSection} />
      <ExperienceSection />
      <FAQSection 
        sectionTitle={faqSection.sectionTitle}
        faqItems={faqSection.faqItems}
        />
        </div>
    </main>
  );
}
