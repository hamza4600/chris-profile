import { generateHomePageSchema } from "@/components/Schema";
import { authorSchema } from "@/components/Schema";
import SchemaOrg from "@/components/Schema/SchemaOrg";
import ExperienceSection from "@/components/section/ExperienceSection";
import FAQSection from "@/components/section/FAQSection";
import IconAutoScroll from "@/components/section/IconAutoScroll";
import IntroSection from "@/components/section/IntroSection1";
import ParallaxSection from "@/components/section/ParallexSec";
import ShinningSectionText from "@/components/section/ShinningSectionText";
import SkillsSection from "@/components/section/SkillsSection";
import { getHomePageData, getHomePageSeoData } from "@/sanity/lib/homePage";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";

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
