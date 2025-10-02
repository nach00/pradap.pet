import React, { useState, useEffect, useRef } from "react";
import { CameraTracker } from "./CameraTracker";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBodyApi } from "@react-three/rapier";
import { Toy } from "./Toy";
import { Ground } from "./Ground";
import { SpotlightTracker } from "./SpotlightTracker";
import { useTheme } from "next-themes";
import { Wall } from "./Wall";
import { useFrame } from "@react-three/fiber";
import { SoftShadows, useGLTF } from "@react-three/drei";

export function Scene() {
	const [toyPosition, setToyPosition] = useState<[number, number, number]>([
		0, 5, 0,
	]);
	const [toyRotation, setToyRotation] = useState<[number, number, number]>([
		0, 5, 0,
	]);
	const toyRigidBodyRef = useRef<RigidBodyApi>(null);

	const [isAnimationComplete, setIsAnimationComplete] = useState(false);
	const [settlementFrameCount, setSettlementFrameCount] = useState(0);

	const { theme } = useTheme();

	useEffect(() => {
		setToyPosition([1, 2, 3]);
		setToyRotation([1, 2 + Math.random() * 1.5, -3]);
	}, []);

	const backgroundColor = theme === "light" ? "white" : "black";

	return (
		<Canvas shadows camera={{ position: [0, 6, 8], fov: 50 }}>
			<color attach="background" args={[backgroundColor]} />
			<SoftShadows size={25} samples={10} focus={0} />
			<CameraTracker targetRef={toyRigidBodyRef} />
			<ambientLight intensity={0.5} />
			{!isAnimationComplete ? (
				<Physics gravity={[0, -9.81, 0]}>
					<AnimationTracker
						toyRigidBodyRef={toyRigidBodyRef}
						isAnimationComplete={isAnimationComplete}
						setIsAnimationComplete={setIsAnimationComplete}
						settlementFrameCount={settlementFrameCount}
						setSettlementFrameCount={setSettlementFrameCount}
						setToyPosition={setToyPosition}
						setToyRotation={setToyRotation}
					/>
					<Wall />
					<Ground />
					<Toy
						ref={toyRigidBodyRef}
						position={toyPosition}
						rotation={toyRotation}
					/>
				</Physics>
			) : (
				<>
					{/* <Toy */}
					{/* 	ref={toyRigidBodyRef} */}
					{/* 	position={toyPosition} */}
					{/* 	rotation={toyRotation} */}
					{/* /> */}
					<Wall />
					<Ground />
					<StaticToy position={toyPosition} rotation={toyRotation} />
				</>
			)}
			<SpotlightTracker targetRef={toyRigidBodyRef} />
		</Canvas>
	);
}

function AnimationTracker({
	toyRigidBodyRef,
	isAnimationComplete,
	setIsAnimationComplete,
	settlementFrameCount,
	setSettlementFrameCount,
	setToyPosition,
	setToyRotation,
}: {
	toyRigidBodyRef: React.RefObject<RigidBodyApi>;
	isAnimationComplete: boolean;
	setIsAnimationComplete: (value: boolean) => void;
	settlementFrameCount: number;
	setSettlementFrameCount: (value: number | ((prev: number) => number)) => void;
	setToyPosition: (position: [number, number, number]) => void;
	setToyRotation: (rotation: [number, number, number]) => void;
}) {
	useFrame(() => {
		if (toyRigidBodyRef.current && !isAnimationComplete) {
			const linvel = toyRigidBodyRef.current.linvel();
			const angvel = toyRigidBodyRef.current.angvel();

			const linearSpeed = Math.sqrt(
				linvel.x ** 2 + linvel.y ** 2 + linvel.z ** 2,
			);
			const angularSpeed = Math.sqrt(
				angvel.x ** 2 + angvel.y ** 2 + angvel.z ** 2,
			);
			if (linearSpeed < 0.1 && angularSpeed < 0.1) {
				setSettlementFrameCount((prev) => prev + 1);
				if (settlementFrameCount > 120) {
					// Store final position before stopping animation
					const finalPosition = toyRigidBodyRef.current.translation();
					const finalRotation = toyRigidBodyRef.current.rotation();

					setToyPosition([finalPosition.x, finalPosition.y, finalPosition.z]);
					setToyRotation([finalRotation.x, finalRotation.y, finalRotation.z]);
					setIsAnimationComplete(true);
				}
			} else {
				setSettlementFrameCount(0);
			}
			if (linearSpeed < 0.1 && angularSpeed < 0.1) {
				setSettlementFrameCount((prev) => prev + 1);
				if (settlementFrameCount > 120) {
					setIsAnimationComplete(true);
				}
			} else {
				setSettlementFrameCount(0);
			}
		}
	});

	return null;
}

function StaticToy({
	position,
	rotation,
}: {
	position: [number, number, number];
	rotation: [number, number, number];
}) {
	const { scene } = useGLTF("/toy.glb");

	const size: number = 1.5;
	const clonedScene = scene.clone();
	clonedScene.scale.set(size, size, size);
	clonedScene.traverse((child) => {
		if ((child as THREE.Mesh).isMesh) {
			child.castShadow = true;
			child.receiveShadow = true;
		}
	});

	return (
		<mesh position={position} rotation={rotation}>
			<primitive object={clonedScene} />
		</mesh>
	);
}
