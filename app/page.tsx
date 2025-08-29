"use client";
import { cn } from "@/lib/utils";
import { StickyBanner } from "@/components/ui/sticky-banner";
import HeroBackground from "@/components/3d/HeroBackground";
import Section from "@/components/layout/Section";
import Link from "next/link";
import Container from "@/components/layout/Container";

import { projectDetails as apideasProjectDetails } from "@/app/work/apideas/page";
import { projectDetails as zconsoleProjectDetails } from "@/app/work/zconsole/page";
import { projectDetails as scoutifyProjectDetails } from "@/app/work/scoutify/page";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { DataPair } from "@/components/DataPair";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
	return (
		<>
			{/* <Scene /> */}
			<BannerSection />
			<HeroSection />
			<SelectedWorkSection />
			<ProfileSection />
		</>
	);
}

function HeroSection() {
	return (
		<>
			{/* 1. Added 'relative' to make this the positioning parent for its children.
              2. Added 'overflow-hidden' as a good practice to prevent the background from bleeding out.
            */}
			<Section className="h-screen w-screen relative">
				{/* 3. Changed positioning to fill the parent ('Section') instead of the viewport.
                  4. Ensured it's positioned at the top-left corner.
                */}
				<HeroBackground className="w-full h-full absolute top-0 left-0 z-0" />

				{/* 5. Added 'relative' to ensure z-index is applied correctly.
                     The z-50 places this container and its content on top of the background (z-0).
                */}
				<Container className="relative flex flex-col z-10 w-full h-full justify-end md:hidden">
					<h1 className="max-w-[10ch] text-4xl">Design Engineer</h1>

					<span className="lede max-w-[30ch]">
						Crafting digital experiences where precision meets elegance.
						Currently exploring AI-enhanced design systems.
					</span>

					<div className="flex gap-12 mt-12">
						<DataPair label="Location">Dallas, TX</DataPair>
						<DataPair label="Status">Available</DataPair>
					</div>

					<div className="flex gap-4 mt-12">
						<Button>
							<Link href="/work">View work →</Link>
						</Button>
						<Button variant="outline">
							<Link href="/about">View resume →</Link>
						</Button>
					</div>
				</Container>
				<Container className="hidden relative flex-col z-10 w-full h-full justify-end">
					<h1 className="max-w-[10ch] text-4xl">Design Engineer</h1>

					<span className="lede max-w-[30ch]">
						Crafting digital experiences where precision meets elegance.
						Currently exploring AI-enhanced design systems.
					</span>

					<div className="flex gap-12 mt-12">
						<DataPair label="Location">Dallas, TX</DataPair>
						<DataPair label="Status">Available</DataPair>
					</div>

					<div className="flex gap-4 mt-12">
						<Button>
							<Link href="/work">View work →</Link>
						</Button>
						<Button variant="outline">
							<Link href="/about">View resume →</Link>
						</Button>
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
								tech. I spent nights and weekends teaching myself web
								development and design, taking on freelance projects where I
								first used Adobe XD to bring client ideas to life. Over time, I
								built a portfolio strong enough to land my first professional
								role as a UX Designer at Zimperium.
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
								height={500}
								alt="Picture of the author"
								className="rounded-xl"
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
			<div className="absolute top-0 w-full overflow-y-auto">
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
					<span className="z-10 font-light tracking-wide text-sm uppercase p-2 bg-[var(--accent-9)]">
						Always under construction
					</span>
				</StickyBanner>
			</div>
		</>
	);
}
