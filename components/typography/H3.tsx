import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { type TypographyProps } from "./Typography";

export default function H3({
	children,
	className,
	darkClassName,
	cheeseClassName,
	hoverClassName,
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h3"
			className={cn("text-xl font-medium mb-4 tracking-tight", className)}
			darkClassName=""
			cheeseClassName="font-custom"
			portraitClassName=""
			landscapeClassName=""
			hoverClassName=""
		>
			{children}
		</Typography>
	);
}
