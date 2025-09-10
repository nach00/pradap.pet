import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import { TagBox } from "@/components/ProjectBadges";
import { DataPair } from "@/components/DataPair";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProjectHeroContent from "@/app/work/ProjectHeroContent";
import { Button } from "@/components/ui/button";

const projectDetails = {
	id: "03",
	year: "2021",
	status: "In Progress",
	category: "Social Media",
	title: "Scoutify",
	lede: "A social media platform, similar to LinkedIn, but specifically for baseball athletes",
	description:
		"Scoutify is a talent scouting portal for baseball players. The platform connects athletes, scouts, and organizations in a centralized hub for showcasing skills and finding talent.",
	client: "Scoutify",
	duration: "6 months",
	role: "UI/UX Designer",
	team: "Product",
	services: ["User Research", "UX/UI Design", "Prototyping"],
	technologies: ["Adobe XD", "Figma"],
	liveUrl: "",
	sourceUrl: "",
	headerImage: "/images/project-scoutify.png",

	darkHeaderImage: "/images/project-scoutify-dark.png",
	agency: "None",
	duty: "Product Designer",
	industry: "Sports Networking",

	logo: "/images/logos/scoutify-black.svg",
	logoDark: "/images/logos/scoutify-white.svg",
};

export function getProjectDetails() {
	return projectDetails;
}

export default function Scoutify() {
	return (
		<div className="">
			<HeroSection />
			<DetailsSection />
			<OverviewSection />
			<UserTypesSection />
			<ResearchSection />
			<CompetitiveAnalysisSection />
			<ProblemDefinitionSection />
			<UserFlowsSection />
			<WireframingSection />
			<PrototypingSection />
			<LandingPageSection />
		</div>
	);
}

function HeroSection() {
	return (
		<Section>
			<Container>
				<ProjectHeroContent {...projectDetails} />
			</Container>
		</Section>
	);
}

function DetailsSection() {
	return (
		<Section>
			<Container className="flex flex-col">
				<h2>Details</h2>

				<div className="grid grid-cols-2">
					<div className="grid grid-cols-2">
						<DataPair label="Client">{projectDetails.client}</DataPair>
						<DataPair label="Duration">{projectDetails.duration}</DataPair>
						<DataPair label="Role">{projectDetails.role}</DataPair>
						<DataPair label="Team">{projectDetails.team}</DataPair>
					</div>

					<div className="grid grid-rows-2">
						<div className="flex flex-col">
							<DataPair label="Skills">
								{projectDetails.services &&
									projectDetails.services.length > 0 && (
										<div className="flex flex-wrap gap-2">
											{projectDetails.services.map((service, index) => (
												<TagBox key={index}>{service}</TagBox>
											))}
										</div>
									)}
							</DataPair>
						</div>

						<div className="flex flex-col">
							<DataPair label="Technologies">
								{projectDetails.technologies &&
									projectDetails.technologies.length > 0 && (
										<div className="flex flex-wrap gap-2">
											{projectDetails.technologies.map((technology, index) => (
												<TagBox key={index}>{technology}</TagBox>
											))}
										</div>
									)}
							</DataPair>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function OverviewSection() {
	return (
		<Section>
			<Container className="flex-row gap-12 flex">
				<div className="flex flex-col">
					<h2>Overview</h2>
					<div className="flex flex-col w-full items-center justify-center">
						<p>
							Scoutify is a social media platform, similar to LinkedIn, but
							specifically for baseball athletes. I joined Scoutify at the
							beginning of its life, filling the design role and working closely
							with both the owner and a project manager.
						</p>
						<p>
							At this phase of the project, Scoutify plans to only focus on
							providing solutions for the sport of baseball. The client stated
							that the main requirement is to be accessible for desktop and
							tablet only, with mobile design not required.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function UserTypesSection() {
	return (
		<Section>
			<Container>
				<h2>User Types</h2>
				<p>The main types of users for the platform include:</p>

				<div className="grid grid-cols-3 gap-6 mt-8">
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Baseball Players</h3>
						<p>Athletes of all ages (under 13 require a parent account)</p>
					</div>
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Talent Scouts</h3>
						<p>Agents looking for promising baseball talent</p>
					</div>
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Organizations</h3>
						<p>Baseball teams and organizations seeking players</p>
					</div>
				</div>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-tablet-cover-white.png"
					description="Scoutify tablet interface overview"
				/>
			</Container>
		</Section>
	);
}

function ResearchSection() {
	return (
		<Section>
			<Container>
				<h2>Research Process</h2>
				<p>
					My work at Scoutify encompassed planning, conducting, and analyzing
					user research. Due to timeline constraints, I focused on stakeholder
					interviews and competitive analysis to establish a foundation.
				</p>

				<div className="p-4 bg-[var(--base-3)] rounded-lg mt-6">
					<h3>Stakeholder Interviews</h3>
					<p>Key questions explored during client discussions:</p>
					<ul>
						<li>What are the basics of the business?</li>
						<li>
							What's the problem that needs a solution? What are their pain
							points?
						</li>
						<li>What are some big trends in your industry?</li>
						<li>
							If time and money were not an object, what would the perfect
							solution be?
						</li>
						<li>What's your timeline?</li>
					</ul>
				</div>
			</Container>
		</Section>
	);
}

function CompetitiveAnalysisSection() {
	return (
		<Section>
			<Container>
				<h2>Competitive Analysis</h2>
				<p>
					I researched how other brands display player statistics and organize
					data. I also drew inspiration from baseball cards and their nostalgic
					feel when displaying player stats within a small frame.
				</p>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-competitive-analysis.png"
					description="Competitive analysis of existing baseball platforms"
				/>
			</Container>
		</Section>
	);
}

function ProblemDefinitionSection() {
	return (
		<Section>
			<Container>
				<h2>Problem Definition</h2>
				<div className="flex flex-col w-full items-center">
					<p>
						Currently, scouting for baseball is very basic with limited tools
						available. There isn't a platform for players to showcase their
						skills to the outside world, and most data is heavily related to
						match performances.
					</p>
					<p>
						The sports industry has a very lucrative market, as multi-million
						dollars can be paid to acquire players for a team. Right now, scouts
						need to be physically present at games to track performance.
					</p>
					<p>
						In the future, Scoutify plans to implement AI and machine learning
						to generate scores to help talent scouting agents find the best
						athletes around the world.
					</p>
				</div>
			</Container>
		</Section>
	);
}

function UserFlowsSection() {
	return (
		<Section>
			<Container>
				<h2>User Flows & Information Architecture</h2>
				<p>
					After gaining insights from client discussions, I created user flows
					to strategize the steps needed to move forward. This process revealed
					additional user types not previously discussed.
				</p>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-user-flow-1.png"
					description="User flow for website navigation and account creation"
				/>

				<p className="mt-8">
					This diagram shows how the platform should behave based on the type of
					user that logs in, including the transition from Youth Athlete to
					Adult Athlete accounts.
				</p>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-user-flow-2.png"
					description="User flow for different account types and transitions"
				/>

				<p className="mt-8">
					The signup flow shows navigation for each specific user type and
					handles age verification for youth athletes.
				</p>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-user-flow-3.png"
					description="New user signup flow with age verification"
				/>
			</Container>
		</Section>
	);
}

function WireframingSection() {
	return (
		<Section>
			<Container>
				<h2>Wireframes & Prototypes</h2>
				<p>
					Once user flows were established and confirmed by the client, I
					created low fidelity wireframes as initial concepts for iteration.
				</p>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-wireframe-1.png"
					description="Initial wireframe concept - first draft"
				/>

				<div className="mt-8">
					<h3>Reusable Components</h3>
					<p>
						I created master components that could be reused throughout the
						design to maintain consistency and allow for efficient updates.
					</p>

					<ScreenshotPreview
						imageSrc="/images/scoutify/scoutify-wireframe-2.png"
						description="Reusable component system"
					/>
				</div>

				<div className="mt-8">
					<h3>Athlete Profile Design</h3>
					<p>
						The main concept features standardized information in the top half,
						with modular content sections below.
					</p>

					<ScreenshotPreview
						imageSrc="/images/scoutify/scoutify-wireframe-3.png"
						description="Refined athlete profile wireframes"
					/>

					<ScreenshotPreview
						imageSrc="/images/scoutify/scoutify-wireframe-4.png"
						description="Additional wireframe screens"
					/>
				</div>
			</Container>
		</Section>
	);
}

function PrototypingSection() {
	return (
		<Section>
			<Container>
				<h2>Interactive Prototyping</h2>
				<p>
					I added prototyping functionality to allow for clickthrough
					demonstrations of the user experience.
				</p>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-prototype-1.png"
					description="Interactive prototype with clickthrough functionality"
				/>
			</Container>
		</Section>
	);
}

function LandingPageSection() {
	return (
		<Section>
			<Container>
				<h2>Landing Page Design</h2>
				<p>
					The homepage serves as the entry point for all users to learn about
					the company or log in. The functional prototype includes quick
					navigation options for demo purposes.
				</p>

				<ScreenshotPreview
					imageSrc="/images/scoutify/scoutify-landing-page.png"
					description="Scoutify homepage with account creation flow"
				/>
			</Container>
		</Section>
	);
}
