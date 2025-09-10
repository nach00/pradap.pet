import React from "react";
import { cn } from "@/lib/utils";
import { Typography, type TypographyProps } from "./Typography";

// H1 - Exhibition Title
export function H1({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h1"
			className={cn(
				"font-extralight tracking-[0.025em] leading-[1.25em] mb-[4em]",
				"text-[var(--base-12)]",
				"xxxs:text-3xl",
				"xxs:text-4xl",
				"xs:text-5xl",
				"selection:bg-[var(--base-3)]",
				"transition-all duration-300 ease-out",
				className,
			)}
			cheeseClassName="font-custom letter-spacing-wide text-[var(--accent-9)]"
		>
			{children}
		</Typography>
	);
}

// H2 - Gallery Section
export function H2({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h2"
			className={cn(
				"font-extralight tracking-[0.02em] leading-[0.9] mb-12",
				"text-[var(--accent-12)] pb-4",
				"xxxs:text-2xl",
				"xxs:text-3xl",
				"xs:text-4xl",
				"selection:bg-[var(--base-3)]",
				"transition-all duration-300 ease-out",
				className,
			)}
			cheeseClassName="font-custom letter-spacing-wide text-[var(--accent-9)]"
		>
			{children}
		</Typography>
	);
}

// H3 - Job Title / Primary Content
export function H3({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h3"
			className={cn(
				"font-light tracking-[0.015em] leading-[1.1] mb-2 last:mb-0",
				"text-[var(--accent-12)]",
				"xxxs:text-xl",
				"xxs:text-2xl",
				"xs:text-3xl",
				"selection:bg-[var(--base-3)]",
				"transition-all duration-300 ease-out",
				className,
			)}
			cheeseClassName="font-custom letter-spacing-wide text-[var(--accent-9)]"
		>
			{children}
		</Typography>
	);
}

// H4 - Company Name / Secondary Info
export function H4({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h4"
			className={cn(
				"font-medium tracking-[0.005em] leading-tight mb-1",
				"text-[var(--accent-11)]",
				"xxxs:text-lg",
				"xxs:text-xl",
				"xs:text-2xl",
				"selection:bg-[var(--accent-3)]",
				"transition-all duration-300 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// H5 - Duration / Metadata
export function H5({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h5"
			className={cn(
				"font-normal tracking-wide leading-relaxed mb-6",
				"text-[var(--base-11)] uppercase text-xs",
				"border-l-2 border-[var(--accent-6)] pl-3 ml-0",
				"xxxs:text-md",
				"xxs:text-lg",
				"xs:text-xl",
				"selection:bg-[var(--base-3)]",
				"transition-all duration-300 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// H6 - Curatorial Notes
export function H6({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h6"
			className={cn(
				"font-medium tracking-wide leading-relaxed mb-3",
				"text-[var(--base-11)] uppercase text-xs",
				"xxxs:text-sm",
				"xxs:text-md",
				"xs:text-lg",
				"selection:bg-[var(--base-3)]",
				"transition-all duration-300 ease-out",
				"opacity-75 hover:opacity-100",
				className,
			)}
		>
			{children}
		</Typography>
	);
}
