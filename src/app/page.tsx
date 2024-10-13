import ExperienceSection from "@/components/section/ExperienceSection";
import FAQSection from "@/components/section/FAQSection";
import IconAutoScroll from "@/components/section/IconAutoScroll";
import IntroSection1 from "@/components/section/IntroSection1";
import ParallaxSection from "@/components/section/ParallaxSection";
import ShinningSectionText from "@/components/section/ShinningSectionText";
import SkillsSection from "@/components/section/SkillsSection";
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

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-[1080px]">
      <IntroSection1 />
      <section className="md:pb-8 pb-4 px-8 pt-16">
        <IconAutoScroll icons={icons} />
      </section>
      <ShinningSectionText />
      <ParallaxSection />
      <SkillsSection />
      <ExperienceSection />
      <FAQSection />
    </main>
  );
}
