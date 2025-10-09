import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ExperimentProps {
	children: ReactNode;
	className?: string;
}

export default function Experiment({ children, className }: ExperimentProps) {
	return (
		<Section>
			<Container
				variant="edgeToEdgeResponsive"
				className={cn(
					"flex flex-col w-full gap-8",
					"landscape:flex-row landscape:justify-between",
					className,
				)}
			>
				<div className="flex flex-col w-full">{children}</div>
			</Container>
		</Section>
	);
}
