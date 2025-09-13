import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import {
	P,
	UL,
	Lede,
	LI,
	Small,
	Eyebrow,
} from "@/components/typography/TextElements";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/Marquee";
import PageHeader from "@/components/layout/PageHeader";
import StatStack from "@/components/StatStack";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SelectedWorkSection } from "@/app/page";
import { ArchivedItem } from "@/app/work/ArchivedItem";

import { getProjectDetails as tamaguiProjectDetails } from "@/app/work/tamagui/page";
import { getProjectDetails as rfidinterlockProjectDetails } from "@/app/work/rfidinterlock/page";
import { getProjectDetails as fossilProjectDetails } from "@/app/work/fossil/page";
import { Metadata } from "next";

const pageTitle: string = "Work";
const pageDescription: string =
	"A collection of projects exploring the intersection of design, engineering, and artificial intelligence.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function WorkPage() {
	return (
		<div className="">
			<HeroSection />
			{/* <StatsSection /> */}
			<SelectedWorkSection />
			<ArchivedWorkSection />
			<ClientsSection />
		</div>
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
function ClientsSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Past Clients</H2>
					<ClientMarquee />
				</Container>
			</Section>
		</>
	);
}
function ArchivedWorkSection() {
	const archivedProjects = [
		{ href: "/work/tamagui", ...tamaguiProjectDetails() },
		{ href: "/work/rfidinterlock", ...rfidinterlockProjectDetails() },
		{ href: "/work/fossil", ...fossilProjectDetails() },
	];

	const otherProjects = [
		{
			id: "07",
			year: "20XX",
			status: "Ongoing",
			category: "Retail/Ordering",
			title: "Bimbo Bakeries",
			duty: "Front End Development",
			industry: "Food Manufacturing",
		},
		{
			id: "08",
			year: "20XX",
			status: "Ongoing",
			category: "Online Library",
			title: "Baker & Taylor",
			duty: "UI/UX Design",
			industry: "Library Services",
		},
		{
			id: "09",
			year: "20XX",
			status: "Ongoing",
			category: "Online Payments",
			title: "Njevity",
			duty: "UX Audit",
			industry: "IT Services",
		},
		{
			id: "10",
			year: "20XX",
			status: "Ongoing",
			category: "Appointment Scheduler",
			title: "Banfield Pet Hospital",
			duty: "UI/UX Design",
			industry: "Pet Healthcare",
		},
		{
			id: "11",
			year: "20XX",
			status: "Ongoing",
			category: "Tech",
			title: "Good Game, Well Played",
			duty: "UI/UX Design",
			industry: "Esports/Gaming",
		},
		{
			id: "12",
			year: "20XX",
			status: "Ongoing",
			category: "Tech",
			title: "PawzPurr",
			duty: "UX Audit",
			industry: "Estate Planning",
		},
		{
			id: "13",
			year: "20XX",
			status: "Ongoing",
			category: "Tech",
			title: "Upquest",
			duty: "Front End Development",
			industry: "Social Media",
		},
		{
			id: "14",
			year: "20XX",
			status: "Ongoing",
			category: "Tech",
			title: "Sprint",
			duty: "UI/UX Design",
			industry: "Telecommunications",
		},
		{
			id: "15",
			year: "20XX",
			status: "Ongoing",
			category: "Tech",
			title: "TopGolf",
			duty: "UX Research",
			industry: "Entertainment",
		},
		{
			id: "16",
			year: "20XX",
			status: "Ongoing",
			category: "Tech",
			title: "Waltz Health",
			duty: "UI/UX Design",
			industry: "Health Technology",
		},
	];
	return (
		<>
			<Section>
				<Container>
					<H2>Archived Work</H2>
					<Lede className={cn("mb-12")}>
						Projects from previous years. Details available upon request.
					</Lede>

					{archivedProjects.map((project) => (
						<ArchivedItem key={project.id} {...project} />
					))}
					{/* {otherProjects.map((project) => ( */}
					{/* 	<ArchivedItem key={project.id} {...project} /> */}
					{/* ))} */}
				</Container>
			</Section>
		</>
	);
}

const clients = [
	{
		company: "Baker & Taylor",
		logo: "/images/logos/baker-white.svg",
	},
	{
		company: "Banfield Pet Hospital",
		logo: "/images/logos/banfield-white.svg",
	},
	{
		company: "Bimbo Bakeries",
		logo: "/images/logos/bimbo-white.svg",
	},
	{
		company: "Good Game, Well Played",
		logo: "/images/logos/ggwp-white.svg",
	},
	{
		company: "Njevity",
		logo: "/images/logos/njevity-white.svg",
	},
	{
		company: "PawzPurr",
		logo: "/images/logos/pawzpurr-white.svg",
	},
	{
		company: "RFID Interlock",
		logo: "/images/logos/rfid-white.svg",
	},
	{
		company: "Scoutify",
		logo: "/images/logos/scoutify-white.svg",
	},
	{
		company: "Sprint",
		logo: "/images/logos/sprint-white.svg",
	},
	{
		company: "TopGolf",
		logo: "/images/logos/topgolf-white.svg",
	},
	{
		company: "Upquest",
		logo: "/images/logos/upquest-white.svg",
	},
	{
		company: "Waltz Health",
		logo: "/images/logos/waltz-white.svg",
	},
];

const firstRow = clients.slice(0, clients.length / 2);
const secondRow = clients.slice(clients.length / 2);

const ClientCard = ({ company, logo }: { company: string; logo: string }) => {
	return (
		<figure
			className={cn(
				"relative h-full w-64 overflow-hidden rounded-sm border p-4",
				// light styles
				"border-[var(--base-4)] bg-[var(--base-2)] hover:bg-[var(--base-3)] hover:border-[var(--base-6)]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<div
					className="rounded-full bg-[var(--base-11)]"
					style={{
						width: "32px",
						height: "32px",
						maskImage: `url(${logo})`,
						maskSize: "contain",
						maskRepeat: "no-repeat",
						maskPosition: "center",
					}}
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium text-[var(--base-11)]">
						{company}
					</figcaption>
				</div>
			</div>
		</figure>
	);
};

export function ClientMarquee() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:60s]">
				{firstRow.map((client) => (
					<ClientCard key={client.company} {...client} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:60s]">
				{secondRow.map((client) => (
					<ClientCard key={client.company} {...client} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
		</div>
	);
}
