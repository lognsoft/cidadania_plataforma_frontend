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
			'twenty-two': '22px',
			'title-h1':'32px',
		},
  		colors: {
			'default-black': '#4D4D4D',
			'wine-primary': '#751730',
			'wine-secondary': '#E02D6C',
			'gray-primary': '#7B7B7B',
			chiclet: '#F24E87',
			'gray-secondary': '#707070',
			'gray-tertiary': '#B3B3B3',
			'gray-light-primary': '#E6E6E6',
			'gray-light-secondary': '#969696',
			'gray-light-tertiary': '#ebebeb',
			pink: '#F24E87',
			'green-primary': '#019853'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;