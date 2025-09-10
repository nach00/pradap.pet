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
		<>
			<Link
				href={href}
				className={cn(
					"group flex h-full w-full flex-col rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-primary/60 hover:shadow-md",
					className,
				)}
			>
				{/* 1. TOP SECTION: LOGO + TITLE */}
				{/* Add a fixed height (e.g., h-12) and center items vertically */}
				<div className="flex flex-row items-center gap-4 h-12">
					{/* Now, h-full makes this div fill the parent's 3rem height */}
					<div className="h-full aspect-square">
						{currentLogo && (
							<div className="relative flex-none aspect-square">
								<div
									className="h-full w-full bg-[var(--base-11)] cheese:bg-[var(--accent-9)]"
									style={{
										maskImage: `url(${currentLogo})`,
										WebkitMaskImage: `url(${currentLogo})`,
										maskSize: "contain",
										maskRepeat: "no-repeat",
										maskPosition: "center",
									}}
								/>
							</div>
						)}
					</div>

					{/* TITLE */}
					{/* self-center is no longer needed because of items-center on the parent */}
					<div className="flex flex-col gap-10">
						<H3 className="flex-shrink font-semibold tracking-tight">
							{title}
						</H3>

						<P className="mt-4 text-sm text-muted-foreground line-clamp-3">
							{lede}
						</P>
					</div>
				</div>
				{/* 1. TOP SECTION: LOGO + TITLE */}
				{/* By removing 'items-start', flexbox defaults to 'stretch', making the logo container and title the same height. */}
				{/* <div className="flex flex-row gap-4"> */}
				{/* <div className="flex bg-black aspect-square">x</div> */}
				{/* LOGO CONTAINER */}
				{/* 'h-full' is removed. The height is now set by the flexbox 'stretch' behavior. */}
				{/* 'aspect-square' forces width to equal the new dynamic height. 'flex-none' prevents it from shrinking. */}
				{/* {currentLogo && ( */}
				{/* 	<div className="relative flex-none aspect-square"> */}
				{/* 		<div */}
				{/* 			className="h-full w-full bg-[var(--base-11)] cheese:bg-[var(--accent-9)]" */}
				{/* 			style={{ */}
				{/* 				maskImage: `url(${currentLogo})`, */}
				{/* 				WebkitMaskImage: `url(${currentLogo})`, */}
				{/* 				maskSize: "contain", */}
				{/* 				maskRepeat: "no-repeat", */}
				{/* 				maskPosition: "center", */}
				{/* 			}} */}
				{/* 		/> */}
				{/* 	</div> */}
				{/* )} */}
				{/* TITLE */}
				{/* <H3 className="flex-shrink font-semibold tracking-tight self-center"> */}
				{/* {title} */}
				{/* </H3> */}
				{/* </div> */}

				{/* 2. DESCRIPTION */}
				{/* <P className="mt-4 text-sm text-muted-foreground line-clamp-3"> */}
				{/* {lede} */}
				{/* </P> */}

				{/* 3. SPACER */}
				{/* <div className="flex-grow" /> */}

				{/* 4. CALL TO ACTION */}
				{/* <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary"> */}
				{/* View project */}
				{/* <span className="ml-1 transition-transform group-hover:translate-x-1"> */}
				{/* → */}
				{/* </span> */}
				{/* </div> */}
			</Link>
			{/* <Link href={href} className=""> */}
			{/* 	<div> */}
			{/* 		<div className="flex flex-row gap-10 items-stretch"> */}
			{/* 			<div className="aspect-square bg-black">x</div> */}
			{/* 			<H3 className="">{title}</H3> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/**/}
			{/* 	<div className="flex flex-row gap-2 items-stretch"> */}
			{/* 		<div className="aspect-square bg-black flex-shrink-0">x</div> */}
			{/**/}
			{/* 		<h3 className="text-yellow-400 text-5xl font-bold">APIDEAS</h3> */}
			{/* 	</div> */}
			{/* <div className="grid grid-cols-2 grid-rows-2 border"> */}
			{/* 	<div className="border"> */}
			{/* 		{currentLogo && ( */}
			{/* 			<div */}
			{/* 				className="flex h-full w-full bg-[var(--base-11)] cheese:bg-[var(--accent-9)]" */}
			{/* 				style={{ */}
			{/* 					// Use the 'currentLogo' variable to set the mask image dynamically */}
			{/* 					maskImage: `url(${currentLogo})`, */}
			{/* 					WebkitMaskImage: `url(${currentLogo})`, // For Safari/WebKit compatibility */}
			{/* 					maskSize: "contain", */}
			{/* 					maskRepeat: "no-repeat", */}
			{/* 					maskPosition: "center", */}
			{/* 				}} */}
			{/* 			/> */}
			{/* 		)} */}
			{/* 	</div> */}
			{/* 	<div className=""> */}
			{/* 		<H3 className="">{title}</H3> */}
			{/* 	</div> */}
			{/* 	<div className="" /> */}
			{/* 	<div className=""> */}
			{/* 		<P className="">{lede}</P> */}
			{/**/}
			{/* 		<H6 className="mt-6">View project →</H6> */}
			{/* 	</div> */}
			{/* </div> */}
			{/* </Link> */}
			{/* <Link href={href} className="flex flex-row gap-[1em] w-full"> */}
			{/* 	<div className="flex"></div> */}
			{/* 	<div className="grid grid-cols-2 grid-rows-2 border"> */}
			{/* 		<div className="border"> */}
			{/* 			{currentLogo && ( */}
			{/* 				<div */}
			{/* 					className="flex h-full w-full bg-[var(--base-11)] cheese:bg-[var(--accent-9)]" */}
			{/* 					style={{ */}
			{/* 						// Use the 'currentLogo' variable to set the mask image dynamically */}
			{/* 						maskImage: `url(${currentLogo})`, */}
			{/* 						WebkitMaskImage: `url(${currentLogo})`, // For Safari/WebKit compatibility */}
			{/* 						maskSize: "contain", */}
			{/* 						maskRepeat: "no-repeat", */}
			{/* 						maskPosition: "center", */}
			{/* 					}} */}
			{/* 				/> */}
			{/* 			)} */}
			{/* 		</div> */}
			{/* 		<div className=""> */}
			{/* 			<H3 className="">{title}</H3> */}
			{/* 		</div> */}
			{/* 		<div className="" /> */}
			{/* 		<div className=""> */}
			{/* 			<P className="">{lede}</P> */}
			{/**/}
			{/* 			<H6 className="mt-6">View project →</H6> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/* </Link> */}
		</>
	);
}
