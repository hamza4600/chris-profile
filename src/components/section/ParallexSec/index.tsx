'use client';

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

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
    const y = useSpring(yRange, {
      stiffness: 100,
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

const ParallaxSection: React.FC<{ caseStudies: any[], sectionTitle: string }> = ({ caseStudies, sectionTitle }) => {
  return (
      <section id="work" className="relative font-satoshi flex flex-col gap-8">
        <h2 className="text-center text-3xl font-bold">{sectionTitle}</h2>
        {caseStudies.map((item, index) => (
          <ParallaxItem key={index} index={index}>
            <Card item={item} />
          </ParallaxItem>
        ))}
      </section>
    );
  };
  
  export default ParallaxSection;