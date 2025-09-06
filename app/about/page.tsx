import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import {
	P,
	UL,
	LI,
	Small,
	Eyebrow,
} from "@/components/typography/TextElements";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import {} from "next";

const pageTitle: string = "About";
const pageDescription: string =
	"Design Engineer with 5+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function AboutPage() {
	return (
		<>
			<HeroSection />
			<ExperienceSection />
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

function ExperienceSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Experience</H2>
					<ExperienceItem
						jobTitle="Design Engineer"
						companyName="Planet Nacho"
						duration="2022 - Present"
						jobDescription={[
							"Leading the design and development of user interfaces for AI-powered applications, focusing on enhancing user experience and accessibility.",
							"Collaborating with cross-functional teams to integrate AI technologies into existing products, ensuring seamless user interactions.",
							"Conducting user research and usability testing to gather feedback and iterate on design solutions.",
						]}
					/>
				</Container>
			</Section>
		</>
	);
}

interface ExperienceItemProps {
	jobTitle?: string;
	companyName?: string;
	duration?: string;
	jobDescription?: string[] | undefined;
}

function ExperienceItem({
	jobTitle,
	companyName,
	duration,
	jobDescription,
}: ExperienceItemProps) {
	return (
		<>
			<div className="flex flex-col">
				<H3>{jobTitle}</H3>
				<H4>{companyName}</H4>
				<H5>{duration}</H5>
				<UL>
					{jobDescription &&
						jobDescription.map((task) => <LI key={task}>{task}</LI>)}
				</UL>
			</div>
		</>
	);
}
