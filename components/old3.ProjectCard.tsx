import { cn } from "@/lib/utils";
import Link from "next/link";
import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { ProjectBadges } from "./ProjectBadges";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

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
		<Link href={href} className="flex flex-row gap-[1em]  w-full">
			{/* Logo Section */}

			<div
				className={cn(
					"flex aspect-square h-min",
					"xxxs:w-20",
					"xxs:w-30",
					"xs:w-40",
					className,
				)}
			>
				{/* Render this div only if a logo is available */}
				{currentLogo && (
					<div
						className="flex h-full w-full bg-[var(--base-11)] cheese:bg-[var(--accent-9)]"
						style={{
							// Use the 'currentLogo' variable to set the mask image dynamically
							maskImage: `url(${currentLogo})`,
							WebkitMaskImage: `url(${currentLogo})`, // For Safari/WebKit compatibility
							maskSize: "contain",
							maskRepeat: "no-repeat",
							maskPosition: "center",
						}}
					/>
				)}
			</div>

			{/* Content Section */}
			<article className="flex w-full">
				<div className="gap-[1em]">
					{/* Badges */}
					{/* <div className="flex flex-wrap gap-2"> */}
					{/* 	<ProjectBadges */}
					{/* 		id={id} */}
					{/* 		year={year} */}
					{/* 		status={status} */}
					{/* 		type={category} */}
					{/* 	/> */}
					{/* </div> */}

					{/* Title */}
					<H3 className="">{title}</H3>

					{/* Description */}
					<P className="">{lede}</P>

					{/* Call to action */}
					{/* <Button variant="link">View Project</Button> */}
					<H6 className="mt-6">View project →</H6>
					{/* <div className=""> */}
					{/* 	<span className=""> */}
					{/* 		View Project */}
					{/* 		<svg */}
					{/* 			className="ml-1.5 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" */}
					{/* 			fill="none" */}
					{/* 			viewBox="0 0 24 24" */}
					{/* 			stroke="currentColor" */}
					{/* 		> */}
					{/* 			<path */}
					{/* 				strokeLinecap="round" */}
					{/* 				strokeLinejoin="round" */}
					{/* 				strokeWidth={2} */}
					{/* 				d="M9 5l7 7-7 7" */}
					{/* 			/> */}
					{/* 		</svg> */}
					{/* 	</span> */}
					{/* </div> */}
				</div>
			</article>
		</Link>
	);
}
