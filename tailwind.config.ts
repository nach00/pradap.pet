import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./data/**/*.{ts,tsx}",
		"./lib/**/*.{ts,tsx}",
	],

	theme: {
		extend: {
			fontFamily: {
				birdie: ["var(--font-birdie)", "sans-serif"],
				rubik: ["var(--font-rubik)", "sans-serif"],
			},
			colors: {
				accent: {
					50: "var(--accent-50)",
					100: "var(--accent-100)",
					200: "var(--accent-200)",
					300: "var(--accent-300)",
					400: "var(--accent-400)",
					500: "var(--accent-500)",
					600: "var(--accent-600)",
					700: "var(--accent-700)",
					800: "var(--accent-800)",
					900: "var(--accent-900)",
					950: "var(--accent-950)",
					975: "var(--accent-975)",
				},
				base: {
					50: "var(--base-50)",
					100: "var(--base-100)",
					200: "var(--base-200)",
					300: "var(--base-300)",
					400: "var(--base-400)",
					500: "var(--base-500)",
					600: "var(--base-600)",
					700: "var(--base-700)",
					800: "var(--base-800)",
					900: "var(--base-900)",
					950: "var(--base-950)",
					975: "var(--base-975)",
				},
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("cheese", ".cheese &");
		},
	],
};
