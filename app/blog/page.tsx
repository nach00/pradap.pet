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

import { Metadata } from "next";
const pageTitle: string = "Blog";
const pageDescription: string = "Coming soon";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function BlogPage() {
	return (
		<>
			<HeroSection />
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
