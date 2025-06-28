import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        // The refined "Operator" theme, now with a Cyan accent
        saasstartertheme: {
          "color-scheme": "dark",
          
          // Gold/Orange from "SIGNAL LYNX" text - for major headlines
          "primary": "#ca7417",  //baseline is #F59E0B
          "primary-content": "#ffffff",
          
          // Vibrant Purple from the lynx fur - for primary actions
          "secondary": "#A855F7",
          "secondary-content": "#ffffff",

          // Bright Cyan for links and highlights
          "accent": "#00FFFF", 
          "accent-content": "#010516", // Black text for high contrast on the cyan

          "neutral": "#1F2937",
          "neutral-content": "#D1D5DB",

          "base-100": "#0d1117",
          "base-200": "#161b22", //baseline is #161b22
          "base-300": "#21262d",
          "base-content": "#c9d1d9",

          "info": "#3B82F6",
          "success": "#22C55E",
          "warning": "#FBBF24",
          "error": "#F87171",

          "info-content": "#ffffff",
          "success-content": "#ffffff",
          "warning-content": "#1F2937",
          "error-content": "#ffffff",
          
          "--rounded-btn": "1rem",
          "--rounded-box": "0.5rem",
        },
      },
    ],
  },
};