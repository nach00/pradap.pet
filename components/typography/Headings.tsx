import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
	children: React.ReactNode;
	className?: string;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

// Main flexible heading component
export const Heading = ({ children, className, as = "h2" }: HeadingProps) => {
	const Component = as;
	return (
		<Component className={cn("font-normal text-gray-900", className)}>
			{children}
		</Component>
	);
};

// Specific heading components with semantic defaults
export const Headline = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<h1
		className={cn(
			"font-light text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight",
			className,
		)}
	>
		{children}
	</h1>
);

export const Subheading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<h2 className={cn("font-normal text-2xl mb-6 text-gray-900", className)}>
		{children}
	</h2>
);

export const SectionHeading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<h3 className={cn("font-normal text-xl mb-4 text-gray-900", className)}>
		{children}
	</h3>
);

export const SubsectionHeading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<h4 className={cn("font-normal text-lg mb-3 text-gray-900", className)}>
		{children}
	</h4>
);

export const MinorHeading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<h5 className={cn("font-normal text-base mb-2 text-gray-900", className)}>
		{children}
	</h5>
);

export const SmallHeading = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<h6
		className={cn(
			"font-normal text-sm mb-2 text-gray-900 uppercase tracking-wider",
			className,
		)}
	>
		{children}
	</h6>
);
