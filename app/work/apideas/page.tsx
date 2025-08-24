import ApideasProcessTimeline from "./ApideasProcessTimeline";
import Container from "@/components/layout/Container";
import StatStack from "../StatStack";
import ApideasMarquee from "./ApideasMarquee";
import { Browser } from "./Browser";
import Apideas3dMarquee from "./Apideas3dMarquee";
import Section from "@/components/layout/Section";
import Deck from "./Deck";
import ProjectHeroContent from "@/components/work/ProjectHeroContent";
import { ProjectDetails } from "@/types/projectDetails";
// export type ProjectDetails = {
// 	tagId: string;
// 	tagYear: string;
// 	tagStatus: string;
// 	tagCategory: string;
// 	title: string;
// 	lede: string;
// 	description: string;
// 	client: string;
// 	duration: string;
// 	role: string;
// 	team: string;
// 	technologies: string[];
// 	liveUrl: string;
// 	sourceUrl: string;
// };
export const projectDetails: ProjectDetails = {
	tagId: "01",
	tagYear: "2025",
	tagStatus: "Live",
	tagCategory: "Capstone Project (Full Stack)",
	title: "APIdeas",
	lede: "Generate creative app ideas by combining APIs in a Pokemon-style card game.",
	description:
		"An API combination card game. Users spend coins to generate 'cards' that represent creative app ideas combining exactly 2 APIs, presented in a Pokemon-style trading card format.",
	client: "Altcademy Bootcamp",
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
		"Gemini",
		"Neovim",
	],
	liveUrl: "https://apideas.fun",
	sourceUrl: "https://github.com/nach00",
} as const;

export default function APideas() {
	return (
		<>
			<HeroSection />
			<OverviewSection />
			<DeckSection />
			<ProcessSection />
			<LoomSection />
			<ResultsAndImpactSection />
			<LessonsLearnedSection />
			<NextStepsSection />
			<PreviewSection />
		</>
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

function OverviewSection() {
	return (
		<>
			<Section>
				<Container>
					{/* <div className="mt-50 p-20 bg-secondary w-screen"> */}
					<h2>Project Overview</h2>
					<div className="flex flex-row gap-12">
						<div className="flex flex-col w-full">
							<h3>Challenge</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
						<div className="flex flex-col w-full">
							<h3>Solution</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
						<div className="flex flex-col w-full">
							<h3>Outcome</h3>
							<p>
								Exercitation esse minim quis ut in minim excepteur laboris
								consequat ea veniam dolor aliquip excepteur. Nulla labore
								deserunt voluptate labore qui adipisicing nulla dolor qui dolore
								incididunt anim.
							</p>
						</div>
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
					<h2>Video Preview</h2>
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
	return (
		<>
			<Section>
				<Container className="flex flex-row gap-12">
					<div className="flex w-full flex-col">
						<h2>Process</h2>
						{/* 	<div className="flex flex-row gap-12"> */}
						{/* 		<div className="bg-secondary-foreground text-secondary rounded-full p-4 grid place-content-center h-[40px] w-[40px]"> */}
						{/* 			1 */}
						{/* 		</div> */}
						{/* 		<div className="flex flex-col w-full"> */}
						{/* 			<h3>Research</h3> */}
						{/* 			<p> */}
						{/* 				Exercitation esse minim quis ut in minim excepteur laboris */}
						{/* 				consequat ea veniam dolor aliquip excepteur. Nulla labore */}
						{/* 				deserunt voluptate labore qui adipisicing nulla dolor qui */}
						{/* 				dolore incididunt anim. */}
						{/* 			</p> */}
						{/* 		</div> */}
						{/* 	</div> */}
						{/* 	<div className="flex flex-row gap-12"> */}
						{/* 		<div className="bg-secondary-foreground text-secondary rounded-full p-4 grid place-content-center h-[40px] w-[40px]"> */}
						{/* 			2 */}
						{/* 		</div> */}
						{/* 		<div className="flex flex-col w-full"> */}
						{/* 			<h3>Research</h3> */}
						{/* 			<p> */}
						{/* 				Exercitation esse minim quis ut in minim excepteur laboris */}
						{/* 				consequat ea veniam dolor aliquip excepteur. Nulla labore */}
						{/* 				deserunt voluptate labore qui adipisicing nulla dolor qui */}
						{/* 				dolore incididunt anim. */}
						{/* 			</p> */}
						{/* 		</div> */}
						{/* 	</div> */}
						{/* 	<div className="flex flex-row gap-12"> */}
						{/* 		<div className="bg-secondary-foreground text-secondary rounded-full p-4 grid place-content-center h-[40px] w-[40px]"> */}
						{/* 			3 */}
						{/* 		</div> */}
						{/* 		<div className="flex flex-col w-full"> */}
						{/* 			<h3>Research</h3> */}
						{/* 			<p> */}
						{/* 				Exercitation esse minim quis ut in minim excepteur laboris */}
						{/* 				consequat ea veniam dolor aliquip excepteur. Nulla labore */}
						{/* 				deserunt voluptate labore qui adipisicing nulla dolor qui */}
						{/* 				dolore incididunt anim. */}
						{/* 			</p> */}
						{/* 		</div> */}
						{/* 	</div> */}
						<ApideasProcessTimeline />
					</div>
					<div className="bg-[var(--base-3)] grid place-content-center min-h-full w-full">
						x
					</div>
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
					<h2>Screenshots</h2>
					<div className="flex flex-col gap-6">
						<Browser imageSrc="/images/apideas/apideas1.jpg" />
						<Browser imageSrc="/images/apideas/apideas2.jpg" />
						<Browser imageSrc="/images/apideas/apideas3.jpg" />
						<Browser imageSrc="/images/apideas/apideas4.jpg" />
						<Browser imageSrc="/images/apideas/apideas5.jpg" />
						<Browser imageSrc="/images/apideas/apideas6.jpg" />
						<Browser imageSrc="/images/apideas/apideas7.jpg" />
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
					<h2>Results & Impact</h2>

					<div className="flex flex-row gap-30">
						<StatStack number={12} label="projects" />
						<StatStack number={8} label="million users impacted" />
						<StatStack number={100} label="design patents" />
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
					<h2>Lessons Learned</h2>
					<div className="flex flex-row gap-30">
						<div className="flex flex-col w-full">
							<h3>What Worked Well</h3>
							<ul>
								<li>Lorm</li>
								<li>Lorm</li>
							</ul>
						</div>
						<div className="flex flex-col w-full">
							<h3>Areas for Improvement</h3>
							<ul>
								<li>Lorm</li>
								<li>Lorm</li>
							</ul>
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
				<Container>
					<h2>Next Steps</h2>
					<p>
						Eu commodo ex adipisicing deserunt ea fugiat id eu non sunt
						consectetur. Ut nulla exercitation veniam consectetur tempor nostrud
						amet nostrud proident quis minim anim sint eiusmod. Adipisicing sunt
						amet nostrud. Amet in veniam id consectetur cillum dolore Lorem
						pariatur laborum pariatur aliquip do magna elit.
					</p>
				</Container>
			</Section>
		</>
	);
}
