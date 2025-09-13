import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Calendly from "@/components/icons/calendly";
import LinkedIn from "@/components/icons/linkedin";
import Github from "@/components/icons/github";
import * as React from "react";
import { H2 } from "@/components/typography/Headings";
import { P, Small } from "@/components/typography/TextElements";
export default function Footer() {
	return (
		<footer className="border-t border-[var(--base-6)] bg-[var(--base-1)] text-[var(--base-12)]">
			<Section className="py-12 md:py-20">
				<Container className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
					{/* Left Column */}
					<div className="flex flex-col gap-6 max-w-md">
						<H2 className="text-2xl md:text-3xl font-medium tracking-tight">
							Let’s work together
						</H2>
						<P className="text-sm text-[var(--base-11)] leading-relaxed">
							I’m always open to collaborations, new opportunities, and
							conversations about design & technology.
						</P>
						<Button asChild variant="outline" className="w-fit">
							<Link href="mailto:natcha@pradap.pet">natcha@pradap.pet</Link>
						</Button>
					</div>

					{/* Right Column */}
					<div className="flex flex-col gap-4 lg:gap-6 lg:flex-row">
						<Button variant="outline" size="default" asChild>
							<Link href="https://www.linkedin.com/in/natcha-pradappet/">
								LinkedIn <LinkedIn className="h-5 w-5" />
							</Link>
						</Button>
						<Button variant="outline" size="default" asChild>
							<Link href="https://github.com/nach00">
								Github <Github className="h-5 w-5" />
							</Link>
						</Button>
						<Button variant="outline" size="default" asChild>
							<Link href="https://calendly.com/npradappet/alpha">
								Calendly <Calendly className="h-5 w-5" />
							</Link>
						</Button>
					</div>
				</Container>
			</Section>

			{/* Bottom Bar */}
			<div className="border-t border-[var(--base-6)] mb-10">
				<Container className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-[var(--base-11)]">
					<Small>© 2077 Natcha Pradappet. All rights reserved.</Small>
					<Link
						href="/legal"
						className="underline underline-offset-2 hover:text-[var(--base-12)] transition-colors"
					>
						Legal Mumbo Jumbo
					</Link>
				</Container>
			</div>
		</footer>
	);
}
