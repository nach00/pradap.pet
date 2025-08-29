"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";

type Props = {
	className?: string;
};

export default function ThemeSwitcher({ className }: Props) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);
	const ref = useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeChange = async (checked: boolean) => {
		const newTheme = checked ? "dark" : "light";

		// Fallback for browsers that don't support the View Transitions API
		if (!document.startViewTransition || !ref.current) {
			setTheme(newTheme);
			return;
		}

		// Start the view transition
		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(newTheme);
			});
		}).ready;

		// Get the coordinates of the switch component
		const { top, left, width, height } = ref.current.getBoundingClientRect();
		const x = left + width / 2;
		const y = top + height / 2;

		// Calculate the radius to cover the entire screen
		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		// Animate the new view (the new theme)
		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRadius}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 700,
				easing: "ease-in-out",
				// Apply the animation to the new DOM state
				pseudoElement: "::view-transition-new(root)",
			},
		);
	};

	if (!mounted) {
		// Render a placeholder or nothing to avoid hydration mismatch
		return (
			<div className={cn("flex flex-row items-center gap-3", className)}>
				<Sun className="size-4" />
				<div className="h-5 w-9 rounded-full bg-gray-200 dark:bg-gray-700" />
				<Moon className="size-4" />
			</div>
		);
	}

	const isDark = theme === "dark";

	return (
		<div
			ref={ref}
			className={cn(
				"flex",
				"flex-row",
				"items-center", // Aligns icons and switch vertically
				"gap-3",
				className,
			)}
		>
			<Sun className="size-4" />
			<Switch
				checked={isDark}
				onCheckedChange={handleThemeChange}
				aria-label="Toggle theme"
			/>
			<Moon className="size-4" />
		</div>
	);
}
