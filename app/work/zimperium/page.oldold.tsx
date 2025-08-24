import { Container } from "@/components/layout/Container";
import {
	Headline,
	Subheading,
	SectionHeading,
	SubsectionHeading,
	MinorHeading,
	Paragraph,
	Lede,
	SmallText,
	CategoryTag,
	Badge,
	Status,
	Eyebrow,
	LinkText,
	ButtonText,
	DataPair,
	DataGrid,
} from "@/components/type";
import { SingleProject } from "@/components/sections/Project";
import { Metadata } from "next";
import Link from "next/link";
import {
	IconArrowLeft,
	IconExternalLink,
	IconBrandGithub,
} from "@tabler/icons-react";
import { redirect } from "next/navigation";
import { ZimpMarquee } from "./ZimpMarquee";
import { MobileAppPin } from "./MobileAppPin";
import { AdminConsolePin } from "./AdminConsolePin";
import { DesignSystemPin } from "./DesignSystemPin";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug;

	// Check if this is an existing project

	// Default for new work pages
	return {
		title: `Work Details | ${slug} | Natcha Pradappet`,
		description: "Detailed case study and project documentation.",
	};
}

export default function WorkDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	const slug = params.slug;

	// For new work pages, use the template below
	const projectData = {
		title: "Zimperium",
		subtitle: "Brief project description or tagline",
		category: "Category",
		year: "2024",
		client: "Client Name",
		duration: "3 months",
		team: "Solo / Team of 3",
		role: "Lead Designer & Developer",
		status: "Completed",
		description:
			"This is a comprehensive project description that explains the context, challenges, and solutions implemented.",
		technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
		tags: ["Web Development", "UI/UX", "Frontend"],
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/username/repo",
		images: [
			{ src: "/placeholder.jpg", alt: "Project screenshot 1" },
			{ src: "/placeholder.jpg", alt: "Project screenshot 2" },
		],
	};

	return (
		<div className="mt-50">
			<ZimpMarquee />
			<Container>
				<div className="flex flex-col w-full items-start justify-start p-1 gap-1">
					<div className="flex gap-4 flex-row">
						<div className="text-sm font-light leading-5 text-muted-foreground flex items-center justify-center font-mono">
							03
						</div>
						<div className="text-xs font-light leading-4 text-secondary-foreground flex items-center justify-center">
							{projectData.year}
						</div>
						<div className="bg-secondary px-3 py-1 text-xs font-medium leading-4 text-secondary-foreground flex items-center justify-center rounded-full">
							project
						</div>
						<div className="bg-primary px-3 py-1 text-xs font-medium leading-4 text-primary-foreground flex items-center justify-center rounded-full">
							category
						</div>
					</div>
					<div className="w-full text-foreground font-light text-6xl leading-16">
						{projectData.title}
					</div>
					<div className="w-full flex gap-4 flex-col text-secondary-foreground">
						<div>
							In an era where digital threats are constantly evolving, Zimperium
							stands at the forefront of mobile cybersecurity.
						</div>

						<div>
							As the sole UX/UI designer for this innovative company, I was
							tasked with reimagining and redesigning their entire cybersecurity
							suite.
						</div>

						<div>
							This case study details the journey of creating the Hyperion
							Design System, revamping the zConsole dashboard, and conducting
							crucial UX research for the zIPS mobile security app.
						</div>
					</div>

					<div className="flex gap-1 flex-row">
						<div className="border p-1">duration</div>
						<div className="border p-1">team</div>
						<div className="border p-1">role</div>
						<div className="border p-1">type</div>
					</div>
				</div>
			</Container>
			<div className="mt-10 flex flex-col md:flex-row">
				<MobileAppPin />
				<AdminConsolePin />
				<DesignSystemPin />
			</div>
		</div>
	);
}
