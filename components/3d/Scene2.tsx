"use client";
import React, {
	useState,
	useMemo,
	useEffect,
	useRef,
	useLayoutEffect,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Leva } from "leva";
import { ActionFigure } from "./ActionFigure";
import { Ground } from "./Ground";
import { CameraControls } from "./CameraControls";
import * as THREE from "three";

/**
 * Defines the structure for camera settings to ensure type safety.
 */
interface CameraSettings {
	position: [number, number, number];
	fov: number;
}

const sceneConfig = {
	camera: {
		// Default settings for larger screens
		default: {
			position: [0, 5, 10] as [number, number, number],
			fov: 75,
		},
		// Settings for mobile screens (max-width: 500px)
		mobile: {
			position: [0, 5, 10] as [number, number, number],
			fov: 75,
		},
	},
	mobileBreakpoint: 500, // The width (in px) to switch to mobile camera
};

// --- Leva Controls Definition ---
// This hook creates the GUI panel to control the camera settings.
// The values are initialized with the last settings we configured.
const useCameraControls = () => {
	const controls = useControls({
		"Camera Settings": folder({
			Desktop: folder({
				desktop_fov: { value: 25, min: 10, max: 100, step: 1 },
				desktop_position: { value: { x: 7, y: 3, z: 13 }, step: 0.1 },
			}),
			Mobile: folder({
				mobile_fov: { value: 40, min: 10, max: 100, step: 1 },
				mobile_position: { value: { x: 3, y: 12, z: 5 }, step: 0.1 },
			}),
		}),
	});
	return controls;
};

// Define the camera properties for both layouts
const DESKTOP_PROPS = { position: new THREE.Vector3(7, 3, 13), fov: 50 };
const MOBILE_PROPS = { position: new THREE.Vector3(-5, 12, 5), fov: 40 };

// Define the screen width breakpoint
const MOBILE_BREAKPOINT = 500;

export function ResponsiveCamera() {
	const cameraRef = useRef();
	const [targetProps, setTargetProps] = useState(DESKTOP_PROPS);

	// Set the target camera properties based on screen size
	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < MOBILE_BREAKPOINT + 1) {
				setTargetProps(MOBILE_PROPS);
			} else {
				setTargetProps(DESKTOP_PROPS);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Set the initial state on mount

		// Cleanup the event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Animate the camera to the target properties on each frame
	useFrame(() => {
		if (!cameraRef.current) return;

		// Smoothly interpolate (lerp) the camera's position
		cameraRef.current.position.lerp(targetProps.position, 0.05);

		// Smoothly interpolate the camera's field of view
		cameraRef.current.fov = THREE.MathUtils.lerp(
			cameraRef.current.fov,
			targetProps.fov,
			0.05,
		);

		// This is crucial: you must update the projection matrix after changing the FOV
		cameraRef.current.updateProjectionMatrix();
	});

	return (
		<PerspectiveCamera
			ref={cameraRef}
			makeDefault
			// Set initial props to avoid a "jump" on the first frame
			position={DESKTOP_PROPS.position.toArray()}
			fov={DESKTOP_PROPS.fov}
		/>
	);
}

export default function Scene() {
	// State to hold the current camera settings based on window size
	const [cameraSettings, setCameraSettings] = useState<CameraSettings>(
		sceneConfig.camera.default,
	);

	// Effect to handle window resizing for responsive camera
	useEffect(() => {
		const handleResize = () => {
			const newSettings =
				window.innerWidth <= sceneConfig.mobileBreakpoint
					? sceneConfig.camera.mobile
					: sceneConfig.camera.default;
			setCameraSettings(newSettings);
		};

		handleResize(); // Set initial camera settings on mount
		window.addEventListener("resize", handleResize);

		// Cleanup listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty dependency array ensures this runs only once on mount

	return (
		<>
			<div style={{ width: "100vw", height: "100vh" }}>
				<Canvas
					// camera={cameraSettings}
					camera={{ position: [0, 4, 10], fov: 75 }}
					shadows
					gl={{ alpha: true }}
					style={{ background: "transparent" }}
				>
					{/* Lighting */}
					<ambientLight intensity={0.6} />
					<directionalLight
						position={[10, 20, 8]}
						intensity={3.0}
						castShadow
						shadow-mapSize-width={4096}
						shadow-mapSize-height={4096}
						shadow-camera-far={50}
						shadow-camera-left={-20}
						shadow-camera-right={20}
						shadow-camera-top={20}
						shadow-camera-bottom={-20}
						shadow-bias={-0.0001}
						shadow-normalBias={0.005}
						shadow-radius={8}
						shadow-blurSamples={15}
					/>
					<pointLight position={[3, 8, 4]} intensity={1.0} color="#ffffff" />
					<pointLight position={[-3, 6, -2]} intensity={0.8} color="#ffffff" />
					<spotLight
						position={[-8, 18, 10]}
						intensity={2.0}
						angle={0.4}
						penumbra={0.3}
						castShadow
						shadow-mapSize-width={2048}
						shadow-mapSize-height={2048}
						shadow-bias={-0.0001}
						shadow-radius={6}
						shadow-blurSamples={12}
					/>
					<hemisphereLight groundColor="#8B7355" intensity={0.4} />

					{/* Physics World */}
					<Physics gravity={[0, -9.81, 0]}>
						<Ground />
						<ActionFigure />
					</Physics>

					<ResponsiveCamera />

					{/* Controls */}
					<OrbitControls
						enablePan={false}
						enableZoom={false}
						enableRotate={false}
						makeDefault
					/>

					{/* Camera Controls */}
					{/* <CameraControls /> */}
				</Canvas>
			</div>
			{/* <Leva collapsed={false} oneLineLabels={false} flat={false} /> */}
		</>
	);
}
