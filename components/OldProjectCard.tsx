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
	const placeholderImage: string =
		"h-[100px] w-[100px] rounded-lg bg-primary md:w-full";

	return (
		<Link href="/work/zimperium">
			<Card className="w-full flex flex-row md:max-w-sm md:flex-col p-6 gap-6 md:h-[520px] md:w-[360px]">
				<CardHeader className="p-0">
					<div className={placeholderImage} />
				</CardHeader>
				<CardContent className="flex flex-col p-0 justify-between md:h-full w-full">
					<div className="flex flex-col gap-3 w-full">
						<CardTitle>Zimperium</CardTitle>
						<CardDescription>
							Fugiat qui veniam officia proident magna exercitation ad elit
							tempor eiusmod minim cillum. Esse voluptate mollit quis voluptate
							irure sunt proident aliqua incididunt Lorem amet voluptate. Aute
							sint Lorem aliqua elit ut labore deserunt qui dolor sint qui
						</CardDescription>
					</div>
					{/* <Button variant="outline" className="w-full"> */}
					<div>View project</div>
					{/* </Button> */}
				</CardContent>
			</Card>
		</Link>
	);
}
