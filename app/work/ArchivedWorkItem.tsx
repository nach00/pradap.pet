// import { TagId, TagStatus, TagType, TagYear } from "@/components/type";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArchivedItemProps {
	id?: string;
	year?: string | number;
	status?: string;
	type?: string;
	className?: string;
}

export function ArchivedWorkItem({
	id = "ID",
	year = "YEAR",
	status = "STATUS",
	type = "PROJECT TYPE",
	className,
}: ProjectBadgesProps) {
	return (
		<div
			className={cn("inline-flex flex-wrap items-baseline gap-4", className)}
		>
			<TagId>{id}</TagId>
			<TagYear>{year}</TagYear>
			<TagStatus>{status}</TagStatus>
			<TagType>{type}</TagType>
		</div>
	);
}

interface TypeProps {
	children: ReactNode;
	className?: string;
}

export function TagId({ children, className }: TypeProps) {
	return (
		<span
			className={cn(
				"font-mono text-xs font-medium tracking-wider text-[var(--base-10)] uppercase",
				className,
			)}
		>
			{children}
		</span>
	);
}

export function TagYear({ children, className }: TypeProps) {
	return (
		<span
			className={cn("text-xs tracking-wide text-[var(--base-11)]", className)}
		>
			{children}
		</span>
	);
}

export function TagStatus({ children, className }: TypeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-wide",
				"border border-[var(--base-6)] rounded-sm",
				"text-[var(--base-11)] bg-[var(--base-3)]",
				"transition-colors duration-200",
				className,
			)}
		>
			{children}
		</span>
	);
}

export function TagType({ children, className }: TypeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-wide",
				"border border-[var(--accent-6)] rounded-sm",
				"text-[var(--accent-11)] bg-[var(--accent-2)]",
				"transition-colors duration-200",
				className,
			)}
		>
			{children}
		</span>
	);
}
