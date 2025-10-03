"use client";
import { cn } from "@/lib/utils";
import { H6 } from "@/components/typography/Headings";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Scene from "./Scene";
// import { Metadata } from "next";

const pageTitle: string = "Experiment 1";
const pageDescription: string = "Random 3D project";

export default function Experiment1Page() {
	return (
		<>
			<HeroSection />
			<Experiment1 />
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

function Experiment1() {
	return (
		<Section>
			<Container
				variant="edgeToEdgeResponsive"
				className={cn(
					"flex flex-col w-full gap-8",
					"landscape:flex-row landscape:justify-between",
				)}
			>
				<div className="flex flex-col w-full">
					<H6>Experiment 1</H6>
					<Scene />
				</div>
			</Container>
		</Section>
	);
}
