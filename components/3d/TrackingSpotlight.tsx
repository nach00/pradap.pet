'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { RapierRigidBody } from '@react-three/rapier'
import { useControls, button } from 'leva'
import * as THREE from 'three'

interface TrackingSpotlightProps {
  target: React.RefObject<RapierRigidBody>
}

const STORAGE_KEY = 'leva-spotlight-settings'

const loadSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch (e) {
    console.error('Failed to load spotlight settings:', e)
    return null
  }
}

const saveSettings = (settings: any) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch (e) {
    console.error('Failed to save spotlight settings:', e)
  }
}

export function TrackingSpotlight({ target }: TrackingSpotlightProps) {
  const spotlightRef = useRef<THREE.SpotLight>(null)
  const targetRef = useRef<THREE.Object3D>(null)
  const { camera } = useThree()
  
  // Store initial defaults
  const initialDefaults = useRef({
    offsetX: 0,
    offsetY: 2,
    offsetZ: 2,
    intensity: 5.0,
    angle: 0.3,
    penumbra: 0.2,
    distance: 30,
    color: '#ffffff'
  })
  
  // Load saved settings or use defaults
  const savedSettings = loadSettings()
  const defaults = {
    offsetX: savedSettings?.offsetX ?? initialDefaults.current.offsetX,
    offsetY: savedSettings?.offsetY ?? initialDefaults.current.offsetY,
    offsetZ: savedSettings?.offsetZ ?? initialDefaults.current.offsetZ,
    intensity: savedSettings?.intensity ?? initialDefaults.current.intensity,
    angle: savedSettings?.angle ?? initialDefaults.current.angle,
    penumbra: savedSettings?.penumbra ?? initialDefaults.current.penumbra,
    distance: savedSettings?.distance ?? initialDefaults.current.distance,
    color: savedSettings?.color ?? initialDefaults.current.color
  }
  
  const [{ offsetX, offsetY, offsetZ, intensity, angle, penumbra, distance, color }, set] = useControls('Spotlight', () => ({
    offsetX: {
      value: defaults.offsetX,
      min: -10,
      max: 10,
      step: 0.1,
      label: 'Offset X'
    },
    offsetY: {
      value: defaults.offsetY,
      min: -10,
      max: 10,
      step: 0.1,
      label: 'Offset Y'
    },
    offsetZ: {
      value: defaults.offsetZ,
      min: -10,
      max: 10,
      step: 0.1,
      label: 'Offset Z'
    },
    intensity: {
      value: defaults.intensity,
      min: 0,
      max: 20,
      step: 0.1,
      label: 'Intensity'
    },
    angle: {
      value: defaults.angle,
      min: 0.1,
      max: 1.5,
      step: 0.01,
      label: 'Angle'
    },
    penumbra: {
      value: defaults.penumbra,
      min: 0,
      max: 1,
      step: 0.01,
      label: 'Penumbra'
    },
    distance: {
      value: defaults.distance,
      min: 5,
      max: 100,
      step: 1,
      label: 'Distance'
    },
    color: {
      value: defaults.color,
      label: 'Color'
    },
    'Reset Spotlight': button(() => {
      set({
        offsetX: initialDefaults.current.offsetX,
        offsetY: initialDefaults.current.offsetY,
        offsetZ: initialDefaults.current.offsetZ,
        intensity: initialDefaults.current.intensity,
        angle: initialDefaults.current.angle,
        penumbra: initialDefaults.current.penumbra,
        distance: initialDefaults.current.distance,
        color: initialDefaults.current.color
      })
      localStorage.removeItem(STORAGE_KEY)
    })
  }))
  
  // Save settings whenever they change
  useEffect(() => {
    saveSettings({ offsetX, offsetY, offsetZ, intensity, angle, penumbra, distance, color })
  }, [offsetX, offsetY, offsetZ, intensity, angle, penumbra, distance, color])
  
  useFrame(() => {
    if (!spotlightRef.current || !target.current || !targetRef.current) return
    
    const toyPosition = target.current.translation()
    
    // Position spotlight behind camera with user-defined offset
    const cameraPos = camera.position
    spotlightRef.current.position.set(
      cameraPos.x + offsetX,
      cameraPos.y + offsetY,
      cameraPos.z + offsetZ
    )
    
    // Update spotlight target to follow toy
    targetRef.current.position.set(
      toyPosition.x,
      toyPosition.y,
      toyPosition.z
    )
    
    // Update the target matrix
    targetRef.current.updateMatrixWorld()
  })
  
  return (
    <>
      <spotLight
        ref={spotlightRef}
        intensity={intensity}
        angle={angle}
        penumbra={penumbra}
        distance={distance}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        color={color}
        target={targetRef.current || undefined}
      />
      <primitive object={new THREE.Object3D()} ref={targetRef} />
    </>
  )
}