/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Atoms/Button";
import Image from "next/image";

// bg-gradient-to-r from-gray-800 via-gray-900 to-black
const IntroSection1 = () => {
  return (
    <div className="pt-6 md:pt-24 md:pb-20 pb-6 px-8 max-w-[1800px] mx-auto">
      <div className="flex flex-col items-center justify-center gap-9">
        <div className="flex flex-col gap-6 items-center justify-center relative">
          <div className="w-[90px] h-[90px] mb-4 rounded-full overflow-hidden relative sm:w-[100px] sm:h-[100px]">
            <Image
              src="/hamza.jpg"
              alt="Hamza's avatar"
              className="object-cover object-top"
              fill
              sizes="108px"
              quality={100}
              priority
            />
          </div>
          <button className="absolute top-[5rem] text-[12px] sm:text-[14px] px-2 py-1 sm:px-3 sm:py-2 dark:bg-secondary bg-primary rounded-md text-primary dark:text-black font-medium font-inter sm:top-[5.5rem]">
            Verified Expert
          </button>
          <div className="flex flex-col gap-6 items-center justify-center max-md:text-center max-w-[600px]">
            <h1 className="text-[36px] sm:text-5xl  dark:text-primary text-quaternary text-shadow-lg text-center leading-[42px] sm:leading-[55px]">Designed for Designers to showcase their work</h1>
            <p className="text-[20px] sm:text-2xl dark:text-secondary text-quaternary text-center max-w-[500px]">Helping startups and brands to craft expressive and engaging solutions for their software needs.</p>
          </div>
        </div>
        <div className="flex gap-3 items-center flex-row">
          <Button size="large" className="font-normal">
            Download CV
          </Button>
          <Button size="large" className="font-normal">
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection1;
