import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { type TypographyProps } from "./Typography";

export function H1({
	children,
	className,
	darkClassName,
	cheeseClassName,
	hoverClassName,
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h1"
			className={cn(
				"text-5xl font-light leading-tight mb-8 tracking-tight",
				className,
			)}
			darkClassName=""
			cheeseClassName="font-custom text-9xl text-[var(--accent-9)]"
			portraitClassName="text-xl"
			landscapeClassName=""
			hoverClassName=""
		>
			{children}
		</Typography>
	);
}

// as="h2"
// size="5xl"
// weight="wide-bold"
// transform="uppercase"
// tracking="tight"
// color="primary"
