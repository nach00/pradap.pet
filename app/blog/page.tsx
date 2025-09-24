import { getAllPosts } from "@/lib/blog";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { H1, H2 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
	title: "Blog - Natcha Pradappet",
	description:
		"Thoughts on design engineering, technology, and the intersection of creativity and code.",
};

interface BlogCardProps {
	slug: string;
	title: string;
	description: string;
	date: string;
	readTime: string;
	tags: string[];
	category: string;
}

function BlogCard({
	slug,
	title,
	description,
	date,
	readTime,
	tags,
	category,
}: BlogCardProps) {
	return (
		<article className="group">
			<Link href={`/blog/${slug}`} className="block">
				<div className="border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-200 hover:shadow-sm">
					{/* Header */}
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-3 text-sm text-muted-foreground">
							<div className="flex items-center gap-1">
								<Calendar className="h-3 w-3" />
								<time dateTime={date}>
									{new Date(date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "short",
										day: "numeric",
									})}
								</time>
							</div>
							<Badge variant="secondary" className="text-xs">
								{category}
							</Badge>
							<div className="flex items-center gap-1">
								<Clock className="h-3 w-3" />
								<span>{readTime}</span>
							</div>
						</div>
						<ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
					</div>

					{/* Content */}
					<div className="space-y-3">
						<H2 className="group-hover:text-accent transition-colors duration-200">
							{title}
						</H2>
						<P className="text-muted-foreground line-clamp-2">{description}</P>
					</div>

					{/* Tags */}
					<div className="flex flex-wrap gap-2 mt-4">
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
				</div>
			</Link>
		</article>
	);
}

function BlogStats({ posts }: { posts: any[] }) {
	const totalPosts = posts.length;
	const categories = [...new Set(posts.map((post) => post.category))];
	const totalTags = [...new Set(posts.flatMap((post) => post.tags))].length;

	return (
		<div className="grid grid-cols-3 gap-4 p-6 border border-border rounded-lg bg-card/50">
			<div className="text-center">
				<div className="text-2xl font-bold text-foreground">{totalPosts}</div>
				<div className="text-sm text-muted-foreground">Posts</div>
			</div>
			<div className="text-center">
				<div className="text-2xl font-bold text-foreground">{categories.length}</div>
				<div className="text-sm text-muted-foreground">Categories</div>
			</div>
			<div className="text-center">
				<div className="text-2xl font-bold text-foreground">{totalTags}</div>
				<div className="text-sm text-muted-foreground">Topics</div>
			</div>
		</div>
	);
}

function FeaturedCategories({ posts }: { posts: any[] }) {
	const categoryCount = posts.reduce(
		(acc, post) => {
			acc[post.category] = (acc[post.category] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	const categories = Object.entries(categoryCount)
		.sort(([, a], [, b]) => b - a)
		.slice(0, 6);

	return (
		<div className="space-y-4">
			<H2 className="text-lg">Browse by Category</H2>
			<div className="flex flex-wrap gap-2">
				{categories.map(([category, count]) => (
					<Badge key={category} variant="secondary" className="text-sm">
						{category} ({count})
					</Badge>
				))}
			</div>
		</div>
	);
}

export default function BlogPage() {
	const posts = getAllPosts();
	console.log('Posts found:', posts.length, posts);
	const featuredPost = posts[0]; // Most recent post as featured
	const otherPosts = posts.slice(1);

	return (
		<>
			{/* Hero Section */}
			<Section className="pt-24 pb-12">
				<Container>
					<div className="space-y-6">
						<div className="space-y-4">
							<H1>Blog</H1>
							<P className="text-lg text-muted-foreground max-w-2xl">
								Thoughts on design engineering, technology, and the intersection
								of creativity and code.
							</P>
						</div>

						<BlogStats posts={posts} />
					</div>
				</Container>
			</Section>

			{/* Featured Post */}
			{featuredPost && (
				<Section className="py-12 border-t border-border">
					<Container>
						<div className="space-y-6">
							<div className="flex items-center justify-between">
								<H2>Featured Post</H2>
								<Badge variant="secondary">Latest</Badge>
							</div>

							<div className="grid lg:grid-cols-2 gap-8 items-center">
								<div className="space-y-4">
									<div className="flex items-center gap-3 text-sm text-muted-foreground">
										<div className="flex items-center gap-1">
											<Calendar className="h-3 w-3" />
											<time dateTime={featuredPost.date}>
												{new Date(featuredPost.date).toLocaleDateString(
													"en-US",
													{
														year: "numeric",
														month: "long",
														day: "numeric",
													},
												)}
											</time>
										</div>
										<Badge variant="secondary" className="text-xs">
											{featuredPost.category}
										</Badge>
										<div className="flex items-center gap-1">
											<Clock className="h-3 w-3" />
											<span>{featuredPost.readTime}</span>
										</div>
									</div>

									<H1 className="text-3xl lg:text-4xl">
										<Link
											href={`/blog/${featuredPost.slug}`}
											className="hover:text-accent transition-colors"
										>
											{featuredPost.title}
										</Link>
									</H1>

									<P className="text-lg text-muted-foreground">
										{featuredPost.description}
									</P>

									<div className="flex flex-wrap gap-2">
										{featuredPost.tags.slice(0, 4).map((tag) => (
											<Badge key={tag} variant="outline" className="text-xs">
												{tag}
											</Badge>
										))}
									</div>

									<Link
										href={`/blog/${featuredPost.slug}`}
										className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
									>
										Read full post
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>

								<div className="lg:order-first">
									<div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-border flex items-center justify-center">
										<div className="text-center space-y-2">
											<div className="text-6xl font-custom text-accent">✦</div>
											<P className="text-sm text-muted-foreground">
												Featured Post
											</P>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</Section>
			)}

			{/* All Posts */}
			<Section className="py-12 border-t border-border">
				<Container>
					<div className="space-y-8">
						<div className="flex items-center justify-between">
							<H2>All Posts</H2>
							<P className="text-sm text-muted-foreground">
								{posts.length} {posts.length === 1 ? "post" : "posts"}
							</P>
						</div>

						{posts.length > 0 ? (
							<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
								{otherPosts.map((post) => (
									<BlogCard key={post.slug} {...post} />
								))}
							</div>
						) : (
							<div className="text-center py-12">
								<P className="text-muted-foreground">No posts found.</P>
							</div>
						)}
					</div>
				</Container>
			</Section>

			{/* Categories */}
			{posts.length > 0 && (
				<Section className="py-12 border-t border-border">
					<Container>
						<FeaturedCategories posts={posts} />
					</Container>
				</Section>
			)}
		</>
	);
}