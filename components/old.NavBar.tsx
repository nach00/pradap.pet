import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Link from "next/link";

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
					"fixed portrait:bottom-0 landscape:top-0 left-0 right-0",
					className,
				)}
			>
				<Logo />
				<NavLinks />
			</Container>
		</>
	);
}

function NavLinks() {
	return (
		<div className="flex flex-row gap-3">
			{links.map((link) => (
				<Link id={link.name} href={link.link}>
					{link.name}
				</Link>
			))}
		</div>
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
		</>
	);
}
