"use client";

import { useState, useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// --- Hardcoded Camera Properties ---
const DESKTOP_PROPS = {
	fov: 26,
	position: new THREE.Vector3(-5.0, 3.2, 8.0),
	rotation: new THREE.Euler(2.61, -1.0, -1.2, "YXZ"),
};

const MOBILE_PROPS = {
	fov: 24,
	position: new THREE.Vector3(0, 10, 28),
	rotation: new THREE.Euler(-2.3, -1.8, -0.9, "YXZ"),
};

const MOBILE_BREAKPOINT = 500;

// --- Responsive Camera Component ---
export function ResponsiveCamera() {
	const cameraRef = useRef<THREE.PerspectiveCamera>(null);
	const [targetProps, setTargetProps] = useState(DESKTOP_PROPS);

	// This effect listens to window resize and sets the target camera state
	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < MOBILE_BREAKPOINT) {
				setTargetProps(MOBILE_PROPS);
			} else {
				setTargetProps(DESKTOP_PROPS);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Set the initial state on mount

		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty dependency array as props are now constant

	// This frame loop animates the camera towards the target state
	useFrame(() => {
		if (!cameraRef.current) return;

		// Smoothly interpolate (lerp) the camera's position
		cameraRef.current.position.lerp(targetProps.position, 0.05);

		// Create a target quaternion from the target euler rotation
		const targetQuaternion = new THREE.Quaternion().setFromEuler(
			targetProps.rotation,
		);

		// Slerp the camera's quaternion towards the target for smooth rotation
		cameraRef.current.quaternion.slerp(targetQuaternion, 0.05);

		// Smoothly interpolate the camera's field of view
		cameraRef.current.fov = THREE.MathUtils.lerp(
			cameraRef.current.fov,
			targetProps.fov,
			0.05,
		);

		// This is crucial: you must update the projection matrix after changing the FOV
		cameraRef.current.updateProjectionMatrix();
	});

	return (
		<PerspectiveCamera
			ref={cameraRef}
			makeDefault
			// Set initial props to avoid a "jump" on the first frame
			position={DESKTOP_PROPS.position.toArray()}
			rotation={DESKTOP_PROPS.rotation}
			fov={DESKTOP_PROPS.fov}
		/>
	);
}
