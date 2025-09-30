import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import {
	getPostBySlug,
	getAllPosts,
	generateTableOfContents,
	type BlogPost,
	type TableOfContentsItem,
} from "@/lib/blog";
import { BlogLayout } from "@/app/blog/BlogLayout";
import { H1, H2, H3 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";

interface BlogPostPageProps {
	params: {
		slug: string;
	};
}

interface MarkdownComponentProps {
	id?: string;
	className?: string;
	children?: React.ReactNode;
}

interface CodeComponentProps extends MarkdownComponentProps {
	inline?: boolean;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return {
			title: "Post Not Found",
			description: "The requested blog post could not be found.",
		};
	}

	return {
		title: post.title,
		description: post.description,
	};
}

const createMarkdownComponents = (): Components => ({
	h1: ({ id, children, ...props }: MarkdownComponentProps) => (
		<H1 id={id} className="scroll-mt-20" {...props}>
			{children}
		</H1>
	),
	h2: ({ id, children, ...props }: MarkdownComponentProps) => (
		<H2 id={id} className="scroll-mt-20 mt-12 mb-4" {...props}>
			{children}
		</H2>
	),
	h3: ({ id, children, ...props }: MarkdownComponentProps) => (
		<H3 id={id} className="scroll-mt-20 mt-8 mb-3" {...props}>
			{children}
		</H3>
	),
	p: ({ children, ...props }: MarkdownComponentProps) => (
		<P className="mb-4 leading-relaxed" {...props}>
			{children}
		</P>
	),
	pre: ({ children, ...props }: MarkdownComponentProps) => (
		<pre
			className="bg-muted p-4 rounded-lg overflow-x-auto border my-6"
			{...props}
		>
			{children}
		</pre>
	),
	code: ({ inline, children, ...props }: CodeComponentProps) => (
		<code
			className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border"
			{...props}
		>
			{children}
		</code>
	),
	ul: ({ children, ...props }: MarkdownComponentProps) => (
		<ul className="list-disc list-inside space-y-2 mb-4 ml-4" {...props}>
			{children}
		</ul>
	),
	ol: ({ children, ...props }: MarkdownComponentProps) => (
		<ol className="list-decimal list-inside space-y-2 mb-4 ml-4" {...props}>
			{children}
		</ol>
	),
	li: ({ children, ...props }: MarkdownComponentProps) => (
		<li className="text-foreground/90" {...props}>
			{children}
		</li>
	),
	hr: (props: MarkdownComponentProps) => (
		<hr className="my-8 border-border" {...props} />
	),
	blockquote: ({ children, ...props }: MarkdownComponentProps) => (
		<blockquote
			className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r-lg my-4"
			{...props}
		>
			{children}
		</blockquote>
	),
});

export default function BlogPostPage({
	params,
}: BlogPostPageProps): JSX.Element {
	const post: BlogPost | null = getPostBySlug(params.slug);

	if (!post) {
		notFound();
	}

	const tableOfContents: TableOfContentsItem[] = generateTableOfContents(
		post.content,
	);

	const markdownComponents = createMarkdownComponents();

	return (
		<BlogLayout
			frontmatter={{
				title: post.title,
				description: post.description,
				date: post.date,
				readTime: post.readTime,
				tags: post.tags,
				category: post.category,
			}}
			tableOfContents={tableOfContents}
		>
			<div className="prose prose-gray dark:prose-invert max-w-none">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={markdownComponents}
				>
					{post.content}
				</ReactMarkdown>
			</div>
		</BlogLayout>
	);
}
