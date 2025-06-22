import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          "color-scheme": "dark", // Identifies this as a dark theme for browser UI

          "primary": "#903a9d",          // Main Brand Purple (from GUI labels/borders)
          "primary-content": "#ffffff",   // White text on primary elements

          "secondary": "#FF0080",       // Hot Pink (from GUI button gradient)
          "secondary-content": "#ffffff",

          "accent": "#00FFFF",          // Bright Cyan (from GUI button gradient)
          "accent-content": "#010516",  // Dark text for high contrast on bright cyan

          "neutral": "#1a1a2e",         // Dark Blue/Gray (from GUI table background)
          "neutral-content": "#A6ADBB",

          "base-100": "#010516",        // The main page background (GUI's darkest color)
          "base-200": "#190025",        // A slightly lighter dark purple (from tab panes)
          "base-300": "#2a2832",        // Dark gray/purple (for inactive elements)
          "base-content": "#A6ADBB",    // **CRITICAL FIX**: The primary text color (light gray)

          "info": "#66E6FF",            // Light neon cyan
          "info-content": "#00323D",

          "success": "#39FF14",         // Neon green for success states
          "success-content": "#00330C",

          "warning": "#FBBD23",         // A standard bright yellow for warnings
          "warning-content": "#382800",

          "error": "#E94560",           // The pink/red used for errors in the GUI
          "error-content": "#ffffff",

          "--rounded-btn": "1rem",
          "--rounded-box": "0.5rem",
        },
      },
    ],
  },
};