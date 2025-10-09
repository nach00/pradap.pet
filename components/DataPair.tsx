import React from "react";
import { cn } from "@/lib/utils";
// import { Eyebrow } from "@/components/ProjectBadges";
import { Eyebrow, Small } from "@/components/typography/TextElements";

interface DataPairProps {
	label: string;
	children: React.ReactNode;
	className?: string;
}

export const DataPair = ({ label, children, className }: DataPairProps) => {
	return (
		<div
			className={cn(
				"flex flex-row gap-[.5em] w-full",
				"border-b border-[var(--base-4)] pb-[2em]",
				"md:flex-col",

				className,
			)}
		>
			<Eyebrow className={cn("w-full text-[var(--accent-12)]")}>
				{label}
			</Eyebrow>
			<Small className={cn("w-full text-[var(--base-12)]")}>{children}</Small>
		</div>
	);
};
