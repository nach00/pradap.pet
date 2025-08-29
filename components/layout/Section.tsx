import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
	children: ReactNode;
	className?: string;
}

export default function Section({ children, className }: SectionProps) {
	return (
		<section
			className={cn(
				"w-screen py-20 border-b",
				"[&:nth-child(odd)]:bg-[var(--base-1)]",
				"[&:nth-child(even)]:bg-[var(--base-2)]",
				// "[&:last-child]:border-none",
				className,
			)}
		>
			{children}
		</section>
	);
}
