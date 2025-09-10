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
			<div className={cn("custom-grid", className)}>
				<div className="cell-1">
					<div
						className="h-full w-full bg-[var(--base-12)] cheese:bg-[var(--accent-9)]"
						style={{
							maskImage: `url(${logo})`,
							WebkitMaskImage: `url(${logo})`,
							maskSize: "contain",
							maskRepeat: "no-repeat",
							maskPosition: "center",
						}}
					/>
				</div>
				<div className="cell-2">
					<H3>{title}</H3>
				</div>
				<div className="cell-3" />
				<div className="cell-4">{description}</div>

				<style jsx>{`
          .custom-grid {
            display: grid;
            gap: 1rem;
            border: yellow 1px solid;
            grid-template-columns: [first] 1fr [line2] auto [end];
            grid-template-rows: [row1-start] auto [row1-end] auto [last-line];
          }

          .cell-1 {
            border: red 1px solid;
            justify-items: center;
            align-items: center;
          }
          .cell-2 {
            border: red 1px solid;
          }
          .cell-3 {
            border: red 1px solid;
          }
          .cell-4 {
            border: red 1px solid;
          }
        `}</style>
			</div>
		</>
	);
}
