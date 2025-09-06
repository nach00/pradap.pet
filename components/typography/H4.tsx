import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { type TypographyProps } from "./Typography";

export default function H4({
	children,
	className,
	darkClassName,
	cheeseClassName,
	hoverClassName,
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h4"
			className={cn(
				"font-bold",
				"tracking-tight",
				"text-[var(--base-11)]",
				"mb-6 last:mb-0",
				"leading-[1.6em]",
				"xxxs:text-md",
				"xxs:text-lg",
				"xs:text-xl",
				className,
			)}
			darkClassName=""
			cheeseClassName=""
			portraitClassName=""
			landscapeClassName=""
			hoverClassName=""
		>
			{children}
		</Typography>
	);
}
