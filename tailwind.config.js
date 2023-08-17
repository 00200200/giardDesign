/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			colors: {
				beige: '#DCC1AB',
				grey: '#F5F0EC',
				customGreen: '#1B5B31',
				black: '#111',
			},
		},
	},
	plugins: [],
};

