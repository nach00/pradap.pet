import React from "react";
import { cn } from "@/lib/utils";
import { Typography, type TypographyProps } from "./Typography";

// H1 (Your provided template)
export function H1({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h1"
			className={cn(
				"font-light tracking-tight mb-[1em]",
				"xxxs:text-3xl",
				"xxs:text-5xl",
				"xs:text-7xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// H2
export function H2({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h2"
			className={cn(
				"font-normal tracking-tight mb-[0.8em]",
				"xxxs:text-2xl",
				"xxs:text-4xl",
				"xs:text-6xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// H3
export function H3({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h3"
			className={cn(
				"font-medium tracking-tight mb-[0.6em]",
				"xxxs:text-xl",
				"xxs:text-3xl",
				"xs:text-5xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// H4
export function H4({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h4"
			className={cn(
				"font-semibold tracking-tight mb-[0.4em]",
				"xxxs:text-lg",
				"xxs:text-2xl",
				"xs:text-4xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// H5
export function H5({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h5"
			className={cn(
				"font-semibold tracking-tight mb-2",
				"xxxs:text-base",
				"xxs:text-xl",
				"xs:text-3xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// H6
export function H6({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h6"
			className={cn(
				"font-bold tracking-tight mb-2",
				"xxxs:text-base",
				"xxs:text-lg",
				"xs:text-2xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}
