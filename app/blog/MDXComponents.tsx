import { H1, H2, H3 } from "@/components/typography/Headings";

import { P } from "@/components/typography/TextElements";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import ScreenshotPreview from "@/app/work/ScreenshotPreview";

import {
	ReactNode,
	HTMLAttributes,
	AnchorHTMLAttributes,
	ImgHTMLAttributes,
} from "react";

// Type definitions
interface CodeBlockProps {
	children: ReactNode;
	className?: string;
}

interface InlineCodeProps {
	children: ReactNode;
}

interface BlockQuoteProps {
	children: ReactNode;
}

interface CustomImageProps
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

interface CustomLinkProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
	href: string;
	children: ReactNode;
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	id?: string;
	children: ReactNode;
}

interface ListProps
	extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
	children: ReactNode;
}

interface TableProps extends HTMLAttributes<HTMLTableElement> {
	children: ReactNode;
}

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
	children: ReactNode;
}

// Components
function CodeBlock({ children, className }: CodeBlockProps) {
	const language = className?.replace("language-", "") || "";
	return (
		<div className="relative">
			{language && (
				<div className="absolute top-2 right-2 text-xs text-[var(--base-11)] bg-[var(--base-3)] px-2 py-1 rounded">
					{language}
				</div>
			)}
			<pre
				className={`${className} bg-[var(--base-3)] p-4 rounded-lg overflow-x-auto border border-[var(--base-6)]`}
			>
				<code className="text-[var(--base-12)]">{children}</code>
			</pre>
		</div>
	);
}

function InlineCode({ children }: InlineCodeProps) {
	return (
		<code className="bg-[var(--base-4)] text-[var(--accent-11)] px-1.5 py-0.5 rounded text-sm font-mono border border-[var(--base-6)]">
			{children}
		</code>
	);
}

function BlockQuote({ children }: BlockQuoteProps) {
	return (
		<blockquote className="border-l-4 border-[var(--accent-9)] pl-4 py-2 bg-[var(--accent-2)] text-[var(--base-12)] rounded-r-lg my-4">
			{children}
		</blockquote>
	);
}

function CustomImage({
	src,
	alt,
	// width = 800,
	// height = 600,
	// ...props
}: CustomImageProps) {
	return (
		<div className="my-8">
			<ScreenshotPreview imageSrc={src} description={alt} />
			{/* <Image */}
			{/* 	src={src} */}
			{/* 	alt={alt} */}
			{/* 	width={width} */}
			{/* 	height={height} */}
			{/* 	className="rounded-lg border border-[var(--base-6)] shadow-sm" */}
			{/* 	{...props} */}
			{/* /> */}
			{alt && (
				<p className="text-sm text-[var(--base-11)] text-center mt-2 italic">
					{alt}
				</p>
			)}
		</div>
	);
}

// <ScreenshotPreview
// imageSrc="/images/scoutify/scoutify-wireframe-3.png"
// description="Refined athlete profile wireframes"
// />

// function CustomLink({ href, children, className, ...props }: CustomLinkProps) {
// 	const isExternal = href.startsWith("http");
//
// 	// Override prose styles with !important equivalent classes
// 	const linkClasses = `
//     !text-[var(--accent-11)]
//     hover:!text-[var(--accent-12)]
//     !underline
//     !underline-offset-2
//     !decoration-[var(--accent-11)]
//     hover:!decoration-[var(--accent-12)]
//     !cursor-pointer
//     !transition-colors
//     !duration-200
//     prose-a:!text-[var(--accent-11)]
//     prose-a:hover:!text-[var(--accent-12)]
//     ${className || ""}
//   `
// 		.trim()
// 		.replace(/\s+/g, " ");
//
// 	if (isExternal) {
// 		return (
// 			<a
// 				href={href}
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={linkClasses}
// 				{...props}
// 			>
// 				{children}
// 			</a>
// 		);
// 	}
//
// 	return (
// 		<Link href={href} className={linkClasses} {...props}>
// 			{children}
// 		</Link>
// 	);
// }

// MDX Components mapping
export const mdxComponents = {
	// Headings
	h1: ({ id, className, ...props }: HeadingProps) => (
		<H1 id={id} className={`scroll-mt-20 ${className || ""}`} {...props} />
	),
	h2: ({ id, className, ...props }: HeadingProps) => (
		<H2
			id={id}
			className={`scroll-mt-20 mt-12 mb-4 ${className || ""}`}
			{...props}
		/>
	),
	h3: ({ id, className, ...props }: HeadingProps) => (
		<H3
			id={id}
			className={`scroll-mt-20 mt-8 mb-3 ${className || ""}`}
			{...props}
		/>
	),

	// Text elements
	p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
		<P
			className={`mb-4 leading-relaxed text-[var(--base-12)] ${className || ""}`}
			{...props}
		/>
	),

	// Code
	pre: CodeBlock,
	code: InlineCode,

	// Other elements
	blockquote: BlockQuote,
	img: CustomImage,
	// a: CustomLink,

	a: ({ className, href, ...props }) => (
		<Link
			href={href}
			className={`mb-4 leading-relaxed text-[var(--base-12)] ${className || ""}`}
			{...props}
		/>
	),

	// Lists
	ul: ({ className, ...props }: ListProps) => (
		<ul
			className={`list-disc list-inside space-y-2 mb-4 ml-4 text-[var(--base-12)] ${className || ""}`}
			{...props}
		/>
	),
	ol: ({ className, ...props }: ListProps) => (
		<ol
			className={`list-decimal list-inside space-y-2 mb-4 ml-4 text-[var(--base-12)] ${className || ""}`}
			{...props}
		/>
	),
	li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
		<li className={`text-[var(--base-11)] ${className || ""}`} {...props} />
	),

	// Tables
	table: ({ className, ...props }: TableProps) => (
		<div className="overflow-x-auto my-6">
			<table
				className={`w-full border-collapse border border-[var(--base-6)] rounded-lg ${className || ""}`}
				{...props}
			/>
		</div>
	),
	th: ({ className, ...props }: TableCellProps) => (
		<th
			className={`border border-[var(--base-6)] bg-[var(--base-3)] text-[var(--base-12)] p-3 text-left font-semibold ${className || ""}`}
			{...props}
		/>
	),
	td: ({ className, ...props }: TableCellProps) => (
		<td
			className={`border border-[var(--base-6)] text-[var(--base-12)] p-3 ${className || ""}`}
			{...props}
		/>
	),

	// Horizontal rule
	hr: ({ className, ...props }: HTMLAttributes<HTMLHRElement>) => (
		<hr
			className={`my-8 border-[var(--base-6)] ${className || ""}`}
			{...props}
		/>
	),
};
