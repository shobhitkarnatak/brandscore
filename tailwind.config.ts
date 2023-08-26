/** @format */

import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				org: '#F56E2A',
				primary: '#0B8188',
				secondary: '#90D0D4',
				btn: '#F05123',
				cs_gray: '#E2EBF0',
				cs_border: '#8E8DAA',
				pinks: '#FFD9BD',
				main: '#CEFBFD',
			},
		},
		fontFamily: {
			Nunito: ['Nunito', 'sans-serif'],
		},
	},
	plugins: [],
} satisfies Config;
