/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "../Atoms/Button";
import Link from "next/link";
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
    backgroundColor: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => (
  <div
    className="bg-[#fbfbfb] w-full max-w-[1080px] rounded-[24px] shadow-md opacity-100 md:px-10 px-4 md:py-[60px] py-[30px]"
    style={{ backgroundColor: item.backgroundColor }}
  >
    <div className="flex justify-between max-md:flex-col">
      <CardContent item={item} />
      <CardMedia item={item} />
    </div>
  </div>
);
const CardContent: React.FC<CardProps> = ({ item }) => (
  <div className="flex flex-col lg:justify-between h-full lg:min-h-[380px] lg:max-w-[480px] w-full">
    <div>
      <h3 className="text-black md:text-[20px] text-[16px] leading-[1.4em] mb-2 font-medium bg-white w-fit rounded-full px-3 py-1">
        {item.industry}
      </h3>
      <h1 className="text-black md:text-[30px] text-[26px] -tracking-[0.5px] leading-[1.4em]">
        {item.title}
      </h1>
      <p className="mt-2.5 text-black md:text-[18px] leading-[1.4em] -tracking-[0.3px]">
        {item.description}
      </p>
    </div>
    <Button className="sm:max-w-[160px] sm:mt-6 mt-4 font-normal sm:font-medium text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 max-w-fit">
      <Link className="text-white" href={item.link}>View Case Study</Link>
    </Button>
  </div>
);

const CardMedia: React.FC<CardProps> = ({ item }) => (
  <div className="flex flex-col items-start justify-start gap-6 max-lg:mt-6">
    <div className="w-full max-w-full rounded-lg overflow-hidden">
      <img
        className="md:max-w-[420px] w-full max-md:min-h-[240px] min-h-[200px] object-cover"
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

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <p className="flex sm:gap-3 gap-2 flex-col">
    <span className="text-black md:text-[20px] text-[18px] leading-[1.4em] -tracking-[0.5px]">
      {label}
    </span>
    <span className="text-black md:text-[42px] font-medium text-[30px]">
      {value}
    </span>
  </p>
);

const ParallaxSection: React.FC = () => {
  const lightModeColors = [
    '#F0F4F8', // Light Blue Gray
    '#FEEAFA', // Light Pink
    '#E6F3EC', // Light Mint Green
    '#FFF4E6', // Light Peach
    '#F3E8FF', // Light Lavender
    '#E6F6FF', // Light Sky Blue
    '#FFF0F0', // Light Salmon
    '#F0FFF4', // Light Honeydew
    '#F5F5F5', // Light Gray
    '#E8E8E8', // Soft Gray
    '#F0EAE2', // Beige
    '#E6E6FA', // Lavender Mist
    '#F0F8FF', // Alice Blue
    '#F5FFFA', // Mint Cream
    '#FFF5EE', // Seashell
    '#F8F8FF', // Ghost White
    '#F0FFFF', // Azure
    '#F5F5DC', // Beige
    '#FAFAD2', // Light Goldenrod Yellow
    '#FAEBD7', // Antique White
  ];

  const getRandomColor = () => {
    return lightModeColors[Math.floor(Math.random() * (lightModeColors.length - 1))];
  };

  const items = [
    {
      industry: "Finance",
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/work/modernizing-a-subscription-management-platform-1"
    },
    {
      industry: "Finance",
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/work/modernizing-a-subscription-management-platform-2"
    },
    {
      industry: "Finance",
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/3"
    },
    {
      industry: "Finance",
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/4"
    },
  ].map(item => ({
    ...item,
    backgroundColor: getRandomColor(),
  }));

  return (
    <section id="work" className="relative font-satoshi flex flex-col gap-8">
      {items.map((item, index) => (
        <ParallaxItem key={index} index={index}>
          <Card item={item} />
        </ParallaxItem>
      ))}
    </section>
  );
};

export default ParallaxSection;
