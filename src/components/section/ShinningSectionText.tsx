import React from "react";

// Tailwind CSS styles object
const styles = {
  container: `max-w-[640px] pt-10 sm:pt-16 pb-2 md:pt-20 mx-auto text-center flex flex-wrap gap-4 items-center justify-center dark:text-white text-black md:text-[24px] text-[20px] leading-[36px] tracking-[-0.5px] px-6 sm:pb-20`,
  shiningBorder: `border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full`,
  shiningTextContainer: `
  border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full
`,
shiningText: `
  px-2 py-1 sm:px-3 sm:py-1 bg-clip-text
  bg-gradient-to-l from-primary via-white to-primary bg-300%
    animate-shine-text rounded-full sm:text-[24px] text-[20px]
  `,
    inlineWrapper: ` `, // Keeps elements in the same line

};

const ShiningText: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.shiningTextContainer}>
    <span className={styles.shiningText}>{text}</span>
  </div>
);

const ShinningSectionText = () => {
  return (
    <div className={styles.container}
    >
      <span>Web designer and expert in</span>
      <ShiningText text="UX/UI Design" />

      <span>with over</span>
      <ShiningText text="15 years" />

      <span>of industry experience.</span>
      <span>Expertise extends to</span>
      <ShiningText text="Framer Development" />

      <span>enabling him to create both aesthetically pleasing and easily implementable designs.</span>

      <span>Currently works as</span>
      <ShiningText text="Product Designer" />
      <span>at FLYR Hospitality.</span>
      </div>
  );
};

export default ShinningSectionText;
