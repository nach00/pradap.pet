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
			<div className="bg-card rounded-lg w-full flex flex-row p-6 gap-6 ">
				{/* <div className="bg-card rounded-lg w-full flex flex-row md:max-w-sm md:flex-col p-6 gap-6 md:h-[520px] md:w-[360px]"> */}
				<div className="h-[200px] w-[260px] rounded-lg bg-accent flex items-center justify-center">
					01
				</div>
				<div className="flex flex-1 gap-3">
					<div className="flex flex-row gap-3">
						<span className="tag-id">01</span>
						<span className="tag-year">2025</span>
						<span className="tag-status">Live</span>
						<span className="tag-type">Full-Stack Web Application</span>
					</div>
				</div>
				{/* <div className="flex flex-col p-0 justify-between"> */}
				{/* <div className="flex flex-col gap-3"> */}
				{/* <div>Zimperium</div> */}
				{/* <div> */}
				{/* Voluptate quis proident incididunt reprehenderit fugiat eiusmod */}
				{/* occaecat sunt non ex labore voluptate est. */}
				{/* </div> */}
				{/* </div> */}
				{/* <Button variant="outline" className="w-full"> */}
				{/* <div>View project</div> */}
				{/* </Button> */}
				{/* </div> */}
			</div>
		</Link>
	);
}
