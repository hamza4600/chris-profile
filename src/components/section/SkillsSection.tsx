import React from "react";
import { skills } from "@/constants";

const SkillsSection = () => {
  return (
    <div className="md:pb-20 w-full pt-8 md:mt-20 max-w-[1080px] mx-auto px-8 pb-16">

    <div className="flex flex-col gap-12 max-md:items-center max-md:justify-center">
      <p className="dark:text-primary text-[#000000] md:text-[38px] text-[30px] leading-[1.2em] -tracking-[0.5px]">
        Skills
      </p>
      <div className="flex gap-3 flex-wrap max-md:justify-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="px-3 py-2 font-medium border border-[#e6e6e6] dark:border-[#ffffff33] rounded-[8px] dark:text-primary text-[#000000]"
          >
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SkillsSection;
