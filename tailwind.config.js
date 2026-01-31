/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /* Main Background – Deep Navy Blue */
        primary: {
          DEFAULT: '#0B1F3B',
          light: '#0A2540', /* Alternate – Midnight Blue */
        },
        /* Primary Accent – Muted Gold / Brass */
        secondary: {
          DEFAULT: '#C9A24D',
        },
        neutral: {
          DEFAULT: '#F5F1E8',
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
