"use client";
import Section from "@/components/layout/Section";
import Link from "next/link";
import Container from "@/components/layout/Container";

import { projectDetails as apideasProjectDetails } from "@/app/work/apideas/page";
import { projectDetails as zconsoleProjectDetails } from "@/app/work/zconsole/page";
import { projectDetails as scoutifyProjectDetails } from "@/app/work/scoutify/page";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/button";
// import "@/styles/global.css";
// import "@/styles/typography.css";
import { cn } from "@/lib/utils";
import { FeaturedWorkGrid } from "@/components/FeaturedWorkGrid";
import {
	Headline,
	DataPair,
	SectionHeading,
	Subheading,
	Paragraph,
	Lede,
	Eyebrow,
	Status,
} from "@/components/typography";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
	return (
		<>
			<HeroSection />
			<SelectedWorkSection />
			<ProfileSection />
			<ContactSection />
		</>
	);
}

function HeroSection() {
	return (
		<>
			<Section className="h-screen">
				<Container className="flex flex-col justify-center">
					<h1 className="max-w-[10ch]">Design Engineer</h1>

					{/* <p className="max-w-[30ch] leading-7 text-secondary-foreground mt-12"> */}
					<span className="lede max-w-[30ch]">
						Crafting digital experiences where precision meets elegance.
						Currently exploring AI-enhanced design systems.
					</span>

					<div className="flex gap-12 mt-12">
						{/* <span className="eyebrow">Location</span> */}
						{/* <p>Dallas, Texas</p> */}
						<DataPair label="Location">Dallas, TX</DataPair>
						<DataPair label="Status">Available</DataPair>
					</div>

					{/* <div className="wb-icon wb-animate text-7xl">E</div> */}
					<div className="flex gap-4 mt-12">
						<Button>View work</Button>
						<Button variant="outline">About & Experience</Button>
					</div>
				</Container>
			</Section>
		</>
	);
}

export function SelectedWorkSection() {
	const featuredProjects = [
		{ href: "/work/apideas", ...apideasProjectDetails },
		{ href: "/work/zconsole", ...zconsoleProjectDetails },
		{ href: "/work/scoutify", ...scoutifyProjectDetails },
	];
	return (
		<>
			<Section>
				<Container>
					<div className="flex flex-row justify-between">
						<h2 className="text-[var(--accent-11)]">Selected Work</h2>
						<Button variant="secondary">
							<Link href="/work">View all work →</Link>
						</Button>
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
						<h2 className="text-[var(--accent-11)]">Profile</h2>
						<Button variant="secondary">
							<Link href="/about">Full background →</Link>
						</Button>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
						<div className="lg:col-span-2">
							<p className="mb-8">
								Design Engineer with 8+ years of experience creating intelligent
								interfaces that bridge the gap between human cognition and
								artificial intelligence. Based in Bangkok, working with teams
								globally.
							</p>
							<p className="mb-12">
								My approach combines systematic design thinking with deep
								technical implementation, drawing from cognitive psychology and
								machine learning to create adaptive systems.
							</p>
						</div>
						<div className="lg:col-span-1 flex flex-col justify-center">
							<div className="border border-gray-200 rounded-lg p-8 text-right">
								<Subheading className="mb-2">Natcha Pradappet</Subheading>
								<Eyebrow>Design Engineer</Eyebrow>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

function ContactSection() {
	return (
		<>
			<Section>
				<Container>
					<div className="flex flex-row justify-between">
						<h2 className="text-[var(--accent-11)]">Contact</h2>
						<Button variant="secondary">
							<Link href="/contact">Start a project →</Link>
						</Button>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
						<div className="lg:col-span-2">
							<h3 className="mb-8">Let&apos;s work together</h3>
							<p>
								Available for design engineering projects, research
								collaborations, and speaking engagements. Particularly
								interested in AI, adaptive interfaces, and human-centered
								technology.
							</p>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
