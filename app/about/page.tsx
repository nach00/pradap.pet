import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/layout/Container";
import WorkTimeline from "@/app/about/WorkTimeline";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

import { PixelImage } from "@/components/magicui/pixel-image";
import { Metadata } from "next";

const pageTitle: string = "About";
const pageDescription: string =
	"Design Engineer with 5+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence. Based in Dallas, working with teams globally.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default function AboutPage() {
	return (
		<>
			<HeroSection />
			<JourneySection />
		</>
	);
}

function HeroSection() {
	return (
		<>
			<Section>
				<Container className="flex flex-col gap-20">
					<PageHeader title={pageTitle} description={pageDescription} />
					<Button className="w-min">
						<Link href="https://drive.google.com/file/d/103Ur2NEFO2I-4TKUDVG_hBs8w-TJ3n7w/view?usp=drive_link">
							View resume
						</Link>
					</Button>
				</Container>
			</Section>
		</>
	);
}

function JourneySection() {
	return (
		<>
			<Section>
				<Container className="flex flex-row justify-between">
					<div>
						<h2>Journey</h2>
						<p className="max-w-[60ch]">
							I began my career chasing the dream of becoming a restaurateur,
							studying culinary arts, business, and even interning at Disney
							World’s Epcot in the Norwegian Pavilion. After nearly a decade in
							the restaurant industry, I realized my true passion lay in tech. I
							spent nights and weekends teaching myself web development and
							design, taking on freelance projects where I first used Adobe XD
							to bring client ideas to life. Over time, I built a portfolio
							strong enough to land my first professional role as a UX Designer
							at Zimperium.
						</p>

						<p className="max-w-[60ch]">
							From there, I expanded my experience in both in-house and agency
							settings—at Photon as a UX/UI Designer and at Insite as a UX
							Specialist, focusing on UX strategy. Most recently, I completed a
							full-stack coding bootcamp at Altcademy, continuing my journey
							toward becoming a developer.
						</p>
					</div>
					<div className="flex justify-end items-end">
						<PixelImage
							src="https://www.pradap.pet/assets/photos/ai_profile.jpg"
							grid="8x8"
							grayscaleAnimation
						/>
					</div>
				</Container>
			</Section>
		</>
	);
}
function TimelinesSection() {
	return (
		<>
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
