import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
      textColor: {
        "primary": "rgb(209, 218, 224)",
        "secondary": "rgb(179, 194, 203)",
        "tertiary": "#e6e6e6",
        "quaternary": "#0f151f"
      },
      colors: {
        lightBackground: '#f8f9fa', 
        darkBackground: '#2b2e3b', 
        "primary": "#000000",
        "secondary": "#ffffff",
        tertiary: "#0f151f"
      }
    },
  },
  plugins: [],
};
export default config;
