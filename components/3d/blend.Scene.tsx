import * as THREE from "three";
import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useControls, button } from "leva";
import { ThreeElements, useThree } from "@react-three/fiber";

import Container from "@/components/layout/Container";
import { DataPair } from "@/components/DataPair";
import { H1, H2 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";

import Link from "next/link";

import { Button } from "@/components/ui/button";

type Object3DProps = ThreeElements["object3D"];

export function Scene() {
	return (
		<div className="w-full h-screen rounded-lg overflow-hidden shadow-2xl relative">
			<Canvas
				className="absolute inset-0"
				camera={{
					position: [5, 5, 5],
					fov: 50,
				}}
				shadows
			>
				<Physics>
					<CameraController />
					<color attach="background" args={["#111111"]} />
					<BasicLighting />
					<Toy />
					<Ground />
				</Physics>
			</Canvas>
			<div
				className={cn(
					"absolute mix-blend-difference text-white translate-y-0 translate-x-0 inset-0 flex justify-center items-center font-custom text-[25em] font-stretch-extra-condensed z-10",
					"hover:text-[12em] hover:font-stretch-extra-expanded transition-all",
				)}
			>
				<Container className="flex relative flex-col z-10 w-full h-full justify-end portrait:justify-end">
					<H1
						className={cn(
							"w-[14ch] mb-2",
							"xxs:mb-12",
							"bg-[var(--base-12)]/80 text-[var(--base-1)] rounded-md",
							"p-2 -translate-x-1",
						)}
					>
						Design Engineer & Strategist
					</H1>

					<P className="max-w-[30ch] xxs:block mix-blend-difference">
						Crafting digital experiences where precision meets elegance.
						Currently exploring AI-enhanced design systems.
					</P>

					<div className="gap-12 mt-12 hidden xxs:flex">
						<DataPair
							className={cn(
								"w-min border-none xxxs:flex-col mix-blend-difference",
							)}
							label="Location"
						>
							Texas
						</DataPair>
						<DataPair
							className={cn(
								"w-min border-none xxxs:flex-col mix-blend-difference",
							)}
							label="Status"
						>
							<div className={cn("flex flex-row items-center")}>
								<div
									className={cn(
										"h-[0.5em] w-[0.5em] bg-[var(--accent-9)] rounded-full absolute -translate-x-4 -translate-y-[0.1em] animate-pulse border border-[var(--accent-4)]",
									)}
								/>
								Available
							</div>
						</DataPair>
					</div>

					<Button size="sm" variant="cheese">
						<Link href="mailto:natcha@pradap.pet">Contact →</Link>
					</Button>
				</Container>
			</div>
		</div>
	);
}

function Toy(props: Object3DProps) {
	const object = useGLTF("/toy.glb");
	return (
		<>
			<RigidBody
				colliders="hull"
				position={[0, 2, 0]}
				rotation={[0, 0, 0]}
				type="dynamic"
			>
				<primitive object={object.scene} castShadow receiveShadow {...props} />
			</RigidBody>
		</>
	);
}

function Ground() {
	return (
		<RigidBody type="fixed" colliders="cuboid" position={[0, -2, 0]}>
			<mesh receiveShadow>
				<boxGeometry args={[20, 2, 20]} />
				<meshStandardMaterial color="#444444" roughness={0.8} metalness={0.1} />
			</mesh>
		</RigidBody>
	);
}

function CameraController() {
	const { camera } = useThree();
	const [position, setPosition] = useControls("Camera Position", () => ({
		x: { value: 0, min: -20, max: 20, step: 1 },
		y: { value: 5, min: -20, max: 20, step: 1 },
		z: { value: 5, min: -20, max: 20, step: 1 },
	}));
	const [rotation, setRotation] = useControls("Camera Rotation", () => ({
		x: {
			value: -Math.PI / 4,
			min: -Math.PI / 2,
			max: Math.PI / 2,
			step: Math.PI / 16,
		},
		y: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
		z: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
	}));
	const [{ fov }, setFov] = useControls("FOV", () => ({
		fov: { value: 50, min: 0, max: 120, step: 10 },
	}));
	const handleReset = useCallback(() => {
		setPosition({ x: 0, y: 5, z: 5 });
		setRotation({ x: -Math.PI / 4, y: 0, z: 0 });
		setFov({ fov: 50 });
	}, [setPosition, setRotation, setFov]);
	useControls("Reset Camera", {
		reset: button(handleReset),
	});
	useFrame(() => {
		if (camera && camera instanceof THREE.PerspectiveCamera) {
			camera.position.set(position.x, position.y, position.z);
			camera.rotation.set(rotation.x, rotation.y, rotation.z);
			camera.fov = fov;
			camera.updateProjectionMatrix();
		}
	});
	return null;
}

function BasicLighting() {
	return (
		<>
			<directionalLight position={[-3, 5, 3]} intensity={5} color="#ffffff" />
			<ambientLight intensity={2} color="#ffffff" />
		</>
	);
}
