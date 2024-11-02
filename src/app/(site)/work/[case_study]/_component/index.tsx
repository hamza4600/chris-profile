'use client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper Components
const Header = ({ title, description }: { title: string; description: string }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="mx-auto" ref={headerRef}>
      <h1 className="text-2xl md:text-[46px] font-medium leading-[1.2em] dark:text-primary text-black -tracking-[0.5px]">
        {title}
      </h1>
      <p className="text-base md:text-[24px] sm:mt-8 mt-4 leading-[1.4em] dark:text-primary text-black">
        {description}
      </p>
    </div>
  );
};

const MainImage = ({ image, title }: { image: string; title: string }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <Image
      ref={imageRef}
      src={image ? urlFor(image)?.url() : ''}
      alt={title}
      width={1000}
      height={529}
      quality={100}
      priority
      className="sm:mb-12 mb-8 rounded-2xl sm:object-cover object-contain sm:mt-12 mt-8 w-full"
    />
  );
};
const Conclusion = ({ conclusion }: { conclusion: string }) => {
  const conclusionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      conclusionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: conclusionRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="mx-auto pb-8 mt-8" ref={conclusionRef}>
      <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px] mb-4">
        Conclusion
      </h2>
      <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
        {conclusion}
      </p>
    </div>
  );
};

export { Header, MainImage, Conclusion };
