'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Icons from '@/icons/icons';

interface IconAutoScrollProps {
  icons?: { name: string, url: string }[];
  speed?: number;
}

const IconAutoScroll: React.FC<IconAutoScrollProps> = ({ icons = Icons, speed = 2 }) => {
  const { theme } = useTheme();

  return (
    <section aria-label="Icon Auto Scroll"
      className="flex w-full h-full max-w-full max-h-full place-items-center m-0 list-none opacity-100 overflow-hidden"
      style={{
        maskImage: theme === 'dark' ? 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)' : '',
      }}
    >
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-block"
          animate={{
            x: ['0%', '-100%'],
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
          {[...icons, ...icons, ...icons].map((icon, index) => (
            <div
              key={`${icon.name}-${index}`}
              className="inline-block mx-4 dark:text-primary text-black rounded-full p-2"
              style={{
                flex: '0 0 auto',
                backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.1)' : '#1a1a1a',
              }}
            >
              <img src={icon.url} alt={icon.name} width={40} height={40} title={icon.name} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IconAutoScroll;
