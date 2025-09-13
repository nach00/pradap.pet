import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import { TagBox } from "@/components/ProjectBadges";
import { DataPair } from "@/components/DataPair";
import StatStack from "@/components/StatStack";
import ApideasMarquee from "./ApideasMarquee";
import Browser from "./Browser";
import Deck from "./Deck";
import ProjectHeroContent from "@/app/work/ProjectHeroContent";
import { ProjectDetails } from "@/types/projectDetails";

import {
	P,
	UL,
	Lede,
	LI,
	Small,
	Eyebrow,
	Caption,
	Blockquote,
	Strong,
} from "@/components/typography/TextElements";

import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const projectDetails: ProjectDetails = {
	id: "01",
	year: "2025",
	status: "Live",
	category: "Capstone",
	title: "APIdeas",
	lede: "Generate creative app ideas by combining APIs in a Pokemon-style card game.",
	description:
		"An API combination card game. Users spend coins to generate 'cards' that represent creative app ideas combining exactly 2 APIs, presented in a Pokemon-style trading card format.",
	client: "Altcademy",
	duration: "2 weeks",
	role: "Full Stack Developer",
	team: "Solo",
	services: ["UX/UI Design", "Front End", "Back End", "Deployment", "Database"],
	technologies: [
		"React",
		"TypeScript",
		"Heroku",
		"PostGres",
		"Ruby on Rails",
		"Claude Code",
		"Stripe API",
	],
	liveUrl: "https://apideas.fun",
	sourceUrl: "https://github.com/nach00",
	headerImage: "/images/project-apideas.png",
	darkHeaderImage: "/images/project-apideas-dark.png",
	agency: "None",
	duty: "Product Developer",

	industry: "Startup: Gaming",
	icon: "/images/logos/apideas-white.svg",
	logo: "/images/logos/apideas-white.svg",
	logoDark: "/images/logos/apideas-black.svg",
} as const;

export function getProjectDetails() {
	return projectDetails;
}

export default function APideas() {
	return (
		<div className="pt-50">
			<HeroSection />
			<DetailsSection />
			<OverviewSection />
			{/* <DeckSection /> */}
			<ProcessSection />
			<LoomSection />
			<ResultsAndImpactSection />
			<LessonsLearnedSection />
			<NextStepsSection />
			<PreviewSection />
			{/* <EndSection /> */}
			<NextProjectSection />
		</div>
	);
}

function HeroSection() {
	return (
		<>
			<Section>
				<Container className="flex flex-col-reverse md:flex-row gap-12">
					<ProjectHeroContent {...projectDetails} />
					<ApideasMarquee />
					{/* <Apideas3dMarquee /> */}
				</Container>
			</Section>
		</>
	);
}

function DetailsSection() {
	return (
		<>
			<Section>
				<Container className="flex flex-col">
					<H2>Details</H2>

					<div className="flex flex-col gap-[2em]">
						<div
							className={cn(
								"flex flex-col gap-[2em]",
								"lg:grid lg:grid-cols-2",
							)}
						>
							<DataPair label="Organization">{projectDetails.client}</DataPair>
							<DataPair label="Duration">{projectDetails.duration}</DataPair>
							<DataPair label="Role">{projectDetails.role}</DataPair>
							<DataPair label="Team">{projectDetails.team}</DataPair>
						</div>

						<div
							className={cn(
								"flex flex-col gap-[2em]",
								"lg:grid lg:grid-cols-2",
							)}
						>
							<DataPair
								label="Skills"
								className={cn("flex-col min-w-full  flex w-full gap-[.5em]")}
							>
								{projectDetails.services?.length > 0 && (
									<div className="flex flex-wrap w-full gap-2 ">
										{projectDetails.services.map((service, index) => (
											<TagBox key={index}>{service}</TagBox>
										))}
									</div>
								)}
							</DataPair>

							<DataPair
								label="Technologies"
								className={cn("flex-col min-w-full  flex w-full gap-[.5em]")}
							>
								{projectDetails.technologies?.length > 0 && (
									<div className="flex flex-wrap gap-2">
										{projectDetails.technologies.map((tech, i) => (
											<TagBox key={i}>{tech}</TagBox>
										))}
									</div>
								)}
							</DataPair>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
// function DetailsSection() {
// 	return (
// 		<>
// 			<Section>
// 				<Container className="flex flex-col">
// 					<h2>Details</h2>
//
// 					<div className="grid grid-cols-2">
// 						<div className="grid grid-cols-2">
// 							<DataPair label="Client">{projectDetails.client}</DataPair>
// 							<DataPair label="Duration">{projectDetails.duration}</DataPair>
// 							<DataPair label="Role">{projectDetails.role}</DataPair>
// 							<DataPair label="Team">{projectDetails.team}</DataPair>
// 						</div>
//
// 						<div className="grid grid-rows-2">
// 							<div className="flex flex-col">
// 								<DataPair label="Skills">
// 									{projectDetails.services &&
// 										projectDetails.services.length > 0 && (
// 											<div className="flex flex-wrap gap-2">
// 												{projectDetails.services.map((service, index) => (
// 													<TagBox key={index}>{service}</TagBox>
// 												))}
// 											</div>
// 										)}
// 								</DataPair>
// 							</div>
//
// 							<div className="flex flex-col">
// 								<DataPair label="Technologies">
// 									{projectDetails.technologies &&
// 										projectDetails.technologies.length > 0 && (
// 											<div className="flex flex-wrap gap-2">
// 												{projectDetails.technologies.map(
// 													(technology, index) => (
// 														<TagBox key={index}>{technology}</TagBox>
// 													),
// 												)}
// 											</div>
// 										)}
// 								</DataPair>
// 							</div>
// 						</div>
// 					</div>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

function OverviewSection() {
	return (
		<>
			<Section>
				<Container>
					{/* <div className="mt-50 p-20 bg-secondary w-screen"> */}
					<H2>Overview</H2>
					<div className="flex flex-col gap-20 md:flex-row">
						<div className="flex flex-col w-full">
							<H4 className={cn("text-[var(--base-9)]")}>Challenge</H4>
							<P>
								For my capstone project at Altcademy (Coding Bootcamp, Full
								Stack Web Development), I was having trouble coming up with a
								project idea. I had the idea to pair together some free APIs in
								a unique way, but did not want to do this manually.
							</P>
						</div>
						<div className="flex flex-col w-full">
							<H4 className={cn("text-[var(--base-9)]")}>Solution</H4>
							<P>
								The results from my prototype were very interesting! After
								seeing a few generated app ideas, I thought that a completed
								version of this prototype would be a better idea for my capstone
								project.
							</P>
						</div>
						{/* <div className="flex flex-col w-full"> */}
						{/* 	<h3>Outcome</h3> */}
						{/* 	<p> */}
						{/* 		Exercitation esse minim quis ut in minim excepteur laboris */}
						{/* 		consequat ea veniam dolor aliquip excepteur. Nulla labore */}
						{/* 		deserunt voluptate labore qui adipisicing nulla dolor qui dolore */}
						{/* 		incididunt anim. */}
						{/* 	</p> */}
						{/* </div> */}
					</div>
					{/* </div> */}
				</Container>
			</Section>
		</>
	);
}

function LoomSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Video Preview</H2>
					<div
						style={{
							position: "relative",
							paddingBottom: "46.086956521739125%",
							height: 0,
						}}
					>
						<iframe
							src="https://www.loom.com/embed/198da3badc6547a8a52136c8993ec8dd?sid=9eb9c8bb-2431-4121-a027-2a42bf7b78c8"
							frameBorder="0"
							webkitAllowFullScreen
							mozAllowFullScreen
							allowFullScreen
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
							}}
						/>
					</div>
				</Container>
			</Section>
		</>
	);
}

function DeckSection() {
	return (
		<>
			<Section>
				<Container>
					<h2>Deck</h2>
					<Deck />
				</Container>
			</Section>
		</>
	);
}

function ProcessSection() {
	const steps = [
		{
			title: "Course Completion & Project Inception",
			description:
				"After completing all courses from Altcademy, I was tasked with building a final capstone project, applying all the skills learned from the full-stack bootcamp classes.",
		},
		{
			title: "Initial Prototyping & Brainstorming",
			description:
				"I built a prototype of an app idea generator that randomly paired 2 APIs from a curated list. An AI tool, Claude, would then generate an app idea, a problem statement, a proposed solution, an implementation method, market potential, and an overall score.",
		},
		{
			title: "Pivoting the Project Idea",
			description:
				"After running the prototype a few times, I realized that creating a completed, polished version of the generator itself would be a more compelling and suitable capstone project.",
		},
		{
			title: "Planning & Feature Definition",
			description:
				"I began planning the project requirements for the full application, defining the necessary pages, the details for each idea card, and the overall scope of the project.",
		},
		{
			title: "Design & User Experience",
			description:
				"Developed wireframes and mockups to visualize the application's structure and create an intuitive user experience for the final design.",
		},
		{
			title: "Development & Implementation",
			description:
				"Wrote the code, integrated the features, and built the core functionality of the application, transforming the initial prototype into a fully-featured project.",
		},
		{
			title: "Testing & Deployment",
			description:
				"Performed quality assurance to fix bugs, optimized performance, and launched the project in a live environment at apideas.fun.",
		},
		{
			title: "Final Submission & Outcome",
			description:
				"I submitted the completed project as my final capstone. The project was successful, and I passed the class, effectively demonstrating the skills acquired during the bootcamp.",
		},
	];
	return (
		<>
			<Section>
				<Container className="flex flex-row gap-12" variant="narrow">
					<div className="flex w-full flex-col">
						<H2>Process</H2>

						<div className="flex w-full">
							<div className="relative ml-6">
								<div className="absolute left-0 inset-y-0 border-l-2" />

								{steps.map(({ title, description }, index) => (
									<div key={index} className="relative pl-10 pb-10 last:pb-0">
										<div className="absolute left-px -translate-x-1/2 bg-[var(--accent-3)] text-[var(--accent-11)] grid place-content-center h-9 w-9 border border-[var(--accent-6)] rounded-full font-bold">
											{index + 1}
										</div>

										<div className="pt-1 space-y-2">
											<H4 className="text-[var(--base-9)]">{title}</H4>
											<P className="max-w-[60ch]">{description}</P>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* <div className="bg-[var(--base-3)] grid place-content-center min-h-full w-full"> */}
					{/* 	x */}
					{/* </div> */}
				</Container>
			</Section>
		</>
	);
}

function PreviewSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Screenshots</H2>

					<div className="grid grid-cols-2 gap-6">
						<ScreenshotPreview
							imageSrc="/images/apideas/apideas1.jpg"
							description="Landing page"
						/>
						<ScreenshotPreview
							imageSrc="/images/apideas/apideas2.jpg"
							description="User dashboard"
						/>
						<ScreenshotPreview
							imageSrc="/images/apideas/apideas3.jpg"
							description="Success: Card generated"
						/>
						<ScreenshotPreview
							imageSrc="/images/apideas/apideas4.jpg"
							description="My collection section"
						/>
						<ScreenshotPreview
							imageSrc="/images/apideas/apideas5.jpg"
							description="Settings page"
						/>
						<ScreenshotPreview
							imageSrc="/images/apideas/apideas7.jpg"
							description="Purchase history"
						/>
						<ScreenshotPreview
							imageSrc="/images/apideas/apideas6.jpg"
							description="Coin purchase screen"
						/>
					</div>
				</Container>
			</Section>
		</>
	);
}

function ResultsAndImpactSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Results & Impact</H2>

					<div className="flex flex-col gap-20 md:flex-row">
						<StatStack number={190} label="card combinations" />
						<StatStack number={20} label="selectable APIs" />
						<StatStack number={4} label="version attempts" />
					</div>
				</Container>
			</Section>
		</>
	);
}

function LessonsLearnedSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Lessons Learned</H2>
					<div className="flex flex-col gap-30 lg:flex-row">
						<div className="flex flex-col w-full">
							<H4 className="">What Worked Well</H4>
							<UL>
								<LI>
									<Strong>Rapid Prototyping: </Strong> The initial prototype was
									essential for validating the concept and inspiring the final
									project direction.
								</LI>

								{/* <li> */}
								{/* 	<Strong>Rapid Prototyping:</Strong> Using Claude Code AI to */}
								{/* 	build this app definitely helped, although I'm not sure if it */}
								{/* 	made the process any faster, based on the final result. I had */}
								{/* 	to restart the project a few times because for various */}
								{/* 	reasons, including Claude breaking some things, or it would go */}
								{/* 	off in the wrong direction. The initial prototype was */}
								{/* 	essential for validating the concept and inspiring the final */}
								{/* 	project direction. */}
								{/* </li> */}
								{/* <li> */}
								{/* 	<Strong>Pivoting Effectively:</Strong> Shifting focus from */}
								{/* 	using the generator to building the generator itself resulted */}
								{/* 	in a stronger, more focused project. */}
								{/* </li> */}
								<LI>
									<Strong>AI-Powered Content: </Strong> Using AI to generate
									ideas automated a core feature, allowing focus to shift to
									development and design.
								</LI>
								<LI>
									<Strong>"Gacha" Game Mechanics: </Strong> Applying game
									concepts from casinos, slot machines, and gachapon style games
									added to the fun of generating new cards each time.
								</LI>
								<LI>
									<Strong>Easy Login: </Strong> Users commented that enabling
									demo account access was a nice touch, so that users who wanted
									to try did not need to make a new accound
								</LI>
							</UL>
						</div>
						<div className="flex flex-col w-full">
							<H4 className="">Areas for Improvement</H4>
							<UL>
								<LI>
									<Strong>Larger API List: </Strong>
									The static API list could be replaced with a dynamic database
									or user submissions to increase idea variety.
								</LI>
								<LI>
									<Strong>Dynamically Generated Content: </Strong> The card
									content and details are pre-generated in a json file.
									Connecting the app to an LLM to generate card data on the fly
									would give each card generation a more unique result.
								</LI>

								<LI>
									<Strong>Finalize Planning Stage: </Strong> Using Claude Code
									to help build this project, I had to start over a few times
									because I was too excited to get started with the coding
									process and see immediate results. When starting a new
									project, I learned that it's more important to spend the
									maximum amount of time planning to address any edge cases or
									issues that need to be considered.
								</LI>
							</UL>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

function NextStepsSection() {
	return (
		<>
			<Section>
				<Container variant="narrow">
					<H2>Next Steps</H2>
					<P>
						I've already started working and planning on version 2 of APIdeas.
						The main upgrades include:
					</P>

					<UL>
						<LI>
							<Strong>API List Management: </Strong>
							New admin dashboard allows for bulk upload of API list, along with
							deleting and updating individual APIs.
						</LI>
						<LI>
							<Strong>Gemini API Implementation: </Strong>
							Each newly generated card will be unique to the time of generation
							and its user. Generating a card will send a request to Gemini API
							to generate card data automatically.
						</LI>

						<LI>
							<Strong>Up to 8 API Combinations: </Strong> Instead of only 2
							APIs, card combinations can have up to 8 APIs.
						</LI>
					</UL>
				</Container>
			</Section>
		</>
	);
}

function EndSection() {
	return (
		<>
			<Section>
				<Container
					className={cn(
						"flex flex-col md:flex-row items-center justify-center gap-20 text-center",
					)}
					variant="narrow"
				>
					<div className={cn("flex flex-col")}>
						<H2>Give it a shot!</H2>
						<Button>View live demo</Button>
					</div>
					<div className={cn("flex flex-col")}>
						<H2>View the code!</H2>
						<Button>Github Repo</Button>
					</div>
				</Container>
			</Section>
		</>
	);
}
function NextProjectSection() {
	return (
		<>
			<Section>
				<Container
					className={cn(
						"flex flex-col md:flex-row items-center justify-center gap-20 text-center",
					)}
					variant="narrow"
				>
					<div className={cn("flex flex-col")}>
						<H2>See another project</H2>
						<div
							className={cn("flex flex-col gap-20 lg:flex-row justify-center")}
						>
							<Button variant="outline" className={cn("")}>
								<Link href="/work/zconsole">zConsole</Link>
							</Button>
							<Button variant="outline" className={cn("")}>
								<Link href="/work/scoutify">Scoutify</Link>
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
