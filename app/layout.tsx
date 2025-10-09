import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingProvider";
import { ClientLayout } from "@/components/ClientLayout";
import localFont from "next/font/local";
import { Rubik, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
// import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const pageTitle: string = "Natcha Pradappet: Design Engineer and Strategist";
const pageDescription: string =
	"A collection of projects exploring the intersection of design, engineering, and artificial intelligence.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
	metadataBase: new URL("https://pradap.pet"),
	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: "https://pradap.pet",
		siteName: pageTitle,
		images: [
			{
				url: "/preview.jpg",
				width: 1849,
				height: 1161,
				alt: pageTitle,
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: pageTitle,
		description: pageDescription,
		images: ["/preview.jpg"],
	},
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
						rubik.variable,
						rubik.className,
						jetbrainsMono.variable,
						jetbrainsMono.className,
						whirlyBirdie.variable,
						whirlyBirdie.className,
						"bg-background",
					)}
				>
					<GoogleAnalytics gaId="G-8E9N083LW4" />
					<SpeedInsights />
					<Analytics />
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						<LoadingProvider initialLoading={true} autoHideDelay={2500}>
							<ClientLayout>{children}</ClientLayout>
						</LoadingProvider>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
