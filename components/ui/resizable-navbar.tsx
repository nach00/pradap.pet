"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
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
			className={cn("fixed inset-x-0 top-14 z-40 w-full", className)}
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
				"relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
				visible && "rounded-full",
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
				"hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
				className,
			)}
		>
			{items.map((item, idx) => (
				<a
					onMouseEnter={() => setHovered(idx)}
					onClick={onItemClick}
					className={cn(
						"relative px-4 py-2 text-white transition-colors dark:text-neutral-300",
						item.isActive && "text-black font-semibold dark:text-white",
					)}
					key={`link-${idx}`}
					href={item.link}
				>
					{(hovered === idx || item.isActive) && (
						<motion.div
							layoutId="hovered"
							className={cn(
								"absolute inset-0 h-full w-full rounded-full",
								item.isActive
									? "bg-gray-200 dark:bg-neutral-700"
									: "bg-gray-100 dark:bg-neutral-800",
							)}
							initial={false}
							animate={{
								opacity: item.isActive ? 1 : hovered === idx ? 1 : 0,
							}}
						/>
					)}
					<span className="relative z-20">{item.name}</span>
				</a>
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
				src="/images/icons/n-logo-white.svg"
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
			<span className="font-medium text-[var(--base-1)] dark:text-[var(--accent-9)]">
				Natcha Pradappet
			</span>
		</Link>
	);
};

export const NavbarButton = ({
	href,
	as: Tag = "a",
	children,
	className,
	variant = "primary",
	...props
}: {
	href?: string;
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	variant?: "primary" | "secondary" | "dark" | "gradient" | "ghost";
} & (
	| React.ComponentPropsWithoutRef<"a">
	| React.ComponentPropsWithoutRef<"button">
)) => {
	const baseStyles =
		"inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xs text-sm font-medium tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

	const variantStyles = {
		primary:
			"shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
		secondary: "bg-transparent shadow-none dark:text-white",
		dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
		gradient:
			"bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
		ghost:
			"hover:bg-var(--base-8) hover:text-var(--base-9) active:bg-var(--base-8)",
	};

	return (
		<Tag
			href={href || undefined}
			className={cn(baseStyles, variantStyles[variant], className)}
			{...props}
		>
			{children}
		</Tag>
	);
};
