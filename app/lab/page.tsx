import Link from "next/link";
import { cn } from "@/lib/utils";
import { H4, H6 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { Metadata } from "next";

const pageTitle: string = "Lab";
const pageDescription: string = "Collection of random works";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function LabPage() {
	return (
		<>
			<HeroSection />
			<LabSection />
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

function LabSection() {
	return (
		<Section>
			<Container
				className={cn(
					"flex flex-col w-full gap-8",
					"landscape:flex-row landscape:justify-between",
				)}
			>
				<div className="flex flex-col w-full">
					<H6>Direct Contact</H6>
					<div className="flex flex-col gap-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							<ExperimentCard
								type="Experiment 1"
								id="Experiment 1"
								link="/lab/experiment1"
								description="Experiment 1"
							/>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}

interface ExperimentCardProps {
	type?: string;
	id?: string;
	link?: string;
	description?: string;
}

function ExperimentCard({ type, id, link, description }: ExperimentCardProps) {
	return (
		<>
			{link && (
				<Link href={link}>
					<div className="border flex flex-col gap-4 p-4 rounded-md border-[var(--base-4)] hover:border-[var(--base-6)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
						<H4>{type} →</H4>
						<H6>{id}</H6>
						<P>{description}</P>
					</div>
				</Link>
			)}
		</>
	);
}
