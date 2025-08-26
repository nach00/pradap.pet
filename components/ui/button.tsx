import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xs text-sm font-medium tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					"bg-[var(--base-12)] text-[var(--base-1)] shadow-sm hover:bg-[var(--accent-9)] hover:text-[var(--base-12)] dark:hover:text-[var(--base-1)] active:scale-[0.98] shadow-sm",
				destructive:
					"bg-destructive text-white shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
				outline:
					"border border-border bg-transparent shadow-sm hover:bg-[var(--base-3)] hover:border-[var(--base-8)] active:scale-[0.98]",
				secondary:
					"text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4 decoration-1",
				ghost:
					"hover:bg-var(--base-8) hover:text-var(--base-9) active:bg-var(--base-8)",
				link: "text-primary underline-offset-4 hover:underline decoration-1 p-0 h-auto",
			},
			size: {
				default: "h-11 px-6 py-2.5",
				sm: "h-9 px-4 py-2 text-xs",
				lg: "h-12 px-8 py-3 text-base",
				xl: "h-14 px-10 py-4 text-base",
				icon: "size-10",
				"icon-sm": "size-8",
				"icon-lg": "size-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			// style={{ borderRadius: ".5em", cornerShape: "superellipse(0)" }}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
