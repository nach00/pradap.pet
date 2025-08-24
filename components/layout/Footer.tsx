"use client";

import * as React from "react";
import Container from "@/components/layout/Container";

export function Footer() {
	return (
		<footer className="w-screen mt-20 py-20">
			<Container>
				<div className="flex flex-row justify-between">
					<div className="flex flex-col">Natcha Pradappet</div>
					<div className="flex flex-col">
						<span>Home</span>
						<span>About</span>
						<span>Work</span>
						<span>Blog</span>
						<span>Contact</span>
					</div>
				</div>
			</Container>
		</footer>
	);
}
