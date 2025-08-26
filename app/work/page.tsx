import PageHeader from "@/components/layout/PageHeader";
import StatStack from "./StatStack";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { Metadata } from "next";
import { SelectedWorkSection } from "@/app/page";
import { ArchivedItem } from "@/app/work/ArchivedItem";

import { projectDetails as tamaguiProjectDetails } from "@/app/work/tamagui/page";
import { projectDetails as rfidinterlockProjectDetails } from "@/app/work/rfidinterlock/page";
import { projectDetails as fossilProjectDetails } from "@/app/work/fossil/page";

const pageTitle: string = "Work";
const pageDescription: string =
	"A collection of projects exploring the intersection of design, engineering, and artificial intelligence.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function WorkPage() {
	return (
		<>
			<HeroSection />
			{/* <StatsSection /> */}
			<SelectedWorkSection />
			<ArchivedWorkSection />
		</>
	);
}

function HeroSection() {
	return (
		<>
			<Section>
				<Container>
					<PageHeader title={pageTitle} description={pageDescription} />
				</Container>
			</Section>
		</>
	);
}

function StatsSection() {
	return (
		<>
			<Section>
				<Container>
					<StatStack number={12} label="projects" />
					<StatStack number={8} label="million users impacted" />
					<StatStack number={100} label="design patents" />
				</Container>
			</Section>
		</>
	);
}
function ArchivedWorkSection() {
	const archivedProjects = [
		{ href: "/work/tamagui", ...tamaguiProjectDetails },
		{ href: "/work/rfidinterlock", ...rfidinterlockProjectDetails },
		{ href: "/work/fossil", ...fossilProjectDetails },
	];
	return (
		<>
			<Section>
				<Container>
					<h2>Archived Work</h2>
					<p>Projects from previous years. Details available upon request.</p>

					{archivedProjects.map((project) => (
						<ArchivedItem key={project.href} {...project} />
					))}
				</Container>
			</Section>
		</>
	);
}
