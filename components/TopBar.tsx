"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Navbar,
	NavBody,
	NavItems,
	NavbarLogo,
} from "@/components/ui/resizable-navbar";

export function TopBar() {
	const pathname = usePathname();
	const navItems = [
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
				<NavBody className="bg-[var(--base-a1)]">
					<NavbarLogo />
					<NavItems items={navItemsWithActive} />
					<Button variant="secondary">
						<Link href="/contact">Contact</Link>
					</Button>
				</NavBody>
			</Navbar>
		</div>
	);
}
