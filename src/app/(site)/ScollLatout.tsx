"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add scroll-triggered animations for sections
    const sections = gsap.utils.toArray('.animate-section');
    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { 
          opacity: 0,
          y: 100,  // Increased y distance
          duration: 1.5,  // Increased duration
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",  // Added easing
          scrollTrigger: {
            trigger: section,
            start: "top 80%",  // Trigger earlier
            end: "top 20%",    // End animation later
            scrub: 1,          // Smooth scrubbing effect
            markers: true,     // Helpful for debugging
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      // Cleanup ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-content">
      {children}
    </div>
  );
}