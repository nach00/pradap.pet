import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import StatStack from "@/components/StatStack";
import {
	P,
	UL,
	LI,
	Small,
	Eyebrow,
	Caption,
	Blockquote,
} from "@/components/typography/TextElements";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import {} from "next";

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
			{/* <StatsSection /> */}
			<DemoSection />
			<ExperienceSection />
			<EducationSection />
			<AwardsSection />
		</>
	);
}

function DemoSection() {
	return (
		<>
			<Section>
				<Container>
					<H1>Heading 1</H1>
					<H2>Heading 2</H2>
					<H3>Heading 3</H3>
					<H4>Heading 4</H4>
					<H5>Heading 5</H5>
					<H6>Heading 6</H6>
					<Eyebrow>Eyebrow</Eyebrow>
					<P>
						Cupidatat excepteur nisi incididunt et labore duis commodo qui irure
						nisi adipisicing magna.
					</P>
					<Small>
						Cupidatat excepteur nisi incididunt et labore duis commodo qui irure
						nisi adipisicing magna.
					</Small>
					<UL>
						<LI>
							Cupidatat excepteur nisi incididunt et labore duis commodo qui
							irure nisi adipisicing magna.
						</LI>
						<LI>
							Cupidatat excepteur nisi incididunt et labore duis commodo qui
							irure nisi adipisicing magna.
						</LI>
					</UL>
					<Caption>
						Cupidatat excepteur nisi incididunt et labore duis commodo qui irure
						nisi adipisicing magna.
					</Caption>
					<Blockquote>
						Cupidatat excepteur nisi incididunt et labore duis commodo qui irure
						nisi adipisicing magna.
					</Blockquote>
				</Container>
			</Section>
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

function StatsSection() {
	return (
		<>
			<Section>
				<Container>
					<StatStack number={7} label="years of UI/UX design experinece" />
					<StatStack number={6} label="years figma experience" />
					<StatStack number={100} label="design patents" />
				</Container>
			</Section>
		</>
	);
}

function ExperienceSection() {
	return (
		<Section>
			<Container>
				<H2>Experience</H2>

				<ExperienceItem
					jobTitle="Co-Founder & Chief Technology Director"
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
			</Container>
		</Section>
	);
}

interface ExperienceItemProps {
	jobTitle?: string;
	companyName?: string;
	duration?: string;
	location?: string;
	description?: string;
	jobDescription?: string[] | undefined;
}

function ExperienceItem({
	jobTitle,
	companyName,
	duration,
	location,
	description,
	jobDescription,
}: ExperienceItemProps) {
	return (
		<article>
			<header>
				<H3>{jobTitle}</H3>
				<H4>{companyName}</H4>
				<H5>{duration}</H5>
				{location && <H6>{location}</H6>}
			</header>

			<div className="space-y-6 xxxs:space-y-4 xxs:space-y-5 xs:space-y-6">
				{description && (
					<P className="text-[var(--base-9)] leading-relaxed text-sm xxxs:text-sm xxs:text-base xs:text-base tracking-[0.01em] font-light italic border-l-2 border-[var(--accent-5)] pl-6 xxxs:pl-4 xxs:pl-5 xs:pl-6">
						{description}
					</P>
				)}

				{jobDescription && (
					<div className="border-l-2 border-[var(--base-5)] pl-6 xxxs:pl-4 xxs:pl-5 xs:pl-6">
						<UL className="space-y-3 xxxs:space-y-2 xxs:space-y-2.5 xs:space-y-3 list-none">
							{jobDescription.map((task, index) => (
								<LI
									key={task}
									className="relative text-[var(--base-10)] leading-relaxed text-sm xxxs:text-sm xxs:text-base xs:text-base tracking-[0.005em] before:content-['•'] before:absolute before:-left-4 before:text-[var(--accent-7)] before:font-bold before:text-base xxxs:before:-left-3 xxs:before:-left-3.5 xs:before:-left-4"
								>
									{task}
								</LI>
							))}
						</UL>
					</div>
				)}
			</div>
		</article>
	);
}

function EducationSection() {
	return (
		<Section className="bg-[var(--base-2)] border-t border-[var(--base-4)]">
			<Container>
				<div className="max-w-4xl mx-auto">
					{/* Education Section */}
					<div className="mb-20 xxxs:mb-16 xxs:mb-18 xs:mb-20">
						{/* Section header */}
						<div className="mb-16 xxxs:mb-12 xxs:mb-14 xs:mb-16">
							<H2 className="relative">
								Education
								<div className="absolute -bottom-2 left-0 w-12 h-[1px] bg-[var(--accent-8)] xxxs:w-8 xxs:w-10 xs:w-12"></div>
							</H2>
						</div>

						{/* Education timeline */}
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-4 top-0 bottom-0 w-[1px] bg-[var(--base-4)] xxxs:left-3 xxs:left-4 hidden sm:block"></div>

							<EducationItem
								degree="Master's in Business Administration (MBA)"
								institution="University of Texas at Dallas"
								duration="August 2011 - 2013"
								location="Richardson, TX"
								focus="Strategic management"
							/>

							<EducationItem
								degree="Bachelor's in Business Administration (BBA)"
								institution="Baylor University"
								duration="August 2005 - 2007"
								location="Waco, TX"
								focus="Marketing"
								isLast={true}
							/>
						</div>
					</div>

					{/* Certificates Section */}
					<div>
						{/* Section header */}
						<div className="mb-16 xxxs:mb-12 xxs:mb-14 xs:mb-16">
							<H2 className="relative">
								Certificates
								<div className="absolute -bottom-2 left-0 w-12 h-[1px] bg-[var(--accent-8)] xxxs:w-8 xxs:w-10 xs:w-12"></div>
							</H2>
						</div>

						{/* Certificates timeline */}
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-4 top-0 bottom-0 w-[1px] bg-[var(--base-4)] xxxs:left-3 xxs:left-4 hidden sm:block"></div>

							<CertificateItem
								title="Bootcamp, React Three Fiber Certificate"
								institution="Three.js Journey"
								duration="October 2023"
								location="Online"
								certificateUrl="https://threejs-journey.com/certificate/view/32409"
							/>

							<CertificateItem
								title="Bootcamp, Full Stack Development - JavaScript"
								institution="Launch School"
								duration="November 2018"
								location="Online"
								isLast={true}
							/>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}

interface EducationItemProps {
	degree?: string;
	institution?: string;
	duration?: string;
	location?: string;
	focus?: string;
	isLast?: boolean;
}

function EducationItem({
	degree,
	institution,
	duration,
	location,
	focus,
	isLast = false,
}: EducationItemProps) {
	return (
		<article className="relative group">
			{/* Timeline dot */}
			<div className="absolute left-0 top-6 w-2 h-2 bg-[var(--accent-8)] rounded-full border-2 border-[var(--base-2)] hidden sm:block xxxs:w-1.5 xxxs:h-1.5 xxxs:top-5 xxs:w-2 xxs:h-2 xxs:top-6 transition-all duration-300 group-hover:bg-[var(--accent-9)] group-hover:scale-125"></div>

			{/* Main content */}
			<div className="pl-0 sm:pl-12 xxxs:pl-0 xxs:pl-8 xs:pl-12">
				{/* Header section */}
				<header className="mb-6 xxxs:mb-4 xxs:mb-5 xs:mb-6">
					<div className="flex flex-col xxxs:gap-1 xxs:gap-1.5 xs:gap-2">
						<H3 className="mb-0 text-[var(--base-11)]">{degree}</H3>
						<H4 className="mb-0">{institution}</H4>
						<div className="flex flex-col xxxs:gap-0.5 xxs:gap-1 xs:gap-1 mt-1">
							<H5 className="mb-0 pl-0 border-l-0 uppercase tracking-[0.1em] text-[var(--base-7)] text-xs xxxs:text-xs xxs:text-sm">
								{duration}
							</H5>
							{location && (
								<H6 className="mb-0 text-[var(--base-6)] text-xs xxxs:text-xs xxs:text-sm tracking-wide">
									{location}
								</H6>
							)}
						</div>
					</div>
				</header>

				{/* Focus area */}
				{focus && (
					<div className="border-l-2 border-[var(--accent-5)] pl-6 xxxs:pl-4 xxs:pl-5 xs:pl-6">
						<P className="text-[var(--base-9)] leading-relaxed text-sm xxxs:text-sm xxs:text-base xs:text-base tracking-[0.01em] font-light italic mb-0">
							Focus: {focus}
						</P>
					</div>
				)}
			</div>

			{/* Separator */}
			{!isLast && (
				<div className="mt-12 mb-12 xxxs:mt-10 xxxs:mb-10 xxs:mt-11 xxs:mb-11 xs:mt-12 xs:mb-12 border-b border-[var(--base-3)]"></div>
			)}
		</article>
	);
}

interface CertificateItemProps {
	title?: string;
	institution?: string;
	duration?: string;
	location?: string;
	certificateUrl?: string;
	isLast?: boolean;
}

function CertificateItem({
	title,
	institution,
	duration,
	location,
	certificateUrl,
	isLast = false,
}: CertificateItemProps) {
	return (
		<article className="relative group">
			{/* Timeline dot */}
			<div className="absolute left-0 top-6 w-2 h-2 bg-[var(--accent-8)] rounded-full border-2 border-[var(--base-2)] hidden sm:block xxxs:w-1.5 xxxs:h-1.5 xxxs:top-5 xxs:w-2 xxs:h-2 xxs:top-6 transition-all duration-300 group-hover:bg-[var(--accent-9)] group-hover:scale-125"></div>

			{/* Main content */}
			<div className="pl-0 sm:pl-12 xxxs:pl-0 xxs:pl-8 xs:pl-12">
				{/* Header section */}
				<header className="mb-6 xxxs:mb-4 xxs:mb-5 xs:mb-6">
					<div className="flex flex-col xxxs:gap-1 xxs:gap-1.5 xs:gap-2">
						<H3 className="mb-0 text-[var(--base-11)]">{title}</H3>
						<H4 className="mb-0">{institution}</H4>
						<div className="flex flex-col xxxs:gap-0.5 xxs:gap-1 xs:gap-1 mt-1">
							<H5 className="mb-0 pl-0 border-l-0 uppercase tracking-[0.1em] text-[var(--base-7)] text-xs xxxs:text-xs xxs:text-sm">
								{duration}
							</H5>
							{location && (
								<H6 className="mb-0 text-[var(--base-6)] text-xs xxxs:text-xs xxs:text-sm tracking-wide">
									{location}
								</H6>
							)}
						</div>
					</div>
				</header>

				{/* Certificate link */}
				{certificateUrl && (
					<div className="border-l-2 border-[var(--accent-5)] pl-6 xxxs:pl-4 xxs:pl-5 xs:pl-6">
						<a
							href={certificateUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-4 py-2 text-xs xxxs:text-xs xxs:text-sm xs:text-sm font-medium tracking-wide uppercase bg-[var(--base-3)] text-[var(--base-11)] border border-[var(--base-5)] hover:bg-[var(--accent-3)] hover:border-[var(--accent-6)] hover:text-[var(--accent-11)] transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--accent-8)] focus:ring-offset-2 focus:ring-offset-[var(--base-1)]"
						>
							View Certificate
							<svg
								className="ml-2 w-3 h-3 xxxs:w-3 xxxs:h-3 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</div>
				)}
			</div>

			{/* Separator */}
			{!isLast && (
				<div className="mt-12 mb-12 xxxs:mt-10 xxxs:mb-10 xxs:mt-11 xxs:mb-11 xs:mt-12 xs:mb-12 border-b border-[var(--base-3)]"></div>
			)}
		</article>
	);
}

function AwardsSection() {
	return (
		<Section className="bg-[var(--base-1)] border-t border-[var(--base-4)]">
			<Container>
				<div className="max-w-4xl mx-auto">
					{/* Section header */}
					<div className="mb-16 xxxs:mb-12 xxs:mb-14 xs:mb-16">
						<H2 className="relative">
							Awards
							<div className="absolute -bottom-2 left-0 w-12 h-[1px] bg-[var(--accent-8)] xxxs:w-8 xxs:w-10 xs:w-12"></div>
						</H2>
					</div>

					{/* Awards timeline */}
					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-4 top-0 bottom-0 w-[1px] bg-[var(--base-4)] xxxs:left-3 xxs:left-4 hidden sm:block"></div>

						<AwardItem
							award="1st Place"
							organization="HackDFW"
							duration="January 2019"
							location="Dallas, TX"
							description="Prevented health code violations in restaurants."
						/>

						<AwardItem
							award="2nd Place"
							organization="Startup Weekend"
							duration="February 2019"
							location="Fort Worth, TX"
							description="Developed tech solutions company for restaurants."
						/>

						<AwardItem
							award="Best Workplace Solution"
							organization="Brother Hackathon"
							duration="March 2019"
							location="Dallas, TX"
							description="Simplified food labeling task for kitchen staff."
							isLast={true}
						/>
					</div>
				</div>
			</Container>
		</Section>
	);
}

interface AwardItemProps {
	award?: string;
	organization?: string;
	duration?: string;
	location?: string;
	description?: string;
	isLast?: boolean;
}

function AwardItem({
	award,
	organization,
	duration,
	location,
	description,
	isLast = false,
}: AwardItemProps) {
	return (
		<article className="relative group">
			{/* Timeline dot - special styling for awards */}
			<div className="absolute left-0 top-6 w-2 h-2 bg-gradient-to-br from-[var(--accent-9)] to-[var(--accent-7)] rounded-full border-2 border-[var(--base-1)] shadow-sm hidden sm:block xxxs:w-1.5 xxxs:h-1.5 xxxs:top-5 xxs:w-2 xxs:h-2 xxs:top-6 transition-all duration-300 group-hover:scale-125 group-hover:shadow-md"></div>

			{/* Main content */}
			<div className="pl-0 sm:pl-12 xxxs:pl-0 xxs:pl-8 xs:pl-12">
				{/* Header section */}
				<header className="mb-6 xxxs:mb-4 xxs:mb-5 xs:mb-6">
					<div className="flex flex-col xxxs:gap-1 xxs:gap-1.5 xs:gap-2">
						{/* Award title with special styling */}
						<H3 className="mb-0 text-[var(--accent-11)] font-medium flex items-center">
							{award}
							{/* Award icon */}
							<svg
								className="ml-2 w-4 h-4 xxxs:w-3 xxxs:h-3 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 text-[var(--accent-9)] opacity-75"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
						</H3>
						<H4 className="mb-0 text-[var(--base-10)]">{organization}</H4>
						<div className="flex flex-col xxxs:gap-0.5 xxs:gap-1 xs:gap-1 mt-1">
							<H5 className="mb-0 pl-0 border-l-0 uppercase tracking-[0.1em] text-[var(--base-7)] text-xs xxxs:text-xs xxs:text-sm">
								{duration}
							</H5>
							{location && (
								<H6 className="mb-0 text-[var(--base-6)] text-xs xxxs:text-xs xxs:text-sm tracking-wide">
									{location}
								</H6>
							)}
						</div>
					</div>
				</header>

				{/* Description */}
				{description && (
					<div className="border-l-2 border-[var(--accent-6)] pl-6 xxxs:pl-4 xxs:pl-5 xs:pl-6 bg-gradient-to-r from-[var(--accent-2)] to-transparent p-4 xxxs:p-3 xxs:p-3.5 xs:p-4 rounded-r-sm">
						<P className="">{description}</P>
					</div>
				)}
			</div>

			{/* Elegant separator */}
			{!isLast && (
				<div className="mt-12 mb-12 xxxs:mt-10 xxxs:mb-10 xxs:mt-11 xxs:mb-11 xs:mt-12 xs:mb-12">
					<div className="flex items-center justify-center">
						<div className="flex-grow border-b border-[var(--base-3)]"></div>
						<div className="px-4 xxxs:px-3 xxs:px-3.5 xs:px-4">
							<div className="w-1 h-1 bg-[var(--accent-6)] rounded-full"></div>
						</div>
						<div className="flex-grow border-b border-[var(--base-3)]"></div>
					</div>
				</div>
			)}
		</article>
	);
}
