"use client";
import { Safari } from "@/components/magicui/safari";
import React, { useState } from "react";

import ImagePreview from "@/components/image-preview";
interface ScreenshotPreviewProps {
	imageSrc?: string;
	description?: string;
	url?: string;
	imageWidth?: number;
	imageHeight?: number;
}

export default function ScreenshotPreview({
	imageSrc = "/images/placeholder.png",
	description = "",
	url = "",
	imageWidth = 800,
	imageHeight = 600,
}: ScreenshotPreviewProps) {
	// const [showImagePreview, setShowImagePreview] = useState(false);
	//
	// const handleImageClick = () => {
	// 	if (imageSrc) {
	// 		setShowImagePreview(true);
	// 	}
	// };
	return (
		<div className="relative">
			{/* <div onClick={handleImageClick} className="cursor-pointer"> */}
			{/* 	<Safari url="apideas.fun" className="size-full" imageSrc={imageSrc} /> */}
			{/* </div> */}
			<ImagePreview src={imageSrc} width={imageWidth} height={imageHeight} />
			<small className="grid place-content-center pt-2 pb-8">
				{description}
			</small>
		</div>
	);
}
