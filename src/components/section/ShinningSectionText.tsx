import React from "react";

const ShinningSectionText = () => {
  return (
    <div className="max-w-[640px] flex flex-wrap gap-4 items-center justify-center dark:text-[#ffffff] text-[#000000] pt-20 mx-auto text-center md:text-[24px] text-[20px] leading-[36px] tracking-[-0.5px]">
      <span>Web designer and expert in </span>
      <br />
      <div className="border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full">
        <span className="relative inline-block px-3 py-1 text-transparent bg-clip-text bg-gradient-to-l from-primary via-white to-primary bg-300% animate-shine-text rounded-full">
          UX/UI Design
        </span>
      </div>
      <span>with over </span>
      <div className="border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full">
        <span className="relative inline-block px-3 py-1 text-transparent bg-clip-text bg-gradient-to- bg-gradient-to-l from-primary via-white to-primary bg-300% animate-shine-text bg-primary rounded-full">
          15 years
          {/* <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine" /> */}
        </span>
      </div>
      <br />
      <span>of industry experience.</span>
      <span>Expertise extends to </span>

      <div className="border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full">
        <span className="relative inline-block px-3 py-1 text-transparent bg-clip-text bg-gradient-to- bg-gradient-to-l from-primary via-white to-primary bg-300% animate-shine-text bg-primary rounded-full">
          Framer Development
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine" />
        </span>
      </div>
      <span>enabling him to create</span>
      <span>both aesthetically</span>
      <span>pleasing and easily implementable.</span>
      <span>Currently works as </span>
      <div className="border border-[#e6e6e6] dark:border-[#ffffff33] rounded-full">
        <span className="relative inline-block px-3 py-1 text-transparent bg-clip-text bg-gradient-to- bg-gradient-to-l from-primary via-white to-primary bg-300% animate-shine-text bg-primary rounded-full">
          Product Designer
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine" />
        </span>
      </div>
      <span>at FLYR Hospitality.</span>
    </div>
  );
};

export default ShinningSectionText;
