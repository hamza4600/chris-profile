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
      keyframes: {
        'pulse-green': {
          '0%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 rgba(27, 198, 81, 0.7)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 8px rgba(27, 198, 81, 0)',
          },
          '100%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 rgba(27, 198, 81, 0)',
          },
        },
      },
      animation: {
        'pulse-green': 'pulse-green 1.6s ease infinite',
      },
      backgroundSize: {
        '300%': '300%',
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
        "primary": "rgb(222, 228, 231)",
        "secondary": "rgb(213, 213, 213)",
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