"use client";
import React from "react";
import Link from "next/link";
import { SectionHeading, Paragraph } from "@/components/typography";

export const ContactCTA = () => {
	return (
		<div className="mt-32 mb-20">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
				<div className="lg:col-span-2">
					<SectionHeading className="mb-8">
						Let&apos;s work together
					</SectionHeading>
					<Paragraph>
						Available for design engineering projects, research collaborations, and speaking engagements. Particularly interested in AI, adaptive interfaces, and human-centered technology.
					</Paragraph>
				</div>
				<div className="lg:col-span-1 flex flex-col justify-center space-y-4">
					<Link
						href="/contact"
						className="inline-flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 text-center"
					>
						Start a project
					</Link>
					<div className="border border-gray-200 rounded-md px-6 py-4 text-center">
						<span className="text-gray-700">natcha@pradap.pet</span>
					</div>
				</div>
			</div>
		</div>
	);
};