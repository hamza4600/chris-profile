import React from "react";
import Button from "../Atoms/Button";

// bg-gradient-to-r from-gray-800 via-gray-900 to-black
const IntroSection1 = () => {
  return (
    <div className="pb-12 pt-16 px-8 max-w-[1800px] mx-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-6 items-center justify-center relative">
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden relative">
            <img
              src="https://avatars.githubusercontent.com/u/103542343?v=4"
              alt="Hamza's avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute top-20 w-24 text-[12px] h-[28px] dark:bg-secondary bg-primary rounded-md text-primary dark:text-black font-medium">
            Expert
          </button>
          <h1 className="text-4xl font-bold dark:text-primary text-quaternary">Hello, I m Hamza</h1>
          <p className="text-lg dark:text-secondary text-quaternary">I m a software engineer</p>
        </div>
        <div className="flex gap-3 items-center">
          <Button size="large">
            Download CV
          </Button>
          <Button size="large">
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection1;
