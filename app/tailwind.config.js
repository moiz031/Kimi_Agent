/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "rgba(226, 232, 240, 0.9)",
        input: "rgba(226, 232, 240, 0.9)",
        ring: "#1CA88C",
        background: "#FAF9F6",
        foreground: "#111827",

        // Reference Palette Tokens (Mentinox Light Brand Scheme)
        'slate-dark': '#FAF9F6',
        'slate-card': '#FFFFFF',
        'teal-primary': '#1CA88C',
        'teal-bright': '#20C997',
        'teal-deep': '#0F766E',
        'chrome-accent': '#64748B',
        'gold-accent': '#1CA88C',
        'chrome-soft': '#F1F5F9',
        'gold-soft': '#E6F8F3',
        'white-soft': '#111827',
        'text-muted-slate': '#64748B',

        primary: {
          DEFAULT: "#1CA88C",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        accent: {
          DEFAULT: "#F1F5F9",
          foreground: "#111827",
        },
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#64748B",
        },
      },
      backgroundImage: {
        'tech-grid': 'radial-gradient(circle at top left, rgba(28, 168, 140, 0.08), transparent 36%), radial-gradient(circle at 80% 20%, rgba(100, 116, 139, 0.05), transparent 20%)',
      },

      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        'glow-teal': '0 0 25px rgba(28, 168, 140, 0.25)',
        'glow-chrome': '0 0 25px rgba(100, 116, 139, 0.15)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
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
