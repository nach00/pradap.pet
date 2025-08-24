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
			{/* Top Section: Badges */}
			<div className="mb-12">
				<ProjectBadges
					id={tagId}
					year={tagYear}
					status={tagStatus}
					type={tagCategory}
				/>
			</div>

			{/* Hero Section: Title + Lede + Description */}
			<div className="mb-20">
				<h1 className="mb-6">{title}</h1>

				{lede && (
					<div className="mb-8 max-w-4xl">
						<span className="lede">{lede}</span>
					</div>
				)}

				{description && (
					<div className="max-w-3xl">
						<p>{description}</p>
					</div>
				)}
			</div>

			{/* Project Overview Section: Consolidated metadata */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 pb-16 border-b border-border">
				{/* Left Column: Project Details */}
				<div className="lg:col-span-1 space-y-8">
					<DataPair label="Client" className="space-y-1">
						<span className="text-base">{client}</span>
					</DataPair>
					<DataPair label="Duration" className="space-y-1">
						<span className="text-base">{duration}</span>
					</DataPair>
					<DataPair label="Role" className="space-y-1">
						<span className="text-base">{role}</span>
					</DataPair>
					<DataPair label="Team" className="space-y-1">
						<span className="text-base">{team}</span>
					</DataPair>
				</div>

				{/* Right Column: Services & Technologies */}
				<div className="lg:col-span-2 space-y-12">
					{/* Services */}
					{services && services.length > 0 && (
						<div>
							<Eyebrow className="mb-4 text-[var(--accent-11)]">
								Services
							</Eyebrow>
							<div className="flex flex-wrap gap-2">
								{services.map((service, index) => (
									<span
										key={index}
										className="inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide border border-[var(--accent-6)] rounded-sm text-[var(--accent-11)] bg-[var(--accent-2)] transition-colors duration-200 hover:bg-[var(--accent-3)]"
									>
										{service}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Technologies */}
					<div>
						<Eyebrow className="mb-4 text-[var(--base-11)]">
							Technologies
						</Eyebrow>
						<div className="flex flex-wrap gap-2">
							{technologies.map((tech, index) => (
								<span
									key={index}
									className="inline-flex items-center px-4 py-2 text-sm tracking-wide border border-[var(--base-6)] rounded-sm text-[var(--base-11)] bg-[var(--base-2)] transition-colors duration-200 hover:bg-[var(--base-3)]"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Action Buttons */}
			{(liveUrl || sourceUrl) && (
				<div className="flex flex-col sm:flex-row gap-4">
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
			)}
		</div>
	);
}
