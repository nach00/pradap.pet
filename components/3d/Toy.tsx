import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyApi } from "@react-three/rapier";
import * as THREE from "three";

interface ToyProps {
	position?: [number, number, number];
	rotation?: [number, number, number];
	// Physics properties that can be overridden
	mass?: number;
	restitution?: number;
	friction?: number;
	linearDamping?: number;
	angularDamping?: number;
	linearVelocity?: [number, number, number];
	angularVelocity?: [number, number, number];
}

export const Toy = forwardRef<RigidBodyApi, ToyProps>(function Toy(
	{
		position = [0, 0, 0],
		rotation = [0, 0, 0],
		mass = 2.0, // Heavier for stability
		restitution = 0.1, // Very low bounce - 90% energy loss
		friction = 1.0, // Maximum friction
		linearDamping = 2.5, // Strong damping for quick settling
		angularDamping = 5.0, // Very strong angular damping to prevent wobble
		linearVelocity,
		angularVelocity,
	},
	ref,
) {
	const { scene } = useGLTF("/toy.glb");

	// Clone and setup the scene
	const clonedScene = React.useMemo(() => {
		const clone = scene.clone();
		const size = 1.5;
		clone.scale.set(size, size, size);

		clone.traverse((child) => {
			if ((child as THREE.Mesh).isMesh) {
				child.castShadow = true;
				child.receiveShadow = true;

				// Ensure proper material properties for better rendering
				const mesh = child as THREE.Mesh;
				if (mesh.material) {
					const material = mesh.material as THREE.MeshStandardMaterial;
					material.needsUpdate = true;
				}
			}
		});

		return clone;
	}, [scene]);

	return (
		<RigidBody
			ref={ref}
			mass={mass}
			restitution={restitution}
			friction={friction}
			linearDamping={linearDamping}
			angularDamping={angularDamping}
			linearVelocity={linearVelocity}
			angularVelocity={angularVelocity}
			colliders="hull"
			position={position}
			rotation={rotation}
			type="dynamic"
			canSleep={true} // Allow the body to sleep when settled
			sleepThreshold={0.01} // Sleep when velocity is very low
		>
			<primitive object={clonedScene} />
		</RigidBody>
	);
});
