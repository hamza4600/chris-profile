'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface IconAutoScrollProps {
  icons: any[];
  speed?: number;
}

const IconAutoScroll: React.FC<IconAutoScrollProps> = ({ icons, speed = 1 }) => {
  const { theme } = useTheme();
  return (
    <section aria-label="Icon Auto Scroll"
      className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-2.5 list-none opacity-100 overflow-hidden"
      style={{
        maskImage: theme === 'dark' ? 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)' : '',
      }}
    >
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-block"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: icons.length * speed,
              ease: "linear",
            },
          }}
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
          }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <div
              key={index}
              className="inline-block mx-4 dark:text-primary text-black"
              style={{
                flex: '0 0 auto',
              }}
            >
              <img src={icon} alt="icon" width={48} height={48} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IconAutoScroll;
