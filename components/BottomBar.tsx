"use client";
import React from "react";

import { AnimatedThemeToggler } from "@/components/AnimatedThemeToggler";
import { usePathname } from "next/navigation";
import Home from "@/components/icons/home";
import About from "@/components/icons/about";
import Blog from "@/components/icons/blog";
import Contact from "@/components/icons/contact";
import Work from "@/components/icons/work";

import { FloatingDock } from "@/components/ui/floating-dock";

import { FireIcon } from "@/components/icons/wb-icons";

export function BottomBar() {
	const pathname = usePathname();
	const navItems = [
		{
			title: "Home",
			icon: <Home className="w-5 h-5" />,
			link: "/",
		},
		// {
		// 	title: "About",
		// 	icon: <About className="w-5 h-5" />,
		// 	link: "/about",
		// },
		{
			title: "Work",
			icon: <Work className="w-5 h-5" />,
			link: "/work",
		},
		// {
		// 	title: "Blog",
		// 	icon: <Blog className="w-5 h-5" />,
		// 	link: "/blog",
		// },
		// {
		// 	title: "Contact",
		// 	icon: <Contact className="w-5 h-5" />,
		// 	link: "/contact",
		// },
	];

	const navItemsWithActive = navItems.map((item) => ({
		...item,
		isActive:
			pathname === item.link ||
			(item.link !== "/" && pathname.startsWith(item.link)),
	}));

	return (
		<div className="flex w-full items-center justify-center md:hidden">
			<FloatingDock
				className="fixed bottom-4 z-50"
				items={navItemsWithActive}
			/>
			<AnimatedThemeToggler />
		</div>
	);
}
