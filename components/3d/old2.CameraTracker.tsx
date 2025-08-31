import React, { useState, useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBodyApi } from "@react-three/rapier";
import * as THREE from "three";

interface CameraTrackerProps {
	targetRef: React.RefObject<RigidBodyApi>;
}

export function CameraTracker({ targetRef }: CameraTrackerProps) {
	const { camera } = useThree();

	// == NEW: STATE FOR TRACKING ==
	// This state will control whether the camera should continue to follow the object.
	const [isTracking, setIsTracking] = useState(true);
	const [lerpSpeed, setLerpSpeed] = useState(0.05);

	const lastPosition = useRef(new THREE.Vector3());
	const velocity = useRef(new THREE.Vector3());

	// == CAMERA POSITION OFFSETS ==
	const mobileOffset = useMemo(() => new THREE.Vector3(0, 6, 6), []);
	const desktopOffset = useMemo(() => new THREE.Vector3(-6, 3, 6), []);

	// == CAMERA TARGET OFFSETS ==
	const mobileLookAtOffset = useMemo(() => new THREE.Vector3(0, -3, 0), []);
	const desktopLookAtOffset = useMemo(() => new THREE.Vector3(-1, 0, -3), []);

	const [cameraOffset, setCameraOffset] = useState(() =>
		window.innerWidth <= 500 ? mobileOffset : desktopOffset,
	);
	const [lookAtOffset, setLookAtOffset] = useState(() =>
		window.innerWidth <= 500 ? mobileLookAtOffset : desktopLookAtOffset,
	);

	const easeOutQuart = (t: number): number => {
		return 1 - Math.pow(1 - t, 4);
	};

	useEffect(() => {
		const handleResize = () => {
			const isMobile = window.innerWidth <= 500;
			setCameraOffset(isMobile ? mobileOffset : desktopOffset);
			setLookAtOffset(isMobile ? mobileLookAtOffset : desktopLookAtOffset);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [mobileOffset, desktopOffset, mobileLookAtOffset, desktopLookAtOffset]);

	const objectCenter = useRef(new THREE.Vector3()).current;
	const newCameraPosition = useRef(new THREE.Vector3()).current;
	const finalLookAtTarget = useRef(new THREE.Vector3()).current;

	useFrame(() => {
		// The entire tracking logic will now only run if isTracking is true.
		if (isTracking && targetRef.current) {
			const rigidBody = targetRef.current;

			// Get the target's current world position.
			const { x, y, z } = rigidBody.translation();
			objectCenter.set(x, y, z);

			// == NEW: CONDITION TO STOP TRACKING ==
			// The `isSleeping()` method is a reliable way to check if an object has
			// come to rest. We add a check for the y-position to ensure it's near the ground.
			if (rigidBody.isSleeping() && y < 0.5) {
				setIsTracking(false); // Turn off tracking permanently.
			}

			// Calculate the final point for the camera to look at.
			finalLookAtTarget.addVectors(objectCenter, lookAtOffset);

			// Calculate the desired new camera position.
			newCameraPosition.addVectors(objectCenter, cameraOffset);

			// Smoothly interpolate the camera's position.
			// camera.position.lerp(newCameraPosition, 0.1);
			const currentPos = new THREE.Vector3(x, y, z);
			velocity.current.subVectors(currentPos, lastPosition.current);
			const speed = velocity.current.length();

			let baseLerpSpeed = 0.05;
			if (speed < 0.1 && y < 2) baseLerpSpeed = 0.12;
			if (rigidBody.isSleeping()) baseLerpSpeed = 0.08;

			const easedLerp = easeOutQuart(baseLerpSpeed);

			camera.position.lerp(newCameraPosition, easedLerp);

			lastPosition.current.copy(currentPos);

			const predictedPosition = new THREE.Vector3()
				.copy(objectCenter)
				.add(velocity.current.multiplyScalar(2));

			finalLookAtTarget.addVectors(predictedPosition, lookAtOffset);

			// Point the camera at the final, adjusted target.
			// camera.lookAt(finalLookAtTarget);
		}
	});

	return null;
}
