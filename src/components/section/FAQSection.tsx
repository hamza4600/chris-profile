"use client";
import React, { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is the purpose of this website?",
    answer: "This website is designed to provide information about our company, showcase our products and services, and offer support to our customers.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team through various channels: by email at support@ourcompany.com, by phone at 1-800-123-4567, or through the live chat feature on our website during business hours.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a wide range of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For specific regional payment options, please check our payment page or contact our sales team.",
  },
  {
    question: "Are your products environmentally friendly?",
    answer: "We are committed to sustainability and continuously work on improving our environmental impact. Many of our products are made from recycled or sustainable materials, and we strive to use eco-friendly packaging. Check individual product descriptions for specific environmental certifications.",
  },
  {
    question: "Do you offer discounts for bulk orders?",
    answer: "Yes, we offer discounts for bulk orders. The discount amount depends on the quantity and type of products ordered. Please contact our sales team at sales@ourcompany.com for a custom quote on your bulk order.",
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

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-6 sm:px-8 flex flex-col sm:gap-12 gap-8">
    <h1 className="text-3xl md:text-4xl text-black dark:text-primary sm:text-start text-center">
      Frequently asked questions
    </h1>
    <div className="space-y-4 sm:space-y-6">
      {faqData.map((item, index) => (
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
