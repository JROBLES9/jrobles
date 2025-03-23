/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#1B262C',
				primary: '#0F4C75',
				secondary: '#3282B8',
				light: '#BBE1FA',
			},
		},
	},
	plugins: [],
}
