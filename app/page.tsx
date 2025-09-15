"use client";

import { useTheme } from "next-themes";
import { AuroraText } from "@/components/AuroraText";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { StickyBanner } from "@/components/ui/sticky-banner";
import HeroBackground from "@/components/3d/HeroBackground";
import Section from "@/components/layout/Section";
import Link from "next/link";
import Container from "@/components/layout/Container";
// import { Metadata } from "next";
import { getProjectDetails as apideasProjectDetails } from "@/app/work/apideas/page";
import { getProjectDetails as zconsoleProjectDetails } from "@/app/work/zconsole/page";
import { getProjectDetails as scoutifyProjectDetails } from "@/app/work/scoutify/page";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { DataPair } from "@/components/DataPair";
import { ProjectCard } from "@/components/ProjectCard";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState } from "react";

import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";

import {
	P,
	UL,
	LI,
	Lede,
	Small,
	Eyebrow,
	Caption,
	Blockquote,
} from "@/components/typography/TextElements";
const pageTitle: string = "Design Engineer & Strategist";
const pageDescription: string =
	"Crafting digital experiences where precision meets elegance. Currently exploring AI-enhanced design systems.";

// export const metadata: Metadata = {
// 	title: pageTitle,
// 	description: pageDescription,
// };

export default function Home() {
	return (
		<>
			<HeroSection />
			{/* <BannerSection /> */}
			{/* <IntroSection /> */}
			<SelectedWorkSection />
		</>
	);
}

// function HeroSection() {
// 	return (
// 		<>
// 			<div className="relative w-screen h-screen">
// 				<Scene />
// 				<div className="absolute top-1/2 border w-min">
// 					<h1 className="max-w-[10ch] leading-[110%]">{pageTitle}</h1>
//
// 					<span className="lede max-w-[30ch] text-[var(--base-12)] font-normal">
// 						{pageDescription}
// 					</span>
//
// 					<div className="flex gap-12 mt-12">
// 						<DataPair label="Location">Dallas, TX</DataPair>
// 						<DataPair label="Status">Available</DataPair>
// 					</div>
//
// 					<div className="flex gap-4 mt-12 pointer-events-auto">
// 						<Button>
// 							<Link href="/work">View work →</Link>
// 						</Button>
// 						<Button variant="outline">
// 							<Link href="/about">View resume →</Link>
// 						</Button>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

function HeroSection() {
	return (
		<Section className="h-screen relative">
			{/* <Section className="h-screen w-screen relative"> */}
			<HeroBackground className="w-full h-full absolute inset-0 z-0" />

			<Container className="flex relative flex-col z-10 w-full h-full justify-center portrait:justify-end">
				<H1 className="max-w-[10ch] mb-2 xxs:mb-12 ">{pageTitle}</H1>

				<P className="max-w-[30ch] hidden xxs:block">{pageDescription}</P>

				<div className="gap-12 mt-12 hidden xxs:flex">
					<DataPair
						className={cn("w-min border-none xxxs:flex-col")}
						label="Location"
					>
						Texas
					</DataPair>
					<DataPair
						className={cn("w-min border-none xxxs:flex-col")}
						label="Status"
					>
						Available
					</DataPair>
				</div>
				<ActionButtons className="xxxs:mt-4 xxs:mt-12" />
			</Container>
		</Section>
	);
}

// function HeroSection() {
// 	return (
// 		<Section className="h-screen w-screen relative pointer-events-none">
// 			<HeroBackground className="w-full h-full absolute inset-0 z-0" />
//
// 			{/* Portrait Hero */}
// 			<Container className="portrait:flex landscape:hidden relative flex-col z-10 w-full h-full justify-end">
// 				<h1
// 					className={cn(
// 						"max-w-[10ch] text-3xl mb-4 text-[var(--accent-12)]",
//
// 						"cheese:font-custom cheese:font-stretch-extra-condensed cheese:text-[var(--accent-9)]",
// 					)}
// 				>
// 					{pageTitle}
// 				</h1>
// 				<span className="text-sm max-w-[30ch] text-[var(--base-11)] font-normal">
// 					{pageDescription}
// 				</span>
//
// 				<ActionButtons className="mt-4 mb-6" />
// 			</Container>
//
// 			{/* Landscape Hero */}
// 			<Container className="portrait:hidden landscape:flex relative flex-col z-10 w-full h-full justify-center">
// 				<h1
// 					className={cn(
// 						"text-6xl font-light max-w-[10ch] leading-[110%] text-[var(--accent-9)]",
// 						"cheese:font-custom cheese:font-stretch-extra-condensed",
// 					)}
// 				>
// 					{pageTitle}
// 				</h1>
// 				<H1>{pageTitle}</H1>
// 				<span className="lede max-w-[30ch] text-[var(--base-12)] font-normal">
// 					{pageDescription}
// 				</span>
// 				<div className="flex gap-12 mt-12">
// 					<DataPair label="Location">Dallas, TX</DataPair>
// 					<DataPair label="Status">Available</DataPair>
// 				</div>
// 				<ActionButtons className="mt-12" />
// 			</Container>
// 		</Section>
// 	);
// }
//
function ActionButtons({ className }: { className?: string }) {
	return (
		<div className={`flex gap-4 pointer-events-auto ${className || ""}`}>
			{/* <Button size="sm"> */}
			{/* 	<Link href="/work">View work →</Link> */}
			{/* </Button> */}
			<Button size="sm" variant="outline">
				<Link href="mailto:natcha@pradap.pet">Contact →</Link>
			</Button>
		</div>
	);
}

function IntroSection() {
	return (
		<>
			<Section>
				<Container>
					<H1 className="text-center uppercase font-bold">
						Yo! <span className="wb-icon wb-animate lowercase">η</span> I'm{" "}
						<span className="text-[var(--accent-11)]">Natcha Pradappet</span>. A
						Design Engineer <span className="wb-icon wb-animate">.</span>
						<em> Deep in the heart of Texas</em>{" "}
						<span className="dingmaps lowercase">j</span> Where I spend my days{" "}
						<span className="wb-icon wb-animate lowercase">ó</span> pushing
						pixels <span className="wb-icon wb-animate lowercase">τ</span> in
						Figma and nights{" "}
						<span className="wb-icon wb-animate lowercase">3</span> editing
						my/Volumes/megatron/global/personal\ projects config in the terminal{" "}
						<span className="wb-icon wb-animate lowercase">v</span> But mostly,
						I transform ideas into engaging, memorable, and timeless{" "}
						<span className="wb-icon wb-animate lowercase">w</span> digital
						experiences, from <LineShadowText>ideation</LineShadowText> to{" "}
						<LineShadowText>implementation</LineShadowText>.
					</H1>

					<Small>slightly obsessive, partially delusional</Small>
					<Blockquote>
						A critical thinker and learner at heart, Natcha is a specialist in
						strategy and user experience design with a background in Marketing
						(BBA, Baylor) and Strategic Management (MBA, UT Dallas). Natcha’s
						skills have broadened beyond his formal education given his natural
						inclination for learning and having worked at a number of agencies;
						he also possesses talents in Design, Front-end Development, and
						Information Architecture. Natcha’s passions include his hobbies,
						basketball and building computers, and even more so his family, with
						his wife, Michele, and their daughter, Hazel, as well as a number of
						dogs and cats. One might think that Natcha’s brain is nearing
						capacity but it’s far from so. Natcha speaks fluent Thai and is
						learning Spanish.
					</Blockquote>
				</Container>
			</Section>
		</>
	);
}

// export function SelectedWorkSection() {
// 	const pathname = usePathname();
// 	const isHomePage = pathname === "/";
//
// 	const featuredProjects = [
// 		{ href: "/work/apideas", ...apideasProjectDetails() },
// 		{ href: "/work/zconsole", ...zconsoleProjectDetails() },
// 		{ href: "/work/scoutify", ...scoutifyProjectDetails() },
// 	];
//
// 	return (
// 		<>
// 			<Section>
// 				<Container>
// 					<div className="flex flex-row justify-between">
// 						<H2 className="">Selected Work</H2>
// 					</div>
// 					{featuredProjects.map((project) => (
// 						<div className="w-full h-full flex bg-[var(--base-4)] text-[var(--accent-12)]">
// 							<div className="w-20 h-20 border flex items-center justify-center">
// 								<div
// 									className="flex h-fulll w-full bg-[var(--base-11)] cheese:bg-[var(--accent-9)]"
// 									style={{
// 										// Use the 'currentLogo' variable to set the mask image dynamically
// 										maskImage: `url(${featuredProjects.logoDark})`,
// 										WebkitMaskImage: `url(${featuredProjects.logoDark})`, // For Safari/WebKit compatibility
// 										maskSize: "contain",
// 										maskRepeat: "no-repeat",
// 										maskPosition: "center",
// 									}}
// 								/>
// 							</div>
// 							<div className="flex w-full p-3">Card</div>
// 						</div>
// 					))}
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }
export function SelectedWorkSection() {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	const featuredProjects = [
		{ href: "/work/apideas", ...apideasProjectDetails() },
		{ href: "/work/zconsole", ...zconsoleProjectDetails() },
		{ href: "/work/scoutify", ...scoutifyProjectDetails() },
	];
	return (
		<>
			<Section className="border">
				<Container>
					<div className="flex flex-row justify-between">
						<H2 className="">Selected Work</H2>
						{/* {isHomePage && ( */}
						{/* 	<Button variant="secondary"> */}
						{/* 		<Link href="/work">View all work →</Link> */}
						{/* 	</Button> */}
						{/* )} */}
					</div>
					<div className="flex flex-col gap-10">
						{featuredProjects.map((project) => (
							<ProjectCard key={project.href} {...project} />
						))}
					</div>
					{/* {isHomePage && ( */}
					{/* 	<div className={cn("flex w-full justify-center mt-10")}> */}
					{/* 		<Button> */}
					{/* 			<Link href="/work">View all work</Link> */}
					{/* 		</Button> */}
					{/* 	</div> */}
					{/* )} */}
				</Container>
			</Section>
		</>
	);
}

function BannerSection() {
	return (
		<>
			<div className="w-full overflow-y-auto">
				<StickyBanner
					className={cn(
						"bg-[var(--accent-9)] text-[var(--base-12)] overflow-hidden",
						"dark:text-[var(--base-1)]",
					)}
				>
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `repeating-linear-gradient(
								-45deg,
								var(--base-a12) 0px,
								var(--base-a12) 20px,
								var(--accent-a9) 20px,
								var(--accent-a9) 40px
							)`,
						}}
					/>
					<span className="z-10 font-light tracking-wide text-xs uppercase py-1 px-2 bg-[var(--accent-9)] rounded-sm border border-[var(--base-12)]">
						Always under construction
					</span>
				</StickyBanner>
			</div>
		</>
	);
}

interface WordRotateProps {
	words: string[];
	duration?: number;
	motionProps?: MotionProps;
	className?: string;
}

export function WordRotate({
	words,
	duration = 2500,
	motionProps = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
		transition: { duration: 0.25, ease: "easeOut" },
	},
	className,
}: WordRotateProps) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration);

		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, [words, duration]);

	return (
		<span className="overflow-hidden py-2">
			<AnimatePresence mode="wait">
				<motion.span
					key={words[index]}
					className={cn(className)}
					{...motionProps}
				>
					{words[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
}

interface LineShadowTextProps
	extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
		MotionProps {
	shadowColor?: string;
	as?: React.ElementType;
}

function LineShadowText({
	children,
	shadowColor = "black",
	className,
	as: Component = "span",
	...props
}: LineShadowTextProps) {
	const MotionComponent = motion.create(Component);
	const content = typeof children === "string" ? children : null;

	if (!content) {
		throw new Error("LineShadowText only accepts string content");
	}

	return (
		<MotionComponent
			style={{ "--shadow-color": shadowColor } as React.CSSProperties}
			className={cn(
				"relative z-0 inline-flex",
				"after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
				"after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
				"after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
				"after:animate-line-shadow",
				className,
			)}
			data-text={content}
			{...props}
		>
			{content}
		</MotionComponent>
	);
}
