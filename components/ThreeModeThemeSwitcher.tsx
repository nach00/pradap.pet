"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";
import Cheese from "@/components/icons/cheese";

// Cheese icon component
// const Cheese = ({ className }: { className?: string }) => (
// 	<svg
// 		xmlns="http://www.w3.org/2000/svg"
// 		viewBox="0 0 24 24"
// 		fill="currentColor"
// 		className={className}
// 	>
// 		<path d="M12 2L3 7v10c0 5.55 3.84 7.74 9 9 5.16-1.26 9-3.45 9-9V7l-9-5zm-1 15.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm1-7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
// 	</svg>
// );

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

	useState(() => {
		setMounted(true);
	});

	if (!mounted) return null;

	const currentTheme = (theme as ThemeMode) || "light";
	const activeThemeConfig =
		themeConfig.find((t) => t.id === currentTheme) || themeConfig[0];

	const handleThemeChange = (newTheme: ThemeMode) => {
		setTheme(newTheme);
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
									currentTheme === themeTab.id
										? "opacity-0 scale-90"
										: "opacity-40 scale-100",
									"text-[var(--base-9)]",
								)}
							>
								{themeTab.icon}
								{/* {themeTab.id} */}
							</div>
						</button>
					))}
				</div>

				{/* Animated sliding indicator */}
				<motion.div
					className="absolute w-14 top-1 p-1 bg-[var(--base-4)] rounded-full shadow-lg flex items-center justify-center z-20"
					animate={{
						x:
							currentTheme === "light" ? 4 : currentTheme === "dark" ? 64 : 124,
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
