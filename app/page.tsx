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

import { P } from "@/components/typography/TextElements";
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

function ActionButtons({ className }: { className?: string }) {
	return (
		<div className={`flex gap-4 pointer-events-auto ${className || ""}`}>
			<Button size="sm" variant="outline">
				<Link href="mailto:natcha@pradap.pet">Contact →</Link>
			</Button>
		</div>
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
