import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import { TagBox, Eyebrow } from "@/components/ProjectBadges";
import { DataPair } from "@/components/DataPair";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProjectHeroContent from "@/app/work/ProjectHeroContent";
import { Button } from "@/components/ui/button";

const projectDetails = {
	id: "06",
	year: "2022-23",
	status: "Complete",
	category: "Email Development",
	title: "Fossil",
	lede: "Email marketing campaign development for a global fashion and watch brand",
	description:
		"Developed and tested emails for Fossil's email marketing campaigns across various holidays, sales, and events. Worked closely with the marketing team to ensure brand consistency and tight delivery schedules while testing across multiple email clients and devices.",
	client: "Fossil Group, Inc.",
	duration: "1 year",
	role: "Email Developer",
	team: "Insite",
	services: [
		"Email Development",
		"Cross-client Testing",
		"Template Development",
	],
	technologies: ["VS Code", "Adobe XD", "HTML/CSS"],
	companyUrl: "https://www.fossilgroup.com/",

	headerImage: "",
};

export function getProjectDetails() {
	return projectDetails;
}

export default function Fossil() {
	return (
		<div className="">
			<HeroSection />
			<DetailsSection />
			<OverviewSection />
			<AboutFossilSection />
			<ProcessSection />
			<BrandsSection />
			<EmailExamplesSection />
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

function OverviewSection() {
	return (
		<Section>
			<Container className="flex-row gap-12 flex">
				<div className="flex flex-col">
					<h2>Overview</h2>
					<div className="flex flex-col w-full items-center justify-center">
						<p>
							Fossil has a contract with Insite to develop and test emails for
							their email marketing campaigns. This includes developing emails
							for various holidays, sales, and other events. I was responsible
							for testing emails across various email clients and devices.
						</p>
						<p>
							Their designers upload finalized Adobe XD files to a content
							management system, and I use those files to develop the emails.
							When I started working with Fossil, my co-worker had been working
							with them for many years and had established a process that
							utilizes templated code that can be reused for future emails.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function AboutFossilSection() {
	return (
		<Section>
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="p-6 bg-[var(--base-3)] rounded-lg">
						<h3>Tasks & Responsibilities</h3>
						<ul className="mt-4 space-y-2">
							<li>• Developing emails for marketing campaigns</li>
							<li>• Testing across various email clients and devices</li>
							<li>• Working with tight schedules and brand consistency</li>
							<li>• Utilizing templated code for efficient development</li>
							<li>• Meeting specific cobrand requirements</li>
						</ul>
					</div>

					<div className="p-6 bg-[var(--base-3)] rounded-lg">
						<h3>About Fossil Group, Inc.</h3>
						<p className="mt-4">
							Fossil Group, Inc., is an American fashion designer and
							manufacturer founded in 1984 by Tom Kartsotis and based in
							Richardson, Texas. Their brands include Fossil, Relic, Michele
							Watch, Skagen Denmark, Misfit, WSI, and Zodiac Watches.
						</p>
					</div>
				</div>

				<div className="mt-12">
					<ScreenshotPreview
						imageSrc="/images/fossil/multi-fossil.png"
						description="Fossil email marketing campaigns overview"
					/>
				</div>
			</Container>
		</Section>
	);
}

function ProcessSection() {
	return (
		<Section>
			<Container>
				<h2>Development Process</h2>
				<p>
					Each cobrand had specific requirements that needed to be met, and all
					emails needed to properly display on various email clients and
					devices. The established workflow ensured consistent quality and brand
					adherence.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Design Handoff</h3>
						<p className="mt-2">
							Designers upload finalized Adobe XD files to the CMS
						</p>
					</div>
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Template Development</h3>
						<p className="mt-2">
							Use established templated code for efficient email creation
						</p>
					</div>
					<div className="p-4 bg-[var(--base-3)] rounded-lg">
						<h3>Cross-Client Testing</h3>
						<p className="mt-2">
							Test across various email clients and devices for compatibility
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function BrandsSection() {
	return (
		<Section>
			<Container>
				<h2>Brand Portfolio</h2>
				<p>
					Worked across multiple Fossil Group brands, each with unique design
					requirements and brand guidelines.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<ScreenshotPreview
						imageSrc="/images/fossil/skagen-multi.png"
						description="Skagen Denmark email campaigns"
					/>
					<ScreenshotPreview
						imageSrc="/images/fossil/michele-mock.png"
						description="Michele Watch email design"
					/>
					<ScreenshotPreview
						imageSrc="/images/fossil/watch-station-mock.png"
						description="Watch Station promotional emails"
					/>
					<ScreenshotPreview
						imageSrc="/images/fossil/logo-group.svg"
						description="Fossil Group brand logos"
					/>
				</div>
			</Container>
		</Section>
	);
}

function EmailExamplesSection() {
	return (
		<Section>
			<Container>
				<h2>Email Campaign Examples</h2>
				<p>
					Sample of developed email campaigns showcasing different layouts,
					promotional styles, and brand adaptations across the Fossil Group
					portfolio.
				</p>

				<div className="mt-8">
					<ScreenshotPreview
						imageSrc="/images/fossil/fossil-multi-mock.png"
						description="Fossil email campaign examples and layouts"
					/>
				</div>

				<div className="flex gap-4 mt-8">
					<Button variant="outline" asChild>
						<a href="/fsl">Sample Email</a>
					</Button>
				</div>
			</Container>
		</Section>
	);
}
