import { cn } from "@/lib/utils";

interface IconProps {
	className?: string;
}

export function FireIcon({ className }: IconProps) {
	return <span className={cn("wb-icon wb-animate", className)}>8</span>;
}
export function SunIcon({ className }: IconProps) {
	return <span className={cn("wb-icon wb-animate", className)}>1</span>;
}
export function MoonIcon({ className }: IconProps) {
	return <span className={cn("wb-icon wb-animate", className)}>3</span>;
}
export function MenuIcon({ className }: IconProps) {
	return <span className={cn("wb-icon", className)}>Α</span>;
}
