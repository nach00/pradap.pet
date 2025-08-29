"use client";
import { useEffect } from "react";

// import { Moon, Sun } from "lucide-react";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";
import { SunIcon, MoonIcon } from "@/components/icons/wb-icons";
import { useTheme } from "next-themes";

// <SunIcon className="text-4xl" />
// <MoonIcon className="text-4xl" />
type props = {
	className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const changeTheme = async () => {
		if (!buttonRef.current) return;

		const newTheme = theme === "dark" ? "light" : "dark";

		// setTheme(newTheme);

		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(newTheme);
				// const dark = document.documentElement.classList.toggle("dark");
				// setIsDarkMode(dark);
			});
		}).ready;

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect();
		const y = top + height / 2;
		const x = left + width / 2;

		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRad}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 700,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		);
	};

	const isDarkMode = mounted && theme === "dark";

	return (
		<button
			ref={buttonRef}
			onClick={changeTheme}
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
			{isDarkMode ? <Moon /> : <Sun />}
		</button>
	);
};
