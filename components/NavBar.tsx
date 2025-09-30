"use client";
import Image from "next/image";
import { H2, H4 } from "@/components/typography/Headings";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThreeModeThemeSwitcher from "./ThreeModeThemeSwitcher";
import Menu from "@/components/icons/menu";
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
		name: "Blog",
		link: "/blog",
	},
];

export default function NavBar({ className }: props) {
	return (
		<>
			<section
				className={cn(
					"z-50 fixed min-w-screen pt-10 pb-10 hidden border-b",
					"landscape:flex landscape:flex-col lg:flex lg:flex-col",
					"backdrop-blur-lg",

					className,
				)}
			>
				<Container className={cn("flex flex-row justify-between w-full z-50")}>
					<Logo />
					<DesktopNavLinks />
					<ThreeModeThemeSwitcher className="" />
				</Container>
			</section>
			<Container className={cn("translate-y-30")}>
				<BackButton />
			</Container>
			<MobileNavMenu />
		</>
	);
}
function DesktopNavLinks() {
	const pathname = usePathname();
	return (
		<div className="flex flex-row items-center gap-1">
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
					{pathname === link.link && (
						<motion.div
							layoutId="active-nav-link"
							transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
							className={cn(
								"absolute inset-0 rounded-full",
								"bg-[var(--base-4)] dark:bg-[var(--accent-4)]",
							)}
						/>
					)}
					<span
						className={cn(
							"relative block",
							"cheese:font-custom",
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
			<div
				className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out ${
					isOverlayVisible
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				style={{ zIndex: 40 }}
				onClick={closeOverlay}
			/>

			<div
				className={`py-4 backdrop-blur-md flex items-center justify-center fixed left-10 right-10 bottom-30 bg-[var(--base-3)]/80 rounded-2xl shadow-2xl transition-all duration-500 ease-out ${
					isOverlayVisible
						? "opacity-100 scale-100"
						: "opacity-0 translate-y-[200%] scale-95"
				}`}
				style={{ zIndex: 50 }}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-center space-y-6">
					<H2 className={cn("font-stretch-extra-expanded", "mb-4")}>Menu</H2>
					<nav className="flex flex-col space-y-4 w-full">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.link}
								onClick={closeOverlay}
								className={cn(
									"transition-all text-center",
									"text-[var(--base-9)]",
									"cheese:font-custom cheese:font-stretch-extra-condensed cheese:text-3xl",

									pathname === link.link
										? "bg-[var(--base-5)] p-2 rounded-full border border-[var(--base-7)] shadow-md"
										: "opacity-75",
								)}
							>
								<H4
									className={cn(
										"cheese:font-stretch-extra-expanded hover:text-[var(--base-11)]",
									)}
								>
									{link.name}
								</H4>
							</Link>
						))}
					</nav>

					<ThreeModeThemeSwitcher className="" />
				</div>
			</div>

			<div
				className="fixed bottom-15 left-10 right-10 landscape:hidden cursor-pointer transition-all duration-200 scale-95 hover:scale-100 active:scale-95 flex justify-center h-10"
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
				<Image
					src="/images/icons/n-logo-black.svg"
					alt="logo"
					width={30}
					height={30}
					className="block dark:hidden cheese:hidden"
				/>
				<Image
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
			{/* <div className="bg-[var(--accent-9)] rounded-full w-full h-10 grid place-content-center text-sm font-bold menu-icon"> */}
			{/* 	<Menu className="text-7xl text-[var(--accent-11)] dark:text-[var(--accent-2)] cheese:text-[var(--accent-2)]" /> */}
			{/* </div> */}
			<div
				className={cn(
					// Layout
					"flex w-full h-[4em] justify-center items-center gap-2.5",

					// Border
					"rounded-full border-[0.5px] border-[var(--accent-7)]",

					// Background gradient
					"bg-gradient-to-b from-[var(--accent-3)] via-[var(--accent-2)] to-[var(--accent-4)]",

					// Complex box-shadow (needs to be in style prop)
					"[box-shadow:0_0_0.25px_1.25px_var(--accent-4)_inset,3px_5px_2px_-4.75px_var(--accent-12)_inset,1.25px_1.5px_0_0_rgba(0,0,0,0.75)_inset,0_4.75px_0.25px_-2.5px_var(--accent-12)_inset,1px_1px_3px_3px_var(--accent-2)_inset,0_-3px_1px_0_rgba(0,0,0,0.50)_inset,2.5px_-2px_3px_0_var(--accent-8)_inset,0_-3px_3px_1px_var(--accent-3)_inset]",
				)}
			>
				<H4
					className={cn(
						"text-[var(--accent-9)] cheese:font-custom cheese:font-stretch-extra-expanded",
					)}
				>
					Menu
				</H4>
			</div>
		</>
	);
}
