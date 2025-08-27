import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBodyApi } from "@react-three/rapier";
import * as THREE from "three";

interface SpotlightTrackerProps {
	targetRef: React.RefObject<RigidBodyApi>;
}

export function SpotlightTracker({ targetRef }: SpotlightTrackerProps) {
	const spotlightRef = useRef<THREE.SpotLight>(null!);
	const spotlightTargetRef = useRef<THREE.Object3D>(null!);

	useEffect(() => {
		if (spotlightRef.current && spotlightTargetRef.current) {
			spotlightRef.current.target = spotlightTargetRef.current;
		}
	}, []);

	useFrame(() => {
		if (targetRef.current) {
			const targetPosition = targetRef.current.translation();
			const { x, y, z } = targetPosition;

			const spotlightHeight = 8;
			const offsetX = 3;
			const offsetZ = 3;

			spotlightRef.current.position.set(
				x + offsetX,
				y + spotlightHeight,
				z + offsetZ,
			);

			spotlightTargetRef.current.position.set(x, y, z);
		}
	});

	return (
		<>
			<object3D ref={spotlightTargetRef} />
			<spotLight
				ref={spotlightRef}
				angle={Math.PI / 6}
				penumbra={0.8}
				castShadow
				shadow-mapSize-width={4096}
				shadow-mapSize-height={4096}
				shadow-camera-near={0.1}
				shadow-camera-far={30}
				shadow-bias={-0.00005}
				intensity={500}
				color="#f4f1ea"
				distance={30}
				decay={2}
			/>
		</>
	);
}
