// import P from "@/components/typography/P";
// import H1 from "@/components/typography/H1";
import React from "react";
import { Lede } from "@/components/typography/TextElements";
import { H1 } from "@/components/typography/Headings";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
	title: string;
	description?: string;
	className?: string;
}

export default function PageHeader({
	title,
	description,
	className,
}: PageHeaderProps) {
	return (
		<div className={cn("mt-50 flex flex-col", className)}>
			<H1>{title}</H1>
			<Lede>{description}</Lede>
		</div>
	);
}
