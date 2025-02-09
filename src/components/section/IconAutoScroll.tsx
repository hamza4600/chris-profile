'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface IconAutoScrollProps {
  icons?: { name: string, url: string }[];
  speed?: number;
}

const Icons = [
  { name: "React", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-react.svg" },
  { name: "Kotlin", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/kotlin-original-ico.svg" },
  { name: "Python", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-python.svg" },
  { name: "Node.js", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-node-js.svg" },
  { name: "AWS", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-aws.svg" },
  { name: "Next.js", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-next-js.svg" },
  { name: "Golang", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/Golang-ico.svg" },
  { name: "JavaScript", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-javascript.svg" },
  { name: "React Native", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-react-native.svg" },
  { name: "Laravel", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/laravel-developer-ico.svg" },
  { name: "REST API", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-rest-api.svg" },
  { name: "Azure", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/microsoft-azure-ico.svg" },
  { name: "Flutter", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-flutter.svg" },
  { name: "Firebase", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-firebase.svg" },
  { name: "Angular", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/angular-ico.svg" },
  { name: "Nest.js", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/nestjs-ico.svg" },
  { name: "MongoDB", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-mongodb.svg" },
  { name: "Ruby on Rails", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-ruby-on-rails.svg" },
  { name: "GraphQL", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-graphql.svg" },
  { name: "Docker", url: "https://www.codingcrafts.io/wp-content/uploads/2025/01/cross-link-docker.svg" }
];

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
