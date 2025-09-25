import React, { useState, useEffect, useRef } from "react";
import { CameraTracker } from "./CameraTracker";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBodyApi } from "@react-three/rapier";
import { OrbitControls, SoftShadows, ContactShadows } from "@react-three/drei";
import { Toy } from "./Toy";
import { Ground } from "./Ground";
import { SpotlightTracker } from "./SpotlightTracker";
import { useTheme } from "next-themes";
import { Wall } from "./Wall";
import * as THREE from "three";

export function Scene() {
	const [toyPosition, setToyPosition] = useState<[number, number, number]>([
		0, 5, 0,
	]);
	const [toyRotation, setToyRotation] = useState<[number, number, number]>([
		0, 5, 0,
	]);
	const toyRigidBodyRef = useRef<RigidBodyApi>(null);

	const { theme } = useTheme();

	useEffect(() => {
		setToyPosition([1, 2, 3]);
		setToyRotation([1, 2 + Math.random() * 1.5, -3]);
	}, []);

	const backgroundColor = theme === "light" ? "white" : "black";

	return (
		<Canvas shadows camera={{ position: [0, 6, 8], fov: 50 }}>
			<color attach="background" args={[backgroundColor]} />
			<SoftShadows size={25} samples={10} focus={0} />
			<CameraTracker targetRef={toyRigidBodyRef} />
			<ambientLight intensity={0.5} />
			<Physics gravity={[0, -9.81, 0]}>
				<Wall />
				<Ground />
				<Toy
					ref={toyRigidBodyRef}
					position={toyPosition}
					rotation={toyRotation}
				/>
			</Physics>

			<SpotlightTracker targetRef={toyRigidBodyRef} />
		</Canvas>
	);
}
