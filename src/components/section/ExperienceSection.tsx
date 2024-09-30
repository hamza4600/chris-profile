import React from "react";
import { experience } from "@/constants";

const ExperienceSection = () => {
  return (
    <div className="max-w-[1080px] mx-auto md:pt-16 pt-[32px] pb-[94px] md:px-8">
      <div className="flex flex-col gap-12">
        <p className="dark:text-primary max-md:text-center font-satoshi text-black md:text-[38px] text-[30px] leading-[1.2em] -tracking-[0.5px]">
          Experience
        </p>
        <div className="flex flex-col gap-4">
          {experience.map((exp, idx) => (
            <div 
            className="flex flex-col gap-4 font-hanken border-b border-[#e6e6e6] dark:border-[#ffffff33] md:pb-6 md:pt-3 pt-1 pb-4"
              key={idx}
            >
              <div className="flex justify-between items-center max-md:flex-col max-md:gap-4">
                <p className="dark:text-primary text-black md:text-[32px] text-[20px] leading-[1.2em] -tracking-[0.5px] font-hanken">
                  {exp.name}
                </p>
                <div className="flex flex-col gap-2 max-md:gap-4 max-md:items-center">
                  <p className="dark:text-primary text-black md:text-[32px] text-[20px] leading-[1.2em] -tracking-[0.5px]">
                    {exp.position}
                  </p>
                  <p className="dark:text-primary text-black md:text-[18px] text-[14px] leading-[1.2em] -tracking-[0.5px]">
                    {exp.duration}
                  </p>
                </div>
              </div>
              {/* make this line thin as possible */}
              {/* <div className="h-[1px] relative overflow-hidden w-full bg-random !opacity-90" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
