import { Container } from "@/components/layout/Container";
import {
	Headline,
	Subheading,
	SectionHeading,
	MinorHeading,
	Paragraph,
	Lede,
	BulletedList,
	ListItem,
	Eyebrow,
	SmallText,
} from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Natcha Pradappet",
	description:
		"Design Engineer with 8+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence.",
};

export default function AboutPage() {
	const skills = {
		design: [
			"Interface Design",
			"Design Systems",
			"Prototyping",
			"User Research",
		],
		engineering: ["React/TypeScript", "Three.js/WebGL", "Node.js", "Python/ML"],
		concepts: [
			"Human-AI Interaction",
			"Cognitive Psychology",
			"Accessibility",
			"Performance",
		],
	};

	const experience = [
		{
			title: "Senior Design Engineer",
			company: "AI Studio",
			period: "2022 - Present",
			description:
				"Leading design engineering for next-generation AI interfaces.",
		},
		{
			title: "Design Engineer",
			company: "Creative Technology Lab",
			period: "2019 - 2022",
			description:
				"Bridged design and development for experimental digital products.",
		},
		{
			title: "Frontend Developer",
			company: "Digital Agency",
			period: "2016 - 2019",
			description:
				"Built responsive web applications and interactive experiences.",
		},
	];

	return (
		<>
			<Section>
				<Container>
					<h1>About</h1>
				</Container>
			</Section>
		</>
	);
}
