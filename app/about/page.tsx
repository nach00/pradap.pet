import { cn } from "@/lib/utils";
import SoftwareSkillsPortfolio from "./SoftwareSkills";
import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Marquee } from "@/components/Marquee";
import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import StatStack from "@/components/StatStack";
import {
	P,
	UL,
	LI,
	Small,
	Lede,
	Eyebrow,
	Caption,
	Blockquote,
} from "@/components/typography/TextElements";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SkillsSection from "./SkillsSection";

import Image from "next/image";
import type { Metadata } from "next";

const pageTitle: string = "About";
const pageDescription: string =
	"Design Engineer with 5+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence.";

// User focused, collaborative, and innovative UX designer with 5+ years of experience
// specializing in clean and simple user interfaces for enterprise systems. A critical thinker
// and learner at heart, with experience in cybersecurity and agency industries.

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function AboutPage() {
	return (
		<>
			<HeroSection />
			<ProfileSection />
			<ExperienceSection />
			<EducationSection />
			<CertificatesSection />
			<AwardsSection />
			<SkillsSection />
		</>
	);
}

function HeroSection() {
	return (
		<>
			<Section>
				<Container>
					<PageHeader title={pageTitle} description={pageDescription} />

					<Button variant="default" className={cn("mt-12")}>
						<Link href="https://drive.google.com/file/d/103Ur2NEFO2I-4TKUDVG_hBs8w-TJ3n7w/view?usp=drive_link">
							View PDF resume →
						</Link>
					</Button>
				</Container>
			</Section>
		</>
	);
}

function ProfileSection() {
	return (
		<>
			<Section>
				<Container>
					<div className="flex flex-row justify-between">
						<H2>Journey</H2>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
						<div className="lg:col-span-2">
							<P className="max-w-[60ch]">
								I began my career chasing the dream of becoming a restaurateur,
								studying culinary arts, business, and even interning at Disney
								World’s Epcot in the Norwegian Pavilion. After nearly a decade
								in the restaurant industry, I realized my true passion lay in
								tech.
							</P>

							<P>
								I spent nights and weekends teaching myself web development and
								design, taking on freelance projects where I first used Adobe XD
								to bring client ideas to life. Over time, I built a portfolio
								strong enough to land my first professional role as a UX
								Designer at Zimperium.
							</P>

							<P className="max-w-[60ch]">
								From there, I expanded my experience in both in-house and agency
								settings—at Photon as a UX/UI Designer and at Insite as a UX
								Strategy Specialist. Most recently, I completed a full-stack
								coding bootcamp at Altcademy, continuing my journey toward
								becoming a developer.
							</P>
						</div>

						<div className={cn("w-full")}>
							<Image
								src="/images/ai_profile.jpg"
								width={500}
								height={500}
								alt="Picture of Natcha Pradappet"
								className="rounded-sm"
							/>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

function ExperienceSection() {
	return (
		<Section>
			<Container variant="narrow">
				<H2>Experience</H2>

				<div className={cn("flex flex-col gap-12")}>
					<ExperienceItem
						jobTitle="Co-Founder & CTO"
						companyName="Planet Nacho"
						duration="February 2019 - Present"
						location="Dallas, TX - Remote"
						description="Co-founded a design and development studio providing freelance services for a variety of clients, including:"
						jobDescription={[
							"Tamagui: Design System Designer – organized Figma UI kit with 30+ components, 3 utility variables, and 4 color variants.",
							"Scoutflix: UX Director – established user flows, information architecture, sitemap, low-fidelity wireframes, and prototypes.",
							"GGWP: UI/UX Designer – created admin dashboard, user profile, and in-game overlay design mockups for 3+ video games.",
							"Net Consensus: React Developer & UI Designer – modernized first-time user experience and implemented color themes.",
							"RFID Interlock: UI/UX Designer – overhauled admin dashboard experience and reduced time to task completion by 80%.",
						]}
					/>

					<ExperienceItem
						jobTitle="UX Strategist"
						companyName="Insite"
						duration="July 2022 - June 2023"
						location="Dallas, TX - Hybrid"
						description="Specialized in UX strategy, UX design, and information architecture for a variety of clients, including:"
						jobDescription={[
							"TopGolf: UX Researcher – administered 30+ user interviews and provided actionable data to optimize online booking.",
							"Fossil Group: Email Developer – translated Adobe XD design files into HTML and CSS code for 7 watch brands.",
							"Bimbo Bakeries USA: Front end developer – resolved bugs and improved functionality for Django/Bootstrap web app.",
							"UT Southwestern: Front-End Developer – migrated CMS platform from Alfresco to Drupal and updated new landing page.",
							"PawzPurr: UX Strategist – developed new business model canvas, mapped process flow, and ideated wireframes.",
							"Njevity: UX Auditor – scoped new project requirements, identified bottlenecks, and synthesized swim lane diagrams.",
						]}
					/>

					<ExperienceItem
						jobTitle="UX/UI Designer"
						companyName="Photon"
						duration="September 2021 - June 2022"
						location="London, UK - Remote"
						description="Provided UX and product consultation for a variety of clients, including:"
						jobDescription={[
							"Baker & Taylor: UI/UX Designer – created mobile, tablet, and web designs and transitioned team from Adobe XD to Figma.",
							"Banfield Pet Hospital: UI/UX Designer – upgraded existing admin dashboard with new feature requirements.",
							"Waltz Health: UI/UX Designer – designed static website mockup for mobile and desktop and directed motion graphics.",
						]}
					/>

					<ExperienceItem
						jobTitle="UX/UI Designer"
						companyName="Zimperium"
						duration="September 2019 - July 2021"
						location="Dallas, TX - On-Site"
						description="Led product design initiative for cybersecurity agency specializing in mobile threat detection."
						jobDescription={[
							"Collaborated with 3 engineering teams and 2 SVPs of Product Management and provided optimal design solutions.",
							"Balanced new features for both current and next-gen admin dashboards, while prioritizing consistent design patterns.",
							"Organized and maintained design files for 5+ SaaS products, a mobile app with 8+ cobrands, and a Chrome extension.",
						]}
					/>
				</div>
			</Container>
		</Section>
	);
}

function EducationSection() {
	return (
		<Section>
			<Container variant="narrow">
				<H2>Education</H2>

				<div className="flex flex-col gap-12">
					<ExperienceItem
						jobTitle="Master's in Business Administration (MBA)"
						companyName="University of Texas at Dallas"
						duration="August 2011 - 2013"
						location="Richardson, TX"
						description="Strategic management"
					/>

					<ExperienceItem
						jobTitle="Bachelor's in Business Administration (BBA)"
						companyName="Baylor University"
						duration="August 2005 - 2007"
						location="Waco, TX"
						description="Marketing"
					/>
				</div>
			</Container>
		</Section>
	);
}
function CertificatesSection() {
	return (
		<Section>
			<Container variant="narrow">
				<H2>Certificates</H2>

				<div className={cn("flex flex-col gap-12")}>
					<div className={cn("gap-4")}>
						<ExperienceItem
							jobTitle="Full Stack Development"
							companyName="Altcademy"
							duration="August 2025"
							location="Online"
						/>

						<Button>
							<Link href="https://www.altcademy.com/@nacho">
								View certificate
							</Link>
						</Button>
					</div>
					<div className={cn("gap-4")}>
						<ExperienceItem
							jobTitle="3D Web Development"
							companyName="Three.js Journey"
							duration="October 2023"
							location="Online"
							// certificateUrl="https://threejs-journey.com/certificate/view/32409"
						/>
						<Button>
							<Link href="https://threejs-journey.com/certificate/view/32409">
								View certificate
							</Link>
						</Button>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function AwardsSection() {
	return (
		<Section className="bg-[var(--base-1)] border-t border-[var(--base-4)]">
			<Container variant="narrow">
				<H2>Awards</H2>

				<div className={cn("flex flex-col gap-12")}>
					<ExperienceItem
						jobTitle="1st Place"
						companyName="HackDFW"
						duration="January 2019"
						location="Dallas, TX"
						description="Prevented health code violations in restaurants."
					/>

					<ExperienceItem
						jobTitle="2nd Place"
						companyName="Startup Weekend"
						duration="February 2019"
						location="Fort Worth, TX"
						description="Developed tech solutions company for restaurants."
					/>

					<ExperienceItem
						jobTitle="Best Workplace Solution"
						companyName="Brother Hackathon"
						duration="March 2019"
						location="Dallas, TX"
						description="Simplified food labeling task for kitchen staff."
					/>
				</div>
			</Container>
		</Section>
	);
}

interface ExperienceItemProps {
	clsssName?: string;
	jobTitle?: string;
	companyName?: string;
	duration?: string;
	location?: string;
	description?: string;
	jobDescription?: string[] | undefined;
}

function ExperienceItem({
	className,
	jobTitle,
	companyName,
	duration,
	location,
	description,
	jobDescription,
}: ExperienceItemProps) {
	return (
		<article
			className={
				cn()
				// "group relative",
				// "border-l border-[var(--base-4)] pl-8 pb-12 last:pb-0",
				// "xxxs:pl-6 xxs:pl-7 xs:pl-8",
				// "before:absolute before:left-[-5px] before:top-2",
				// "before:w-2.5 before:h-2.5 before:rounded-full",
				// "before:bg-[var(--accent-9)] before:border-2 before:border-[var(--base-1)]",
				// "before:transition-all before:duration-300",
				// "hover:before:scale-110 hover:before:bg-[var(--accent-10)]",
				// "transition-all duration-300 ease-out",
			}
		>
			<header
				className={cn(
					"space-y-2 mb-6",
					"xxxs:space-y-1.5 xxxs:mb-4",
					"xxs:space-y-1.5 xxs:mb-5",
					"xs:space-y-2 xs:mb-6",
				)}
			>
				{jobTitle && (
					<H3
						className={cn(
							"mb-1 group-hover:text-[var(--accent-11)]",
							"transition-colors duration-300",
						)}
					>
						{jobTitle}
					</H3>
				)}

				{companyName && (
					<H4
						className={cn(
							"not-italic font-medium",
							"text-[var(--accent-11)]",
							"group-hover:text-[var(--accent-11)]",
							"transition-colors duration-300",
						)}
					>
						{companyName}
					</H4>
				)}

				<div
					className={cn(
						"flex flex-col gap-1",
						"xxxs:gap-0.5 xxs:gap-0.5 xs:gap-1",
					)}
				>
					{duration && (
						<Eyebrow
							className={cn(
								"not-italic text-[var(--base-10)]",
								"group-hover:text-[var(--base-11)]",
								"transition-colors duration-300",
							)}
						>
							{duration}
						</Eyebrow>
					)}

					{location && (
						<Small
							className={cn(
								"not-italic text-[var(--base-9)] opacity-75",
								"group-hover:opacity-100 group-hover:text-[var(--base-10)]",
								"transition-all duration-300",
							)}
						>
							{location}
						</Small>
					)}
				</div>
			</header>

			<div
				className={cn("space-y-6", "xxxs:space-y-4 xxs:space-y-5 xs:space-y-6")}
			>
				{description && (
					<Lede
						className={cn(
							"not-italic leading-[1.7] text-[var(--base-11)]",
							"group-hover:text-[var(--base-12)]",
							"transition-colors duration-300",
						)}
					>
						{description}
					</Lede>
				)}

				{jobDescription && jobDescription.length > 0 && (
					<UL
						className={cn(
							"space-y-3 ml-0",
							"xxxs:space-y-2 xxs:space-y-2.5 xs:space-y-3",
						)}
					>
						{jobDescription.map((task, index) => (
							<LI
								key={`${task}-${index}`}
								className={cn(
									"not-italic text-[var(--base-10)]",
									"before:text-[var(--accent-8)] before:font-normal",
									"before:opacity-60 group-hover:before:opacity-100",
									"group-hover:text-[var(--base-11)]",
									"transition-all duration-300 ease-out",
									"leading-[1.6]",
								)}
							>
								{task}
							</LI>
						))}
					</UL>
				)}
			</div>
		</article>
	);
}

// interface ExperienceItemProps {
// 	jobTitle?: string;
// 	companyName?: string;
// 	duration?: string;
// 	location?: string;
// 	description?: string;
// 	jobDescription?: string[] | undefined;
// }
//
// function ExperienceItem({
// 	jobTitle,
// 	companyName,
// 	duration,
// 	location,
// 	description,
// 	jobDescription,
// }: ExperienceItemProps) {
// 	return (
// 		<article>
// 			<header>
// 				<H4>{jobTitle}</H4>
// 				<H5>{companyName}</H5>
// 				<Eyebrow className={cn("pl-6")}>{duration}</Eyebrow>
// 				{location && <H6 className={cn("pl-6")}>{location}</H6>}
// 			</header>
//
// 			<div className="space-y-6 xxxs:space-y-4 xxs:space-y-5 xs:space-y-6">
// 				{description && <Lede className={cn("pl-6 mt-4")}>{description}</Lede>}
//
// 				{jobDescription && (
// 					<UL className="pl-6">
// 						{jobDescription.map((task, index) => (
// 							<LI key={task} className={cn("text-[var(--base-11)]")}>
// 								{task}
// 							</LI>
// 						))}
// 					</UL>
// 				)}
// 			</div>
// 		</article>
// 	);
// }

const designTools = [
	{
		name: "Adobe After Effects",
		logo: "/images/logos/software/adobe-after-effects.svg",
	},
	{
		name: "Adobe Illustrator",
		logo: "/images/logos/software/adobe-illustrator.svg",
	},
	{
		name: "Adobe InDesign",
		logo: "/images/logos/software/adobe-indesign.svg",
	},
	{
		name: "Adobe Lightroom",
		logo: "/images/logos/software/adobe-lightroom.svg",
	},
	{
		name: "Adobe Photoshop",
		logo: "/images/logos/software/adobe-photoshop.svg",
	},
	{
		name: "Adobe XD",
		logo: "/images/logos/software/adobe-xd.svg",
	},
	{
		name: "Affinity Designer",
		logo: "/images/logos/software/affinity-designer.svg",
	},
	{
		name: "Affinity Photo",
		logo: "/images/logos/software/affinity-photo.svg",
	},
	{
		name: "Affinity Publisher",
		logo: "/images/logos/software/affinity-publisher.svg",
	},
	{
		name: "Figma",
		logo: "/images/logos/software/figma.svg",
	},
	{
		name: "Framer",
		logo: "/images/logos/software/framer.svg",
	},
	{
		name: "Framer Motion",
		logo: "/images/logos/software/framer-motion.svg",
	},
];

const development = [
	{
		name: "Bootstrap",
		logo: "/images/logos/software/bootstrap.svg",
	},
	{
		name: "CSS",
		logo: "/images/logos/software/css.svg",
	},
	{
		name: "Django",
		logo: "/images/logos/software/django.svg",
	},
	{
		name: "Drupal",
		logo: "/images/logos/software/drupal.svg",
	},
	{
		name: "HTML",
		logo: "/images/logos/software/html.svg",
	},
	{
		name: "JavaScript",
		logo: "/images/logos/software/javascript.svg",
	},
	{
		name: "Python",
		logo: "/images/logos/software/python.svg",
	},
	{
		name: "React",
		logo: "/images/logos/software/react.svg",
	},
	{
		name: "Ruby",
		logo: "/images/logos/software/ruby.svg",
	},
	{
		name: "Sass",
		logo: "/images/logos/software/sass.svg",
	},
	{
		name: "Tailwind CSS",
		logo: "/images/logos/software/tailwind.svg",
	},
	{
		name: "Three.js",
		logo: "/images/logos/software/three.svg",
	},
	{
		name: "Vue.js",
		logo: "/images/logos/software/vue.svg",
	},
];

const otherTools = [
	{
		name: "Arduino",
		logo: "/images/logos/software/arduino.svg",
	},
	{
		name: "Blender",
		logo: "/images/logos/software/blender.svg",
	},
	{
		name: "Fusion 360",
		logo: "/images/logos/software/fusion.svg",
	},
	{
		name: "Raspberry Pi",
		logo: "/images/logos/software/raspberry-pi.svg",
	},
	{
		name: "Vim",
		logo: "/images/logos/software/vim.svg",
	},
	{
		name: "PoinMdrs",
		logo: "/images/logos/software/poinmdrs.svg",
	},
];

function SoftwareSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Software Skills</H2>
					{/* <SoftwareMarquee /> */}

					{designTools.map((software) => (
						<SoftwareTagBox key={software.name} {...software} />
					))}
				</Container>
			</Section>
		</>
	);
}

interface SoftwareTagBoxProps {
	children?: ReactNode;
	className?: string;
	logo?: string;
	name?: string;
}

export function SoftwareTagBox({
	children,
	className,
	logo,
	name,
}: SoftwareTagBoxProps) {
	return (
		<Small
			className={cn(
				"border text-[var(--base-11)] px-2 py-1 flex-shrink-0 hover:bg-[var(--base-3)] hover:border-[var(--base-8)]",
				className,
			)}
		>
			<div
				className="w-10 h-10 mx-auto bg-contain bg-center bg-no-repeat opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
				style={{ backgroundImage: `url('${designTools.logo}')` }}
			/>
			{/* <div */}
			{/* 	style={{ */}
			{/* 		backgroundImage: `url('${icon}')`, */}
			{/* 		backgroundSize: "full", */}
			{/* 		// backgroundSize: size === "full" ? "cover" : "contain", */}
			{/* 	}} */}
			{/* /> */}
			{name}
			{children}
		</Small>
	);
}

const software = [
	{
		name: "Baker & Taylor",
		logo: "/images/logos/baker-white.svg",
	},
	{
		name: "Banfield Pet Hospital",
		logo: "/images/logos/banfield-white.svg",
	},
	{
		name: "Bimbo Bakeries",
		logo: "/images/logos/bimbo-white.svg",
	},
	{
		name: "Good Game, Well Played",
		logo: "/images/logos/ggwp-white.svg",
	},
	{
		name: "Njevity",
		logo: "/images/logos/njevity-white.svg",
	},
	{
		name: "PawzPurr",
		logo: "/images/logos/pawzpurr-white.svg",
	},
	{
		name: "RFID Interlock",
		logo: "/images/logos/rfid-white.svg",
	},
	{
		name: "Scoutify",
		logo: "/images/logos/scoutify-white.svg",
	},
	{
		name: "Sprint",
		logo: "/images/logos/sprint-white.svg",
	},
	{
		name: "TopGolf",
		logo: "/images/logos/topgolf-white.svg",
	},
	{
		name: "Upquest",
		logo: "/images/logos/upquest-white.svg",
	},
	{
		name: "Waltz Health",
		logo: "/images/logos/waltz-white.svg",
	},
];

const firstRow = software.slice(0, software.length / 2);
const secondRow = software.slice(software.length / 2);

const SoftwareCard = ({ name, logo }: { name: string; logo: string }) => {
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
						{name}
					</figcaption>
				</div>
			</div>
		</figure>
	);
};

export function SoftwareMarquee() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:60s]">
				{firstRow.map((software) => (
					<SoftwareCard key={software.name} {...software} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:60s]">
				{secondRow.map((software) => (
					<SoftwareCard key={software.name} {...software} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
		</div>
	);
}
