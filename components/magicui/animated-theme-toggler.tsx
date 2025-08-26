"use client";

// import { Moon, Sun } from "lucide-react";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";

type props = {
	className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const changeTheme = async () => {
		if (!buttonRef.current) return;

		await document.startViewTransition(() => {
			flushSync(() => {
				const dark = document.documentElement.classList.toggle("dark");
				setIsDarkMode(dark);
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
	return (
		<div className="fixed border border-red-600 p-4 flex top-4 w-screen items-center justify-center">
			<button
				ref={buttonRef}
				onClick={changeTheme}
				className={cn(
					// position
					// "fixed",
					// "top-4",
					// "left-1/2",
					// "z-50",
					// ui
					"rounded-full",
					"cursor-pointer",
					"p-2",

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

					// mobile
					// "gt-tablet:bg-red-600",
					// "lt-tablet:bg-red-600 lt-tablet:text-white",
					className,
				)}
			>
				{isDarkMode ? <Moon /> : <Sun />}
			</button>
		</div>
	);
};
