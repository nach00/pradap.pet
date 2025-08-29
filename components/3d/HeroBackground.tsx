import React from "react";
import { Scene } from "./Scene";

import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
	className?: string;
}
export default function HeroBackground({ className }: HeroBackgroundProps) {
	return (
		<div className={cn("", className)}>
			<Scene />
		</div>
	);
}
