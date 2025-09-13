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
		icon: <Sun className="size-4" />,
		bgColor: "bg-[var(--base-2)]",
		iconColor: "text-[var(--accent-9)]",
	},
	{
		id: "dark",
		icon: <Moon className="size-4" />,
		bgColor: "bg-[var(--base-2)]",
		iconColor: "text-[var(--base-11)]",
	},
	{
		id: "cheese",
		icon: <Cheese className="size-4" />,
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

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className={cn("flex items-center", className)}>
				<div className="relative inline-flex items-center rounded-full p-1.5 w-[180px] h-10 bg-[var(--base-3)] dark:bg-[var(--base-8)] opacity-70" />
			</div>
		);
	}

	const currentTheme = (theme as ThemeMode) || "light";
	const activeIndex = themeConfig.findIndex((t) => t.id === currentTheme);
	const activeThemeConfig = themeConfig[activeIndex] || themeConfig[0];

	const handleThemeChange = (newTheme: ThemeMode) => {
		setTheme(newTheme);
	};

	return (
		<div className={cn("flex items-center", className)}>
			<div
				className={cn(
					"relative inline-flex items-center rounded-full p-1.5 h-10 w-[180px]",
					"transition-colors duration-300 ease-out",
					"bg-[var(--base-2)] dark:bg-[var(--base-8)] cheese:bg-[var(--base-9)]",
				)}
			>
				{/* Background track */}
				<div className="flex w-full h-full relative">
					{themeConfig.map((t) => (
						<button
							key={t.id}
							onClick={() => handleThemeChange(t.id)}
							className={cn(
								"flex-1 flex items-center justify-center relative z-10",
								"transition-transform duration-300 ease-out",
								"hover:scale-105",
								currentTheme === t.id ? t.iconColor : "opacity-50",
							)}
							aria-label={`Switch to ${t.id} theme`}
							aria-pressed={currentTheme === t.id}
						>
							{t.icon}
						</button>
					))}
				</div>

				{/* Sliding indicator */}
				<motion.div
					className={cn(
						"absolute top-1 bottom-1 rounded-full shadow-md",
						"bg-[var(--accent-11)] dark:bg-[var(--base-6)] cheese:bg-[var(--base-7)]",
						"w-[calc(33.33%-6px)] mx-[3px] flex items-center justify-center",
					)}
					animate={{
						x: `${activeIndex * 100}%`,
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 25,
					}}
				>
					<motion.div
						key={currentTheme}
						initial={{ scale: 0.85, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.85, opacity: 0 }}
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
