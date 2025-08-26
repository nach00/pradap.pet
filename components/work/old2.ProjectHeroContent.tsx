import React from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ProjectBadges } from "../ProjectBadges";
import { cn } from "@/lib/utils";
import { TagBox, Eyebrow } from "@/components/type";
import { DataPair } from "../typography";

interface ProjectHeaderProps {
	tagId: string;
	tagYear: string;
	tagStatus: string;
	tagCategory: string;
	title: string;
	client: string;
	duration: string;
	role: string;
	team: string;
	services: string[];
	technologies: string[];
	lede?: string;
	description?: string;
	liveUrl?: string;
	sourceUrl?: string;
	className?: string;
}

export default function ProjectHeroContent({
	tagId,
	tagYear,
	tagStatus,
	tagCategory,
	title,
	client,
	duration,
	role,
	team,
	services,
	technologies,
	lede,
	description,
	liveUrl,
	sourceUrl,
	className,
}: ProjectHeaderProps) {
	return (
		<div className="flex w-full flex-col">
			<div className="flex flex-col">
				<ProjectBadges
					id={tagId}
					year={tagYear}
					status={tagStatus}
					type={tagCategory}
					className=""
				/>

				<h1 className="">{title}</h1>

				<span className="lede">{lede}</span>

				<p className="pt-12">{description}</p>
			</div>

			{/* Action Buttons */}
			<div className="flex flex-row gap-8">
				<Button className="sm:min-w-[200px]" size="lg" asChild>
					<a href={liveUrl} target="_blank" rel="noopener noreferrer">
						View Live Project
					</a>
				</Button>
				<Button
					className="sm:min-w-[200px]"
					variant="outline"
					size="lg"
					asChild
				>
					<a href={sourceUrl} target="_blank" rel="noopener noreferrer">
						View Source Code
					</a>
				</Button>
			</div>
			{/* Details */}
			<div className="flex flex-row justify-between">
				<DataPair label="Client">{client}</DataPair>
				<DataPair label="Duration">{duration}</DataPair>
				<DataPair label="Role">{role}</DataPair>
				<DataPair label="Team">{team}</DataPair>
			</div>

			{/* Services */}
			<div className="flex flex-col">
				<Eyebrow>Services</Eyebrow>
				{services && services.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{services.map((service, index) => (
							<TagBox key={index}>{service}</TagBox>
						))}
					</div>
				)}
			</div>

			{/* Technologies */}
			<div className="flex flex-col">
				<Eyebrow>Technologies</Eyebrow>
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech, index) => (
						<TagBox key={index}>{tech}</TagBox>
					))}
				</div>
			</div>
		</div>
	);
}
