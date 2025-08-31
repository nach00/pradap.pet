import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";
import Calendly from "@/components/icons/calendly";
import LinkedIn from "@/components/icons/linkedin";
import Github from "@/components/icons/github";
import { FloatingLabelInput } from "../FloatingLabelInput";
import FloatingLabelInputDemo from "@/components/FloatingLabelInputDemo";

import * as React from "react";
import Container from "@/components/layout/Container";

export function Footer() {
	return (
		<footer>
			<Section>
				<Container className="flex flex-row justify-between w-full">
					<div className="flex flex-col">
						<h2 className="mb-8">Let&apos;s work together</h2>
						<div className="flex flex-row gap-4">
							<Button variant="outline" className="h-auto">
								<Link href="mailto:natcha@pradap.pet">natcha@pradap.pet</Link>
							</Button>
							<Button variant="outline" size="icon">
								<Link href="https://www.linkedin.com/in/natcha-pradappet/">
									<LinkedIn />
								</Link>
							</Button>
							<Button variant="outline" size="icon">
								<Link href="https://github.com/nach00">
									<Github />
								</Link>
							</Button>
							<Button variant="outline" size="icon">
								<Link href="https://calendly.com/npradappet/alpha">
									<Calendly />
								</Link>
							</Button>
						</div>
					</div>
				</Container>
			</Section>
			<small className="p-4 flex w-full justify-end mb-20">
				© 2077 Natcha Pradappet. All rights reserved.
				<Link href="/legal" className="underline ml-1">
					Legal Mumbo Jumbo
				</Link>
			</small>
		</footer>
	);
}
