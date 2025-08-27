import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";

import * as React from "react";
import Container from "@/components/layout/Container";

export function Footer() {
	return (
		<footer>
			<Section>
				<Container className="flex flex-row justify-between w-full">
					<div className="flex flex-col">
						<h2 className="text-[var(--accent-11)]">Contact</h2>

						<h3 className="mb-8">Let&apos;s work together</h3>
						<p>
							Available for design engineering projects, research
							collaborations, and speaking engagements. Particularly interested
							in AI, adaptive interfaces, and human-centered technology.
						</p>
					</div>
					<div className="">
						<div className="flex flex-col gap-8">
							<Button>
								<Link href="mailto:natcha@pradap.pet">natcha@pradap.pet</Link>
							</Button>
							<Button>
								<Link href="https://www.linkedin.com/in/natcha-pradappet/">
									LinkedIn
								</Link>
							</Button>
							<Button>
								<Link href="https://github.com/nach00">Github</Link>
							</Button>
							<Button>
								<Link href="https://calendly.com/npradappet/alpha">
									Calendly
								</Link>
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		</footer>
	);
}
