import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function ProjectCard() {
	return (
		<Link href="/work/zimperium">
			<div className="bg-secondary rounded-lg w-full flex flex-row p-6 gap-6 ">
				{/* <div className="bg-card rounded-lg w-full flex flex-row md:max-w-sm md:flex-col p-6 gap-6 md:h-[520px] md:w-[360px]"> */}
				<div className="h-[200px] w-[260px] rounded-lg bg-accent/30 flex items-center justify-center">
					01
				</div>
				<div className="flex flex-1 gap-3 flex-col">
					<div className="flex flex-row gap-3 items-center w-full h-min">
						<span className="tag-id font-mono text-sm text-muted-foreground">
							01
						</span>
						<span className="tag-year text-xs text-secondary-foreground">
							2025
						</span>
						<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
							Live
						</span>
						<span className="tag-type bg-accent/40 text-accent-foreground px-2 py-1 rounded-full text-xs">
							Full-Stack Web Application
						</span>
					</div>
					<h3>APIdeas</h3>
					<small>
						Intelligent design system that learns from user interactions and
						suggests optimizations.
					</small>

					<div>
						<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
							Live
						</span>
						<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
							Live
						</span>
						<span className="tag-status bg-secondary px-2 py-1 rounded-full text-foreground text-xs">
							Live
						</span>
					</div>

					<Button></Button>
					<Button>View project</Button>
				</div>
			</div>
		</Link>
	);
}
