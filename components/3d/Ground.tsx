import React from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useTheme } from "next-themes";

export function Ground() {
	const { theme } = useTheme(); // Get the current theme

	// Determine ground color based on theme
	const getGroundColor = (currentTheme: string | undefined) => {
		switch (currentTheme) {
			case "light":
				return "white";
			case "dark":
				return "black";
			case "cheese":
				return "#330033";
			default:
				return "white";
		}
	};

	const groundColor = getGroundColor(theme);

	return (
		<RigidBody
			type="fixed"
			colliders="cuboid"
			restitution={0.3} // Slightly less bouncy ground for controlled bouncing
			friction={0.9} // High friction to help toy settle
		>
			<mesh receiveShadow position={[0, -2, 0]}>
				<boxGeometry args={[4000, 0.5, 4000]} />
				<meshStandardMaterial color={groundColor} />
			</mesh>
		</RigidBody>
	);
}
