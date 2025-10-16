import { H1, H2, H3 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import Link from "next/link";
import ScreenshotPreview from "@/app/work/ScreenshotPreview";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { type TypographyProps } from "@/components/typography/Typography";
import { cn } from "@/lib/utils";

// Utility type for component props
type PropsOf<T extends keyof JSX.IntrinsicElements> =
	ComponentPropsWithoutRef<T>;

// Base component props with common patterns
// interface BaseProps {
// 	children: ReactNode;
// 	className?: string;
// }

// Specific component props
// interface CodeBlockProps extends BaseProps {
// className?: string;
// }

interface CustomImageProps extends Omit<PropsOf<"img">, "src" | "alt"> {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

// interface HeadingProps extends PropsOf<"h1"> {
// id?: string;
// }

// Utility function for class merging
// const cn = (...classes: (string | undefined)[]) =>
// classes.filter(Boolean).join(" ");

// Component definitions
const CodeBlock = ({ children, className }: TypographyProps) => {
	const language = className?.replace("language-", "") || "";

	return (
		<div className="relative">
			{language && (
				<div className="absolute top-2 right-2 text-xs text-[var(--base-11)] bg-[var(--base-3)] px-2 py-1 rounded">
					{language}
				</div>
			)}
			<pre
				className={cn(
					className,
					"bg-[var(--base-3)] p-4 rounded-lg overflow-x-auto border border-[var(--base-6)]",
				)}
			>
				<code className="text-[var(--base-12)]">{children}</code>
			</pre>
		</div>
	);
};

const InlineCode = ({ children }: TypographyProps) => (
	<code className="bg-[var(--base-4)] text-[var(--accent-11)] px-1.5 py-0.5 rounded text-sm font-mono border border-[var(--base-6)]">
		{children}
	</code>
);

const BlockQuote = ({ children }: TypographyProps) => (
	<blockquote className="border-l-4 border-[var(--accent-9)] pl-4 py-2 bg-[var(--accent-2)] text-[var(--base-12)] rounded-r-lg my-4">
		{children}
	</blockquote>
);

const CustomImage = ({ src, alt }: CustomImageProps) => (
	<div className="my-8">
		<ScreenshotPreview imageSrc={src} description={alt} />
		{alt && (
			<p className="text-sm text-[var(--base-11)] text-center mt-2 italic">
				{alt}
			</p>
		)}
	</div>
);

interface CustomLinkProps
	extends Omit<ComponentPropsWithoutRef<typeof Link>, "href"> {
	readonly href: string;
	readonly children: ReactNode;
	readonly className?: string;
	readonly external?: boolean;
	readonly underline?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
	href,
	className,
	children,
	external = false,
	underline = false,
	...props
}) => {
	const linkClassName = cn(
		"text-[var(--base-12)] transition-colors duration-200",
		underline && "underline underline-offset-2",
		"hover:text-[var(--accent-11)]",
		className,
	);

	// Determine if link is external
	const isExternal =
		external || href.startsWith("http") || href.startsWith("//");

	// Handle external links - ALWAYS open in new tab to avoid iframe issues
	if (isExternal) {
		return (
			<a
				href={href}
				className={linkClassName}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			>
				{children}
				{/* Optional external link indicator */}
				<span className="sr-only">(opens in new tab)</span>
			</a>
		);
	}

	// Internal links use Next.js Link
	return (
		<Link href={href} className={linkClassName} {...props}>
			{children}
		</Link>
	);
};

// MDX component mappings
export const mdxComponents = {
	// Headings with scroll margin and consistent spacing
	h1: ({ id, className, ...props }: TypographyProps) => (
		<H1 id={id} className={cn("scroll-mt-20", className)} {...props} />
	),
	h2: ({ id, className, ...props }: TypographyProps) => (
		<H2
			id={id}
			className={cn("scroll-mt-20 mt-12 mb-4", className)}
			{...props}
		/>
	),
	h3: ({ id, className, ...props }: TypographyProps) => (
		<H3
			id={id}
			className={cn("scroll-mt-20 mt-8 mb-3", className)}
			{...props}
		/>
	),

	// Text content
	p: ({ className, ...props }: TypographyProps) => (
		<P
			className={cn("mb-4 leading-relaxed text-[var(--base-12)]", className)}
			{...props}
		/>
	),

	// Code blocks
	pre: CodeBlock,
	code: InlineCode,

	// Rich content
	blockquote: BlockQuote,
	img: CustomImage,
	a: CustomLink,

	// Lists with proper spacing
	ul: ({ className, ...props }: TypographyProps) => (
		<ul
			className={cn(
				"list-disc list-inside space-y-2 mb-4 ml-4 text-[var(--base-12)]",
				className,
			)}
			{...props}
		/>
	),
	ol: ({ className, ...props }: TypographyProps) => (
		<ol
			className={cn(
				"list-decimal list-inside space-y-2 mb-4 ml-4 text-[var(--base-12)]",
				className,
			)}
			{...props}
		/>
	),
	li: ({ className, ...props }: TypographyProps) => (
		<li className={cn("text-[var(--base-11)]", className)} {...props} />
	),

	// Tables with responsive wrapper
	table: ({ className, ...props }: TypographyProps) => (
		<div className="overflow-x-auto my-6">
			<table
				className={cn(
					"w-full border-collapse border border-[var(--base-6)] rounded-lg",
					className,
				)}
				{...props}
			/>
		</div>
	),
	th: ({ className, ...props }: TypographyProps) => (
		<th
			className={cn(
				"border border-[var(--base-6)] bg-[var(--base-3)] text-[var(--base-12)] p-3 text-left font-semibold",
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }: TypographyProps) => (
		<td
			className={cn(
				"border border-[var(--base-6)] text-[var(--base-12)] p-3",
				className,
			)}
			{...props}
		/>
	),

	// Divider
	hr: ({ className, ...props }: TypographyProps) => (
		<hr className={cn("my-8 border-[var(--base-6)]", className)} {...props} />
	),
};
