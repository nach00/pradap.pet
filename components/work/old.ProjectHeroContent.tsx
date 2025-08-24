import React from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ProjectBadges } from "../ProjectBadges";
import { cn } from "@/lib/utils";
import { TagBox, Eyebrow } from "@/components/type";
import { DataPair } from "@/components/typography";

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
	technologies,
	lede,
	description,
	liveUrl,
	sourceUrl,
	className,
}: ProjectHeaderProps) {
	return (
		<div className="flex w-full flex-col">
			<ProjectBadges
				id={tagId}
				year={tagYear}
				status={tagStatus}
				type={tagCategory}
				className="mb-6"
			/>
			<h1 className="pt-8">{title}</h1>
			<span className="lede">{lede}</span>
			<p className="pt-8">{description}</p>
			{/* <div className="flex gap-12 mt-12"> */}
			<div className="grid grid-cols-2 space-y-8">
				<DataPair label="Role">{role}</DataPair>
				<DataPair label="Duration">{duration}</DataPair>
				<DataPair label="Client">{client}</DataPair>
				<DataPair label="Team">{team}</DataPair>
			</div>
			<DataPair
				label="Technologies used"
				className="flex flex-wrap flex-shrink-0"
			>
				<div className="flex flex-wrap gap-3">
					{technologies.map((tech, index) => (
						<TagBox key={index}>{tech}</TagBox>
					))}
				</div>
			</DataPair>
			<div className="flex flex-row gap-3 pt-8">
				{liveUrl && (
					<Button className="w-min" asChild>
						<a href={liveUrl} target="_blank" rel="noopener noreferrer">
							View Live Project
						</a>
					</Button>
				)}
				{sourceUrl && (
					<Button className="w-min" variant="outline" asChild>
						<a href={sourceUrl} target="_blank" rel="noopener noreferrer">
							View Source Code
						</a>
					</Button>
				)}
			</div>
		</div>
	);
}
