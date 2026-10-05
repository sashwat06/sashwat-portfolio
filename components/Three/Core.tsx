"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Core() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

 useFrame((state, delta) => {
  if (!groupRef.current || !coreRef.current) return;

  const mouseX = state.pointer.x;
  const mouseY = state.pointer.y;

  // Normal rotation
  groupRef.current.rotation.y += delta * 0.25;
  groupRef.current.rotation.x += delta * 0.08;

  // Mouse interaction
  groupRef.current.rotation.y +=
    (mouseX * 0.15 - groupRef.current.rotation.y) * 0.01;

  groupRef.current.rotation.x +=
    (-mouseY * 0.1 - groupRef.current.rotation.x) * 0.01;

  // Core rotation
  coreRef.current.rotation.x += delta * 0.5;
  coreRef.current.rotation.y += delta * 0.8;

  // Floating movement
  groupRef.current.position.y =
    Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
});

  return (
    <group ref={groupRef}>

      {/* Main Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.8, 2]} />

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={3}
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh scale={0.55}>
        <sphereGeometry args={[0.8, 32, 32]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Orbital Ring 1 */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.25, 0.012, 16, 100]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.55, 0.01, 16, 100]} />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbital Ring 3 */}
      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[1.85, 0.008, 16, 100]} />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Floating Node - Top */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />

        <meshBasicMaterial color="#22d3ee" />
      </mesh>

      {/* Floating Node - Right */}
      <mesh position={[1.8, 0, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />

        <meshBasicMaterial color="#3b82f6" />
      </mesh>

      {/* Floating Node - Left */}
      <mesh position={[-1.8, 0, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />

        <meshBasicMaterial color="#8b5cf6" />
      </mesh>

      {/* Floating Node - Bottom */}
      <mesh position={[0, -1.8, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />

        <meshBasicMaterial color="#22d3ee" />
      </mesh>

    </group>
  );
}