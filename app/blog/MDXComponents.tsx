import { H1, H2, H3 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CodeBlockProps {
	children: ReactNode;
	className?: string;
}

function CodeBlock({ children, className }: CodeBlockProps) {
	const language = className?.replace("language-", "") || "";

	return (
		<div className="relative">
			{language && (
				<div
					className="absolute top-2 right-2 text-xs text-muted-foreground
  bg-muted px-2 py-1 rounded"
				>
					{language}
				</div>
			)}
			<pre
				className={`${className} bg-muted p-4 rounded-lg overflow-x-auto
  border`}
			>
				<code>{children}</code>
			</pre>
		</div>
	);
}

function InlineCode({ children }: { children: ReactNode }) {
	return (
		<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border">
			{children}
		</code>
	);
}

function BlockQuote({ children }: { children: ReactNode }) {
	return (
		<blockquote
			className="border-l-4 border-accent pl-4 py-2 bg-accent/5
  rounded-r-lg my-4"
		>
			{children}
		</blockquote>
	);
}

function CustomImage({ src, alt, ...props }: any) {
	return (
		<div className="my-8">
			<Image
				src={src}
				alt={alt}
				width={800}
				height={600}
				className="rounded-lg border shadow-sm"
				{...props}
			/>
			{alt && (
				<p className="text-sm text-muted-foreground text-center mt-2 italic">
					{alt}
				</p>
			)}
		</div>
	);
}

function CustomLink({ href, children, ...props }: any) {
	const isExternal = href?.startsWith("http");

	if (isExternal) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-accent hover:text-accent/80 underline underline-offset-2"
				{...props}
			>
				{children}
			</a>
		);
	}

	return (
		<Link
			href={href}
			className="text-accent hover:text-accent/80 underline underline-offset-2"
			{...props}
		>
			{children}
		</Link>
	);
}

export const mdxComponents = {
	// Headings
	h1: (props: any) => <H1 id={props.id} className="scroll-mt-20" {...props} />,
	h2: (props: any) => (
		<H2 id={props.id} className="scroll-mt-20 mt-12 mb-4" {...props} />
	),
	h3: (props: any) => (
		<H3 id={props.id} className="scroll-mt-20 mt-8 mb-3" {...props} />
	),

	// Text elements
	p: (props: any) => <P className="mb-4 leading-relaxed" {...props} />,

	// Code
	pre: CodeBlock,
	code: InlineCode,

	// Other elements
	blockquote: BlockQuote,
	img: CustomImage,
	a: CustomLink,

	// Lists
	ul: (props: any) => (
		<ul className="list-disc list-inside space-y-2 mb-4 ml-4" {...props} />
	),
	ol: (props: any) => (
		<ol className="list-decimal list-inside space-y-2 mb-4 ml-4" {...props} />
	),
	li: (props: any) => <li className="text-foreground/90" {...props} />,

	// Tables
	table: (props: any) => (
		<div className="overflow-x-auto my-6">
			<table
				className="w-full border-collapse border border-border rounded-lg"
				{...props}
			/>
		</div>
	),
	th: (props: any) => (
		<th
			className="border border-border bg-muted p-3 text-left font-semibold"
			{...props}
		/>
	),
	td: (props: any) => <td className="border border-border p-3" {...props} />,

	// Horizontal rule
	hr: (props: any) => <hr className="my-8 border-border" {...props} />,
};
