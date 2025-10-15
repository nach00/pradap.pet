import PageHeader from "@/components/layout/PageHeader";
import { cn } from "@/lib/utils";
import { getAllPosts } from "@/lib/blog";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { H1, H2, H3, H4, H6 } from "@/components/typography/Headings";
import { P, Small } from "@/components/typography/TextElements";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { type BlogPost } from "@/lib/blog";

import Image from "next/image";
import type { Metadata } from "next";
const pageTitle: string = "Blog";
const pageDescription: string =
	"Thoughts on design engineering, technology, and the intersection of creativity and code.";

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

function Card({
	slug,
	title,
	description,
	date,
	readTime,
	tags,
	category,
	cardPreviewImage,
}: BlogPost) {
	return (
		<>
			<article className={cn("group")}>
				<Link href={`/blog/${slug}`} className="block">
					<div
						className={cn(
							"flex flex-col border border-[var(--base-7)] rounded-md shadow-md overflow-clip",
							"hover:-translate-y-1 transition-all",
						)}
					>
						<div
							className={cn(
								"bg-[var(--accent-3)] max-h-60 flex items-center justify-center font-mono text-xl text-[var(--accent-11)]",
							)}
						>
							{cardPreviewImage ? (
								<Image
									src={cardPreviewImage}
									width={800}
									height={600}
									alt={title}
								/>
							) : (
								<H4>Placeholder</H4>
							)}
						</div>
						<div className={cn("bg-[var(--base-3)] p-8 flex flex-col gap-4")}>
							<div className={cn("flex flex-col sm:flex-row justify-between")}>
								<div className="flex items-center gap-1">
									<Calendar className="h-3 w-3" />
									<time dateTime={date}>
										{new Date(date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</time>
								</div>

								<div className="flex items-center gap-1">
									<Clock className="h-3 w-3" />
									<span>{readTime}</span>
								</div>
							</div>

							<H3 className={cn("group-hover:text-[var(--accent-11)]")}>
								{title}
							</H3>
							<P>{description}</P>

							<div className="flex flex-wrap gap-2 mt-4">
								<Badge variant="default" className="text-xs">
									{category}
								</Badge>
								{tags.slice(0, 3).map((tag) => (
									<Badge key={tag} variant="outline" className="text-xs">
										{tag}
									</Badge>
								))}
								{tags.length > 3 && (
									<Badge variant="outline" className="text-xs">
										+{tags.length - 3}
									</Badge>
								)}
							</div>
							<H6
								className={cn(
									"py-6",
									"group-hover:underline group-hover:underline-offset-3",
								)}
							>
								Read full post →
							</H6>
						</div>
					</div>
				</Link>
			</article>
		</>
	);
}

export default function BlogPage() {
	const posts = getAllPosts();
	console.log("Posts found:", posts.length, posts);
	const otherPosts = posts.slice(0);

	return (
		<>
			{/* Hero Section */}

			<Section>
				<Container>
					<PageHeader title={pageTitle} description={pageDescription} />
				</Container>
			</Section>

			<Section>
				<Container>
					{posts.length > 0 ? (
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
							{otherPosts.map((post) => (
								<Card key={post.slug} {...post} />
							))}
						</div>
					) : (
						<div className="text-center py-12">
							<P className="text-muted-foreground">No posts found.</P>
						</div>
					)}
				</Container>
			</Section>
		</>
	);
}
