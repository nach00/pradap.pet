'use client'

import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useControls, button } from 'leva'
import * as THREE from 'three'

// Helper functions for localStorage persistence
const STORAGE_KEY = 'leva-camera-settings'

const loadSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch (e) {
    console.error('Failed to load camera settings:', e)
    return null
  }
}

const saveSettings = (settings: any) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch (e) {
    console.error('Failed to save camera settings:', e)
  }
}

export function CameraControls() {
  const { camera, controls } = useThree()
  const initialPosition = useRef(camera.position.clone())
  const perspectiveCamera = camera as THREE.PerspectiveCamera
  
  // Store initial defaults
  const initialDefaults = useRef({
    positionX: initialPosition.current.x,
    positionY: initialPosition.current.y,
    positionZ: initialPosition.current.z,
    targetX: 0,
    targetY: 0,
    targetZ: 0,
    fov: perspectiveCamera.fov,
    near: perspectiveCamera.near,
    far: perspectiveCamera.far
  })
  
  // Load saved settings or use defaults
  const savedSettings = loadSettings()
  const defaults = {
    positionX: savedSettings?.positionX ?? initialDefaults.current.positionX,
    positionY: savedSettings?.positionY ?? initialDefaults.current.positionY,
    positionZ: savedSettings?.positionZ ?? initialDefaults.current.positionZ,
    targetX: savedSettings?.targetX ?? initialDefaults.current.targetX,
    targetY: savedSettings?.targetY ?? initialDefaults.current.targetY,
    targetZ: savedSettings?.targetZ ?? initialDefaults.current.targetZ,
    fov: savedSettings?.fov ?? initialDefaults.current.fov,
    near: savedSettings?.near ?? initialDefaults.current.near,
    far: savedSettings?.far ?? initialDefaults.current.far
  }
  
  const [{ positionX, positionY, positionZ, targetX, targetY, targetZ, fov, near, far }, set] = useControls('Camera', () => ({
    positionX: {
      value: defaults.positionX,
      min: -20,
      max: 20,
      step: 0.1,
      label: 'Position X'
    },
    positionY: {
      value: defaults.positionY,
      min: -20,
      max: 20,
      step: 0.1,
      label: 'Position Y'
    },
    positionZ: {
      value: defaults.positionZ,
      min: -20,
      max: 20,
      step: 0.1,
      label: 'Position Z'
    },
    targetX: {
      value: defaults.targetX,
      min: -20,
      max: 20,
      step: 0.1,
      label: 'Look At X'
    },
    targetY: {
      value: defaults.targetY,
      min: -20,
      max: 20,
      step: 0.1,
      label: 'Look At Y'
    },
    targetZ: {
      value: defaults.targetZ,
      min: -20,
      max: 20,
      step: 0.1,
      label: 'Look At Z'
    },
    fov: {
      value: defaults.fov,
      min: 30,
      max: 120,
      step: 1,
      label: 'Field of View'
    },
    near: {
      value: defaults.near,
      min: 0.1,
      max: 10,
      step: 0.1,
      label: 'Near Plane'
    },
    far: {
      value: defaults.far,
      min: 100,
      max: 10000,
      step: 100,
      label: 'Far Plane'
    },
    'Reset Position': button(() => {
      set({
        positionX: initialDefaults.current.positionX,
        positionY: initialDefaults.current.positionY,
        positionZ: initialDefaults.current.positionZ
      })
    }),
    'Reset Look At': button(() => {
      set({
        targetX: initialDefaults.current.targetX,
        targetY: initialDefaults.current.targetY,
        targetZ: initialDefaults.current.targetZ
      })
    }),
    'Reset Camera Settings': button(() => {
      set({
        fov: initialDefaults.current.fov,
        near: initialDefaults.current.near,
        far: initialDefaults.current.far
      })
    }),
    'Reset All': button(() => {
      set({
        positionX: initialDefaults.current.positionX,
        positionY: initialDefaults.current.positionY,
        positionZ: initialDefaults.current.positionZ,
        targetX: initialDefaults.current.targetX,
        targetY: initialDefaults.current.targetY,
        targetZ: initialDefaults.current.targetZ,
        fov: initialDefaults.current.fov,
        near: initialDefaults.current.near,
        far: initialDefaults.current.far
      })
      localStorage.removeItem(STORAGE_KEY)
    })
  }))
  
  // Apply camera settings
  useEffect(() => {
    // Disable OrbitControls if present to prevent conflicts
    if (controls && 'enabled' in controls) {
      (controls as any).enabled = false
    }
    
    camera.position.set(positionX, positionY, positionZ)
    
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = fov
      camera.near = near
      camera.far = far
      camera.updateProjectionMatrix()
    }
    
    // Save settings whenever they change
    saveSettings({ positionX, positionY, positionZ, targetX, targetY, targetZ, fov, near, far })
  }, [camera, controls, positionX, positionY, positionZ, targetX, targetY, targetZ, fov, near, far])
  
  // Use frame to continuously update lookAt (overrides OrbitControls)
  useFrame(() => {
    camera.lookAt(targetX, targetY, targetZ)
  })
  
  return null
}