import * as THREE from "three";
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

// Initialize RectAreaLight uniforms
RectAreaLightUniformsLib.init();

// Configuration variables
const GRID_SPACING = 1;
const ROTATION_SPEED = 0.5;
const GRID_SIZE_X = 10; // Number of cubes along X axis
const GRID_SIZE_Z = 6; // Number of cubes along Z axis

// Box dimensions (min and max for random sizing)
const BOX_WIDTH_MIN = 0.5;
const BOX_WIDTH_MAX = 1.2;
const BOX_HEIGHT_MIN = 0.5;
const BOX_HEIGHT_MAX = 1.2;
const BOX_DEPTH_MIN = 0.5;
const BOX_DEPTH_MAX = 1.2;

function RotatingCube({ position }: { position: [number, number, number] }) {
	const meshRef = useRef<THREE.Mesh>(null);
	const groupRef = useRef<THREE.Group>(null);

	// Generate random dimensions within min/max range
	const dimensions = useRef({
		width: BOX_WIDTH_MIN + Math.random() * (BOX_WIDTH_MAX - BOX_WIDTH_MIN),
		height: BOX_HEIGHT_MIN + Math.random() * (BOX_HEIGHT_MAX - BOX_HEIGHT_MIN),
		depth: BOX_DEPTH_MIN + Math.random() * (BOX_DEPTH_MAX - BOX_DEPTH_MIN),
	});

	// Generate random light properties
	const lightConfig = useRef({
		color: [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff, 0xffff00, 0x00ffff][
			Math.floor(Math.random() * 6)
		],
		side: Math.floor(Math.random() * 6), // 0-5 for six sides
		intensity: 2 + Math.random() * 3,
	});

	// Calculate light position and rotation based on side
	const getLightTransform = () => {
		const { width, height, depth } = dimensions.current;
		const offset = 0.1; // Small offset from the box surface

		switch (lightConfig.current.side) {
			case 0: // Front (+Z)
				return {
					position: [0, 0, depth / 2 + offset] as [number, number, number],
					rotation: [0, 0, 0] as [number, number, number],
				};
			case 1: // Back (-Z)
				return {
					position: [0, 0, -(depth / 2 + offset)] as [number, number, number],
					rotation: [0, Math.PI, 0] as [number, number, number],
				};
			case 2: // Top (+Y)
				return {
					position: [0, height / 2 + offset, 0] as [number, number, number],
					rotation: [-Math.PI / 2, 0, 0] as [number, number, number],
				};
			case 3: // Bottom (-Y)
				return {
					position: [0, -(height / 2 + offset), 0] as [number, number, number],
					rotation: [Math.PI / 2, 0, 0] as [number, number, number],
				};
			case 4: // Right (+X)
				return {
					position: [width / 2 + offset, 0, 0] as [number, number, number],
					rotation: [0, Math.PI / 2, 0] as [number, number, number],
				};
			case 5: // Left (-X)
				return {
					position: [-(width / 2 + offset), 0, 0] as [number, number, number],
					rotation: [0, -Math.PI / 2, 0] as [number, number, number],
				};
			default:
				return {
					position: [0, 0, depth / 2 + offset] as [number, number, number],
					rotation: [0, 0, 0] as [number, number, number],
				};
		}
	};

	const lightTransform = getLightTransform();

	useFrame((state, delta) => {
		if (groupRef.current) {
			groupRef.current.rotation.x += delta * ROTATION_SPEED;
			groupRef.current.rotation.y += delta * ROTATION_SPEED;
		}
	});

	return (
		<group ref={groupRef} position={position}>
			<mesh ref={meshRef} castShadow>
				<boxGeometry
					args={[
						dimensions.current.width,
						dimensions.current.height,
						dimensions.current.depth,
					]}
				/>
				<meshStandardMaterial color="#2c3e50" metalness={0.2} roughness={0.3} />
			</mesh>

			{/* RectAreaLight on random side */}
			<rectAreaLight
				color={lightConfig.current.color}
				intensity={lightConfig.current.intensity}
				width={
					Math.max(dimensions.current.width, dimensions.current.depth) * 0.8
				}
				height={
					Math.max(dimensions.current.height, dimensions.current.depth) * 0.8
				}
				position={lightTransform.position}
				rotation={lightTransform.rotation}
			/>
		</group>
	);
}

export default function Scene() {
	// Generate grid positions based on GRID_SIZE_X and GRID_SIZE_Z
	const generateGridPositions = (size: number) => {
		const positions = [];
		const offset = (size - 1) / 2;
		for (let i = 0; i < size; i++) {
			positions.push((i - offset) * GRID_SPACING);
		}
		return positions;
	};

	const xPositions = generateGridPositions(GRID_SIZE_X);
	const zPositions = generateGridPositions(GRID_SIZE_Z);

	return (
		<div className="w-full h-[800px] bg-gradient-to-br from-[var(--base-9)] to-[var(--base-1)] rounded-lg overflow-hidden shadow-2xl">
			<Canvas
				camera={{ position: [0, 4, 10], fov: 50 }}
				className="w-full h-full"
			>
				<color attach="background" args={["#110011"]} />
				<fog attach="fog" args={["#110011", 8, 18]} />
				{/* Dark, moody lighting setup */}
				<ambientLight intensity={0.05} />
				<directionalLight
					position={[10, 10, 5]}
					intensity={2}
					color="#ffcc00"
					castShadow
				/>
				<directionalLight
					position={[-10, -10, -5]}
					intensity={0.1}
					color="#110011"
				/>
				<pointLight position={[0, 5, 0]} intensity={0.3} color="#ffcc00" />
				<pointLight position={[-3, 1, 3]} intensity={0.2} color="#110011" />
				{/* Dynamic grid of rotating cubes */}
				{xPositions.map((x) =>
					zPositions.map((z) => (
						<RotatingCube key={`${x}-${z}`} position={[x, 0, z]} />
					)),
				)}
				{/* Dark ground plane */}
				<mesh
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, -2, 0]}
					receiveShadow
				>
					<planeGeometry args={[25, 25]} />
					<meshStandardMaterial
						color="#0d0d0d"
						metalness={0.3}
						roughness={0.7}
					/>
				</mesh>
				{/* Camera controls */}
				<OrbitControls enableDamping dampingFactor={0.05} rotateSpeed={0.5} />
			</Canvas>
		</div>
	);
}
