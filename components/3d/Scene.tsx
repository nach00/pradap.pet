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

// Refined physics constants for natural, artistic motion
const PHYSICS_CONFIG = {
	gravity: [0, -9.81, 0] as [number, number, number],
	velocityThreshold: 0.005, // More sensitive threshold for subtle movements
	angularThreshold: 0.02, // Separate threshold for rotation
	settledFramesRequired: 120, // ~2 seconds for complete stillness
	minSettleTime: 3000, // Minimum 3 seconds before considering settled
	damping: {
		linear: 0.4, // Subtle linear damping for natural deceleration
		angular: 0.5, // Slightly higher angular damping for controlled spin
	},
	restitution: 0.6, // Bounciness - balanced for natural motion
	friction: 0.7, // Ground friction for realistic sliding
	mass: 1.0, // Standard mass for predictable physics
} as const;

const CAMERA_CONFIG = {
	position: [0, 6, 8] as [number, number, number],
	fov: 50,
} as const;

const LIGHTING_CONFIG = {
	ambient: 0.5,
	shadows: {
		size: 25,
		samples: 10,
		focus: 0,
	},
} as const;

// Enhanced physics monitoring with smooth settling detection
interface PhysicsMonitorProps {
	rigidBodyRef: React.RefObject<RigidBodyApi>;
	onSettled: () => void;
	threshold?: number;
	angularThreshold?: number;
	requiredFrames?: number;
	minSettleTime?: number;
}

const PhysicsMonitor: React.FC<PhysicsMonitorProps> = React.memo(
	({
		rigidBodyRef,
		onSettled,
		threshold = PHYSICS_CONFIG.velocityThreshold,
		angularThreshold = PHYSICS_CONFIG.angularThreshold,
		requiredFrames = PHYSICS_CONFIG.settledFramesRequired,
		minSettleTime = PHYSICS_CONFIG.minSettleTime,
	}) => {
		const settledFramesCount = useRef(0);
		const hasSettled = useRef(false);
		const startTime = useRef(Date.now());
		const lastVelocities = useRef<number[]>([]);
		const velocityHistorySize = 10;

		useFrame(() => {
			if (hasSettled.current || !rigidBodyRef.current) return;

			const currentTime = Date.now();
			const elapsedTime = currentTime - startTime.current;

			// Don't consider settled until minimum time has passed
			if (elapsedTime < minSettleTime) {
				return;
			}

			const linvel = rigidBodyRef.current.linvel();
			const angvel = rigidBodyRef.current.angvel();

			// Calculate linear and angular velocities separately for fine control
			const linearVelocitySquared =
				linvel.x ** 2 + linvel.y ** 2 + linvel.z ** 2;

			const angularVelocitySquared =
				angvel.x ** 2 + angvel.y ** 2 + angvel.z ** 2;

			// Track velocity history for smooth settling detection
			const currentVelocity = Math.sqrt(
				linearVelocitySquared + angularVelocitySquared,
			);
			lastVelocities.current.push(currentVelocity);
			if (lastVelocities.current.length > velocityHistorySize) {
				lastVelocities.current.shift();
			}

			// Calculate average velocity over recent frames
			const avgVelocity =
				lastVelocities.current.reduce((a, b) => a + b, 0) /
				lastVelocities.current.length;

			// Check if both linear and angular velocities are below their thresholds
			const isLinearSettled = linearVelocitySquared < threshold ** 2;
			const isAngularSettled = angularVelocitySquared < angularThreshold ** 2;
			const isAverageSettled = avgVelocity < threshold * 2;

			if (isLinearSettled && isAngularSettled && isAverageSettled) {
				settledFramesCount.current++;

				// Progressive settling - require more frames as time goes on
				const dynamicRequiredFrames = Math.min(
					requiredFrames,
					Math.floor(requiredFrames * (elapsedTime / minSettleTime) * 0.5),
				);

				if (settledFramesCount.current >= dynamicRequiredFrames) {
					hasSettled.current = true;
					onSettled();
				}
			} else {
				// Reset counter but with dampening to prevent jitter
				settledFramesCount.current = Math.max(
					0,
					settledFramesCount.current - 2,
				);
			}
		});

		return null;
	},
);

PhysicsMonitor.displayName = "PhysicsMonitor";

// Enhanced Toy wrapper with physics properties
interface EnhancedToyProps {
	position: [number, number, number];
	rotation: [number, number, number];
	rigidBodyRef: React.RefObject<RigidBodyApi>;
}

const EnhancedToy: React.FC<EnhancedToyProps> = React.forwardRef(
	({ position, rotation }, ref) => {
		// Apply subtle initial velocity for more interesting drop
		const initialVelocity = useMemo(
			() => ({
				x: (Math.random() - 0.5) * 0.5, // Slight horizontal movement
				y: -2, // Downward initial velocity
				z: (Math.random() - 0.5) * 0.5,
			}),
			[],
		);

		const initialAngularVelocity = useMemo(
			() => ({
				x: (Math.random() - 0.5) * 2,
				y: (Math.random() - 0.5) * 3,
				z: (Math.random() - 0.5) * 2,
			}),
			[],
		);

		return (
			<Toy
				ref={ref}
				position={position}
				rotation={rotation}
				// These props would need to be supported by your Toy component
				// You may need to wrap Toy with RigidBody from Rapier
				restitution={PHYSICS_CONFIG.restitution}
				friction={PHYSICS_CONFIG.friction}
				linearDamping={PHYSICS_CONFIG.damping.linear}
				angularDamping={PHYSICS_CONFIG.damping.angular}
				mass={PHYSICS_CONFIG.mass}
				linearVelocity={initialVelocity}
				angularVelocity={initialAngularVelocity}
			/>
		);
	},
);

EnhancedToy.displayName = "EnhancedToy";

// Scene content with enhanced physics
interface SceneContentProps {
	toyRigidBodyRef: React.RefObject<RigidBodyApi>;
	toyPosition: [number, number, number];
	toyRotation: [number, number, number];
	onSettled: () => void;
}

const SceneContent: React.FC<SceneContentProps> = React.memo(
	({ toyRigidBodyRef, toyPosition, toyRotation, onSettled }) => (
		<>
			<SoftShadows {...LIGHTING_CONFIG.shadows} />
			<CameraTracker targetRef={toyRigidBodyRef} />
			<ambientLight intensity={LIGHTING_CONFIG.ambient} />

			<Physics
				gravity={PHYSICS_CONFIG.gravity}
				timeStep="vary" // Variable timestep for smoother motion
				interpolate={true} // Interpolation for visual smoothness
			>
				<Wall />
				<Ground
					// Enhanced ground properties for better interaction
					restitution={0.3} // Less bouncy ground
					friction={0.8} // Higher friction for natural rolling
				/>
				<EnhancedToy
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

// Main Scene component with refined animation
export const Scene: React.FC = () => {
	const [isSettled, setIsSettled] = useState(false);
	const toyRigidBodyRef = useRef<RigidBodyApi>(null);
	const { theme } = useTheme();

	// More interesting initial positions for dramatic drop
	const initialPosition = useMemo<[number, number, number]>(
		() => [
			1, 2,
			3,
			// (Math.random() - 0.5) * 2, // Random X between -1 and 1
			// 4 + Math.random() * 2, // Random Y between 4 and 6
			// (Math.random() - 0.5) * 1.5, // Random Z for depth variation
		],
		[],
	);

	// Varied initial rotation for unique drops
	const initialRotation = useMemo<[number, number, number]>(
		() => [
			1,
			2 + Math.random() * 1.5,
			-3,
			// Math.random() * Math.PI * 2,
			// Math.random() * Math.PI * 2,
			// Math.random() * Math.PI * 2,
		],
		[],
	);

	const [toyPosition, setToyPosition] = useState<[number, number, number]>([
		0, 5, 0,
	]);
	const [toyRotation, setToyRotation] = useState<[number, number, number]>([
		0, 0, 0,
	]);

	// Initialize positions on mount
	useEffect(() => {
		setToyPosition(initialPosition);
		setToyRotation(initialRotation);
	}, [initialPosition, initialRotation]);

	// Smooth settling callback
	const handleSettled = useCallback(() => {
		// Add a small delay for visual polish
		setTimeout(() => {
			setIsSettled(true);
		}, 100);
	}, []);

	// Memoized background color
	const backgroundColor = useMemo(
		() => (theme === "light" ? "white" : "black"),
		[theme],
	);

	return (
		<Canvas
			shadows
			camera={CAMERA_CONFIG}
			frameloop={isSettled ? "demand" : "always"}
			dpr={[1, 2]}
			performance={{ min: 0.5 }}
			gl={{
				antialias: true,
				alpha: false,
				powerPreference: "high-performance",
			}}
		>
			{/* <Perf className="translate-y-40 -translate-x-40 scale-200" /> */}
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
