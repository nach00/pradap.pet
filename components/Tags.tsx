import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
	children: ReactNode;
	className?: string;
}

export function TagId({ children, className }: TagProps) {
	return (
		<span className={cn("font-mono text-sm text-muted-foreground", className)}>
			{children}
		</span>
	);
}

export function TagYear({ children, className }: TagProps) {
	return (
		<span className={cn("text-xs text-secondary-foreground", className)}>
			{children}
		</span>
	);
}

export function TagStatus({ children, className }: TagProps) {
	return (
		<span
			className={cn(
				"bg-secondary px-2 py-1 rounded-full text-foreground text-xs",
				className,
			)}
		>
			{children}
		</span>
	);
}

export function TagType({ children, className }: TagProps) {
	return (
		<span
			className={cn(
				"bg-accent/40 text-accent-foreground px-2 py-1 rounded-full text-xs",
				className,
			)}
		>
			{children}
		</span>
	);
}
