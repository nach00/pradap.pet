import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import {
	P,
	UL,
	LI,
	Small,
	Eyebrow,
	Lede,
} from "@/components/typography/TextElements";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { Metadata } from "next";
import { Button } from "@/components/ui/button";

const pageTitle: string = "Contact";
const pageDescription: string = "Let's work together";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function ContactPage() {
	return (
		<>
			<HeroSection />
			<ContactFormSection />
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

function ContactFormSection() {
	return (
		<Section>
			<Container
				className={cn(
					"flex flex-col w-full gap-8",
					"landscape:flex-row landscape:justify-between",
				)}
			>
				<div className="flex flex-col w-full">
					<H6>Send a message</H6>
					<div className="flex flex-col gap-6">
						<div className="grid w-full max-w-sm items-center gap-3">
							{/* <Label htmlFor="name">Name</Label> */}
							<Input type="name" id="name" placeholder="Name" />
						</div>
						<div className="grid w-full max-w-sm items-center gap-3">
							{/* <Label htmlFor="email">Email</Label> */}
							<Input type="email" id="email" placeholder="Email" />
						</div>
						<div className="grid w-full max-w-sm items-center gap-3">
							<Textarea placeholder="Type your message here." />
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full">
					<H6>Direct Contact</H6>
					<div className="flex flex-col gap-6">
						<div className="grid w-full max-w-sm items-center gap-3">
							{/* <Label htmlFor="name">Name</Label> */}
							<DirectContactCard
								type="Email"
								id="natcha@pradap.pet"
								link="mailto:natcha@pradap.pet"
								description="Good ol' fashioned inboxing"
							/>
							<DirectContactCard
								type="X"
								id="@nach0s"
								link="https://x.com/nach0s"
								description="Don't @ me"
							/>
							<DirectContactCard
								type="LinkedIn"
								id="@natcha-pradappet"
								link="https://www.linkedin.com/in/natcha-pradappet/"
								description="Professional stuff"
							/>
							<DirectContactCard
								type="Dribbble"
								id="@nach00"
								link="https://dribbble.com/nach00"
								description="More project showcase"
							/>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}

interface DirectContactCardProps {
	type?: string;
	id?: string;
	link?: string;
	description?: string;
}

function DirectContactCard({
	type,
	id,
	link,
	description,
}: DirectContactCardProps) {
	return (
		<>
			{link && (
				<Link href={link}>
					<div className="border flex flex-col gap-8 p-4 rounded-md">
						<H5>{type} →</H5>
						<H6>{id}</H6>
						<P>{description}</P>
					</div>
				</Link>
			)}
		</>
	);
}
