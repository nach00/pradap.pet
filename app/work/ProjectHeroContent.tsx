import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ProjectBadges } from "@/app/work/ProjectBadges";

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
	companyUrl?: string;
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
	companyUrl,
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
			<div className="flex flex-row gap-12">
				{liveUrl && (
					<Button className="sm:min-w-[200px]" size="lg" asChild>
						<Link href={liveUrl} target="_blank" rel="noopener noreferrer">
							View Live Project
						</Link>
					</Button>
				)}
				{sourceUrl && (
					<Button
						className="sm:min-w-[200px]"
						variant="outline"
						size="lg"
						asChild
					>
						<Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
							View Source Code
						</Link>
					</Button>
				)}
				{companyUrl && (
					<Button
						className="sm:min-w-[200px]"
						variant="default"
						size="lg"
						asChild
					>
						<Link href={companyUrl} target="_blank" rel="noopener noreferrer">
							Visit Company Website
						</Link>
					</Button>
				)}
			</div>
		</div>
	);
}
