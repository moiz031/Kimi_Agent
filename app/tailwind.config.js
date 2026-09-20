/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "rgba(18, 170, 209, 0.14)",
        input: "rgba(18, 170, 209, 0.2)",
        ring: "#12AAD1",
        background: "#0B1214",
        foreground: "#F7FAF9",

        // Reference Palette Tokens
        'slate-dark': '#0B1214',
        'slate-card': '#101B1D',
        'teal-primary': '#12AAD1',
        'teal-bright': '#3DD6F0',
        'teal-deep': '#052F3D',
        'chrome-accent': '#CBD1D8',
        'gold-accent': '#CBD1D8',
        'chrome-soft': '#EDEFF2',
        'gold-soft': '#EDEFF2',
        'white-soft': '#F7FAF9',
        'text-muted-slate': '#A3B0B7',

        primary: {
          DEFAULT: "#12AAD1",
          foreground: "#061112",
        },
        secondary: {
          DEFAULT: "#101B1D",
          foreground: "#F7FAF9",
        },
        accent: {
          DEFAULT: "#CBD1D8",
          foreground: "#061112",
        },
        muted: {
          DEFAULT: "#101B1D",
          foreground: "#A3B0B7",
        },
      },
      backgroundImage: {
        'tech-grid': 'radial-gradient(circle at top left, rgba(18, 170, 209, 0.12), transparent 36%), radial-gradient(circle at 80% 20%, rgba(203, 209, 216, 0.08), transparent 20%)',
      },

      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        'glow-teal': '0 0 25px rgba(18, 170, 209, 0.25)',
        'glow-chrome': '0 0 25px rgba(203, 209, 216, 0.25)',
        'card-dark': '0 10px 30px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}