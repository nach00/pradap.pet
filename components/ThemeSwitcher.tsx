"use client";
import { cn } from "@/lib/utils";
import React from "react";
// import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";
type props = {
	className?: string;
};

export default function ThemeSwitcher({ className }: props) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<div
			className={cn(
				"flex",
				"flex-row",
				"gap-3",

				className,
			)}
		>
			<Sun className="size-4 text-[var(--accent-9)]" />
			<Switch
				checked={isDark}
				onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
				aria-label="Toggle theme"
			/>
			<Moon className="size-4 text-white" />
		</div>
	);
}
