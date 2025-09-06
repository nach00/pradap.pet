"use client";
import H2 from "@/components/typography/H2";
import ThemeSwitcher from "@/components/ThemeSwitcher";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThreeModeThemeSwitcher from "./ThreeModeThemeSwitcher";
import Jelly from "./Jelly";
import { MenuIcon } from "./icons/wb-icons";
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
		name: "Contact",
		link: "/contact",
	},
];

export default function NavBar({ className }: props) {
	return (
		<>
			<Container
				className={cn(
					"flex w-full justify-between items-center p-3 z-50",
					"fixed",
					className,
				)}
			>
				<Logo />
				<DesktopNavLinks />
				<MobileNavMenu />
				<ThreeModeThemeSwitcher className="portrait:hidden" />
				{/* <ThemeSwitcher className="z-50" /> */}
			</Container>
		</>
	);
}

function DesktopNavLinks() {
	const pathname = usePathname();
	return (
		<div className="flex flex-row gap-3 portrait:hidden">
			{links.map((link) => (
				<Link
					key={link.name}
					href={link.link}
					className={cn(
						"px-3 py-2 rounded-md transition-colors text-sm font-medium",
						pathname === link.link
							? "bg-[var(--base-4)] text-[var(--base-9)]  dark:text-[var(--accent-9)]  dark:bg-[var(--accent-4)]"
							: "text-[var(--base-11)] dark:text-[var(--base-12)] hover:bg-[var(--base-3)]",
					)}
				>
					{link.name}
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
	<div
		className={`fixed inset-0 bg-[var(--base-12)]/80 backdrop-blur-md transition-opacity duration-300 ease-in-out ${
			isOverlayVisible
				? "opacity-100 pointer-events-auto"
				: "opacity-0 pointer-events-none"
		}`}
		style={{ zIndex: 90 }}
	/>;

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
			/>

			{/* Sliding Panel */}
			<div
				className={`fixed left-1/2 top-1/2 -translate-x-1/2 w-80 bg-[var(--base-3)] rounded-2xl shadow-2xl p-8 transition-all duration-500 ease-out ${
					isOverlayVisible
						? "opacity-100 -translate-y-1/2 scale-100"
						: "opacity-0 -translate-y-[200%] scale-95"
				}`}
				style={{ zIndex: 50 }}
			>
				<div className="flex flex-col items-center space-y-6">
					{/* <div className="w-12 h-1 bg-gray-300 rounded-full"></div> */}
					<H2
						className={cn(
							"text-xl font-light text-[var(--base-11)]",
							"cheese:font-custom cheese:font-stretch-extra-condensed cheese:text-[var(--accent-9)] cheese:text-7xl",
						)}
					>
						Menu
					</H2>
					<nav className="flex flex-col space-y-4 w-full">
						<Link
							href="#"
							className={cn(
								"text-gray-700 hover:text-black transition-colors py-2 text-center border-b border-gray-100",
								"cheese:font-custom cheese:font-stretch-extra-condensed",
								"cheese:text-4xl text-[var(--base-9)] cheese:hover:text-[var(--base8)] cheese:hover:scale-110",
							)}
						>
							Home
						</Link>
						<Link
							href="#"
							className={cn(
								"text-gray-700 hover:text-black transition-colors py-2 text-center border-b border-gray-100",

								"cheese:font-custom cheese:font-stretch-extra-condensed",
								"cheese:text-4xl text-[var(--base-9)] cheese:hover:text-[var(--base8)] cheese:hover:scale-110",
							)}
						>
							About
						</Link>
						<Link
							href="#"
							className={cn(
								"text-gray-700 hover:text-black transition-colors py-2 text-center border-b border-gray-100",

								"cheese:font-custom cheese:font-stretch-extra-condensed",
								"cheese:text-4xl text-[var(--base-9)] cheese:hover:text-[var(--base8)] cheese:hover:scale-110",
							)}
						>
							Services
						</Link>
						<Link
							href="#"
							className={cn(
								"text-gray-700 hover:text-black transition-colors py-2 text-center border-b border-gray-100",

								"cheese:font-custom cheese:font-stretch-extra-condensed",
								"cheese:text-4xl text-[var(--base-9)] cheese:hover:text-[var(--base8)] cheese:hover:scale-110",
							)}
						>
							Contact
						</Link>
					</nav>

					<ThreeModeThemeSwitcher />
				</div>
			</div>

			{/* Navigation Menu */}
			<div
				// className="fixed bottom-4 left-10 right-10 landscape:hidden cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 flex justify-center h-10 opacity-50 hover:opacity-100"
				// className="fixed bottom-4 left-10 right-10 landscape:hidden cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 flex justify-center h-10 opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:filter"
				// className="fixed bottom-4 left-10 right-10 landscape:hidden cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 flex justify-center h-10 opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_12px_var(--accent-9)]"
				// className="fixed bottom-4 left-10 right-10 landscape:hidden cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 flex justify-center h-10 opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
				// className="fixed bottom-4 left-10 right-10 landscape:hidden cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 flex justify-center h-10 opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_10px_var(--accent-9)]"
				className="fixed bottom-4 left-10 right-10 landscape:hidden cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 flex justify-center h-10 opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_10px_var(--accent-9)] hover:animate-pulse"
				style={{ zIndex: 60 }}
				onClick={toggleOverlay}
			>
				{/* <div */}
				{/* 	className="fixed bottom-4 left-20 right-20 bg-white px-10 py-2 justify-evenly flex flex-row gap-3 landscape:hidden rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95" */}
				{/* 	style={{ zIndex: 60 }} */}
				{/* 	onClick={toggleOverlay} */}
				{/* > */}
				{/* <Jelly color="var(--base-9)">MENU</Jelly> */}
				<MobileButton />
				{/* <div className="flex flex-col gap-0.5 w-full"> */}
				{/* 	{Array.from({ length: 3 }, (_, index) => ( */}
				{/* 		<div */}
				{/* 			key={index} */}
				{/* 			className={`h-0.5 bg-[var(--base-9)]/50 w-full rounded-full transition-all duration-200 ${ */}
				{/* 				isOverlayVisible ? "bg-[var(--base-9)]/80" : "" */}
				{/* 			}`} */}
				{/* 		/> */}
				{/* 	))} */}
				{/* </div> */}
			</div>
		</>
	);
}
// function MobileNavMenu() {
// 	const pathname = usePathname();
// 	return (
// 		<div className="fixed bottom-0 left-0 right-0 bg-white p-3 justify-evenly flex flex-row gap-3 landscape:hidden">
// 			{links.map((link) => (
// 				<Link
// 					key={link.name}
// 					href={link.link}
// 					className={cn(
// 						"px-3 py-2 rounded-md transition-colors text-sm font-medium",
// 						pathname === link.link
// 							? "bg-gray-900 text-white"
// 							: "text-gray-700 hover:bg-gray-200",
// 					)}
// 				>
// 					{link.name}
// 				</Link>
// 			))}
// 		</div>
// 	);
// }

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
