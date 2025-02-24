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
        "default-eighth": "var(--eighth)",
        "default-pink": "var(--pink)",

        "default-black": "#4D4D4D",
        "wine-primary": "#751730",
        "wine-secondary": "#E02D6C",
        "gray-primary": "#7B7B7B",
        chiclet: "#F24E87",
        "gray-secondary": "#707070",
        "gray-tertiary": "#B3B3B3",
        "gray-light-primary": "#E6E6E6",
        "gray-light-secondary": "#969696",
        "gray-light-tertiary": "#ebebeb",
        pink: "#F24E87",
        "green-primary": "#019853",
        "gray-dark": "#333333",

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
