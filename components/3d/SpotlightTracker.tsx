import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBodyApi } from "@react-three/rapier";
import * as THREE from "three";

interface SpotlightTrackerProps {
	targetRef: React.RefObject<RigidBodyApi>;
}

export function SpotlightTracker({ targetRef }: SpotlightTrackerProps) {
	const spotlightRef = useRef<THREE.SpotLight>(null!);
	const spotlightTargetRef = useRef<THREE.Object3D>(null!);

	// NEW: State to control whether the spotlight is tracking the object.
	const [isTracking, setIsTracking] = useState(true);

	useEffect(() => {
		if (spotlightRef.current && spotlightTargetRef.current) {
			spotlightRef.current.target = spotlightTargetRef.current;
		}
	}, []);

	useFrame(() => {
		// The tracking logic now only runs if isTracking is true.
		if (isTracking && targetRef.current) {
			const rigidBody = targetRef.current;
			const targetPosition = rigidBody.translation();
			const { x, y, z } = targetPosition;

			// NEW: Condition to stop tracking once the object comes to rest.
			// We check if the body is "sleeping" and near the ground plane.
			if (rigidBody.isSleeping() && y < 0.5) {
				setIsTracking(false); // Stop tracking.
			}

			// These calculations will no longer run after isTracking is set to false.
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
				// shadow-bias={-0.0005}
				// shadow-bias={-0.00005}
				intensity={500}
				color="#f4f1ea"
				distance={30}
				decay={2}
			/>
		</>
	);
}
