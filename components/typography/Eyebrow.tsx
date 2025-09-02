import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { type TypographyProps } from "./Typography";

export function Eyebrow({
	children,
	className,
	darkClassName,
	cheeseClassName,
	hoverClassName,
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h5"
			className={cn(
				"text-xs text-[var(--base-12)] uppercase tracking-wider",
				className,
			)}
			darkClassName=""
			cheeseClassName="font-custom text-sm text-[var(--accent-9)] font-bold font-stretch-extra-expanded"
			portraitClassName=""
			landscapeClassName=""
			hoverClassName=""
		>
			{children}
		</Typography>
	);
}

// as="h5"
// size="sm"
// weight="narrow-bold"
// transform="uppercase"
// tracking="wider"
// color="secondary"
