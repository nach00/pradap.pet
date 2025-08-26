const steps = [
	{
		title: "Course Completion & Project Inception",
		description:
			"After completing all courses from Altcademy, I was tasked with building a final capstone project, applying all the skills learned from the full-stack bootcamp classes.",
	},
	{
		title: "Initial Prototyping & Brainstorming",
		description:
			"I built a prototype of an app idea generator that randomly paired 2 APIs from a curated list. An AI tool, Claude, would then generate an app idea, a problem statement, a proposed solution, an implementation method, market potential, and an overall score.",
	},
	{
		title: "Pivoting the Project Idea",
		description:
			"After running the prototype a few times, I realized that creating a completed, polished version of the generator itself would be a more compelling and suitable capstone project.",
	},
	{
		title: "Planning & Feature Definition",
		description:
			"I began planning the project requirements for the full application, defining the necessary pages, the details for each idea card, and the overall scope of the project.",
	},
	{
		title: "Design & User Experience",
		description:
			"Developed wireframes and mockups to visualize the application's structure and create an intuitive user experience for the final design.",
	},
	{
		title: "Development & Implementation",
		description:
			"Wrote the code, integrated the features, and built the core functionality of the application, transforming the initial prototype into a fully-featured project.",
	},
	{
		title: "Testing & Deployment",
		description:
			"Performed quality assurance to fix bugs, optimized performance, and launched the project in a live environment at apideas.fun.",
	},
	{
		title: "Final Submission & Outcome",
		description:
			"I submitted the completed project as my final capstone. The project was successful, and I passed the class, effectively demonstrating the skills acquired during the bootcamp.",
	},
];

export default function ApideasProcessTimeline() {
	return (
		<div className="flex w-full">
			{/* <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6"> */}
			<div className="relative ml-6">
				{/* Timeline line */}
				<div className="absolute left-0 inset-y-0 border-l-2" />

				{steps.map(({ title, description }, index) => (
					<div key={index} className="relative pl-10 pb-10 last:pb-0">
						{/* Timeline Icon */}
						<div className="absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-muted-foreground flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
							<span className="font-semibold text-lg">{index + 1}</span>
						</div>

						{/* Content */}
						<div className="pt-1 space-y-2">
							<h3 className="text-xl font-semibold">{title}</h3>
							<p className="text-muted-foreground">{description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
