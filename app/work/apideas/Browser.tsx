import { Safari } from "@/components/magicui/safari";

interface BrowserProps {
	imageSrc?: string;
}

export function Browser({
	imageSrc = "/images/apideas/apideas1.jpg",
}: BrowserProps) {
	return (
		<div className="relative">
			<Safari url="apideas.fun" className="size-full" imageSrc={imageSrc} />
		</div>
	);
}
