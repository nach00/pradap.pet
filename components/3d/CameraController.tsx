'use client'

import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { RapierRigidBody } from '@react-three/rapier'
import * as THREE from 'three'

interface CameraControllerProps {
  target: React.RefObject<RapierRigidBody>
  isDragging?: boolean
}

export function CameraController({ target, isDragging }: CameraControllerProps) {
  const { camera, controls } = useThree()
  const [staticCameraPos] = useState(() => {
    // Set static camera position based on screen size
    const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768
    return isDesktop 
      ? new THREE.Vector3(-2, 8, 12) // Desktop: slightly left and elevated
      : new THREE.Vector3(0, 6, 10)  // Mobile: centered
  })
  const smoothedLookAt = useRef(new THREE.Vector3(0, 0, 0))
  
  useFrame(() => {
    if (!target.current) return
    
    const toyPosition = target.current.translation()
    const toyVec = new THREE.Vector3(toyPosition.x, toyPosition.y, toyPosition.z)
    
    // Keep camera in static position
    camera.position.copy(staticCameraPos)
    
    // Only adjust look-at direction to follow toy
    smoothedLookAt.current.lerp(toyVec, 0.05)
    camera.lookAt(smoothedLookAt.current)
    
    // Update OrbitControls target to toy position
    const orbitControls = controls as any
    if (orbitControls?.target && !isDragging) {
      orbitControls.target.copy(smoothedLookAt.current)
      orbitControls.update()
    }
  })
  
  return null
}