"use client";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ModeToggle } from "@/components/ModeToggle";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Navbar,
	NavBody,
	NavItems,
	NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { AnimatedThemeToggler } from "@/components/AnimatedThemeToggler";

export function TopBar() {
	const pathname = usePathname();
	const navItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Work",
			link: "/work",
		},
	];

	const navItemsWithActive = navItems.map((item) => ({
		...item,
		isActive:
			pathname === item.link ||
			(item.link !== "/" && pathname.startsWith(item.link)),
	}));

	return (
		<Navbar className="">
			<NavBody className="bg-[var(--base-a12)]/0 dark:bg-[var(--base-a1)]/80 min-w-full">
				<NavbarLogo />
				<div className="absolute flex w-full items-center">
					<NavItems items={navItemsWithActive} />
				</div>
				<ThemeSwitcher className="z-50" />
			</NavBody>
		</Navbar>
	);
}
