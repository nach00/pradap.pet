import { cn } from "@/lib/utils";
import {
	P,
	UL,
	Lede,
	LI,
	Small,
	Eyebrow,
	Caption,
	Blockquote,
	Strong,
} from "@/components/typography/TextElements";

import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/Headings";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { skills } from "@/data/skills";

const categoryLabels = {
	design: "Design Tools",
	development: "Development",
	aiTools: "AI Tools",
};

export default function SkillsSection() {
	return (
		<>
			<Section>
				<Container>
					<H2>Skills</H2>
					<Lede>
						A comprehensive overview of technical proficiencies across design,
						development, and specialized tools
					</Lede>
					{Object.entries(skills).map(([category, skillList]) => (
						<div key={category} className="space-y-6">
							<H3 className="border-b border-[var(--base-4)] pb-3 pt-12">
								{categoryLabels[category as keyof typeof categoryLabels]}
							</H3>

							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
								{skillList.map((skill) => (
									<div
										key={skill.name}
										className={cn(
											"group p-4 rounded-lg border border-[var(--base-5)]",
											"bg-[var(--base-2)] hover:bg-[var(--base-3)]",
											"hover:border-[var(--accent-7)] transition-all duration-300",
											"cursor-pointer hover:scale-105",
										)}
									>
										<div className="text-center space-y-3">
											<div
												className="w-8 h-8 mx-auto bg-contain bg-center bg-no-repeat opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
												style={{ backgroundImage: `url('${skill.logo}')` }}
											/>
											<Small className="text-[var(--base-11)] group-hover:text-[var(--accent-11)] transition-colors">
												{skill.name}
											</Small>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</Container>
			</Section>
		</>
	);
}
