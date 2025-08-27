"use client";
import AnimatedCard from "@/components/AnimatedCard";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const tools = [
	{
		imgSrc: "/images/apideas/common.png",
	},
	{
		imgSrc: "/images/apideas/uncommon.png",
	},
	{
		imgSrc: "/images/apideas/rare.png",
	},
	{
		imgSrc: "/images/apideas/epic.png",
	},
	{
		imgSrc: "/images/apideas/legendary.png",
	},
];

export default function AnimatedCardDemo() {
	const [touchComponent, setTouchComponent] = useState(false);

	const rotateDegree = [-25, -12, -2, 12, 25];
	const xAxis = [-80, -40, 0, 40, 80];
	const yAxis = [40, -40, 0, -40, 40];
	const initialRotation = [-8, -4, 0, 4, 8];
	const zIndex = [50, 40, 30, 20, 10];
	const initialXPosition = [320, 160, 0, -160, -320];
	const initialYPosition = [0, 0, 0, 0, 0];

	return (
		<div
			className="hidden md:flex justify-center items-center relative"
			onClick={() => setTouchComponent(!touchComponent)}
		>
			{tools.map((tool, ind) => (
				<motion.div
					key={ind}
					initial={{ x: initialXPosition[ind], y: initialYPosition[ind] }}
					animate={
						touchComponent
							? { x: xAxis[ind], y: yAxis[ind], rotate: rotateDegree[ind] }
							: { x: initialXPosition[ind], y: initialYPosition[ind] }
					}
					transition={{ ease: easeInOut }}
					style={{
						zIndex: zIndex[ind],
						rotate: initialRotation[ind],
					}}
					className="flex justify-center items-center"
				>
					<AnimatedCard imgSrc={tool.imgSrc} />
				</motion.div>
			))}
		</div>
	);
}
