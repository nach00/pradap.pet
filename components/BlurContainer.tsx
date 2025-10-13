import React from "react";
import { cn } from "@/lib/utils";

interface BlurContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function BlurContainer({
	children,
	className,
}: BlurContainerProps) {
	return (
		<div
			className={cn(
				"backdrop-blur-2xl p-[0.75rem] rounded-md border-[var(--base-4)]/20 border shadow-sm",
				className,
			)}
		>
			{children}
		</div>
	);
}
