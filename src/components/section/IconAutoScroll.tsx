'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface IconAutoScrollProps {
  icons: any[];
  speed?: number;
}

const IconAutoScroll: React.FC<IconAutoScrollProps> = ({ icons, speed = 3 }) => {
    return (
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
    );
  };

export default IconAutoScroll;
