"use client";
import React from "react";

import { Caption, Small } from "@/components/typography/TextElements";

import ImagePreview from "@/components/ImagePreview";
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
	return (
		<div className="relative flex flex-col gap-1 items-center mt-12">
			<ImagePreview src={imageSrc} width={imageWidth} height={imageHeight} />
			<Caption>{description}</Caption>
		</div>
	);
}
