/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "../Atoms/Button";
import Link from "next/link";
import { BlueTick, caseStudies } from "./data";

interface ParallaxItemProps {
  children: React.ReactNode;
  index: number;
}

// https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048

const ParallaxItem: React.FC<ParallaxItemProps> = ({ children, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = useTransform(scrollYProgress, [0, 1], ["0%", `${10 * index}%`]);
  const y = useSpring(yRange, { stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="sticky top-0 sm:top-20 md:h-[70vh] h-[100vh] flex max-w-[1080px] mx-auto w-full items-center justify-center lg:px-8 px-4"
    >
      {children}
    </motion.div>
  );
};
interface CardProps {
  item: {
    industry: string;
    title: string;
    description: string;
    image: string;
    rate: string;
    review: string;
    link: string;
    tags: string[];
  };
}

const Card: React.FC<CardProps> = ({ item }) => (
  <Link
      href={item.link}
      className={`w-full max-w-[1080px] rounded-[24px] shadow-md opacity-100 md:px-10 px-4 md:py-[60px] py-[20px] dark:bg-gradient-to-b dark:from-[#091319] dark:to-[#0F0F0F] bg-[#fbfbfb] text-white dark:text-white border dark:border-white/[0.14] border-gray-200 `}
    >
      <div className="flex justify-between max-md:flex-col">
        <CardContent item={item} />
        <CardMedia item={item} />
      </div>
    </Link>
);
const CardContent: React.FC<CardProps> = ({ item }) => (
  <div className="flex flex-col lg:justify-between h-full lg:min-h-[380px] lg:max-w-[480px] w-full">
  <div>
    <h3 className={`md:text-[20px] text-[16px] mb-2 w-fit rounded-full px-3 py-1 
      dark:bg-[hsla(0,0%,10%,1)] bg-[#fbfbfb] dark:text-primary text-black border dark:border-white/[0.14] border-gray-200
    `}>
      {item.industry}
    </h3>
    <h1 className="md:text-[30px] text-[20px] sm:text-[26px] -tracking-[0.5px] sm:leading-[1.4em] dark:text-white text-black">
      {item.title}
    </h1>
    <p className="mt-2.5 md:text-[18px] dark:text-primary text-black">
      {item.description}
    </p>
    <div className="flex flex-col sm:gap-3 gap-2 mt-2.5">
      {item.tags.map((tag, index) => (
        <div className="flex items-center gap-2 rounded-full px-3 py-1 bg-[#fbfbfb] dark:bg-[hsla(0,0%,10%,1)] border dark:border-white/[0.14] border-gray-200 w-fit" key={index}>
          <BlueTick />
          <p key={index} className="md:text-[18px] dark:text-primary text-black ">{tag}</p>
        </div>
      ))}
    </div>
  </div>
  <Button className="hidden sm:block sm:max-w-[160px] sm:mt-6 mt-4 font-normal sm:font-medium text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 max-w-fit">
    <div className="text-white">View Case Study</div>
  </Button>
</div>
);

const CardMedia: React.FC<CardProps> = ({ item }) => (
  <div className="flex flex-col items-start justify-start gap-6 max-lg:mt-6">
    <div className="w-full max-w-full rounded-lg overflow-hidden">
      <img
        className="md:max-w-[420px] w-full md:min-h-[240px] min-h-[200px] object-cover"
        src={item.image}
        alt={item.title}
        style={{ objectPosition: "center center", imageRendering: "auto" }}
      />
    </div>
    <CardStats rate={item.rate} review={item.review} />
  </div>
);

interface CardStatsProps {
  rate: string;
  review: string;
}

const CardStats: React.FC<CardStatsProps> = ({ rate, review }) => (
  <div className="flex items-center md:gap-16 flex-row w-full max-w-full gap-3">
    <StatItem label="Engagement" value={rate} />
    <StatItem label="User Satisfaction" value={review} />
  </div>
);

interface StatItemProps {
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  
  return (
    <p className="flex sm:gap-3 gap-2 flex-col">
      <span className={`md:text-[20px] text-[18px] leading-[1.4em] -tracking-[0.5px] text-black dark:text-primary`}>
        {label}
      </span>
      <span className={`md:text-[42px] font-medium text-[30px] text-black dark:text-primary`}>
        {value}
      </span>
    </p>
  );
};
const ParallaxSection: React.FC = () => {
  return (
    <section id="work" className="relative font-satoshi flex flex-col gap-8">
      {caseStudies.map((item, index) => (
        <ParallaxItem key={index} index={index}>
          <Card item={item} />
        </ParallaxItem>
      ))}
    </section>
  );
};

export default ParallaxSection;
