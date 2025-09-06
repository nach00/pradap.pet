"use client";
import H2 from "@/components/typography/H2";
import Section from "@/components/layout/Section";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThreeModeThemeSwitcher from "./ThreeModeThemeSwitcher";
import { MenuIcon } from "./icons/wb-icons";
import BackButton from "./BackButton";
interface props {
	className?: string;
}

const links = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Work",
		link: "/work",
	},
	{
		name: "Blog",
		link: "/blog",
	},
	{
		name: "Contact",
		link: "/contact",
	},
];

export default function NavBar({ className }: props) {
	return (
		<>
			<section
				className={cn(
					"z-50 fixed min-w-screen pt-20 backdrop-blur-lg hidden",
					"landscape:flex landscape:flex-col landscape:",
					className,
				)}
			>
				<Container
					className={cn(
						"flex flex-row justify-between w-full",
						// "bg-[var(--base-a9)] text-[var(--accent-9)]",
					)}
				>
					<Logo />
					<DesktopNavLinks />
					<ThreeModeThemeSwitcher className="portrait:hidden" />
				</Container>
				<Container className="py-0 flex w-full">
					<BackButton />
				</Container>
			</section>
			<MobileNavMenu />
		</>
	);
}
function DesktopNavLinks() {
	const pathname = usePathname();
	return (
		<div className="flex flex-row items-center gap-1 portrait:hidden bg-[var(--base-2)] p-2 rounded-full">
			{links.map((link) => (
				<Link
					key={link.name}
					href={link.link}
					className={cn(
						"relative px-4 py-2 rounded-full text-sm font-medium",
						"transition-colors",
					)}
					style={{
						transformStyle: "preserve-3d",
					}}
				>
					{/* This motion.div creates the animated background effect */}
					{pathname === link.link && (
						<motion.div
							layoutId="active-nav-link" // Unique ID for the animation layout
							transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
							className={cn(
								"absolute inset-0 rounded-full",
								"bg-[var(--base-4)] dark:bg-[var(--accent-4)]", // Style for the active link's background
							)}
						/>
					)}
					{/* The link text, styled conditionally */}
					<span
						className={cn(
							"relative block",
							pathname === link.link
								? "text-[var(--base-9)] dark:text-[var(--accent-9)]"
								: "text-[var(--base-11)] dark:text-[var(--base-12)] hover:text-[var(--base-12)]",
						)}
					>
						{link.name}
					</span>
				</Link>
			))}
		</div>
	);
}

function MobileNavMenu() {
	const pathname = usePathname();

	const [isOverlayVisible, setIsOverlayVisible] = useState(false);

	const toggleOverlay = () => {
		setIsOverlayVisible(!isOverlayVisible);
	};

	const closeOverlay = () => {
		setIsOverlayVisible(false);
	};

	return (
		<>
			{/* Backdrop Overlay */}
			<div
				className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out ${
					isOverlayVisible
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				style={{ zIndex: 40 }}
				onClick={closeOverlay}
			/>

			{/* Sliding Panel */}
			<div
				className={`fixed left-1/2 top-1/2 -translate-x-1/2 w-min bg-[var(--base-3)] rounded-2xl shadow-2xl p-8 transition-all duration-500 ease-out ${
					isOverlayVisible
						? "opacity-100 -translate-y-1/2 scale-100"
						: "opacity-0 -translate-y-[200%] scale-95"
				}`}
				style={{ zIndex: 50 }}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-center space-y-6">
					<H2
						className={cn(
							"text-xl font-light text-[var(--base-11)]",
							"cheese:font-custom cheese:font-stretch-extra-expanded cheese:text-[var(--accent-9)] cheese:text-4xl",
						)}
					>
						Menu
					</H2>
					<nav className="flex flex-col space-y-4 w-full">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.link}
								onClick={closeOverlay}
								className={cn(
									// --- Base styles for all states ---
									"transition-all py-2 text-center",
									// Default text color for the inactive state
									"text-[var(--base-9)]",

									"hover:text-[var(--accent-9)]",

									// --- 'cheese' variant styles ---
									"cheese:font-custom cheese:font-stretch-extra-condensed cheese:text-3xl",

									// --- Conditional styles ---
									pathname === link.link
										? // Active state: Underlined, scaled, and uses accent color
											"underline underline-offset-8 underline-[var(--accent-8)]"
										: // Inactive state: Scales and changes color on hover
											"",
								)}
							>
								{link.name}
							</Link>
						))}
					</nav>

					<ThreeModeThemeSwitcher className="" />
				</div>
			</div>

			{/* Navigation Menu */}
			<div
				className="fixed bottom-4 left-10 right-10 landscape:hidden cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 flex justify-center h-10 opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_10px_var(--accent-9)] hover:animate-pulse"
				style={{ zIndex: 60 }}
				onClick={toggleOverlay}
			>
				<MobileButton />
			</div>
		</>
	);
}

function Logo() {
	return (
		<>
			<Link
				href="/"
				className="relative z-20 mr-4 flex items-center gap-2 text-sm font-normal text-black"
			>
				<img
					src="/images/icons/n-logo-black.svg"
					alt="logo"
					width={30}
					height={30}
					className="block dark:hidden cheese:hidden"
				/>
				<img
					src="/images/icons/n-logo-yellow.svg"
					alt="logo"
					width={30}
					height={30}
					className="hidden dark:block cheese:block"
				/>
				<span
					className={cn(
						"font-medium text-[var(--base-12)] dark:text-[var(--accent-9)] cheese:text-[var(--accent-9)] cheese:hidden",
						"",
					)}
				>
					Natcha Pradappet
				</span>
				<span
					className={cn(
						"hidden cheese:block cheese:text-[var(--accent-9)]",
						"cheese:font-custom cheese:font-stretch-extra-expanded cheese:text-xl",
					)}
				>
					Nacho
				</span>
			</Link>
		</>
	);
}

function MobileButton() {
	return (
		<>
			<div className="bg-[var(--accent-9)] rounded-full w-full h-10 grid place-content-center text-sm font-bold menu-icon">
				<MenuIcon className="text-5xl text-[var(--accent-8)]" />
			</div>
		</>
	);
}
