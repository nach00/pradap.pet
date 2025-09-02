"use client";
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

import { Scene } from "@/components/3d/Scene";
import { DisplayName } from "@/components/Typography";
import { H1 } from "@/components/typography/H1";
import { P } from "@/components/typography/P";
const pageTitle: string = "Design Engineer";
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
			<BannerSection />
			<SelectedWorkSection />
			<ProfileSection />
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
		<Section className="h-screen w-screen relative pointer-events-none">
			<HeroBackground className="w-full h-full absolute inset-0 z-0" />

			<Container className="flex relative flex-col z-10 w-full h-full justify-center">
				<H1 className="max-w-[10ch]">{pageTitle}</H1>
				{/* <span className="lede max-w-[30ch] text-[var(--base-12)] font-normal"> */}
				{/* 	{pageDescription} */}
				{/* </span> */}

				<P className="max-w-[30ch]">{pageDescription}</P>

				<div className="gap-12 mt-12 hidden xxs:flex">
					<DataPair label="Location">Dallas, TX</DataPair>
					<DataPair label="Status">Available</DataPair>
				</div>
				<ActionButtons className="mt-12" />
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
			<Button size="sm">
				<Link href="/work">View work →</Link>
			</Button>
			<Button size="sm" variant="outline">
				<Link href="mailto:natcha@pradap.pet">Contact →</Link>
			</Button>
		</div>
	);
}

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
			<Section>
				<Container>
					<div className="flex flex-row justify-between">
						<h2 className="">Selected Work</h2>
						{isHomePage && (
							<Button variant="secondary">
								<Link href="/work">View all work →</Link>
							</Button>
						)}
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{featuredProjects.map((project) => (
							<ProjectCard key={project.href} {...project} />
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}

function ProfileSection() {
	return (
		<>
			<Section>
				<Container>
					<div className="flex flex-row justify-between">
						<h2>Journey</h2>

						<Button variant="secondary">
							<Link href="https://drive.google.com/file/d/103Ur2NEFO2I-4TKUDVG_hBs8w-TJ3n7w/view?usp=drive_link">
								View resume →
							</Link>
						</Button>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
						<div className="lg:col-span-2">
							<p className="max-w-[60ch]">
								I began my career chasing the dream of becoming a restaurateur,
								studying culinary arts, business, and even interning at Disney
								World’s Epcot in the Norwegian Pavilion. After nearly a decade
								in the restaurant industry, I realized my true passion lay in
								tech.
							</p>

							<p>
								I spent nights and weekends teaching myself web development and
								design, taking on freelance projects where I first used Adobe XD
								to bring client ideas to life. Over time, I built a portfolio
								strong enough to land my first professional role as a UX
								Designer at Zimperium.
							</p>

							<p className="max-w-[60ch]">
								From there, I expanded my experience in both in-house and agency
								settings—at Photon as a UX/UI Designer and at Insite as a UX
								Specialist, focusing on UX strategy. Most recently, I completed
								a full-stack coding bootcamp at Altcademy, continuing my journey
								toward becoming a developer.
							</p>
						</div>
						<div>
							<Image
								src="/images/ai_profile.jpg"
								width={500}
								height={50}
								alt="Picture of Natcha Pradappet"
								className="rounded-sm"
							/>
						</div>
					</div>
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
