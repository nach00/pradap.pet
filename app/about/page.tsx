import Container from "@/components/layout/Container";
import WorkTimeline from "@/app/about/WorkTimeline";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

import { PixelImage } from "@/components/magicui/pixel-image";
import { Metadata } from "next";

const pageTitle: string = "About";
const pageDescription: string =
	"Design Engineer with 5+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence. Based in Bangkok, working with teams globally.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function AboutPage() {
	return (
		<>
			{/* Page header */}
			<Section>
				<Container className="mb-30 flex flex-row gap-20">
					<PageHeader title={pageTitle} description={pageDescription} />
				</Container>
			</Section>
			{/* Journey */}
			<Section>
				<Container className="mb-30 flex flex-row gap-20">
					<div>
						<h2>Journey</h2>
						<p className="max-w-[60ch]">
							My journey began in cognitive psychology, studying how humans
							process complex information. This foundation led me to design
							engineering, where I explore the intersection of human cognition
							and artificial intelligence.
						</p>

						<p className="max-w-[60ch]">
							I've spent the last decade working with teams at the forefront of
							AI, creating interfaces that adapt to user behavior and enhance
							human decision-making. My approach combines systematic design
							thinking with deep technical implementation.
						</p>
					</div>
					{/* <div className="grid place-items-center bg-accent/15 border w-full rounded-xl"> */}
					<PixelImage
						src="https://www.pradap.pet/assets/photos/ai_profile.jpg"
						grid="8x8"
						grayscaleAnimation
					/>
					{/* </div> */}
				</Container>
			</Section>

			{/* Experience */}
			<Section>
				<Container className="flex flex-row gap-20">
					<div className="flex flex-col w-full">
						<h2>Experience</h2>
						<WorkTimeline />
					</div>
					<div className="flex flex-col w-full">
						{/* <h2>Skills & Tools</h2> */}
						{/* <div className="flex flex-col"> */}
						{/* 	<h3>Design</h3> */}
						{/* 	<div className="flex flex-row gap-4">
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 	</div> */}
						{/* </div> */}
						{/* <div className="flex flex-col"> */}
						{/* 	<h3>Development</h3> */}
						{/* 	<div className="flex flex-row gap-4"> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 	</div> */}
						{/* </div> */}
						{/* <div className="flex flex-col"> */}
						{/* 	<h3>AI</h3> */}
						{/* 	<div className="flex flex-row gap-4"> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 		<small className="border p-2">Figma</small> */}
						{/* 	</div> */}
						{/* </div> */}

						<h2>Education</h2>
						<WorkTimeline />
					</div>
				</Container>
			</Section>
		</>
	);
}
