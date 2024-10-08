"use client";
import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    question: "What is the purpose of this website?",
    answer:
      "This website is designed to provide information about the company and its products.",
  },
  {
    question: "What is the purpose of this website?",
    answer:
      "This website is designed to provide information about the company and its products.",
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
    <div className="md:pt-16 md:pb-[128px] py-12 max-md:px-8">
      <p className="text-[38px] dark:text-primary text-black max-md:text-[30px]">
        Frequently asked questions
      </p>
      <div className="space-y-8 max-md:mt-12 mt-8">
        {faqData.map((item, index) => (
          <div
            className="flex pb-8 border-b border-[#e6e6e6] dark:border-[#ffffff33] flex-col gap-4"
            key={index}
          >
            <button
              className="text-[28px] max-md:text-[24px] text-start dark:text-secondary text-black font-medium flex justify-between items-center"
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
                  active === index ? "rotate-180" : ""
                } transform transition-transform duration-300`}
                width="36px"
                height="36px"
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
              className="text-[24px] text-secondary leading-[36px] tracking-[-0.5px] overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: "0px" }}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
