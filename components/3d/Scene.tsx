"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier";

// Import the other components
import { ActionFigure } from "./ActionFigure";
import { ResponsiveCamera } from "./ResponsiveCamera";

// --- Main Scene Component ---
export default function Scene() {
	const actionFigureRef = useRef<RapierRigidBody>(null);

	return (
		<Canvas shadows>
			{/* The camera component handles its own state */}
			<ResponsiveCamera />

			{/* Add some soft, ambient light to the whole scene */}
			<ambientLight intensity={0.5} />

			{/* This is the static key light pointing at the center */}
			<spotLight
				position={[-8, 18, 10]}
				intensity={2.0}
				angle={0.4}
				penumbra={0.3}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-bias={-0.0001}
				shadow-radius={6}
			/>

			{/* The physics world */}
			<Physics gravity={[0, -9.81, 0]}>
				{/* The ActionFigure component */}
				<ActionFigure ref={actionFigureRef} />

				{/* A simple floor for the figure to land on */}
				<RigidBody
					type="fixed"
					colliders="cuboid"
					restitution={0.2}
					friction={1}
				>
					<mesh
						receiveShadow
						position={[0, -0.5, 0]}
						rotation={[-Math.PI / 2, 0, 0]}
					>
						<planeGeometry args={[100, 100]} />
						<meshStandardMaterial color="#f0f0f0" />
					</mesh>
				</RigidBody>
			</Physics>
		</Canvas>
	);
}
