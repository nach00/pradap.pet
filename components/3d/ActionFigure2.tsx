"use client";

import {
	useRef,
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { TrackingSpotlight } from "./TrackingSpotlight";

export const ActionFigure = forwardRef(function ActionFigure(props, ref) {
	const ballRef = useRef<RapierRigidBody>(null);

	// Expose the ref to parent components
	useImperativeHandle(ref, () => ballRef.current);
	const meshRef = useRef<THREE.Mesh>(null);
	const [isInteractive, setIsInteractive] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const {} = useThree();

	// Load the GLB model
	const { scene } = useGLTF("/natchatoy.glb");

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

	// Random starting position
	const [initialPosition] = useState(() => [
		2,

		12, // Random y between 12 and 15 (high off screen)
		2,
		// (Math.random() - 0.5) * 2, // Random x between -1 and 1 (more centered)
		// 12 + Math.random() * 3, // Random y between 12 and 15 (high off screen)
		// (Math.random() - 0.5) * 2, // Random z between -1 and 1 (more centered)
	]);

	// Add initial downward velocity for more natural drop
	useEffect(() => {
		if (ballRef.current) {
			ballRef.current.setLinvel(
				{
					x: (Math.random() - 0.5) * 0.5,
					y: -2,
					z: (Math.random() - 0.5) * 0.5,
				},
				true,
			);
			ballRef.current.setAngvel(
				{
					x: (Math.random() - 0.5) * 1,
					y: (Math.random() - 0.5) * 1,
					z: (Math.random() - 0.5) * 1,
				},
				true,
			);
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
		// const velocity = ballRef.current.linvel()

		// Reset if toy falls too far or goes out of bounds
		if (
			position.y < -10 ||
			Math.abs(position.x) > 50 ||
			Math.abs(position.z) > 50
		) {
			ballRef.current.setTranslation(
				{
					x: (Math.random() - 0.5) * 2,
					y: 12 + Math.random() * 3,
					z: (Math.random() - 0.5) * 2,
				},
				true,
			);
			ballRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
			ballRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
		}
	});

	const handlePointerDown = (event: any) => {
		if (!isInteractive || !ballRef.current) return;

		event.stopPropagation();

		setIsDragging(true);

		// Add some upward velocity when clicked
		ballRef.current.setLinvel(
			{
				x: (Math.random() - 0.5) * 4,
				y: 3 + Math.random() * 2,
				z: (Math.random() - 0.5) * 4,
			},
			true,
		);

		// Add some rotation
		ballRef.current.setAngvel(
			{
				x: (Math.random() - 0.5) * 2,
				y: (Math.random() - 0.5) * 2,
				z: (Math.random() - 0.5) * 2,
			},
			true,
		);

		// Reset dragging after a moment
		setTimeout(() => setIsDragging(false), 100);
	};

	return (
		<>
			{/* <TrackingSpotlight target={ballRef} /> */}
			<RigidBody
				ref={ballRef}
				position={initialPosition as [number, number, number]}
				colliders="hull"
				restitution={0.4} // Less bouncy for more natural feel
				friction={0.8} // More friction for realistic rolling
				mass={0.3} // Lighter mass for toy-like behavior
				linearDamping={0.4} // More air resistance
				angularDamping={0.5} // More rotational damping
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
		</>
	);
});
