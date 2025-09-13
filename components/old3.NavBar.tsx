"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import ThreeModeThemeSwitcher from "./ThreeModeThemeSwitcher";
import { MenuIcon } from "./icons/wb-icons";
import BackButton from "./BackButton";
import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";

const links = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Work", link: "/work" },
	{ name: "Blog", link: "/blog" },
	{ name: "Contact", link: "/contact" },
];

interface Props {
	className?: string;
}

export default function NavBar({ className }: Props) {
	return (
		<>
			{/* Desktop Nav */}
			<header
				className={cn(
					"fixed inset-x-0 top-0 z-50 hidden landscape:flex flex-col border-b backdrop-blur-lg",
					"bg-background/70 supports-[backdrop-filter]:bg-background/50",
					className,
				)}
			>
				<Container className="flex items-center justify-between py-4 w-full">
					<Logo />
					<DesktopNavLinks />
					<ThreeModeThemeSwitcher className="portrait:hidden" />
				</Container>
				<Container className="py-0 flex w-full">
					<BackButton />
				</Container>
			</header>

			{/* Mobile Nav */}
			<MobileNav />
		</>
	);
}

function DesktopNavLinks() {
	const pathname = usePathname();
	return (
		<nav className="flex items-center gap-2 portrait:hidden">
			{links.map((link) => (
				<Link
					key={link.name}
					href={link.link}
					className="relative px-3 py-2 rounded-full text-sm font-medium transition-colors"
				>
					{pathname === link.link && (
						<motion.div
							layoutId="active-link"
							className="absolute inset-0 rounded-full bg-[var(--base-4)] dark:bg-[var(--accent-4)]"
							transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
						/>
					)}
					<H6
						className={cn(
							"relative z-10 cheese:font-custom",
							pathname === link.link
								? "text-[var(--base-9)] dark:text-[var(--accent-9)]"
								: "text-[var(--base-11)] dark:text-[var(--base-12)] hover:text-[var(--base-12)]",
						)}
					>
						{link.name}
					</H6>
				</Link>
			))}
		</nav>
	);
}

function MobileNav() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Mobile Toggle Button */}
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-4 left-6 right-6 z-50 landscape:hidden"
				aria-label="Open menu"
				aria-expanded={isOpen}
			>
				<div className="h-12 w-full rounded-full bg-[var(--accent-9)] grid place-content-center shadow-md hover:scale-105 active:scale-95 transition-transform">
					<MenuIcon className="text-3xl text-[var(--accent-8)]" />
				</div>
			</button>

			{/* Overlay + Sliding Panel */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 bg-black/60 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={() => setIsOpen(false)}
							style={{ zIndex: 40 }}
						/>

						{/* Sliding Menu */}
						<motion.div
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: "100%", opacity: 0 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="fixed bottom-4 left-6 right-6 rounded-2xl bg-[var(--base-3)]/90 backdrop-blur-xl shadow-2xl p-6 flex flex-col items-center space-y-6 mb-18"
							style={{ zIndex: 50 }}
						>
							<H2 className="text-lg tracking-wide cheese:font-stretch-extra-expanded">
								Menu
							</H2>
							<nav className="flex flex-col items-center space-y-4 w-full">
								{links.map((link) => (
									<Link
										key={link.name}
										href={link.link}
										onClick={() => setIsOpen(false)}
										className={cn(
											"text-[var(--base-9)] hover:text-[var(--accent-9)] transition-colors: cheese:font-stretch-extra-expanded cheese:font-custom",
											pathname === link.link &&
												"underline underline-offset-8 decoration-[var(--accent-8)]",
										)}
									>
										<H4>{link.name}</H4>
									</Link>
								))}
							</nav>
							<ThreeModeThemeSwitcher />
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

function Logo() {
	return (
		<Link
			href="/"
			className="flex items-center gap-2 text-sm font-medium relative z-10"
		>
			<img
				src="/images/icons/n-logo-black.svg"
				alt="logo"
				width={28}
				height={28}
				className="block dark:hidden cheese:hidden"
			/>
			<img
				src="/images/icons/n-logo-yellow.svg"
				alt="logo"
				width={28}
				height={28}
				className="hidden dark:block cheese:block"
			/>
			<span className="text-[var(--base-12)] dark:text-[var(--accent-9)] cheese:hidden">
				Natcha Pradappet
			</span>
			<span className="hidden cheese:block cheese:font-custom cheese:font-stretch-extra-expanded cheese:text-lg text-[var(--accent-9)]">
				Nacho
			</span>
		</Link>
	);
}
