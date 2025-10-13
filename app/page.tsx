"use client";

import { cn } from "@/lib/utils";
import HeroBackground from "@/components/3d/HeroBackground";
import Section from "@/components/layout/Section";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { DataPair } from "@/components/DataPair";
import { getProjectDetails as apideasProjectDetails } from "@/app/work/apideas/page";
import { H1, H2 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { getProjectDetails as zconsoleProjectDetails } from "@/app/work/zconsole/page";
import { getProjectDetails as scoutifyProjectDetails } from "@/app/work/scoutify/page";
import React from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

import { Highlighter } from "@/components/TextEffects";

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
