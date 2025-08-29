import { TagId, TagStatus, TagType, TagYear } from "@/components/ProjectBadges";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArchivedItemProps {
	href?: string;
	id: string;
	year: string;
	status: string;
	category: string;
	title: string;
	lede?: string;
	description?: string;
	className?: string;
	duty?: string;
	industry?: string;
}

export function ArchivedItem({
	href,
	id,
	year,
	status,
	category,
	title,
	lede,
	className,
	duty,
	industry,
}: ArchivedItemProps) {
	const baseClasses = cn(
		"flex",
		"flex-row",
		"border-b",
		"items-baseline",
		"gap-4",
		"p-4",
		"transition-all",
		"duration-200",
		href ? "cursor-pointer hover:shadow-md" : "opacity-60",
		className,
	);

	const content = (
		<>
			<div className="w-10">
				<TagId>{id}</TagId>
			</div>
			<div className="w-20">
				<TagYear>{year}</TagYear>
			</div>
			<div className="w-50">
				<TagStatus>{status}</TagStatus>
			</div>
			<div className="w-50">
				<TagType>{category}</TagType>
			</div>
			<span
				className={cn(
					"font-medium",
					href
						? "text-[var(--accent-11)] hover:text-[var(--accent-11)] hover:underline"
						: "text-[var(--base-9)]",
				)}
			>
				{title}
			</span>
		</>
	);

	if (href) {
		return (
			<Link className={baseClasses} href={href}>
				{content}
			</Link>
		);
	}

	return <span className={baseClasses}>{content}</span>;
}
