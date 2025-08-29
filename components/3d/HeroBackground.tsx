import React from "react";
import { Scene } from "./Scene";
import { ThemeProvider } from "./ThemeContext";

import { cn } from "@/lib/utils";

// interface SectionProps {
// 	children: ReactNode;
// 	className?: string;
// }
//
// export default function Section({ children, className }: SectionProps) {

interface HeroBackgroundProps {
	className?: string;
}
export default function HeroBackground({ className }: HeroBackgroundProps) {
	return (
		<div className={cn("", className)}>
			<ThemeProvider>
				<Scene />
			</ThemeProvider>
		</div>
	);
}
