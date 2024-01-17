/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-gray': '#f5f5f5',
				'dark-gray': '#333333',
				'google-blue': '#4285f4',
			},
		},
	},
	plugins: [],
};
