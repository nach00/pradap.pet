import { cn } from "@/lib/utils";
import { VideoModal } from "@/components/VideoModal";
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
						<Link href="https://drive.google.com/file/d/1hvZT7fcbyUOI9cbRCvT76yMEu1X-Vd_G/view?usp=sharing">
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
					<ResumeItem
						title="Co-Founder & CTO"
						organization="Planet Nacho"
						duration="February 2019 - Present"
						location="Dallas, TX - Remote"
						description="Co-founded a design and development studio providing freelance services for a variety of clients, including:"
						services={[
							"Tamagui: Design System Designer – organized Figma UI kit with 30+ components, 3 utility variables, and 4 color variants.",
							"Scoutflix: UX Director – established user flows, information architecture, sitemap, low-fidelity wireframes, and prototypes.",
							"GGWP: UI/UX Designer – created admin dashboard, user profile, and in-game overlay design mockups for 3+ video games.",
							"Net Consensus: React Developer & UI Designer – modernized first-time user experience and implemented color themes.",
							"RFID Interlock: UI/UX Designer – overhauled admin dashboard experience and reduced time to task completion by 80%.",
						]}
					/>

					<ResumeItem
						title="UX Strategist"
						organization="Insite"
						duration="July 2022 - June 2023"
						location="Dallas, TX - Hybrid"
						description="Specialized in UX strategy, UX design, and information architecture for a variety of clients, including:"
						services={[
							"TopGolf: UX Researcher – administered 30+ user interviews and provided actionable data to optimize online booking.",
							"Fossil Group: Email Developer – translated Adobe XD design files into HTML and CSS code for 7 watch brands.",
							"Bimbo Bakeries USA: Front end developer – resolved bugs and improved functionality for Django/Bootstrap web app.",
							"UT Southwestern: Front-End Developer – migrated CMS platform from Alfresco to Drupal and updated new landing page.",
							"PawzPurr: UX Strategist – developed new business model canvas, mapped process flow, and ideated wireframes.",
							"Njevity: UX Auditor – scoped new project requirements, identified bottlenecks, and synthesized swim lane diagrams.",
						]}
					/>

					<ResumeItem
						title="UX/UI Designer"
						organization="Photon"
						duration="September 2021 - June 2022"
						location="London, UK - Remote"
						description="Provided UX and product consultation for a variety of clients, including:"
						services={[
							"Baker & Taylor: UI/UX Designer – created mobile, tablet, and web designs and transitioned team from Adobe XD to Figma.",
							"Banfield Pet Hospital: UI/UX Designer – upgraded existing admin dashboard with new feature requirements.",
							"Waltz Health: UI/UX Designer – designed static website mockup for mobile and desktop and directed motion graphics.",
						]}
					/>

					<ResumeItem
						title="UX/UI Designer"
						organization="Zimperium"
						duration="September 2019 - July 2021"
						location="Dallas, TX - On-Site"
						description="Led product design initiative for cybersecurity agency specializing in mobile threat detection."
						services={[
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
					<ResumeItem
						title="Master's in Business Administration (MBA)"
						organization="University of Texas at Dallas"
						duration="August 2011 - 2013"
						location="Richardson, TX"
						description="Strategic management"
					/>

					<ResumeItem
						title="Bachelor's in Business Administration (BBA)"
						organization="Baylor University"
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
						<ResumeItem
							title="Full Stack Development"
							organization="Altcademy"
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
						<ResumeItem
							title="3D Web Development"
							organization="Three.js Journey"
							duration="October 2023"
							location="Online"
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
					<ResumeItem
						title="1st Place (Beef Over Chicken)"
						organization="HackDFW"
						duration="January 2019"
						location="Dallas, TX"
						description="Prevented health code violations in restaurants."
					/>

					<VideoModal
						className="block dark:hidden"
						animationStyle="from-center"
						videoSrc="https://www.youtube.com/embed/UyWXdsw_MUw?si=8Bb_7NAsnmtC9EUt"
						thumbnailSrc="/images/hackdfw-thumbnail.png"
						thumbnailAlt="HackDFW 2019 Video"
					/>
					<VideoModal
						className="hidden dark:block"
						animationStyle="from-center"
						videoSrc="https://www.youtube.com/embed/UyWXdsw_MUw?si=8Bb_7NAsnmtC9EUt"
						thumbnailSrc="/images/hackdfw-thumbnail.png"
						thumbnailAlt="HackDFW 2019 Video"
					/>

					<ResumeItem
						title="2nd Place (Kitchenovations)"
						organization="Startup Weekend"
						duration="February 2019"
						location="Fort Worth, TX"
						description="Developed tech solutions company for restaurants."
					/>

					<ResumeItem
						title="Best Workplace Solution (Vegelabel)"
						organization="Brother Hackathon"
						duration="March 2019"
						location="Dallas, TX"
						description="Simplified food labeling task for kitchen staff."
					/>
				</div>
			</Container>
		</Section>
	);
}

interface ResumeItemProps {
	className?: string;
	title?: string;
	organization?: string;
	duration?: string;
	location?: string;
	description?: string;
	services?: string[] | undefined;
}

function ResumeItem({
	className,
	title,
	organization,
	duration,
	location,
	description,
	services,
}: ResumeItemProps) {
	return (
		<article className={cn(className)}>
			<header
				className={cn(
					"space-y-2 mb-6",
					"xxxs:space-y-1.5 xxxs:mb-4",
					"xxs:space-y-1.5 xxs:mb-5",
					"xs:space-y-2 xs:mb-6",
				)}
			>
				{title && (
					<H3
						className={cn(
							"mb-1 group-hover:text-[var(--accent-11)]",
							"transition-colors duration-300",
						)}
					>
						{title}
					</H3>
				)}

				{organization && (
					<H4
						className={cn(
							"not-italic font-medium",
							"text-[var(--accent-11)]",
							"group-hover:text-[var(--accent-11)]",
							"transition-colors duration-300",
						)}
					>
						{organization}
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

				{services && services.length > 0 && (
					<UL
						className={cn(
							"space-y-3 ml-0",
							"xxxs:space-y-2 xxs:space-y-2.5 xs:space-y-3",
						)}
					>
						{services.map((task, index) => (
							<LI
								key={`${task}-${index}`}
								className={cn(
									"not-italic text-[var(--base-10)]",
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
