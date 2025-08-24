import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import { Metadata } from "next";
import Link from "next/link";

const pageTitle: string = "Blog";
const pageDescription: string =
	"Design Engineer with 5+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence. Based in Bangkok, working with teams globally.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function BlogPage() {
	return (
		<Section>
			<Container className="mb-30 flex flex-row gap-20">
				<PageHeader title={pageTitle} description={pageDescription} />
			</Container>
		</Section>
	);
}
