import React from "react";
import { cn } from "@/lib/utils";
import { Typography, type TypographyProps } from "./Typography";

// Paragraph
export function P({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="p"
			className={cn(
				"font-light tracking-[0.01em] leading-[1.75em]",
				"mb-[1em] last:mb-0",
				"text-[var(--base-12)]",
				"xxxs:text-lg",
				"xxs:text-lg",
				"xs:text-lg",
				"selection:bg-[var(--base-3)]",
				"transition-colors duration-200 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Lede - Opening/introductory text
export function Lede({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="p"
			className={cn(
				"font-light tracking-[0.015em] leading-[1.65em]",
				"text-[var(--base-11)]",
				"xxxs:text-md",
				"xxs:text-lg",
				"xs:text-xl",
				"selection:bg-[var(--base-3)]",
				// "border-l-2 border-[var(--accent-6)] pl-6",
				// "xxxs:pl-4 xxs:pl-5 xs:pl-6",
				// "transition-colors duration-200 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Eyebrow Text - Section labels
export function Eyebrow({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="p"
			className={cn(
				"font-medium uppercase tracking-[0.1em] mb-[0.2em]",
				"text-[var(--base-11)]",
				"xxxs:text-xs",
				"xxs:text-sm",
				"xs:text-md",
				"selection:bg-[var(--base-3)]",
				className,
			)}
			cheeseClassName="font-custom letter-spacing-wide text-[var(--accent-9)]"
		>
			{children}
		</Typography>
	);
}

// Small Text - Metadata and captions
export function Small({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="small"
			className={cn(
				"font-normal tracking-[0.025em] leading[1.625em]",
				"text-[var(--base-11)]",
				"xxxs:text-sm",
				"xxs:text-md",
				"xs:text-lg",
				"selection:bg-[var(--base-3)]",
				"transition-colors duration-200 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Unordered List - Exhibition listings
export function UL({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="ul"
			className={cn(
				"space-y-3 list-none",
				"xxxs:space-y-2 xxs:space-y-2.5 xs:space-y-3",
				// "pl-[1em]",
				// "border-l border-[var(--accent-4)] pl-[1em]",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// List Item - Individual exhibition pieces
export function LI({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="li"
			className={cn(
				"font-light tracking-[0.005em] leading-[1.625em]",
				"text-[var(--base-12)]",
				"xxxs:text-lg",
				"xxs:text-lg",
				"xs:text-lg",
				"selection:bg-[var(--base-3)]",
				"relative before:content-['—'] before:absolute before:-left-4",
				"before:text-[var(--accent-7)] before:font-light",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Blockquote - Featured quotes or testimonials
export function Blockquote({
	children,
	className,
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="blockquote"
			className={cn(
				"font-light italic tracking-[0.02em] leading-[1.8em]",
				"text-[var(--base-10)]",
				"xxxs:text-md",
				"xxs:text-lg",
				"xs:text-xl",
				"border-l-4 border-[var(--base-6)] pl-8 py-4",
				"xxxs:pl-6 xxxs:py-3 xxs:pl-7 xxs:py-3.5 xs:pl-8 xs:py-4",
				"bg-gradient-to-r from-[var(--base-2)] to-transparent",
				"selection:bg-[var(--base-3)]",
				"relative before:content-['\"'] before:text-[var(--base-8)]",
				"before:text-4xl before:font-serif before:absolute before:-left-2 before:-top-2",
				"after:content-['\"'] after:text-[var(--base-8)]",
				"after:text-4xl after:font-serif",
				"transition-all duration-300 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Caption - For images or special content
export function Caption({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="figcaption"
			className={cn(
				"font-normal italic tracking-[0.025em] leading-[1.625em]",
				"text-[var(--base-11)]",
				"xxxs:text-sm",
				"xxs:text-md",
				"xs:text-lg",
				"text-center mt-[0.5em]",
				"selection:bg-[var(--base-3)]",
				"border-t border-[var(--base-4)] pt-[0.5em] mb-[1em]",
				"transition-colors duration-200 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}

// Strong Text - Emphasized inline text
export function Strong({ children, className }: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="strong"
			className={cn(
				"font-semibold tracking-[0.015em]",
				"text-[var(--base-11)]",
				// "xxxs:text-sm",
				// "xxs:text-md",
				// "xs:text-lg",
				"selection:bg-[var(--accent-3)] selection:text-[var(--accent-12)]",
				"transition-colors duration-200 ease-out",
				className,
			)}
		>
			{children}
		</Typography>
	);
}
