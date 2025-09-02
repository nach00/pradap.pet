import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Base typography variant using Whirly Birdie variable font
export const typographyVariants = cva(
	// Base classes for all text elements
	"font-birdie antialiased",
	{
		variants: {
			// Font weight variants
			weight: {
				"narrow-light": "font-extralight font-stretch-condensed",
				narrow: "font-normal font-stretch-condensed",
				"narrow-bold": "font-bold font-stretch-condensed",
				light: "font-light font-stretch-normal",
				regular: "font-normal font-stretch-normal",
				bold: "font-bold font-stretch-normal",
				"wide-light": "font-light font-stretch-expanded",
				wide: "font-normal font-stretch-expanded",
				"wide-bold": "font-bold font-stretch-expanded",
			},
			// Font style variants
			style: {
				normal: "",
				italic: "italic",
			},
			// Size variants matching your resume
			size: {
				xs: "text-xs leading-tight",
				sm: "text-sm leading-snug",
				base: "text-base leading-normal",
				lg: "text-lg leading-relaxed",
				xl: "text-xl leading-relaxed",
				"2xl": "text-2xl leading-tight",
				"3xl": "text-3xl leading-tight",
				"4xl": "text-4xl leading-none",
				"5xl": "text-5xl leading-none",
			},
			// Text color variants using your color system
			color: {
				primary: "text-[var(--base-12)]",
				secondary: "text-[var(--base-11)]",
				accent: "text-[var(--accent-11)]",
				muted: "text-[var(--base-9)]",
			},
			// Letter spacing
			tracking: {
				tight: "tracking-tight",
				normal: "tracking-normal",
				wide: "tracking-wide",
				wider: "tracking-wider",
			},
			// Text transform
			transform: {
				none: "",
				uppercase: "uppercase",
				lowercase: "lowercase",
				capitalize: "capitalize",
			},
		},
		defaultVariants: {
			weight: "regular",
			style: "normal",
			size: "base",
			color: "primary",
			tracking: "normal",
			transform: "none",
		},
	},
);

export type TypographyProps = VariantProps<typeof typographyVariants> & {
	children: React.ReactNode;
	className?: string;
	as?: React.ElementType;
} & Omit<React.HTMLAttributes<HTMLElement>, "color">;

// Base Typography component
export function Typography({
	children,
	className,
	as = "p",
	weight,
	style,
	size,
	color,
	tracking,
	transform,
	...props
}: TypographyProps) {
	const Component = as;

	return React.createElement(
		Component,
		{
			className: cn(
				typographyVariants({ weight, style, size, color, tracking, transform }),
				className,
			),
			...props,
		},
		children,
	);
}

// Specialized components matching your resume styles

// Large name/title (matching "NATCHA PRADAPPET")
export function DisplayName({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h1"
			size="2xl"
			weight="narrow-bold"
			transform="uppercase"
			tracking="wider"
			color="accent"
			className={cn("mb-1", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Job title (matching "CREATIVE DEVELOPER")
export function JobTitle({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h2"
			size="5xl"
			weight="wide-bold"
			transform="uppercase"
			tracking="tight"
			color="primary"
			className={cn("mb-6", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Section headings (matching "CONTACT", "EDUCATION", etc.)
export function SectionHeading({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h3"
			size="lg"
			weight="bold"
			transform="uppercase"
			tracking="wide"
			color="primary"
			className={cn("mb-4", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Job/Company titles (matching "CO-FOUNDER", "UX SPECIALIST")
export function RoleTitle({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h4"
			size="xl"
			weight="wide-bold"
			transform="uppercase"
			tracking="normal"
			color="primary"
			className={cn("mb-1", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Company/Organization names (matching "PLANET NACHO", "ALTCADEMY")
export function CompanyName({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h5"
			size="sm"
			weight="narrow-bold"
			transform="uppercase"
			tracking="wider"
			color="secondary"
			className={cn("mb-2", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Date ranges and location info (matching "2019-NOW • DALLAS, TX")
export function MetaInfo({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="span"
			size="xs"
			weight="regular"
			transform="uppercase"
			tracking="wide"
			color="accent"
			className={cn("", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Body text for descriptions
export function BodyText({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="p"
			size="sm"
			weight="regular"
			color="secondary"
			className={cn("leading-relaxed", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Contact info and links
export function ContactInfo({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="span"
			size="sm"
			weight="regular"
			color="primary"
			className={className}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Award/Achievement names (matching "1ST PLACE", "2ND PLACE")
export function AwardTitle({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h4"
			size="xl"
			weight="wide-bold"
			transform="uppercase"
			tracking="tight"
			color="primary"
			className={cn("mb-1", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Degree titles (matching "M.B.A.", "B.B.A.")
export function DegreeTitle({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="h4"
			size="xl"
			weight="wide-bold"
			transform="uppercase"
			tracking="normal"
			color="primary"
			className={cn("mb-1", className)}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Specialization text (matching "FULL STACK DEVELOPMENT", "STRATEGY")
export function Specialization({
	children,
	className,
	...props
}: Omit<TypographyProps, "as">) {
	return (
		<Typography
			as="span"
			size="xs"
			weight="regular"
			transform="uppercase"
			tracking="wider"
			color="accent"
			className={className}
			{...props}
		>
			{children}
		</Typography>
	);
}

// Export all components
// export { typographyVariants, type TypographyProps };

// Usage examples:
/*
<DisplayName>Natcha Pradappet</DisplayName>
<JobTitle>Creative Developer</JobTitle>

<SectionHeading>Experience</SectionHeading>
<CompanyName>Planet Nacho</CompanyName>
<RoleTitle>Co-Founder</RoleTitle>
<MetaInfo>2019-Now • Dallas, TX • On-Site • Agency</MetaInfo>
<BodyText>
  Co-founded design/development studio serving 5+ clients...
</BodyText>

<SectionHeading>Education</SectionHeading>
<CompanyName>Altcademy</CompanyName>
<DegreeTitle>Certificate</DegreeTitle>
<MetaInfo>2025</MetaInfo>
<Specialization>Online • Full Stack Development</Specialization>
*/
