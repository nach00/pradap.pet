import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { type TypographyProps } from "./Typography";

export default function H1({
	children,
	className,
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h1"
			className={cn(
				"font-light tracking-tight mb-[1em]",
				"xxxs:text-3xl",
				"xxs:text-5xl",
				"xs:text-7xl",
				className,
			)}
		>
			{children}
		</Typography>
	);
}
// export default function H1({
// 	children,
// 	className,
// 	darkClassName,
// 	cheeseClassName,
// 	hoverClassName,
// }: Omit<TypographyProps, "as">) {
// 	return (
// 		<Typography
// 			as="h1"
// 			className={cn(
// 				"font-light tracking-tight",
//         "xxxs:text-3xl",
// 				"xxs:text-5xl",
// 				"xs:text-7xl",
// 				className,
// 			)}
// 			darkClassName=""
// 			cheeseClassName="font-custom text-[var(--accent-9)]"
// 			portraitClassName=""
// 			landscapeClassName=""
// 			hoverClassName=""
// 		>
// 			{children}
// 		</Typography>
// 	);
// }
