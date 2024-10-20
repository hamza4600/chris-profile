import React from "react";

// Tailwind CSS styles object
const styles = {
  container: `max-w-[640px] pt-10 sm:pt-16 pb-2 md:pt-20 mx-auto text-center flex flex-wrap sm:gap-2 gap-1 items-center justify-center dark:text-white text-black md:text-[24px] text-[20px] leading-[36px] tracking-[-0.5px] px-6 sm:pb-20`,
  shiningBorder: `border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full`,
  shiningTextContainer: `
  border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full
`,
shiningText: `
  px-2 py-1 sm:px-3 sm:py-1 bg-clip-text sm:text-[20px] text-[18px]
  `,
};

const ShiningText: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.shiningTextContainer}>
    <span className={styles.shiningText}>{text}</span>
  </div>
);

const ShinningSectionText = () => {
  return (
    <div className={styles.container}>
      <span>Full Stack Developer specializing in</span>
      <ShiningText text="Next.js" />
      <ShiningText text="Node.js" />
      <span>and</span>
      <ShiningText text="E-commerce" />

      <span>with</span>
      <ShiningText text="6 years" />
      <span>of industry experience.</span>

      <span>Expertise in both</span>
      <ShiningText text="Frontend" />
      <span>and</span>
      <ShiningText text="Backend" />
      <span>development.</span>

      <span>Proficient in</span>
      <ShiningText text="Shopify" />
     
       <span>Currently works as</span>
       <ShiningText text="Lead Developer" />
       <span>at Black Acre.</span>
    </div>
  );
};

export default ShinningSectionText;
