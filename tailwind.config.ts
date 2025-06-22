import typography from "@tailwindcss/typography"
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          primary: "#180042",
          "primary-content": "#fefbf6",
          secondary: "#c7b9f8",
          "secondary-content": "oklch(95% 0 0)",
          accent: "#db2777",
          "accent-content": "#180042",
          neutral: "#180042",
          "neutral-content": "#fefbf6",
          "base-100": "#fefbf6",
          "base-200": "#faedd6",
          "base-300": "oklch(92% 0.04 240)",
          "base-content": "#180042",
          info: "oklch(70% 0.2 220)",
          "info-content": "oklch(98% 0.01 220)",
          success: "#37d399",
          "success-content": "oklch(98% 0.01 140)",
          warning: "oklch(80% 0.25 80)",
          "warning-content": "oklch(20% 0.05 80)",
          error: "#f77272",
          "error-content": "oklch(98% 0.01 30)",

          "--rounded-btn": "1rem",
          "--rounded-box": "0.5rem",
        },
      },
    ],
  },
}
