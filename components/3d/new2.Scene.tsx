import Container from "@/components/layout/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DataPair } from "@/components/DataPair";
import { P } from "@/components/typography/TextElements";
import React, { useState, useRef, useCallback, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody, RigidBodyApi } from "@react-three/rapier";
import { SoftShadows, Html } from "@react-three/drei";
import { H1 } from "@/components/typography/Headings";
import { useTheme } from "next-themes";
import { Perf } from "r3f-perf";

// Import your existing components
import { CameraTracker } from "./CameraTracker";
import { Toy } from "./Toy";
import { Ground } from "./Ground";
import { SpotlightTracker } from "./SpotlightTracker";
import { Wall } from "./Wall";

// Refined physics for 2-3 bounces then quick settle
const PHYSICS_CONFIG = {
	gravity: [0, -25, 0] as [number, number, number], // Strong gravity for decisive drops
	settling: {
		velocityThreshold: 0.05,
		angularThreshold: 0.1,
		settledFrames: 60, // 1 second of stillness
		maxSettleTime: 4000, // 4 seconds max
	},
	initial: {
		dropHeight: 3, // Fixed height for consistent behavior
		minimalSpin: 0.3, // Very gentle rotation
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
			focus: 0.5,
			// bias: -0.0001,
		},
	},
} as const;

// Simplified physics monitor focused on detecting settlement
interface PhysicsMonitorProps {
	rigidBodyRef: React.RefObject<RigidBodyApi>;
	onSettled: () => void;
}

const PhysicsMonitor: React.FC<PhysicsMonitorProps> = React.memo(
	({ rigidBodyRef, onSettled }) => {
		const stillFrames = useRef(0);
		const hasSettled = useRef(false);
		const startTime = useRef(Date.now());
		const lastPositionY = useRef<number | null>(null);
		const bounceCount = useRef(0);

		useFrame(() => {
			if (hasSettled.current || !rigidBodyRef.current) return;

			const body = rigidBodyRef.current;
			const position = body.translation();
			const linvel = body.linvel();
			const angvel = body.angvel();

			// Track bounces by detecting upward velocity after being near ground
			if (
				lastPositionY.current !== null &&
				position.y < 0.3 &&
				linvel.y > 0.5
			) {
				bounceCount.current++;

				// After 2 bounces, apply extra damping
				if (bounceCount.current >= 2) {
					body.setLinvel(
						{
							x: linvel.x * 0.2,
							y: linvel.y * 0.3,
							z: linvel.z * 0.2,
						},
						true,
					);
					body.setAngvel(
						{
							x: angvel.x * 0.1,
							y: angvel.y * 0.1,
							z: angvel.z * 0.1,
						},
						true,
					);
				}
			}
			lastPositionY.current = position.y;

			// Calculate velocities
			const linearSpeed = Math.sqrt(
				linvel.x ** 2 + linvel.y ** 2 + linvel.z ** 2,
			);
			const angularSpeed = Math.sqrt(
				angvel.x ** 2 + angvel.y ** 2 + angvel.z ** 2,
			);

			// Check if settled
			const isStill =
				linearSpeed < PHYSICS_CONFIG.settling.velocityThreshold &&
				angularSpeed < PHYSICS_CONFIG.settling.angularThreshold &&
				position.y < 0.2; // Must be on ground

			if (isStill) {
				stillFrames.current++;

				if (stillFrames.current >= PHYSICS_CONFIG.settling.settledFrames) {
					// Complete stop
					body.setLinvel({ x: 0, y: 0, z: 0 }, true);
					body.setAngvel({ x: 0, y: 0, z: 0 }, true);
					body.sleep();
					hasSettled.current = true;
					onSettled();
				}
			} else {
				stillFrames.current = 0;
			}

			// Force settle after max time or 3 bounces
			const elapsedTime = Date.now() - startTime.current;
			if (
				elapsedTime > PHYSICS_CONFIG.settling.maxSettleTime ||
				bounceCount.current >= 3
			) {
				body.setLinvel({ x: 0, y: 0, z: 0 }, true);
				body.setAngvel({ x: 0, y: 0, z: 0 }, true);
				body.sleep();
				hasSettled.current = true;
				onSettled();
			}
		});

		return null;
	},
);

PhysicsMonitor.displayName = "PhysicsMonitor";

// Ground wrapper with proper physics
const GroundWrapper: React.FC = () => (
	<RigidBody
		type="fixed"
		restitution={0.05} // Almost no bounce from ground
		friction={1.0} // Maximum friction
	>
		<Ground />
	</RigidBody>
);

// Wall wrapper
const WallWrapper: React.FC = () => (
	<RigidBody type="fixed" friction={0.8}>
		<Wall />
	</RigidBody>
);

// Scene content
interface SceneContentProps {
	toyRigidBodyRef: React.RefObject<RigidBodyApi>;
	onSettled: () => void;
}

const SceneContent: React.FC<SceneContentProps> = React.memo(
	({ toyRigidBodyRef, onSettled }) => {
		// Simple, clean initial position
		const toyPosition = useMemo<[number, number, number]>(
			() => [
				1, 2,
				3,

				// 0, PHYSICS_CONFIG.initial.dropHeight, 0
			],
			[],
		);

		// Minimal initial rotation for elegance
		const toyRotation = useMemo<[number, number, number]>(
			() => [
				Math.PI / -4,
				Math.random() * 1.5,
				0,
				// Math.random() * PHYSICS_CONFIG.initial.minimalSpin,
				// Math.random() * Math.PI * 2,
				// Math.random() * PHYSICS_CONFIG.initial.minimalSpin,
			],
			[],
		);

		// Very subtle initial velocities
		const linearVelocity = useMemo<[number, number, number]>(
			() => [0, 0, 0], // Let gravity do all the work
			[],
		);

		const angularVelocity = useMemo<[number, number, number]>(
			() => [
				(Math.random() - 0.5) * 0.5,
				(Math.random() - 0.5) * 0.5,
				(Math.random() - 0.5) * 0.5,
			],
			[],
		);

		return (
			<>
				<SoftShadows {...VISUAL_CONFIG.lighting.shadows} />
				<CameraTracker targetRef={toyRigidBodyRef} />
				<ambientLight intensity={VISUAL_CONFIG.lighting.ambient} />

				<Physics
					gravity={PHYSICS_CONFIG.gravity}
					timeStep="vary"
					interpolate={true}
				>
					<WallWrapper />
					<GroundWrapper />

					<Toy
						ref={toyRigidBodyRef}
						position={toyPosition}
						rotation={toyRotation}
						linearVelocity={linearVelocity}
						angularVelocity={angularVelocity}
						// Override default physics properties for quass={2.0}
						restitution={0.1}
						friction={1.0}
						linearDamping={2.5}
						angularDamping={5.0}
					/>

					<PhysicsMonitor
						rigidBodyRef={toyRigidBodyRef}
						onSettled={onSettled}
					/>
				</Physics>

				<SpotlightTracker targetRef={toyRigidBodyRef} />
			</>
		);
	},
);

SceneContent.displayName = "SceneContent";

export const Scene: React.FC = () => {
	const [isSettled, setIsSettled] = useState(false);
	const toyRigidBodyRef = useRef<RigidBodyApi>(null);
	const { theme } = useTheme();

	const handleSettled = useCallback(() => {
		console.log("Toy settled after drop");
		requestAnimationFrame(() => {
			setIsSettled(true);
		});
	}, []);

	const backgroundColor = useMemo(
		() => (theme === "light" ? "#fafafa" : "#0a0a0a"),
		[theme],
	);

	return (
		<>
			<Canvas
				shadows
				camera={VISUAL_CONFIG.camera}
				frameloop={isSettled ? "never" : "always"} // Changed from "demand" to "never"
				dpr={[1, 2]}
				performance={{ min: 0.5 }}
				gl={{
					antialias: true,
					alpha: false,
					powerPreference: "high-performance",
					toneMapping: 1,
				}}
			>
				<color attach="background" args={[backgroundColor]} />

				<SceneContent
					toyRigidBodyRef={toyRigidBodyRef}
					onSettled={handleSettled}
				/>
			</Canvas>

			<HtmlContent />
		</>
	);
};

function HtmlContent() {
	return (
		<>
			{/* <Html> */}
			<Container
				className={cn(
					"absolute z-10",
					// "mix-blend-difference md:mix-blend-normal",
					"flex flex-col justify-end w-full bottom-30 ml-[1em]",
					// "bg-black"
					"backdrop-blur-xl",
					"h-min w-min",
					"p-[1em] rounded-md border-[var(--base-4)]/20 border shadow-sm",
				)}
			>
				<H1 className={cn("w-[13ch] mb-2 xxs:mb-12 text-[var(--base-12)]")}>
					Design Engineer & Strategist
				</H1>

				<P className={cn("max-w-[30ch] xxs:block text-[var(--base-12)]")}>
					Crafting digital experiences where precision meets elegance. Currently
					exploring AI-enhanced design systems.
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

				<Button size="sm" variant="cheese" className={cn("w-min")}>
					<Link href="mailto:natcha@pradap.pet">Contact →</Link>
				</Button>
			</Container>
			{/* </Html> */}
		</>
	);
}
