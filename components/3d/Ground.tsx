import React from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

export function Ground() {
	const { theme } = useTheme(); // Get the current theme

	// Determine ground color based on theme
	const groundColor = theme === "light" ? "white" : "black";

	return (
		<RigidBody type="fixed" colliders="cuboid">
			<mesh receiveShadow position={[0, -2, 0]}>
				<boxGeometry args={[400, 0.5, 400]} />
				<meshStandardMaterial color={groundColor} />
				{/* <meshStandardMaterial transparent /> */}
			</mesh>
		</RigidBody>
	);
}
