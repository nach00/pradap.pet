import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { type TypographyProps } from "./Typography";

export default function H2({
	children,
	className,
	darkClassName,
	cheeseClassName,
	hoverClassName,
}: Omit<TypographyProps, "as">) {
	return (
		// 	<Typography
		// 		as="h2"
		// 		className={cn(
		// 			"text-4xl font-light mb-12 text-[var(--accent-12)] tracking-tight md:text-2xl",
		//
		// 			className,
		// 		)}
		// 		darkClassName=""
		// 		cheeseClassName="font-custom text-9xl text-[var(--accent-9)] portrait:text-xl"
		// 		portraitClassName=""
		// 		landscapeClassName=""
		// 		hoverClassName=""
		// 	>
		// 		{children}
		// 	</Typography>

		<Typography
			as="h2"
			className={cn(
				"font-light tracking-tight text-xl mb-[1.5em]",
				"xxs:text-3xl",
				"xs:text-5xl",
				className,
			)}
			darkClassName=""
			cheeseClassName="font-custom text-[var(--accent-9)]"
			portraitClassName=""
			landscapeClassName=""
			hoverClassName=""
		>
			{children}
		</Typography>
	);
}
