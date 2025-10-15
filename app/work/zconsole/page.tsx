import Link from "next/link";
import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import { TagBox } from "@/components/ProjectBadges";
import { DataPair } from "@/components/DataPair";
import ProjectHeroContent from "@/app/work/ProjectHeroContent";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	P,
	UL,
	Lede,
	LI,
	Small,
	Blockquote,
	Strong,
} from "@/components/typography/TextElements";

import { H2, H3 } from "@/components/typography/Headings";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const projectDetails = {
	id: "02",
	year: "2019",
	status: "Complete",
	category: "Cybersecurity",
	title: "zConsole",
	lede: "Administrative dashboard used by mobile app developers and cybersecurity teams of large enterprises",
	description:
		"During my time at Zimperium, I managed feature designs for 2 versions of this console, called V4 and V5. Below is a brief comparison between the two.",
	client: "Zimperium",
	duration: "2 years",
	role: "UI/UX Designer",
	team: "Product",
	services: ["UX/UI Design"],
	technologies: ["Adobe XD", "Figma"],
	companyUrl: "https://zimperium.com",
	headerImage: "/images/project-zconsole.png",
	darkHeaderImage: "/images/project-zconsole-dark.png",
	agency: "None",
	duty: "UI/UX Design",
	industry: "Cybersecurity",
	logo: "/images/logos/zimperium-white.svg",
	logoDark: "/images/logos/zimperium-white.svg",
	cardPreview: "/images/zconsole/zconsole-card-preview.png",
};

export function getProjectDetails() {
	return projectDetails;
}
export default function ZConsole() {
	return (
		<div className="pt-50">
			<HeroSection />
			<DetailsSection />
			<OverviewSection />
			<ProcessSection />
			<ProductComparisonSection />
			<FeatureDesignTasksSection />
			<WizardSection />
			<ReportsSection />
			<ReferencesSection />
			<NextProjectSection />
		</div>
	);
}

function HeroSection() {
	return (
		<>
			<Section>
				<Container className={cn("")} variant="narrow">
					<ProjectHeroContent {...projectDetails} />
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
				<Container className="flex-row gap-12 flex" variant="narrow">
					<div className="flex flex-col">
						<H2>Overview</H2>
						<div className="flex flex-col w-full items-center justify-center">
							<P className={cn("max-w-[60ch]")}>
								zConsole is an administrative dashboard used by mobile app
								developers and cybersecurity teams of large enterprises. During
								my time at Zimperium, I managed feature designs for 2 versions
								of this console, called V4 and V5. Below is a brief comparison
								between the two.
							</P>
							{/* <p> */}
							{/* 	The product and engineering team was divided into two teams, */}
							{/* 	one for each version. The reasoning behind this team and */}
							{/* 	project structure is because: */}
							{/* </p> */}
							{/* <ul> */}
							{/* 	<li> */}
							{/* 		<strong>Existing software:</strong> Most of the customers */}
							{/* 		used V4 because it had been around longer and they were used */}
							{/* 		to it. */}
							{/* 	</li> */}
							{/**/}
							{/* 	<li> */}
							{/* 		<strong>Parallel development process:</strong> The new V5 */}
							{/* 		version was still newly being developed; there were not as */}
							{/* 		many functions as V4. */}
							{/* 	</li> */}
							{/**/}
							{/* 	<li> */}
							{/* 		<strong>Scalability vs Features:</strong> The problem with */}
							{/* 		V4 is that it could not scale as much as V5. Having more */}
							{/* 		data in V4 would reduce performance, which is the reason for */}
							{/* 		the development of the newer version. */}
							{/* 	</li> */}
							{/* </ul> */}
							{/**/}
							{/* <p> */}
							{/* 	Our team tried as much as possible to reduce the amount of */}
							{/* 	rework that may be needed when building a new feature for both */}
							{/* 	consoles, but sometimes it couldn’t be avoided. Therefore, */}
							{/* 	some tasks required me to design vastly different user */}
							{/* 	interfaces. */}
							{/* </p> */}
							{/**/}
							{/* <p> */}
							{/* 	Since V4 had planned to eventually be deprecated, minimal work */}
							{/* 	was required for those associated tasks, meaning I was told to */}
							{/* 	just have the “get it done” mentality. With V5, I had more */}
							{/* 	design freedom to design things the right way. */}
							{/* </p> */}
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
function ProductComparisonSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Product Comparison</H2>

					<div className="flex flex-col lg:flex-row gap-8">
						<div className="p-4 bg-[var(--base-3)] rounded-md flex items-center flex-col justify-center">
							<H3>V4</H3>
							<div className="flex flex-col pb-8">
								<Small>Built with Angular.js</Small>
								<Small>More features</Small>
								<Small>Older and slower</Small>
							</div>

							<ScreenshotPreview
								imageSrc="/images/zconsole/console-01.png"
								description="Original v4 dashboard"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/devices-01.png"
								description="Original v4 devices page"
							/>
						</div>
						<div className="p-4 bg-[var(--base-3)] rounded-md flex items-center flex-col justify-center">
							<H3>V5</H3>

							<div className="flex flex-col pb-8">
								<Small>Built with React.js</Small>
								<Small>More scalability</Small>
								<Small>Newer and faster</Small>
							</div>
							<ScreenshotPreview
								imageSrc="/images/zconsole/console-02.png"
								description="Original v5 dashboard"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/devices-02.png"
								description="Original v5 devices page"
							/>
						</div>
					</div>

					<Container variant="narrow">
						<div className="flex flex-col w-full items-center max-w-[60ch]">
							<P className="mt-20">
								The product and engineering team was divided into two teams, one
								for each version. The reasoning behind this team and project
								structure is because:
							</P>
							<UL>
								<LI>
									<Strong>Existing software:</Strong> Most of the customers used
									V4 because it had been around longer and they were used to it.
								</LI>

								<LI>
									<Strong>Parallel development process:</Strong> The new V5
									version was still newly being developed; there were not as
									many functions as V4.
								</LI>

								<LI>
									<Strong>Scalability vs Features:</Strong> The problem with V4
									is that it could not scale as much as V5. Having more data in
									V4 would reduce performance, which is the reason for the
									development of the newer version.
								</LI>
							</UL>

							<P className={cn("mt-12")}>
								Our team tried as much as possible to reduce the amount of
								rework that may be needed when building a new feature for both
								consoles, but sometimes it couldn’t be avoided. Therefore, some
								tasks required me to design vastly different user interfaces.
							</P>

							<P>
								Since V4 had planned to eventually be deprecated, minimal work
								was required for those associated tasks, meaning I was told to
								just have the “get it done” mentality. With V5, I had more
								design freedom to design things the right way.
							</P>
						</div>
					</Container>
				</Container>
			</Section>
		</>
	);
}
function FeatureDesignTasksSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Feature Design Tasks</H2>
					<Lede>
						As customers demanded more features and project managed the team's
						approach, I was assigned to provide designs for new features that
						would be implented. Below are a few mocks for some of the features I
						designed.
					</Lede>

					<div className="p-4 bg-[var(--base-3)] rounded-lg mt-12">
						<H3>V4 Features</H3>

						<div className="grid grid-cols-2 gap-6">
							<ScreenshotPreview
								imageSrc="/images/zconsole/v4-1.png"
								description="New V4 Dashboard"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-14.png"
								description="Display the data associated with a compromised device"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-16.png"
								description="Filter the types of content browsed on the web, along with specified IP addresses"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-17.png"
								description="Manage allow/deny third-party apps, or 'Out-of-Compliance'"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-13.png"
								description="Create customized device group policies based on specific threats or actions"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-21.png"
								description="Choose the level of information that is being collected"
							/>
						</div>
					</div>
					<div className="p-4 bg-[var(--base-3)] rounded-lg mt-6">
						<H3>V5 Features</H3>
						<div className="grid grid-cols-2 gap-6">
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-18.png"
								description="New V5 Dashboard"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-11.png"
								description="Display data for devices at risk of outdated operating system versions"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-12.png"
								description="Edit authentication settings for single sign-on via web"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-09.png"
								description="Create new admin role and specify certain permissions"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-10.png"
								description="Manage user roles and actions for specific security permissions"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-07.png"
								description="Alert notification for successful edit of team members and permission"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-08.png"
								description="Rules process to create automated actions based on previous events"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-05.png"
								description="Manage Zimperium subscription settings for user accounts"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-06.png"
								description="Add or remove apps associated with teams"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-03.png"
								description="Modal dialog to mass invite users by uploading CSV file"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-04.png"
								description="Manage security metric and specify proximity and threat value"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-01.png"
								description="Code comparison viewer for mobile app security scan"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-02.png"
								description="Build compare feature to determine security differences when uploading an updated version of your app"
							/>
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-15.png"
								description="Manage QR codes provided for license activation of mobile app"
							/>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

function ProcessSection() {
	return (
		<>
			<Section>
				<Container variant="narrow">
					<H2>Process</H2>
					<P className={cn("max-w-[60ch]")}>
						Once I had established my general understanding of the company, its
						services, and the stakeholders involved, I ultimately decided that
						creating a design system would be vital to remaining consistent in
						all my designs. I designed Hyperion, which I describe as a big data
						design system. You can see more about my design process creating
						this system below.
					</P>
					<Button variant="disabled" className={cn("mt-12")}>
						View Design Process (coming soon)
					</Button>
				</Container>
			</Section>
		</>
	);
}
function WizardSection() {
	return (
		<>
			<Section>
				<Container>
					<Container variant="narrow">
						<H2>Step-by-step setup wizard</H2>
						<Lede>
							Feature mockup design for V5 dashboard, guiding the user on how to
							set up their organization's mobile data plan to the zConsole
							system.
						</Lede>
					</Container>
					<div className="flex flex-col w-full items-center mt-12 gap-4">
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-1.png"
							description="Step 1: Provide initial plan configuration"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-2.png"
							description="Step 2 (Part 1/3): Setup groups"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-3.png"
							description="Step 2 (Part 2/3): Add group details"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-4.png"
							description="Step 2 (Part 3/3): Example screen of completed group configuration"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-5.png"
							description="Step 3: Connect integrations with other third-party services"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-6.png"
							description="Step 4: Summary of connected integrations"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-7.png"
							description="Step 5: Setup complete confirmation screen"
						/>
					</div>
				</Container>
			</Section>
		</>
	);
}
function ReportsSection() {
	return (
		<>
			<Section>
				<Container>
					<Container variant="narrow">
						<H2>Security Analytics Reports</H2>
						<Lede>
							One section that fully utilized the Hyperion Design System was the
							security analytics reports that were generated when a user
							uploaded their mobile app to the zConsole. Below are a few
							examples of the reports that were generated.
						</Lede>
					</Container>
					<div className="flex flex-col w-full items-center mt-12">
						<ScreenshotPreview
							imageSrc="/images/zconsole/zscan-01.png"
							description="Example screen of app assessment results of findings"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/zscan-02.png"
							description="This screen shows how the user can manage each finding by configuring its severity rating"
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/zscan-03.png"
							description="Consolidated view of app assessment results in panel format"
						/>
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
					<ScreenshotPreview
						imageSrc="/images/zconsole/console-01.png"
						url="zconsole.dev"
						description="Main console interface"
						imageWidth={1200}
						imageHeight={800}
					/>
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
				</Container>
			</Section>
		</>
	);
}
function ReferencesSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>References</H2>
					<div className={cn("flex flex-col gap-12 lg:flex-row")}>
						<Blockquote className={cn("w-full")}>
							"Natcha was a talented colleague I have had the pleasure to work
							with for a couple of years. We worked together on building
							enterprise products at Zimperium . He was very integral on
							designing UX mockups (for both web apps and mobile apps) for use
							by the software developers. He is a very quick when it comes to
							timelines and has a talent for really pleasing designs. Even after
							we are both no longer at the company we met at, we have kept in
							touch as friends over the years and I really look forward to
							working with him in the future and would highly recommend Natcha."
							<Lede className={cn("not-italic mt-4")}>
								-Tom Vongphakdy, Software Engineer
							</Lede>
						</Blockquote>
						<Blockquote className={cn("w-full")}>
							"I highly recommend Natcha for any UX / UI role. In his time at
							Zimperium, Natcha aided greatly with both Mobile App Design and
							Web Design.
							<br />
							[...]
							<br />
							Natcha has an extraordinary ability to comprehend and transform
							complex verbal requirements into UX designs. He has both fresh,
							innovative ideas and a collaborative spirit."
							<Lede className={cn("not-italic mt-4")}>
								-Andrew Fausak, Principal Software Developer
							</Lede>
						</Blockquote>
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
								<Link href="/work/apideas">APIdeas</Link>
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
