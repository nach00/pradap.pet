import React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/type";

interface DataPairProps {
	label: string;
	children: React.ReactNode;
	className?: string;
}

export const DataPair = ({ label, children, className }: DataPairProps) => {
	return (
		<div className={cn("flex flex-col gap-1 min-w-[120px]", className)}>
			<Eyebrow>{label}</Eyebrow>
			<small className="text-[var(--base-12)] flex flex-row gap-4">
				{children}
			</small>
		</div>
	);
};
