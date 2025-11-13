/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'casino': "url('/assets/image/main.jpg')",
        'mine': "url('/assets/image/mines.jpg')",
        'jackport': "url('/assets/image/roulette.jpg')",
        'crash': "url('/assets/image/crash.jpg')",
        'poker': "url('/assets/image/blackjack.jpg')",
      },
      colors:{
        // Coreum Brand Colors
        coreum: {
          primary: '#25D695',      // Primary Green
          green: '#25D695',        // Alias for primary
          dark: '#101216',         // Dark (almost black)
          'dark-bg': '#030612',    // Darker background
        },
        // CozyCasino Custom Colors
        cozy: {
          green: '#25D695',        // Primary brand green
          gold: '#FFD700',         // Gold for rewards/coins
          dark: '#101216',         // Dark backgrounds
        },
        // Existing dark theme colors
        dark:{
          900:"#030612",
          600:"#0e141d",
          500:"#141923"
        }
      }

    },

  },
  darkMode: "class",
  plugins: [heroui()],
}

