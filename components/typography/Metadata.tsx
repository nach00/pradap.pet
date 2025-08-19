import React from "react";
import { cn } from "@/lib/utils";

interface MetadataProps {
	children: React.ReactNode;
	className?: string;
}

// Eyebrow text - appears above headlines
export const Eyebrow = ({ children, className }: MetadataProps) => (
	<div
		className={cn(
			"text-xs text-secondary-foreground font-bold uppercase tracking-wider font-mono",
			className,
		)}
	>
		{children}
	</div>
);

// Byline for author information
export const Byline = ({ children, className }: MetadataProps) => (
	<div className={cn("text-sm text-gray-600", className)}>By {children}</div>
);

// Dateline for publication dates
export const Dateline = ({
	children,
	className,
	dateTime,
}: MetadataProps & { dateTime?: string }) => (
	<time dateTime={dateTime} className={cn("text-sm text-gray-500", className)}>
		{children}
	</time>
);

// Caption text for images, videos, etc.
export const Caption = ({ children, className }: MetadataProps) => (
	<figcaption className={cn("text-sm text-gray-500 mt-2 italic", className)}>
		{children}
	</figcaption>
);

// Badge/tag component
export const Badge = ({
	children,
	className,
	variant = "default",
}: MetadataProps & {
	variant?:
		| "default"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "error";
}) => {
	const variants = {
		default: "bg-gray-100 text-gray-600",
		primary: "bg-blue-100 text-blue-800",
		secondary: "bg-purple-100 text-purple-800",
		success: "bg-green-100 text-green-800",
		warning: "bg-yellow-100 text-yellow-800",
		error: "bg-red-100 text-red-800",
	};

	return (
		<span
			className={cn(
				"inline-flex items-center px-2 py-1 rounded text-xs font-medium",
				variants[variant],
				className,
			)}
		>
			{children}
		</span>
	);
};

// Status indicator
export const Status = ({
	children,
	className,
	color = "gray",
}: MetadataProps & {
	color?: "gray" | "green" | "yellow" | "red" | "blue";
}) => {
	const colors = {
		gray: "bg-gray-500",
		green: "bg-green-500",
		yellow: "bg-yellow-500",
		red: "bg-red-500",
		blue: "bg-blue-500",
	};

	return (
		<div className={cn("flex items-center text-sm text-gray-600", className)}>
			<div className={cn("w-2 h-2 rounded-full mr-2", colors[color])}></div>
			{children}
		</div>
	);
};

// Timestamp component
export const Timestamp = ({
	children,
	className,
	relative,
}: MetadataProps & { relative?: boolean }) => (
	<time className={cn("text-xs text-gray-400", className)}>{children}</time>
);

// Category/tag link
export const CategoryTag = ({
	children,
	className,
	href,
}: MetadataProps & { href?: string }) => {
	const Component = href ? "a" : "span";
	return (
		<Component
			href={href}
			className={cn(
				"text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors",
				className,
			)}
		>
			{children}
		</Component>
	);
};
