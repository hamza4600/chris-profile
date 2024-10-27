"use client";
import React, { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
 
  {
    question: "How do you approach challenging projects?",
    answer: "Software and solution development can be complex. We are equipped to work using agile, waterfall, or a client-driven development approach, adapting to the unique needs of each project.",
  },
  {
    question: "How long does it typically take to develop an application?",
    answer: "The timeline for application development varies based on complexity and features. Simple apps may take weeks, while complex ones can take months or longer.",
  },
  // {
  //   question: "Do you offer custom application development services?",
  //   answer: "Yes, I specialize in custom application development. We tailor our solutions to meet your unique business needs and objectives.",
  // },
  {
    question: "How does you handle confidentiality and sensitive information?",
    answer: "We prioritize confidentiality, implementing stringent measures to protect all sensitive information shared with us during the project lifecycle.",
  },
  {
    question: "Can you integrate third-party services or APIs into our application?",
    answer: "Yes, I integrate third-party services, APIs, and data sources to enhance functionality and deliver seamless user experiences.",
  },
];

const ChevronIcon: React.FC = () => (
  <svg
    className={`transform transition-transform duration-300`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
  index: number;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ item, isActive, onToggle, index }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 sm:pb-6">
    <button
      className="w-full text-left text-lg sm:text-2xl text-black dark:text-primary flex justify-between items-center"
      onClick={onToggle}
      aria-expanded={isActive}
      aria-controls={`faq-answer-${index}`}
    >
      <h2 
        className="pr-4 text-[20px] sm:text-[24px]" 
        aria-label={item.question}
      >
        {item.question}
      </h2>
      <motion.div
        initial={false}
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronIcon />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key={`content-${index}`}
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={{
            expanded: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-base sm:text-lg dark:text-primary text-black leading-relaxed mt-2" aria-label={item.answer}>
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
};

const FAQSection = ({ sectionTitle, faqItems }: { sectionTitle: string, faqItems: FAQItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-6 sm:px-8 flex flex-col sm:gap-12 gap-8">
    <h1 className="text-3xl md:text-4xl text-black dark:text-primary sm:text-start text-center">
      {sectionTitle}
    </h1>
    <div className="space-y-4 sm:space-y-6">
      {faqItems.map((item, index) => (
        <FAQAccordion
          index={index}
          key={index}
          item={item}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  </section>
  );
};

export default FAQSection;
