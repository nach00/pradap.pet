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
		<div className={cn("flex flex-col w-[140px] gap-1", className)}>
			<Eyebrow>{label}</Eyebrow>
			<Small>{children}</Small>
		</div>
	);
};
