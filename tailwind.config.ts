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
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        'shine-text': 'shine-text 3s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'shine-text': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        'glow': {
          'from': {
            boxShadow: '0 0 5px #4338ca, 0 0 10px #4338ca, 0 0 15px #4338ca',
          },
          'to': {
            boxShadow: '0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #6366f1',
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        hanken: ["var(--font-hanken-grotesk)", "sans-serif"],
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
        tertiary: "#0f151f",
        "random": "rgb(209, 218, 224)"
      }
    },
  },
  plugins: [],
};
export default config;