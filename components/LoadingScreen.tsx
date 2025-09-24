"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { H1 } from "@/components/typography/Headings";

interface LoadingScreenProps {
	isLoading: boolean;
	onComplete?: () => void;
}

export default function LoadingScreen({
	isLoading,
	onComplete,
}: LoadingScreenProps) {
	const [progress, setProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(isLoading);

	useEffect(() => {
		if (isLoading) {
			setIsVisible(true);

			// Simulate loading progress
			const interval = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						clearInterval(interval);
						// Start fade out after a brief pause
						setTimeout(() => {
							setIsVisible(false);
							setTimeout(() => {
								onComplete?.();
							}, 500); // Match fade duration
						}, 200);
						return 100;
					}
					return prev + Math.random() * 15 + 5; // Random progress increments
				});
			}, 100);

			return () => clearInterval(interval);
		}
	}, [isLoading, onComplete]);

	if (!isVisible && !isLoading) return null;

	return (
		<div
			className={cn(
				"fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
				!isVisible && "opacity-0 pointer-events-none",
			)}
		>
			{/* Background with subtle pattern */}
			<div
				className="absolute inset-0 bg-gradient-to-br from-background
  via-background to-accent/5"
			/>

			<div className="relative z-10 flex flex-col items-center space-y-8">
				{/* Main loading text */}
				<div className="text-center">
					<H1 className="text-foreground/90 mb-2">Natcha Pradappet</H1>
					<p className="text-muted-foreground font-mono text-sm tracking-wider">
						Design Engineer & Strategist
					</p>
				</div>

				{/* Progress bar */}
				<div className="w-64 h-1 bg-border rounded-full overflow-hidden">
					<div
						className="h-full bg-accent transition-all duration-200 ease-out"
						style={{ width: `${Math.min(progress, 100)}%` }}
					/>
				</div>

				{/* Loading text */}
				<div className="text-center">
					<p className="text-muted-foreground text-sm font-mono">
						Loading experience...
					</p>
				</div>

				{/* Animated dots */}
				<div className="flex space-x-1">
					{[0, 1, 2].map((i) => (
						<div
							key={i}
							className={cn("w-2 h-2 bg-accent rounded-full", "animate-pulse")}
							style={{
								animationDelay: `${i * 0.2}s`,
								animationDuration: "1s",
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
