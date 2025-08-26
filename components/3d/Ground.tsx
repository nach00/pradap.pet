import { RigidBody } from "@react-three/rapier";

export function Ground() {
	return (
		<RigidBody type="fixed" colliders="cuboid">
			<mesh position={[0, -0.5, 0]} receiveShadow>
				<boxGeometry args={[100, 1, 100]} />
				<meshLambertMaterial transparent opacity={0} />
			</mesh>
		</RigidBody>
	);
}
