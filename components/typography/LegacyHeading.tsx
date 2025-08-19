import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

// Font files can be colocated inside of `app`
// const CalSans = localFont({
//   src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
//   display: "swap",
// });

interface HeadingProps {
	className?: string;
	children: React.ReactNode;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p";
}

export const Heading: React.FC<HeadingProps> = ({
	className,
	children,
	as = "h1",
}) => {
	const Component = as;
	return (
		<Component
			className={twMerge(
				// CalSans.className,
				"text-5xl lg:text-7xl font-semibold",
				className,
			)}
		>
			{children}
		</Component>
	);
};
