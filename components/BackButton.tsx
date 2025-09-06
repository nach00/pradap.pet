"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { usePathname } from "next/navigation";

interface BackButtonProps {
	className?: string;
	children?: React.ReactNode;
	onClick?: (() => void) | null;
	to?: string | null;
	text?: string;
	showIcon?: boolean;
	variant?: string;
}

export default function BackButton({
	to = null,
	text = "Back",
	className = "",
	showIcon = true,
	onClick = null,
	variant = "default",
}: BackButtonProps) {
	const pathname = usePathname();

	if (pathname === "/") {
		return null;
	}

	const handleClick = () => {
		if (onClick) {
			onClick();
		} else if (to) {
			window.location.href = to;
		} else {
			window.history.back();
		}
	};

	return (
		<>
			{/* <Section className=""> */}
			{/* <Container className=""> */}
			<Button
				onClick={handleClick}
				variant="ghost"
				className={cn(
					"px-0",
					"font-light",
					"xxxs:text-md",
					"xxs:text-lg",
					"xs:text-xl",
					"xxxs:my-6",
					"xxs:my-8",
					"xs:my-10",
				)}
			>
				{showIcon && <ChevronLeft className="w-4 h-4" />}
				{text}
			</Button>
			{/* </Container> */}
			{/* </Section> */}
		</>
	);
}
