import React from "react";
import { Headline, Paragraph, DataPair } from "@/components/typography";
import { Button } from "@/components/ui/button";

export const Hero = () => {
	return (
		<div className="relative flex flex-col gap-12 min-h-screen justify-center">
			{/* 3D Background Scene */}
			{/* <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"> */}
			{/* 	<Scene className="w-full h-full" /> */}
			{/* </div> */}

			{/* Content - positioned above the 3D scene */}
			<div className="relative z-10">
				<Headline className="font-light flex flex-col gap-4">
					<span>Design</span>
					<span>Engineer</span>
				</Headline>

				<Paragraph className="max-w-[30ch] leading-7 text-secondary-foreground mt-12">
					Crafting digital experiences where precision meets elegance. Currently
					exploring AI-enhanced design systems.
				</Paragraph>

				<div className="flex gap-12 mt-12">
					<DataPair label="LOCATION">San Francisco</DataPair>
					<DataPair label="STATUS">Available</DataPair>
				</div>

				<div className="flex gap-4 mt-12">
					<Button>View work</Button>
					<Button variant="outline">About & Experience</Button>
				</div>
			</div>
		</div>
	);
};
