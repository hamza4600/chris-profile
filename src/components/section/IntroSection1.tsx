/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Atoms/Button";
import Image from "next/image";
import HappyClient from "./HappyClient";
import Navbar from "../navbar";

export const AIDevelopmentBadge = () => {
  return (
    <span className="
      inline-flex justify-between items-center
      w-[236px] h-8 px-4 py-1
      text-sm font-medium leading-6
      text-[#131426] dark:text-white
      rounded-[20px] pointer-events-none
      bg-gradient-to-r from-[rgba(255,189,18,0.12)] via-[rgba(224,61,61,0.12)] to-[rgba(205,33,233,0.12)]
      dark:from-[rgba(255,189,18,0.2)] dark:via-[rgba(224,61,61,0.2)] dark:to-[rgba(205,33,233,0.2)]
    ">
      Now developing faster with AI
    </span>
  );
};

interface IntroSection1Props {
  title: string;
  description: string;
  heroImage: {
    asset: {
      url: string;
    };
  };
}

const IntroSection = ({ title, description, heroImage }: IntroSection1Props) => {

  return (
    <div className="w-full">
      <div className="px-8 max-w-[1800px] mx-auto relative min-h-[500px]">
        <div className="relative z-10">
          <Navbar />
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-9 pt-6 md:pt-24 md:pb-16 pb-10">
            <div className="flex flex-col gap-6 items-center justify-center relative">
              <div className="w-[90px] h-[90px] mb-4 rounded-full overflow-hidden relative sm:w-[100px] sm:h-[100px]">
                <Image
                  src={ "/chris.png" }
                  alt="Chris's avatar"
                  className="object-cover object-top"
                  fill
                  sizes="108px"
                  quality={100}
                  priority
                />
              </div>
              <button className="absolute top-[5rem] text-[12px] sm:text-[14px] px-2 py-1 dark:bg-secondary bg-primary rounded-md text-primary dark:text-black font-medium font-inter sm:top-[5.5rem]">
                Verified Expert
              </button>
              <div className="flex flex-col gap-6 items-center justify-center max-md:text-center max-w-full sm:max-w-[600px]">
                <h1 className="text-[30px] sm:text-5xl dark:text-primary text-quaternary text-shadow-lg text-center leading-[42px] sm:leading-[55px]">{title}</h1>
                <p className="text-[18px] sm:text-2xl dark:text-secondary text-quaternary text-center max-w-full sm:max-w-[500px]">{description}</p>
              </div>
            </div>
            <AIDevelopmentBadge />
            <HappyClient />
            <div className="flex gap-3 items-center flex-row">
              <a href="/#work"> 
                <Button size="large" className="font-normal text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
                  See my work
                </Button>
              </a>
             
              <a
                href="mailto:chris.devworks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-me-btn"
                data-gtm="contact-me-btn1"
              >
                <Button size="large" className="font-normal text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
                  Contact me
                </Button>
              </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
