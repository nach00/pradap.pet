import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import { TagBox, Eyebrow } from "@/components/type";
import { DataPair } from "@/components/typography";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProjectHeroContent from "@/components/work/ProjectHeroContent";
import { Button } from "@/components/ui/button";

export const projectDetails = {
	tagId: "05",
	tagYear: "2018-19",
	tagStatus: "Complete",
	tagCategory: "B2B Security",
	title: "RFID Interlock",
	lede: "Provides a solution to companies using heavy machinery and equipment by preventing unauthorized users, tracking usage, and managing user access via its web console",
	description:
		"Initial admin controls and data sets were confusing and burdensome, lacking efficient ways to manage users or view equipment usage statistics. The interface needed a solution to prevent accidental user errors from untrained employees and enhance equipment protection for companies.",
	client: "RFID Interlock",
	duration: "1 month",
	role: "UX Researcher, UX/UI Designer & Project Manager",
	team: "Planet Nacho",
	services: ["UX Research", "UX/UI Design", "Project Management"],
	technologies: ["Adobe XD"],
	liveUrl: "",
	sourceUrl: "",
};

export default function RFIDInterlock() {
	return (
		<>
			<HeroSection />
			<DetailsSection />
			<TestimonialSection />
			<OverviewSection />
			<ProblemDefinitionSection />
			<SolutionSection />
			<ResultsSection />
		</>
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
						<DataPair label="Agency">{projectDetails.team}</DataPair>
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

function TestimonialSection() {
	return (
		<Section>
			<Container>
				<div className="p-6 bg-[var(--base-3)] rounded-lg">
					<blockquote className="text-lg italic">
						"Natcha's role as a UX/UI designer played an integral part of RFID
						Interlock's initial startup growth, as he vastly improved our
						dashboard and console experience. His designs and idea helped
						organize our data and allows our users to more easily navigate to
						the most useful pieces of information available. Before Natcha
						joined, a user might need to click into more than 5 or 6 layers of
						pages to find what they're looking for. Without any directives or
						requirements, Natcha presented his solution, which was quickly
						understood and accepted as the better option. He is very attentive
						to detail and thoughtful in his approach to designing optimal
						solutions, and was a great pleasure to work with. I would highly
						recommend Natcha for any UX/UI design position, as his ability to
						design within any requirements has always been easy to work with,
						and most importantly, gets the job done."
					</blockquote>
					<p className="font-bold mt-4">-Robert Davidson, Client</p>
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
							RFID Interlock provides a solution to companies using heavy
							machinery and equipment. Their product prevents unauthorized
							users, tracks usage, and manages user access via its web console.
						</p>
						<p>
							I collaborated with business stakeholders through planning calls,
							research, interviews, whiteboarding sessions, and stakeholder
							review meetings to redesign the entire user experience.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function ProblemDefinitionSection() {
	return (
		<Section>
			<Container>
				<h2>Problem & Pain Points</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="p-6 bg-[var(--base-3)] rounded-lg">
						<h3>Core Problem</h3>
						<p className="mt-4">
							Initial admin controls and data sets were confusing and
							burdensome, lacking efficient ways to manage users or view
							equipment usage statistics.
						</p>
					</div>

					<div className="p-6 bg-[var(--base-3)] rounded-lg">
						<h3>User Pain Points</h3>
						<ul className="mt-4 space-y-2">
							<li>
								• Users needed to click through 5-6 layers to find information
							</li>
							<li>
								• Interface allowed accidental errors from untrained employees
							</li>
							<li>• Sign-in screens appeared untrustworthy to clients</li>
							<li>• Equipment protection was insufficient</li>
						</ul>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function SolutionSection() {
	return (
		<Section>
			<Container>
				<h2>Solution & Approach</h2>
				<p>
					Create a new dashboard that addresses the issues with the original
					design, giving users access to equipment analytics and user management
					from a single screen with ease.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Dashboard Redesign</h3>
						<p className="mt-2">
							Consolidated multiple screens into a single, intuitive dashboard
							interface
						</p>
					</div>
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Information Architecture</h3>
						<p className="mt-2">
							Restructured navigation to reduce clicks and improve task
							completion
						</p>
					</div>
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Trust & Security</h3>
						<p className="mt-2">
							Enhanced sign-in and account creation screens to build user
							confidence
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function ResultsSection() {
	return (
		<Section>
			<Container>
				<h2>Business Impact & Results</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 bg-[var(--base-3)] rounded-lg text-center">
						<div className="text-3xl font-bold text-[var(--base-11)] mb-2">
							+10%
						</div>
						<h3>Sales Increase</h3>
						<p className="mt-2">
							Sales increased over 10% by the following quarter due to improved
							user experience
						</p>
					</div>

					<div className="p-6 bg-[var(--base-3)] rounded-lg text-center">
						<div className="text-3xl font-bold text-[var(--base-11)] mb-2">
							75s
						</div>
						<h3>Task Completion</h3>
						<p className="mt-2">
							Average task completion time reduced to 75 seconds
						</p>
					</div>

					<div className="p-6 bg-[var(--base-3)] rounded-lg text-center">
						<div className="text-3xl font-bold text-[var(--base-11)] mb-2">
							5-6→1
						</div>
						<h3>Navigation Layers</h3>
						<p className="mt-2">
							Reduced navigation from 5-6 layers to single-screen access
						</p>
					</div>
				</div>

				<div className="mt-12">
					<h3>Key Achievements</h3>
					<ul className="mt-4 space-y-2">
						<li>
							• Streamlined user experience by enhancing unappealing and
							difficult-to-navigate interface
						</li>
						<li>
							• Made it easier to close deals through improved trust and
							usability
						</li>
						<li>
							• Improved information architecture for easier tool and analytics
							navigation
						</li>
						<li>
							• Enhanced equipment protection through better user management
							controls
						</li>
					</ul>
				</div>
			</Container>
		</Section>
	);
}
