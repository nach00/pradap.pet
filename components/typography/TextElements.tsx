import React from "react";
import { cn } from "@/lib/utils";
import { Typography, type TypographyProps } from "./Typography";

// Paragraph
export function P({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="p"
			className={cn(
				"font-light",
				"leading-[1.75em]",
				"xxxs:text-sm",
				"xxs:text-md",
				"xs:text-lg",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Lede
export function Lede({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="span"
			className={cn(
				"font-light",
				"leading-[1.75em]",
				"xxxs:text-md",
				"xxs:text-lg",
				"xs:text-xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Eyebrow Text
export function Eyebrow({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="p"
			className={cn(
				"font-semibold uppercase tracking-wider text-muted-foreground mb-2",
				"xxxs:text-xs",
				"xxs:text-sm",
				"xs:text-md",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Small Text
export function Small({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="small"
			className={cn(
				"font-medium leading-none",
				"xxxs:text-xs",
				"xxs:text-sm",
				"xs:text-md",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Unordered List
export function UL({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="ul"
			className={cn("my-4 ml-6 list-disc space-y-2", className)}
		>
			{children}
		</Typography>
	);
}

// List Item (matches paragraph scaling for consistency)
export function LI({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="li"
			className={cn(
				"tracking-tight",
				"xxxs:text-sm",
				"xxs:text-md",
				"xs:text-lg",
				className,
			)}
		>
			{children}
		</Typography>
	);
}
