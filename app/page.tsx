"use client";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/button";
// import "@/styles/global.css";
// import "@/styles/typography.css";
import { cn } from "@/lib/utils";
import { FeaturedWorkGrid } from "@/components/FeaturedWorkGrid";
import {
	Headline,
	DataPair,
	SectionHeading,
	Subheading,
	Paragraph,
	Lede,
	Eyebrow,
	Status,
} from "@/components/typography";
import { ProjectCard } from "@/components/ProjectCard";
export default function Home() {
	const getStatusColor = (status: string) => {
		switch (status?.toLowerCase()) {
			case "live":
				return "text-green-500";
			case "development":
				return "text-yellow-500";
			case "prototype":
				return "text-orange-500";
			case "research":
				return "text-blue-500";
			default:
				return "text-gray-500";
		}
	};
	return (
		<>
			<Container>
				<div id="hero" className="h-screen flex flex-col justify-center">
					<h1 className="max-w-[10ch]">Design Engineer</h1>

					{/* <p className="max-w-[30ch] leading-7 text-secondary-foreground mt-12"> */}
					<span className="lede max-w-[30ch]">
						Crafting digital experiences where precision meets elegance.
						Currently exploring AI-enhanced design systems.
					</span>

					<div className="flex gap-12 mt-12">
						{/* <span className="eyebrow">Location</span> */}
						{/* <p>Dallas, Texas</p> */}
						{/* <DataPair label="Location">Dallas, TX</DataPair> */}
						{/* <DataPair label="Status">Available</DataPair> */}
						<div className="flex flex-col gap-1">
							<span className="eyebrow">Location</span>
							<small className="">Dallas, Texas</small>
						</div>
						<div className="flex flex-col gap-1">
							<span className="eyebrow">Status</span>
							<small className="">Available</small>
						</div>
					</div>

					<div className="flex gap-4 mt-12">
						<Button>View work</Button>
						<Button variant="outline">About & Experience</Button>
					</div>
				</div>
			</Container>

			<Container>
				<div id="featured-work" className="mb-30">
					<div className="flex flex-row justify-between">
						<h2 className="">Selected Work</h2>
						<Button variant="secondary">View all work →</Button>
					</div>
					{/* <p className="max-w-3xl"> */}
					{/* 	Featured projects exploring AI integration, adaptive interfaces, and */}
					{/* 	human-centered design. */}
					{/* </p> */}

					{/* <div className="flex flex-col md:flex-row gap-3"> */}
					{/* 	<ProjectCard /> */}
					{/* 	<ProjectCard /> */}
					{/* 	<ProjectCard /> */}
					{/* </div> */}
					<FeaturedWorkGrid />
				</div>
			</Container>

			<Container>
				<div id="about" className="mb-30">
					<div className="">
						<div className="flex flex-row justify-between">
							<h2 className="">About</h2>
							<Button variant="secondary">Full background →</Button>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
							<div className="lg:col-span-2">
								<p className="mb-8">
									Design Engineer with 8+ years of experience creating
									intelligent interfaces that bridge the gap between human
									cognition and artificial intelligence. Based in Bangkok,
									working with teams globally.
								</p>
								<p className="mb-12">
									My approach combines systematic design thinking with deep
									technical implementation, drawing from cognitive psychology
									and machine learning to create adaptive systems.
								</p>
							</div>
							<div className="lg:col-span-1 flex flex-col justify-center">
								<div className="border border-gray-200 rounded-lg p-8 text-right">
									<Subheading className="mb-2">Natcha Pradappet</Subheading>
									<Eyebrow>Design Engineer</Eyebrow>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			{/* <Container className="w-screen"> */}
			{/* 	<div id="testimonials"> */}
			{/* 		<InfiniteMovingCardsDemo /> */}
			{/* 	</div> */}
			{/* </Container> */}
			<Container>
				<div id="contact">
					<div className="flex flex-row justify-between">
						<h2 className="">Contact</h2>
						{/* <Button variant="secondary">Start a project →</Button> */}
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
						<div className="lg:col-span-2">
							<h3 className="mb-8">Let&apos;s work together</h3>
							<p>
								Available for design engineering projects, research
								collaborations, and speaking engagements. Particularly
								interested in AI, adaptive interfaces, and human-centered
								technology.
							</p>
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
			</Container>
		</>
	);
}

export function InfiniteMovingCardsDemo() {
	return (
		<div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

const testimonials = [
	{
		quote:
			"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote:
			"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
		name: "William Shakespeare",
		title: "Hamlet",
	},
	{
		quote: "All that we see or seem is but a dream within a dream.",
		name: "Edgar Allan Poe",
		title: "A Dream Within a Dream",
	},
	{
		quote:
			"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
		name: "Jane Austen",
		title: "Pride and Prejudice",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
];
