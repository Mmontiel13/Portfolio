/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#0E1625', 
				'glass-white': 'rgba(255, 255, 255, 0.05)',
				'accent-blue': '#3b82f6',
				'accent-purple': '#a855f7',
				'accent-pink': '#ec4899',
			},
		},
	},
	plugins: [],
};