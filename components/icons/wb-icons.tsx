import { cn } from "@/lib/utils";

interface IconProps {
	className?: string;
}

export function FireIcon({ className }: IconProps) {
	return <h1 className={cn("", className)}>8</h1>;
}
