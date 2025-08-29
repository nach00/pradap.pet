"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/AnimatedThemeToggler";
export interface FloatingDockItem {
	title: string;
	icon: React.ReactNode;
	link: string;
	isActive?: boolean;
}

interface FloatingDockProps {
	items: FloatingDockItem[];
	className?: string;
}

export function FloatingDock({ items, className }: FloatingDockProps) {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<motion.div
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"flex items-center gap-1 rounded-xl bg-[var(--base-2)]/50 backdrop-blur-sm p-2 shadow-lg",
				className,
			)}
		>
			{items.map((item, idx) => (
				<Link
					key={`dock-${idx}`}
					href={item.link}
					onMouseEnter={() => setHovered(idx)}
					className={cn(
						"relative rounded-lg p-2 w-14 h-14 flex items-center justify-center transition-all duration-200",
						item.isActive ? "text-[var(--base-12)]" : "text-[var(--base-9)]",
					)}
				>
					{/* Background animation - similar to your desktop navbar */}
					{(hovered === idx || item.isActive) && (
						<motion.div
							layoutId="hovered-dock"
							className={cn(
								"absolute inset-0 h-full w-full rounded-lg",
								item.isActive ? "bg-[var(--base-4)]" : "bg-[var(--base-3)]",
							)}
							initial={false}
							animate={{
								opacity: item.isActive ? 1 : hovered === idx ? 1 : 0,
							}}
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 50,
							}}
						/>
					)}
					{/* Icon with relative z-index to appear above background */}
					<span className="relative z-20 flex items-center justify-center flex-col p-4 text-xs">
						{item.icon}
						{item.title}
					</span>
				</Link>
			))}
			<AnimatedThemeToggler />
		</motion.div>
	);
}
