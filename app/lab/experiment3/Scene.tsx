import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

// Note: The @react-three/rapier library caused a compilation error,
// so the physics simulation has been replaced with manual, visual-only
// movement and simulated gravity using standard R3F and Three.js.

// Scene configuration
const CONFIG = {
	counts: {
		duck: 4,
		dog: 4,
		bear: 4,
		rock: 8,
		tree1: 5,
		tree2: 5,
	},
	scatter: {
		range: 30,
		groundSize: 35,
	},
	yPosition: {
		// Canonical floor is Y=0
		// Animated objects: Start slightly above 0 for visual stability.
		duck: 0.5,
		dog: 0.5,
		bear: 0.5,

		// Static objects: Start exactly at the floor level Y=0.
		rock: 0,
		tree1: 0,
		tree2: 0,
	},
	scale: {
		rock: { min: 0.2, max: 0.4 },
		tree1: { min: 0.2, max: 0.3 },
		tree2: { min: 0.3, max: 0.4 },
	},
	movement: {
		// These values are now used as speed/jump factors for the manual animation
		duck: { force: { min: 4, max: 8 }, jump: { min: 4, max: 6 } },
		dog: { force: { min: 6, max: 10 }, jump: { min: 5, max: 8 } },
		bear: { force: { min: 4, max: 7 }, jump: { min: 3, max: 5 } },
	},
};

// Utility functions
const random = (min, max) => min + Math.random() * (max - min);

const generatePosition = (yPos) => {
	const angle = Math.random() * Math.PI * 2;
	const distance = Math.sqrt(Math.random()) * CONFIG.scatter.range;
	return [Math.cos(angle) * distance, yPos, Math.sin(angle) * distance];
};

const generateRotation = () => [
	random(-0.05, 0.05),
	random(0, Math.PI * 2),
	random(-0.05, 0.05),
];

// Animal component factory (Simulated Movement)
function createAnimal(modelPath) {
	return function Animal({
		position: initialPosition,
		rotation: initialRotation,
		moveForce,
		jumpImpulse,
	}) {
		const { scene } = useGLTF(modelPath);
		// Changed from rigidBodyRef to meshRef (now a regular group)
		const meshRef = useRef(null);
		const jumpTimer = useRef(Math.random() * 5);
		const directionTimer = useRef(Math.random() * 3);
		const currentDirection = useRef({
			x: Math.random() - 0.5,
			z: Math.random() - 0.5,
		});

		// Manual state for position/velocity simulation
		const simulatedPosition = useRef(new THREE.Vector3(...initialPosition));
		const simulatedVelocity = useRef(new THREE.Vector3(0, 0, 0));
		const GRAVITY = -9.8;

		const clonedScene = useMemo(() => {
			const clone = scene.clone();
			clone.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			return clone;
		}, [scene]);

		useFrame((state, delta) => {
			if (!meshRef.current) return;

			// --- SIMULATED PHYSICS & MOVEMENT ---

			// 1. Apply gravity and update vertical position
			simulatedVelocity.current.y += GRAVITY * delta;

			// Check for collision with ground (Y=0)
			if (
				simulatedPosition.current.y + simulatedVelocity.current.y * delta <
				0
			) {
				simulatedPosition.current.y = 0;
				simulatedVelocity.current.y = 0; // Stop vertical movement
			} else {
				simulatedPosition.current.y += simulatedVelocity.current.y * delta;
			}

			// 2. Update direction periodically
			directionTimer.current -= delta;
			if (directionTimer.current <= 0) {
				const angle = Math.random() * Math.PI * 2;
				currentDirection.current = {
					x: Math.cos(angle),
					z: Math.sin(angle),
				};
				directionTimer.current = random(2, 6);
			}

			// 3. Apply horizontal movement
			const speed = moveForce * 0.1;
			simulatedPosition.current.x += currentDirection.current.x * speed * delta;
			simulatedPosition.current.z += currentDirection.current.z * speed * delta;

			// 4. Random jumping
			jumpTimer.current -= delta;
			// Check if near ground
			if (jumpTimer.current <= 0 && simulatedPosition.current.y < 0.1) {
				// Apply jump impulse to Y velocity
				simulatedVelocity.current.y = jumpImpulse * 0.15; // Scale jump impulse for visual height
				jumpTimer.current = random(2, 5);
			}

			// 5. Update mesh position and rotation
			meshRef.current.position.copy(simulatedPosition.current);

			const velX = currentDirection.current.x * speed;
			const velZ = currentDirection.current.z * speed;

			// Face movement direction
			if (Math.abs(velX) > 0.001 || Math.abs(velZ) > 0.001) {
				const targetRotationY = Math.atan2(velX, velZ);

				// Smooth rotation
				meshRef.current.rotation.y = THREE.MathUtils.lerp(
					meshRef.current.rotation.y,
					targetRotationY,
					delta * 5, // rotation speed
				);
			}
		});

		return (
			<group
				ref={meshRef}
				position={initialPosition}
				rotation={initialRotation}
			>
				<primitive object={clonedScene} />
			</group>
		);
	};
}

// Updated Animal component instances (colliderSize argument is no longer used)
const Duck = createAnimal("/duck.gltf");
const Dog = createAnimal("/dog.gltf");
const Bear = createAnimal("/bear.gltf");

// Static object component (no longer uses RigidBody)
function StaticObject({ modelPath, position, rotation, scale }) {
	const { scene } = useGLTF(modelPath);
	const clonedScene = useMemo(() => {
		const clone = scene.clone();
		clone.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		return clone;
	}, [scene]);

	return (
		<primitive
			object={clonedScene}
			position={position}
			rotation={rotation}
			scale={scale}
		/>
	);
}

export default function App() {
	const sceneData = useMemo(() => {
		const createAnimals = (count, type) =>
			Array.from({ length: count }, () => ({
				position: generatePosition(CONFIG.yPosition[type]),
				rotation: generateRotation(),
				moveForce: random(
					CONFIG.movement[type].force.min,
					CONFIG.movement[type].force.max,
				),
				jumpImpulse: random(
					CONFIG.movement[type].jump.min,
					CONFIG.movement[type].jump.max,
				),
			}));

		const createObjects = (count, type, scaleConfig) =>
			Array.from({ length: count }, () => ({
				position: generatePosition(CONFIG.yPosition[type]),
				rotation: generateRotation(),
				scale: random(scaleConfig.min, scaleConfig.max),
			}));

		return {
			ducks: createAnimals(CONFIG.counts.duck, "duck"),
			dogs: createAnimals(CONFIG.counts.dog, "dog"),
			bears: createAnimals(CONFIG.counts.bear, "bear"),
			rocks: createObjects(CONFIG.counts.rock, "rock", CONFIG.scale.rock),
			tree1s: createObjects(CONFIG.counts.tree1, "tree1", CONFIG.scale.tree1),
			tree2s: createObjects(CONFIG.counts.tree2, "tree2", CONFIG.scale.tree2),
		};
	}, []);

	return (
		<div className="w-full h-[800px] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
			{/* Load GLTF models required by the components */}
			<div style={{ display: "none" }}>
				<img src="/duck.gltf" alt="preload" />
				<img src="/dog.gltf" alt="preload" />
				<img src="/bear.gltf" alt="preload" />
				<img src="/rock.gltf" alt="preload" />
				<img src="/tree1.gltf" alt="preload" />
				<img src="/tree2.gltf" alt="preload" />
			</div>

			<Canvas
				camera={{ position: [12, 6, 12], fov: 45 }}
				shadows
				gl={{
					antialias: true,
					toneMapping: THREE.ACESFilmicToneMapping,
					toneMappingExposure: 0.6,
					shadowMap: {
						enabled: true,
						type: THREE.PCFSoftShadowMap,
					},
				}}
			>
				<color attach="background" args={["#87CEEB"]} />

				<ambientLight intensity={0.45} color="#99ffff" />

				<directionalLight
					position={[20, 30, 15]}
					intensity={2}
					color="#fffacd"
					castShadow
					shadow-mapSize={[4096, 4096]}
					shadow-camera-far={60}
					shadow-camera-left={-30}
					shadow-camera-right={30}
					shadow-camera-top={30}
					shadow-camera-bottom={-30}
					shadow-bias={-0.0001}
					shadow-normalBias={0.02}
				/>

				<directionalLight
					position={[-15, 20, -10]}
					intensity={0.4}
					color="#cfe2ff"
				/>

				<hemisphereLight
					args={["#87ceeb", "#98d98e", 0.5]}
					position={[0, 50, 0]}
				/>

				{/* Physics wrapper removed */}
				{/* Dynamic Animals */}
				{sceneData.ducks.map((data, i) => (
					<Duck key={`duck-${i}`} {...data} />
				))}
				{sceneData.dogs.map((data, i) => (
					<Dog key={`dog-${i}`} {...data} />
				))}
				{sceneData.bears.map((data, i) => (
					<Bear key={`bear-${i}`} {...data} />
				))}

				{/* Static Objects */}
				{sceneData.rocks.map((data, i) => (
					<StaticObject key={`rock-${i}`} modelPath="/rock.gltf" {...data} />
				))}
				{sceneData.tree1s.map((data, i) => (
					<StaticObject key={`tree1-${i}`} modelPath="/tree1.gltf" {...data} />
				))}
				{sceneData.tree2s.map((data, i) => (
					<StaticObject key={`tree2-${i}`} modelPath="/tree2.gltf" {...data} />
				))}

				{/* Fixed Ground Plane (now just a visual mesh) */}
				<mesh
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, 0, 0]} // Fixed Y position at 0
					receiveShadow
				>
					<planeGeometry args={[80, 80, 128, 128]} />
					<meshStandardMaterial
						color="#4ade80"
						metalness={0}
						roughness={0.95}
					/>
				</mesh>
				{/* Physics logic end */}

				<OrbitControls
					enableDamping
					dampingFactor={0.08}
					rotateSpeed={0.4}
					minDistance={8}
					maxDistance={40}
					maxPolarAngle={Math.PI / 2.1}
					minPolarAngle={0.2}
					target={[0, 0, 0]}
				/>
			</Canvas>
		</div>
	);
}
