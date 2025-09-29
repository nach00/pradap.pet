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
import Script from "next/script";

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
						rubik.variable,
						rubik.className,
						jetbrainsMono.variable,
						jetbrainsMono.className,
						whirlyBirdie.variable,
						whirlyBirdie.className,
						"bg-background",
					)}
				>
					<Script
						src="https://www.googletagmanager.com/gtag/js?id=G-8E9N083LW4"
						strategy="afterInteractive"
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8E9N083LW4');
            `}
					</Script>

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
