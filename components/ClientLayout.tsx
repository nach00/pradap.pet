"use client";

import { useLoading } from "@/components/LoadingProvider";
import LoadingScreen from "@/components/LoadingScreen";
import NavBar from "@/components/NavBar";
import Footer from "@/components/layout/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
	const { isLoading } = useLoading();

	return (
		<>
			{/* <LoadingScreen isLoading={isLoading} /> */}
			<NavBar />
			{children}
			<Footer />
		</>
	);
}
