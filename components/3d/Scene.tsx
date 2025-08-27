import React, { useState, useEffect, useRef } from "react";
import { CameraTracker } from "./CameraTracker";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBodyApi } from "@react-three/rapier";
import { OrbitControls, SoftShadows, ContactShadows } from "@react-three/drei";
import { Toy } from "./Toy";
import { Ground } from "./Ground";
import { SpotlightTracker } from "./SpotlightTracker";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook
import * as THREE from "three";

export function Scene() {
	const [toyPosition, setToyPosition] = useState<[number, number, number]>([
		0, 5, 0,
	]);
	const [toyRotation, setToyRotation] = useState<[number, number, number]>([
		0, 5, 0,
	]);
	const toyRigidBodyRef = useRef<RigidBodyApi>(null);

	// Get the current theme from the context
	const { theme } = useTheme();

	useEffect(() => {
		const randomX = (Math.random() - 0.5) * 5;
		const randomZ = (Math.random() - 0.5) * 5;
		setToyPosition([randomX, 5 + Math.random() * 2, randomZ]);
		setToyRotation([randomX, 5 + Math.random() * 2, randomZ]);
	}, []);

	// Determine background color based on theme
	const backgroundColor = theme === "light" ? "white" : "black";

	return (
		<Canvas shadows camera={{ position: [0, 6, 8], fov: 50 }}>
			{/* Set the background color dynamically */}
			<color attach="background" args={[backgroundColor]} />
			<SoftShadows size={25} samples={10} focus={0} />
			<CameraTracker targetRef={toyRigidBodyRef} />
			<ambientLight intensity={0.5} />
			{/* <ContactShadows */}
			{/* 	position={[0, 0, 0]} */}
			{/* 	opacity={0.7} */}
			{/* 	scale={10} */}
			{/* 	blur={1} */}
			{/* 	far={10} */}
			{/* /> */}
			<Physics gravity={[0, -9.81, 0]}>
				<Ground />
				<Toy
					ref={toyRigidBodyRef}
					position={toyPosition}
					rotation={toyRotation}
				/>
			</Physics>

			<SpotlightTracker targetRef={toyRigidBodyRef} />

			{/* <OrbitControls /> */}
		</Canvas>
	);
}
