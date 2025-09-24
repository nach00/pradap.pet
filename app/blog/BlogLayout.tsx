"use client";

import { ReactNode } from "react";
import Container from "@/components/layout/Container";
import { H1 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

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
			{/* Header */}
			{/* 	<div */}
			{/* 		className="border-b border-border bg-background/95 backdrop-blur */}
			{/* supports-[backdrop-filter]:bg-background/60" */}
			{/* 	> */}
			{/* 		<Container className="py-4"> */}
			{/* 			<div className="flex items-center justify-between"> */}
			{/* 				<div className="flex items-center gap-4"> */}
			{/* 					<Link */}
			{/* 						href="/blog" */}
			{/* 						className="flex items-center gap-2 text-muted-foreground */}
			{/* hover:text-foreground transition-colors" */}
			{/* 					> */}
			{/* 						<ArrowLeft className="h-4 w-4" /> */}
			{/* 						Back to Blog */}
			{/* 					</Link> */}
			{/* 				</div> */}
			{/* 				<div className="text-muted-foreground text-sm">Theme</div> */}
			{/* 			</div> */}
			{/* 		</Container> */}
			{/* 	</div> */}

			<Container className="py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Table of Contents - Left Sidebar */}
					{tableOfContents && tableOfContents.length > 0 && (
						<div className="lg:col-span-1 order-2 lg:order-1">
							<div className="fixed mt-30">
								<div className="space-y-4">
									<h3 className="font-semibold text-foreground">
										Table of Contents
									</h3>
									<nav className="space-y-2">
										{tableOfContents.map((item) => (
											<a
												key={item.id}
												href={`#${item.id}`}
												className={`block text-sm text-muted-foreground
  hover:text-foreground transition-colors ${
		item.level === 2 ? "pl-0" : item.level === 3 ? "pl-4" : "pl-8"
	}`}
											>
												{item.title}
											</a>
										))}
									</nav>
								</div>
							</div>
						</div>
					)}

					{/* Main Content */}
					<div
						className={`${tableOfContents ? "lg:col-span-3" : "lg:col-span-4"}
  order-1 lg:order-2`}
					>
						<article className="max-w-3xl">
							{/* Article Header */}
							<header className="mb-8">
								<div
									className="flex items-center gap-2 mb-4 text-sm
  text-muted-foreground"
								>
									<time dateTime={date}>
										{new Date(date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</time>
									<Badge variant="secondary" className="text-xs">
										{category}
									</Badge>
									<div className="flex items-center gap-1">
										<Clock className="h-3 w-3" />
										<span>{readTime}</span>
									</div>
								</div>

								<H1 className="mb-4">{title}</H1>

								<P className="text-muted-foreground mb-6 text-lg">
									{description}
								</P>

								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{tags.map((tag) => (
										<Badge key={tag} variant="outline" className="text-xs">
											{tag}
										</Badge>
									))}
								</div>
							</header>

							{/* Article Content */}
							<div className="prose prose-gray dark:prose-invert max-w-none">
								{children}
							</div>
						</article>
					</div>
				</div>
			</Container>
		</div>
	);
}
