import { notFound } from "next/navigation";
import {
	getPostBySlug,
	getAllPosts,
	generateTableOfContents,
} from "@/lib/blog";
import { BlogLayout } from "@/app/blog/BlogLayout";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { H1, H2, H3 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";

interface BlogPostPageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return {};
	}

	return {
		title: post.title,
		description: post.description,
	};
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		notFound();
	}

	const tableOfContents = generateTableOfContents(post.content);

	const components = {
		h1: (props: any) => <H1 id={props.id} className="scroll-mt-20" {...props} />,
		h2: (props: any) => <H2 id={props.id} className="scroll-mt-20 mt-12 mb-4" {...props} />,
		h3: (props: any) => <H3 id={props.id} className="scroll-mt-20 mt-8 mb-3" {...props} />,
		p: (props: any) => <P className="mb-4 leading-relaxed" {...props} />,
		pre: (props: any) => (
			<pre className="bg-muted p-4 rounded-lg overflow-x-auto border my-6" {...props} />
		),
		code: (props: any) => (
			<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border" {...props} />
		),
		ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-4 ml-4" {...props} />,
		ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-4 ml-4" {...props} />,
		li: (props: any) => <li className="text-foreground/90" {...props} />,
		hr: (props: any) => <hr className="my-8 border-border" {...props} />,
		blockquote: (props: any) => (
			<blockquote className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r-lg my-4" {...props} />
		),
	};

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
					components={components}
				>
					{post.content}
				</ReactMarkdown>
			</div>
		</BlogLayout>
	);
}