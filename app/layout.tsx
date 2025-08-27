import { cn } from "@/lib/utils";
import { BottomBar } from "@/components/BottomBar";
import type { Metadata } from "next";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/ThemeProvider";

import { BackButton } from "@/components/BackButton";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/layout/Footer";

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
				<body
					className={cn(
						// "pt-50",
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
						<BackButton />
						{children}
						<Footer />
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
