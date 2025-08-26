'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RapierRigidBody } from '@react-three/rapier'
import * as THREE from 'three'

interface DynamicSpotlightProps {
  target: React.RefObject<RapierRigidBody>
}

export function DynamicSpotlight({ target }: DynamicSpotlightProps) {
  const spotlightRef = useRef<THREE.SpotLight>(null)
  
  useFrame(() => {
    if (!spotlightRef.current || !target.current) return
    
    const targetPosition = target.current.translation()
    
    // Position spotlight above and slightly offset from the toy
    spotlightRef.current.position.set(
      targetPosition.x + 2,
      targetPosition.y + 8,
      targetPosition.z + 3
    )
    
    // Point the spotlight at the toy
    spotlightRef.current.target.position.set(
      targetPosition.x,
      targetPosition.y,
      targetPosition.z
    )
    
    // Update the target
    spotlightRef.current.target.updateMatrixWorld()
  })
  
  return (
    <spotLight
      ref={spotlightRef}
      intensity={4.0}
      angle={0.4}
      penumbra={0.3}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      color="#ffffff"
    />
  )
}