"use client";

// import { Moon, Sun } from "lucide-react";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";
import { SunIcon, MoonIcon } from "@/components/icons/wb-icons";

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
		<div className="">
			<button
				ref={buttonRef}
				onClick={changeTheme}
				className={cn(
					"rounded-full",
					"cursor-pointer",
					"p-1",
					"aspect-square",
					"h-10",
					"w-10",
					"flex items-center justify-center",

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
				{isDarkMode ? (
					<MoonIcon className="text-2xl" />
				) : (
					<SunIcon className="text-2xl" />
				)}
			</button>
		</div>
	);
};
