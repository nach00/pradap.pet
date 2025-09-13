import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ProjectBadges } from "@/app/work/ProjectBadges";

import {
	P,
	UL,
	Lede,
	LI,
	Small,
	Eyebrow,
	Caption,
	Blockquote,
} from "@/components/typography/TextElements";

import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

interface ProjectHeaderProps {
	id: string;
	year: string;
	status: string;
	category: string;
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
	id,
	year,
	status,
	category,
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
					id={id}
					year={year}
					status={status}
					type={category}
					className="pb-6"
				/>

				<H1 className="">{title}</H1>

				<H4 className="text-[var(--base-9)]">{lede}</H4>

				<P className="pt-[3em]">{description}</P>
			</div>

			{/* Action Buttons */}
			<div className="flex flex-col sm:flex-row  gap-6 pt-12">
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
