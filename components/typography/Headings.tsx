import React from "react";
import { cn } from "@/lib/utils";
import { Typography, type TypographyProps } from "./Typography";

// H1 - Exhibition Title
export function H1({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h1"
			className={cn(
				"font-extralight tracking-[0.025em] leading-[1.25em] mb-[.5em] last:mb-0",
				"text-[var(--base-12)]",
				"xxxs:text-2xl",
				"xxs:text-4xl",
				"xs:text-6xl",
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
				"font-extralight tracking-[0.02em] leading-[1.5em] mb-[1.5em]",
				"text-[var(--accent-12)]",
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
				"font-light tracking-[0.015em] leading-[1.1] mb-[0.5em] last:mb-0",
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
				"font-medium tracking-[0.005em] leading-[1.25em] mb-[0.5em] last:mb-0",
				"text-[var(--base-9)]",
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
				"font-normal tracking-[0.025] leading-[1.625em] mb-[1em] last:mb-0",
				"text-[var(--base-11)] uppercase",
				// "border-l-2 border-[var(--accent-6)] pl-[0.75em] ml-0",
				"xxxs:text-md",
				"xxs:text-lg",
				"xs:text-xl",
				"selection:bg-[var(--base-3)]",
				// "transition-all duration-300 ease-out",
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
				"font-medium tracking-[0.025em] leading-relaxed mb-[0.5em] last:mb-0",
				"text-[var(--base-11)] uppercase",
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
