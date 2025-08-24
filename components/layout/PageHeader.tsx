import React from "react";
import Section from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ProjectBadges } from "../ProjectBadges";
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
		<div className="max-w-[60ch]">
			<h1>{title}</h1>
			<span className="lede">{description}</span>
		</div>
	);
}
