/** @format */

import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			Nunito: ['Nunito', 'sans-serif'],
		},
	},
	plugins: [],
} satisfies Config;
