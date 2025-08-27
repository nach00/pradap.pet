/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/Marquee";

const reviews = [
	{
		img: "/images/apideas/common.png",
	},
	{
		img: "/images/apideas/uncommon.png",
	},
	{
		img: "/images/apideas/rare.png",
	},
	{
		img: "/images/apideas/epic.png",
	},
	{
		img: "/images/apideas/legendary.png",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	body,
}: {
	img: string;
	name: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img width="360" height="520" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{img}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export default function ApideasMarquee() {
	return (
		<div className="relative flex h-[400px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
			<div
				className="flex flex-row items-center gap-4"
				style={{
					transform:
						"translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
				}}
			>
				<Marquee pauseOnHover vertical className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.img} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
					{secondRow.map((review) => (
						<ReviewCard key={review.img} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
					{thirdRow.map((review) => (
						<ReviewCard key={review.img} {...review} />
					))}
				</Marquee>
				<Marquee pauseOnHover className="[--duration:20s]" vertical>
					{fourthRow.map((review) => (
						<ReviewCard key={review.img} {...review} />
					))}
				</Marquee>
			</div>

			<div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[var(--base-2)]"></div>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--base-2)]"></div>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--base-2)]"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--base-2)]"></div>
		</div>
	);
}
