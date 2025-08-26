import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

import { cn } from "@/lib/utils";
import { BottomBar } from "@/components/BottomBar";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
// import "@fontsource-variable/rubik";
// import "@fontsource-variable/geist-sans";
// import "@fontsource-variable/geist-mono";
// import "@fontsource-variable/intel-one-mono";
import "@/styles/global.css";
// import "@/styles/typography.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/theme-toggle";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });
// const whirlyBats = localFont({
// 	src: "/fonts/WhirlyBatsVariable.ttf",
// 	variable: "--font-whirly-bats",
// });
import { Rubik, JetBrains_Mono } from "next/font/google";

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
				{/* <body className="prose dark:prose-invert"> */}
				{/* <body className="mt-50"> */}
				<body
					className={cn(
						"mt-50",
						rubik.variable,
						jetbrainsMono.variable,
						rubik.className,
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<TopBar />
						<BottomBar />
						{children}
						<Footer />
						{/* <ModeToggle /> */}
						{/* <ThemeToggle /> */}
						{/* <AnimatedThemeToggler /> */}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
