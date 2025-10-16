import React from "react";
import { cn } from "@/lib/utils";

export interface TypographyProps {
	id?: string;
	children: React.ReactNode;
	className?: string;
	darkClassName?: string;
	cheeseClassName?: string;
	portraitClassName?: string;
	landscapeClassName?: string;
	hoverClassName?: string;
	as?: React.ElementType;
}

export function Typography({
	id,
	children,
	className,
	darkClassName,
	cheeseClassName,
	portraitClassName,
	landscapeClassName,
	hoverClassName,
	as = "span",
}: TypographyProps) {
	const Component = as;

	const addThemePrefix = (
		classNames: string | undefined,
		themePrefix: string,
	) => {
		if (!classNames) return ""; // accepts empty string
		return classNames
			.split(" ") // split by spaces
			.filter((c) => c.trim()) // filter empty strings or double spaces
			.map((c) => `${themePrefix}:${c}`) // add theme prefix
			.join(" "); // combine into string
	};

	return React.createElement(
		Component,
		{
			id: id,
			className: cn(
				className,
				addThemePrefix(darkClassName, "dark"),
				addThemePrefix(cheeseClassName, "cheese"),
				addThemePrefix(portraitClassName, "portrait"),
				addThemePrefix(landscapeClassName, "landscape"),
				addThemePrefix(hoverClassName, "hover"),
			),
		},
		children,
	);
}
