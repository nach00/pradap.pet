module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./data/**/*.{ts,tsx}",
		"./lib/**/*.{ts,tsx}",
	],

	theme: {
		// screens: {
		// 	xxxs: "320px", // Small phones (iPhone SE, older Android)
		// 	xxs: "375px", // Standard phones (iPhone 12/13/14)
		// 	xs: "414px", // Large phones (iPhone Plus, Pixel)
		// 	// Base breakpoints (min-width - mobile first)
		// 	mobile: "320px",
		// 	tablet: "768px",
		// 	laptop: "1024px",
		// 	desktop: "1280px",
		// 	wide: "1536px",
		//
		// 	// "Greater than" breakpoints (redundant since base ones are already min-width)
		// 	// You can remove these or use them for clarity
		// 	"gt-mobile": "321px",
		// 	"gt-tablet": "769px",
		// 	"gt-laptop": "1025px",
		// 	"gt-desktop": "1281px",
		// 	"gt-wide": "1537px",
		//
		// 	// "Less than" breakpoints (max-width)
		// 	"lt-mobile": { max: "319px" }, // Fixed: should be 319px, not 320px
		// 	"lt-tablet": { max: "767px" }, // Fixed: should be 767px, not 768px
		// 	"lt-laptop": { max: "1023px" }, // Fixed: should be 1023px, not 1024px
		// 	"lt-desktop": { max: "1279px" }, // Fixed: should be 1279px, not 1280px
		// 	"lt-wide": { max: "1535px" }, // Fixed: should be 1535px, not 1536px
		// },
		extend: {
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
	plugins: [],
};
