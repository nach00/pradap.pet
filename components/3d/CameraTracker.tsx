import React, { useState, useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBodyApi } from "@react-three/rapier";
import * as THREE from "three";

interface CameraTrackerProps {
	targetRef: React.RefObject<RigidBodyApi>;
}

export function CameraTracker({ targetRef }: CameraTrackerProps) {
	const { camera } = useThree();

	// == CAMERA POSITION OFFSETS ==
	// These vectors determine where the camera is positioned relative to the target.
	const mobileOffset = useMemo(() => new THREE.Vector3(0, 6, 6), []);
	const desktopOffset = useMemo(() => new THREE.Vector3(-6, 3, 6), []);

	// == CAMERA TARGET OFFSETS ==
	// These vectors adjust the point the camera looks at, relative to the target's center.
	// A negative Y value makes the camera look slightly down, pushing the object up in the frame.
	const mobileLookAtOffset = useMemo(() => new THREE.Vector3(0, -3, 0), []);
	const desktopLookAtOffset = useMemo(() => new THREE.Vector3(-3, 0, 0), []); // No offset for desktop

	// State to hold the current camera position and look-at offsets based on screen width.
	const [cameraOffset, setCameraOffset] = useState(() =>
		window.innerWidth <= 500 ? mobileOffset : desktopOffset,
	);
	const [lookAtOffset, setLookAtOffset] = useState(() =>
		window.innerWidth <= 500 ? mobileLookAtOffset : desktopLookAtOffset,
	);

	// This effect runs once to set up a resize event listener.
	useEffect(() => {
		const handleResize = () => {
			const isMobile = window.innerWidth <= 500;
			// Update both the camera position offset and the look-at target offset
			setCameraOffset(isMobile ? mobileOffset : desktopOffset);
			setLookAtOffset(isMobile ? mobileLookAtOffset : desktopLookAtOffset);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [mobileOffset, desktopOffset, mobileLookAtOffset, desktopLookAtOffset]);

	// Reusable THREE.Vector3 objects for performance.
	const objectCenter = useRef(new THREE.Vector3()).current;
	const newCameraPosition = useRef(new THREE.Vector3()).current;
	const finalLookAtTarget = useRef(new THREE.Vector3()).current;

	useFrame(() => {
		if (targetRef.current) {
			// 1. Get the target's current world position (the object's center).
			const { x, y, z } = targetRef.current.translation();
			objectCenter.set(x, y, z);

			// 2. Calculate the final point for the camera to look at by applying the offset.
			finalLookAtTarget.addVectors(objectCenter, lookAtOffset);

			// 3. Calculate the desired new camera position by applying its offset.
			newCameraPosition.addVectors(objectCenter, cameraOffset);

			// 4. Smoothly interpolate the camera's position for a fluid motion.
			camera.position.lerp(newCameraPosition, 0.1);

			// 5. Point the camera at the final, adjusted target.
			camera.lookAt(finalLookAtTarget);
		}
	});

	return null; // This component does not render any visible elements
}
