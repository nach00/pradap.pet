import * as THREE from "three";
import React, { useMemo, useRef, useEffect, useCallback } from "react";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody, HeightfieldCollider } from "@react-three/rapier";
import { PlaneGeometry } from "three";
import { useControls, folder, button, useCreateStore } from "leva";
import { ThreeElements, useThree } from "@react-three/fiber";

type Object3DProps = ThreeElements["object3D"];
type MeshProps = ThreeElements["mesh"];

const heightFieldHeight = 10;
const heightFieldWidth = 10;
const heightField = Array.from({
	length: heightFieldHeight * heightFieldWidth,
}).map((_, index) => {
	return Math.random();
});

export default function Scene() {
	return (
		<div className="w-full h-[800px] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
			<Canvas
				camera={{
					position: [0, 0, 0],
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

	const [position, setPosition] = useControls("Position", () => ({
		x: { value: 0, min: -20, max: 20, step: 1 },
		y: { value: 0, min: -20, max: 20, step: 1 },
		z: { value: 0, min: -20, max: 20, step: 1 },
	}));

	const [rotation, setRotation] = useControls("Rotation", () => ({
		x: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
		y: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
		z: { value: 0, min: -Math.PI / 2, max: Math.PI / 2, step: Math.PI / 16 },
	}));

	const [{ fov }, setFov] = useControls("Camera", () => ({
		fov: { value: 50, min: 0, max: 120, step: 10 },
	}));

	const handleReset = useCallback(() => {
		setPosition({ x: 0, y: 0, z: 0 });
		setRotation({ x: 0, y: 0, z: 0 });
		setFov({ fov: 50 });
	}, [setPosition, setRotation, setFov]);

	useControls("Controls", {
		reset: button(handleReset),
	});

	useEffect(() => {
		if (camera && camera instanceof THREE.PerspectiveCamera) {
			camera.position.set(position.x, position.y, position.z);
			camera.rotation.set(rotation.x, rotation.y, rotation.z);
			camera.fov = fov;
			camera.updateProjectionMatrix();
		}
	}, [camera, position, rotation, fov]);

	return null;
}

function BasicLighting() {
	return (
		<>
			{/* Main directional light from above */}
			<directionalLight
				position={[5, 10, 5]}
				intensity={1}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-camera-near={0.1}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
			/>

			{/* Fill light from the side */}
			<directionalLight position={[-3, 5, 3]} intensity={0.3} color="#ffffff" />

			{/* Ambient light for overall illumination */}
			<ambientLight intensity={0.2} color="#404040" />
		</>
	);
}
