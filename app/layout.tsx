import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

import { BottomBar } from "@/components/BottomBar";
import type { Metadata } from "next";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackButton from "@/components/BackButton";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/layout/Footer";
// import { whirlyBirdie, rubik, jetbrainsMono } from "@/lib/fonts";
import localFont from "next/font/local";
import { Rubik, JetBrains_Mono } from "next/font/google";

const whirlyBirdie = localFont({
	src: "../public/fonts/WhirlyBirdieVariable.ttf",
	variable: "--font-birdie",
	display: "swap",
	preload: true,
	adjustFontFallback: false,
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});
const rubik = Rubik({
	subsets: ["latin"],
	variable: "--font-rubik",
	display: "swap",
});

const pageTitle: string = "Natcha Pradappet";
const pageDescription: string =
	"A collection of projects exploring the intersection of design, engineering, and artificial intelligence.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={cn(
						// "overflow-x-hidden",
						rubik.variable,
						rubik.className,
						jetbrainsMono.variable,
						jetbrainsMono.className,
						whirlyBirdie.variable,
						whirlyBirdie.className,
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						<NavBar />
						{/* <BackButton /> */}
						{children}
						{/* <Footer /> */}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
