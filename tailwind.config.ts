import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// eslint-disable-next-line import/no-default-export
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-main":
          "radial-gradient(94.87% 94.87% at 90% 70%, hsl(var(--primary)), hsl(var(--secondary)))",
        "gradient-secondary":
          "radial-gradient(circle at bottom right, hsl(var(--primary)), hsl(var(--secondary)))",
      },
      spacing: {
        "90": "22rem",
      },
      gridTemplateRows: {
        "animate-height-open": "1fr",
        "animate-height-closed": "0fr",
      },
      keyframes: {
        "bouncy-arrow-reveal": {
          "0%": { transform: "scale3d(0,0,1) rotate(45deg)" },
          "100%": { transform: "scaleX(1) rotate(0deg)" },
        },
      },
      animation: {
        "reveal-arrow":
          "bouncy-arrow-reveal 0.17s cubic-bezier(.2, 1.2, .3, 1.4) forwards",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
