"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Atoms/Button";
import Image from "next/image";
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${1 * index}%`]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="sticky top-0 h-screen flex max-w-[1080px] mx-auto w-full items-center justify-center lg:px-8 px-4"
    >
      {children}
    </motion.div>
  );
};

const ParallaxSection: React.FC = () => {
  const items = [
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
    },
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
    },
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
    },
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
    },
  ];

  return (
    <div className="relative h-[400vh]">
      {items.map((item, index) => (
        <ParallaxItem key={index} index={index}>
          <div className="bg-[#0f151f] px-8 w-full max-w-[1080px] h-fit rounded-[24px] shadow-md py-[60px] opacity-100 md:px-10">
            <div className="flex justify-between max-lg:flex-col">
              <div className="flex flex-col lg:justify-between h-full lg:min-h-[380px] lg:max-w-[480px] w-full">
                <div>
                  <p className="dark:text-tertiary text-[#000000] md:text-[30px] text-[26px] -tracking-[0.5px] leading-[1.4em]">
                    {item.title}
                  </p>
                  <p className="dark:text-secondary mt-2.5 text-[#000000] md:text-[18px] leading-[1.4em] -tracking-[0.3px]">
                    {item.description}
                  </p>
                </div>

                <Button className="max-w-[160px] max-lg:mt-6">View Case Study</Button>
              </div>
              <div className="flex flex-col items-start justify-start gap-6 max-lg:mt-12">
                <img
                    style={{
                      objectPosition: "center center",
                      imageRendering: "auto",
                    }}
                  className="lg:max-w-[420px] w-full lg:min-h-[240px] max-w-[279px] min-h-[200px] object-cover rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
                {/* <div className="flex flex-col gap-2"> */}
                <div className="flex items-center md:gap-16 flex-row w-full max-w-full gap-3">
                  <p className="flex gap-3 flex-col">
                    <span className="dark:text-primary text-[#000000 md:text-[20px] text-[18px] leading-[1.4em] -tracking-[0.5px]">
                      Engagement
                    </span>
                    <span className="dark:text-primary text-[#000000] md:text-[42px] font-medium text-[32px]">
                      {item.rate}
                    </span>
                  </p>
                  <p className="flex gap-3 flex-col">
                    <span className="dark:text-primary text-[18px] text-[#000000] md:text-[20px] leading-[1.4em] -tracking-[0.5px]">
                      User Satisfaction
                    </span>
                    <span className="dark:text-primary text-[#000000] md:text-[42px] font-medium text-[32px]">
                      {item.review}
                    </span>
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </ParallaxItem>
      ))}
    </div>
  );
};

export default ParallaxSection;
