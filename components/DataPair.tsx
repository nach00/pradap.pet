import React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/Type";

interface DataPairProps {
	label: string;
	children: React.ReactNode;
	className?: string;
}

export const DataPair = ({ label, children, className }: DataPairProps) => {
	return (
		<div className={cn("flex flex-col w-[140px] gap-1", className)}>
			<Eyebrow>{label}</Eyebrow>
			<small className="text-[var(--base-12)] flex flex-row gap-4">
				{children}
			</small>
		</div>
	);
};
