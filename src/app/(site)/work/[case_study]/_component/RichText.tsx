"use client";
import { PortableText, PortableTextBlock, PortableTextComponents } from '@portabletext/react';

interface RichTextProps {
    content: PortableTextBlock[]; // Use the correct type for Portable Text content
  }
  
  const RichTextComponents: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px] mb-4 mt-4">{children}</h1>,
      h2: ({ children }) => <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px] sm:mb-4 mb-3 mt-4">{children}</h2>,
      normal: ({ children }) => <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em] mb-1">{children}</p>,
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="font-bold text-[16px] sm:text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">{children}</em>,
      li: ({ children }) => <li className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]mb-1">{children}</li>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-1 md:text-[20px] dark:text-secondary text-black leading-[1.4em]">{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
    },
  };


const RichText: React.FC<RichTextProps> = ({ content }) => {
  return (
    <div className="sm:mt-12 mt-8">
      <PortableText value={content} components={RichTextComponents} 
      />
    </div>
  );
};

export default RichText;