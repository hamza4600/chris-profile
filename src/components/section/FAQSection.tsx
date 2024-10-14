"use client";
import React, { useState, useRef, useEffect } from "react";

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

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`transform transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
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
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 sm:pb-8">
      <button
        className="w-full text-left text-lg sm:text-2xl text-black dark:text-secondary flex justify-between items-center"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="pr-4">{item.question}</span>
        <ChevronIcon isOpen={isActive} />
      </button>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-base sm:text-lg text-secondary leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};



const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-6 sm:px-8">
    <h1 className="text-3xl md:text-4xl text-black dark:text-primary mb-4 sm:mb-8">
      Frequently asked questions
    </h1>
    <div className="space-y-4 sm:space-y-8 mt-4 md:mt-8">
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
