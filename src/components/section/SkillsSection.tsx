import React from "react";
import { skills } from "@/constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="md:pb-20 w-full pt-8 md:mt-20 max-w-[1080px] mx-auto px-4 sm:px-8 pb-8 ">
    <div className="flex flex-col sm:gap-12 gap-8 max-md:items-center max-md:justify-center">
      <h1 className="dark:text-primary text-[#000000] md:text-[38px] text-[30px] leading-[1.2em] -tracking-[0.5px]">
        Skills
      </h1>
      <div className="flex gap-3 flex-wrap max-md:justify-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            aria-label={skill.name}
            className="px-3 py-2 font-medium border border-[#e6e6e6] dark:border-[#ffffff33] rounded-[8px] dark:text-primary text-[#000000]"
          >
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default SkillsSection;
