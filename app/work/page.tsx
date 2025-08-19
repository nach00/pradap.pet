import { FeaturedWorkGrid } from "@/components/FeaturedWorkGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/layout/Container";
import {
	Headline,
	Subheading,
	SectionHeading,
	Paragraph,
	Lede,
	SmallText,
	CategoryTag,
	Badge,
	Eyebrow,
	LinkText,
} from "@/components/typography";
import { WorkCard } from "@/components/ui/WorkCard";
// import { projects } from "@/data/projects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Selected Work | Natcha Pradappet",
	description:
		"Exploring the intersection of artificial intelligence and human-centered design through experimental interfaces, adaptive systems, and thoughtful engineering.",
};

export default function WorkPage() {
	const stats = [
		{ number: "12", label: "PROJECTS SHIPPED" },
		{ number: "8M+", label: "USERS IMPACTED" },
		{ number: "4", label: "DESIGN PATENTS" },
	];

	const featuredProjects = [
		{
			id: "01",
			year: "2024",
			status: "Live",
			statusColor: "bg-green-500",
			title: "Apideas",
			description:
				"Intelligent design system that learns from user interactions and suggests optimizations.",
			technologies: ["React", "TypeScript", "TensorFlow.js", "Storybook"],
			image: "dots-pattern",
			slug: "ai-enhanced-design-system",
		},
		{
			id: "02",
			year: "2024",
			status: "Development",
			statusColor: "bg-yellow-500",
			title: "Zimperium",
			description:
				"Multi-user design environment with live cursors and AI conflict resolution.",
			technologies: ["WebRTC", "WebGL", "Node.js", "Redis"],
			image: "vertical-dots",
			slug: "real-time-collaboration-platform",
		},
		{
			id: "03",
			year: "2023",
			status: "Scoutify",
			statusColor: "bg-orange-500",
			title: "Adaptive Data Visualization",
			description:
				"Smart charts that automatically adjust based on data complexity and user context.",
			technologies: ["D3.js", "TensorFlow", "Python", "Observable"],
			image: "wave-pattern",
			slug: "adaptive-data-visualization",
		},
	];

	const archiveProjects = [
		{
			year: "2022",
			title: "Tamagui",
			tags: ["AI & ML", "Confidential"],
		},
		{
			year: "2022",
			title: "Fossil",
			tags: ["Data Visualization", "MedTech Startup"],
		},
		{
			year: "2021",
			title: "Photon",
			tags: ["Fintech", "Fintech Corp"],
		},
		{
			year: "2021",
			title: "Banfield Pet Hospital",
			tags: ["AR/VR", "EdTech Initiative"],
		},
	];

	const renderProjectImage = (imageType: string) => {
		switch (imageType) {
			case "dots-pattern":
				return (
					<div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
						<div className="grid grid-cols-3 gap-4">
							{[...Array(9)].map((_, i) => (
								<div
									key={i}
									className={`w-3 h-3 rounded-full ${
										i === 1 || i === 4 ? "bg-yellow-400" : "bg-gray-300"
									}`}
								/>
							))}
						</div>
					</div>
				);
			case "vertical-dots":
				return (
					<div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
						<div className="flex flex-col gap-2">
							{[...Array(3)].map((_, i) => (
								<div key={i} className="w-3 h-3 bg-yellow-400 rounded-full" />
							))}
						</div>
					</div>
				);
			case "wave-pattern":
				return (
					<div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
						<div className="text-2xl text-gray-400">~</div>
					</div>
				);
			case "abc-letters":
				return (
					<div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
						<div className="text-2xl font-bold text-gray-400">A B C</div>
					</div>
				);
			default:
				return <div className="w-full h-full bg-gray-200 rounded-lg" />;
		}
	};

	return (
		<Container>
			{/* Hero Section */}
			{/* <div className="pt-20 pb-24"> */}
			{/* 	<Eyebrow className="mb-4">Projects</Eyebrow> */}
			{/* 	<Headline>Selected Work</Headline> */}
			{/* 	<Lede className="max-w-4xl"> */}
			{/* 		Exploring the intersection of artificial intelligence and */}
			{/* 		human-centered design through experimental interfaces, adaptive */}
			{/* 		systems, and thoughtful engineering. */}
			{/* 	</Lede> */}
			{/* </div> */}

			{/* Stats Section */}
			{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-32"> */}
			{/* 	{stats.map((stat, index) => ( */}
			{/* 		<div key={index}> */}
			{/* 			<div className="text-4xl md:text-5xl font-light text-gray-900 mb-2"> */}
			{/* 				{stat.number} */}
			{/* 			</div> */}
			{/* 			<SmallText className="tracking-wider">{stat.label}</SmallText> */}
			{/* 		</div> */}
			{/* 	))} */}
			{/* </div> */}

			{/* Featured Projects Section (new) */}
			<div className="pt-20 pb-24">
				{/* <Eyebrow className="mb-4">Projects</Eyebrow> */}
				<Headline>Featured Projects</Headline>
				<Lede className="max-w-4xl">
					Exploring the intersection of artificial intelligence and
					human-centered design through experimental interfaces, adaptive
					systems, and thoughtful engineering.
				</Lede>
			</div>
			<div className="space-y-24 pb-32">
				{/* <WorkCard project={projects[0]} /> */}
				<ProjectCard />

				<FeaturedWorkGrid />
			</div>

			{/* Featured Projects */}
			<div className="space-y-24 pb-32">
				{featuredProjects.map((project) => (
					<div
						key={project.id}
						className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
					>
						<div className="aspect-[4/3] bg-gray-50 rounded-lg p-8">
							{renderProjectImage(project.image)}
						</div>

						<div>
							<div className="flex items-center gap-4 mb-4">
								<SmallText className="text-gray-400">{project.id}</SmallText>
								<SmallText className="text-gray-500">{project.year}</SmallText>
								<Badge
									variant={
										project.status === "Live"
											? "success"
											: project.status === "Development"
												? "warning"
												: project.status === "Prototype"
													? "secondary"
													: "primary"
									}
								>
									{project.status}
								</Badge>
								{project.status === "Live" && (
									<CategoryTag>Design Systems</CategoryTag>
								)}
								{project.status === "Development" && (
									<CategoryTag>Collaboration</CategoryTag>
								)}
								{project.status === "Prototype" && (
									<CategoryTag>AI & Tools</CategoryTag>
								)}
								{project.status === "Research" && (
									<CategoryTag>Typography</CategoryTag>
								)}
							</div>

							<SectionHeading className="mb-4">{project.title}</SectionHeading>

							<Paragraph className="mb-6">{project.description}</Paragraph>

							<div className="flex flex-wrap gap-2 mb-6">
								{project.technologies.map((tech, index) => (
									<CategoryTag key={index}>{tech}</CategoryTag>
								))}
							</div>

							<LinkText href={`/work/${project.slug}`}>
								View Project
								<span className="ml-2">→</span>
							</LinkText>
						</div>
					</div>
				))}
			</div>

			{/* Archive Section */}
			<div className="pb-32">
				<Subheading className="mb-4">Archive</Subheading>
				<Paragraph className="text-gray-500 mb-16">
					Selected projects from previous years. Details available upon request.
				</Paragraph>

				<div className="space-y-12">
					{archiveProjects.map((project, index) => (
						<div
							key={index}
							className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-gray-200 last:border-b-0"
						>
							<SmallText className="text-gray-500 w-16">
								{project.year}
							</SmallText>
							<div className="flex-1">
								<SectionHeading className="mb-2">
									{project.title}
								</SectionHeading>
								<div className="flex gap-4">
									{project.tags.map((tag, tagIndex) => (
										<SmallText key={tagIndex} className="text-gray-500">
											{tag}
										</SmallText>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}
