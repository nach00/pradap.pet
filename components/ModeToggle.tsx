"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type props = {
	className?: string;
};

export function ModeToggle({ className }: props) {
	const { setTheme, resolvedTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={toggleTheme}
			className={cn(
				// "rounded-full",
				"rounded-sm",
				"cursor-pointer",
				"p-1",
				"aspect-square",
				"flex items-center justify-center",
				"z-50",
				"active:scale-95 active:rotate-0",
				"group",
				"transition-all duration-300 ease-in-out",
				"hover:scale-110",

				// light
				"text-[var(--accent-9)]",
				"bg-[var(--accent-a10)]",
				"hover:text-[var(--accent-9)]",
				"hover:bg-[var(--accent-a9)]",

				// dark
				"dark:text-[var(--base-11)] ",
				"dark:bg-[var(--base-a4)]",
				"dark:hover:text-[var(--base-12)] ",
				"dark:hover:bg-[var(--base-a5)]",

				className,
			)}
		>
			{/* The Sun icon is visible by default (in light mode) and scales to 0 in dark mode. */}
			<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			{/* The Moon icon is hidden by default and scales to 100% in dark mode. */}
			<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
