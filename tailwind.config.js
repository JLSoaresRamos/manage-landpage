/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'tablet-pattern':
					"url('/manage-landpage/images/bg-tablet-pattern.svg')",
				'simplify-section-desktop':
					"url('/manage-landpage/images/bg-simplify-section-desktop.svg')",
				'simplify-section-mobile':
					"url('/manage-landpage/images/bg-simplify-section-mobile.svg')",
			},
			colors: {
				primary: {
					brightRed: 'hsl(12, 88%, 59%)',
					darkBlue: 'hsl(228, 39%, 23%)',
				},
				neutral: {
					darkGrayishBlue: 'hsl(227, 12%, 61%)',
					veryDarkBlue: 'hsl(233, 12%, 13%)',
					veryPaleRed: 'hsl(13, 100%, 96%)',
					veryLightGray: 'hsl(0, 0%, 98%)',
				},
			},
			fontFamily: {
				'be-vietnam-pro': ['"Be Vietnam Pro"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

