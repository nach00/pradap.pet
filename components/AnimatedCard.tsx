import Image, { StaticImageData } from "next/image";

const AnimatedCard = ({
	imgSrc,
	title,

	aboutProduct,
}: {
	imgSrc: StaticImageData | string;
	title: string;

	aboutProduct: string;
}) => {
	return (
		<div className="rounded-lg border shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
			<div className="flex flex-col items-center">
				<Image
					className=""
					src={imgSrc}
					alt={`${title} logo`}
					width={352}
					height={512}
				/>
			</div>
		</div>
	);
};

export default AnimatedCard;
