import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily:{
			poppins: ['Poppins', 'sans-serif'],
			lilita:['Lilita One', 'sans-serif']
		},
		fontSize:{
			mini: '10px',
			medium:'13px',
			base: '15px',
			'twenty': '20px',
			'title-h1':'32px',
		},
  		colors: {
			'default-black': '#4D4D4D',
			wine: '#751730',
			'wine-2': '#E02D6C',
			gray: '#7B7B7B',
			chiclet: '#F24E87',
			'gray-2': '#707070',
			'gray-3': '#B3B3B3',
			'gray-light': '#E6E6E6',
			'gray-light-2': '#969696',
			pink: '#F24E87',
			'green-2': '#019853'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;