"use client";

import { cn } from "@/lib/utils";
import HeroBackground from "@/components/3d/HeroBackground";
import Section from "@/components/layout/Section";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { getProjectDetails as apideasProjectDetails } from "@/app/work/apideas/page";
import { getProjectDetails as zconsoleProjectDetails } from "@/app/work/zconsole/page";
import { getProjectDetails as scoutifyProjectDetails } from "@/app/work/scoutify/page";
import React from "react";
import { Button } from "@/components/ui/button";
import { DataPair } from "@/components/DataPair";
import { ProjectCard } from "@/components/ProjectCard";
import { H1, H2 } from "@/components/typography/Headings";
import { Eyebrow, P, Small } from "@/components/typography/TextElements";

const pageTitle: string = "Design Engineer & Strategist";
const pageDescription: string =
	"Crafting digital experiences where precision meets elegance. Currently exploring AI-enhanced design systems.";

export default function Home() {
	return (
		<>
			<HeroSection />
			<SelectedWorkSection />
		</>
	);
}

function HeroSection() {
	return (
		<Section className="h-screen relative">
			<HeroBackground className="w-full h-full absolute inset-0 z-0" />

			<Container className="flex relative flex-col z-10 w-full h-full justify-center portrait:justify-end">
				<div
					className={cn(
						// "bg-[var(--base-12)]",
						" p-[2em] flex flex-shrink w-min flex-col",
						"gap-[1em] md:gap-[2em]",
					)}
				>
					<H1
						className={cn(
							// "text-[var(--base-1)]",
							" w-[13ch]",
							"text-[1.5em] md:text-[3em]",
						)}
					>
						Design Engineer & Strategist
					</H1>

					<P
						className={cn(
							"text-[var(--base-2)] max-w-[30ch]",
							"text-[0.2em] md:text-[1.4em]",

							"text-shadow-br-1",
						)}
					>
						{pageDescription}
					</P>

					<div className={cn("flex flex-row gap-12")}>
						<div className={cn("flex flex-col gap-2")}>
							<Eyebrow className={cn("text-[var(--base-2)]")}>Location</Eyebrow>
							<Small className={cn("text-[var(--base-1)]")}>Texas, USA</Small>
						</div>
						<div className={cn("flex flex-col gap-2")}>
							<Eyebrow className={cn("text-[var(--base-2)]")}>Status</Eyebrow>

							<div className={cn("flex flex-row items-center")}>
								<div
									className={cn(
										"h-[0.5em] w-[0.5em] bg-[var(--accent-9)] rounded-full absolute -translate-x-4 -translate-y-[0.1em] animate-pulse border border-[var(--accent-4)] text-[var(--base-1)]",
									)}
								/>
								<Small className={cn("text-[var(--base-1)]")}>Available</Small>
							</div>
						</div>
					</div>

					<Button size="sm" variant="cheese">
						<Link href="mailto:natcha@pradap.pet">Contact →</Link>
					</Button>
				</div>
			</Container>
		</Section>
	);
}

export function SelectedWorkSection() {
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
					</div>
					<div className="flex flex-col gap-10">
						{featuredProjects.map((project) => (
							<ProjectCard key={project.href} {...project} />
						))}
					</div>
				</Container>
			</Section>
		</>
	);
}
