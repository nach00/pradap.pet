import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import { TagBox, Eyebrow } from "@/components/type";
import { DataPair } from "@/components/typography";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProjectHeroContent from "@/components/work/ProjectHeroContent";
import { Button } from "@/components/ui/button";

export const projectDetails = {
	tagId: "02",
	tagYear: "2019",
	tagStatus: "Complete",
	tagCategory: "Cybersecurity",
	title: "zConsole",
	lede: "Administrative dashboard used by mobile app developers and cybersecurity teams of large enterprises",
	// description:
	// 	"During my time at Zimperium, I managed feature designs for 2 versions of this console, called V4 and V5. Below is a brief comparison between the two.",
	client: "Zimperium",
	duration: "2 years",
	role: "UI/UX Designer",
	team: "Product",
	services: ["UX/UI Design"],
	technologies: ["Adobe XD", "Figma"],
	liveUrl: "https://zimperium.com",
	headerImage: "/images/project-zconsole.png",
};

export default function ZConsole() {
	return (
		<>
			<HeroSection />
			<DetailsSection />
			<OverviewSection />
			<ProcessSection />
			<ProductComparisonSection />
			<FeatureDesignTasksSection />
			<WizardSection />
			<ReportsSection />
			<ReferencesSection />
			{/* <DeckSection /> */}
			{/* <LoomSection /> */}
			{/* <ResultsAndImpactSection /> */}
			{/* <LessonsLearnedSection /> */}
			{/* <NextStepsSection /> */}
			{/* <PreviewSection /> */}
		</>
	);
}

function HeroSection() {
	return (
		<>
			<Section>
				<Container>
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
												{projectDetails.technologies.map(
													(technology, index) => (
														<TagBox key={index}>{technology}</TagBox>
													),
												)}
											</div>
										)}
								</DataPair>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
function OverviewSection() {
	return (
		<>
			<Section>
				<Container className="flex-row gap-12 flex">
					<div className="flex flex-col">
						<h2>Overview</h2>
						<div className="flex flex-col w-full items-center justify-center">
							<p>
								zConsole is an administrative dashboard used by mobile app
								developers and cybersecurity teams of large enterprises. During
								my time at Zimperium, I managed feature designs for 2 versions
								of this console, called V4 and V5. Below is a brief comparison
								between the two.
							</p>
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
					<h2>Product Comparison</h2>

					<div className="flex flex-row gap-8">
						<div className="p-4 bg-[var(--base-3)] rounded-md flex items-center flex-col justify-center">
							<h3>V4</h3>
							<div className="flex flex-col pb-8">
								<small>Built with Angular.js</small>
								<small>More features</small>
								<small>Older and slower</small>
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
							<h3>V5</h3>

							<div className="flex flex-col pb-8">
								<small>Built with React.js</small>
								<small>More scalability</small>
								<small>Newer and faster</small>
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

					<div className="flex flex-col w-full items-center">
						<p className="mt-20">
							The product and engineering team was divided into two teams, one
							for each version. The reasoning behind this team and project
							structure is because:
						</p>
						<ul>
							<li>
								<strong>Existing software:</strong> Most of the customers used
								V4 because it had been around longer and they were used to it.
							</li>

							<li>
								<strong>Parallel development process:</strong> The new V5
								version was still newly being developed; there were not as many
								functions as V4.
							</li>

							<li>
								<strong>Scalability vs Features:</strong> The problem with V4 is
								that it could not scale as much as V5. Having more data in V4
								would reduce performance, which is the reason for the
								development of the newer version.
							</li>
						</ul>

						<p>
							Our team tried as much as possible to reduce the amount of rework
							that may be needed when building a new feature for both consoles,
							but sometimes it couldn’t be avoided. Therefore, some tasks
							required me to design vastly different user interfaces.
						</p>

						<p>
							Since V4 had planned to eventually be deprecated, minimal work was
							required for those associated tasks, meaning I was told to just
							have the “get it done” mentality. With V5, I had more design
							freedom to design things the right way.
						</p>
					</div>
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
					<h2>Feature Design Tasks</h2>
					<p>
						As customers demanded more features and project managed the team's
						approach, I was assigned to provide designs for new features that
						would be implented. Below are a few mocks for some of the features I
						designed.
					</p>

					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>V4 Features</h3>

						<div className="grid grid-cols-2 gap-6">
							<ScreenshotPreview
								imageSrc="/images/zconsole/zimperium-19.png"
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
						<h3>V5 Features</h3>
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
				<Container>
					<h2>Process</h2>
					<p>
						Once I had established my general understanding of the company, its
						services, and the stakeholders involved, I ultimately decided that
						creating a design system would be vital to remaining consistent in
						all my designs. I designed Hyperion, which I describe as a big data
						design system. You can see more about my design process creating
						this system below.
					</p>
					<Button variant="outline">View Design Process (coming soon)</Button>
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
					<h2>Step-by-step wizard for easy setup</h2>

					<div className="flex flex-col w-full items-center">
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-1.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-2.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-3.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-4.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-5.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-6.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/wizard-7.png"
							description=""
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
					<h2>Security Analytics Reports</h2>
					<p>
						One section that fully utilized the Hyperion Design System was the
						security analytics reports that were generated when a user uploaded
						their mobile app to the zConsole. Below are a few examples of the
						reports that were generated.
					</p>
					<div className="flex flex-col w-full items-center">
						<ScreenshotPreview
							imageSrc="/images/zconsole/zscan-01.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/zscan-02.png"
							description=""
						/>
						<ScreenshotPreview
							imageSrc="/images/zconsole/zscan-03.png"
							description=""
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
					<h2>References</h2>
					<blockquote>Hi</blockquote>
				</Container>
			</Section>
		</>
	);
}
