import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {
	Headline,
	Subheading,
	SectionHeading,
	SubsectionHeading,
	MinorHeading,
	Paragraph,
	Lede,
	SmallText,
	CategoryTag,
	Badge,
	Status,
	Eyebrow,
	LinkText,
	ButtonText,
	DataPair,
	DataGrid,
} from "@/components/typography";
import { SingleProject } from "@/components/sections/Project";
import { Metadata } from "next";
import Link from "next/link";
import {
	IconArrowLeft,
	IconExternalLink,
	IconBrandGithub,
} from "@tabler/icons-react";

export default function Zimperium() {
	return (
		<>
			<Container variant="medium">
				<div className="flex flex-row gap-12">
					<div className="flex w-full flex-col">
						<div className="flex flex-row gap-3 items-center w-full h-min ">
							<span className="tag-id font-mono text-sm text-muted-foreground">
								01
							</span>
							<span className="tag-year text-xs text-secondary-foreground">
								2025
							</span>
							<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
								Live
							</span>
							<span className="tag-type bg-accent/40 text-accent-foreground px-2 py-1 rounded-full text-xs">
								Full-Stack Web Application
							</span>
						</div>
						<h1 className="pt-8">APIdeas</h1>
						<span className="lede">
							Veniam ad enim labore magna irure minim aliqua eu laborum velit
							sint sunt veniam ullamco enim.
						</span>
						<p className="pt-8">
							Officia non ipsum laborum eu ad aute culpa magna labore. Dolore
							deserunt dolore culpa irure aute laboris est ea irure adipisicing
							reprehenderit. Ex velit pariatur deserunt labore ea eiusmod ipsum
							dolor ad duis ut Lorem ex culpa nulla.
						</p>

						<div className="flex gap-12 mt-12">
							<div className="flex flex-col gap-1">
								<span className="eyebrow">Role</span>
								<small className="">Designer & Developer</small>
							</div>
							<div className="flex flex-col gap-1">
								<span className="eyebrow">Duration</span>
								<small className="">2 weeks</small>
							</div>
							<div className="flex flex-col gap-1">
								<span className="eyebrow">Year</span>
								<small className="">2025</small>
							</div>
							<div className="flex flex-col gap-1">
								<span className="eyebrow">Status</span>
								<small className="">Live</small>
							</div>
						</div>
						<div className="flex gap-12 mt-12">
							<div className="flex flex-col gap-1">
								<span className="eyebrow">Technologies Used</span>

								<div className="flex flex-row gap-3">
									<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
										Live
									</span>
									<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
										Live
									</span>
									<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
										Live
									</span>
									<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
										Live
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-row gap-3 pt-8">
							<Button className="w-min">View Live Project</Button>
							<Button className="w-min" variant="secondary">
								View Source Code
							</Button>
						</div>
					</div>
					<div className="bg-secondary-foreground/10 border flex w-full min-h-full items-center justify-center">
						xx
					</div>
				</div>
			</Container>
			<div className="mt-50 p-20 bg-secondary w-screen">
				<Container variant="medium">
					<h2>Project Overview</h2>
					<div className="flex flex-row gap-12">
						<div className="flex flex-col w-full">
							<h3>Challenge</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
						<div className="flex flex-col w-full">
							<h3>Solution</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
						<div className="flex flex-col w-full">
							<h3>Outcome</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
					</div>
				</Container>
			</div>
			<div className="mt-50 p-20 w-screen">
				<Container variant="medium" className="flex flex-col gap-4">
					<h2>Process</h2>
					<div className="flex flex-row gap-12">
						<div className="bg-secondary-foreground text-secondary rounded-full p-4 grid place-content-center h-[40px] w-[40px]">
							1
						</div>
						<div className="flex flex-col w-full">
							<h3>Research</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
					</div>
					<div className="flex flex-row gap-12">
						<div className="bg-secondary-foreground text-secondary rounded-full p-4 grid place-content-center h-[40px] w-[40px]">
							2
						</div>
						<div className="flex flex-col w-full">
							<h3>Research</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
					</div>
					<div className="flex flex-row gap-12">
						<div className="bg-secondary-foreground text-secondary rounded-full p-4 grid place-content-center h-[40px] w-[40px]">
							3
						</div>
						<div className="flex flex-col w-full">
							<h3>Research</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
