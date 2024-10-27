import ExperienceSection from "@/components/section/ExperienceSection";
import FAQSection from "@/components/section/FAQSection";
import IconAutoScroll from "@/components/section/IconAutoScroll";
import IntroSection1 from "@/components/section/IntroSection1";
import ParallaxSection from "@/components/section/ParallexSec";
import ShinningSectionText from "@/components/section/ShinningSectionText";
import SkillsSection from "@/components/section/SkillsSection";
import { getAllCaseStudies } from "@/sanity/lib/caseStudy";

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

export const revalidate = 3000;
export default async function Home() {
  
  const caseStudies = await getAllCaseStudies();

  return (
    <main className="min-h-screen w-full max-w-[1080px]">
      <IntroSection1 
        title="Elevate Your Vision: Where Design Meets Digital Brilliance" 
        description="Helping startups and brands to craft expressive and engaging solutions for their software needs." 
      />
      <section className="md:pb-8 pb-4 px-6 pt-6 md:pt-8 sm:px-8">
        <IconAutoScroll icons={icons} />
      </section>
      <ShinningSectionText />
      <ParallaxSection caseStudies={caseStudies} />
      <SkillsSection />
      <ExperienceSection />
      <FAQSection />
    </main>
  );
}
