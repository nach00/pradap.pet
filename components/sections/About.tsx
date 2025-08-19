"use client";
import React from "react";
import Link from "next/link";
import { SectionHeading, Subheading, Paragraph, Eyebrow } from "@/components/typography";

export default function About() {
	return (
		<div className="mt-32">
			<SectionHeading className="mb-16">
				About
			</SectionHeading>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
				<div className="lg:col-span-2">
					<Paragraph className="mb-8">
						Design Engineer with 8+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence. Based in Bangkok, working with teams globally.
					</Paragraph>
					<Paragraph className="mb-12">
						My approach combines systematic design thinking with deep technical implementation, drawing from cognitive psychology and machine learning to create adaptive systems.
					</Paragraph>
					<Link
						href="/about"
						className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
					>
						Full Background
						<span className="ml-2">→</span>
					</Link>
				</div>
				<div className="lg:col-span-1 flex flex-col justify-center">
					<div className="border border-gray-200 rounded-lg p-8 text-right">
						<Subheading className="mb-2">
							Natcha Pradappet
						</Subheading>
						<Eyebrow>
							Design Engineer
						</Eyebrow>
					</div>
				</div>
			</div>
		</div>
	);
}
