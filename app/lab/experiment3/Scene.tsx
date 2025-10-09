import * as THREE from "three";
import React, { useEffect, useCallback } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useControls, button } from "leva";
import { ThreeElements, useThree } from "@react-three/fiber";

type Object3DProps = ThreeElements["object3D"];

export default function Scene() {
	return (
		<div className="w-full h-[800px] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
			<Canvas
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
		x: { value: 5, min: -20, max: 20, step: 1 },
		y: { value: 5, min: -20, max: 20, step: 1 },
		z: { value: 5, min: -20, max: 20, step: 1 },
	}));

	const [rotation, setRotation] = useControls("Camera Rotation", () => ({
		x: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
		y: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
		z: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
	}));

	const [{ fov }, setFov] = useControls("FOV", () => ({
		fov: { value: 50, min: 0, max: 120, step: 10 },
	}));

	const handleReset = useCallback(() => {
		setPosition({ x: 5, y: 5, z: 5 });
		setRotation({ x: 0, y: 0, z: 0 });
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
