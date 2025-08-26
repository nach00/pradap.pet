import { TagId, TagStatus, TagType, TagYear } from "@/components/ProjectBadges";
import Link from "next/link";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArchivedItemProps {
	href: string;
	tagId: string;
	tagYear: string;
	tagStatus: string;
	tagCategory: string;
	title: string;
	lede: string;
	description?: string;
	className?: string;
}
export function ArchivedItem({
	href,
	tagId,
	tagYear,
	tagStatus,
	tagCategory,
	title,
	lede,
	className,
}: ArchivedItemProps) {
	return (
		<Link
			className={cn(
				"flex",
				"flex-row",
				"border-b",
				"items-baseline",
				"gap-4",
				"p-4",
				"cursor-pointer",
				"hover:shadow-md",

				className,
			)}
			href={href}
		>
			<div className="w-10">
				<TagId>{tagId}</TagId>
			</div>
			<div className="w-20">
				<TagYear>{tagYear}</TagYear>
			</div>
			<div className="w-30">
				<TagStatus>{tagStatus}</TagStatus>
			</div>
			<div className="w-50">
				<TagType>{tagCategory}</TagType>
			</div>
			<span className="text-[var(--base-11)]">{title}</span>
		</Link>
	);
}
