import React from "react";
import { experience } from "@/constants";

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-[1080px] mx-auto pt-[32px] pb-[32px] sm:pb-[64px] px-6 sm:px-8">
      <div className="flex flex-col sm:gap-12 gap-8">
        <h1 className="dark:text-primary max-md:text-center font-satoshi text-black md:text-[38px] text-[30px] leading-[1.2em] -tracking-[0.5px]">
          Experience
        </h1>
        <div className="flex flex-col gap-4">
          {experience.map((exp, idx) => (
            <div 
            className="flex flex-col gap-4 font-hanken border-b border-[#e6e6e6] dark:border-[#ffffff33] pb-4"
              key={idx}
            >
              <div className="flex justify-between items-center max-md:gap-4">
                <h2 className="dark:text-primary text-black md:text-[32px] text-[20px] leading-[1.2em] -tracking-[0.5px] font-hanken">
                  {exp.name}
                </h2>
                <div className="flex flex-col gap-2 max-md:gap-4 max-md:items-center items-end">
                  <p className="dark:text-primary text-black md:text-[32px] text-[20px] leading-[1.2em] -tracking-[0.5px]">
                    {exp.position}
                  </p>
                  <span className="dark:text-primary text-black md:text-[18px] text-[14px] leading-[1.2em] -tracking-[0.5px]">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
