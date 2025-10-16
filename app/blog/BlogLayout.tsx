"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Container from "@/components/layout/Container";
import { H1 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface BlogLayoutProps {
	children: ReactNode;
	frontmatter: {
		title: string;
		description: string;
		date: string;
		readTime: string;
		tags: string[];
		category: string;
	};
	tableOfContents?: Array<{
		id: string;
		title: string;
		level: number;
	}>;
}

export function BlogLayout({
	children,
	frontmatter,
	tableOfContents,
}: BlogLayoutProps) {
	const { title, description, date, readTime, tags, category } = frontmatter;

	return (
		<div className="min-h-screen bg-background">
			<Container className="py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Table of Contents - Left Sidebar */}
					{tableOfContents && tableOfContents.length > 0 && (
						<aside className="lg:col-span-1 order-2 lg:order-1">
							<div className="lg:sticky lg:top-8">
								<nav
									className="space-y-4 translate-y-0 lg:translate-y-30 pb-0 lg:pb-30"
									aria-label="Table of contents"
								>
									<h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
										Table of Contents
									</h3>
									<ul className="space-y-2">
										{tableOfContents.map((item) => (
											<li key={item.id}>
												<a
													href={`#${item.id}`}
													className={cn(
														"block text-sm transition-colors duration-200",
														"text-[var(--base-11)] hover:text-[var(--accent-11)]",
														"hover:underline hover:underline-offset-4",
														"decoration-[var(--accent-9)]",
														{
															"pl-0": item.level === 2,
															"pl-4": item.level === 3,
															"pl-8": item.level > 3,
														},
													)}
												>
													{item.title}
												</a>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</aside>
					)}

					{/* Main Content */}
					<div
						className={cn(
							"order-1 lg:order-2",
							tableOfContents ? "lg:col-span-3" : "lg:col-span-4",
						)}
					>
						<article className="max-w-3xl my-30 lg:my-0">
							{/* Article Header */}
							<header className="mb-12 space-y-6">
								{/* Metadata */}
								<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
									<time dateTime={date} className="font-medium">
										{new Date(date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</time>
									<span className="text-border">•</span>
									<Badge variant="secondary" className="text-xs font-medium">
										{category}
									</Badge>
									<span className="text-border">•</span>
									<div className="flex items-center gap-1.5">
										<Clock className="h-3.5 w-3.5" />
										<span>{readTime}</span>
									</div>
								</div>

								{/* Title */}
								<H1 className="mb-0">{title}</H1>

								{/* Description */}
								<P className="text-muted-foreground text-lg leading-relaxed">
									{description}
								</P>

								{/* Tags */}
								{tags.length > 0 && (
									<div className="flex flex-wrap gap-2 pt-2">
										{tags.map((tag) => (
											<Badge
												key={tag}
												variant="outline"
												className="text-xs font-normal"
											>
												{tag}
											</Badge>
										))}
									</div>
								)}
							</header>

							{/* Article Content with Link Styling */}
							<div
								className={cn(
									"max-w-none",
									// "prose-links",
									// Global link styles for article content
									"[&_a]:text-[var(--accent-11)]",
									"[&_a]:underline",
									"[&_a]:underline-offset-4",
									"[&_a]:decoration-[var(--accent-9)]",
									"[&_a]:transition-colors",
									"[&_a]:duration-200",
									"[&_a:hover]:text-[var(--accent-12)]",
									"[&_a:hover]:decoration-[var(--accent-11)]",
									"[&_a]:cursor-pointer",
								)}
							>
								{children}
							</div>
						</article>
					</div>
				</div>
			</Container>
		</div>
	);
}
