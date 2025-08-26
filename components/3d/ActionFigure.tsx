"use client";

import {
	useRef,
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const ActionFigure = forwardRef(function ActionFigure(props, ref) {
	const ballRef = useRef<RapierRigidBody>(null);

	// Expose the ref to parent components
	useImperativeHandle(ref, () => ballRef.current);
	const meshRef = useRef<THREE.Mesh>(null);
	const [isInteractive, setIsInteractive] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	// Load the GLB model
	const { scene } = useGLTF("/toy.glb");

	// Enable shadows on all meshes in the GLB model
	useEffect(() => {
		if (scene) {
			scene.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
		}
	}, [scene]);

	// Fixed starting position
	const [initialPosition] = useState(() => [0, 13, 0]);

	// Add initial downward velocity
	useEffect(() => {
		if (ballRef.current) {
			ballRef.current.setLinvel({ x: 0, y: -2, z: 0 }, true);
			ballRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
		}
	}, []);

	// Make interactive after a short delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsInteractive(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	// Simple physics tracking
	useFrame(() => {
		if (!ballRef.current) return;

		const position = ballRef.current.translation();

		// Reset if toy falls too far or goes out of bounds
		if (
			position.y < -10 ||
			Math.abs(position.x) > 50 ||
			Math.abs(position.z) > 50
		) {
			ballRef.current.setTranslation({ x: 0, y: 13, z: 0 }, true);
			ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
			ballRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
		}
	});

	const handlePointerDown = (event: any) => {
		if (!isInteractive || !ballRef.current) return;

		event.stopPropagation();
		setIsDragging(true);

		// Add some upward velocity when clicked
		ballRef.current.setLinvel({ x: 0, y: 5, z: 0 }, true);

		// Add some rotation
		ballRef.current.setAngvel({ x: 1, y: 1.5, z: 0.5 }, true);

		// Reset dragging after a moment
		setTimeout(() => setIsDragging(false), 100);
	};

	return (
		<RigidBody
			ref={ballRef}
			position={initialPosition as [number, number, number]}
			colliders="hull"
			restitution={0.4}
			friction={0.8}
			mass={0.3}
			linearDamping={0.4}
			angularDamping={0.5}
		>
			<group
				ref={meshRef}
				scale={[2.5, 2.5, 2.5]}
				onPointerDown={handlePointerDown}
				style={{
					cursor: isInteractive ? (isDragging ? "grabbing" : "grab") : "wait",
				}}
			>
				<primitive object={scene.clone()} castShadow receiveShadow />
			</group>
		</RigidBody>
	);
});
