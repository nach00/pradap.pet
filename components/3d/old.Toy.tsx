import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyApi } from "@react-three/rapier";
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

	return (
		<RigidBody
			ref={ref}
			mass={1.2} // Slightly heavier for better bouncing
			restitution={0.4} // Lower restitution for 2-3 bounces then settle
			friction={0.8} // Higher friction to help with settling
			linearDamping={0.1} // Low damping for natural motion
			angularDamping={0.3} // Moderate angular damping
			colliders="hull"
			position={position}
			rotation={rotation}
		>
			<primitive object={scene.clone()} />
		</RigidBody>
	);
});
