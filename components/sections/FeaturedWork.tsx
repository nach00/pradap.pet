"use client";
import React from "react";
import { Project } from "@/types/projects";
import { projects } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	SectionHeading,
	Subheading,
	Paragraph,
	Lede,
	Status,
} from "@/components/type";

export const FeaturedWork = () => {
	const getStatusColor = (status: string) => {
		switch (status?.toLowerCase()) {
			case "live":
				return "text-green-500";
			case "development":
				return "text-yellow-500";
			case "prototype":
				return "text-orange-500";
			case "research":
				return "text-blue-500";
			default:
				return "text-gray-500";
		}
	};

	return (
		<div>
			<SectionHeading className="mt-20 mb-16">Selected Work</SectionHeading>
			<Lede className="mb-16 max-w-3xl">
				Featured projects exploring AI integration, adaptive interfaces, and
				human-centered design.
			</Lede>
			<div className="space-y-12">
				{projects.map((project: Project, idx: number) => (
					<motion.div
						key={project.href}
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{ duration: 0.4, delay: idx * 0.1 }}
						className="border-b border-gray-200 pb-12 last:border-b-0"
					>
						<Link
							href={project.slug ? `/work/${project.slug}` : project.href}
							className="group block"
						>
							<div className="flex items-start gap-8">
								<div className="text-sm text-gray-400 font-mono pt-2 w-8 flex-shrink-0">
									{String(idx + 1).padStart(2, "0")}
								</div>
								<div className="flex-1">
									<Subheading className="mb-3 group-hover:text-gray-700 transition-colors">
										{project.title}
									</Subheading>
									<Paragraph className="mb-4 max-w-3xl">
										{project.description}
									</Paragraph>
									<div className="flex items-center gap-4 text-sm">
										<span className="text-gray-500">
											{project.year || "2024"}
										</span>
										<Status
											color={
												project.status?.toLowerCase() === "live"
													? "green"
													: project.status?.toLowerCase() === "development"
														? "yellow"
														: "gray"
											}
										>
											{project.status || "Live"}
										</Status>
									</div>
								</div>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
			<div className="mt-16 flex justify-center">
				<Link
					href="/work"
					className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
				>
					View All Work
					<span className="ml-2">→</span>
				</Link>
			</div>
		</div>
	);
};
