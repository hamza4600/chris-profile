/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { case_study } from "@/assets/case_study.json";
import { usePathname } from "next/navigation";

const Index = () => {
  // console.log("Case Study", case_study)
  const pathname = usePathname();
  const case_study_name = pathname.split("/")[2];
  const case_study_data = case_study.find(
    (item) => item.url === case_study_name
  );
  console.log("Case Study Data", case_study_data);
  return (
    <div className="min-h-screen mx-auto">
      <div className="max-w-[800px] mx-auto p-8">
        <p className="text-2xl text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-primary text-[#000000] md:text-[46px] leading-[1.2em]">
          {case_study_data?.title}
        </p>
        <p className="text-base text-start max-w-[720px] font-normal -tracking-[0.5px] dark:text-primary text-[#000000] md:text-[24px] mt-8 leading-[1.4em]">
          {case_study_data?.description}
        </p>
      </div>
      <img
        src={case_study_data?.image}
        alt={case_study_data?.title}
        style={{
          imageRendering: "auto",
          objectPosition: "center center",
        }}
        className="md:w-[1000px] mb-12 rounded-2xl md:h-[529px] object-cover mt-12"
      />
      <div className="flex justify-center gap-8 p-8 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-6">
          <div className="">
            <p className="text-[14px] text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-primary text-[#000000] md:text-[18px] leading-[1.2em]">
              Headquaters
            </p>
            <p className="text-[14px] mt-2 text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-secondary text-[#000000] md:text-[20px] leading-[1.2em]">
              {case_study_data?.location.city}
            </p>
          </div>

          <div className="">
            <p className="text-[14px] text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-primary text-[#000000] md:text-[18px] leading-[1.2em]">
              Headquaters
            </p>
            <p className="text-[14px] mt-2 text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-secondary text-[#000000] md:text-[20px] leading-[1.2em]">
              {case_study_data?.location.city}
            </p>
          </div>
          <div className="">
            <p className="text-[14px] text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-primary text-[#000000] md:text-[18px] leading-[1.2em]">
              Headquaters
            </p>
            <p className="text-[14px] mt-2 text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-secondary text-[#000000] md:text-[20px] leading-[1.2em]">
              {case_study_data?.location.city}
            </p>
          </div>

          <div className="">
            <p className="text-[14px] text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-primary text-[#000000] md:text-[18px] leading-[1.2em]">
              Headquaters
            </p>
            <p className="text-[14px] mt-2 text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-secondary text-[#000000] md:text-[20px] leading-[1.2em]">
              {case_study_data?.location.city}
            </p>
          </div>

          <div className="">
            <p className="text-[14px] text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-primary text-[#000000] md:text-[18px] leading-[1.2em]">
              Headquaters
            </p>
            <p className="text-[14px] mt-2 text-start max-w-[600px] font-medium -tracking-[0.5px] dark:text-secondary text-[#000000] md:text-[20px] leading-[1.2em]">
              {case_study_data?.location.city}
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-[470px] flex flex-col gap-3 pb-12">
            <p className="md:text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
              Challenge
            </p>
            <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
              {case_study_data?.location?.challenge}
            </p>
          </div>
          <div className="max-w-[470px] flex flex-col gap-3 pb-12">
            <p className="md:text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
              Result
            </p>
            <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
              {case_study_data?.location?.result}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto p-8">
        <p className="text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
          Process
        </p>
        <div className="flex flex-col gap-8 mt-5">
          <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
            <span className="font-bold text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
              Research:
            </span>{" "}
            {case_study_data?.process?.research}
          </p>

          <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
            <span className="font-bold text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
              Design:
            </span>{" "}
            {case_study_data?.process?.design}
          </p>

          <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
            <span className="font-bold text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
              Development:
            </span>{" "}
            {case_study_data?.process?.development}
          </p>

          <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
            <span className="font-bold text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
              Testing:
            </span>{" "}
            {case_study_data?.process?.testing}
          </p>

          <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
            <span className="font-bold text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
              Deployment:
            </span>{" "}
            {case_study_data?.process?.deployment}
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto py-16 px-8">
        <p className="text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
          Stack
        </p>

        <div className="flex flex-row gap-4 mt-5 bg-[#252523] rounded-[12px] p-4">
          {case_study_data?.stack?.icons.map((icon, index) => (
            <img src={icon} alt={`Icon ${index}`} className="max-w-[48px] min-h-[48px] object-covers w-full h-full" key={index} />
          ))}
        </div>
      </div>

      <div className="max-w-[800px] mx-auto pb-16 px-8">
        <p className="text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
          Conclusion
        </p>
        <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
          {case_study_data?.conclusion}
        </p>
      </div>
    </div>
  );
};

export default Index;
