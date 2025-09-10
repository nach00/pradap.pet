import { cn } from "@/lib/utils";
import Link from "next/link";
import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { ProjectBadges } from "./ProjectBadges";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";

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
}

export function ProjectCard({
	href,
	id,
	year,
	status,
	category,
	title,
	description,
	lede,
	logo,
	logoDark,
	className,
}: ProjectCardProps) {
	// Use the next-themes hook to get the current and resolved themes
	const { theme, resolvedTheme } = useTheme();

	// This function determines which logo to display.
	// It prioritizes the dark logo if the theme is dark.
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
			<div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] bg-[var(--base-2)] border border-[var(--base-4)] transition-all duration-500 hover:border-[var(--base-6)] group">
				<div
					id="logo"
					className="aspect-square flex items-center justify-center bg-[var(--base-3)]"
				>
					{currentLogo && (
						<div
							className="h-4/5 w-4/5 bg-[var(--base-12)] cheese:bg-[var(--accent-9)]"
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
				<div
					id="title"
					className="flex items-center px-8 py-6 bg-[var(--base-1)] border-l border-[var(--base-4)]"
				>
					<H3 className="text-[var(--base-12)] font-normal tracking-tight leading-tight">
						{title}
					</H3>
				</div>
				<div
					id="blank"
					className="bg-[var(--base-3)] border-t border-[var(--base-4)]"
				/>
				<div
					id="description"
					className="px-8 py-6 flex items-start bg-[var(--base-1)] border-l border-t border-[var(--base-4)]"
				>
					<P className="text-[var(--base-10)] font-light leading-relaxed text-sm">
						{description}
					</P>
				</div>
			</div>
		</>
	);
}
