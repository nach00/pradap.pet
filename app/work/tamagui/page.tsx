import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import { TagBox, Eyebrow } from "@/components/type";
import { DataPair } from "@/components/typography";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProjectHeroContent from "@/components/work/ProjectHeroContent";
import { Button } from "@/components/ui/button";

export const projectDetails = {
	tagId: "04",
	tagYear: "2024",
	tagStatus: "Complete",
	tagCategory: "Design System",
	title: "Tamagui",
	lede: "A modular design system for React - web and native, bringing advanced styling capabilities to cross-platform development",
	description:
		"A comprehensive design system utilizing color variables that allow for easy theming changes. The system includes reusable components with customizable padding, margin, gaps, border radii, and supports both light and dark themes.",
	client: "Tamagui",
	duration: "3 months",
	role: "UI/UX Designer",
	team: "Open Source",
	services: ["Design System", "Component Design"],
	technologies: ["Figma"],
	liveUrl: "https://tamagui.dev",
	sourceUrl: "https://www.figma.com/community/file/1326593766534421119",
};

export default function Tamagui() {
	return (
		<>
			<HeroSection />
			<DetailsSection />
			<OverviewSection />
			<WhatIsSection />
			<ComponentsSection />
			<ThemingSection />
			<CommunitySection />
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
							Towards the end of 2023, I started developing my website and
							needed to decide on a front-end framework. I chose Tamagui, which
							was a very new framework at the time. Seeing that the Figma design
							system was severely outdated, I reached out to Nate, the creator
							of Tamagui, to see if I could help.
						</p>
						<p>
							This design system utilizes color variables, which allow for easy
							color changes. Users can easily change the color of the entire
							design system by adjusting color layers for both light and dark
							themes. Other variables can be adjusted as well, including
							padding, margin, gaps, border radii, and more.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

function WhatIsSection() {
	return (
		<Section>
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="p-6 bg-[var(--base-3)] rounded-lg">
						<h3>What is a Design System?</h3>
						<p className="mt-4">
							A design system is a set of standards to manage design at scale by
							reducing redundancy while creating a shared language and visual
							consistency across different pages and channels.
						</p>
						<div className="flex gap-4 mt-6">
							<Button asChild>
								<a
									href="https://www.figma.com/file/Vj2tgOgM43Kiq1I4VdfR0h/Tamagui-v1.2.1-Community?type=design&is-community-duplicate=1&fuid="
									target="_blank"
									rel="noopener noreferrer"
								>
									Open in Figma
								</a>
							</Button>
						</div>
					</div>

					<div className="p-6 bg-[var(--base-3)] rounded-lg">
						<h3>What is Tamagui?</h3>
						<p className="mt-4">
							Tamagui is a modular style solution for React - web or native. It
							aims to compete with the best web-only style libraries, while
							bringing many much-needed styling capabilities to React Native.
						</p>
						<div className="flex gap-4 mt-6">
							<Button asChild>
								<a
									href="https://tamagui.dev"
									target="_blank"
									rel="noopener noreferrer"
								>
									Tamagui Website
								</a>
							</Button>
						</div>
					</div>
				</div>

				<div className="mt-12">
					<ScreenshotPreview
						imageSrc="/images/tamagui/laptop-tamagui-mock.png"
						description="Tamagui design system overview"
					/>
				</div>
			</Container>
		</Section>
	);
}

function ComponentsSection() {
	return (
		<Section>
			<Container>
				<h2>Component Library</h2>
				<p>
					The design system includes a comprehensive set of components with
					multiple variations and states, all built with consistency and
					flexibility in mind.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<ScreenshotPreview
						imageSrc="/images/tamagui/button-variations.png"
						description="Button component variations and states"
					/>
					<ScreenshotPreview
						imageSrc="/images/tamagui/input-variations.png"
						description="Input component variations and states"
					/>
				</div>
			</Container>
		</Section>
	);
}

function ThemingSection() {
	return (
		<Section>
			<Container>
				<h2>Theming & Color System</h2>
				<p>
					The design system features a robust theming system that allows for
					easy customization of colors, spacing, and other design tokens across
					light and dark themes.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<ScreenshotPreview
						imageSrc="/images/tamagui/color-theme-adjust.png"
						description="Color theme adjustment interface"
					/>
					<ScreenshotPreview
						imageSrc="/images/tamagui/dark-gray-2.png"
						description="Dark theme implementation"
					/>
				</div>
			</Container>
		</Section>
	);
}

function CommunitySection() {
	return (
		<Section>
			<Container>
				<h2>Community Impact</h2>
				<p>
					The Tamagui design system has been made available to the Figma
					community, providing developers and designers with a comprehensive
					toolkit for building cross-platform applications.
				</p>

				<div className="flex gap-4 mt-8">
					<Button variant="outline" asChild>
						<a
							href="https://www.figma.com/community/file/1326593766534421119"
							target="_blank"
							rel="noopener noreferrer"
						>
							Figma Community Page
						</a>
					</Button>
				</div>

				<div className="mt-12">
					<ScreenshotPreview
						imageSrc="/images/tamagui/mock6wide.png"
						description="Complete design system showcase"
					/>
				</div>
			</Container>
		</Section>
	);
}
