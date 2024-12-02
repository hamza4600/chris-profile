/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Atoms/Button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
// import HappyClient from "./HappyClient";
// import { calendlyUrl } from "@/constants";
import {useTranslations} from 'next-intl';

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
  const t = useTranslations('common');

  console.log(t("welcome"));
  return (
    <div className="pt-6 md:pt-24 md:pb-16 pb-10 px-8 max-w-[1800px] mx-auto">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-9">
        <div className="flex flex-col gap-6 items-center justify-center relative">
          <div className="w-[90px] h-[90px] mb-4 rounded-full overflow-hidden relative sm:w-[100px] sm:h-[100px]">
            <Image
              src={ urlFor(heroImage).url() }
              alt="Hamza's avatar"
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
            <h1 className="text-[30px] sm:text-5xl  dark:text-primary text-quaternary text-shadow-lg text-center leading-[42px] sm:leading-[55px]">{title}</h1>
            <p className="text-[18px] sm:text-2xl dark:text-secondary text-quaternary text-center max-w-full sm:max-w-[500px]">{description}</p>
          </div>
        </div>
        {/* <HappyClient /> */}
        <div className="flex gap-3 items-center flex-row">
          {/* it will be work page  */}
          {/* <a href="/#work"> 
            <Button size="large" className="font-normal text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
              See my work
            </Button>
          </a> */}
          {/* <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button size="large" className="font-normal text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
            Contact me
          </Button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
