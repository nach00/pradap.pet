"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const softwareSkills = {
	design: [
		{
			name: "Adobe After Effects",
			logo: "/images/logos/software/adobe-after-effects.svg",
			description: "Motion graphics and visual effects",
			proficiency: 85,
		},
		{
			name: "Adobe Illustrator",
			logo: "/images/logos/software/adobe-illustrator.svg",
			description: "Vector graphics and illustration",
			proficiency: 92,
		},
		{
			name: "Adobe InDesign",
			logo: "/images/logos/software/adobe-indesign.svg",
			description: "Layout and publication design",
			proficiency: 88,
		},
		{
			name: "Adobe Lightroom",
			logo: "/images/logos/software/adobe-lightroom.svg",
			description: "Photo editing and organization",
			proficiency: 80,
		},
		{
			name: "Adobe Photoshop",
			logo: "/images/logos/software/adobe-photoshop.svg",
			description: "Image editing and digital art",
			proficiency: 95,
		},
		{
			name: "Adobe XD",
			logo: "/images/logos/software/adobe-xd.svg",
			description: "UI/UX design and prototyping",
			proficiency: 90,
		},
		{
			name: "Affinity Designer",
			logo: "/images/logos/software/affinity-designer.svg",
			description: "Professional vector design",
			proficiency: 87,
		},
		{
			name: "Affinity Photo",
			logo: "/images/logos/software/affinity-photo.svg",
			description: "Advanced photo editing",
			proficiency: 82,
		},
		{
			name: "Affinity Publisher",
			logo: "/images/logos/software/affinity-publisher.svg",
			description: "Desktop publishing",
			proficiency: 75,
		},
		{
			name: "Figma",
			logo: "/images/logos/software/figma.svg",
			description: "Collaborative design platform",
			proficiency: 98,
		},
		{
			name: "Framer",
			logo: "/images/logos/software/framer.svg",
			description: "Interactive design and prototyping",
			proficiency: 85,
		},
		{
			name: "Framer Motion",
			logo: "/images/logos/software/framer-motion.svg",
			description: "React animation library",
			proficiency: 88,
		},
	],
	development: [
		{
			name: "Bootstrap",
			logo: "/images/logos/software/bootstrap.svg",
			description: "CSS framework for responsive design",
			proficiency: 85,
		},
		{
			name: "CSS",
			logo: "/images/logos/software/css.svg",
			description: "Styling and layout language",
			proficiency: 95,
		},
		{
			name: "Django",
			logo: "/images/logos/software/django.svg",
			description: "Python web framework",
			proficiency: 80,
		},
		{
			name: "Drupal",
			logo: "/images/logos/software/drupal.svg",
			description: "Content management system",
			proficiency: 75,
		},
		{
			name: "HTML",
			logo: "/images/logos/software/html.svg",
			description: "Markup language for web content",
			proficiency: 98,
		},
		{
			name: "JavaScript",
			logo: "/images/logos/software/javascript.svg",
			description: "Dynamic programming language",
			proficiency: 93,
		},
		{
			name: "Python",
			logo: "/images/logos/software/python.svg",
			description: "Versatile programming language",
			proficiency: 87,
		},
		{
			name: "React",
			logo: "/images/logos/software/react.svg",
			description: "JavaScript library for UI",
			proficiency: 96,
		},
		{
			name: "Ruby",
			logo: "/images/logos/software/ruby.svg",
			description: "Dynamic programming language",
			proficiency: 78,
		},
		{
			name: "Sass",
			logo: "/images/logos/software/sass.svg",
			description: "CSS preprocessor",
			proficiency: 90,
		},
		{
			name: "Tailwind CSS",
			logo: "/images/logos/software/tailwind.svg",
			description: "Utility-first CSS framework",
			proficiency: 97,
		},
		{
			name: "Three.js",
			logo: "/images/logos/software/three.svg",
			description: "3D graphics library",
			proficiency: 82,
		},
		{
			name: "Vue.js",
			logo: "/images/logos/software/vue.svg",
			description: "Progressive JavaScript framework",
			proficiency: 85,
		},
	],
	tools: [
		{
			name: "Arduino",
			logo: "/images/logos/software/arduino.svg",
			description: "Microcontroller development platform",
			proficiency: 75,
		},
		{
			name: "Blender",
			logo: "/images/logos/software/blender.svg",
			description: "3D modeling and animation",
			proficiency: 70,
		},
		{
			name: "Fusion 360",
			logo: "/images/logos/software/fusion.svg",
			description: "CAD and 3D modeling",
			proficiency: 65,
		},
		{
			name: "Raspberry Pi",
			logo: "/images/logos/software/raspberry-pi.svg",
			description: "Single-board computer platform",
			proficiency: 80,
		},
		{
			name: "Vim",
			logo: "/images/logos/software/vim.svg",
			description: "Advanced text editor",
			proficiency: 88,
		},
	],
};

// Individual Software Card Component
function SoftwareCard({ software, variant = "default" }) {
	const [isHovered, setIsHovered] = useState(false);

	if (variant === "minimal") {
		return (
			<div
				className={cn(
					"group relative p-4 rounded-lg border border-[var(--base-5)]",
					"bg-[var(--base-1)] hover:bg-[var(--base-2)]",
					"hover:border-[var(--accent-7)] transition-all duration-300",
					"cursor-pointer",
				)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="flex items-center gap-3">
					<div
						className="w-8 h-8 bg-contain bg-center bg-no-repeat opacity-80 group-hover:opacity-100 transition-opacity"
						style={{ backgroundImage: `url('${software.logo}')` }}
					/>
					<span className="text-sm font-medium text-[var(--base-11)] group-hover:text-[var(--accent-11)] transition-colors">
						{software.name}
					</span>
				</div>
			</div>
		);
	}

	if (variant === "detailed") {
		return (
			<div
				className={cn(
					"group relative overflow-hidden rounded-xl border border-[var(--base-5)]",
					"bg-gradient-to-br from-[var(--base-1)] to-[var(--base-2)]",
					"hover:border-[var(--accent-8)] hover:shadow-lg hover:shadow-[var(--accent-2)]",
					"transition-all duration-500 ease-out hover:-translate-y-1",
					"cursor-pointer",
				)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Background SVG */}
				<div
					className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity duration-500"
					style={{
						backgroundImage: `url('${software.logo}')`,
						backgroundSize: "120px 120px",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>

				{/* Content */}
				<div className="relative z-10 p-6 space-y-4">
					<div className="flex items-start justify-between">
						<div
							className="w-12 h-12 bg-contain bg-center bg-no-repeat opacity-90 group-hover:scale-110 transition-transform duration-300"
							style={{ backgroundImage: `url('${software.logo}')` }}
						/>
						<div className="text-right">
							<div className="text-xs text-[var(--base-9)] uppercase tracking-wide mb-1">
								Proficiency
							</div>
							<div className="text-lg font-semibold text-[var(--accent-11)]">
								{software.proficiency}%
							</div>
						</div>
					</div>

					<div className="space-y-2">
						<h3 className="text-lg font-medium text-[var(--base-11)] group-hover:text-[var(--accent-11)] transition-colors">
							{software.name}
						</h3>
						<p className="text-sm text-[var(--base-10)] leading-relaxed">
							{software.description}
						</p>
					</div>

					{/* Proficiency Bar */}
					<div className="w-full bg-[var(--base-4)] rounded-full h-2 overflow-hidden">
						<div
							className="h-full bg-gradient-to-r from-[var(--accent-9)] to-[var(--accent-10)] rounded-full transition-all duration-1000 ease-out"
							style={{
								width: isHovered ? `${software.proficiency}%` : "0%",
							}}
						/>
					</div>
				</div>
			</div>
		);
	}

	// Default variant
	return (
		<div
			className={cn(
				"group relative p-5 rounded-lg border border-[var(--base-5)]",
				"bg-[var(--base-2)] hover:bg-[var(--base-3)]",
				"hover:border-[var(--accent-7)] transition-all duration-300",
				"cursor-pointer hover:scale-105",
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="text-center space-y-3">
				<div
					className="w-10 h-10 mx-auto bg-contain bg-center bg-no-repeat opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
					style={{ backgroundImage: `url('${software.logo}')` }}
				/>
				<h4 className="text-sm font-medium text-[var(--base-11)] group-hover:text-[var(--accent-11)] transition-colors">
					{software.name}
				</h4>
				{software.proficiency && (
					<div className="text-xs text-[var(--base-9)]">
						{software.proficiency}%
					</div>
				)}
			</div>
		</div>
	);
}

// Category Section Component
interface CategorySectionProps {
	title: string;
	skills: Software[];
	variant?: "default" | "minimal" | "detailed";
}

function CategorySection({
	title,
	skills,
	variant = "default",
}: CategorySectionProps) {
	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-light text-[var(--accent-11)] uppercase tracking-wider border-b border-[var(--base-4)] pb-2">
				{title}
			</h2>

			<div
				className={cn(
					"grid gap-4",
					variant === "minimal"
						? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
						: variant === "detailed"
							? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
							: "grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
				)}
			>
				{skills.map((software) => (
					<SoftwareCard
						key={software.name}
						software={software}
						variant={variant}
					/>
				))}
			</div>
		</div>
	);
}

// Main Portfolio Component
export default function SoftwareSkillsPortfolio() {
	const [currentVariant, setCurrentVariant] = useState("default");

	const variants = [
		{ name: "Default", value: "default" },
		{ name: "Minimal", value: "minimal" },
		{ name: "Detailed", value: "detailed" },
	];

	return (
		<div className="min-h-screen bg-[var(--base-1)] text-[var(--base-12)] p-8">
			<div className="max-w-7xl mx-auto space-y-12">
				{/* Header */}
				<div className="text-center space-y-6">
					<h1 className="text-4xl font-extralight tracking-wide text-[var(--base-12)]">
						Software Expertise
					</h1>
					<p className="text-lg text-[var(--base-10)] font-light max-w-2xl mx-auto">
						A comprehensive overview of technical proficiencies across design,
						development, and specialized tools
					</p>

					{/* Variant Selector */}
					<div className="flex justify-center gap-3">
						{variants.map((variant) => (
							<button
								key={variant.value}
								onClick={() => setCurrentVariant(variant.value)}
								className={cn(
									"px-4 py-2 rounded-full border transition-all duration-300 text-sm font-light tracking-wide",
									currentVariant === variant.value
										? "border-[var(--accent-9)] bg-[var(--accent-9)] text-white"
										: "border-[var(--base-5)] text-[var(--base-10)] hover:border-[var(--base-7)]",
								)}
							>
								{variant.name}
							</button>
						))}
					</div>
				</div>

				{/* Skills Categories */}
				<div className="space-y-16">
					<CategorySection
						title="Design Tools"
						skills={softwareSkills.design}
						variant={currentVariant}
					/>
					<CategorySection
						title="Development"
						skills={softwareSkills.development}
						variant={currentVariant}
					/>
					<CategorySection
						title="Specialized Tools"
						skills={softwareSkills.tools}
						variant={currentVariant}
					/>
				</div>
			</div>
		</div>
	);
}
