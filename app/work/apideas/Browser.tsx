import { Safari } from "@/components/magicui/safari";

interface BrowserProps {
	imageSrc?: string;
	description?: string;
}

export default function Browser({
	imageSrc = "/images/apideas/apideas1.jpg",
	description = "",
}: BrowserProps) {
	return (
		<div className="relative">
			<Safari url="apideas.fun" className="size-full" imageSrc={imageSrc} />
			<small className="grid place-content-center pt-2 pb-8">
				{description}
			</small>
		</div>
	);
}
