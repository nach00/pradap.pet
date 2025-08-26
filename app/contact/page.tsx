import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import { Metadata } from "next";
import Link from "next/link";

const pageTitle: string = "Contact";
const pageDescription: string = "Let's work together. Get in touch with me.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function ContactPage() {
	return (
		<>
			<HeroSection />
			{/* <ContactSection /> */}
		</>
	);
}

function HeroSection() {
	return (
		<>
			<Section>
				<Container>
					<PageHeader title={pageTitle} description={pageDescription} />
					{/* <Container> */}
					{/* 	<ContactForm /> */}
					{/* </Container> */}
					{/* <Container> */}
					{/* 	<FAQ /> */}
					{/* </Container> */}

					<div className="flex flex-row gap-8 mt-12">
						<Button className="w-min">
							<Link href="mailto:natcha@pradap.pet">natcha@pradap.pet</Link>
						</Button>
						<Button className="w-min">
							<Link href="https://www.linkedin.com/in/natcha-pradappet/">
								LinkedIn
							</Link>
						</Button>
						<Button className="w-min">
							<Link href="https://github.com/nach00">Github</Link>
						</Button>
						<Button className="w-min">
							<Link href="https://calendly.com/npradappet/alpha">Calendly</Link>
						</Button>
					</div>
				</Container>
			</Section>
		</>
	);
}

function ContactSection() {
	return (
		<>
			<Section>
				<Container>
					<h2>Email</h2>

					<Button>
						<Link href="mailto:natcha@pradap.pet">natcha@pradap.pet</Link>
					</Button>
				</Container>
			</Section>
		</>
	);
}
