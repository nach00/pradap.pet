import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot"; // Import Slot
import { cn } from "@/lib/utils";

// Refactored to make "mx-auto" a base style for all variants.
export const containerVariants = cva("mx-auto", {
	variants: {
		variant: {
			/**
			 * Use Case: Ideal for hero sections or image galleries where you want an immersive, edge-to-edge feel on mobile, but a standard wide layout on tablets and desktops.
			 * Details:
			 * - max-w-7xl: Sets a maximum width of 80rem (1280px).
			 * - sm:px-6: At the 'sm' breakpoint (min-width: 640px), applies 1.5rem (24px) of horizontal padding.
			 * - lg:px-8: At the 'lg' breakpoint (min-width: 1024px), applies 2rem (32px) of horizontal padding.
			 * - Below 640px, there is no horizontal padding, creating an edge-to-edge effect.
			 */
			edgeToEdgeWide: "max-w-7xl sm:px-6 lg:px-8",

			/**
			 * Use Case: A standard, all-purpose container for main site content. It provides a wide content area with safe padding on all screen sizes.
			 * Details:
			 * - max-w-7xl: Sets a maximum width of 80rem (1280px).
			 * - px-4: Applies 1rem (16px) of horizontal padding by default on all screen sizes.
			 * - sm:px-6: At 640px and up, overrides the base padding to 1.5rem (24px).
			 * - lg:px-8: At 1024px and up, overrides again to 2rem (32px).
			 */
			wide: "max-w-7xl px-4 sm:px-6 lg:px-8",

			/**
			 * Use Case: For edge-to-edge mobile experiences where the content width needs to snap to standard breakpoint sizes on larger screens, ensuring design consistency.
			 * Details:
			 * - container: Sets a responsive max-width that matches the min-width of the current breakpoint.
			 * - sm:px-6: At 640px and up, applies 1.5rem (24px) of horizontal padding.
			 * - lg:px-8: At 1024px and up, applies 2rem (32px) of horizontal padding.
			 * - Below 640px, it is full-width with no padding.
			 */
			edgeToEdgeResponsive: "container sm:px-6 lg:px-8",

			/**
			 * Use Case: The most common "go-to" container. It provides a centered, responsive content column that is padded on all screen sizes, perfect for general page content.
			 * Details:
			 * - container: Sets a responsive max-width to match the current breakpoint.
			 * - px-4: Applies 1rem (16px) of horizontal padding by default.
			 * - sm:px-6: At 640px and up, overrides to 1.5rem (24px).
			 * - lg:px-8: At 1024px and up, overrides to 2rem (32px).
			 */
			responsive: "container px-4 sm:px-6 lg:px-8",

			/**
			 * Use Case: Best for text-heavy content like blog posts or documentation. The narrower width improves readability.
			 * Details:
			 * - max-w-3xl: Sets a maximum width of 48rem (768px).
			 * - px-4: Applies 1rem (16px) of horizontal padding by default.
			 * - sm:px-6: At 640px and up, overrides to 1.5rem (24px).
			 * - lg:px-8: At 1024px and up, overrides to 2rem (32px).
			 */
			narrow: "max-w-3xl px-4 sm:px-6 lg:px-8",
			/**
			 * Use Case: A medium-width container perfect for feature sections, testimonials, or complex forms where the `narrow` variant is too constraining.
			 * Details:
			 * - max-w-5xl: Sets a maximum width of 64rem (1024px).
			 * - px-4: Applies 1rem (16px) of horizontal padding by default.
			 * - sm:px-6: At 640px and up, overrides to 1.5rem (24px).
			 * - lg:px-8: At 1024px and up, overrides to 2rem (32px).
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
	asChild?: boolean;
}

// The component is now simplified and correctly handles `asChild` and `className`.
export const Container: React.FC<ContainerProps> = ({
	asChild,
	className,
	children,
	variant,
	...props
}) => {
	// Use `Slot` if `asChild` is true, otherwise default to a `div`.
	const Comp = asChild ? Slot : "div";

	// The `cn` utility correctly merges the variant classes with any custom className prop.
	return (
		<Comp className={cn(containerVariants({ variant }), className)} {...props}>
			{children}
		</Comp>
	);
};
