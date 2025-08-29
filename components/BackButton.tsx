"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { usePathname } from "next/navigation";

export const BackButton = ({
	to = null,
	text = "Back",
	className = "",
	showIcon = true,
	onClick = null,
	variant = "default",
}) => {
	const pathname = usePathname();

	console.log("Current pathname:", pathname);
	console.log("Pathname === '/':", pathname === "/");

	// Don't render on the home page
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
		<Section className="p-0 border-none mt-50">
			<Container className="px-0">
				<Button onClick={handleClick} variant="ghost" className="p-0">
					{showIcon && <ChevronLeft className="w-4 h-4" />}
					{text}
				</Button>
			</Container>
		</Section>
	);
};
