import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	useMemo,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBodyApi } from "@react-three/rapier";
import { SoftShadows } from "@react-three/drei";
import { useTheme } from "next-themes";
import { Perf } from "r3f-perf";

// Import your existing components
import { CameraTracker } from "./CameraTracker";
import { Toy } from "./Toy";
import { Ground } from "./Ground";
import { SpotlightTracker } from "./SpotlightTracker";
import { Wall } from "./Wall";

// Refined physics for quick settling after 2-3 bounces
const PHYSICS_CONFIG = {
	gravity: [0, -9.81, 0] as [number, number, number],
	settling: {
		velocityThreshold: 0.01,
		angularThreshold: 0.05,
		minFrames: 60, // 1 second at 60fps
		maxWaitTime: 4000, // Maximum 4 seconds before forced settle
		checkInterval: 30, // Check every 0.5 seconds
	},
	material: {
		restitution: 0.25, // Low bounce - loses 75% energy per bounce
		friction: 0.9, // High friction for quick stopping
		linearDamping: 0.8, // Strong damping after impact
		angularDamping: 0.85, // Quick rotation damping
		mass: 1.2, // Slightly heavier for more grounded feel
	},
	initial: {
		dropHeight: [3, 4], // Drop from 3-4 units high
		horizontalSpread: 0.3, // Minimal horizontal movement
		spin: 1.5, // Gentle initial spin
	},
} as const;

const VISUAL_CONFIG = {
	camera: {
		position: [0, 6, 8] as [number, number, number],
		fov: 50,
	},
	lighting: {
		ambient: 0.5,
		shadows: {
			size: 25,
			samples: 10,
			focus: 0,
		},
	},
} as const;

// Simplified physics monitor that ensures quick settling
interface PhysicsMonitorProps {
	rigidBodyRef: React.RefObject<RigidBodyApi>;
	onSettled: () => void;
}

const PhysicsMonitor: React.FC<PhysicsMonitorProps> = React.memo(
	({ rigidBodyRef, onSettled }) => {
		const settledFrames = useRef(0);
		const hasSettled = useRef(false);
		const startTime = useRef(Date.now());
		const bounceCount = useRef(0);
		const lastY = useRef<number | null>(null);
		const velocityHistory = useRef<number[]>([]);

		useFrame(() => {
			if (hasSettled.current || !rigidBodyRef.current) return;

			const elapsedTime = Date.now() - startTime.current;

			// Force settle after max wait time
			if (elapsedTime > PHYSICS_CONFIG.settling.maxWaitTime) {
				hasSettled.current = true;
				onSettled();
				return;
			}

			const body = rigidBodyRef.current;
			const position = body.translation();
			const linvel = body.linvel();
			const angvel = body.angvel();

			// Detect bounces by monitoring Y velocity changes
			if (lastY.current !== null) {
				const yVelChange = linvel.y - lastY.current;
				if (yVelChange > 2 && position.y < 1) {
					bounceCount.current++;

					// After 2-3 bounces, apply strong damping
					if (bounceCount.current >= 3) {
						body.setLinvel(
							{
								x: linvel.x * 0.3,
								y: linvel.y * 0.5,
								z: linvel.z * 0.3,
							},
							true,
						);
						body.setAngvel(
							{
								x: angvel.x * 0.2,
								y: angvel.y * 0.2,
								z: angvel.z * 0.2,
							},
							true,
						);
					}
				}
			}
			lastY.current = linvel.y;

			// Calculate total velocity
			const linearSpeed = Math.sqrt(
				linvel.x ** 2 + linvel.y ** 2 + linvel.z ** 2,
			);
			const angularSpeed = Math.sqrt(
				angvel.x ** 2 + angvel.y ** 2 + angvel.z ** 2,
			);

			// Track velocity history for smoother detection
			velocityHistory.current.push(linearSpeed);
			if (velocityHistory.current.length > 5) {
				velocityHistory.current.shift();
			}

			const avgVelocity =
				velocityHistory.current.reduce((a, b) => a + b, 0) /
				velocityHistory.current.length;

			// Check if effectively settled
			const isSettled =
				avgVelocity < PHYSICS_CONFIG.settling.velocityThreshold &&
				angularSpeed < PHYSICS_CONFIG.settling.angularThreshold &&
				Math.abs(position.y) < 0.5; // Must be near ground

			if (isSettled || bounceCount.current >= 1) {
				settledFrames.current++;

				// If settled for enough frames or bounced enough, stop
				if (settledFrames.current >= PHYSICS_CONFIG.settling.minFrames) {
					// Final damping to ensure complete stop
					body.setLinvel({ x: 0, y: 0, z: 0 }, true);
					body.setAngvel({ x: 0, y: 0, z: 0 }, true);
					hasSettled.current = true;
					onSettled();
				}
			} else {
				settledFrames.current = Math.max(0, settledFrames.current - 2);
			}
		});

		return null;
	},
);

PhysicsMonitor.displayName = "PhysicsMonitor";

// Enhanced Toy with controlled physics
interface ToyWrapperProps {
	position: [number, number, number];
	rotation: [number, number, number];
	rigidBodyRef: React.RefObject<RigidBodyApi>;
}

const ToyWrapper: React.FC<ToyWrapperProps> = React.memo(
	React.forwardRef(({ position, rotation }, ref) => {
		// Minimal initial velocity for controlled drop
		const initialVelocity = useMemo(
			() => ({
				x: (Math.random() - 0.5) * PHYSICS_CONFIG.initial.horizontalSpread,
				y: -1, // Gentle downward velocity
				z: (Math.random() - 0.5) * PHYSICS_CONFIG.initial.horizontalSpread,
			}),
			[],
		);

		const initialAngularVelocity = useMemo(
			() => ({
				x: (Math.random() - 0.5) * PHYSICS_CONFIG.initial.spin,
				y: (Math.random() - 0.5) * PHYSICS_CONFIG.initial.spin,
				z: (Math.random() - 0.5) * PHYSICS_CONFIG.initial.spin,
			}),
			[],
		);

		return (
			<Toy
				ref={ref}
				position={position}
				rotation={rotation}
				restitution={PHYSICS_CONFIG.material.restitution}
				friction={PHYSICS_CONFIG.material.friction}
				linearDamping={PHYSICS_CONFIG.material.linearDamping}
				angularDamping={PHYSICS_CONFIG.material.angularDamping}
				mass={PHYSICS_CONFIG.material.mass}
				linearVelocity={initialVelocity}
				angularVelocity={initialAngularVelocity}
			/>
		);
	}),
);

ToyWrapper.displayName = "ToyWrapper";

// Scene content
interface SceneContentProps {
	toyRigidBodyRef: React.RefObject<RigidBodyApi>;
	toyPosition: [number, number, number];
	toyRotation: [number, number, number];
	onSettled: () => void;
}

const SceneContent: React.FC<SceneContentProps> = React.memo(
	({ toyRigidBodyRef, toyPosition, toyRotation, onSettled }) => (
		<>
			<SoftShadows {...VISUAL_CONFIG.lighting.shadows} />
			<CameraTracker targetRef={toyRigidBodyRef} />
			<ambientLight intensity={VISUAL_CONFIG.lighting.ambient} />

			<Physics
				gravity={PHYSICS_CONFIG.gravity}
				timeStep="vary"
				interpolate={true}
			>
				<Wall />
				<Ground
					restitution={0.2} // Low bounce ground
					friction={1.0} // Maximum friction
				/>
				<ToyWrapper
					ref={toyRigidBodyRef}
					position={toyPosition}
					rotation={toyRotation}
				/>
				<PhysicsMonitor rigidBodyRef={toyRigidBodyRef} onSettled={onSettled} />
			</Physics>

			<SpotlightTracker targetRef={toyRigidBodyRef} />
		</>
	),
);

SceneContent.displayName = "SceneContent";

// Main Scene component
export const Scene: React.FC = () => {
	const [isSettled, setIsSettled] = useState(false);
	const toyRigidBodyRef = useRef<RigidBodyApi>(null);
	const { theme } = useTheme();

	// Controlled initial position for predictable drops
	const initialPosition = useMemo<[number, number, number]>(() => {
		const height = PHYSICS_CONFIG.initial.dropHeight;
		return [
			1, 2,
			3,
			// (Math.random() - 0.5) * 0.5, // Slight x variation
			// height[0] + Math.random() * (height[1] - height[0]), // Random height in range
			// (Math.random() - 0.5) * 0.5, // Slight z variation
		];
	}, []);

	// Gentle initial rotation
	const initialRotation = useMemo<[number, number, number]>(
		() => [
			1,
			2 + Math.random() * 1.5,
			-3,
			// Math.random() * Math.PI * 0.5,
			// Math.random() * Math.PI * 2,
			// Math.random() * Math.PI * 0.5,
		],
		[],
	);

	const [toyPosition, setToyPosition] =
		useState<[number, number, number]>(initialPosition);
	const [toyRotation, setToyRotation] =
		useState<[number, number, number]>(initialRotation);

	// Handle settling with smooth transition
	const handleSettled = useCallback(() => {
		requestAnimationFrame(() => {
			setIsSettled(true);
		});
	}, []);

	// Background color based on theme
	const backgroundColor = useMemo(
		() => (theme === "light" ? "#fafafa" : "#0a0a0a"),
		[theme],
	);

	return (
		<Canvas
			shadows
			camera={VISUAL_CONFIG.camera}
			frameloop={isSettled ? "demand" : "always"}
			dpr={[1, 2]}
			performance={{ min: 0.5 }}
			gl={{
				antialias: true,
				alpha: false,
				powerPreference: "high-performance",
				toneMapping: 1, // ACESFilmic for better colors
			}}
		>
			{process.env.NODE_ENV === "development" && (
				<Perf className="!top-24 !left-4" />
			)}
			<color attach="background" args={[backgroundColor]} />
			<SceneContent
				toyRigidBodyRef={toyRigidBodyRef}
				toyPosition={toyPosition}
				toyRotation={toyRotation}
				onSettled={handleSettled}
			/>
		</Canvas>
	);
};
