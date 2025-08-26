import React from "react";
import { Button } from "@/components/ui/button";
import { ProjectBadges } from "../ProjectBadges";

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
					className="pb-6"
				/>

				<h1 className="">{title}</h1>

				<span className="lede">{lede}</span>

				<p className="pt-12">{description}</p>
			</div>

			{/* Action Buttons */}
			<div className="flex flex-row gap-8">
				{liveUrl && (
					<Button className="sm:min-w-[200px]" size="lg" asChild>
						<a href={liveUrl} target="_blank" rel="noopener noreferrer">
							View Live Project
						</a>
					</Button>
				)}
				{sourceUrl && (
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
				)}
			</div>
		</div>
	);
}
