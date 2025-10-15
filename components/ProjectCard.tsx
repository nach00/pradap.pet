"use client";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { H3, H6 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { ProjectBadges } from "./ProjectBadges";
import { useTheme } from "next-themes";

interface ProjectCardProps {
	href: string;
	id: string;
	year: string;
	status: string;
	category: string;
	title: string;
	lede: string;
	description?: string;
	headerImage?: string;
	darkHeaderImage?: string;
	icon?: string;
	logo?: string;
	logoDark?: string;
	className?: string;
	cardPreview?: string;
}

export function ProjectCard({
	href,
	id,
	year,
	status,
	category,
	title,
	description,
	logo,
	logoDark,
	className,
	cardPreview,
}: ProjectCardProps) {
	const { theme, resolvedTheme } = useTheme();

	const getCurrentLogo = () => {
		const currentTheme = resolvedTheme || theme;
		if ((currentTheme === "dark" || currentTheme === "cheese") && logoDark) {
			return logoDark;
		}
		return logo;
	};

	const currentLogo = getCurrentLogo();

	return (
		<>
			<Link
				href={href}
				className={cn(
					"flex flex-row border border-[var(--base-4)] pointer-cursor rounded-md",
					"transition-all duration-500 hover:border-[var(--base-6)]",
					"hover:-translate-y-1 hover:shadow-md",
					className,
				)}
			>
				<div className="flex flex-col">
					<div
						className={cn(
							"bg-[var(--base-1)] aspect-square",
							"h-[8em]",
							"p-4",
							"pl-6",
							"flex items-center justify-center",
							className,
						)}
					>
						{currentLogo && (
							<div
								className="h-full w-full bg-[var(--base-12)] cheese:bg-[var(--accent-9)]"
								style={{
									maskImage: `url(${currentLogo})`,
									WebkitMaskImage: `url(${currentLogo})`,
									maskSize: "contain",
									maskRepeat: "no-repeat",
									maskPosition: "center",
								}}
							/>
						)}
					</div>
					<div className="w-full h-full bg-[var(--base-1)] " />
				</div>
				<div className="flex flex-col w-full">
					<div
						className={cn(
							"bg-[var(--base-1)]",
							"h-[8em]  w-full",
							"flex items-center p-4",
							className,
						)}
					>
						<H3>{title}</H3>
					</div>
					<div className="bg-[var(--base-1)] p-4 pt-0">
						<ProjectBadges
							id={id}
							year={year}
							status={status}
							type={category}
						/>
						<P className="pt-6 max-w-[50ch]">{description}</P>

						<H6 className="py-8">View project →</H6>
					</div>
				</div>
				<div className="hidden lg:block lg:w-full lg:min-h-full lg:bg-[var(--base-3)]/50 lg:p-[1em]">
					<div className="hidden lg:flex lg:w-full lg:min-h-full lg:bg-[var(--base-2)]/50 lg:justify-center lg:items-center lg:text-7xl lg:text-mono lg:text-[var(--base-4)]">
						{cardPreview && (
							<Image
								src={cardPreview}
								width={500}
								height={500}
								alt={title}
								className="rounded-sm"
							/>
						)}
						{id}
					</div>
				</div>
			</Link>
		</>
	);
}
