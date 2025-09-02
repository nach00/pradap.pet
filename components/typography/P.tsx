import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { type TypographyProps } from "./Typography";

export function P({
	children,
	className,
	darkClassName,
	cheeseClassName,
	hoverClassName,
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="p"
			className={cn("leading-7 text-[var(--base-11)]", className)}
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
