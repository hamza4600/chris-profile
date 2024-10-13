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

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActive((prevActive) => (prevActive === index ? null : index));
  };

  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (active === index) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [active]);

  return (
    <section id="faq" className="md:pt-16 md:pb-[128px] py-12 px-8">
      <h1 className="text-[38px] dark:text-primary text-black max-md:text-[30px] mb-4 sm:mb-8 ">
        Frequently asked questions
      </h1>
      <div className="space-y-4 sm:space-y-8 max-md:mt-8 mt-4">
        {faqData.map((item, index) => (
          <div
            className="flex border-b border-[#e6e6e6] dark:border-[#ffffff33] flex-col gap-4 pb-4 sm:pb-8"
            key={index}
          >
            <button
              className="text-[28px] max-md:text-[24px] text-start dark:text-secondary text-black flex justify-between items-center"
              onClick={() => handleClick(index)}
            >
              <span className="max-md:max-w-[320px]">
              {item.question}
              </span>
              {/* <span
                className={`transform transition-transform duration-300 ${
                  active === index ? "rotate-180" : ""
                }`}
              > */}
              <svg
                className={`${  
                  active === index ? "rotate-180" : "rotate-0"
                } transform transition-transform duration-300`}
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#ededed"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              {/* </span> */}
            </button>
            <p
              ref={(el) => {
                if (el) {
                  answerRefs.current[index] = el;
                }
              }}
              className="text-[20px] sm:text-[24px] text-secondary leading-[28px] sm:leading-[36px] tracking-[-0.5px] overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: "0px" }}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
