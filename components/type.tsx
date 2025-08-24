import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypeProps {
	children: ReactNode;
	className?: string;
}

export function H1({ children, className }: TypeProps) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
				className,
			)}
		>
			{children}
		</h1>
	);
}

export function H2({ children, className }: TypeProps) {
	return (
		<h2
			className={cn(
				"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
				className,
			)}
		>
			{children}
		</h2>
	);
}

export function H3({ children, className }: TypeProps) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
		>
			{children}
		</h3>
	);
}

export function H4({ children, className }: TypeProps) {
	return (
		<h4
			className={cn(
				"scroll-m-20 text-xl font-semibold tracking-tight",
				className,
			)}
		>
			{children}
		</h4>
	);
}

export function P({ children, className }: TypeProps) {
	return (
		<p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
			{children}
		</p>
	);
}

export function Blockquote({ children, className }: TypeProps) {
	return (
		<blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
			{children}
		</blockquote>
	);
}

export function InlineCode({ children, className }: TypeProps) {
	return (
		<code
			className={cn(
				"bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				className,
			)}
		>
			{children}
		</code>
	);
}

export function Lead({ children, className }: TypeProps) {
	return (
		<p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
	);
}

export function Large({ children, className }: TypeProps) {
	return (
		<div className={cn("text-lg font-semibold", className)}>{children}</div>
	);
}

export function Small({ children, className }: TypeProps) {
	return (
		<small className={cn("text-sm leading-none font-medium", className)}>
			{children}
		</small>
	);
}

export function Muted({ children, className }: TypeProps) {
	return (
		<p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
	);
}

// <span className="font-mono text-sm text-muted-foreground">{id}</span>
// <span className="text-xs text-secondary-foreground">{year}</span>
// <span className="bg-[var(--base-4)] text-[var(--base-11)] px-2 py-1 rounded-full text-xs">
// 	{status}
// </span>
// <span className="bg-[var(--accent-3)] text-[var(--accent-11)] px-2 py-1 rounded-full text-xs">
// 	{type}
// </span>

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
		<div
			className={cn(
				"text-xs text-[var(--accent-11)] font-bold uppercase tracking-wider font-mono pb-2",
				className,
			)}
		>
			{children}
		</div>
	);
}

export function TagBox({ children, className }: TypeProps) {
	return (
		<div
			className={cn(
				"border font-light tracking-wide text-sm text-[var(--base-11)] px-2 py-1 flex-shrink-0",
				className,
			)}
		>
			{children}
		</div>
	);
}
