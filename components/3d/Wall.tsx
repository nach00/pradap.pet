import React from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useTheme } from "next-themes";

export function Wall() {
	const { theme } = useTheme(); // Get the current theme

	// Determine ground color based on theme
	const wallColor = theme === "light" ? "white" : "black";

	return (
		<RigidBody type="fixed" colliders="cuboid">
			<mesh receiveShadow position={[-100, -100, -100]}>
				<boxGeometry args={[4000, 4000, 0.5]} />
				<meshStandardMaterial color={wallColor} />
			</mesh>
		</RigidBody>
	);
}
