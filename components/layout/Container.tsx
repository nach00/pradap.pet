import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Container component providing responsive width and padding variants.
 * All variants are horizontally centered via mx-auto.
 */
export const containerVariants = cva("mx-auto", {
	variants: {
		variant: {
			/**
			 * Edge-to-edge on mobile, standard wide layout on larger screens.
			 * Perfect for hero sections and immersive image galleries.
			 *
			 * Breakpoints:
			 * - Mobile (<640px): Full width, no padding
			 * - Small (≥640px): 24px horizontal padding
			 * - Large (≥1024px): 32px horizontal padding
			 * - Max width: 1280px
			 */
			edgeToEdgeWide: "max-w-7xl sm:px-6 lg:px-8",

			/**
			 * Standard wide container with consistent padding across all screens.
			 * Best for main content areas requiring maximum width.
			 *
			 * Breakpoints:
			 * - Mobile: 16px horizontal padding
			 * - Small (≥640px): 24px horizontal padding
			 * - Large (≥1024px): 32px horizontal padding
			 * - Max width: 1280px
			 */
			wide: "max-w-7xl px-4 sm:px-6 lg:px-8",

			/**
			 * Responsive container matching Tailwind breakpoint widths.
			 * Edge-to-edge on mobile with breakpoint-snapped widths on larger screens.
			 *
			 * Breakpoints:
			 * - Mobile (<640px): Full width, no padding
			 * - Small (≥640px): 24px padding, 640px max width
			 * - Medium (≥768px): 768px max width
			 * - Large (≥1024px): 32px padding, 1024px max width
			 * - XL (≥1280px): 1280px max width
			 */
			edgeToEdgeResponsive: "container sm:px-6 lg:px-8",

			/**
			 * Default responsive container - the most versatile option.
			 * Provides centered, padded content across all screen sizes.
			 *
			 * Breakpoints:
			 * - Mobile: 16px horizontal padding
			 * - Small (≥640px): 24px padding, 640px max width
			 * - Medium (≥768px): 768px max width
			 * - Large (≥1024px): 32px padding, 1024px max width
			 * - XL (≥1280px): 1280px max width
			 */
			responsive: "container px-4 sm:px-6 lg:px-8",

			/**
			 * Narrow container optimized for readability.
			 * Ideal for blog posts, articles, and text-heavy content.
			 *
			 * Breakpoints:
			 * - Mobile: 16px horizontal padding
			 * - Small (≥640px): 24px horizontal padding
			 * - Large (≥1024px): 32px horizontal padding
			 * - Max width: 768px
			 */
			narrow: "max-w-3xl px-4 sm:px-6 lg:px-8",

			/**
			 * Medium-width container for balanced layouts.
			 * Perfect for feature sections, forms, and testimonials.
			 *
			 * Breakpoints:
			 * - Mobile: 16px horizontal padding
			 * - Small (≥640px): 24px horizontal padding
			 * - Large (≥1024px): 32px horizontal padding
			 * - Max width: 1024px
			 */
			medium: "max-w-5xl px-4 sm:px-6 lg:px-8",
		},
	},
	defaultVariants: {
		variant: "wide",
	},
});

export interface ContainerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof containerVariants> {
	/**
	 * When true, merges props with immediate child instead of rendering a div.
	 * Useful for semantic HTML or avoiding wrapper divs.
	 */
	asChild?: boolean;
}

/**
 * Container component for consistent page layouts and content width management.
 *
 * @example
 * ```tsx
 * // Standard container
 * <Container>Content here</Container>
 *
 * // Narrow variant for articles
 * <Container variant="narrow">Article content</Container>
 *
 * // Using asChild to avoid wrapper div
 * <Container asChild variant="wide">
 *   <main>Main content</main>
 * </Container>
 * ```
 */
export default function Container({
	asChild = false,
	className,
	children,
	variant,
	...props
}: ContainerProps) {
	const Comp = asChild ? Slot : "div";

	return (
		<Comp className={cn(containerVariants({ variant }), className)} {...props}>
			{children}
		</Comp>
	);
}
