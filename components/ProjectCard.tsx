import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ProjectBadges } from "./ProjectBadges";
import Container from "@/components/layout/Container";

interface ProjectCardProps {
	href: string;
	tagId: string;
	tagYear: string;
	tagStatus: string;
	tagCategory: string;
	title: string;
	lede: string;
	description?: string;
}

export function ProjectCard({
	href,
	tagId,
	tagYear,
	tagStatus,
	tagCategory,
	title,
	lede,
}: ProjectCardProps) {
	return (
		<Link href={href} className="group block">
			<article className="relative h-full bg-[var(--base-2)] border border-border rounded-sm overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-lg">
				{/* Image/Preview Area */}
				<div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 border-b border-border overflow-hidden">
					<div className="absolute inset-0 flex items-center justify-center">
						<span className="font-mono text-6xl font-light text-muted-foreground/30 tracking-tight transition-transform duration-300 group-hover:scale-110">
							{tagId}
						</span>
					</div>

					{/* Overlay gradient on hover */}
					<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</div>

				{/* Content Area */}
				<div className="p-6 space-y-4">
					{/* Badges */}
					<div className="flex flex-wrap gap-2">
						<ProjectBadges
							id={tagId}
							year={tagYear}
							status={tagStatus}
							type={tagCategory}
						/>
					</div>

					{/* Title */}
					<h3 className="text-xl font-normal tracking-tight text-foreground group-hover:text-[var(--base-11)] transition-colors duration-200">
						{title}
					</h3>

					{/* Description */}
					<p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
						{lede}
					</p>

					{/* Call to action */}
					<div className="pt-2">
						<span className="inline-flex items-center text-xs font-medium tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-200">
							View Project
							<svg
								className="ml-1.5 w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
