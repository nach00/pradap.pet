import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypeProps {
	children: ReactNode;
	className?: string;
}

export function TagId({ children, className }: TypeProps) {
	return (
		<span className={cn("font-mono text-sm text-[var(--base-9)]", className)}>
			{children}
		</span>
	);
}

export function TagYear({ children, className }: TypeProps) {
	return (
		<span className={cn("text-xs text-[var(--base-11)]", className)}>
			{children}
		</span>
	);
}

export function TagStatus({ children, className }: TypeProps) {
	return (
		<span
			className={cn(
				"bg-[var(--base-3)] px-2 py-1 rounded-full text-[var(--base-11)] text-xs",
				className,
			)}
		>
			{children}
		</span>
	);
}

export function TagType({ children, className }: TypeProps) {
	return (
		<span
			className={cn(
				"bg-[var(--accent-3)] text-[var(--accent-11)] px-2 py-1 rounded-full text-xs",
				className,
			)}
		>
			{children}
		</span>
	);
}

export function Eyebrow({ children, className }: TypeProps) {
	return (
		<span
			className={cn(
				"text-xs text-[var(--base-12)] uppercase tracking-wider",
				className,
			)}
		>
			{children}
		</span>
	);
}

export function TagBox({ children, className }: TypeProps) {
	return (
		<small
			className={cn(
				"border text-[var(--base-11)] px-2 py-1 flex-shrink-0 hover:bg-[var(--base-3)] hover:border-[var(--base-8)]",
				className,
			)}
		>
			{children}
		</small>
	);
}
