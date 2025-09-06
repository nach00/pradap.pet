"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";
import Cheese from "@/components/icons/cheese";

type ThemeMode = "light" | "dark" | "cheese";

type ThemeTab = {
	id: ThemeMode;
	icon: React.ReactNode;
	bgColor: string;
	iconColor: string;
};

const themeConfig: ThemeTab[] = [
	{
		id: "light",
		icon: <Sun className="size-5" />,
		bgColor: "bg-[var(--base-2)]",
		iconColor: "text-[var(--accent-9)]",
	},
	{
		id: "dark",
		icon: <Moon className="size-5" />,
		bgColor: "bg-[var(--base-2)]",
		iconColor: "text-[var(--base-11)]",
	},
	{
		id: "cheese",
		icon: <Cheese className="size-5" />,
		bgColor: "bg-[var(--accent-2)]",
		iconColor: "text-[var(--accent-9)]",
	},
];

type Props = {
	className?: string;
};

export default function ThreeModeThemeSwitcher({ className }: Props) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Fix: Use useEffect instead of useState for mounting
	useEffect(() => {
		setMounted(true);
	}, []);

	// Fix: Return a skeleton/placeholder during SSR to prevent layout shift
	if (!mounted) {
		return (
			<div className={cn("flex items-center", className)}>
				<div className="relative inline-flex items-center rounded-full p-2 w-[200px] bg-[var(--base-2)] dark:bg-[var(--base-8)]">
					<div className="flex w-full h-full relative">
						{[1, 2, 3].map((i) => (
							<div key={i} className="flex-1 flex items-center justify-center">
								<div className="size-4 opacity-40" />
							</div>
						))}
					</div>
					<div className="absolute w-14 top-1 p-1 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center z-20 translate-x-1">
						<div className="size-4" />
					</div>
				</div>
			</div>
		);
	}

	const currentTheme = (theme as ThemeMode) || "light";
	const activeThemeConfig =
		themeConfig.find((t) => t.id === currentTheme) || themeConfig[0];

	const handleThemeChange = (newTheme: ThemeMode) => {
		setTheme(newTheme);
	};

	// Fix: Calculate position more reliably
	const getIndicatorPosition = () => {
		switch (currentTheme) {
			case "light":
				return 4;
			case "dark":
				return 64;
			case "cheese":
				return 124;
			default:
				return 4;
		}
	};

	return (
		<div className={cn("flex items-center", className)}>
			<div
				className={cn(
					"relative inline-flex items-center rounded-full p-2",
					"w-[200px] transition-colors duration-300 ease-out",
					activeThemeConfig.bgColor,
				)}
			>
				{/* Background track with icons */}
				<div className="flex w-full h-full relative">
					{themeConfig.map((themeTab) => (
						<button
							key={themeTab.id}
							onClick={() => handleThemeChange(themeTab.id)}
							className={cn(
								"flex-1 flex items-center justify-center relative z-10",
								"transition-all duration-300 ease-out",
								"hover:scale-110",
							)}
							aria-label={`Switch to ${themeTab.id} theme`}
						>
							<div
								className={cn(
									"transition-all duration-300 ease-out",
									// Fix: Invert the opacity logic to match what's expected
									currentTheme === themeTab.id
										? "opacity-40 scale-100"
										: "opacity-20 scale-90",
									"text-[var(--base-9)]",
								)}
							>
								{themeTab.icon}
							</div>
						</button>
					))}
				</div>

				{/* Animated sliding indicator */}
				<motion.div
					className="absolute w-14 top-1 p-1 bg-[var(--accent-11)] dark:bg-[var(--base-6)] cheese:bg-[var(--base-9)] rounded-full shadow-lg flex items-center justify-center z-20"
					animate={{
						x: getIndicatorPosition(),
					}}
					transition={{
						type: "spring",
						bounce: 0.2,
						duration: 0.6,
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<motion.div
						key={currentTheme}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={activeThemeConfig.iconColor}
					>
						{activeThemeConfig.icon}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
