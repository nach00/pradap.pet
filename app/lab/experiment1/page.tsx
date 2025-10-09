"use client";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Scene from "./Scene";
import Experiment from "@/app/lab/Experiment";

const pageTitle: string = "Experiment 1";
const pageDescription: string = "Random 3D project";

export default function ExperimentPage() {
	return (
		<>
			<HeroSection />
			<Experiment>
				<Scene />
			</Experiment>
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
