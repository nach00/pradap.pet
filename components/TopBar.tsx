"use client";
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
		// {
		// 	name: "About",
		// 	link: "/about",
		// },
		{
			name: "Work",
			link: "/work",
		},
		// {
		// 	name: "Blog",
		// 	link: "/blog",
		// },
	];

	const navItemsWithActive = navItems.map((item) => ({
		...item,
		isActive:
			pathname === item.link ||
			(item.link !== "/" && pathname.startsWith(item.link)),
	}));

	return (
		<div className="relative w-full">
			<Navbar className="">
				<NavBody className="bg-[var(--base-a12)]/80 dark:bg-[var(--base-a1)]/800">
					<NavbarLogo />
					<div className="absolute flex w-full items-center">
						<NavItems items={navItemsWithActive} />
					</div>
					{/* <Button variant="secondary"> */}
					{/* 	<Link href="/contact">Contact</Link> */}
					{/* </Button> */}
					<AnimatedThemeToggler className="z-50" />
				</NavBody>
			</Navbar>
		</div>
	);
}
