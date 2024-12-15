import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        "up-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" }, // Adjust the value as needed
        },
      },
      animation: {
        "up-down": "up-down 2s ease-in-out infinite alternate-reverse both",
      },
      colors: {
        "blue-dark-imperial": "#012970", // Dark Imperial Blue
        "blue-ultramarine": "#4154F1", // Ultramarine Blue
        "white-snow": "#f7f7f7", // Use for page backgrounds
        "black-900": "#1a1a1a", // WCAG-compliant
        "black-800": "#333333", // WCAG-compliant
        "black-700": "#4d4d4d", // WCAG-compliant
        "black-600": "#666666", // WCAG-compliant for large text
        "black-500": "#808080", // Use sparingly for less important text
        "black-400": "#999999", // Not recommended for body text
        "black-300": "#b3b3b3", // Not recommended for body text
        "black-200": "#cccccc", // Use for very subtle text
        "black-100": "#e6e6e6", // Use for background or non-essential
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
