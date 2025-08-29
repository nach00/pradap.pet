import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyApi } from "@react-three/rapier";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

interface ToyProps {
	position: [number, number, number];
	rotation: [number, number, number];
}

export const Toy = forwardRef<RigidBodyApi, ToyProps>(function Toy(
	{ position, rotation },
	ref,
) {
	const { scene } = useGLTF("/toy.glb");

	const size: number = 1.5;
	scene.scale.set(size, size, size);
	scene.traverse((child) => {
		if ((child as THREE.Mesh).isMesh) {
			child.castShadow = true;
			child.receiveShadow = true;
		}
	});

	// This function will handle the click event
	const handleClick = (event: ThreeEvent<MouseEvent>) => {
		// Stop the event from propagating to other objects in the scene
		event.stopPropagation();

		// Ensure the ref is valid (TypeScript-safe check)
		if (ref && "current" in ref && ref.current) {
			const rigidBody = ref.current;

			// 1. Get the world position of the rigid body's center
			const objectPosition = new THREE.Vector3().copy(rigidBody.translation());

			// 2. The event.point is the exact world position where the click occurred on the mesh
			const clickPoint = event.point;

			// 3. Calculate the direction from the object's center to the click point
			const direction = new THREE.Vector3().subVectors(
				clickPoint,
				objectPosition,
			);

			// Normalize the vector to get a pure direction (length of 1)
			direction.normalize();

			// 4. Define the strength of the "nudge"
			const nudgeStrength = 5;

			// 5. Apply an impulse to the rigid body
			rigidBody.applyImpulse(direction.multiplyScalar(nudgeStrength), true);
		}
	};

	return (
		<RigidBody
			ref={ref} // Attach the forwarded ref here
			mass={1}
			restitution={0.7}
			friction={0.5}
			colliders="hull"
			position={position}
			rotation={rotation}
		>
			{/* Attach the onClick handler to the visual part of your component */}
			<primitive object={scene.clone()} onClick={handleClick} />
		</RigidBody>
	);
});
