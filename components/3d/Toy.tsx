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
			ref={ref} // Attach the ref here
			mass={1}
			restitution={0.7}
			friction={0.5}
			colliders="hull"
			position={position}
			rotation={rotation}
		>
			<primitive object={scene.clone()} />
		</RigidBody>
	);
});
