import Container from "@/components/layout/Container";
import ProjectHeroContent from "@/components/work/ProjectHeroContent";
import { ProjectCard } from "@/components/ProjectCard";
import { SingleProject } from "@/components/sections/Project";
import { Metadata } from "next";
import Link from "next/link";
import {
	IconArrowLeft,
	IconExternalLink,
	IconBrandGithub,
} from "@tabler/icons-react";

export const projectDetails = {
	tagId: "02",
	tagYear: "2019",
	tagStatus: "Complete",
	tagCategory: "Cybersecurinty",
	title: "Zimperium",
	lede: "Veniam ad enim labore magna irure minim aliqua eu laborum velit sint sunt veniam ullamco enim.",
	description:
		"Officia non ipsum laborum eu ad aute culpa magna labore. Dolore deserunt dolore culpa irure aute laboris est ea irure adipisicing reprehenderit. Ex velit pariatur deserunt labore ea eiusmod ipsum dolor ad duis ut Lorem ex culpa nulla.",
	client: "Zimperium",
	duration: "2 years",
	role: "UX Designer",
	team: "Product",
	technologies: ["Adobe XD", "Figma"],
};

export default function Zimperium() {
	return (
		<>
			<ProjectHeroContent {...projectDetails} />

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
