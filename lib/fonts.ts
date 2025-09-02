import localFont from "next/font/local";

import { Rubik, JetBrains_Mono } from "next/font/google";

export const whirlyBirdie = localFont({
	src: "../public/fonts/WhirlyBirdieVariable.ttf",
	variable: "--font-birdie",
	display: "swap",
	preload: true,
	adjustFontFallback: false,
});

export const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const rubik = Rubik({
	subsets: ["latin"],
	variable: "--font-rubik",
	display: "swap",
});
