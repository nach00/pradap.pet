import PageHeader from "@/components/layout/PageHeader";
import StatStack from "./StatStack";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/work/ProductCard";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SelectedWorkSection } from "@/app/page";
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
			{/* Page header */}
			{/* <Section> */}
			{/* 	<Container className="mb-30"> */}
			{/* 	</Container> */}
			{/* </Section> */}
			<HeroSection />
			{/* Stats */}
			{/* <StatsSection /> */}

			{/* Selected work */}
			<SelectedWorkSection />
			{/* <Section> */}
			{/* 	<Container> */}
			{/* 		<h2>Selected Work</h2> */}
			{/**/}
			{/* 		<ProductCard /> */}
			{/* 	</Container> */}
			{/* </Section> */}

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
	return (
		<>
			<Section>
				<Container>
					<h2>Archived Work</h2>
					<p>Projects from previous years. Details available upon request.</p>
				</Container>
			</Section>
		</>
	);
}
