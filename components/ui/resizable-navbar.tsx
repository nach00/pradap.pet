"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
	children: React.ReactNode;
	className?: string;
}

interface NavBodyProps {
	children: React.ReactNode;
	className?: string;
	visible?: boolean;
}

interface NavItemsProps {
	items: {
		name: string;
		link: string;
		isActive?: boolean;
	}[];
	className?: string;
	onItemClick?: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const [visible, setVisible] = useState<boolean>(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 10) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	});

	return (
		<motion.div
			ref={ref}
			className={cn("fixed inset-x-0 top-8 z-40 w-full", className)}
		>
			{React.Children.map(children, (child) =>
				React.isValidElement(child)
					? React.cloneElement(
							child as React.ReactElement<{ visible?: boolean }>,
							{ visible },
						)
					: child,
			)}
		</motion.div>
	);
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? "blur(10px)" : "none",
				boxShadow: visible
					? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
					: "none",
				width: visible ? "40%" : "100%",
				y: visible ? 20 : 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 50,
			}}
			style={{
				minWidth: "800px",
			}}
			className={cn(
				"relative z-50 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex bg-[var(--base-9)]",
				visible && "rounded-sm",
				className,
			)}
		>
			{children}
		</motion.div>
	);
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<motion.div
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-[var(--base-6)] transition duration-200 hover:text-[var(--base-8)] lg:flex lg:space-x-2",
				className,
			)}
		>
			{items.map((item, idx) => (
				<Link
					onMouseEnter={() => setHovered(idx)}
					onClick={onItemClick}
					className={cn(
						"relative px-4 py-2 text-[var(--accent-12)] transition-colors",
						item.isActive && "text-black font-semibold dark:text-white",
					)}
					key={`link-${idx}`}
					href={item.link}
				>
					{(hovered === idx || item.isActive) && (
						<motion.div
							layoutId="hovered"
							className={cn(
								"absolute inset-0 h-full w-full rounded-sm",
								item.isActive ? "bg-[var(--base-4)]" : "bg-[var(--base-3)]",
							)}
							initial={false}
							animate={{
								opacity: item.isActive ? 1 : hovered === idx ? 1 : 0,
							}}
						/>
					)}
					<span className="relative z-20">{item.name}</span>
				</Link>
			))}
		</motion.div>
	);
};

export const NavbarLogo = () => {
	return (
		<Link
			href="/"
			className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
		>
			<img
				src="/images/icons/n-logo-black.svg"
				alt="logo"
				width={30}
				height={30}
				className="block dark:hidden"
			/>
			<img
				src="/images/icons/n-logo-yellow.svg"
				alt="logo"
				width={30}
				height={30}
				className="hidden dark:block"
			/>
			<span className="font-medium text-[var(--base-12)] dark:text-[var(--accent-9)]">
				Natcha Pradappet
			</span>
		</Link>
	);
};
