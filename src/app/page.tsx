import IntroSection1 from "@/components/section/IntroSection1";
import SkillsSection from "@/components/section/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-[1080px]">
      <IntroSection1 />
      <SkillsSection />
    </main>
  );
}
