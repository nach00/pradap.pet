import { NumberTicker } from "@/components/NumberTicker";

import { cn } from "@/lib/utils";

interface StatStackProps {
	number: number;
	label: string;
	className?: string;
}

export default function StatStack({
	number,
	label,
	className,
}: StatStackProps) {
	return (
		<div className={cn("flex flex-col", className)}>
			<NumberTicker
				value={number}
				className="whitespace-pre-wrap text-7xl font-light tracking-tighter mb-2 text-[var(--foreground)]"
			/>
			<small className="text-xs font-medium tracking-widest text-[var(--muted-foreground)] uppercase">
				{label}
			</small>
		</div>
	);
}
