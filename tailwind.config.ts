import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lilita: ["Lilita One", "sans-serif"],
      },
      fontSize: {
        mini: "10px",
        medium: "13px",
        base: "15px",
        twenty: "20px",
        "twenty-two": "22px",
        "title-h1": "32px",
      },
      colors: {
        "default-primary": "var(--primary)",
        "default-secondary": "var(--secondary)",
        "default-tertiary": "var(--tertiary)",
        "default-quaternary": "var(--quaternary)",
        "default-quinary": "var(--quinary)",
        "default-senary": "var(--senary)",
        "default-septenary": "var(--septenary)",
        "default-octonary": "var(--octonary)",
        "default-eighth": "var(--eighth)",
        "default-pink": "var(--pink)",
        "default-gray": "var(--gray)",
        "default-gray-ligth": "var(--gray-ligth)",
        "default-gray-ligth-primary": "var(--gray-ligth-primary)",
        "default-green-primary": "var(--green-primary)",
        "default-green-primary-100": "var(--green-primary-100)",
        "default-green-primary-200": "var(--green-primary-200)",
        "green-primary": "var(--green-primary)",
        "default-red-primary": "var(--red-primary)",
        "default-gray-text": "var(--gray-text)",
        "default-gray-text-bold": "var(--gray-text-bold)",

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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
