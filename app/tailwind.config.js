/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "rgba(0, 199, 183, 0.14)",
        input: "rgba(0, 199, 183, 0.2)",
        ring: "#00C7B7",
        background: "#0B1214",
        foreground: "#F7FAF9",

        // Reference Palette Tokens
        'slate-dark': '#0B1214',
        'slate-card': '#101B1D',
        'teal-primary': '#00C7B7',
        'teal-bright': '#14D9C7',
        'teal-deep': '#063A3A',
        'gold-accent': '#D6A84A',
        'gold-soft': '#E5C36A',
        'white-soft': '#F7FAF9',
        'text-muted-slate': '#A8B7B5',

        primary: {
          DEFAULT: "#00C7B7",
          foreground: "#061112",
        },
        secondary: {
          DEFAULT: "#101B1D",
          foreground: "#F7FAF9",
        },
        accent: {
          DEFAULT: "#D6A84A",
          foreground: "#061112",
        },
        muted: {
          DEFAULT: "#101B1D",
          foreground: "#A8B7B5",
        },
      },
      backgroundImage: {
        'tech-grid': 'radial-gradient(circle at top left, rgba(0, 199, 183, 0.12), transparent 36%), radial-gradient(circle at 80% 20%, rgba(214, 168, 74, 0.08), transparent 20%)',
      },

      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        'glow-teal': '0 0 25px rgba(0, 199, 183, 0.25)',
        'glow-gold': '0 0 25px rgba(214, 168, 74, 0.25)',
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